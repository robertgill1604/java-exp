import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toaster";
import { ProgressTracker } from "@/components/progress-tracker";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Java Exam Master — Master Java for University Exams",
  description:
    "An interactive Java learning and university exam preparation platform with visual lessons, simulators, and exam-style answers.",
  keywords: ["Java", "OOP", "University Exam", "JavaFX", "Multithreading", "Inheritance"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <ToastProvider>
            <ProgressTracker />
            <SiteHeader />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
