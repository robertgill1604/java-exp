"use client";
import Link from "next/link";
import { BookOpen, Code2, GraduationCap, BarChart3, Sparkles, Layers, Zap } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="flex flex-col leading-none">
            <span>Java Exam Master</span>
            <span className="text-[10px] font-normal text-muted-foreground">University Prep · 5 Units · 47 Topics</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-3 py-2 text-sm font-medium hover:text-primary transition flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" /> Dashboard
          </Link>
          <Link href="/units" className="px-3 py-2 text-sm font-medium hover:text-primary transition flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" /> Units
          </Link>
          <Link href="/exam-writer" className="px-3 py-2 text-sm font-medium hover:text-primary transition flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5" /> Exam Writer
          </Link>
          <Link href="/revision" className="px-3 py-2 text-sm font-medium hover:text-primary transition flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> Revision
          </Link>
          <Link href="/progress" className="px-3 py-2 text-sm font-medium hover:text-primary transition flex items-center gap-1.5">
            <BarChart3 className="h-3.5 w-3.5" /> Progress
          </Link>
          <Link href="/exam-mode" className="ml-2">
            <Badge variant="default" className="bg-gradient-to-r from-red-500 to-orange-500 text-white gap-1">
              <Zap className="h-3 w-3" /> Tomorrow Mode
            </Badge>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
