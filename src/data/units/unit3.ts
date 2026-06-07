import type { TopicContent } from "../types";

export const unit3Topics: TopicContent[] = [
  {
    id: "u3-exception-handling",
    unitId: 3,
    index: 1,
    title: "Exception Handling",
    tagline: "Gracefully managing runtime errors",
    oneLiner: "Exception handling in Java is a mechanism to handle runtime errors, allowing normal program flow to continue instead of abrupt termination.",
    analogy: "Like a safety net for a trapeze artist. If something goes wrong, the net catches the fall and the show can continue.",
    whyExists: "To separate error-handling code from regular code and prevent program crashes.",
    whereUsed: ["File I/O", "Network operations", "Database access", "User input validation", "Anywhere errors may occur"],
    visualCue: "⚠️",
    code: {
      language: "java",
      code: `try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Always runs");
}`,
      caption: "Basic try-catch-finally."
    },
    internalWorking: {
      steps: [
        "When exception is thrown, JVM creates an exception object containing stack trace.",
        "JVM searches call stack for a catch block that matches.",
        "If found, control transfers to that catch block.",
        "If not found, JVM terminates the thread and prints stack trace.",
        "finally block always executes (except System.exit)."
      ]
    },
    examAnswer: {
      twoMark: "Exception handling is a mechanism in Java to handle runtime errors. It uses five keywords: try, catch, finally, throw, and throws. It allows a program to continue executing even after an error occurs.",
      thirteenMark: {
        intro: "Exception handling is essential for robust Java programs.",
        definition: "Exception handling is a programming construct that allows a program to detect and respond to exceptional conditions (errors) during runtime without crashing.",
        explanation: "Java exceptions are objects of classes that extend java.lang.Throwable. They are categorized into checked (compile-time) and unchecked (runtime) exceptions. The mechanism uses try-catch-finally for handling, throw to explicitly raise, throws to declare.",
        diagram: "Throwable\n  ├── Error (unchecked, fatal)\n  └── Exception\n        ├── Checked (compile-time)\n        └── RuntimeException (unchecked)",
        example: "try { FileReader f = new FileReader(\"a.txt\"); } catch (FileNotFoundException e) { System.out.println(\"File not found\"); }",
        conclusion: "Exception handling is critical for writing reliable Java applications."
      },
      sixteenMark: {
        intro: "Java's exception handling is a structured approach to managing runtime errors.",
        definition: "Exception handling is a Java mechanism using try, catch, finally, throw, and throws to detect, raise, and respond to runtime errors.",
        explanation: "Exception hierarchy: Throwable is the root. Error (OutOfMemoryError) and Exception are children. Checked exceptions must be declared/handled; unchecked (RuntimeException) are optional to handle. Custom exceptions are created by extending Exception or RuntimeException. try-with-resources (Java 7+) auto-closes resources implementing AutoCloseable.",
        working: "1. Code in try block executes.\n2. If exception is thrown, JVM looks for matching catch.\n3. Control transfers to catch; finally always runs.\n4. Method may declare throws in signature for checked exceptions.",
        diagram: "try { ... } catch (E1 e) { ... } catch (E2 e) { ... } finally { ... }",
        example: "class MyException extends Exception { MyException(String s) { super(s); } } throw new MyException(\"Error\");",
        output: "Custom exceptions can be created.",
        advantages: ["Separation of error-handling code", "Prevents abrupt termination", "Propagation up the call stack"],
        applications: ["I/O operations", "Database access", "Network calls", "User input"],
        conclusion: "Exception handling is a cornerstone of robust Java programming, providing structured error management."
      }
    },
    viva: [
      { q: "What is the base class of all exceptions?", a: "java.lang.Throwable." },
      { q: "Difference: checked vs unchecked?", a: "Checked: compile-time, must be handled. Unchecked: runtime, optional." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is the root of exception hierarchy?", options: ["Exception", "Error", "Throwable", "RuntimeException"], answer: 2, explanation: "Throwable." },
        { question: "Which block always runs?", options: ["try", "catch", "finally", "throw"], answer: 2, explanation: "finally runs always." }
      ],
      trueFalse: [
        { statement: "Error is recoverable.", answer: false, explanation: "Errors are typically fatal (e.g., OutOfMemoryError)." }
      ]
    },
    revision: { oneMin: "try-catch-finally, throw, throws.", fiveMin: ["Throwable → Exception, Error", "Checked vs unchecked", "Custom exceptions"], examDay: ["5 keywords", "Hierarchy diagram"], memoryTrick: "try = try to do, catch = catch the error, finally = always cleanup.", faq: [{ q: "Can finally be skipped?", a: "Only by System.exit() or JVM crash." }] },
    simulator: { type: "exception-flow" }
  },
  {
    id: "u3-try-catch",
    unitId: 3,
    index: 2,
    title: "try, catch, throw, throws, finally",
    tagline: "The five keywords of exception handling",
    oneLiner: "These five keywords form the core of Java's exception handling: try (monitor), catch (handle), throw (raise), throws (declare), finally (cleanup).",
    analogy: "Try = experiment. Catch = record the failure. Finally = clean up the lab.",
    whyExists: "To provide a structured way to detect, raise, handle, and clean up after exceptions.",
    whereUsed: ["All robust Java code"],
    visualCue: "🪤",
    code: {
      language: "java",
      code: `void m() throws IOException {
    try { riskyOp(); }
    catch (IOException e) { throw new RuntimeException(e); }
    finally { cleanup(); }
}`,
      caption: "All five keywords in one snippet."
    },
    internalWorking: { steps: ["try marks guarded region.", "catch handles specific exception type.", "throw raises an exception.", "throws declares exceptions a method can throw.", "finally always runs."] },
    examAnswer: {
      twoMark: "try contains code that may throw. catch handles specific exception. throw explicitly raises an exception. throws declares exceptions a method may throw. finally always executes, used for cleanup.",
      thirteenMark: {
        intro: "These five keywords are the building blocks of exception handling.",
        definition: "try-catch is used to handle exceptions. throw raises an exception. throws declares exceptions. finally is for cleanup that always runs.",
        explanation: "try { } block contains guarded code. catch(ExceptionType e) { } handles the specific exception. throw new Exception(...) explicitly raises. throws ExceptionType in method signature declares checked exceptions. finally { } always runs after try/catch.",
        diagram: "try → code\ncatch → handle\nthrow → raise\nthrows → declare\nfinally → cleanup",
        example: "try { int x = 1/0; } catch (ArithmeticException e) { System.out.println(e.getMessage()); } finally { System.out.println(\"done\"); }",
        conclusion: "Mastering these five keywords is essential for robust Java error handling."
      },
      sixteenMark: {
        intro: "These five keywords are the foundation of Java's exception model.",
        definition: "try, catch, throw, throws, finally are the five keywords used for exception handling in Java.",
        explanation: "try { } contains code that may throw. catch (ExceptionType e) { } catches and handles. Multiple catch blocks can be chained. Multi-catch (Java 7+): catch (E1 | E2 e). throw new Exception(...) raises explicitly. throws ExceptionType in method signature declares that the method may throw. finally { } runs regardless of whether exception occurred. try-with-resources simplifies resource management.",
        working: "1. try block executes.\n2. If exception thrown, control jumps to matching catch.\n3. finally runs.\n4. If no catch matches, exception propagates up the call stack.",
        diagram: "method() throws E {\n  try { ... } catch (E e) { ... } finally { ... }\n  throw new E(...);\n}",
        example: "static void check(int a) { if (a<0) throw new IllegalArgumentException(\"negative\"); }\nvoid process() throws IOException { FileReader r = new FileReader(\"f.txt\"); }",
        output: "Demonstrates throw and throws.",
        advantages: ["Structured error handling", "Forced handling of checked exceptions", "Guaranteed cleanup with finally"],
        applications: ["I/O", "Parsing", "Network calls"],
        conclusion: "These five keywords are central to writing reliable Java code."
      }
    },
    viva: [
      { q: "Can a try block exist without catch?", a: "Yes, if it has a finally block." },
      { q: "Can we have multiple catch blocks?", a: "Yes, but most specific first." }
    ],
    quiz: {
      mcqs: [
        { question: "Which keyword raises an exception?", options: ["catch", "throw", "throws", "finally"], answer: 1, explanation: "throw raises." },
        { question: "Which declares exceptions in method signature?", options: ["throw", "throws", "catch", "try"], answer: 1, explanation: "throws declares." }
      ],
      trueFalse: [
        { statement: "finally can throw an exception.", answer: true, explanation: "Yes, but it will mask the original." }
      ]
    },
    revision: { oneMin: "try-catch-handle, throw-raise, throws-declare, finally-cleanup.", fiveMin: ["Order of catch", "try-with-resources", "Multi-catch"], examDay: ["All 5 keywords with examples"], memoryTrick: "try-experiment, catch-record, throw-raise, throws-promise, finally-cleanup.", faq: [{ q: "What is multi-catch?", a: "catch (E1 | E2 e) — handles multiple types in one block." }] },
    simulator: { type: "exception-flow" }
  },
  {
    id: "u3-thread-class",
    unitId: 3,
    index: 3,
    title: "Thread Class & Runnable Interface",
    tagline: "Two ways to create threads",
    oneLiner: "Java supports multithreading via the Thread class (extend) or the Runnable interface (implement).",
    analogy: "A thread is like a worker. You can either hire a worker directly (extend Thread) or give a task to a worker pool (implement Runnable).",
    whyExists: "To enable concurrent execution and better utilize CPU resources.",
    whereUsed: ["Servers", "GUI apps", "Background tasks", "Parallel processing"],
    visualCue: "🧵",
    code: {
      language: "java",
      code: `// By extending Thread
class T1 extends Thread {
    public void run() { System.out.println("Thread running"); }
}
new T1().start();

// By implementing Runnable
class T2 implements Runnable {
    public void run() { System.out.println("Runnable running"); }
}
new Thread(new T2()).start();`,
      caption: "Two ways to create threads."
    },
    internalWorking: {
      steps: ["Thread is mapped to OS thread.", "start() creates new call stack and invokes run().", "JVM schedules threads via thread scheduler."]
    },
    examAnswer: {
      twoMark: "In Java, a thread can be created by extending the Thread class or implementing the Runnable interface. The run() method contains the thread's task. start() begins execution.",
      thirteenMark: {
        intro: "Java provides two primary ways to create threads.",
        definition: "Thread is a class in java.lang; Runnable is a functional interface with a single run() method. Both can be used to create a thread of execution.",
        explanation: "Extending Thread: subclass overrides run() and call start(). Implementing Runnable: pass to Thread constructor. Runnable is preferred because it allows the class to extend another, supports multiple inheritance of interface, and separates task from thread.",
        diagram: "Thread |→ extends → class with run()\nRunnable |→ implements → task in run()\nThread(Runnable) |→ wraps task",
        example: "new Thread(() -> System.out.println(\"Lambda thread\")).start();",
        conclusion: "Both methods work; Runnable is more flexible."
      },
      sixteenMark: {
        intro: "Thread and Runnable are the two pillars of Java multithreading.",
        definition: "Thread is a class representing a thread of execution. Runnable is a functional interface with a single run() method that represents a task to be executed by a thread.",
        explanation: "Extending Thread: simple, but limits inheritance. Implementing Runnable: preferred for separation of concerns. Java 8+ lambdas can implement Runnable concisely. start() vs run(): start() creates new thread; run() executes in current thread. The thread's lifecycle is: New → Runnable → Running → Blocked/Waiting → Terminated.",
        working: "1. Thread object is created.\n2. start() registers thread with scheduler.\n3. Scheduler calls run() on a new call stack.\n4. Thread runs concurrently with others.",
        diagram: "Thread states:\n  NEW → RUNNABLE → RUNNING\n            ↑          ↓\n          BLOCKED  TERMINATED",
        example: "class MyTask implements Runnable { public void run() { for (int i=0; i<5; i++) System.out.println(i); } } new Thread(new MyTask()).start();",
        output: "Numbers 0-4 from the new thread.",
        advantages: ["Concurrent execution", "Better CPU utilization", "Responsive UIs"],
        applications: ["Servers", "GUI event dispatch", "Background jobs", "Parallel computation"],
        conclusion: "Threads are essential for concurrent Java programs. Prefer Runnable for flexibility."
      }
    },
    viva: [
      { q: "Difference: start() vs run()?", a: "start() creates new thread; run() executes in current thread." },
      { q: "Which is preferred: Thread or Runnable?", a: "Runnable — supports multiple inheritance of interface and separates task from thread." }
    ],
    quiz: {
      mcqs: [
        { question: "Runnable is a:", options: ["Class", "Interface", "Method", "Package"], answer: 1, explanation: "Interface." },
        { question: "Which method starts a thread?", options: ["run()", "start()", "init()", "begin()"], answer: 1, explanation: "start()." }
      ],
      trueFalse: [
        { statement: "We can start a thread twice.", answer: false, explanation: "Throws IllegalThreadStateException." }
      ]
    },
    revision: { oneMin: "Thread class or Runnable interface — start() begins execution.", fiveMin: ["Extend vs implement", "start() vs run()", "Lambda Runnable"], examDay: ["Comparison table"], memoryTrick: "Thread = the worker; Runnable = the task.", faq: [{ q: "Can we extend Thread and implement Runnable?", a: "Yes, but redundant." }] },
    simulator: { type: "thread-lifecycle" }
  },
  {
    id: "u3-thread-lifecycle",
    unitId: 3,
    index: 4,
    title: "Thread Lifecycle",
    tagline: "States of a thread",
    oneLiner: "A thread in Java goes through several states: New, Runnable, Running, Blocked/Waiting, and Terminated (Dead).",
    analogy: "A person's life: born (new), awake (runnable), busy (running), resting (blocked), dead (terminated).",
    whyExists: "To manage thread states and scheduling.",
    whereUsed: ["Concurrency", "Thread debugging", "Performance tuning"],
    visualCue: "♻️",
    code: {
      language: "java",
      code: `Thread t = new Thread(() -> {
    try { Thread.sleep(1000); } catch (Exception e) {}
});
t.start(); // NEW → RUNNABLE
// After sleep, RUNNABLE again
// When run() returns, TERMINATED`,
      caption: "Lifecycle demo."
    },
    internalWorking: { steps: ["Thread is created (NEW).", "start() moves it to RUNNABLE.", "Scheduler picks it (RUNNING).", "sleep(), wait(), I/O → BLOCKED/WAITING.", "run() returns → TERMINATED."] },
    examAnswer: {
      twoMark: "A thread in Java exists in one of these states: New, Runnable, Running, Blocked/Waiting, or Terminated. The transitions are managed by the JVM thread scheduler.",
      thirteenMark: {
        intro: "Understanding thread states is key to debugging concurrency.",
        definition: "Thread lifecycle describes the states a thread goes through from creation to termination.",
        explanation: "States: NEW (created, not started), RUNNABLE (eligible to run, may be running), BLOCKED (waiting for monitor lock), WAITING (waiting indefinitely via wait(), join()), TIMED_WAITING (sleep(), wait(ms)), TERMINATED (run() finished).",
        diagram: "NEW → RUNNABLE ↔ RUNNING → TERMINATED\n                  ↓\n              BLOCKED/WAITING",
        example: "Thread t = new Thread(r); t.start(); System.out.println(t.getState()); // RUNNABLE",
        conclusion: "Thread states are crucial for diagnosing concurrency issues."
      },
      sixteenMark: {
        intro: "Java threads have a well-defined lifecycle governed by the JVM and OS scheduler.",
        definition: "Thread lifecycle refers to the set of states a thread passes through: New, Runnable, Blocked, Waiting, Timed Waiting, and Terminated.",
        explanation: "New: just created, not yet started. Runnable: start() called, eligible for CPU. Blocked: waiting for monitor lock (synchronized). Waiting: wait(), join() without timeout. Timed_Waiting: sleep(ms), wait(ms), join(ms). Terminated: run() completed or uncaught exception. The Thread.getState() method returns the current state.",
        working: "1. new Thread(r) → NEW.\n2. t.start() → RUNNABLE.\n3. Scheduler may pick to RUN.\n4. I/O or sleep() → BLOCKED/WAITING/TIMED_WAITING.\n5. run() returns → TERMINATED.",
        diagram: "+-------+  start()  +----------+  run() exits  +-------------+\n|  NEW  | --------> | RUNNABLE | ------------> | TERMINATED |\n+-------+           +----------+               +-------------+\n                          ↑ ↓\n                  +----------------+\n                  | BLOCKED/WAITING|\n                  +----------------+",
        example: "Thread t = new Thread(() -> { try { Thread.sleep(500); } catch (Exception e) {} }); t.start(); Thread.sleep(100); System.out.println(t.getState()); // TIMED_WAITING",
        output: "TIMED_WAITING (during the sleep).",
        advantages: ["Predictable state transitions", "Debugging with getState()"],
        applications: ["Concurrency debugging", "Thread pools", "Performance tuning"],
        conclusion: "Thread lifecycle knowledge is essential for concurrent Java programming."
      }
    },
    viva: [
      { q: "What is the difference between Blocked and Waiting?", a: "Blocked waits for a monitor lock; Waiting waits indefinitely (wait/join)." },
      { q: "Can a dead thread be restarted?", a: "No." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is NOT a thread state?", options: ["New", "Running", "Sleeping", "Terminated"], answer: 2, explanation: "Sleeping is Timed_Waiting." }
      ],
      trueFalse: [
        { statement: "A thread can move from Blocked to Runnable.", answer: true, explanation: "When the lock is released." }
      ]
    },
    revision: { oneMin: "New → Runnable → Running → Blocked/Waiting → Terminated.", fiveMin: ["5 states", "Transitions", "getState()"], examDay: ["State diagram"], memoryTrick: "Born, Ready, Busy, Rest, Dead.", faq: [{ q: "Difference between wait() and sleep()?", a: "wait() releases lock; sleep() doesn't." }] },
    simulator: { type: "thread-lifecycle" }
  },
  {
    id: "u3-synchronization",
    unitId: 3,
    index: 5,
    title: "Synchronization",
    tagline: "Preventing race conditions",
    oneLiner: "Synchronization in Java is the capability to control the access of multiple threads to shared resources, preventing race conditions.",
    analogy: "A bathroom key — only one person at a time can have the key (lock) and use the bathroom (critical section).",
    whyExists: "To ensure thread safety when multiple threads access shared mutable state.",
    whereUsed: ["Bank transactions", "Shared counters", "Caches", "Any mutable shared state"],
    visualCue: "🔐",
    code: {
      language: "java",
      code: `class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
}`,
      caption: "synchronized method ensures atomicity."
    },
    internalWorking: {
      steps: ["Every object has a monitor (intrinsic lock).", "synchronized acquires the lock before entering; releases on exit.", "Only one thread can hold the monitor at a time."]
    },
    examAnswer: {
      twoMark: "Synchronization in Java is the mechanism that ensures that only one thread can access a shared resource (critical section) at a time. It prevents race conditions and ensures thread safety using the synchronized keyword.",
      thirteenMark: {
        intro: "Synchronization is essential for thread-safe code.",
        definition: "Synchronization is a Java mechanism that controls access of multiple threads to shared resources via monitors (intrinsic locks).",
        explanation: "synchronized can be applied to methods (instance or static) or blocks. The lock is on the object (or class for static). Only one thread can hold the lock at a time. Other threads block until it's released. synchronized prevents data inconsistency but can cause deadlock and reduce performance.",
        diagram: "Thread1 → lock(obj) → critical section → unlock\nThread2 → (waits) → lock → critical section → unlock",
        example: "synchronized void increment() { count++; } // only one thread at a time",
        conclusion: "Synchronization is fundamental for safe multithreaded programming."
      },
      sixteenMark: {
        intro: "Synchronization coordinates access to shared data across threads.",
        definition: "Synchronization in Java is the process of controlling thread access to shared resources using the synchronized keyword and intrinsic locks (monitors).",
        explanation: "Java provides two forms: synchronized methods and synchronized blocks. Each object has a monitor; the thread that owns it can execute synchronized code. The volatile keyword provides lightweight visibility but no atomicity. java.util.concurrent.locks provides more flexible Lock interfaces. Deadlock can occur if locks are acquired in different orders by different threads.",
        working: "1. Thread enters synchronized block.\n2. JVM checks monitor of lock object.\n3. If free, acquires and proceeds.\n4. If held, thread blocks.\n5. On exit (normal or exception), lock released.",
        diagram: "synchronized(lock) {\n  // critical section\n}",
        example: "class SafeCounter { private int c; synchronized void inc() { c++; } synchronized int get() { return c; } }",
        output: "c is always consistent across threads.",
        advantages: ["Thread safety", "Visibility", "Atomicity"],
        applications: ["Shared resources", "Atomic counters", "Cache updates"],
        conclusion: "Synchronization is the foundation of safe multithreaded Java programs."
      }
    },
    viva: [
      { q: "What is a race condition?", a: "When result depends on the unpredictable order of thread execution." },
      { q: "Difference: synchronized method vs block?", a: "Method locks 'this'; block can lock any object — finer control." }
    ],
    quiz: {
      mcqs: [
        { question: "synchronized uses which lock?", options: ["Mutex", "Monitor", "Semaphore", "Spin"], answer: 1, explanation: "Monitor (intrinsic lock)." }
      ],
      trueFalse: [
        { statement: "synchronized can deadlock.", answer: true, explanation: "Yes, if lock order is inconsistent." }
      ]
    },
    revision: { oneMin: "synchronized = monitor lock on object or class.", fiveMin: ["Method vs block", "Static synchronization", "Deadlock risks"], examDay: ["Race condition example", "Deadlock example"], memoryTrick: "synchronized = single-occupancy bathroom key.", faq: [{ q: "What is ReentrantLock?", a: "Explicit lock from java.util.concurrent.locks, more flexible than synchronized." }] },
    simulator: { type: "synchronization" }
  },
  {
    id: "u3-wait-notify",
    unitId: 3,
    index: 6,
    title: "wait(), notify(), notifyAll()",
    tagline: "Inter-thread communication",
    oneLiner: "These three methods (defined on Object) allow threads to communicate: wait() releases the lock and blocks; notify() wakes one waiting thread; notifyAll() wakes all.",
    analogy: "A meeting room: people wait outside (wait()), the speaker calls one person in (notify()), or everyone in (notifyAll()).",
    whyExists: "To coordinate threads waiting on a condition (e.g., producer-consumer problem).",
    whereUsed: ["Producer-consumer", "Blocking queues", "Resource pools"],
    visualCue: "📣",
    code: {
      language: "java",
      code: `synchronized (lock) {
    while (!condition) lock.wait();
    // do work
    lock.notify();
}`,
      caption: "Classic wait/notify pattern."
    },
    internalWorking: { steps: ["wait() releases the lock and adds thread to wait set.", "notify() picks a thread from wait set; notifyAll() wakes all."] },
    examAnswer: {
      twoMark: "wait(), notify(), and notifyAll() are methods of Object used for inter-thread communication. A thread calls wait() to release the lock and wait; another thread calls notify() to wake one waiting thread.",
      thirteenMark: {
        intro: "Inter-thread communication is essential for coordinated concurrent code.",
        definition: "wait() causes the current thread to release the lock and wait until another thread invokes notify() or notifyAll() on the same object. notify() wakes one waiting thread; notifyAll() wakes all.",
        explanation: "These methods must be called inside a synchronized block. wait() can throw InterruptedException. Always use a while loop to re-check the condition (spurious wakeups).",
        diagram: "Thread A: synchronized(lock) { while (!cond) lock.wait(); }\nThread B: synchronized(lock) { cond = true; lock.notify(); }",
        example: "Producer-consumer with wait/notify",
        conclusion: "wait/notify is a low-level coordination primitive in Java."
      },
      sixteenMark: {
        intro: "Inter-thread communication uses wait/notify/notifyAll to coordinate work between threads.",
        definition: "wait() releases the monitor and blocks the current thread until notify() or notifyAll() is called. notify() wakes one, notifyAll() wakes all waiting threads on the same monitor.",
        explanation: "Must be called from synchronized context. The thread that calls wait() goes into the wait set. When notified, it re-acquires the lock before returning. Use notifyAll() to be safe unless you know only one waiter is relevant. Higher-level alternatives: java.util.concurrent.BlockingQueue, CountDownLatch, Semaphore, etc.",
        working: "1. Thread A enters synchronized(lock).\n2. A calls lock.wait() — releases lock, blocks.\n3. Thread B enters synchronized(lock).\n4. B modifies state, calls lock.notify().\n5. A re-acquires lock, continues.",
        diagram: "[Thread A] --wait()--> [wait set]\n[Thread B] --notify()--> wakes A\n[Thread A] --re-acquires lock--> continues",
        example: "class PC { List<Integer> list = new ArrayList<>(); synchronized void produce(int x) { list.add(x); notify(); } synchronized int consume() { while (list.isEmpty()) wait(); return list.remove(0); } }",
        output: "Producer-consumer coordination.",
        advantages: ["Built-in coordination", "Fine-grained control"],
        applications: ["Producer-consumer", "Resource pools", "Worker threads"],
        conclusion: "wait/notify/notifyAll are powerful but tricky. Prefer higher-level concurrent utilities in modern Java."
      }
    },
    viva: [
      { q: "Why use while loop with wait()?", a: "To handle spurious wakeups." },
      { q: "What is the difference between notify() and notifyAll()?", a: "notify() wakes one; notifyAll() wakes all." }
    ],
    quiz: {
      mcqs: [
        { question: "wait() is defined in:", options: ["Thread", "Object", "Runnable", "Class"], answer: 1, explanation: "Object class." }
      ],
      trueFalse: [
        { statement: "wait() releases the lock.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "wait-release-and-block, notify-wake-one, notifyAll-wake-all.", fiveMin: ["Must be in synchronized", "Spurious wakeup handling", "Higher-level alternatives"], examDay: ["Producer-consumer example"], memoryTrick: "wait = rest until called, notify = ring the bell.", faq: [{ q: "What is spurious wakeup?", a: "Thread wakes up without notify — must re-check condition." }] },
    simulator: { type: "none" }
  },
  {
    id: "u3-autoboxing",
    unitId: 3,
    index: 7,
    title: "Autoboxing & Unboxing",
    tagline: "Primitives ↔ wrapper objects",
    oneLiner: "Autoboxing is the automatic conversion of a primitive type to its wrapper class object. Unboxing is the reverse.",
    analogy: "A gift box: primitive is the gift; wrapper is the wrapped gift. Autoboxing wraps; unboxing unwraps.",
    whyExists: "To allow primitives to be used in places that require objects (collections, generics).",
    whereUsed: ["Collections", "Generics", "Method parameters"],
    visualCue: "🎁",
    code: {
      language: "java",
      code: `Integer i = 10;        // autoboxing
int n = i;              // unboxing
List<Integer> list = new ArrayList<>();
list.add(5);            // autoboxing`,
      caption: "Autoboxing and unboxing in action."
    },
    internalWorking: { steps: ["Compiler inserts Integer.valueOf(int) for autoboxing.", "It inserts i.intValue() for unboxing."] },
    examAnswer: {
      twoMark: "Autoboxing is the automatic conversion of primitive types to their corresponding wrapper class objects (int → Integer). Unboxing is the opposite (Integer → int). Both were introduced in Java 5.",
      thirteenMark: {
        intro: "Autoboxing and unboxing bridge primitives and objects.",
        definition: "Autoboxing automatically converts a primitive to its wrapper; unboxing converts wrapper to primitive.",
        explanation: "Wrappers: Integer, Double, Boolean, etc. Compiler inserts valueOf() for autoboxing and xxxValue() for unboxing. Caching: Integer.valueOf caches small values (-128 to 127). NullPointerException can occur if a null wrapper is unboxed.",
        diagram: "int ⇄ Integer\ndouble ⇄ Double\nboolean ⇄ Boolean",
        example: "Integer i = 5; int n = i; // unboxing",
        conclusion: "Autoboxing simplifies code but beware of null wrappers and performance."
      },
      sixteenMark: {
        intro: "Autoboxing and unboxing seamlessly convert between primitives and wrappers.",
        definition: "Autoboxing is the implicit conversion of a primitive to a wrapper object; unboxing is the implicit conversion of a wrapper to a primitive. Both were added in Java 5.",
        explanation: "Wrappers: Boolean, Byte, Character, Short, Integer, Long, Float, Double. valueOf() caches common values. == compares references for wrappers (use .equals for value comparison). Beware of null unboxing — throws NullPointerException. Performance: autoboxing creates objects, which has overhead in tight loops.",
        working: "1. Compiler detects context needing wrapper.\n2. Inserts Integer.valueOf(int) call.\n3. At runtime, wrapper is created (or retrieved from cache).",
        diagram: "int a = 5;     // primitive\nInteger b = a;  // autoboxing (Integer.valueOf(5))\nint c = b;      // unboxing (b.intValue())",
        example: "List<Integer> nums = Arrays.asList(1, 2, 3); // autoboxing 1, 2, 3\nint sum = 0; for (Integer n : nums) sum += n; // unboxing",
        output: "sum = 6",
        advantages: ["Cleaner code", "Allows primitives in generics", "Less boilerplate"],
        applications: ["Collections", "Stream API", "Optional"],
        conclusion: "Autoboxing and unboxing are convenient but require care for null safety and performance."
      }
    },
    viva: [
      { q: "What is the range of Integer cache?", a: "By default, -128 to 127." },
      { q: "Can unboxing a null Integer throw exception?", a: "Yes, NullPointerException." }
    ],
    quiz: {
      mcqs: [
        { question: "Autoboxing of int gives:", options: ["int", "Integer", "Object", "long"], answer: 1, explanation: "Integer." }
      ],
      trueFalse: [
        { statement: "Integer == int compares values.", answer: true, explanation: "When one operand is a primitive int, Java auto-unboxes the Integer to int, so == performs a primitive numeric comparison (value, not reference). Example: Integer a = 10; int b = 10; (a == b) is true. Without unboxing (two Integer operands), == would compare references." }
      ]
    },
    revision: { oneMin: "Primitive ⇄ Wrapper automatic since Java 5.", fiveMin: ["valueOf caching", "Null unboxing risk"], examDay: ["Examples in Collections"], memoryTrick: "Box = gift wrap. Unbox = unwrap.", faq: [{ q: "Performance impact?", a: "Autoboxing creates objects, can be slow in tight loops." }] },
    simulator: { type: "autoboxing" }
  }
];
