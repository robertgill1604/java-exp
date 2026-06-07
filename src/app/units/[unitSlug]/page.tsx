"use client";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { unitBySlug, units } from "@/data";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useProgress } from "@/store/progress";
import { useEffect, useState } from "react";

export default function UnitPage() {
  const params = useParams<{ unitSlug: string }>();
  const unit = unitBySlug[params.unitSlug];
  if (!unit) notFound();
  const { completedTopics } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const done = mounted ? unit.topics.filter(t => completedTopics.includes(t.id)).length : 0;

  return (
    <div className="container py-8 max-w-5xl">
      <Link href="/units" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-4">
        <ArrowLeft className="h-3.5 w-3.5" /> All units
      </Link>

      <div className="mb-8">
        <div className={`inline-block h-1.5 w-16 rounded-full bg-gradient-to-r ${unit.color} mb-3`} />
        <h1 className="text-3xl font-bold mb-2">Unit {unit.id}: {unit.title}</h1>
        <p className="text-muted-foreground">{unit.description}</p>
        <div className="mt-3 flex items-center gap-2">
          <Badge variant="outline">{unit.topics.length} topics</Badge>
          <Badge variant="outline">{done} completed</Badge>
        </div>
        <Progress value={(done / unit.topics.length) * 100} className="h-1.5 mt-3 max-w-md" />
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {unit.topics.map(t => (
          <Link key={t.id} href={`/units/${unit.slug}/${t.id}`}>
            <Card className="p-5 h-full hover:border-primary/60 transition cursor-pointer group">
              <div className="flex items-start gap-3 mb-2">
                <div className="text-3xl">{t.visualCue}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-muted-foreground font-mono">Topic {t.index}</div>
                  <h3 className="font-bold group-hover:text-primary transition">{t.title}</h3>
                </div>
                {mounted && completedTopics.includes(t.id) && <Badge variant="default" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-[10px]">Done</Badge>}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{t.oneLiner}</p>
              <div className="text-xs text-primary flex items-center gap-1">
                Open <ArrowRight className="h-3 w-3" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        {(() => {
          const prev = units[unit.id - 2];
          return prev ? (
            <Link href={`/units/${prev.slug}`} className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" /> Unit {prev.id}: {prev.title}
            </Link>
          ) : <div />;
        })()}
        {(() => {
          const next = units[unit.id];
          return next ? (
            <Link href={`/units/${next.slug}`} className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
              Unit {next.id}: {next.title} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : <div />;
        })()}
      </div>
    </div>
  );
}
