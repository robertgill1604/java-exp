"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { CodeBlock as CodeBlockType } from "@/data/types";

function highlightJava(code: string): string {
  const keywords = ["public", "private", "protected", "static", "final", "class", "interface", "extends", "implements", "void", "int", "double", "float", "char", "boolean", "long", "short", "byte", "return", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "new", "this", "super", "try", "catch", "finally", "throw", "throws", "import", "package", "abstract", "synchronized", "volatile", "transient", "instanceof", "enum", "null", "true", "false"];
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Single-pass regex with alternation: each alternative captures one token type.
  // Replacer dispatches based on which group matched, so later tokens
  // never re-match inside already-replaced content.
  const tokenRegex = new RegExp(
    [
      '"(?:[^"\\\\]|\\\\.)*"',     // 1: string
      "//[^\\n]*",                  // 2: line comment
      "/\\*[\\s\\S]*?\\*/",         // 3: block comment
      "\\b\\d+\\.?\\d*\\b",         // 4: number
      "@\\w+",                      // 5: annotation
      "\\b[A-Z][A-Za-z0-9_]*\\b",   // 6: type
      `\\b(?:${keywords.join("|")})\\b`, // 7: keyword
    ].join("|"),
    "g"
  );

  return escape(code).replace(tokenRegex, (match) => {
    if (match.startsWith("//") || match.startsWith("/*")) return `<span class="com">${match}</span>`;
    if (match.startsWith("\"") || match.startsWith("&quot;")) return `<span class="str">${match}</span>`;
    if (match.startsWith("@")) return `<span class="ann">${match}</span>`;
    if (/^\d/.test(match)) return `<span class="num">${match}</span>`;
    if (/^[A-Z]/.test(match)) return `<span class="type">${match}</span>`;
    return `<span class="kw">${match}</span>`;
  });
}

export function CodeBlock({ block }: { block: CodeBlockType }) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(block.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="rounded-lg border border-border/60 overflow-hidden bg-zinc-950 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-900/60">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-zinc-400 font-mono">{block.language}</span>
        </div>
        <Button size="sm" variant="ghost" onClick={onCopy} className="h-7 text-zinc-400 hover:text-white">
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        </Button>
      </div>
      {block.caption && (
        <div className="px-4 py-1.5 text-xs text-zinc-400 border-b border-white/5 bg-zinc-900/30 italic">
          {block.caption}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
        <code dangerouslySetInnerHTML={{ __html: highlightJava(block.code) }} />
      </pre>
    </div>
  );
}
