import type { Unit, TopicContent, ImportantQuestion } from "./types";
import { unit1Topics } from "./units/unit1";
import { unit2Topics } from "./units/unit2";
import { unit3Topics } from "./units/unit3";
import { unit4Topics } from "./units/unit4";
import { unit5Topics } from "./units/unit5";

export const units: Unit[] = [
  {
    id: 1,
    slug: "oop-fundamentals",
    title: "OOP Fundamentals",
    description: "Encapsulation, abstraction, constructors, control flow, and the building blocks of Java programs.",
    color: "from-orange-500 to-amber-500",
    topics: unit1Topics
  },
  {
    id: 2,
    slug: "inheritance-polymorphism",
    title: "Inheritance & Polymorphism",
    description: "Inheritance hierarchies, abstract classes, interfaces, dynamic dispatch, and method resolution.",
    color: "from-amber-500 to-yellow-500",
    topics: unit2Topics
  },
  {
    id: 3,
    slug: "exception-handling-threads",
    title: "Exception Handling & Multithreading",
    description: "Try/catch/throw, custom exceptions, threads, lifecycle, synchronization, and autoboxing.",
    color: "from-red-500 to-orange-500",
    topics: unit3Topics
  },
  {
    id: 4,
    slug: "strings-files-generics",
    title: "Strings, Files & Generics",
    description: "String vs StringBuffer, file I/O, streams, and type-safe generic programming.",
    color: "from-emerald-500 to-teal-500",
    topics: unit4Topics
  },
  {
    id: 5,
    slug: "javafx",
    title: "JavaFX GUI",
    description: "Event handling, layouts, controls, and building a registration form with JavaFX.",
    color: "from-violet-500 to-purple-500",
    topics: unit5Topics
  }
];

export const allTopics: TopicContent[] = units.flatMap(u => u.topics);

export const topicMap: Record<string, TopicContent> = Object.fromEntries(
  allTopics.map(t => [t.id, t])
);

export const unitBySlug: Record<string, Unit> = Object.fromEntries(
  units.map(u => [u.slug, u])
);

export function getUnitForTopic(topicId: string): Unit | undefined {
  return units.find(u => u.topics.some(t => t.id === topicId));
}

export function getTopicPath(topicId: string): { unitSlug: string; topicId: string } | null {
  for (const u of units) {
    if (u.topics.some(t => t.id === topicId)) {
      return { unitSlug: u.slug, topicId };
    }
  }
  return null;
}

export function getNextTopic(topicId: string): TopicContent | null {
  const idx = allTopics.findIndex(t => t.id === topicId);
  if (idx < 0 || idx === allTopics.length - 1) return null;
  return allTopics[idx + 1];
}

export function getPrevTopic(topicId: string): TopicContent | null {
  const idx = allTopics.findIndex(t => t.id === topicId);
  if (idx <= 0) return null;
  return allTopics[idx - 1];
}

export const importantQuestions: ImportantQuestion[] = [
  { topic: "u1-encapsulation", marks: 13, question: "Explain encapsulation with a real-world example and a Java program." },
  { topic: "u1-abstraction", marks: 13, question: "Compare abstraction and encapsulation. How is abstraction achieved in Java?" },
  { topic: "u1-class-object", marks: 13, question: "Explain class vs object, object lifecycle, memory allocation, and the this reference." },
  { topic: "u1-constructors", marks: 13, question: "What are constructors? Explain default, parameterized, and copy constructors with examples." },
  { topic: "u1-method-overloading", marks: 13, question: "Explain method overloading (compile-time polymorphism) with autoboxing and varargs rules." },
  { topic: "u2-inheritance", marks: 16, question: "Explain inheritance. Discuss types with a Java program demonstrating single and multilevel inheritance." },
  { topic: "u2-abstract-class", marks: 13, question: "Explain abstract classes and methods with an example." },
  { topic: "u2-interfaces", marks: 16, question: "Explain interfaces in Java. Compare with abstract classes." },
  { topic: "u2-multiple-inheritance", marks: 13, question: "How does Java achieve multiple inheritance? Explain with interfaces." },
  { topic: "u2-dynamic-method-dispatch", marks: 13, question: "Explain dynamic method dispatch with a runtime polymorphism example." },
  { topic: "u3-exception-handling", marks: 16, question: "Explain exception handling hierarchy in Java. Differentiate checked and unchecked exceptions." },
  { topic: "u3-try-catch", marks: 13, question: "Explain try, catch, throw, throws, and finally with examples." },
  { topic: "u3-thread-lifecycle", marks: 16, question: "Explain thread lifecycle. Write a program creating a thread by extending Thread class." },
  { topic: "u3-synchronization", marks: 16, question: "Explain synchronization in Java. Discuss wait() and notify()." },
  { topic: "u4-string", marks: 16, question: "Differentiate String and StringBuffer. Explain immutability with examples." },
  { topic: "u4-file-handling", marks: 13, question: "Explain file handling in Java. Show reading and writing using FileReader/FileWriter." },
  { topic: "u4-generics", marks: 16, question: "Explain generics in Java. What is type erasure? Discuss bounded types." },
  { topic: "u5-event-handling", marks: 13, question: "Explain event handling in JavaFX with a Button click example." },
  { topic: "u5-registration-form", marks: 16, question: "Design a registration form using JavaFX with at least 5 controls and explain the layout." }
];
