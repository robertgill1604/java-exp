"use client";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getPrevTopic, getNextTopic, getTopicPath } from "@/data";
import { Button } from "@/components/ui/button";

export function TopicNav({ topicId }: { topicId: string }) {
  const prev = getPrevTopic(topicId);
  const next = getNextTopic(topicId);
  const prevPath = prev ? getTopicPath(prev.id) : null;
  const nextPath = next ? getTopicPath(next.id) : null;
  return (
    <div className="flex items-center justify-between mt-12 pt-6 border-t border-border/40">
      {prev && prevPath ? (
        <Link href={`/units/${prevPath.unitSlug}/${prev.id}`}>
          <Button variant="ghost" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">Previous</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </Button>
        </Link>
      ) : <div />}
      {next && nextPath ? (
        <Link href={`/units/${nextPath.unitSlug}/${next.id}`}>
          <Button className="gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
            <div className="text-right">
              <div className="text-xs text-white/80">Next</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : <div />}
    </div>
  );
}
