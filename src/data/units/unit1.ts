import type { TopicContent } from "../types";

export const unit1Topics: TopicContent[] = [
  {
    id: "u1-encapsulation",
    unitId: 1,
    index: 1,
    title: "Encapsulation",
    tagline: "Wrapping data & methods into a single unit",
    oneLiner: "Encapsulation is the binding of data and the methods that operate on that data into a single unit (class), and restricting direct access to some of the object's components.",
    analogy: "Think of a capsule (medicine). The powder inside is the data; the outer shell protects it. You cannot directly touch the powder; you interact with the capsule from outside.",
    whyExists: "To protect an object's internal state from unwanted modifications and to enforce controlled access through methods.",
    whereUsed: ["Java Beans", "POJOs", "API design", "DTOs", "Service layer classes"],
    visualCue: "🔒",
    code: {
      language: "java",
      code: `class Student {
    private String name;
    private int age;

    public void setAge(int age) {
        if (age > 0) this.age = age;
    }
    public int getAge() { return age; }
}`,
      caption: "Encapsulation using private fields and public getters/setters."
    },
    internalWorking: {
      steps: [
        "Variables are declared as private → hidden from outside world.",
        "Public getter/setter methods provide controlled read/write access.",
        "Compiler enforces access modifiers at class loading time.",
        "At runtime, JVM uses access flags in the class file to enforce visibility."
      ],
      memory: "Each object stores its private fields in heap memory. Even though hidden, they exist in the same object on heap."
    },
    examAnswer: {
      twoMark: "Encapsulation is the process of binding data and methods that manipulate the data into a single unit (class) and restricting direct access to some of the object's components using access modifiers like private. It improves security, maintainability, and flexibility.",
      thirteenMark: {
        intro: "Encapsulation is one of the four fundamental OOP concepts in Java that focuses on data hiding and controlled access.",
        definition: "Encapsulation is the wrapping of data (variables) and the code acting on that data (methods) into a single unit. It also restricts direct access to some of the object's components, which is a means of preventing unintended interference and misuse of the data.",
        explanation: "In Java, encapsulation is implemented using access modifiers: private, default, protected, and public. The data members are usually declared private and accessed through public getter and setter methods. This allows the class to control how the data is modified—for example, validating values in setters. It also makes the class independent—its internal representation can change without affecting external code that uses the class.",
        diagram: "Class: Student\n  - private name : String\n  - private age  : int\n  + setName()\n  + getName()\n  + setAge(int)\n  + getAge()",
        example: "class Account { private double balance; public void deposit(double amt) { if (amt > 0) balance += amt; } public double getBalance() { return balance; } }",
        conclusion: "Encapsulation provides data hiding, increases flexibility, reusability, and makes code easier to test and maintain."
      },
      sixteenMark: {
        intro: "Encapsulation is a core principle of OOP that combines data and behavior into a single entity while hiding internal details from the outside world.",
        definition: "Encapsulation is the mechanism of bundling data with the methods that operate on that data, and restricting direct access to some of the object's components to enforce controlled interaction.",
        explanation: "In Java, encapsulation is realized by declaring fields as private and exposing them through public accessor (getters) and mutator (setters) methods. This not only hides the internal representation but also enables validation, lazy initialization, and notification of changes. The class can also control read-only or write-only access by exposing only getter or only setter. Encapsulation is also a foundation for designing robust APIs.",
        working: "At compile time, the compiler checks access modifiers and generates accessor methods. At runtime, the JVM uses access flags stored in the .class file to enforce visibility between classes. Reflection can bypass encapsulation but should be used carefully.",
        diagram: "+----------------------+\n|        Class         |\n+----------------------+\n| - data1 : Type       |\n| - data2 : Type       |\n+----------------------+\n| + getData1() : Type  |\n| + setData1(Type)     |\n| + operation()        |\n+----------------------+",
        example: "class Employee { private String name; private double salary; public void setSalary(double s) { if (s >= 0) salary = s; } public String getName() { return name; } public void setName(String n) { this.name = n; } }",
        output: "Internal data is protected; external code can only read/modify via getters/setters. Invalid values are rejected in setters.",
        advantages: [
          "Data hiding and protection from unauthorized access",
          "Increased flexibility—internal implementation can change freely",
          "Reusability—encapsulated classes can be reused in different contexts",
          "Maintainability—changes inside class don't affect external code",
          "Easier testing—controlled inputs and outputs"
        ],
        applications: [
          "JavaBeans specification",
          "Spring framework beans",
          "Hibernate entity classes",
          "REST API DTOs",
          "Microservices and domain models"
        ],
        conclusion: "Encapsulation is the cornerstone of modular, secure, and maintainable object-oriented software. Combined with abstraction, it forms the basis of well-designed Java applications."
      }
    },
    viva: [
      { q: "What is encapsulation?", a: "Wrapping data and methods that operate on that data into a single unit and restricting direct access to some components." },
      { q: "How is encapsulation implemented in Java?", a: "Using private fields with public getter and setter methods." },
      { q: "Can we achieve encapsulation without access modifiers?", a: "Access modifiers are the standard way; without them, you can simulate it via conventions but not enforce it." },
      { q: "What is the difference between encapsulation and abstraction?", a: "Encapsulation is data hiding (how); abstraction is implementation hiding (what)." },
      { q: "Is encapsulation the same as data hiding?", a: "Data hiding is a subset/aspect of encapsulation. Encapsulation also includes bundling." }
    ],
    quiz: {
      mcqs: [
        { question: "Which access modifier is most commonly used to achieve encapsulation?", options: ["public", "private", "protected", "default"], answer: 1, explanation: "private hides the field from outside the class; access is given via getters/setters." },
        { question: "Encapsulation primarily provides:", options: ["Performance", "Data hiding", "Multiple inheritance", "Polymorphism"], answer: 1, explanation: "Encapsulation hides the internal state." },
        { question: "Which of the following is NOT a benefit of encapsulation?", options: ["Security", "Maintainability", "Faster execution", "Flexibility"], answer: 2, explanation: "Encapsulation does not directly affect execution speed." }
      ],
      trueFalse: [
        { statement: "Encapsulation can be achieved using private variables and public methods.", answer: true, explanation: "This is the standard pattern." },
        { statement: "Encapsulation means exposing all data as public.", answer: false, explanation: "Encapsulation is the opposite—hiding data." }
      ]
    },
    revision: {
      oneMin: "Encapsulation = private data + public methods.",
      fiveMin: [
        "Declare fields private.",
        "Provide public getters/setters.",
        "Validate inputs in setters.",
        "Hide internal representation.",
        "Improves modularity and testability."
      ],
      examDay: [
        "Write 'data binding + data hiding' definition.",
        "Mention private + public getter/setter.",
        "Give one real-world analogy.",
        "Draw class diagram with - and +."
      ],
      memoryTrick: "Encapsulation = Capsule (medicine) — outer shell protects the powder inside.",
      faq: [
        { q: "Is encapsulation only about access modifiers?", a: "Mostly yes, but it also includes bundling data and methods into one class." },
        { q: "Can a class without getters be encapsulated?", a: "Yes, if all data is private and access is via methods, even without getters." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-abstraction",
    unitId: 1,
    index: 2,
    title: "Data Abstraction",
    tagline: "Showing only essential features, hiding background details",
    oneLiner: "Abstraction is the process of hiding implementation details and exposing only the functionality to the user.",
    analogy: "When you drive a car, you use the steering wheel, accelerator, and brake. You don't need to know how the engine, gearbox, or fuel injection work. That is abstraction.",
    whyExists: "To reduce complexity by exposing only relevant features and to decouple what an object does from how it does it.",
    whereUsed: ["Abstract classes", "Interfaces", "API design", "Service layers", "Design patterns (Template, Strategy)"],
    visualCue: "🎭",
    code: {
      language: "java",
      code: `abstract class Shape {
    abstract double area();
    void display() { System.out.println("Shape"); }
}
class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    double area() { return Math.PI * r * r; }
}`,
      caption: "Abstraction using abstract class and overriding area()."
    },
    internalWorking: {
      steps: [
        "abstract keyword prevents direct instantiation.",
        "Subclasses must provide concrete implementations of abstract methods.",
        "JVM checks abstract method coverage at class verification time.",
        "Method dispatch resolves to subclass implementation at runtime."
      ],
      memory: "Abstract classes still occupy method tables; abstract methods are placeholders in vtable."
    },
    examAnswer: {
      twoMark: "Data abstraction is the process of hiding implementation details and showing only the essential features of an object. In Java, it is achieved using abstract classes and interfaces.",
      thirteenMark: {
        intro: "Abstraction is one of the four pillars of OOP that allows programmers to manage complexity by focusing on what an object does, not how.",
        definition: "Abstraction is the concept of exposing only the required characteristics of an entity and hiding the implementation details. In Java, it is implemented using abstract classes (0 to 100% abstraction) and interfaces (100% abstraction).",
        explanation: "An abstract class may contain abstract methods (declared but not implemented) and concrete methods. A class that extends an abstract class must implement all abstract methods, otherwise it must also be declared abstract. Interfaces (pre-Java 8) only had abstract methods; from Java 8, they can have default and static methods. Abstraction enables loose coupling and easier maintenance.",
        diagram: "Shape (abstract)\n  + area() : double   <-- abstract\n  + display() : void   <-- concrete\n        |\n        +-- Circle\n        |     + area()\n        +-- Rectangle\n              + area()",
        example: "abstract class Animal { abstract void sound(); } class Dog extends Animal { void sound() { System.out.println(\"Bark\"); } }",
        conclusion: "Abstraction simplifies complex systems by exposing only the relevant parts and is key to designing scalable, maintainable systems."
      },
      sixteenMark: {
        intro: "Data abstraction is a fundamental OOP principle that separates interface from implementation, allowing programmers to work with high-level concepts without worrying about low-level details.",
        definition: "Abstraction is the process of identifying the essential features of an object and ignoring the irrelevant details. In Java, abstraction is achieved through abstract classes and interfaces, both of which can define a contract without specifying the underlying implementation.",
        explanation: "Abstract classes can have constructors, instance variables, abstract methods, and concrete methods. They are used when classes share code. Interfaces (before Java 8) were pure abstract; from Java 8 onwards, they can have default and static methods with bodies. From Java 9, they can also have private methods. A class can implement multiple interfaces, providing Java's way of supporting multiple inheritance of type. Abstract data types (ADTs) like List, Map, etc., are practical examples.",
        working: "The compiler ensures that any non-abstract subclass provides implementations for all inherited abstract methods. The JVM resolves method calls through dynamic dispatch based on the actual object type at runtime.",
        diagram: "<<interface>> Drawable\n   + draw()\n       |\n   +----+----+\n   |         |\nCircle    Square\n   |         |\n   +-- area() override in each",
        example: "interface Vehicle { void start(); void stop(); } class Car implements Vehicle { public void start() { System.out.println(\"Car start\"); } public void stop() { System.out.println(\"Car stop\"); } }",
        output: "Car start\nCar stop",
        advantages: [
          "Reduces complexity",
          "Enables loose coupling between components",
          "Improves code reusability",
          "Simplifies maintenance and future extensions",
          "Facilitates parallel development"
        ],
        applications: [
          "Collections framework (List, Set, Map interfaces)",
          "JDBC API (Connection, Statement interfaces)",
          "Design patterns (Template Method, Strategy, Factory)",
          "GUI frameworks (ActionListener, EventHandler)",
          "Web services and REST APIs"
        ],
        conclusion: "Abstraction, combined with encapsulation, inheritance, and polymorphism, makes Java a powerful language for building modular and scalable systems."
      }
    },
    viva: [
      { q: "How do you achieve abstraction in Java?", a: "Using abstract classes and interfaces." },
      { q: "Can we have an abstract class without any abstract method?", a: "Yes. Marking a class abstract is allowed even with no abstract methods." },
      { q: "What is the difference between abstract class and interface?", a: "Abstract class can have state and constructors; interface (pre-Java 8) is pure abstraction." },
      { q: "Why cannot we instantiate an abstract class?", a: "Because it may contain unimplemented methods; instantiation would lead to undefined behavior." }
    ],
    quiz: {
      mcqs: [
        { question: "Which keyword is used to declare an abstract class?", options: ["interface", "abstract", "virtual", "sealed"], answer: 1, explanation: "abstract keyword is used." },
        { question: "An abstract class can have:", options: ["Only abstract methods", "Only concrete methods", "Both abstract and concrete", "None of the above"], answer: 2, explanation: "Abstract classes can mix both." },
        { question: "Which of these supports 100% abstraction?", options: ["Concrete class", "Abstract class", "Interface (pre-Java 8)", "Final class"], answer: 2, explanation: "Interfaces had only abstract methods before Java 8." }
      ],
      trueFalse: [
        { statement: "Abstract classes can have constructors.", answer: true, explanation: "Yes, they can; constructors are used by subclasses." },
        { statement: "We can create objects of an abstract class.", answer: false, explanation: "Instantiation is not allowed." }
      ]
    },
    revision: {
      oneMin: "Abstraction = show what, hide how.",
      fiveMin: [
        "Use abstract class for partial abstraction.",
        "Use interface for full abstraction / multiple inheritance.",
        "Subclass must implement all abstract methods.",
        "Abstract class can have constructors and state.",
        "Interface methods are public abstract by default."
      ],
      examDay: [
        "Define abstraction in one line.",
        "Differentiate abstract class vs interface.",
        "Give a real-life example (TV remote, car).",
        "Write a small program demonstrating abstraction."
      ],
      memoryTrick: "Abstraction = ATM machine — you press buttons, the inner cash mechanism is hidden.",
      faq: [
        { q: "Can abstract class have main method?", a: "Yes, it can have main and you can run it." },
        { q: "Can interface have variables?", a: "Yes, but they are implicitly public static final." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-static-vs-instance",
    unitId: 1,
    index: 3,
    title: "Static vs Instance Variables",
    tagline: "Class-level vs object-level data",
    oneLiner: "Static variables belong to the class and are shared by all instances; instance variables belong to each individual object.",
    analogy: "A static variable is like the school's name — common to every student. An instance variable is like a student's roll number — unique to each.",
    whyExists: "To share common data across all objects of a class (static) and to maintain unique state per object (instance).",
    whereUsed: ["Counters", "Configuration values", "Constants (final static)", "Caches", "Utility classes"],
    visualCue: "📊",
    code: {
      language: "java",
      code: `class Counter {
    static int count = 0;   // class variable
    int id;                 // instance variable
    Counter() { id = ++count; }
}
Counter a = new Counter();
Counter b = new Counter();
System.out.println(a.id + " " + b.id + " " + Counter.count);`,
      caption: "Counter increments static count and assigns unique id to each object."
    },
    internalWorking: {
      steps: [
        "Static variables are stored in the method area (or metaspace in Java 8+).",
        "Instance variables are stored in the heap inside the object.",
        "Static variables are initialized when the class is loaded.",
        "Instance variables are initialized when an object is created via 'new'."
      ],
      memory: "Method area: class metadata + static fields. Heap: per-object instance fields."
    },
    examAnswer: {
      twoMark: "Static variables belong to the class and have a single copy shared by all objects. Instance variables belong to individual objects, with each object having its own copy. Static variables are accessed using the class name; instance variables are accessed using object references.",
      thirteenMark: {
        intro: "Variables in Java classes can be either class-level (static) or object-level (instance), each with distinct memory and lifetime characteristics.",
        definition: "A static variable is declared with the static keyword inside a class but outside any method, constructor, or block. There is exactly one copy per class, regardless of the number of objects. An instance variable is a non-static variable declared inside a class; each object has its own separate copy.",
        explanation: "Static variables are loaded into the method area when the class is loaded by the ClassLoader. They are initialized before any object is created. Instance variables are created in the heap memory when 'new' is invoked. Static variables can be accessed without creating an instance of the class (ClassName.variable), while instance variables require an object. Final static variables are treated as constants.",
        diagram: "Method Area           Heap\n+----------+    +-------------------+\n| Counter  |    | a: id=1           |\n| count=2  |    | b: id=2           |\n+----------+    +-------------------+",
        example: "class Employee { static String company = \"ABC\"; String name; Employee(String n) { name = n; } } Employee e1 = new Employee(\"John\"); Employee e2 = new Employee(\"Jane\");",
        conclusion: "Static variables provide shared state across all instances, while instance variables provide unique state per object. Choosing the right kind is essential for correct program behavior."
      },
      sixteenMark: {
        intro: "Java provides two primary scopes for variables inside a class: class-level (static) and object-level (instance). Understanding their differences is critical for designing robust Java programs.",
        definition: "A static variable is associated with the class itself, not with any instance. It is created once when the class is loaded and shared among all objects. An instance variable is associated with each object and is created when the object is instantiated.",
        explanation: "Static variables are useful for representing properties common to all objects (e.g., a counter, a constant, a configuration). They are stored in the method area (or metaspace in Java 8+) and live as long as the class is loaded. Instance variables are stored in the heap, inside each object, and are eligible for garbage collection when the object is no longer referenced. Static methods can only directly access static members, while instance methods can access both. Static blocks can be used to initialize static variables.",
        working: "When a class is loaded, the JVM allocates memory for static fields and runs static initializers. When 'new' is executed, the JVM allocates memory for the new object on the heap, including all instance fields, and runs instance initializers and constructors.",
        diagram: "ClassLoader loads class\n        ↓\nMethod area: <Class>\n  - static fields\n  - method bytecode\n        ↓\nnew Object()\n        ↓\nHeap: object1 { instance fields }\nHeap: object2 { instance fields }",
        example: "class Ticket { static int nextNumber = 1000; int number; Ticket() { number = nextNumber++; } } Ticket t1 = new Ticket(); Ticket t2 = new Ticket(); System.out.println(t1.number + \" \" + t2.number);",
        output: "1000 1001",
        advantages: [
          "Static: shared state, memory efficient (one copy)",
          "Static: easy to use constants (final static)",
          "Instance: encapsulates object-specific state",
          "Instance: supports polymorphism and per-object behavior"
        ],
        applications: [
          "Counters and ID generators",
          "Configuration constants (Math.PI)",
          "Caches shared across instances",
          "Utility classes (Collections, Math)",
          "Logging frameworks (private static Logger)"
        ],
        conclusion: "Static and instance variables serve different purposes. A clear understanding of their lifetimes, scope, and memory behavior is essential for writing correct and efficient Java programs."
      }
    },
    viva: [
      { q: "What is the default value of an int static variable?", a: "0, because static variables are automatically initialized to default values." },
      { q: "Can we access an instance variable from a static method?", a: "Not directly — instance variables require an object reference." },
      { q: "Where are static variables stored in memory?", a: "In the method area (or metaspace since Java 8)." },
      { q: "What is a static block?", a: "A block of code with 'static' keyword used to initialize static variables, executed once when the class is loaded." }
    ],
    quiz: {
      mcqs: [
        { question: "Static variables are stored in:", options: ["Stack", "Heap", "Method area", "Cache"], answer: 2, explanation: "Static fields are stored in the method area/metaspace." },
        { question: "How many copies of a static variable exist per class?", options: ["One per object", "One per class", "One per method", "None"], answer: 1, explanation: "One copy shared across all instances." },
        { question: "Which is true about instance variables?", options: ["Declared with static", "One per object", "Accessed by class name", "Stored in method area"], answer: 1, explanation: "Each object has its own copy." }
      ],
      trueFalse: [
        { statement: "Static variables can be accessed without creating an object.", answer: true, explanation: "Yes, using ClassName.variable." },
        { statement: "Instance variables are initialized before static variables.", answer: false, explanation: "Static variables are initialized first, when the class loads." }
      ]
    },
    revision: {
      oneMin: "Static = class-level (shared). Instance = object-level (unique).",
      fiveMin: [
        "Static: one copy per class, in method area.",
        "Instance: one per object, in heap.",
        "Static accessed via ClassName.var.",
        "Instance accessed via object.var.",
        "Static methods cannot access instance members directly."
      ],
      examDay: [
        "Memory diagram (method area + heap).",
        "Write a Counter class as example.",
        "Mention static block initialization.",
        "Discuss thread-safety briefly."
      ],
      memoryTrick: "Static = 'Stationery' for the whole school. Instance = 'Personal bag' for each student.",
      faq: [
        { q: "Can a static variable be local?", a: "No, static can only be a class member, not local." },
        { q: "Are static variables thread-safe by default?", a: "No. They need synchronization or Atomic classes." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-platform-independence",
    unitId: 1,
    index: 4,
    title: "Platform Independence",
    tagline: "Write once, run anywhere",
    oneLiner: "Java programs are compiled into bytecode that can run on any device with a JVM, regardless of underlying hardware or OS.",
    analogy: "A universal power adapter. The same charger (Java program) works in any country (OS) because the JVM translates it locally.",
    whyExists: "To allow developers to write code once and deploy it across Windows, macOS, Linux, and other platforms without modification.",
    whereUsed: ["Enterprise applications", "Android apps", "Web backends", "Embedded systems"],
    visualCue: "🌐",
    code: {
      language: "java",
      code: `// Source: Hello.java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
// Compile: javac Hello.java  -> Hello.class (bytecode)
// Run:     java Hello       -> works on any OS with a JVM`,
      caption: "Java source compiles to platform-neutral bytecode."
    },
    internalWorking: {
      steps: [
        "Java source (.java) is compiled by javac into bytecode (.class).",
        "Bytecode is platform-neutral — instructions are for an abstract machine (JVM).",
        "Each platform provides a JVM that translates bytecode into native instructions.",
        "The JVM abstracts differences in OS, CPU architecture, and memory."
      ]
    },
    examAnswer: {
      twoMark: "Java is platform-independent because its compiler generates bytecode, not native machine code. This bytecode can run on any operating system that has a Java Virtual Machine (JVM), enabling 'write once, run anywhere'.",
      thirteenMark: {
        intro: "Java's platform independence is one of its most celebrated features, made possible by its compilation model and the JVM.",
        definition: "Platform independence in Java means that a compiled Java program (.class file) can run on any machine that has a compatible JVM, irrespective of the underlying operating system or hardware architecture.",
        explanation: "The Java compiler does not produce native machine code. Instead, it produces bytecode, which is a set of instructions for an abstract processor — the JVM. Each operating system has its own implementation of the JVM, which interprets or JIT-compiles the bytecode into native instructions for that platform. This means the same .class file works on Windows, Linux, macOS, etc., without recompilation.",
        diagram: "Hello.java  --javac-->  Hello.class (bytecode)\n                                        |\n                +-----------------------+---------------------+\n                |                       |                     |\n        Windows JVM               Linux JVM            macOS JVM\n                |                       |                     |\n         Windows native          Linux native         macOS native",
        example: "Compile on Windows: javac Hello.java → Hello.class. Copy Hello.class to Linux. Run: java Hello → same output.",
        conclusion: "Platform independence reduces development and deployment cost and is a key reason for Java's adoption in cross-platform enterprise software."
      },
      sixteenMark: {
        intro: "Java's 'write once, run anywhere' philosophy is rooted in its compilation pipeline and the abstraction provided by the Java Virtual Machine.",
        definition: "Platform independence is the ability of a compiled Java program to execute on any operating system or hardware platform that provides a Java Virtual Machine, without requiring recompilation or modification.",
        explanation: "The Java compiler (javac) converts source code into bytecode stored in .class files. Bytecode is a low-level, stack-based instruction set designed for the abstract JVM. Each platform's JVM implementation (Windows, Linux, macOS, etc.) is responsible for interpreting or just-in-time compiling this bytecode into native machine instructions. JIT compilation further improves performance by optimizing hot code paths. Note that the JVM itself is platform-specific — only the bytecode is portable. Native libraries (e.g., JNI) can break portability if used incorrectly.",
        working: "1. javac compiles .java → .class (bytecode).\n2. ClassLoader loads .class into JVM memory.\n3. Bytecode verifier checks for safety.\n4. Interpreter executes line by line.\n5. JIT compiler optimizes hot methods to native code.\n6. Native OS calls happen through JNI/JNA.",
        diagram: "Source (.java) → javac → Bytecode (.class) → JVM → Native Code (Windows/Linux/macOS)",
        example: "// Hello.java\npublic class Hello { public static void main(String[] a) { System.out.println(\"Hi\"); } }\n// On any platform with JDK:\njavac Hello.java\njava Hello\n// Output: Hi (same on all OS)",
        output: "Hi",
        advantages: [
          "Single codebase for all platforms",
          "Reduced testing and maintenance effort",
          "Easier deployment in heterogeneous environments",
          "Strong security through bytecode verification"
        ],
        applications: [
          "Enterprise backend services",
          "Android applications (custom JVM, Dalvik/ART)",
          "Cross-platform desktop apps (Swing, JavaFX)",
          "Web applets (historical)",
          "Embedded and IoT devices (Java ME)"
        ],
        conclusion: "Java's platform independence, achieved through bytecode and the JVM, is a foundational design choice that distinguishes it from languages that compile to native machine code."
      }
    },
    viva: [
      { q: "What is platform independence?", a: "The ability of compiled Java bytecode to run on any OS that has a JVM." },
      { q: "Is the JVM platform-independent?", a: "No, the JVM is platform-specific. The bytecode is platform-independent." },
      { q: "What is JIT?", a: "Just-In-Time compiler — converts hot bytecode into native code at runtime for performance." },
      { q: "What is the difference between compiler and interpreter in Java?", a: "javac compiles to bytecode; JVM interprets or JIT-compiles bytecode." }
    ],
    quiz: {
      mcqs: [
        { question: "What is the file extension of Java bytecode?", options: [".java", ".class", ".jar", ".exe"], answer: 1, explanation: ".class files contain bytecode." },
        { question: "Which component makes Java platform-independent?", options: ["JDK", "JRE", "JVM", "JIT"], answer: 2, explanation: "JVM abstracts the platform." },
        { question: "Write Once Run Anywhere is achieved by:", options: ["Compiler", "JVM", "Linker", "Loader"], answer: 1, explanation: "JVM provides portability." }
      ],
      trueFalse: [
        { statement: "The JVM is platform-independent.", answer: false, explanation: "The JVM is platform-specific. The bytecode is portable." },
        { statement: "Bytecode is executed by the JVM.", answer: true, explanation: "Yes." }
      ]
    },
    revision: {
      oneMin: "Java source → bytecode → JVM → native code.",
      fiveMin: [
        "javac → .class",
        "ClassLoader loads",
        "Verifier checks",
        "Interpreter / JIT runs",
        "Output on any OS"
      ],
      examDay: [
        "Draw .java → .class → JVM diagram.",
        "Mention WORA (Write Once Run Anywhere).",
        "Distinguish compile-time vs runtime."
      ],
      memoryTrick: "JVM is the universal translator that speaks every OS language.",
      faq: [
        { q: "Is JVM platform-independent?", a: "No, the JVM is platform-specific. The bytecode (.class) is platform-independent." },
        { q: "Can bytecode run without a JVM?", a: "No, bytecode needs a JVM to execute." }
      ]
    },
    simulator: { type: "jvm-execution" }
  },
  {
    id: "u1-bytecode",
    unitId: 1,
    index: 5,
    title: "Bytecode",
    tagline: "The intermediate language of Java",
    oneLiner: "Bytecode is the low-level instruction set generated by the Java compiler, designed to be executed by the JVM.",
    analogy: "Bytecode is like a recipe written in a universal kitchen language. Any chef (JVM) anywhere in the world can follow it to produce the same dish.",
    whyExists: "To allow Java programs to be portable across platforms and to provide a stable target for the compiler.",
    whereUsed: ["Java programs", "Kotlin (compiles to JVM bytecode)", "Scala", "Groovy", "Clojure"],
    visualCue: "🧬",
    code: {
      language: "java",
      code: `// Source
public int add(int a, int b) { return a + b; }

// Bytecode (illustrative)
iload_1
iload_2
iadd
ireturn`,
      caption: "Bytecode for adding two integers."
    },
    internalWorking: {
      steps: [
        "javac parses Java source into an abstract syntax tree (AST).",
        "Compiler generates bytecode instructions for the JVM.",
        "Bytecode is stored in .class files, each method as a list of instructions.",
        "JVM verifier checks bytecode for type safety and stack consistency.",
        "Interpreter or JIT executes instructions."
      ]
    },
    examAnswer: {
      twoMark: "Bytecode is the intermediate, platform-independent instruction set generated by the Java compiler (javac). It is stored in .class files and executed by the JVM. Bytecode makes Java portable and provides security through bytecode verification.",
      thirteenMark: {
        intro: "Bytecode is a key concept in Java that bridges source code and machine execution.",
        definition: "Bytecode is a set of instructions for a stack-based virtual machine (the JVM). It is the output of the Java compiler and the input to the JVM.",
        explanation: "Bytecode is a compact, low-level representation of Java source code. It uses an abstract stack-based architecture: instructions push values onto an operand stack and pop them for operations. Each .class file contains bytecode for one class, including method bodies, field declarations, and constant pool entries. Bytecode is verified by the class verifier to ensure type safety, no stack overflow/underflow, and proper access. Tools like javap can disassemble bytecode back into a human-readable form.",
        diagram: "Source (.java)\n   ↓ javac\nBytecode (.class)\n   ↓ JVM\nNative Machine Code",
        example: "Source: a + b → Bytecode: iload_1, iload_2, iadd, ireturn",
        conclusion: "Bytecode is the cornerstone of Java's portability and security model."
      },
      sixteenMark: {
        intro: "Java's compilation model produces bytecode, an intermediate language that enables portability, security, and tooling.",
        definition: "Bytecode is a platform-neutral instruction set designed for the Java Virtual Machine. Each instruction is a single byte (or a few bytes) representing operations like loading values, arithmetic, control flow, and method invocation.",
        explanation: "When you compile a .java file, javac generates one or more .class files, each containing bytecode for that class. The .class file format is well-defined: it includes a magic number, version, constant pool, access flags, fields, methods, and attributes. Methods store their bytecode as a sequence of instructions with operand stack semantics. The class loader reads .class files, the verifier checks them for safety, and the execution engine runs them via interpretation or JIT compilation.",
        working: "1. Compiler converts source to AST.\n2. Bytecode generator emits JVM instructions.\n3. ClassLoader loads .class into method area.\n4. Verifier checks type and stack safety.\n5. Interpreter or JIT executes the instructions.",
        diagram: "[0xCAFEBABE] Header\n[Constant Pool]\n[Fields]\n[Methods]\n[Attributes]",
        example: "javap -c Hello.class\npublic static void main(java.lang.String[]);\n  Code:\n   0: getstatic #2  // Field java/lang/System.out:Ljava/io/PrintStream;\n   3: ldc           #3  // String Hello\n   5: invokevirtual #4 // Method java/io/PrintStream.println(Ljava/lang/String;)V\n   8: return",
        output: "Bytecode of Hello.main shown.",
        advantages: [
          "Platform-independent representation",
          "Compact and fast to interpret",
          "Easily verifiable for safety",
          "Supports runtime metadata (reflection, annotations)"
        ],
        applications: [
          "Java program execution",
          "JVM-based languages (Kotlin, Scala)",
          "Android (DEX is similar concept)",
          "Program analysis and instrumentation tools",
          "Hotspot JIT optimization"
        ],
        conclusion: "Bytecode is the universal language of the JVM ecosystem, providing a stable, secure, and portable foundation for all JVM-based languages."
      }
    },
    viva: [
      { q: "Who generates bytecode?", a: "The Java compiler (javac)." },
      { q: "How to view bytecode?", a: "Using javap -c ClassName." },
      { q: "What is the magic number in a .class file?", a: "0xCAFEBABE." },
      { q: "Is bytecode machine code?", a: "No, it is intermediate code for the JVM." }
    ],
    quiz: {
      mcqs: [
        { question: "Bytecode is generated by:", options: ["JVM", "JRE", "javac", "JIT"], answer: 2, explanation: "javac compiles .java to .class (bytecode)." },
        { question: "Magic number of a .class file:", options: ["0xCAFEBABE", "0xDEADBEEF", "0xFEED", "0xBABE"], answer: 0, explanation: "0xCAFEBABE is the magic number." },
        { question: "Which tool can show bytecode?", options: ["java", "javac", "javap", "jar"], answer: 2, explanation: "javap disassembles .class files." }
      ],
      trueFalse: [
        { statement: "Bytecode is platform-specific.", answer: false, explanation: "Bytecode is platform-independent; the JVM is platform-specific." },
        { statement: "Bytecode uses a stack-based architecture.", answer: true, explanation: "JVM is stack-based." }
      ]
    },
    revision: {
      oneMin: "Bytecode = .class file = JVM instructions.",
      fiveMin: [
        "Stack-based instructions",
        "Generated by javac",
        "Verified by class verifier",
        "Interpreted or JIT compiled",
        "View with javap -c"
      ],
      examDay: [
        "Mention 0xCAFEBABE magic number.",
        "Stack-based vs register-based.",
        "javap -c example."
      ],
      memoryTrick: "Bytecode = Java's Esperanto — same for all platforms.",
      faq: [
        { q: "Can two languages share bytecode?", a: "Yes, any JVM language can compile to bytecode." }
      ]
    },
    simulator: { type: "bytecode-viewer", code: `public class Hello {\n  public static void main(String[] args) {\n    System.out.println("Hello");\n  }\n}` }
  },
  {
    id: "u1-jvm",
    unitId: 1,
    index: 6,
    title: "JVM (Java Virtual Machine)",
    tagline: "The runtime engine for Java",
    oneLiner: "The JVM is an abstract computing machine that enables a computer to run Java programs by interpreting compiled bytecode.",
    analogy: "The JVM is like a multilingual interpreter sitting between your Java program and the operating system. It translates your program's requests into the local machine's language.",
    whyExists: "To provide a runtime environment that abstracts away hardware and OS differences, manages memory, and enforces security.",
    whereUsed: ["Every Java program", "JVM-based languages (Kotlin, Scala)", "Big data (Hadoop, Spark)", "Android (customized)"],
    visualCue: "⚙️",
    code: {
      language: "java",
      code: `// JVM is a process that runs on the host OS.
// When you type 'java MyClass', it:
//   1. Loads MyClass.class via ClassLoader
//   2. Verifies bytecode
//   3. Allocates memory in heap & method area
//   4. Interprets / JIT-compiles bytecode
//   5. Calls OS via JNI for I/O, threads, etc.`,
      caption: "JVM responsibilities at runtime."
    },
    internalWorking: {
      steps: [
        "ClassLoader subsystem loads .class files.",
        "Bytecode verifier checks for safety.",
        "Method area stores class-level data (metadata, static fields, method code).",
        "Heap stores objects; stack stores frames per method call.",
        "Garbage collector reclaims unused heap memory.",
        "Execution engine interprets bytecode; JIT compiles hot code.",
        "JNI bridges to native libraries."
      ],
      memory: "Method area, Heap, Stack, PC registers, Native method stacks."
    },
    examAnswer: {
      twoMark: "The JVM (Java Virtual Machine) is an abstract computing machine that provides the runtime environment necessary to execute Java bytecode. It performs tasks like class loading, bytecode verification, memory management, garbage collection, and execution of bytecode via interpreter or JIT compiler.",
      thirteenMark: {
        intro: "The JVM is the cornerstone of Java's portability and runtime management.",
        definition: "The JVM is a specification that provides a runtime environment in which Java bytecode can be executed. It abstracts the underlying hardware and OS, providing consistent behavior across platforms.",
        explanation: "The JVM consists of three main subsystems: ClassLoader, Runtime Data Areas, and Execution Engine. The ClassLoader loads, links, and initializes classes. The Runtime Data Areas include the method area, heap, stack, PC register, and native method stack. The Execution Engine has an interpreter, JIT compiler, and garbage collector. The JVM also provides a native method interface (JNI) for interacting with OS-specific libraries.",
        diagram: "JVM\n ├── ClassLoader\n ├── Runtime Data Areas\n │     ├── Method Area\n │     ├── Heap\n │     ├── Stack\n │     ├── PC Register\n │     └── Native Method Stack\n └── Execution Engine\n       ├── Interpreter\n       ├── JIT Compiler\n       └── Garbage Collector",
        example: "When you run 'java Hello':\n1. JVM is started.\n2. ClassLoader loads Hello.class.\n3. main() is invoked.\n4. JVM manages memory and GC.\n5. Program prints 'Hello' and exits.",
        conclusion: "The JVM is a powerful runtime engine that provides memory management, security, and platform independence, making Java a robust language for diverse applications."
      },
      sixteenMark: {
        intro: "The JVM is the abstract machine that executes Java bytecode. It is the heart of Java's runtime and provides a uniform environment across all platforms.",
        definition: "The Java Virtual Machine is a runtime engine that loads, verifies, and executes Java bytecode. It manages program memory, performs garbage collection, and provides a consistent execution environment for all JVM-based languages.",
        explanation: "The JVM has three primary components: the ClassLoader subsystem, the Runtime Data Areas, and the Execution Engine. The ClassLoader subsystem loads .class files using a delegation model: Bootstrap (rt.jar / core Java) → Platform / Extension (JDK extensions; renamed from Extension in Java 9) → Application / System (classpath). It then links (verify, prepare, resolve) and initializes them. The Runtime Data Areas consist of the method area (class metadata, static fields, constant pool), heap (objects), stack (per-thread method frames), PC register (current instruction), and native method stack. The Execution Engine interprets bytecode, JIT-compiles hot methods to native code, and runs a garbage collector to reclaim memory. The JNI allows interaction with native (C/C++) code.",
        working: "1. java command starts the JVM.\n2. ClassLoader loads main class.\n3. Verifier checks bytecode safety.\n4. Interpreter executes bytecode line by line.\n5. JIT compiles hot methods to native code for speed.\n6. Garbage collector reclaims unreachable objects.\n7. JNI handles native calls.",
        diagram: "                +-------------+\n                |   Class     |\n                |   Loader    |\n                +-------------+\n                        |\n                +-------------+\n                |  Runtime    |\n                |  Data Areas |\n                +-------------+\n                        |\n                +-------------+\n                | Execution   |\n                |  Engine     |\n                +-------------+\n                | Interpreter |\n                | JIT         |\n                | GC          |\n                | JNI         |\n                +-------------+",
        example: "JVM specs are defined by JSR-924 (Java SE 7), JSR-376 (Java 9 modules), and others. Implementations include HotSpot (Oracle), OpenJ9 (IBM/Eclipse), and GraalVM.",
        output: "HotSpot is the most widely used JVM implementation.",
        advantages: [
          "Platform independence",
          "Automatic memory management (GC)",
          "Strong security via bytecode verification",
          "High performance through JIT compilation",
          "Multithreading and synchronization support"
        ],
        applications: [
          "Server-side applications (Spring, JBoss)",
          "Big data frameworks (Hadoop, Spark, Flink)",
          "Mobile (Android with ART)",
          "Reactive systems (Akka, Vert.x)",
          "Microservices and cloud-native backends"
        ],
        conclusion: "The JVM is a sophisticated, performant, and secure runtime engine that has made Java one of the most successful programming platforms in history."
      }
    },
    viva: [
      { q: "What are the main components of JVM?", a: "ClassLoader, Runtime Data Areas, Execution Engine." },
      { q: "What is the difference between JDK, JRE, and JVM?", a: "JDK = JRE + development tools. JRE = JVM + libraries. JVM = runtime engine." },
      { q: "What is JIT?", a: "Just-In-Time compiler — converts hot bytecode to native machine code at runtime." },
      { q: "What is GC?", a: "Garbage Collector — automatically reclaims unused heap memory." }
    ],
    quiz: {
      mcqs: [
        { question: "JVM stands for:", options: ["Java Visual Machine", "Java Virtual Machine", "Joint Version Manager", "Java Verified Mode"], answer: 1, explanation: "JVM = Java Virtual Machine." },
        { question: "Which memory area stores objects?", options: ["Stack", "Heap", "PC", "Cache"], answer: 1, explanation: "Objects are allocated on the heap." },
        { question: "JIT stands for:", options: ["Java In Time", "Just In Time", "Joint Interpreter Translator", "Java Integrated Tool"], answer: 1, explanation: "JIT = Just-In-Time compiler." }
      ],
      trueFalse: [
        { statement: "JVM is platform-independent.", answer: false, explanation: "JVM is platform-specific; bytecode is portable." },
        { statement: "Garbage collector runs automatically.", answer: true, explanation: "Yes, GC reclaims unreachable objects." }
      ]
    },
    revision: {
      oneMin: "JVM = ClassLoader + Memory + Execution Engine.",
      fiveMin: [
        "ClassLoader loads .class",
        "Method area: class metadata",
        "Heap: objects",
        "Stack: method frames",
        "JIT compiles hot code"
      ],
      examDay: [
        "Draw JVM architecture diagram.",
        "Differentiate JDK / JRE / JVM.",
        "Mention JIT and GC."
      ],
      memoryTrick: "JVM is the 'engine room' of Java — hidden but does all the work.",
      faq: [
        { q: "Is JVM a physical machine?", a: "No, it's a software abstraction." },
        { q: "Can we write our own JVM?", a: "Yes, several exist (HotSpot, OpenJ9, GraalVM)." }
      ]
    },
    simulator: { type: "jvm-execution" }
  },
  {
    id: "u1-javadoc",
    unitId: 1,
    index: 7,
    title: "JavaDoc Comments",
    tagline: "Documentation built into the source",
    oneLiner: "JavaDoc is a tool that generates HTML documentation from special /** ... */ comments in Java source code.",
    analogy: "JavaDoc is like a film's behind-the-scenes documentary. The main code is the movie; JavaDoc is the rich commentary that explains everything for future viewers.",
    whyExists: "To keep documentation close to the code and auto-generate API documentation.",
    whereUsed: ["API documentation", "Library docs", "Open-source projects", "Java standard library"],
    visualCue: "📖",
    code: {
      language: "java",
      code: `/**
 * Calculates the area of a circle.
 * @param radius the radius (must be > 0)
 * @return the area
 * @throws IllegalArgumentException if radius <= 0
 */
public double area(double radius) {
    if (radius <= 0) throw new IllegalArgumentException();
    return Math.PI * radius * radius;
}`,
      caption: "JavaDoc comment with @param, @return, @throws tags."
    },
    internalWorking: {
      steps: [
        "JavaDoc comments start with /** and end with */.",
        "Tags like @param, @return, @throws, @author, @version are recognized.",
        "javadoc tool reads .java files and produces HTML documentation.",
        "Generated docs are used in IDEs (hover help) and on the web."
      ]
    },
    examAnswer: {
      twoMark: "JavaDoc is a documentation tool that generates HTML API documentation from special /** ... */ comments in Java source code. Tags like @param, @return, @throws, @author, and @version provide structured information.",
      thirteenMark: {
        intro: "JavaDoc is a documentation generation system built into the Java ecosystem.",
        definition: "JavaDoc comments are special multi-line comments that begin with /** and end with */. They are placed above classes, interfaces, methods, and fields to describe their behavior. The javadoc tool reads these comments and produces HTML documentation.",
        explanation: "JavaDoc supports tags like @param (parameter description), @return (return value), @throws (exception), @author (author info), @version, @since, @deprecated, and {@code ...} for inline code. HTML tags can be used inside the comment for formatting. The generated documentation is widely used: the official Java API docs are produced using JavaDoc.",
        diagram: "Source File (with /** ... */)\n   ↓ javadoc tool\nHTML documentation (index.html, package pages, class pages)",
        example: "/**\n * Adds two integers.\n * @param a first number\n * @param b second number\n * @return sum of a and b\n */\npublic int add(int a, int b) { return a + b; }",
        conclusion: "JavaDoc comments and the javadoc tool provide a standard, automated way to maintain rich API documentation alongside source code."
      },
      sixteenMark: {
        intro: "JavaDoc is a structured documentation system that is part of the Java platform from day one.",
        definition: "JavaDoc is a documentation generator that creates HTML pages from specially formatted comments in Java source code. It is the standard way to document Java APIs.",
        explanation: "JavaDoc comments are written as /** ... */ and are placed immediately before declarations. They can include free-form text and structured tags. Common tags: @author, @version, @param, @return, @throws, @exception, @see, @since, @deprecated, @link, @code. The javadoc tool scans .java files, extracts these comments, and produces a tree of HTML files describing each package, class, and member. IDEs (Eclipse, IntelliJ, VS Code) read JavaDoc comments to show inline help on hover.",
        working: "1. javadoc reads source files.\n2. Extracts /** ... */ blocks and tags.\n3. Generates HTML files (e.g., index.html, package-summary.html, class-use, etc.).\n4. Optionally creates a search index and frame-based navigation.",
        diagram: "/** comment */ in .java\n        |\njavadoc command\n        |\nHTML files (docs/)\n  ├── index.html\n  ├── package-summary.html\n  └── class-summary.html",
        example: "javadoc -d doc MyClass.java\nGenerates 'doc' folder with HTML documentation.",
        output: "A browsable HTML API reference.",
        advantages: [
          "Documentation stays close to code",
          "Auto-generated, always up-to-date",
          "IDE integration (hover help)",
          "Industry standard for Java APIs"
        ],
        applications: [
          "Java standard library documentation",
          "Open-source library docs (Apache, Google Guava)",
          "Internal enterprise API documentation",
          "Generated help in IDEs"
        ],
        conclusion: "JavaDoc is an essential tool for any serious Java developer. It promotes the practice of documenting code at the source and produces professional, navigable API documentation."
      }
    },
    viva: [
      { q: "How is a JavaDoc comment different from a regular comment?", a: "JavaDoc starts with /** and is parsed by the javadoc tool to produce documentation." },
      { q: "Which tool generates JavaDoc HTML?", a: "The javadoc tool (part of JDK)." },
      { q: "Name three common JavaDoc tags.", a: "@param, @return, @throws." }
    ],
    quiz: {
      mcqs: [
        { question: "JavaDoc comments start with:", options: ["//", "/*", "/**", "<!--"], answer: 2, explanation: "/** opens a JavaDoc comment." },
        { question: "Which tag describes a method parameter?", options: ["@param", "@return", "@throws", "@author"], answer: 0, explanation: "@param is for parameters." },
        { question: "Tool used to generate JavaDoc:", options: ["javac", "javadoc", "java", "jar"], answer: 1, explanation: "javadoc tool." }
      ],
      trueFalse: [
        { statement: "JavaDoc comments are required for compilation.", answer: false, explanation: "They are optional and ignored by javac." },
        { statement: "JavaDoc can include HTML tags.", answer: true, explanation: "Yes, for formatting." }
      ]
    },
    revision: {
      oneMin: "/** comment */ + javadoc tool = HTML docs.",
      fiveMin: [
        "/** opens a JavaDoc",
        "@param, @return, @throws",
        "javadoc command",
        "Generates HTML",
        "IDE hover uses it"
      ],
      examDay: [
        "Syntax /** ... */",
        "List common tags",
        "Mention javadoc tool"
      ],
      memoryTrick: "JavaDoc = Just Another DOCumentation tool, with a J twist.",
      faq: [
        { q: "Can JavaDoc include links?", a: "Yes, using {@link ClassName#method}." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-buzzwords",
    unitId: 1,
    index: 8,
    title: "Java Buzzwords",
    tagline: "The defining features of Java",
    oneLiner: "Java Buzzwords are a set of features/qualities that make Java a unique and powerful programming language.",
    analogy: "Buzzwords are the highlights on a product's box. They tell you why Java is special.",
    whyExists: "To describe Java's design goals and key features in marketing-friendly language.",
    whereUsed: ["University exam questions", "Java interviews", "Marketing material"],
    visualCue: "✨",
    code: {
      language: "java",
      code: `// Java buzzwords in action:
public class Demo {
    public static void main(String[] args) {     // Simple
        System.out.println("Hello");              // Secure, Portable
    }
}`,
      caption: "A small program demonstrating many Java buzzwords."
    },
    internalWorking: {
      steps: [
        "Each buzzword maps to a JVM or compiler feature.",
        "Simple: syntax is cleaner than C++.",
        "Portable: bytecode runs on any JVM.",
        "Secure: bytecode verifier, SecurityManager (legacy), sandboxing.",
        "Robust: strong typing, exception handling, GC.",
        "Multithreaded: java.lang.Thread built in.",
        "Architecture-neutral: fixed-size data types.",
        "Interpreted + JIT: hybrid execution.",
        "High Performance: JIT and optimized GC.",
        "Distributed: java.net supports network programming.",
        "Dynamic: reflection, dynamic class loading."
      ]
    },
    examAnswer: {
      twoMark: "Java Buzzwords (also called Java features) are a list of qualities that define Java: Simple, Secure, Portable, Object-Oriented, Robust, Multithreaded, Architecture-Neutral, Interpreted, High Performance, Distributed, and Dynamic.",
      thirteenMark: {
        intro: "When Java was introduced by Sun Microsystems, a set of features was promoted to describe its strengths. These are known as Java Buzzwords.",
        definition: "Java Buzzwords are a set of design goals and features that distinguish Java from other programming languages. The original buzzwords are: Simple, Secure, Portable, Object-Oriented, Robust, Multithreaded, Architecture-Neutral, Interpreted, High Performance, Distributed, and Dynamic.",
        explanation: "1. Simple: easier than C++ (no pointers, no multiple inheritance via classes).\n2. Secure: runs inside JVM, bytecode verifier, no direct memory access.\n3. Portable: bytecode is platform-independent.\n4. Object-Oriented: everything is an object (except primitives).\n5. Robust: strong typing, exception handling, automatic garbage collection.\n6. Multithreaded: built-in Thread class, synchronized keyword.\n7. Architecture-Neutral: int is always 32 bits, etc.\n8. Interpreted: bytecode is interpreted line by line, with JIT for speed.\n9. High Performance: JIT and efficient GC.\n10. Distributed: java.net for network programming, RMI.\n11. Dynamic: reflection, dynamic class loading.",
        diagram: "Java Buzzwords\n ├── Simple\n ├── Secure\n ├── Portable\n ├── Object-Oriented\n ├── Robust\n ├── Multithreaded\n ├── Architecture-Neutral\n ├── Interpreted\n ├── High Performance\n ├── Distributed\n └── Dynamic",
        example: "A small program can be compiled to bytecode, verified for safety, run on any platform with a JVM, garbage-collected, and multithreaded — all buzzwords in action.",
        conclusion: "Java's buzzwords explain why it became one of the most widely used programming languages for enterprise, web, mobile, and embedded systems."
      },
      sixteenMark: {
        intro: "The Java Buzzwords are a marketing and educational summary of Java's key design features, originally published by Sun Microsystems when Java was released.",
        definition: "The Java Buzzwords are: Simple, Secure, Portable, Object-Oriented, Robust, Multithreaded, Architecture-Neutral, Interpreted, High Performance, Distributed, and Dynamic. Each represents a key design goal or feature of the language and its runtime.",
        explanation: "Simple — Java omits complex C++ features like pointers, operator overloading, and multiple inheritance of classes. Secure — Programs run inside a JVM sandbox; the bytecode verifier prevents illegal operations. Portable — Java's strict specification of primitive sizes (e.g., int = 32 bits) and the bytecode format ensure consistent behavior across platforms. Object-Oriented — Code is organized around classes and objects, supporting inheritance, polymorphism, and encapsulation. Robust — Strong typing, checked exceptions, and garbage collection eliminate many common bugs. Multithreaded — Built-in support for concurrent execution via java.lang.Thread. Architecture-Neutral — Same data type sizes everywhere. Interpreted — Bytecode is interpreted; combined with JIT, this offers both flexibility and speed. High Performance — JIT compiler optimizes hot code paths. Distributed — java.net and RMI enable network applications. Dynamic — Reflection and dynamic class loading let programs inspect and adapt at runtime.",
        working: "Each buzzword corresponds to a real language feature or runtime capability. For example, 'Secure' is enforced by the bytecode verifier and class loader; 'Portable' is achieved by the bytecode and JVM abstraction; 'Multithreaded' is supported by the Thread class and synchronized keyword.",
        diagram: "Compiler  --bytecode-->  JVM  --native-->  OS\n   ↑            ↑\nSimple     Portable/Secure\n  ...         ...",
        example: "class Hello { public static void main(String[] args) { new Thread(() -> System.out.println(\"Hello\")).start(); } } // Simple + Multithreaded + Secure (sandboxed) + Portable (any JVM)",
        output: "Hello",
        advantages: [
          "Industry-standard summary of Java's strengths",
          "Useful in exam answers and interviews",
          "Highlights the design philosophy",
          "Helps in comparing Java with other languages"
        ],
        applications: [
          "University exam answers",
          "Job interviews",
          "Marketing and documentation",
          "Comparing languages"
        ],
        conclusion: "The Java Buzzwords remain the canonical description of Java's design principles and are a must-know for any Java learner or exam aspirant."
      }
    },
    viva: [
      { q: "Name any 5 Java Buzzwords.", a: "Simple, Secure, Portable, Robust, Multithreaded." },
      { q: "Why is Java considered robust?", a: "Because of strong typing, exception handling, and automatic garbage collection." },
      { q: "What makes Java portable?", a: "Bytecode runs on any platform with a JVM." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is NOT a Java buzzword?", options: ["Robust", "Secure", "Compiled-only", "Portable"], answer: 2, explanation: "Java is both interpreted and compiled." },
        { question: "Multithreading in Java is provided by:", options: ["java.util", "java.lang.Thread", "java.io", "java.net"], answer: 1, explanation: "Thread is in java.lang." },
        { question: "Java's portability is due to:", options: ["Compiler", "Bytecode + JVM", "OS", "Hardware"], answer: 1, explanation: "Bytecode runs on any JVM." }
      ],
      trueFalse: [
        { statement: "Java supports multiple inheritance via classes.", answer: false, explanation: "Java supports multiple inheritance of type via interfaces, not via classes." },
        { statement: "Java has built-in garbage collection.", answer: true, explanation: "Yes, automatic memory management." }
      ]
    },
    revision: {
      oneMin: "Simple, Secure, Portable, OO, Robust, Multithreaded, Architecture-Neutral, Interpreted, High-Performance, Distributed, Dynamic.",
      fiveMin: [
        "Simple = no pointers, no operator overloading",
        "Secure = sandboxed JVM",
        "Portable = bytecode + JVM",
        "Robust = strong typing + GC",
        "Multithreaded = Thread class"
      ],
      examDay: [
        "List all 11 buzzwords",
        "Explain any 5 in 2 lines each",
        "Give one-line example for each"
      ],
      memoryTrick: "S²POR²MA²I²H²D — Simple, Secure, Portable, OO, Robust, Multithreaded, Architecture-neutral, Interpreted, JIT, High-perf, Distributed, Dynamic.",
      faq: [
        { q: "Is 'Object-Oriented' an official buzzword?", a: "Yes, sometimes listed as a feature." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-constructors",
    unitId: 1,
    index: 9,
    title: "Constructors",
    tagline: "Special methods that initialize objects",
    oneLiner: "A constructor is a special method that is automatically invoked when an object is created, used to initialize the object's state.",
    analogy: "Think of a constructor as a form you fill out when you arrive at a hotel — it sets up your initial state (room number, name, etc.).",
    whyExists: "To ensure objects are always created in a valid, initialized state.",
    whereUsed: ["Every Java class", "Frameworks (Spring, JPA)", "POJOs and DTOs"],
    visualCue: "🏗️",
    code: {
      language: "java",
      code: `class Student {
    String name;
    int age;
    Student() {                       // default
        name = "Unknown";
        age = 0;
    }
    Student(String n, int a) {        // parameterized
        name = n;
        age = a;
    }
}`,
      caption: "Default and parameterized constructors."
    },
    internalWorking: {
      steps: [
        "Constructor is called by 'new' keyword or reflection.",
        "JVM allocates memory on heap for the object.",
        "Instance variables are initialized to default values.",
        "Explicit constructor body runs.",
        "Reference to the object is returned to the caller."
      ]
    },
    examAnswer: {
      twoMark: "A constructor in Java is a special member method used to initialize objects. It has the same name as the class, no return type, and is automatically invoked when an object is created using the new keyword. If no constructor is defined, the compiler provides a default no-arg constructor.",
      thirteenMark: {
        intro: "Constructors are fundamental to object creation in Java.",
        definition: "A constructor is a special method that is invoked automatically when an object of a class is created. It has the same name as the class, no return type (not even void), and is used to initialize the object's state.",
        explanation: "Types of constructors in Java:\n1. Default constructor — no-arg, provided by compiler if none is defined.\n2. Parameterized constructor — accepts arguments to set initial values.\n3. Copy constructor — not built-in but can be written by passing an object of the same type.\n4. Private constructor — used in singleton patterns to restrict instantiation.\n5. Constructor chaining — this() calls another constructor in the same class; super() calls the parent constructor.",
        diagram: "Student s = new Student(\"John\", 20);\n         |\n         +--> Constructor Student(String, int) is invoked\n              |\n              +--> Initializes name and age",
        example: "class Box { int l, b; Box() { l = 0; b = 0; } Box(int x, int y) { l = x; b = y; } Box(Box o) { l = o.l; b = o.b; } }",
        conclusion: "Constructors ensure objects are always initialized, supporting encapsulation and robust object creation."
      },
      sixteenMark: {
        intro: "Constructors are special members of a class that play a central role in object creation and initialization in Java.",
        definition: "A constructor is a special method with the same name as the class, no return type, that is automatically invoked when an object is created. Its primary purpose is to initialize the new object's state.",
        explanation: "Java supports several kinds of constructors. The default constructor (no-arg) is automatically provided by the compiler if no constructor is defined. Parameterized constructors accept arguments to set initial values. Constructor chaining is done using this() and super(). The first line of every constructor is either this() or super(), even if not written explicitly. Constructors are not inherited, but they can be invoked explicitly via super(). A private constructor prevents external instantiation, useful in singleton or utility classes. The compiler inserts a no-arg super() call in every constructor.",
        working: "1. 'new' triggers class loading (if not already loaded).\n2. Memory is allocated on the heap for the object.\n3. Instance fields are set to default values (0, false, null).\n4. The constructor body executes.\n5. The reference is returned to the caller.",
        diagram: "ClassLoader loads class\n       |\n    new MyClass()\n       |\n    Heap: allocate object\n       |\n    Initialize fields to defaults\n       |\n    Invoke constructor body\n       |\n    Return reference",
        example: "class Employee { String name; double salary; Employee() { this(\"Unknown\", 0); } Employee(String n, double s) { name = n; salary = s; } }",
        output: "Constructors can be chained via this() and super().",
        advantages: [
          "Guarantees valid object state",
          "Supports encapsulation of initialization logic",
          "Enables constructor overloading for flexibility",
          "Allows inheritance-based super() chaining"
        ],
        applications: [
          "Initializing object fields",
          "Implementing factory and builder patterns",
          "Dependency injection in frameworks",
          "Singletons via private constructor"
        ],
        conclusion: "Constructors are a cornerstone of Java OOP. Mastering default, parameterized, and chained constructors is essential for robust class design."
      }
    },
    viva: [
      { q: "What is a constructor?", a: "A special method that initializes an object; same name as class, no return type." },
      { q: "What happens if you don't write a constructor?", a: "Compiler provides a default no-arg constructor." },
      { q: "Can a constructor be private?", a: "Yes, to restrict instantiation (e.g., singletons)." },
      { q: "What is constructor chaining?", a: "Calling one constructor from another using this() or super()." }
    ],
    quiz: {
      mcqs: [
        { question: "A constructor has:", options: ["A return type", "No return type", "void return", "int return"], answer: 1, explanation: "Constructors have no return type." },
        { question: "What is the name of a constructor?", options: ["init", "create", "Same as class", "main"], answer: 2, explanation: "Same as class name." },
        { question: "Which keyword is used to call a parent constructor?", options: ["this", "super", "parent", "base"], answer: 1, explanation: "super() calls parent." }
      ],
      trueFalse: [
        { statement: "Constructors are inherited.", answer: false, explanation: "Constructors are not inherited." },
        { statement: "A class can have multiple constructors.", answer: true, explanation: "Yes, via overloading." }
      ]
    },
    revision: {
      oneMin: "Constructor = same name as class, no return type.",
      fiveMin: [
        "Default vs parameterized",
        "this() for chaining",
        "super() for parent",
        "Private for singleton",
        "Compiler default if none"
      ],
      examDay: [
        "Define constructor in 1 line",
        "Types: default, parameterized, copy",
        "Constructor chaining diagram"
      ],
      memoryTrick: "Constructor = Class name + no return type + called by new.",
      faq: [
        { q: "Can a constructor call another constructor?", a: "Yes, using this()." }
      ]
    },
    simulator: { type: "constructor-overloading", options: [{ name: "Student()", params: [] }, { name: "Student(String)", params: ["String"] }, { name: "Student(String, int)", params: ["String", "int"] }] }
  },
  {
    id: "u1-constructor-overloading",
    unitId: 1,
    index: 10,
    title: "Constructor Overloading",
    tagline: "Multiple constructors, same class name",
    oneLiner: "Constructor overloading is the technique of defining multiple constructors in a class with different parameter lists.",
    analogy: "Like having multiple registration forms — short form, long form, premium form. Each creates a 'member' but with different initial info.",
    whyExists: "To allow objects to be created in different ways with different initial data.",
    whereUsed: ["Frameworks", "Builders", "DTOs", "Entity classes"],
    visualCue: "🔁",
    code: {
      language: "java",
      code: `class Box {
    int l, b;
    Box() { l = 1; b = 1; }
    Box(int s) { l = s; b = s; }
    Box(int x, int y) { l = x; b = y; }
}
new Box();        // 1x1
new Box(5);       // 5x5
new Box(3, 4);    // 3x4`,
      caption: "Three overloaded constructors for Box."
    },
    internalWorking: {
      steps: [
        "Compiler binds the 'new ClassName(args)' call to the matching constructor based on argument types.",
        "This is resolved at compile time (static binding).",
        "At runtime, the chosen constructor is invoked."
      ]
    },
    examAnswer: {
      twoMark: "Constructor overloading in Java is defining multiple constructors within the same class, each with a different parameter list (number, type, or order of parameters). It allows objects to be created in different ways. The compiler selects the correct constructor based on the arguments passed.",
      thirteenMark: {
        intro: "Constructor overloading is a form of polymorphism (compile-time) that allows flexible object creation.",
        definition: "Constructor overloading is the technique of providing multiple constructors in a class with different signatures, so that objects can be initialized in different ways.",
        explanation: "Overloaded constructors differ in number, type, or order of parameters. The compiler resolves which constructor to call based on the arguments used with the new keyword. This is resolved at compile time. Overloading is a form of static polymorphism. Constructors can also chain using this() to avoid code duplication.",
        diagram: "Box()      → default\nBox(int)   → square\nBox(int,int) → rectangle",
        example: "class Demo { Demo() { System.out.println(\"no-arg\"); } Demo(int a) { System.out.println(\"int: \" + a); } Demo(String s) { System.out.println(\"str: \" + s); } }",
        conclusion: "Constructor overloading increases flexibility and readability of class design."
      },
      sixteenMark: {
        intro: "Constructor overloading is one of the most useful techniques in Java for providing multiple ways to instantiate a class.",
        definition: "Constructor overloading is the practice of defining two or more constructors in the same class with different parameter lists (different number, type, or order of parameters).",
        explanation: "Java distinguishes overloaded constructors by their signatures. The compiler binds the call to the appropriate constructor at compile time. This is called static or compile-time polymorphism. Common patterns: 1) Default + parameterized, 2) Chained constructors using this() to call simpler versions, 3) Copy constructor. Constructor overloading is used heavily in JavaBeans, JPA entities, and builder patterns.",
        working: "1. 'new' keyword is encountered.\n2. Compiler inspects argument types.\n3. Matching constructor is selected at compile time.\n4. Selected constructor runs at object creation.",
        diagram: "Box b1 = new Box();        → Box()\nBox b2 = new Box(5);       → Box(int)\nBox b3 = new Box(2,3);     → Box(int,int)",
        example: "class Account { String name; double bal; Account() { this(\"Default\", 0); } Account(String n) { this(n, 0); } Account(String n, double b) { name = n; bal = b; } }",
        output: "All three lines create an Account with appropriate initial values.",
        advantages: [
          "Multiple ways to create objects",
          "Code reuse via this() chaining",
          "Improves readability and flexibility",
          "Common in API design"
        ],
        applications: [
          "JavaBeans constructors",
          "Builder pattern",
          "DTOs and entity classes",
          "Spring framework beans"
        ],
        conclusion: "Constructor overloading is a key technique in Java that enhances class usability and is widely used in real-world frameworks and design patterns."
      }
    },
    viva: [
      { q: "What is constructor overloading?", a: "Multiple constructors with different parameter lists in the same class." },
      { q: "How does the compiler choose which constructor to call?", a: "Based on the argument types passed to 'new'." },
      { q: "Can we overload static methods?", a: "Yes, but they are unrelated to constructor overloading." }
    ],
    quiz: {
      mcqs: [
        { question: "Constructor overloading is resolved at:", options: ["Runtime", "Compile time", "Both", "Never"], answer: 1, explanation: "Static binding." },
        { question: "Which is true?", options: ["Same name, same params", "Same name, different params", "Different name", "None"], answer: 1, explanation: "Overloading = same name, different params." },
        { question: "Constructor overloading enables:", options: ["Multiple ways to initialize objects", "Inheritance", "Polymorphism at runtime", "Abstraction"], answer: 0, explanation: "Flexible object creation." }
      ],
      trueFalse: [
        { statement: "Two constructors can have the same parameter list.", answer: false, explanation: "They would be duplicates and cause a compile error." }
      ]
    },
    revision: {
      oneMin: "Multiple constructors, different params.",
      fiveMin: [
        "Compile-time polymorphism",
        "Differs in number, type, or order",
        "Selected by 'new' args",
        "Chain with this()",
        "Used in JavaBeans"
      ],
      examDay: [
        "Define with example",
        "Mention compile-time binding",
        "Show this() chaining"
      ],
      memoryTrick: "Overloading = same name, different recipes.",
      faq: [
        { q: "Is constructor overloading runtime polymorphism?", a: "No, it is compile-time (static) polymorphism." }
      ]
    },
    simulator: { type: "constructor-overloading", options: [{ name: "Box()", params: [] }, { name: "Box(int side)", params: ["int"] }, { name: "Box(int l, int b)", params: ["int", "int"] }, { name: "Box(Box other)", params: ["Box"] }] }
  },
  {
    id: "u1-control-flow",
    unitId: 1,
    index: 11,
    title: "Control Flow Statements",
    tagline: "Decision-making and looping",
    oneLiner: "Control flow statements in Java determine the order in which statements are executed: selection (if, switch), iteration (for, while, do-while), and jump (break, continue, return).",
    analogy: "Control flow is the traffic signal system for your program. It tells the program which road to take at every junction.",
    whyExists: "To allow programs to make decisions, repeat tasks, and control execution flow.",
    whereUsed: ["All Java programs", "Algorithms", "Business logic", "Game loops"],
    visualCue: "🔀",
    code: {
      language: "java",
      code: `for (int i = 1; i <= 5; i++) {
    if (i == 3) continue;
    if (i == 5) break;
    System.out.println(i);
}
// Output: 1 2 4`,
      caption: "Demonstrates for loop, continue, and break."
    },
    internalWorking: {
      steps: [
        "JVM maintains a program counter (PC) pointing to the next instruction.",
        "Conditional checks (if) compute a boolean and choose a branch.",
        "Loops (for, while, do-while) repeat a block while the condition is true.",
        "break exits the loop/switch; continue skips to the next iteration.",
        "return exits the method."
      ]
    },
    examAnswer: {
      twoMark: "Control flow statements in Java control the order of execution of statements. They include decision-making (if-else, switch), looping (for, while, do-while), and jump statements (break, continue, return).",
      thirteenMark: {
        intro: "Control flow statements are essential to any non-trivial program.",
        definition: "Control flow statements in Java are constructs that alter the sequential flow of execution. They include selection statements (if, if-else, switch), iteration statements (for, while, do-while), and jump statements (break, continue, return, try-catch).",
        explanation: "Selection statements: if executes a block if a condition is true; if-else adds an alternative; switch selects among multiple cases based on a value. Iteration statements: for is a counter-based loop; while runs while a condition holds; do-while runs at least once. Jump statements: break exits a loop or switch; continue skips the rest of the current iteration; return exits a method.",
        diagram: "if (cond) ─yes→ block\n            │no\n            └──else block (optional)\n\nfor (init; cond; update) → repeat block\nwhile (cond) → repeat block",
        example: "int n = 5; if (n > 0) System.out.println(\"positive\"); else System.out.println(\"non-positive\");",
        conclusion: "Mastery of control flow is fundamental to writing correct, efficient, and readable Java programs."
      },
      sixteenMark: {
        intro: "Control flow statements are the building blocks that allow Java programs to make decisions, repeat operations, and handle exceptional conditions.",
        definition: "Control flow statements are Java constructs that determine the order in which statements are executed. They fall into three categories: selection (if-else, switch), iteration (for, while, do-while, enhanced for), and transfer (break, continue, return, throw).",
        explanation: "Selection: if-else evaluates a boolean and chooses between two blocks. switch works on int, byte, short, char, String, and enum values (Java 7+ for String). Iteration: for loop has init, condition, update; useful for known iterations. Enhanced for (for-each) is used for arrays and collections. while runs as long as condition is true. do-while guarantees at least one execution. Transfer: break exits the innermost loop or switch; continue jumps to the next iteration; return exits a method; throw raises an exception.",
        working: "The JVM executes bytecode instructions linearly. Branching instructions (ifeq, if_icmpge, etc.) modify the program counter. Loop counters are typically stored in local variable slots in the current stack frame.",
        diagram: "Statement 1\n  ↓\nif (cond) → yes → block A\n            no  → block B\n  ↓\nStatement 2\n  ↓\nwhile (cond) ↺ body",
        example: "int[] arr = {1,2,3,4,5}; for (int x : arr) if (x % 2 == 0) System.out.println(x); // 2 4",
        output: "2 4",
        advantages: [
          "Enables decision-making in programs",
          "Supports repetition and automation",
          "Provides fine-grained control over execution",
          "Foundation of algorithms"
        ],
        applications: [
          "Validating user input",
          "Iterating over collections",
          "Game loops and simulations",
          "State machines",
          "Algorithms and data processing"
        ],
        conclusion: "Control flow statements are the core of any Java program. A strong understanding of selection, iteration, and jump statements is essential for building reliable software."
      }
    },
    viva: [
      { q: "Difference between while and do-while?", a: "do-while executes the body at least once, then checks the condition." },
      { q: "What is the enhanced for loop?", a: "Also called for-each; iterates over arrays and Iterable collections." },
      { q: "Can we use break outside a loop or switch?", a: "No, it causes a compile error." }
    ],
    quiz: {
      mcqs: [
        { question: "Which loop runs at least once?", options: ["for", "while", "do-while", "enhanced for"], answer: 2, explanation: "do-while runs body first, then checks." },
        { question: "Which is a jump statement?", options: ["if", "for", "break", "switch"], answer: 2, explanation: "break is a jump statement." },
        { question: "Switch supports which type from Java 7?", options: ["int", "char", "String", "double"], answer: 2, explanation: "String is supported from Java 7." }
      ],
      trueFalse: [
        { statement: "continue exits the loop entirely.", answer: false, explanation: "continue skips to the next iteration." },
        { statement: "for-each works on arrays.", answer: true, explanation: "Yes, on arrays and Iterables." }
      ]
    },
    revision: {
      oneMin: "if, switch, for, while, do-while, break, continue, return.",
      fiveMin: [
        "if-else = decision",
        "switch = multi-way branch",
        "for = counted loop",
        "while = condition loop",
        "do-while = at-least-once loop"
      ],
      examDay: [
        "List selection, iteration, jump",
        "Distinguish while vs do-while",
        "Show for-each example"
      ],
      memoryTrick: "S-I-J: Selection, Iteration, Jump.",
      faq: [
        { q: "Can switch take float?", a: "No, switch does not support float, double, or long." }
      ]
    },
    simulator: { type: "control-flow", code: `for (int i = 1; i <= 5; i++) {\n  if (i == 3) continue;\n  System.out.println(i);\n}` }
  }
];
