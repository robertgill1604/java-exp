"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Layers } from "lucide-react";
import { units } from "@/data";
import { cn } from "@/lib/utils";

export function SiteSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden lg:block w-64 shrink-0 border-r border-border/40 bg-card/30">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-4 space-y-1">
        <h3 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Layers className="h-3.5 w-3.5" /> Syllabus
        </h3>
        {units.map(unit => (
          <UnitAccordion key={unit.id} unit={unit} pathname={pathname || ""} />
        ))}
      </div>
    </aside>
  );
}

function UnitAccordion({ unit, pathname }: { unit: typeof units[number]; pathname: string }) {
  const [open, setOpen] = useState(pathname.includes(unit.slug));
  const isActive = pathname.includes(unit.slug);
  return (
    <div>
      <button
        onClick={() => setOpen(o => !o)}
        className={cn(
          "w-full flex items-center justify-between px-2 py-1.5 rounded-md text-sm font-medium hover:bg-accent transition",
          isActive && "text-primary"
        )}
      >
        <span className="flex items-center gap-2">
          <span className={cn("h-2 w-2 rounded-full bg-gradient-to-br", unit.color)} />
          Unit {unit.id}
        </span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <ul className="mt-1 ml-4 space-y-0.5 border-l border-border/50 pl-2">
          {unit.topics.map(t => {
            const active = pathname.endsWith(t.id);
            return (
              <li key={t.id}>
                <Link
                  href={`/units/${unit.slug}/${t.id}`}
                  className={cn(
                    "block px-2 py-1 text-xs rounded hover:bg-accent/50 transition truncate",
                    active && "bg-accent text-primary font-medium"
                  )}
                >
                  {t.index}. {t.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
