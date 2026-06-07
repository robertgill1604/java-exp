"use client";
import * as React from "react";
import { CheckCircle2, XCircle, Info, AlertTriangle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Toast = { id: number; title: string; description?: string; variant?: "default" | "success" | "destructive" | "warning" };
type Ctx = { push: (t: Omit<Toast, "id">) => void };
const ToastContext = React.createContext<Ctx | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) return { push: () => {} } as Ctx;
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);
  const push = React.useCallback((t: Omit<Toast, "id">) => {
    const id = Date.now() + Math.random();
    setToasts(arr => [...arr, { ...t, id }]);
    setTimeout(() => setToasts(arr => arr.filter(x => x.id !== id)), 3500);
  }, []);
  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20 }}
              className="pointer-events-auto flex items-start gap-3 rounded-lg border bg-card p-4 shadow-xl min-w-[300px] max-w-sm"
            >
              <div className="mt-0.5">
                {t.variant === "success" && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                {t.variant === "destructive" && <XCircle className="h-5 w-5 text-red-400" />}
                {t.variant === "warning" && <AlertTriangle className="h-5 w-5 text-amber-400" />}
                {(!t.variant || t.variant === "default") && <Info className="h-5 w-5 text-sky-400" />}
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">{t.title}</div>
                {t.description && <div className="text-xs text-muted-foreground mt-0.5">{t.description}</div>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

// Backward-compatible export
export function Toaster() {
  return null;
}
