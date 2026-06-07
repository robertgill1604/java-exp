"use client";
import * as React from "react";
type Theme = "dark" | "light";
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };
const ThemeContext = React.createContext<Ctx | null>(null);
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("dark");
  React.useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("jem-theme")) as Theme | null;
    if (stored) setTheme(stored);
  }, []);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("jem-theme", theme); } catch {}
  }, [theme]);
  const toggle = React.useCallback(() => setTheme(t => (t === "dark" ? "light" : "dark")), []);
  return <ThemeContext.Provider value={{ theme, setTheme, toggle }}>{children}</ThemeContext.Provider>;
}
export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
