"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Progress = {
  visitedTopics: string[];
  completedTopics: string[];
  quizScores: Record<string, number>;
  bookmarks: string[];
  studyTime: Record<string, number>;
  marks: { push: (t: { title: string; description?: string; variant?: "default" | "success" | "destructive" | "warning" }) => void };
  visit: (id: string) => void;
  complete: (id: string) => void;
  score: (id: string, s: number) => void;
  toggleBookmark: (id: string) => void;
  trackTime: (id: string, seconds: number) => void;
};

export const useProgress = create<Progress>()(
  persist(
    (set, get) => ({
      visitedTopics: [],
      completedTopics: [],
      quizScores: {},
      bookmarks: [],
      studyTime: {},
      marks: { push: () => {} },
      visit: (id) =>
        set(s => ({
          visitedTopics: s.visitedTopics.includes(id) ? s.visitedTopics : [...s.visitedTopics, id]
        })),
      complete: (id) =>
        set(s => ({
          completedTopics: s.completedTopics.includes(id) ? s.completedTopics : [...s.completedTopics, id]
        })),
      score: (id, s) => set(state => ({ quizScores: { ...state.quizScores, [id]: s } })),
      toggleBookmark: (id) =>
        set(s => ({
          bookmarks: s.bookmarks.includes(id) ? s.bookmarks.filter(x => x !== id) : [...s.bookmarks, id]
        })),
      trackTime: (id, seconds) =>
        set(s => ({ studyTime: { ...s.studyTime, [id]: (s.studyTime[id] || 0) + seconds } }))
    }),
    { name: "jem-progress" }
  )
);
