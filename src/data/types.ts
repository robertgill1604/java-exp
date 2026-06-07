// Core types for the Java Exam Master platform

export type CodeBlock = {
  language: "java";
  code: string;
  caption?: string;
};

export type Mcq = {
  question: string;
  options: string[];
  answer: number; // index
  explanation: string;
};

export type TrueFalse = { statement: string; answer: boolean; explanation: string };

export type MatchPair = { a: string; b: string };

export type CodePredict = { code: string; options: string[]; answer: number; explanation: string };

export type Quiz = { mcqs: Mcq[]; trueFalse?: TrueFalse[]; match?: { prompt: string; pairs: MatchPair[]; answers: number[] }; codePredict?: CodePredict[] };

export type VivaQA = { q: string; a: string };

export type ExamAnswer = {
  twoMark: string;
  thirteenMark: { intro: string; definition: string; explanation: string; diagram?: string; example: string; conclusion: string };
  sixteenMark: { intro: string; definition: string; explanation: string; working: string; diagram?: string; example: string; output: string; advantages: string[]; applications: string[]; conclusion: string };
};

export type RevisionNote = {
  oneMin: string;
  fiveMin: string[];
  examDay: string[];
  memoryTrick: string;
  faq: { q: string; a: string }[];
};

export type InteractiveSimulator =
  | { type: "constructor-overloading"; options: { name: string; params: string[] }[] }
  | { type: "dynamic-dispatch"; classes: { name: string; methods: { name: string; impl: string }[] }[] }
  | { type: "thread-lifecycle" }
  | { type: "exception-flow" }
  | { type: "inheritance-tree"; root: string; nodes: { name: string; parent?: string; methods: string[] }[] }
  | { type: "string-memory"; samples: { literal: string; interned: boolean }[] }
  | { type: "control-flow"; code: string }
  | { type: "jvm-execution" }
  | { type: "bytecode-viewer"; code: string }
  | { type: "synchronization" }
  | { type: "autoboxing" }
  | { type: "file-stream" }
  | { type: "generics" }
  | { type: "javafx-layout"; controls: { type: string; label: string }[] }
  | { type: "javafx-event" }
  | { type: "registration-form" }
  | { type: "none" };

export type TopicContent = {
  id: string;
  unitId: number;
  index: number;
  title: string;
  tagline: string;
  oneLiner: string;
  analogy: string;
  whyExists: string;
  whereUsed: string[];
  visualCue: string; // emoji or short icon
  code: CodeBlock;
  internalWorking: { steps: string[]; memory?: string };
  examAnswer: ExamAnswer;
  viva: VivaQA[];
  quiz: Quiz;
  revision: RevisionNote;
  simulator: InteractiveSimulator;
};

export type Unit = {
  id: number;
  slug: string;
  title: string;
  description: string;
  color: string;
  topics: TopicContent[];
};

export type ImportantQuestion = { topic: string; marks: 2 | 5 | 13 | 16; question: string };
