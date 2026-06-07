"use client";
import * as React from "react";
import { useProgress } from "@/store/progress";
import { useToast } from "@/components/ui/toaster";

export function ProgressTracker() {
  const push = useToast().push;
  React.useEffect(() => {
    useProgress.setState(s => ({ marks: { push } }));
  }, [push]);
  return null;
}
