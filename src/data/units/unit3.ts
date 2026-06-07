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
    whyExists: "To separate error-handling code from regular code, prevent program crashes, and propagate errors cleanly up the call stack.",
    whereUsed: ["File I/O", "Network operations", "Database access", "User input validation", "Parsing", "Anywhere errors may occur"],
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
      caption: "Basic try-catch-finally with a divide-by-zero."
    },
    internalWorking: {
      steps: [
        "When an exception is thrown, the JVM allocates an exception object on the heap containing the stack trace, message, and cause.",
        "The current method's stack frame is popped, and the JVM walks up the call stack looking for a catch block that matches the exception type.",
        "If a matching catch is found, control transfers to it; the rest of the try block is skipped.",
        "After the catch (or if no exception occurred), the finally block runs even when the catch re-throws.",
        "If no catch matches anywhere in the call stack, the JVM's default handler prints the stack trace and terminates the thread."
      ],
      memory: "Throwing an exception is expensive: building the stack trace can cost microseconds. Don't use exceptions for normal control flow."
    },
    examAnswer: {
      twoMark: "Exception handling is a mechanism in Java to handle runtime errors using five keywords: try, catch, finally, throw, and throws. It allows a program to continue executing even after an error occurs, separating error-handling code from regular logic.",
      thirteenMark: {
        intro: "Exception handling is a structured mechanism for managing runtime anomalies in Java programs. It is one of the strongest features of the language and a favourite exam topic.",
        definition: "Exception handling is a programming construct that allows a program to detect, raise, and respond to exceptional conditions (errors) during runtime without crashing. In Java, exceptions are objects whose class extends java.lang.Throwable.",
        explanation: "Java's exception hierarchy is rooted at Throwable. It branches into Error (fatal, unrecoverable, e.g. OutOfMemoryError) and Exception. Exception further splits into checked exceptions (compile-time, e.g. IOException, SQLException) and unchecked exceptions (RuntimeException and its subclasses, e.g. NullPointerException, ArithmeticException). Checked exceptions must be either caught or declared with throws. The five keywords are try (guarded region), catch (handler), finally (always runs), throw (explicitly raise), and throws (declare in method signature). Custom exceptions are created by extending Exception (checked) or RuntimeException (unchecked). Java 7+ also added try-with-resources for automatic cleanup of AutoCloseable objects.",
        diagram: "java.lang.Throwable\n   +-- java.lang.Error          (unchecked, fatal)\n   |     +-- OutOfMemoryError\n   |     +-- StackOverflowError\n   +-- java.lang.Exception\n         +-- IOException         (checked)\n         +-- SQLException        (checked)\n         +-- RuntimeException    (unchecked)\n               +-- NullPointerException\n               +-- ArithmeticException\n               +-- ArrayIndexOutOfBoundsException",
        example: "try {\n  FileReader f = new FileReader(\"a.txt\");\n  f.read();\n} catch (FileNotFoundException e) {\n  System.out.println(\"Missing file\");\n} catch (IOException e) {\n  System.out.println(\"Read error\");\n} finally {\n  System.out.println(\"Cleanup\");\n}",
        conclusion: "Exception handling is critical for writing reliable, maintainable Java applications. Understanding the hierarchy and the difference between checked and unchecked is essential."
      },
      sixteenMark: {
        intro: "Java's exception handling is a structured, type-safe approach to managing runtime errors. It separates error-handling code from business logic, supports propagation, and provides a uniform way to model error conditions.",
        definition: "Exception handling in Java is a mechanism that uses the keywords try, catch, finally, throw, and throws along with the java.lang.Throwable hierarchy to detect, raise, declare, and respond to abnormal conditions during program execution.",
        explanation: "Throwable is the root of the exception hierarchy. It has two main subclasses: Error (fatal, generally unrecoverable JVM-level problems like OutOfMemoryError) and Exception (conditions applications can catch and handle). Exception divides into checked exceptions (must be declared or caught, e.g. IOException, ClassNotFoundException) and unchecked exceptions (RuntimeException and its subclasses, optional to handle, e.g. NullPointerException, ArrayIndexOutOfBoundsException). The try block wraps guarded code; catch blocks handle matching exception types (most specific first); finally always runs and is typically used for cleanup. The throw statement explicitly raises an exception; the throws clause in a method signature declares that a method may propagate a checked exception. Custom exceptions extend Exception (checked) or RuntimeException (unchecked). Java 7 added multi-catch (catch (E1 | E2 e)) and try-with-resources for AutoCloseable objects. Stack traces are populated by the JVM as the exception propagates.",
        working: "1. Code inside try executes normally.\n2. If an exception is thrown, the JVM captures the current stack trace into a new exception object.\n3. The JVM searches the current method for a matching catch block.\n4. If found, control jumps to that catch; the rest of the try is skipped.\n5. The finally block executes whether or not an exception occurred.\n6. If no matching catch exists, the exception propagates to the caller.\n7. If propagation reaches main() with no handler, the default handler prints the stack trace and terminates the thread.",
        diagram: "methodA()  ----throws---->  methodB()  ----throws---->  main()\n   |                              |                              |\n   v                              v                              v\n try { ... }                  try { ... }                  try { ... }\n catch(E e) {}                catch(E e) {}                catch(E e) {}\n finally { ... }              finally { ... }              finally { ... }",
        example: "class MyException extends Exception {\n  MyException(String s) { super(s); }\n}\n\nvoid validate(int age) throws MyException {\n  if (age < 18) throw new MyException(\"Too young\");\n}\n\n// try-with-resources (Java 7+)\ntry (FileReader fr = new FileReader(\"data.txt\")) {\n  // fr is auto-closed\n} catch (IOException e) {\n  System.out.println(e.getMessage());\n}",
        output: "If age < 18, MyException is thrown with message 'Too young'. try-with-resources guarantees the file is closed even if an exception occurs while reading.",
        advantages: [
          "Separation of error-handling code from normal logic",
          "Prevents abrupt termination of programs",
          "Propagates errors cleanly up the call stack",
          "Encourages thinking about error conditions at design time",
          "Type-safe exception hierarchy"
        ],
        applications: [
          "File and network I/O",
          "Database access (JDBC)",
          "Parsing and validation of user input",
          "Distributed systems and remote calls",
          "Server request handling"
        ],
        conclusion: "Exception handling is a cornerstone of robust Java programming. Mastering the Throwable hierarchy, the difference between checked and unchecked, and best practices (specific catches, no empty catch, prefer try-with-resources) is essential for writing production-quality code."
      }
    },
    viva: [
      { q: "What is the base class of all exceptions?", a: "java.lang.Throwable — it is the root of the entire exception and error hierarchy." },
      { q: "Difference: checked vs unchecked?", a: "Checked exceptions are checked at compile time and must be caught or declared (e.g. IOException). Unchecked exceptions extend RuntimeException and are not checked by the compiler (e.g. NullPointerException)." },
      { q: "What is the difference between Error and Exception?", a: "Error indicates serious, unrecoverable problems (OutOfMemoryError, StackOverflowError) and should not be caught. Exception represents conditions applications are expected to handle." },
      { q: "Can a try block exist without a catch block?", a: "Yes — a try must have at least one catch or a finally. try-with-resources also allows no catch/finally." },
      { q: "What happens if both catch and finally throw exceptions?", a: "The exception from the finally block propagates and the original exception from the catch is lost (suppressed since Java 7 with try-with-resources addSuppressed)." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is the root of the exception hierarchy?", options: ["Exception", "Error", "Throwable", "RuntimeException"], answer: 2, explanation: "Throwable is the root; Error and Exception are its direct subclasses." },
        { question: "Which block always runs?", options: ["try", "catch", "finally", "throw"], answer: 2, explanation: "finally always runs, except on System.exit() or JVM crash." },
        { question: "Which is a checked exception?", options: ["NullPointerException", "ArithmeticException", "IOException", "ArrayIndexOutOfBoundsException"], answer: 2, explanation: "IOException must be declared/handled; the others extend RuntimeException." },
        { question: "try-with-resources requires the resource to implement:", options: ["Serializable", "Cloneable", "AutoCloseable", "Comparable"], answer: 2, explanation: "AutoCloseable (or its subinterface Closeable) provides the close() method called automatically." }
      ],
      trueFalse: [
        { statement: "Error is recoverable.", answer: false, explanation: "Errors are typically fatal (OutOfMemoryError, StackOverflowError) and not meant to be caught." },
        { statement: "A catch for Exception will also catch RuntimeException.", answer: true, explanation: "RuntimeException is a subclass of Exception, so catch (Exception e) catches it (and all subclasses)." },
        { statement: "You can have a try block with no catch but no finally.", answer: false, explanation: "Every try must have at least one catch or a finally (try-with-resources counts as having resources)." }
      ]
    },
    revision: {
      oneMin: "try-catch-finally, throw, throws. Throwable → Error + Exception. Exception → checked + RuntimeException.",
      fiveMin: [
        "Hierarchy: Throwable → Error, Exception; Exception → checked, RuntimeException → unchecked",
        "Five keywords: try, catch, finally, throw, throws",
        "Custom exceptions: extend Exception (checked) or RuntimeException (unchecked)",
        "try-with-resources: auto-closes AutoCloseable, Java 7+",
        "Multi-catch: catch (E1 | E2 e) — Java 7+"
      ],
      examDay: ["5 keywords with examples", "Hierarchy diagram", "Checked vs unchecked table", "try-with-resources syntax"],
      memoryTrick: "try = try to do, catch = catch the error, finally = always cleanup, throw = throw it now, throws = method promises to throw.",
      faq: [
        { q: "Can finally be skipped?", a: "Only by System.exit(), Runtime.halt(), or a JVM crash (or if the JVM thread is killed)." },
        { q: "What is a suppressed exception?", a: "When try-with-resources throws and the close() also throws, the close exception is added via addSuppressed() to the primary one." },
        { q: "Why not catch Throwable?", a: "It catches Error too, which is unsafe — you may swallow OutOfMemoryError and make things worse." }
      ]
    },
    simulator: { type: "exception-flow" }
  },
  {
    id: "u3-try-catch",
    unitId: 3,
    index: 2,
    title: "try, catch, throw, throws, finally",
    tagline: "The five keywords of exception handling",
    oneLiner: "These five keywords form the core of Java's exception handling: try (monitor), catch (handle), throw (raise), throws (declare), finally (cleanup).",
    analogy: "Try = experiment. Catch = record the failure. Throw = report a problem. Throws = sign a waiver. Finally = clean up the lab.",
    whyExists: "To provide a structured way to detect, raise, declare, handle, and clean up after exceptions in Java programs.",
    whereUsed: ["All robust Java code that touches I/O, network, parsing, or external systems"],
    visualCue: "🪤",
    code: {
      language: "java",
      code: `void m() throws IOException {
  try {
    riskyOp();
  } catch (IOException e) {
    throw new RuntimeException(e);
  } finally {
    cleanup();
  }
}`,
      caption: "All five keywords in one snippet."
    },
    internalWorking: {
      steps: [
        "try marks the guarded region — exceptions thrown inside it are eligible to be caught.",
        "catch (ExceptionType e) handles a specific exception type; e is the exception object with getMessage(), printStackTrace(), getCause().",
        "throw new X(...) explicitly raises an exception at the current statement.",
        "throws ExceptionType in the method signature declares that the method may propagate a checked exception to its caller.",
        "finally always runs (after try or after catch) for cleanup like closing files or releasing locks."
      ]
    },
    examAnswer: {
      twoMark: "try contains code that may throw. catch handles a specific exception. throw explicitly raises an exception. throws declares in a method signature the exceptions a method may propagate. finally always executes, used for cleanup. Together they form Java's structured exception handling.",
      thirteenMark: {
        intro: "These five keywords are the building blocks of Java's exception handling model and are essential for writing reliable code.",
        definition: "try-catch is used to handle exceptions. throw raises an exception. throws declares that a method may throw one or more exceptions. finally is a block that always runs, used for cleanup.",
        explanation: "The try { } block contains the code to be monitored. catch(ExceptionType e) { } catches and handles a specific exception — multiple catches are allowed and the most specific must come first (subclass before superclass). Multi-catch (Java 7+) lets one catch handle multiple types: catch (E1 | E2 e). The throw keyword followed by an exception object raises an exception. The throws keyword in a method signature declares checked exceptions that the method may propagate. The finally { } block runs regardless of whether an exception occurred or was caught, and is typically used for cleanup (closing files, releasing locks). Java 7+ also provides try-with-resources, where the resource is declared in the try header and auto-closed.",
        diagram: "try       → wraps risky code\ncatch     → handles a specific exception type\nthrow     → explicitly raise an exception\nthrows    → declare checked exceptions in method signature\nfinally   → always runs (cleanup)\n\ntry { ... }\ncatch (E1 e) { ... }\ncatch (E2 | E3 e) { ... }   // multi-catch (Java 7+)\nfinally { ... }",
        example: "static void check(int a) {\n  if (a < 0) throw new IllegalArgumentException(\"negative\");\n}\n\nvoid read() throws IOException {\n  FileReader r = new FileReader(\"f.txt\");\n  r.read();\n}\n\n// multi-catch\ntry {\n  risky();\n} catch (IOException | SQLException e) {\n  System.out.println(e.getMessage());\n}",
        conclusion: "Mastering these five keywords is essential for robust Java error handling. Modern Java encourages try-with-resources and multi-catch for cleaner code."
      },
      sixteenMark: {
        intro: "Java's exception model is built on five keywords. Together they provide structured detection, raising, declaration, handling, and cleanup of exceptional conditions.",
        definition: "try, catch, throw, throws, and finally are the five keywords that make up Java's structured exception handling. They allow methods to detect, raise, declare, and recover from runtime errors in a type-safe manner.",
        explanation: "The try { } block contains guarded code — code that may throw. If no exception occurs, the catch and finally still run as appropriate. catch (ExceptionType e) { } catches a specific exception; the parameter e is the exception object. Multiple catch blocks can be chained; the most specific must be listed first. Multi-catch (Java 7+) allows one catch block to handle multiple unrelated types: catch (IOException | SQLException e). The throw statement raises an exception explicitly: throw new IOException(\"disk full\"). The throws clause in a method signature declares that the method may propagate one or more checked exception types: void read() throws IOException. finally { } always runs after try/catch, used for cleanup. Java 7+ also introduced try-with-resources: try (FileReader fr = new FileReader(\"a.txt\") { ... } — the resource is auto-closed even if an exception occurs. Catching Throwable or Error is generally a bad practice; catch specific exceptions or their supertypes carefully.",
        working: "1. Execution enters the try block.\n2. If a statement in try throws, control jumps to the first matching catch block.\n3. If no matching catch exists, the exception propagates to the caller.\n4. After try (success) or catch (handled), the finally block runs.\n5. If finally itself throws, that new exception replaces any in-flight exception (or is added as suppressed with try-with-resources).",
        diagram: "method() throws E1, E2 {\n  try {\n    ... // guarded code\n  } catch (E1 e) {\n    ... // handle E1\n  } catch (E2 e) {\n    ... // handle E2\n  } finally {\n    ... // always runs\n  }\n\n  // throw keyword\n  if (bad) throw new E1(\"reason\");\n}",
        example: "// Custom checked exception\nclass TooSmallException extends Exception {\n  TooSmallException(String s) { super(s); }\n}\n\nstatic int positive(int n) throws TooSmallException {\n  if (n <= 0) throw new TooSmallException(\"must be > 0\");\n  return n;\n}\n\n// try-with-resources (Java 7+)\ntry (FileReader fr = new FileReader(\"data.txt\");\n     BufferedReader br = new BufferedReader(fr)) {\n  return br.readLine();\n} catch (IOException e) {\n  System.out.println(\"I/O failed: \" + e.getMessage());\n} finally {\n  System.out.println(\"done\");\n}",
        output: "For positive(5) returns 5. For positive(-1) throws TooSmallException. try-with-resources auto-closes BufferedReader even on exception.",
        advantages: [
          "Structured, type-safe error handling",
          "Compiler enforces handling of checked exceptions",
          "finally guarantees cleanup (without try-with-resources)",
          "Multi-catch and try-with-resources reduce boilerplate (Java 7+)",
          "Custom exceptions let you model domain-specific errors"
        ],
        applications: [
          "I/O, file, and network code",
          "Parsing user input",
          "Remote procedure calls",
          "Validation of preconditions"
        ],
        conclusion: "These five keywords are central to writing reliable Java code. Modern Java adds multi-catch and try-with-resources to make the model more concise, and you should prefer those where applicable."
      }
    },
    viva: [
      { q: "Can a try block exist without catch?", a: "Yes, if it has a finally block (or uses try-with-resources in Java 7+)." },
      { q: "Can we have multiple catch blocks?", a: "Yes, but the most specific exception type must be caught first; otherwise it is a compile error." },
      { q: "What is the difference between throw and throws?", a: "throw is a statement that explicitly raises an exception object; throws is a clause in a method signature that declares which exception types the method may propagate." },
      { q: "Can we rethrow an exception from a catch block?", a: "Yes — simply call throw e; (or throw new AnotherException(e) wrapping the cause)." },
      { q: "Can finally be skipped?", a: "Only on System.exit(), Runtime.halt(), a fatal JVM error, or if the thread is killed." }
    ],
    quiz: {
      mcqs: [
        { question: "Which keyword raises an exception?", options: ["catch", "throw", "throws", "finally"], answer: 1, explanation: "throw raises an exception object." },
        { question: "Which declares exceptions in a method signature?", options: ["throw", "throws", "catch", "try"], answer: 1, explanation: "throws declares checked exceptions the method may propagate." },
        { question: "Multi-catch (catch (E1 | E2 e)) was introduced in:", options: ["Java 5", "Java 7", "Java 8", "Java 11"], answer: 1, explanation: "Java 7 introduced multi-catch and try-with-resources." },
        { question: "Which block runs even if no exception is thrown?", options: ["catch", "throw", "finally", "throws"], answer: 2, explanation: "finally always runs after try (and after catch when one fires)." }
      ],
      trueFalse: [
        { statement: "finally can throw an exception.", answer: true, explanation: "Yes, but if finally throws and a try/catch also had an in-flight exception, the original is lost (unless suppressed via try-with-resources)." },
        { statement: "throws is used inside a method body.", answer: false, explanation: "throws is part of the method signature (declaration), not the body. throw is the statement inside the body." },
        { statement: "A catch parameter is final effectively and cannot be reassigned.", answer: true, explanation: "In multi-catch, the parameter is treated as effectively final, so you cannot reassign it." }
      ]
    },
    revision: {
      oneMin: "try-catch-handle, throw-raise, throws-declare, finally-cleanup.",
      fiveMin: [
        "Order of catch: subclass before supertype",
        "Multi-catch: catch (E1 | E2 e) — Java 7+",
        "try-with-resources: auto-closes AutoCloseable — Java 7+",
        "throw vs throws: statement vs declaration",
        "finally always runs (almost always)"
      ],
      examDay: ["All 5 keywords with one-line example each", "try-with-resources example", "Custom checked exception example"],
      memoryTrick: "try = experiment, catch = record, throw = raise, throws = promise, finally = cleanup.",
      faq: [
        { q: "What is multi-catch?", a: "catch (E1 | E2 e) — handles multiple exception types in a single block. Java 7+." },
        { q: "What is try-with-resources?", a: "try (Resource r = ...) { } — r is auto-closed via close() even on exception. Resource must implement AutoCloseable. Java 7+." },
        { q: "Can we throw a checked exception from a method that doesn't declare throws?", a: "No, not directly. You could wrap it in an unchecked RuntimeException." }
      ]
    },
    simulator: { type: "exception-flow" }
  },
  {
    id: "u3-thread-class",
    unitId: 3,
    index: 3,
    title: "Thread Class & Runnable Interface",
    tagline: "Two ways to create threads",
    oneLiner: "Java supports multithreading via the Thread class (extend) or the Runnable interface (implement). Callable adds the ability to return a result and throw checked exceptions.",
    analogy: "A thread is like a worker. You can either hire a worker directly (extend Thread) or hand a job description to a worker pool (implement Runnable).",
    whyExists: "To enable concurrent execution of tasks, better utilize multi-core CPUs, and keep UIs responsive.",
    whereUsed: ["Servers", "GUI apps", "Background tasks", "Parallel processing", "Asynchronous I/O"],
    visualCue: "🧵",
    code: {
      language: "java",
      code: `// 1) By extending Thread
class T1 extends Thread {
  public void run() {
    System.out.println("Thread running: " + getName());
  }
}
new T1().start();

// 2) By implementing Runnable
class T2 implements Runnable {
  public void run() {
    System.out.println("Runnable running");
  }
}
new Thread(new T2()).start();

// 3) Using a lambda (Runnable is functional)
new Thread(() -> System.out.println("Lambda thread")).start();`,
      caption: "Three ways to create a thread — extending, implementing, and lambda."
    },
    internalWorking: {
      steps: [
        "A Thread instance wraps a Runnable task (or its own overridden run() if you extend Thread).",
        "start() allocates a new JVM stack, registers the thread with the OS thread scheduler, and invokes run() on the new thread.",
        "Calling run() directly runs the code on the caller's thread — no new thread is created.",
        "The JVM maps Java threads to native (OS) threads 1:1 on most modern platforms.",
        "The scheduler decides when to give CPU time to each runnable thread."
      ],
      memory: "start() can only be called once per Thread instance. Calling it twice throws IllegalThreadStateException."
    },
    examAnswer: {
      twoMark: "In Java, a thread can be created by extending the Thread class or implementing the Runnable interface. Both require a run() method containing the task. start() begins execution on a new thread; calling run() directly runs in the current thread.",
      thirteenMark: {
        intro: "Java provides two primary ways to create a thread, plus the Callable interface for tasks that return a result. Choosing the right one matters for flexibility and design.",
        definition: "Thread is a class in java.lang that represents a thread of execution. Runnable is a functional interface in java.lang with a single run() method, representing a task that can be executed by a thread. Callable<V> is similar but returns a value and can throw checked exceptions.",
        explanation: "Extending Thread: the subclass overrides run() and you call start() on an instance. Implementing Runnable: you provide a class with run() and pass it to the Thread constructor. Runnable is preferred because Java does not support multiple class inheritance — extending Thread consumes your only extends slot, while implementing Runnable lets your class extend another class if needed. Runnable also decouples the task from the thread, which is useful for thread pools. Java 8+ lambdas can implement Runnable concisely. start() vs run(): start() creates a new thread of execution and invokes run() on it; calling run() directly executes the code in the current thread with no new thread created. Callable<V> is the task interface for ExecutorService.submit() that returns a value via a Future.",
        diagram: "java.lang.Object\n   |\njava.lang.Thread       java.lang.Runnable (interface)\n   |                          ^\n   +-- MyThread extends        +-- MyTask implements Runnable\n        Thread, overrides          overrides run()\n        run()                      |\n   |                              |\n   +-- new Thread(task).start()  ← wraps task and starts thread\n\njava.util.concurrent.Callable<V>  →  call() returns V, throws Exception\nsubmit(Callable) → Future<V>     →  result via future.get()",
        example: "// Lambda Runnable\nnew Thread(() -> System.out.println(\"Lambda thread\")).start();\n\n// Callable via ExecutorService\nExecutorService es = Executors.newSingleThreadExecutor();\nFuture<Integer> f = es.submit(() -> 1 + 2);\nSystem.out.println(f.get()); // 3\nes.shutdown();",
        conclusion: "Both Thread and Runnable work; Runnable is the more flexible and idiomatic choice. Use Callable with ExecutorService when you need a return value or checked exceptions."
      },
      sixteenMark: {
        intro: "Thread and Runnable are the two pillars of Java multithreading. Choosing between them — and knowing about Callable — is essential for writing concurrent Java applications.",
        definition: "Thread is a class in java.lang representing a thread of execution. Runnable is a functional interface (single method: void run()) representing a unit of work. Callable<V> is a functional interface (single method: V call() throws Exception) representing a task that returns a value and can throw checked exceptions.",
        explanation: "Extending Thread: simple but limits further inheritance. Implementing Runnable: the preferred way because it decouples task from thread and leaves the class free to extend another. Both approaches converge at start(), which creates a new call stack and invokes run() in a new JVM thread. Calling run() directly is just a normal method invocation — no new thread is created. Java 8+ lambdas can implement Runnable and Callable concisely. Thread lifecycle: New → Runnable → Blocked/Waiting/Timed_Waiting → Terminated. The newer ExecutorService abstraction accepts Runnable and Callable via submit(); submit(Runnable) returns a Future<?> and submit(Callable<V>) returns Future<V>. Always shut down an ExecutorService with shutdown() or shutdownNow(). Thread.currentThread() returns the currently executing Thread; use Thread.sleep(ms) to pause.",
        working: "1. A Thread object is created (new Thread(task) or new MyThread()).\n2. start() is called — the JVM registers the thread with the OS scheduler.\n3. The scheduler assigns CPU time; the new thread's run() executes.\n4. The thread runs concurrently with other threads.\n5. When run() returns (normally or via exception), the thread terminates and cannot be restarted.",
        diagram: "+-------------------+\n|      Thread       |\n+-------------------+\n| - name            |\n| - priority        |\n| - daemon?         |\n+-------------------+\n| + start()         |   <-- creates new call stack, calls run()\n| + run()           |   <-- task; override this\n| + sleep(ms)       |\n| + join()          |\n| + getState()      |\n+-------------------+\n        ^\n        | extends\n        |\n  +-------------+\n  |  MyThread   |\n  +-------------+\n  | + run() {}  |\n  +-------------+\n\nRunnable task = () -> { ... };\nnew Thread(task).start();    // wraps and starts",
        example: "class CounterTask implements Runnable {\n  public void run() {\n    for (int i = 1; i <= 5; i++) {\n      System.out.println(Thread.currentThread().getName() + \" : \" + i);\n    }\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Thread t1 = new Thread(new CounterTask(), \"Worker-1\");\n    Thread t2 = new Thread(new CounterTask(), \"Worker-2\");\n    t1.start();\n    t2.start();\n  }\n}",
        output: "Worker-1 : 1\nWorker-2 : 1\nWorker-1 : 2\nWorker-2 : 2\n... (interleaved, non-deterministic order)",
        advantages: [
          "Concurrent execution of tasks",
          "Better CPU utilisation on multi-core systems",
          "Responsive UIs (background work)",
          "Runnable separates task from thread (cleaner design)",
          "Lambda syntax makes Runnable concise"
        ],
        applications: [
          "Web and application servers (thread pools)",
          "GUI event dispatch threads",
          "Background jobs and schedulers",
          "Parallel computation (fork/join, parallel streams)",
          "Asynchronous I/O"
        ],
        conclusion: "Threads are essential for concurrent Java programs. Prefer implementing Runnable (or using Callable with ExecutorService) for flexibility, and always call start() — never run() — to spawn a new thread."
      }
    },
    viva: [
      { q: "Difference: start() vs run()?", a: "start() creates a new thread and calls run() on it. run() executes the code in the caller's current thread with no new thread." },
      { q: "Which is preferred: Thread or Runnable?", a: "Runnable — it allows the class to extend another class, supports multiple inheritance of interface, and separates task from thread." },
      { q: "What is Callable and how is it different from Runnable?", a: "Callable<V> has call() that returns a value and can throw checked exceptions; Runnable.run() returns void and cannot throw checked exceptions. Callable works with ExecutorService.submit() which returns a Future<V>." },
      { q: "Can we start a thread twice?", a: "No — calling start() on an already-started thread throws IllegalThreadStateException." }
    ],
    quiz: {
      mcqs: [
        { question: "Runnable is a:", options: ["Class", "Interface", "Method", "Package"], answer: 1, explanation: "Runnable is a functional interface with a single run() method." },
        { question: "Which method starts a thread?", options: ["run()", "start()", "init()", "begin()"], answer: 1, explanation: "start() creates a new call stack and invokes run() on the new thread." },
        { question: "Callable.call() can:", options: ["return void", "return a value and throw checked exceptions", "only return int", "never throw exceptions"], answer: 1, explanation: "Callable<V>.call() returns V and throws Exception." },
        { question: "Which package contains Thread?", options: ["java.util", "java.io", "java.lang", "java.util.concurrent"], answer: 2, explanation: "java.lang — no import needed." }
      ],
      trueFalse: [
        { statement: "We can start a thread twice.", answer: false, explanation: "Throws IllegalThreadStateException — each Thread instance can be started only once." },
        { statement: "Calling run() directly creates a new thread.", answer: false, explanation: "run() called directly runs in the caller's thread. Use start() to create a new thread." },
        { statement: "Java allows multiple class inheritance, so extending Thread is fine.", answer: false, explanation: "Java does NOT allow multiple class inheritance — a class can extend only one. That's why implementing Runnable is preferred." }
      ]
    },
    revision: {
      oneMin: "Thread class or Runnable interface. start() begins execution on a new thread.",
      fiveMin: [
        "Extend vs implement — prefer Runnable",
        "start() vs run() — start() creates new thread",
        "Lambda Runnable — concise functional style",
        "Callable<V> + Future<V> for results",
        "Lifecycle: New → Runnable → ... → Terminated"
      ],
      examDay: ["Comparison table: Thread vs Runnable vs Callable", "start() vs run() with example", "Lambda Runnable example"],
      memoryTrick: "Thread = the worker; Runnable = the job ticket; Callable = the job ticket with a result slip.",
      faq: [
        { q: "Can we extend Thread and implement Runnable?", a: "Yes, but it's redundant — Thread already implements Runnable." },
        { q: "How do I get the result of a thread task?", a: "Use Callable<V> with ExecutorService.submit(Callable<V>) which returns a Future<V>; call future.get() to retrieve the result (blocks until ready)." },
        { q: "What does Thread.currentThread() return?", a: "A reference to the Thread executing the current code. Useful for getting name, id, or for logging." }
      ]
    },
    simulator: { type: "thread-lifecycle" }
  },
  {
    id: "u3-thread-lifecycle",
    unitId: 3,
    index: 4,
    title: "Thread Lifecycle",
    tagline: "States of a thread",
    oneLiner: "A thread in Java goes through six states: New, Runnable, Blocked, Waiting, Timed_Waiting, and Terminated. Thread.getState() returns the current state.",
    analogy: "A person's life: born (new), awake and ready (runnable), busy (running), waiting at a doctor's (waiting), napping (timed waiting), stuck in a queue (blocked), dead (terminated).",
    whyExists: "To model, manage, and debug thread states and scheduling. Knowing the state helps diagnose deadlocks, starvation, and liveness issues.",
    whereUsed: ["Concurrency debugging", "Performance tuning", "Thread pools", "Operating systems"],
    visualCue: "♻️",
    code: {
      language: "java",
      code: `Thread t = new Thread(() -> {
  try {
    Thread.sleep(1000);   // TIMED_WAITING
  } catch (InterruptedException e) {
    Thread.currentThread().interrupt();
  }
}, "demo");

System.out.println(t.getState()); // NEW
t.start();
System.out.println(t.getState()); // RUNNABLE (likely)
Thread.sleep(100);
System.out.println(t.getState()); // TIMED_WAITING
t.join();
System.out.println(t.getState()); // TERMINATED`,
      caption: "Lifecycle demo using getState()."
    },
    internalWorking: {
      steps: [
        "NEW: Thread object created, start() not yet called.",
        "RUNNABLE: start() called, eligible for the scheduler. The thread may be actually running on CPU or sitting in the run queue.",
        "BLOCKED: waiting to acquire a monitor lock to enter a synchronized block/method.",
        "WAITING: waiting indefinitely — Object.wait() (no timeout), Thread.join() (no timeout), LockSupport.park().",
        "TIMED_WAITING: waiting with a timeout — Thread.sleep(ms), Object.wait(ms), Thread.join(ms), LockSupport.parkNanos().",
        "TERMINATED: run() returned normally or an uncaught exception terminated the thread. Cannot be restarted."
      ],
      memory: "A terminated thread is dead — calling start() on it again throws IllegalThreadStateException."
    },
    examAnswer: {
      twoMark: "A thread in Java exists in one of six states: New, Runnable, Blocked, Waiting, Timed_Waiting, or Terminated. The transitions are managed by the JVM and the OS thread scheduler, and can be queried using Thread.getState().",
      thirteenMark: {
        intro: "Understanding thread states is key to debugging concurrency, analysing liveness, and reasoning about performance.",
        definition: "Thread lifecycle describes the set of states a thread passes through from creation to termination: New, Runnable, Blocked, Waiting, Timed_Waiting, and Terminated.",
        explanation: "New: the Thread object is created but start() has not been called. Runnable: start() has been called and the thread is eligible for the CPU; the scheduler may have already given it time. Blocked: the thread is waiting to acquire an object's monitor lock to enter a synchronized block or method. Waiting: the thread waits indefinitely for another thread to perform a particular action — Object.wait() without timeout, Thread.join() without timeout, or LockSupport.park(). Timed_Waiting: like Waiting but with a timeout — Thread.sleep(ms), Object.wait(ms, n), Thread.join(ms), or LockSupport.parkNanos(). Terminated: run() has returned normally, or an uncaught exception caused the thread to die. The Thread.getState() method returns the current state as a Thread.State enum value.",
        diagram: "+-------+  start()  +----------+ run() exits  +-------------+\n|  NEW  | ---------> | RUNNABLE | -----------> | TERMINATED  |\n+-------+            +----------+               +-------------+\n                          ^  |\n                          |  |  notify/notifyAll/timeout\n                          |  v\n              +-------------------+  +----------------------+\n              |      BLOCKED      |  |     WAITING /        |\n              |  (waiting for     |  |   TIMED_WAITING      |\n              |   monitor lock)   |  |   (wait/join/sleep)  |\n              +-------------------+  +----------------------+",
        example: "Thread t = new Thread(() -> {\n  try { Thread.sleep(500); } catch (InterruptedException ignored) {}\n});\nt.start();\nThread.sleep(100);\nSystem.out.println(t.getState()); // TIMED_WAITING\nt.join();\nSystem.out.println(t.getState()); // TERMINATED",
        conclusion: "Knowing the six thread states and what causes transitions between them is essential for diagnosing deadlocks, starvation, and other concurrency issues."
      },
      sixteenMark: {
        intro: "Java threads have a well-defined lifecycle governed by the JVM and the OS scheduler. There are six states in java.lang.Thread.State, and every thread is always in exactly one of them.",
        definition: "Thread lifecycle refers to the set of states a thread passes through: New, Runnable, Blocked, Waiting, Timed_Waiting, and Terminated. The Thread.getState() method returns the current state.",
        explanation: "New: the Thread instance has been created but start() has not been called. Runnable: start() has been called; the thread is in the run queue and may or may not be currently running on a CPU. In Java, runnable and running are unified into RUNNABLE because the JVM does not reliably know when the OS scheduler switches threads. Blocked: the thread tried to enter a synchronized block/method but the monitor is held by another thread; it sits in the entry set. Waiting: the thread is waiting indefinitely — Object.wait() (no timeout), Thread.join() (no timeout), or LockSupport.park(). Timed_Waiting: the thread is waiting for a specific time — Thread.sleep(ms), Object.wait(ms, n), Thread.join(ms), LockSupport.parkNanos(), or Thread.sleep(ms, n). Terminated: the thread has finished — run() returned normally or an uncaught exception killed it. A terminated thread cannot be restarted. Use Thread.getState() to query the state; it returns a Thread.State enum value.",
        working: "1. new Thread(task) → state is NEW.\n2. t.start() → state becomes RUNNABLE; thread is scheduled by the OS.\n3. Thread tries to enter synchronized(obj) but obj's monitor is held → state becomes BLOCKED.\n4. Inside synchronized, thread calls obj.wait() → state becomes WAITING.\n5. obj.wait(ms) or Thread.sleep(ms) → state becomes TIMED_WAITING.\n6. notify/notifyAll/timeout fires or lock becomes available → state goes back to RUNNABLE.\n7. run() returns or uncaught exception escapes → state becomes TERMINATED.",
        diagram: "                +------------------+\n                |       NEW        |\n                +------------------+\n                         | start()\n                         v\n        +----------------------------------+\n        |             RUNNABLE             |  <----+\n        +----------------------------------+       |\n                |             ^                    |  lock acquired /\n                | monitor     |                    |  notify / timeout\n                v unavailable |                    |\n        +------------------+   |                    |\n        |     BLOCKED      |---+                    |\n        +------------------+                        |\n                ^                                  |\n                | monitor                          |\n                v                                  |\n        +------------------+   notify/timeout      |\n        |     WAITING      |---------------->---->+\n        +------------------+\n        |     TIMED_WAITING| (sleep/wait/join with timeout)\n        +------------------+\n                         | run() returns / uncaught exception\n                         v\n                +------------------+\n                |   TERMINATED     |\n                +------------------+",
        example: "public class States {\n  public static void main(String[] args) throws Exception {\n    Object lock = new Object();\n    Thread t = new Thread(() -> {\n      synchronized (lock) {\n        try { lock.wait(); } catch (InterruptedException ignored) {}\n      }\n    });\n    t.start();\n    Thread.sleep(50);\n    System.out.println(t.getState()); // WAITING\n    synchronized (lock) { lock.notify(); }\n    t.join();\n    System.out.println(t.getState()); // TERMINATED\n  }\n}",
        output: "WAITING (while inside lock.wait()), then TERMINATED after notify and run() returns.",
        advantages: [
          "Predictable state model — six well-defined states",
          "getState() makes runtime inspection easy for debugging",
          "Helps detect deadlocks and starvation"
        ],
        applications: [
          "Concurrency debugging (visualisers, profilers)",
          "Thread pool design and tuning",
          "Diagnosing deadlocks and live-lock",
          "Operating systems concepts"
        ],
        conclusion: "Thread lifecycle knowledge is essential for concurrent Java programming. The six states (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED) and the transitions between them explain how Java threads interact with the scheduler, locks, and waits."
      }
    },
    viva: [
      { q: "What is the difference between Blocked and Waiting?", a: "Blocked: waiting to acquire an object's monitor lock (to enter a synchronized block). Waiting: waiting indefinitely for another thread's action (wait/join/park), or with a timeout for Timed_Waiting." },
      { q: "Can a dead thread be restarted?", a: "No. Calling start() on a Terminated thread throws IllegalThreadStateException." },
      { q: "How do you query a thread's state?", a: "Use Thread.getState() which returns a Thread.State enum value (NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED)." },
      { q: "Why does Java merge 'running' and 'runnable' into one state?", a: "Because the JVM cannot reliably detect when the OS scheduler preempts a thread, RUNNABLE covers both 'eligible to run' and 'currently running on CPU'." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is NOT a thread state in Java?", options: ["New", "Running", "Sleeping", "Terminated"], answer: 2, explanation: "There is no 'Sleeping' state — that is TIMED_WAITING (e.g. after Thread.sleep)." },
        { question: "How many states are defined in Thread.State?", options: ["4", "5", "6", "7"], answer: 2, explanation: "Six: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED." },
        { question: "Object.wait() without timeout puts the thread in:", options: ["BLOCKED", "WAITING", "TIMED_WAITING", "TERMINATED"], answer: 1, explanation: "wait() with no timeout → WAITING; with a timeout → TIMED_WAITING." },
        { question: "Calling start() on a thread that has already finished throws:", options: ["IllegalStateException", "IllegalThreadStateException", "NullPointerException", "ThreadDeath"], answer: 1, explanation: "IllegalThreadStateException — a thread can be started only once." }
      ],
      trueFalse: [
        { statement: "A thread can move from Blocked to Runnable.", answer: true, explanation: "When the lock it was waiting for is released by another thread, it transitions to RUNNABLE." },
        { statement: "Thread.sleep() releases the lock held by the thread.", answer: false, explanation: "sleep() does NOT release any monitor. wait() does." },
        { statement: "A terminated thread can be restarted.", answer: false, explanation: "Once terminated, a thread cannot be restarted. start() throws IllegalThreadStateException." }
      ]
    },
    revision: {
      oneMin: "New → Runnable → Blocked/Waiting/Timed_Waiting → Terminated. Use getState() to query.",
      fiveMin: [
        "6 states: NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED",
        "Transitions: start(), wait/notify, sleep, lock acquire/release, run() return",
        "Thread.getState() returns the current state",
        "Blocked = monitor lock; Waiting = no timeout; Timed_Waiting = with timeout",
        "Cannot restart a terminated thread"
      ],
      examDay: ["State diagram with all 6 states", "Causes for each transition", "getState() example"],
      memoryTrick: "Born, Ready, Busy, Rest (waiting), Nap (timed_waiting), Dead. Or: 'New Runners Block Waiting Time-out'.",
      faq: [
        { q: "Difference between wait() and sleep()?", a: "wait() releases the monitor lock and goes to WAITING/TIMED_WAITING; must be called inside synchronized. sleep() does NOT release any lock; can be called anywhere. Both throw InterruptedException." },
        { q: "Why is there no 'Running' state?", a: "Java merges running and ready into RUNNABLE because the JVM can't reliably detect OS-level preemption." }
      ]
    },
    simulator: { type: "thread-lifecycle" }
  },
  {
    id: "u3-synchronization",
    unitId: 3,
    index: 5,
    title: "Synchronization",
    tagline: "Preventing race conditions",
    oneLiner: "Synchronization in Java is the capability to control the access of multiple threads to shared resources using the synchronized keyword (intrinsic locks) or java.util.concurrent locks, preventing race conditions.",
    analogy: "A bathroom key — only one person at a time can have the key (lock) and use the bathroom (critical section).",
    whyExists: "To ensure thread safety when multiple threads access shared mutable state, and to provide well-defined happens-before relationships for visibility.",
    whereUsed: ["Bank transactions", "Shared counters", "Caches", "Connection pools", "Any mutable shared state"],
    visualCue: "🔐",
    code: {
      language: "java",
      code: `class Counter {
  private int count = 0;

  public synchronized void increment() {
    count++;                    // atomic under the lock
  }

  public synchronized int get() {
    return count;
  }
}`,
      caption: "synchronized methods provide atomicity and visibility."
    },
    internalWorking: {
      steps: [
        "Every Java object has a monitor (intrinsic lock). Static synchronized methods lock on the Class object.",
        "When a thread enters a synchronized block, the JVM attempts to acquire the monitor of the lock object.",
        "If the monitor is free, the thread acquires it and proceeds; if not, the thread is added to the entry set and enters BLOCKED.",
        "When the thread exits the synchronized region (normally or via exception), the monitor is released and a waiting thread (if any) is unblocked.",
        "Happens-before: actions inside a synchronized block are visible to threads that subsequently acquire the same monitor."
      ],
      memory: "synchronized is reentrant — the same thread can re-acquire the same lock without deadlocking (e.g. one synchronized method calling another)."
    },
    examAnswer: {
      twoMark: "Synchronization in Java is the mechanism that ensures only one thread at a time can access a shared resource (critical section). It prevents race conditions and ensures thread safety using the synchronized keyword (intrinsic locks) or the java.util.concurrent.locks package.",
      thirteenMark: {
        intro: "Synchronization is essential for thread-safe code and a core concept in Java concurrency.",
        definition: "Synchronization is a Java mechanism that controls the access of multiple threads to shared resources via monitors (intrinsic locks) so that critical sections execute atomically with respect to other threads.",
        explanation: "synchronized can be applied to instance methods, static methods, or arbitrary blocks. Instance synchronized methods lock the current object (this); static synchronized methods lock the Class object. Only one thread can hold a given monitor at a time; other threads block (state BLOCKED) until it is released. Synchronization provides two guarantees: mutual exclusion (atomicity) and visibility (writes inside a synchronized block are visible to subsequent acquirers of the same monitor, via the happens-before relationship). The alternative is the explicit Lock API in java.util.concurrent.locks (ReentrantLock, ReadWriteLock), which offers more features (tryLock, interruptible lock, fair lock). The volatile keyword gives visibility but no atomicity. Common pitfalls: deadlock from inconsistent lock ordering, livelock, and performance overhead from coarse locking.",
        diagram: "Thread1  ---lock(obj)--->  [ critical section ]  ---unlock(obj)--->\nThread2  ---(waits)----->     BLOCKED                    woken up\n\nsynchronized (lockObj) {\n  // critical section — only one thread at a time\n}",
        example: "class SafeCounter {\n  private int c = 0;\n  public synchronized void inc() { c++; }\n  public synchronized int get() { return c; }\n}\n\n// Block form for finer control\nsynchronized (this) {\n  if (balance >= amount) balance -= amount;\n}",
        conclusion: "Synchronization is fundamental for safe multithreaded programming. Use synchronized for simple cases; prefer java.util.concurrent.locks (ReentrantLock) when you need tryLock, fairness, or interruptible locking."
      },
      sixteenMark: {
        intro: "Synchronization coordinates access to shared data across threads, providing both mutual exclusion and memory visibility.",
        definition: "Synchronization in Java is the process of controlling thread access to shared resources using the synchronized keyword and intrinsic locks (monitors), or the explicit java.util.concurrent.locks.Lock interfaces, to ensure atomicity and visibility.",
        explanation: "Java has two synchronization mechanisms: intrinsic (synchronized) and explicit (java.util.concurrent.locks). The synchronized keyword can mark an instance method (locks `this`), a static method (locks the Class object), or a block (locks any object reference). Only one thread can hold a given monitor at a time. When a thread tries to enter a synchronized region whose monitor is held by another thread, it goes to BLOCKED and waits in the entry set. Reentrancy: a thread that already holds a monitor can re-enter synchronized code on the same monitor without deadlocking. The Lock interface (ReentrantLock) provides additional features: tryLock (non-blocking attempt), lockInterruptibly, fair locking, and multiple condition variables (Condition). volatile provides visibility (writes go to main memory, reads see latest) but does NOT guarantee atomicity for compound actions. final fields have a special freeze semantics that safely publishes immutable objects. Deadlock occurs when two or more threads each hold a lock the other needs and wait forever — avoid by enforcing a strict global lock ordering.",
        working: "1. Thread T1 enters synchronized(obj) — JVM attempts to acquire obj's monitor.\n2. If free, T1 acquires it; lock owner becomes T1.\n3. T2 arrives and tries to enter — finds monitor held → enters BLOCKED state.\n4. T1 exits the synchronized block (normally or via exception) — monitor is released.\n5. T2 is unblocked and re-attempts acquisition; if successful, T2 runs the critical section.\n6. Happens-before: any write T1 made inside the block is visible to T2 once T2 acquires the lock.",
        diagram: "synchronized method form:\n  class C {\n    synchronized void m() {  // lock = this\n      // critical section\n    }\n    static synchronized void s() {  // lock = C.class\n      // critical section\n    }\n  }\n\nsynchronized block form:\n  synchronized (lockObj) {\n    // critical section\n  }\n\nLock API form:\n  Lock lock = new ReentrantLock();\n  lock.lock();\n  try { /* critical section */ } finally { lock.unlock(); }",
        example: "class Bank {\n  private double balance = 0;\n  public synchronized void deposit(double amt) { balance += amt; }\n  public synchronized boolean withdraw(double amt) {\n    if (balance < amt) return false;\n    balance -= amt;\n    return true;\n  }\n  public synchronized double getBalance() { return balance; }\n}\n\n// Deadlock example (do NOT do this)\nclass Bad {\n  final Object a = new Object(), b = new Object();\n  void one() { synchronized (a) { synchronized (b) { /* ... */ } } }\n  void two() { synchronized (b) { synchronized (a) { /* ... */ } } }\n  // T1 calls one(); T2 calls two() → deadlock.",
        output: "Bank balance remains consistent. Bad example deadlocks if T1 holds a waiting for b while T2 holds b waiting for a.",
        advantages: [
          "Thread safety via mutual exclusion",
          "Visibility through happens-before",
          "Built into the language (synchronized) — simple",
          "Reentrant — same thread can re-acquire"
        ],
        applications: [
          "Bank accounts, counters, accumulators",
          "Caches with mutable entries",
          "Connection or thread pools (metadata)",
          "Atomic state machines"
        ],
        conclusion: "Synchronization is the foundation of safe multithreaded Java programs. Use synchronized for simplicity; graduate to java.util.concurrent.locks (ReentrantLock, ReadWriteLock) when you need tryLock, fairness, or interruptible locking. Always release locks in a finally block when using the Lock API."
      }
    },
    viva: [
      { q: "What is a race condition?", a: "A bug where the result depends on the unpredictable interleaving of thread execution — e.g. two threads both reading count=5, both writing count=6, losing one increment." },
      { q: "Difference: synchronized method vs block?", a: "Method locks the entire `this` (or Class for static); block can lock any object and limit the critical section — finer control, less contention." },
      { q: "What is a deadlock?", a: "Two or more threads each hold a lock the other needs and wait forever. Avoid by enforcing a consistent global lock order, using tryLock with timeout, or designing lock-free algorithms." },
      { q: "What is ReentrantLock?", a: "An explicit lock from java.util.concurrent.locks that supports reentrancy, tryLock, lockInterruptibly, fairness, and Condition variables." },
      { q: "Does volatile make ++ atomic?", a: "No. volatile only ensures visibility. count++ is read-modify-write and is NOT atomic even if count is volatile." }
    ],
    quiz: {
      mcqs: [
        { question: "synchronized uses which lock?", options: ["Mutex", "Monitor", "Semaphore", "Spin"], answer: 1, explanation: "Monitor (intrinsic lock) on the object." },
        { question: "A static synchronized method locks on:", options: ["this", "the Class object", "a separate static lock", "nothing"], answer: 1, explanation: "Static synchronized methods lock on the Class object (e.g. MyClass.class)." },
        { question: "Which provides visibility but NOT atomicity?", options: ["synchronized", "volatile", "ReentrantLock", "final"], answer: 1, explanation: "volatile gives visibility; compound operations like ++ are still non-atomic." },
        { question: "Deadlock requires:", options: ["One thread", "Two threads each holding a lock the other wants", "A tryLock call", "A volatile field"], answer: 1, explanation: "Circular wait — at least two threads each holding a lock the other needs." }
      ],
      trueFalse: [
        { statement: "synchronized can deadlock.", answer: true, explanation: "Yes, if lock acquisition order is inconsistent across threads." },
        { statement: "A thread that holds a monitor cannot re-enter synchronized code on the same monitor.", answer: false, explanation: "Java intrinsic locks are reentrant — a thread holding a monitor can re-enter synchronized code on the same monitor without deadlocking." },
        { statement: "volatile makes ++ atomic.", answer: false, explanation: "volatile gives visibility only. ++ is a read-modify-write and is NOT atomic." }
      ]
    },
    revision: {
      oneMin: "synchronized = monitor lock on object or Class. Reentrant. Provides atomicity + visibility.",
      fiveMin: [
        "Method vs block vs static",
        "Monitor (intrinsic lock) vs Lock API",
        "volatile: visibility only, no atomicity",
        "Deadlock: circular wait — avoid with lock ordering",
        "ReentrantLock: tryLock, fair, interruptible"
      ],
      examDay: ["Race condition example", "Deadlock example with two locks", "synchronized vs Lock vs volatile table"],
      memoryTrick: "synchronized = single-occupancy bathroom key. Reentrant = same person can re-enter the same room.",
      faq: [
        { q: "What is ReentrantLock?", a: "An explicit lock in java.util.concurrent.locks that supports reentrancy, tryLock, lockInterruptibly, fairness, and Condition variables. More flexible than synchronized but you must unlock in a finally block." },
        { q: "What is starvation?", a: "A thread is prevented from making progress because other threads monopolise the lock. Use a fair lock (ReentrantLock(true)) to mitigate." },
        { q: "What is the Java Memory Model (JMM)?", a: "Defines happens-before relationships: unlock→lock, volatile write→read, thread start, thread join, etc. Synchronization actions establish these relationships to guarantee visibility." }
      ]
    },
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
    whyExists: "To coordinate threads waiting on a condition (e.g., producer-consumer problem) using monitors, before higher-level concurrent utilities were added in Java 5+.",
    whereUsed: ["Producer-consumer", "Blocking queues", "Resource pools", "Custom synchronisers"],
    visualCue: "📣",
    code: {
      language: "java",
      code: `synchronized (lock) {
  while (!condition) {
    try {
      lock.wait();          // release lock, block
    } catch (InterruptedException e) {
      Thread.currentThread().interrupt();
    }
  }
  // do work
  lock.notify();            // wake one waiter
}`,
      caption: "Classic wait/notify pattern — always use a while loop."
    },
    internalWorking: {
      steps: [
        "wait() must be called inside a synchronized block on the same object; it atomically releases the monitor and adds the thread to the wait set.",
        "The thread is blocked in WAITING (or TIMED_WAITING for wait(ms)).",
        "When another thread calls notify() on the same object, one thread is moved from the wait set to the entry set.",
        "When notify()'s caller exits the synchronized block, the notified thread re-acquires the lock and returns from wait().",
        "Spurious wakeups: a thread can return from wait() without being notified — always re-check the condition in a while loop."
      ]
    },
    examAnswer: {
      twoMark: "wait(), notify(), and notifyAll() are methods of java.lang.Object used for inter-thread communication. wait() releases the lock and blocks; notify() wakes one waiting thread on the same object; notifyAll() wakes all. They must be called inside a synchronized block.",
      thirteenMark: {
        intro: "Inter-thread communication is essential for coordinated concurrent code and is the basis of the producer-consumer pattern.",
        definition: "wait() causes the current thread to release the lock and block until another thread invokes notify() or notifyAll() on the same object. notify() wakes one waiting thread; notifyAll() wakes all.",
        explanation: "These methods are inherited from Object so every Java object can act as a monitor/condition variable. They must be called inside a synchronized block on the same object — calling them outside throws IllegalMonitorStateException. wait() can throw InterruptedException. Spurious wakeups can occur (a thread returns from wait() without being notified), so always re-check the condition in a while loop. notify() picks an arbitrary thread from the wait set; notifyAll() wakes all of them and lets them re-contend for the lock. Prefer notifyAll() unless you are sure only one thread can make progress.",
        diagram: "Thread A: synchronized(lock) { while (!cond) lock.wait(); }\nThread B: synchronized(lock) { cond = true; lock.notify(); }\n\n        +-----+    wait()    +-----------+\n        |  A  | ------------> | wait set  |\n        +-----+              +-----------+\n                               ^\n        +-----+   notify()    |\n        |  B  | ---------------+\n        +-----+   A re-acquires lock and returns from wait()",
        example: "// Producer-Consumer with wait/notify\nclass Buffer {\n  private final List<Integer> list = new ArrayList<>();\n  private final int MAX = 5;\n\n  public synchronized void produce(int x) throws InterruptedException {\n    while (list.size() == MAX) wait();\n    list.add(x);\n    notifyAll();\n  }\n  public synchronized int consume() throws InterruptedException {\n    while (list.isEmpty()) wait();\n    int v = list.remove(0);\n    notifyAll();\n    return v;\n  }\n}",
        conclusion: "wait/notify is a low-level coordination primitive in Java. Use it sparingly — prefer java.util.concurrent.BlockingQueue, Semaphore, or CountDownLatch in modern code."
      },
      sixteenMark: {
        intro: "Inter-thread communication uses wait/notify/notifyAll to coordinate work between threads sharing a monitor.",
        definition: "wait() releases the monitor and blocks the current thread until another thread calls notify() or notifyAll() on the same object. notify() wakes one waiter, notifyAll() wakes all.",
        explanation: "These methods are defined on java.lang.Object so every object can serve as both a monitor (intrinsic lock) and a condition variable. They must be called from within a synchronized context on the same object, or they throw IllegalMonitorStateException. wait() releases the monitor and moves the thread to the wait set. notify() picks one thread from the wait set and moves it to the entry set, where it competes to re-acquire the lock. notifyAll() moves all waiters to the entry set. When the notifying thread exits its synchronized block, the released lock is contested by all threads in the entry set. A thread that returns from wait() must re-acquire the lock before continuing. Spurious wakeups (a thread returning from wait() without a notify) are possible due to OS-level scheduling; always re-check the condition in a while loop. Higher-level alternatives — BlockingQueue (ArrayBlockingQueue, LinkedBlockingQueue), CountDownLatch, CyclicBarrier, Semaphore, Phaser — are generally preferred in modern Java because they are harder to misuse.",
        working: "1. Thread A enters synchronized(lock) and finds the condition false.\n2. A calls lock.wait() — the monitor is released, A is added to the wait set, A becomes WAITING.\n3. Thread B enters synchronized(lock), modifies shared state, calls lock.notify() or lock.notifyAll().\n4. B exits the synchronized block, releasing the monitor.\n5. The notified thread(s) compete for the lock; one acquires it and returns from wait().\n6. The thread re-checks the condition (while loop) and proceeds if true; otherwise it waits again.",
        diagram: "Thread A:  synchronized(lock) {\n              while (!condition) {\n                lock.wait();   <-- releases lock, BLOCKED/WAITING\n              }\n              // condition true here\n            }\n\nThread B:  synchronized(lock) {\n              condition = true;\n              lock.notifyAll(); <-- wakes all waiters on `lock`\n            }\n\nTime-line:\n  A holds lock  |  A.wait() releases  |  B acquires  |  B.notifyAll()  |  B releases  |  A re-acquires\n  ---T0---------|-------T1----------|----T2--------|-------T3--------|-----T4-------|----T5---->",
        example: "import java.util.*;\n\nclass BlockingBuffer<E> {\n  private final Queue<E> q = new LinkedList<>();\n  private final int CAP;\n  BlockingBuffer(int cap) { this.CAP = cap; }\n\n  public synchronized void put(E e) throws InterruptedException {\n    while (q.size() == CAP) wait();\n    q.add(e);\n    notifyAll();                  // wake consumers\n  }\n\n  public synchronized E take() throws InterruptedException {\n    while (q.isEmpty()) wait();\n    E e = q.poll();\n    notifyAll();                  // wake producers\n    return e;\n  }\n}\n\n// Producer\nnew Thread(() -> {\n  try { for (int i = 0; i < 10; i++) buf.put(i); }\n  catch (InterruptedException ignored) {}\n}).start();\n\n// Consumer\nnew Thread(() -> {\n  try { while (true) System.out.println(buf.take()); }\n  catch (InterruptedException ignored) {}\n}).start();",
        output: "Consumer prints integers 0, 1, 2, ... 9 as the producer adds them — order is preserved by the queue.",
        advantages: [
          "Built-in coordination primitive in the language",
          "Fine-grained control over wake-up semantics",
          "Allows multiple condition variables per object (with explicit Lock + Condition)"
        ],
        applications: [
          "Producer-consumer pattern",
          "Bounded buffers and blocking queues",
          "Resource pools (connection pools, thread pools)",
          "Custom synchronisers (e.g. CountDownLatch-style)"
        ],
        conclusion: "wait/notify/notifyAll are powerful but tricky. Always use a while loop to guard against spurious wakeups, always call them inside synchronized, and prefer higher-level concurrent utilities (BlockingQueue, Semaphore, CountDownLatch) in modern Java."
      }
    },
    viva: [
      { q: "Why use a while loop with wait()?", a: "To handle spurious wakeups — a thread may return from wait() without being notified, so the condition must be re-checked." },
      { q: "What is the difference between notify() and notifyAll()?", a: "notify() wakes one thread in the wait set; notifyAll() wakes all of them. Prefer notifyAll() unless you are sure only one waiter can make progress." },
      { q: "Can wait() be called outside synchronized?", a: "No — it throws IllegalMonitorStateException." },
      { q: "Does wait() release the lock?", a: "Yes — wait() atomically releases the monitor and blocks. sleep() does NOT release the lock." },
      { q: "What is a spurious wakeup?", a: "A thread returning from wait() without a notify/notifyAll or timeout. Always re-check the condition in a while loop." }
    ],
    quiz: {
      mcqs: [
        { question: "wait() is defined in:", options: ["Thread", "Object", "Runnable", "Class"], answer: 1, explanation: "Object class — every object can act as a monitor." },
        { question: "Calling wait() outside synchronized throws:", options: ["InterruptedException", "IllegalMonitorStateException", "NullPointerException", "RuntimeException"], answer: 1, explanation: "The current thread must own the object's monitor." },
        { question: "Which wakes all waiting threads?", options: ["notify()", "notifyAll()", "signal()", "wakeAll()"], answer: 1, explanation: "notifyAll() wakes all threads in the wait set." },
        { question: "After wait() returns, the thread must re-acquire:", options: ["CPU time", "The monitor lock", "A new thread", "Nothing"], answer: 1, explanation: "It re-acquires the monitor before continuing." }
      ],
      trueFalse: [
        { statement: "wait() releases the lock.", answer: true, explanation: "Yes — wait() atomically releases the monitor and blocks." },
        { statement: "sleep() releases the lock.", answer: false, explanation: "sleep() does NOT release the monitor. wait() does." },
        { statement: "notify() chooses the longest-waiting thread.", answer: false, explanation: "notify() picks an arbitrary thread from the wait set. Use notifyAll() if you need deterministic behaviour." }
      ]
    },
    revision: {
      oneMin: "wait-release-and-block, notify-wake-one, notifyAll-wake-all. Always in synchronized, always with while loop.",
      fiveMin: [
        "Must be called in synchronized on the same object",
        "wait() releases the lock; sleep() does not",
        "Spurious wakeups — use while, not if",
        "Prefer notifyAll() unless you know only one waiter can proceed",
        "Higher-level: BlockingQueue, CountDownLatch, Semaphore"
      ],
      examDay: ["Producer-consumer example with wait/notify", "Why while loop?", "Difference: wait() vs sleep()"],
      memoryTrick: "wait = rest until called, notify = ring the bell, notifyAll = ring for everyone.",
      faq: [
        { q: "What is a spurious wakeup?", a: "A thread waking up from wait() without a notify — possible due to OS-level scheduling. Always re-check the condition in a while loop." },
        { q: "Why prefer BlockingQueue over wait/notify?", a: "BlockingQueue handles the wait/notify correctly internally, supports timeouts, is harder to misuse, and is more readable." },
        { q: "What is the difference between Object.wait() and Condition.await()?", a: "Object.wait() uses the intrinsic monitor. Condition.await() (from java.util.concurrent.locks) gives multiple condition variables per Lock, allowing finer-grained signalling." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u3-autoboxing",
    unitId: 3,
    index: 7,
    title: "Autoboxing & Unboxing",
    tagline: "Primitives ↔ wrapper objects",
    oneLiner: "Autoboxing is the automatic conversion of a primitive type to its wrapper class object (e.g. int → Integer). Unboxing is the reverse. Both were introduced in Java 5.",
    analogy: "A gift box: primitive is the gift; wrapper is the wrapped gift. Autoboxing wraps; unboxing unwraps.",
    whyExists: "To allow primitives to be used in places that require objects — collections, generics, reflection, and the Stream API.",
    whereUsed: ["Collections (List<Integer> etc.)", "Generics", "Stream API", "Optional", "Method parameters expecting Object"],
    visualCue: "🎁",
    code: {
      language: "java",
      code: `Integer i = 10;          // autoboxing: Integer.valueOf(10)
int n = i;                // unboxing: i.intValue()
List<Integer> list = new ArrayList<>();
list.add(5);              // autoboxing for add(E)
int first = list.get(0);  // unboxing on get

// Beware: == compares references for wrappers
Integer a = 200, b = 200;
System.out.println(a == b);  // false (different objects)
System.out.println(a.equals(b)); // true
Integer c = 100, d = 100;
System.out.println(c == d);  // true (cached)`,
      caption: "Autoboxing, unboxing, and the wrapper cache."
    },
    internalWorking: {
      steps: [
        "When the compiler sees a context requiring a wrapper, it inserts a call to the wrapper's valueOf(...) method (e.g. Integer.valueOf(int)).",
        "When the compiler sees a context requiring a primitive, it inserts a call to the wrapper's xxxValue() method (e.g. intValue()).",
        "valueOf() returns a cached instance for small values (Integer caches -128 to 127 by default; Long caches the same; Boolean caches TRUE and FALSE).",
        "== on two wrappers compares references (use .equals() for value comparison).",
        "Unboxing a null wrapper throws NullPointerException."
      ]
    },
    examAnswer: {
      twoMark: "Autoboxing is the automatic conversion of a primitive to its wrapper class object (int → Integer, double → Double). Unboxing is the opposite (Integer → int). Both were introduced in Java 5 and let primitives be used in places that require objects, such as collections and generics.",
      thirteenMark: {
        intro: "Autoboxing and unboxing bridge the gap between primitives and reference types, allowing primitives to flow into APIs that require objects.",
        definition: "Autoboxing automatically converts a primitive to its wrapper; unboxing automatically converts a wrapper to a primitive. Both are compiler-driven conversions introduced in Java 5.",
        explanation: "Java has eight wrapper classes — Boolean, Byte, Character, Short, Integer, Long, Float, Double — one for each primitive type. The compiler inserts Integer.valueOf(int) for autoboxing and i.intValue() for unboxing. valueOf() uses a cache: Integer caches values from -128 to 127 by default (configurable via -Djava.lang.Integer.IntegerCache.high=N); Long, Short, Byte, Character, and Boolean also cache; Float and Double do not. Comparing wrappers with == compares references, not values, so always use .equals() for value comparison. Unboxing a null wrapper throws NullPointerException. Autoboxing also occurs in: varargs (Object...), method arguments, and the ternary operator, which can lead to surprising type rules.",
        diagram: "Primitive       Wrapper\nint       ⇄   Integer\nlong      ⇄   Long\ndouble    ⇄   Double\nfloat     ⇄   Float\nboolean   ⇄   Boolean\nchar      ⇄   Character\nbyte      ⇄   Byte\nshort     ⇄   Short",
        example: "Integer i = 5;          // autoboxing\nint n = i;                // unboxing\nList<Integer> nums = new ArrayList<>();\nnums.add(1); nums.add(2); nums.add(3);  // autoboxing\nint sum = 0;\nfor (Integer x : nums) sum += x;        // unboxing on '+='",
        conclusion: "Autoboxing and unboxing simplify code and integrate primitives with the collections framework, but you must be aware of caching, ==, and the NPE risk from unboxing null."
      },
      sixteenMark: {
        intro: "Autoboxing and unboxing seamlessly convert between primitives and wrappers, enabling primitives to be used in generic collections and the Stream API.",
        definition: "Autoboxing is the implicit conversion of a primitive value to an instance of its corresponding wrapper class (int → Integer). Unboxing is the implicit conversion of a wrapper to a primitive (Integer → int). Both were added in Java 5 and are performed by the compiler.",
        explanation: "The eight wrapper classes are Boolean, Byte, Short, Character, Integer, Long, Float, Double. Autoboxing happens when a primitive appears in a context expecting an Object: assigning to a wrapper variable, adding to a Collection<E>, varargs (Object...), the ternary operator (with rules that promote to a common type), or method arguments. Unboxing happens when a wrapper appears in a context expecting a primitive: arithmetic, comparison, assignment to a primitive variable, return from a method with primitive return type. The compiler inserts Integer.valueOf(int) for autoboxing and intValue() for unboxing. valueOf() returns a cached instance for small values — Integer, Long, Short, Byte, Character cache a range (Integer by default -128..127); Boolean caches TRUE/FALSE; Float/Double do not cache. Beware: Integer x = 200; Integer y = 200; x == y is false (different objects), but Integer x = 100; Integer y = 100; x == y is true (same cached instance). The IntegerCache can be increased via -XX:AutoBoxCacheMax=200 or the system property java.lang.Integer.IntegerCache.high. Unboxing a null wrapper throws NullPointerException. Performance: autoboxing allocates, so tight loops with autoboxing can be slow — prefer primitive streams (IntStream, LongStream, DoubleStream) for numeric code.",
        working: "1. Compiler scans code for contexts that need a wrapper/primitive.\n2. For autoboxing: inserts `Integer.valueOf(int)` (or appropriate wrapper's valueOf).\n3. For unboxing: inserts `wrapper.intValue()` (or appropriate xxxValue).\n4. At runtime, the value is created (or retrieved from the cache) for autoboxing.\n5. Caching makes small values effectively flyweights — equality with == works for cached values by coincidence, NOT by design.",
        diagram: "int a = 5;\nInteger b = a;        // autobox: Integer.valueOf(5)  -- may return cached\nint c = b;            // unbox : b.intValue()\n\n      [JVM]\n      +-------------------+\n      | IntegerCache      |\n      |  -128 ... 127     |  (default range)\n      +-------------------+\n      valueOf(100) -> shared instance\n      valueOf(200) -> new Integer(200)\n\nCommon pitfalls:\n  - == compares references for wrappers  -> use .equals()\n  - unboxing null  -> NullPointerException\n  - tight loops allocating wrappers  -> use IntStream",
        example: "public class Boxing {\n  public static void main(String[] args) {\n    // 1) Collection usage\n    List<Integer> nums = new ArrayList<>();\n    for (int i = 1; i <= 3; i++) nums.add(i);   // autoboxing on add\n    int total = 0;\n    for (Integer n : nums) total += n;          // unboxing on +=\n    System.out.println(\"sum = \" + total);       // sum = 6\n\n    // 2) Cache and ==\n    Integer a = 127, b = 127;\n    System.out.println(a == b);   // true  (cached)\n    Integer c = 128, d = 128;\n    System.out.println(c == d);   // false (not cached by default)\n\n    // 3) NPE on unboxing null\n    Integer x = null;\n    try { int y = x; }            // throws NullPointerException\n    catch (NullPointerException e) { System.out.println(\"NPE\"); }\n  }\n}",
        output: "sum = 6\ntrue\nfalse\nNPE",
        advantages: [
          "Cleaner code — no manual boxing",
          "Allows primitives in generics and collections",
          "Enables primitives in the Stream API (boxed streams)",
          "Reduces boilerplate"
        ],
        applications: [
          "Collections (List<Integer>, Map<String, Double>)",
          "Stream API (Stream<Integer>)",
          "Optional<Integer>",
          "Reflection and generic APIs",
          "varargs (Object... args)"
        ],
        conclusion: "Autoboxing and unboxing are convenient but require care: use .equals() for value comparison, beware of NullPointerException when unboxing null, and prefer primitive streams (IntStream/LongStream/DoubleStream) for numeric hot paths to avoid allocation overhead."
      }
    },
    viva: [
      { q: "What is the range of Integer cache?", a: "By default -128 to 127, configurable via -Djava.lang.Integer.IntegerCache.high=N or -XX:AutoBoxCacheMax=N." },
      { q: "Can unboxing a null Integer throw an exception?", a: "Yes — NullPointerException." },
      { q: "Does == on two Integer 100s return true?", a: "Yes, because 100 is in the Integer cache (-128..127) so both refer to the same cached instance. For 200, it returns false (different objects)." },
      { q: "What is the difference between new Integer(5) and Integer.valueOf(5)?", a: "new Integer(5) always allocates a new object (deprecated since Java 9). valueOf(5) returns a cached instance for values in the cache range, which is faster." }
    ],
    quiz: {
      mcqs: [
        { question: "Autoboxing of int gives:", options: ["int", "Integer", "Object", "long"], answer: 1, explanation: "Integer — the wrapper for int." },
        { question: "Integer.valueOf(128) == Integer.valueOf(128) is:", options: ["true", "false", "compile error", "runtime error"], answer: 1, explanation: "128 is outside the default Integer cache, so two distinct objects are created — == is reference comparison." },
        { question: "Unboxing a null Integer throws:", options: ["ArithmeticException", "NullPointerException", "IllegalArgumentException", "ClassCastException"], answer: 1, explanation: "Unboxing a null reference throws NullPointerException." },
        { question: "Which wrapper has NO static cache?", options: ["Integer", "Long", "Double", "Boolean"], answer: 2, explanation: "Float and Double do not cache; Integer, Long, Short, Byte, Character, Boolean do." }
      ],
      trueFalse: [
        { statement: "Integer == int compares values.", answer: true, explanation: "When one operand is a primitive int, Java auto-unboxes the Integer to int, so == performs a primitive numeric comparison (value, not reference). Example: Integer a = 10; int b = 10; (a == b) is true. Without unboxing (two Integer operands), == would compare references." },
        { statement: "Autoboxing was introduced in Java 5.", answer: true, explanation: "Yes — generics and autoboxing both came with Java 5 (J2SE 5.0)." },
        { statement: "Boolean.valueOf(true) returns a new Boolean every time.", answer: false, explanation: "Boolean caches TRUE and FALSE — valueOf returns the same instances." }
      ]
    },
    revision: {
      oneMin: "Primitive ⇄ Wrapper automatic since Java 5. valueOf caches small values. Watch NPE on unboxing null.",
      fiveMin: [
        "Eight wrappers: Boolean, Byte, Short, Integer, Long, Character, Float, Double",
        "valueOf caching: Integer caches -128..127 (configurable)",
        "== vs .equals on wrappers — always use .equals()",
        "Unboxing null → NullPointerException",
        "Performance: prefer IntStream/LongStream/DoubleStream over boxed streams in hot paths"
      ],
      examDay: ["Examples in Collections (List<Integer>)", "Cache behaviour with == example", "Performance note"],
      memoryTrick: "Box = gift wrap. Unbox = unwrap. Cache = gift wrapping room for common sizes.",
      faq: [
        { q: "Performance impact of autoboxing?", a: "Autoboxing allocates objects, which has GC and memory overhead. In tight numeric loops, prefer primitive streams (IntStream) over Stream<Integer>." },
        { q: "How to disable Integer cache?", a: "You cannot disable it, but you can shrink it (default low=-128). The default high is 127 and can be raised to 200 (compile-time) or higher with -XX:AutoBoxCacheMax." },
        { q: "What's the difference between int and Integer?", a: "int is a 32-bit primitive with default value 0; Integer is a reference type (object) with default value null, methods like parseInt, valueOf, and occupies more memory." }
      ]
    },
    simulator: { type: "autoboxing" }
  }
];
