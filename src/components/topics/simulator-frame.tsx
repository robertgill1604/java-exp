"use client";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { InteractiveSimulator } from "@/data/types";
import { ConstructorOverloadingSim } from "../interactive/constructor-overloading";
import { DynamicDispatchSim } from "../interactive/dynamic-dispatch";
import { ThreadLifecycleSim } from "../interactive/thread-lifecycle";
import { ExceptionFlowSim } from "../interactive/exception-flow";
import { InheritanceTreeSim } from "../interactive/inheritance-tree";
import { StringMemorySim } from "../interactive/string-memory";
import { ControlFlowSim } from "../interactive/control-flow";
import { JvmExecutionSim } from "../interactive/jvm-execution";
import { SynchronizationSim } from "../interactive/synchronization";
import { AutoboxingSim } from "../interactive/autoboxing";
import { GenericsSim } from "../interactive/generics";
import { FileStreamSim } from "../interactive/file-stream";
import { JavafxLayoutSim } from "../interactive/javafx-layout";
import { JavafxEventSim } from "../interactive/javafx-event";
import { RegistrationFormSim } from "../interactive/registration-form";
import { BytecodeViewerSim } from "../interactive/bytecode-viewer";

export function SimulatorFrame({ sim }: { sim: InteractiveSimulator }) {
  return (
    <Card className="p-6 border-border/50 bg-gradient-to-br from-orange-500/5 via-card to-amber-500/5 overflow-hidden relative">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">Interactive Simulator</h3>
        <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
          {sim.type}
        </span>
      </div>
      <div className="rounded-lg border border-border/40 bg-background/50 p-4">
        {renderSim(sim)}
      </div>
    </Card>
  );
}

function renderSim(sim: InteractiveSimulator) {
  switch (sim.type) {
    case "constructor-overloading": return <ConstructorOverloadingSim sim={sim} />;
    case "dynamic-dispatch": return <DynamicDispatchSim sim={sim} />;
    case "thread-lifecycle": return <ThreadLifecycleSim />;
    case "exception-flow": return <ExceptionFlowSim />;
    case "inheritance-tree": return <InheritanceTreeSim sim={sim} />;
    case "string-memory": return <StringMemorySim />;
    case "control-flow": return <ControlFlowSim />;
    case "jvm-execution": return <JvmExecutionSim />;
    case "bytecode-viewer": return <BytecodeViewerSim />;
    case "synchronization": return <SynchronizationSim />;
    case "autoboxing": return <AutoboxingSim />;
    case "generics": return <GenericsSim />;
    case "file-stream": return <FileStreamSim />;
    case "javafx-layout": return <JavafxLayoutSim sim={sim} />;
    case "javafx-event": return <JavafxEventSim />;
    case "registration-form": return <RegistrationFormSim />;
    default: return <div className="text-sm text-muted-foreground text-center py-8">No simulator for this topic.</div>;
  }
}
