export function formatJavaCode(code: string): string {
  if (!code || code.includes("\n")) return code;

  const raw = tokenize(code);
  const tokens = splitMergedGenerics(raw);
  return prettyPrint(tokens);
}

function splitMergedGenerics(tokens: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t === ">>" || t === ">>>") {
      const prev = i > 0 ? tokens[i - 1] : "";
      const next = i + 1 < tokens.length ? tokens[i + 1] : "";
      const looksLikeGenericClose = isIdent(prev) || prev === ">" || prev === "?" || prev === ")";
      const looksLikeGenericFollow = isIdent(next) || next === "(" || next === ">" || next === "?" || next === "extends" || next === "super" || next === "{" || next === "," || next === "&" || next === "[";
      if (looksLikeGenericClose && looksLikeGenericFollow) {
        for (let k = 0; k < t.length; k++) result.push(">");
        continue;
      }
    }
    result.push(t);
  }
  return result;
}

function tokenize(code: string): string[] {
  const tokens: string[] = [];
  let i = 0;
  const n = code.length;

  const twoOps = new Set([
    "==", "!=", "<=", ">=", "&&", "||", "++", "--",
    "+=", "-=", "*=", "/=", "%=", "&=", "|=", "^=",
    "->", "::", "<<", ">>", ">>>",
  ]);

  while (i < n) {
    const c = code[i];

    if (/\s/.test(c)) { i++; continue; }

    if (c === "/" && code[i + 1] === "/") {
      let j = i;
      while (j < n && code[j] !== "\n") j++;
      tokens.push(code.substring(i, j));
      i = j;
      continue;
    }

    if (c === "/" && code[i + 1] === "*") {
      let j = i + 2;
      while (j < n - 1 && !(code[j] === "*" && code[j + 1] === "/")) j++;
      tokens.push(code.substring(i, Math.min(j + 2, n)));
      i = Math.min(j + 2, n);
      continue;
    }

    if (c === '"' || c === "'") {
      const quote = c;
      let j = i + 1;
      while (j < n && code[j] !== quote) {
        if (code[j] === "\\") j++;
        j++;
      }
      tokens.push(code.substring(i, Math.min(j + 1, n)));
      i = Math.min(j + 1, n);
      continue;
    }

    const two = code.substring(i, i + 2);
    if (twoOps.has(two)) {
      tokens.push(two);
      i += 2;
      continue;
    }

    if ("{}()[];,.?@".includes(c)) {
      tokens.push(c);
      i++;
      continue;
    }

    if ("+-*/%=<>!&|^~".includes(c)) {
      tokens.push(c);
      i++;
      continue;
    }

    if (/[a-zA-Z0-9_$]/.test(c)) {
      let j = i;
      while (j < n && /[a-zA-Z0-9_$]/.test(code[j])) j++;
      tokens.push(code.substring(i, j));
      i = j;
      continue;
    }

    tokens.push(c);
    i++;
  }

  return tokens;
}

function isIdent(t: string): boolean {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(t);
}

function isGenericOpen(tokens: string[], i: number, genericDepth: number): boolean {
  if (genericDepth > 0) return true;
  const prev = i > 0 ? tokens[i - 1] : "";
  if (!isIdent(prev) && prev !== ">" && prev !== "?") return false;

  // Look ahead to find matching > and check what comes after it
  let depth = 0;
  for (let j = i; j < tokens.length; j++) {
    const tj = tokens[j];
    if (tj === "<") depth++;
    else if (tj === ">") {
      depth--;
      if (depth === 0) {
        const after = j + 1 < tokens.length ? tokens[j + 1] : "";
        return isIdent(after) || after === "(" || after === ">" || after === "?" || after === "extends" || after === "super" || after === "{";
      }
    } else if (tj === ";" || tj === "{" && depth > 0) {
      return false;
    }
  }
  return false;
}

function isGenericClose(tokens: string[], i: number, genericDepth: number): boolean {
  if (genericDepth > 0) return true;
  // Look back to find matching < and verify it was generic
  let depth = 0;
  for (let j = i; j >= 0; j--) {
    const tj = tokens[j];
    if (tj === ">") depth++;
    else if (tj === "<") {
      depth--;
      if (depth === 0) {
        return isGenericOpen(tokens, j, 0);
      }
    }
  }
  return false;
}

function isUnaryContext(tokens: string[], i: number): boolean {
  const prev = i > 0 ? tokens[i - 1] : "";
  return (
    prev === "" ||
    prev === "=" ||
    prev === "(" ||
    prev === "[" ||
    prev === "," ||
    prev === ";" ||
    prev === "?" ||
    prev === ":" ||
    prev === "{" ||
    prev === "}" ||
    prev === "return" ||
    prev === "throw" ||
    prev === "case"
  );
}

function prettyPrint(tokens: string[]): string {
  const out: string[] = [];
  let depth = 0;
  let parens = 0;
  let genericDepth = 0;
  let lineStart = true;
  let prev = "";

  const NO_SPACE_BEFORE = new Set([")", ",", ".", ";", "]", "}", "(", "++", "--", "["]);
  const NO_SPACE_AFTER = new Set(["(", "[", ".", "@", "::", "++", "--"]);
  const SPACE_AFTER = new Set(["if", "for", "while", "switch", "catch", "synchronized", "return", "throw", "new"]);

  let suppressSpaceNext = false;

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];

    if (t === "}") {
      if (depth > 0) depth--;
      if (out.length && !out[out.length - 1].endsWith("\n")) out.push("\n");
      out.push("  ".repeat(depth) + "}");
      out.push("\n");
      lineStart = true;
      prev = t;
      suppressSpaceNext = false;
      continue;
    }

    if (t === "{") {
      if (out.length && !out[out.length - 1].endsWith("\n")) {
        if (!out[out.length - 1].endsWith(" ")) out.push(" ");
      }
      out.push("{");
      out.push("\n");
      depth++;
      lineStart = true;
      prev = t;
      suppressSpaceNext = false;
      continue;
    }

    if (t === ";") {
      out.push(";");
      if (parens === 0) {
        out.push("\n");
        lineStart = true;
      }
      prev = ";";
      suppressSpaceNext = false;
      continue;
    }

    if (t === "(") parens++;
    if (t === ")") parens--;

    const wasSuppress = suppressSpaceNext;
    suppressSpaceNext = false;

    if (lineStart) {
      out.push("  ".repeat(depth));
      lineStart = false;
    } else if (wasSuppress) {
      // no space (suppressed by previous unary operator)
    } else if (t === "<" && isGenericOpen(tokens, i, genericDepth)) {
      // no space before generic <
    } else if (t === ">" && isGenericClose(tokens, i, genericDepth)) {
      // no space before generic >
    } else if (prev === "<" && isIdent(t) && i >= 2 && isGenericOpen(tokens, i - 1, genericDepth)) {
      // no space after generic < (e.g., <String)
    } else if ((t === "-" || t === "+") && isUnaryContext(tokens, i)) {
      // no space: x = -1
    } else if (
      !NO_SPACE_BEFORE.has(t) &&
      !NO_SPACE_AFTER.has(prev) &&
      !prev.endsWith(" ")
    ) {
      out.push(" ");
    } else if (NO_SPACE_BEFORE.has(t) && SPACE_AFTER.has(prev) && t === "(") {
      out.push(" ");
    }

    if (t === "<" && isGenericOpen(tokens, i, genericDepth)) genericDepth++;
    if (t === ">" && isGenericClose(tokens, i, genericDepth) && genericDepth > 0) genericDepth--;

    out.push(t);
    prev = t;

    if ((t === "-" || t === "+") && isUnaryContext(tokens, i)) {
      suppressSpaceNext = true;
    }
  }

  return out
    .join("")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
