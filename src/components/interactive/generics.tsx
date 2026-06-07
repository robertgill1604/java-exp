"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function GenericsSim() {
  const [type, setType] = useState<"unbounded" | "bounded" | "wildcard">("unbounded");
  const [log, setLog] = useState<string[]>([]);

  const demo = () => {
    const lines: string[] = [];
    if (type === "unbounded") {
      lines.push("List<Integer> ints = new ArrayList<>();");
      lines.push("List<String> strs = new ArrayList<>();");
      lines.push("List raw = ints;  // raw type — warning!");
      lines.push("raw.add(\"hello\");  // legal but unsafe");
      lines.push("// After type erasure at runtime:");
      lines.push("//   List<Integer>  and  List<String>  are both just  List");
      lines.push("System.out.println(ints.getClass() == strs.getClass());  // true");
    } else if (type === "bounded") {
      lines.push("class Box<T extends Number> {");
      lines.push("  T value;");
      lines.push("  double reciprocal() { return 1.0 / value.doubleValue(); }");
      lines.push("}");
      lines.push("// T is restricted to Number subtypes —");
      lines.push("// compiler can call .doubleValue() safely");
      lines.push("// Box<String> s = new Box<>();  // compile error");
    } else {
      lines.push("void printList(List<?> list) {");
      lines.push("  for (Object o : list) System.out.println(o);");
      lines.push("}");
      lines.push("// ? = unknown type, read-only");
      lines.push("// list.add(\"x\");  // compile error");
    }
    setLog(lines);
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Generics provide type safety. At runtime, the type parameter is <strong>erased</strong>.</p>
      <div className="flex flex-wrap gap-2">
        {(["unbounded", "bounded", "wildcard"] as const).map(t => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-3 py-1.5 text-xs rounded-md border transition ${
              type === t ? "border-primary bg-primary/10 text-primary" : "border-border/40 hover:border-primary/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <Button onClick={demo}>Show code</Button>
      {log.length > 0 && (
        <pre className="p-3 rounded-md bg-zinc-950 text-emerald-400 text-xs font-mono border border-emerald-500/20 whitespace-pre-wrap">
          {log.join("\n")}
        </pre>
      )}
    </div>
  );
}
