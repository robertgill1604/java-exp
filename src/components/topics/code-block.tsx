"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { CodeBlock as CodeBlockType } from "@/data/types";

function highlightJava(code: string): string {
  const keywords = ["public", "private", "protected", "static", "final", "class", "interface", "extends", "implements", "void", "int", "double", "float", "char", "boolean", "long", "short", "byte", "return", "if", "else", "for", "while", "do", "switch", "case", "break", "continue", "new", "this", "super", "try", "catch", "finally", "throw", "throws", "import", "package", "abstract", "synchronized", "volatile", "transient", "instanceof", "enum", "null", "true", "false"];
  const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  let html = escape(code);
  // strings first
  html = html.replace(/("([^"\\]|\\.)*")/g, '<span class="str">$1</span>');
  // comments
  html = html.replace(/(\/\/[^\n]*)/g, '<span class="com">$1</span>');
  html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="com">$1</span>');
  // numbers
  html = html.replace(/\b(\d+\.?\d*)\b/g, '<span class="num">$1</span>');
  // annotations
  html = html.replace(/(@\w+)/g, '<span class="ann">$1</span>');
  // types (capitalized)
  html = html.replace(/\b([A-Z][A-Za-z0-9_]*)\b/g, '<span class="type">$1</span>');
  // keywords
  const kwRegex = new RegExp(`\\b(${keywords.join("|")})\\b`, "g");
  html = html.replace(kwRegex, '<span class="kw">$1</span>');
  return html;
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
