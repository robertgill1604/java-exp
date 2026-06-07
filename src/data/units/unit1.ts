import type { TopicContent } from "../types";

export const unit1Topics: TopicContent[] = [
  {
    id: "u1-object-oriented-programming",
    unitId: 1,
    index: 1,
    title: "Object-Oriented Programming",
    tagline: "Modeling the world with objects",
    oneLiner: "Object-Oriented Programming (OOP) is a paradigm that organizes software around objects — each bundling data (state) and behavior (methods) — instead of functions and procedures.",
    analogy: "Imagine a factory assembly line. The blueprint for a station is the class; the actual station on the floor, doing work, is the object. Each station has inputs (state) and a job (behavior).",
    whyExists: "To manage complexity in large software by modeling it after real-world entities, enabling reuse, modularity, and clear separation of concerns.",
    whereUsed: ["Java, C++, Python, C#", "GUI frameworks", "Enterprise systems", "Game engines", "Domain modeling (DDD)"],
    visualCue: "🧩",
    code: {
      language: "java",
      code: `class Car {
    String model;
    int speed;

    Car(String model) { this.model = model; speed = 0; }

    void accelerate() { speed += 10; }

    void display() {
        System.out.println(model + " is at " + speed + " km/h");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car("Tesla");
        c.accelerate();
        c.display();
    }
}`,
      caption: "A Car class with state (model, speed) and behavior (accelerate, display)."
    },
    internalWorking: {
      steps: [
        "Source is compiled by javac into .class bytecode files.",
        "At runtime, the ClassLoader loads classes into the JVM method area.",
        "When 'new Car(...)' executes, the JVM allocates memory on the heap for the object.",
        "The constructor initializes fields; methods are stored in the method area.",
        "Method calls use stack frames; the program counter drives bytecode execution."
      ],
      memory: "Method area: class metadata + static fields. Heap: per-object instance fields. Stack: per-thread method call frames."
    },
    examAnswer: {
      twoMark: "Object-Oriented Programming is a paradigm that organizes software around objects, each combining data (fields) and behavior (methods). Java is built on four OOP pillars: Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      thirteenMark: {
        intro: "Object-Oriented Programming is the dominant paradigm for building large, maintainable software systems. Java is one of the most widely used OOP languages.",
        definition: "OOP is a programming approach that models a system as a collection of cooperating objects. An object is an instance of a class that bundles attributes (fields) and methods (functions that operate on the data).",
        explanation: "The four pillars of OOP are:\n1. Encapsulation — bundling data and methods that operate on it inside a class, with controlled access via access modifiers.\n2. Abstraction — hiding implementation details and exposing only essential features through abstract classes and interfaces.\n3. Inheritance — allowing one class (child) to inherit fields and methods of another (parent), promoting code reuse.\n4. Polymorphism — the same interface (method name) representing different underlying forms via overloading (compile-time) or overriding (runtime).\n\nJava supports all four pillars. It is sometimes called 'pure OOP' because almost everything is an object, though primitive types (int, double, char, etc.) are not objects — they have wrapper classes (Integer, Double) for OOP-style use.",
        diagram: "      OOP Paradigm\n            |\n   +--------+--------+\n   |                 |\n  Class           Object\n (Blueprint)     (Instance)\n   |                 |\n   +--- 4 Pillars ---+\n   |   Encapsulation |\n   |   Abstraction   |\n   |   Inheritance   |\n   |   Polymorphism  |\n   +-----------------+",
        example: "class Animal { String name; void speak() { System.out.println(name + \" makes a sound\"); } } class Dog extends Animal { @Override void speak() { System.out.println(name + \" barks\"); } } // Animal is a parent class; Dog inherits and overrides speak() — illustrating inheritance and polymorphism.",
        conclusion: "OOP manages software complexity by mirroring real-world entities. Java's strong OOP support makes it a top choice for building modular, reusable, and scalable systems."
      },
      sixteenMark: {
        intro: "Object-Oriented Programming is a foundational paradigm in modern software engineering. Java was designed from the ground up as an OOP language, and understanding its principles is essential to writing good Java code.",
        definition: "Object-Oriented Programming is a paradigm that uses 'objects' — instances of classes — as the basic unit of organization. Each object combines data (attributes) and behavior (methods) and interacts with other objects via well-defined interfaces. OOP emphasizes reusability, modularity, and modeling real-world entities.",
        explanation: "OOP rests on four pillars:\n1. Encapsulation: Data and methods are bundled in a class. Fields are usually private and accessed via public getters/setters, hiding internal state.\n2. Abstraction: Complex reality is modeled through abstract classes and interfaces. The caller sees only what an object does, not how it does it.\n3. Inheritance: A subclass extends a parent class, inheriting its fields and methods using the 'extends' keyword. It enables hierarchical classification and code reuse. Java supports single inheritance of classes but multiple inheritance of type through interfaces.\n4. Polymorphism: The same method name can represent different behaviors. Overloading (compile-time, same class, different parameter lists) and overriding (runtime, subclass changes parent's method) are the two forms.\n\nJava supports OOP with: access modifiers (public, private, protected, default), packages for namespacing, abstract classes and interfaces, and a single root class (Object) for the entire class hierarchy.",
        working: "OOP works at two levels:\n- Compile time: javac checks type safety, resolves overloaded methods, and verifies that abstract methods are implemented.\n- Runtime: the JVM allocates objects on the heap, uses dynamic dispatch to select the correct overridden method at runtime, and uses reflection for runtime type inspection.",
        diagram: "+--------------------------+\n|     OOP in Java          |\n+--------------------------+\n|  4 Pillars:              |\n|   - Encapsulation        |\n|   - Abstraction          |\n|   - Inheritance          |\n|   - Polymorphism         |\n+--------------------------+\n            |\n            v\n+--------------------------+\n|   Java class             |\n|   - fields (state)       |\n|   - methods (behavior)   |\n+--------------------------+",
        example: "// Demonstrating all 4 pillars\nclass Vehicle {                              // 1. Encapsulation\n    private int speed;\n    public void setSpeed(int s) { if (s >= 0) speed = s; }\n    public int getSpeed() { return speed; }\n    void start() { System.out.println(\"Vehicle starts\"); }  // 2. Abstraction\n}\nclass Car extends Vehicle {                  // 3. Inheritance\n    @Override\n    void start() { System.out.println(\"Car starts with key\"); } // 4. Polymorphism\n}",
        output: "Car starts with key",
        advantages: [
          "Models real-world entities naturally",
          "Encourages code reuse via inheritance and composition",
          "Improves maintainability and extensibility",
          "Supports modular, parallel development",
          "Enables polymorphism for flexible, decoupled code"
        ],
        applications: [
          "GUI applications (Swing, JavaFX)",
          "Enterprise software (Spring, EJB)",
          "Game development",
          "Domain-driven design (DDD)",
          "Banking, e-commerce, and ERP systems"
        ],
        conclusion: "OOP is the dominant paradigm for building large, maintainable software. Java, designed as a strongly-typed OOP language, leverages these four pillars to provide a robust, scalable, and widely adopted programming platform."
      }
    },
    viva: [
      { q: "What is OOP?", a: "A programming paradigm based on objects that combine data and behavior, organized around classes and four pillars: Encapsulation, Abstraction, Inheritance, Polymorphism." },
      { q: "Name the four pillars of OOP.", a: "Encapsulation, Abstraction, Inheritance, Polymorphism." },
      { q: "Is Java a 100% pure OOP language?", a: "Almost. Primitives (int, double, char, etc.) are not objects, but they have wrapper classes (Integer, Double) for OOP-style use." },
      { q: "Difference between class and object?", a: "A class is a blueprint/template; an object is a runtime instance of that class created with the 'new' keyword." },
      { q: "How is OOP different from procedural programming?", a: "Procedural focuses on functions and top-down flow; OOP organizes around objects that combine state and behavior." }
    ],
    quiz: {
      mcqs: [
        { question: "Which of the following is NOT a pillar of OOP?", options: ["Encapsulation", "Abstraction", "Compilation", "Polymorphism"], answer: 2, explanation: "Compilation is a build step, not a pillar." },
        { question: "OOP stands for:", options: ["Object-Oriented Programming", "Open-source Programming", "Object-Oriented Process", "Optimal Object Programming"], answer: 0, explanation: "Object-Oriented Programming." },
        { question: "An object is an instance of:", options: ["Method", "Class", "Variable", "Package"], answer: 1, explanation: "Objects are instances of classes." },
        { question: "Which OOP concept hides internal state?", options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"], answer: 2, explanation: "Encapsulation binds state and controls access." }
      ],
      trueFalse: [
        { statement: "Java supports multiple inheritance of classes.", answer: false, explanation: "Java supports single inheritance of classes; multiple inheritance is achieved via interfaces." },
        { statement: "In OOP, methods and data are bundled together.", answer: true, explanation: "That is the core idea of encapsulation." }
      ]
    },
    revision: {
      oneMin: "OOP = 4 pillars: Encapsulation, Abstraction, Inheritance, Polymorphism.",
      fiveMin: [
        "Class = blueprint, Object = instance",
        "Encapsulation = private + getters/setters",
        "Abstraction = abstract class or interface",
        "Inheritance = extends (is-a)",
        "Polymorphism = overloading + overriding"
      ],
      examDay: [
        "Define OOP in 1-2 lines",
        "List and briefly explain all 4 pillars",
        "Give a real-world example of each pillar",
        "Write a small class demonstrating OOP"
      ],
      memoryTrick: "EAIP — Encapsulation, Abstraction, Inheritance, Polymorphism.",
      faq: [
        { q: "Is Java 100% object-oriented?", a: "Almost. Primitives (int, char) are not objects, but wrapper classes (Integer, Character) make them usable in OOP contexts." },
        { q: "Which came first, OOP or procedural programming?", a: "Procedural came first (C, Fortran). OOP emerged with Simula (1960s) and Smalltalk (1970s)." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-encapsulation",
    unitId: 1,
    index: 2,
    title: "Encapsulation",
    tagline: "Wrapping data and methods into a single unit",
    oneLiner: "Encapsulation is the binding of data and the methods that operate on that data into a single unit (class), and restricting direct access to some of the object's components using access modifiers.",
    analogy: "Think of a medicine capsule. The powder (data) is enclosed in the outer shell (class). You cannot touch the powder directly; you interact with the capsule's surface (public methods).",
    whyExists: "To protect an object's internal state from unwanted modifications and to enforce controlled, validated access through methods.",
    whereUsed: ["JavaBeans", "POJOs", "API design", "DTOs", "Service-layer classes", "JPA entities"],
    visualCue: "🔒",
    code: {
      language: "java",
      code: `class Student {
    private String name;
    private int age;

    public void setName(String name) {
        if (name != null && !name.isBlank()) this.name = name;
    }
    public String getName() { return name; }

    public void setAge(int age) {
        if (age > 0 && age < 130) this.age = age;
    }
    public int getAge() { return age; }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Alice");
        s.setAge(20);
        System.out.println(s.getName() + " is " + s.getAge());
    }
}`,
      caption: "Encapsulation: private fields with validated public getters/setters."
    },
    internalWorking: {
      steps: [
        "Fields are declared private → hidden from outside the class.",
        "Public getter and setter methods provide controlled read/write access.",
        "Validation logic in setters enforces business rules.",
        "The compiler enforces access modifiers at compile time.",
        "At runtime, the JVM uses access flags in the .class file to check visibility."
      ],
      memory: "Each object stores its private fields in heap memory. Even though hidden, the fields exist inside the same object on the heap."
    },
    examAnswer: {
      twoMark: "Encapsulation is the process of binding data and the methods that manipulate that data into a single unit (class) and restricting direct access to some of the object's components using access modifiers like private. It improves security, maintainability, and flexibility.",
      thirteenMark: {
        intro: "Encapsulation is one of the four fundamental OOP concepts in Java, focused on data hiding and controlled access.",
        definition: "Encapsulation is the wrapping of data (variables) and the code that operates on that data (methods) into a single unit. It restricts direct access to some of the object's components, preventing unintended interference and misuse of the data.",
        explanation: "In Java, encapsulation is implemented using access modifiers: private, default (package-private), protected, and public. Data members are usually declared private and accessed through public getter and setter methods. This allows the class to control how its data is modified — for example, validating values in setters. It also makes the class independent — its internal representation can change without affecting external code that uses the class. A class can expose read-only access by providing only a getter, or write-only access by providing only a setter.",
        diagram: "  +----------------------+\n  |     Student          |\n  +----------------------+\n  | - name : String      |\n  | - age  : int         |\n  +----------------------+\n  | + setName(String)    |\n  | + getName() : String |\n  | + setAge(int)        |\n  | + getAge() : int     |\n  +----------------------+",
        types: [
          {
            name: "Data Hiding",
            definition: "Data hiding restricts direct access to an object's fields so all interaction must go through the class's own methods.",
            diagram: "  +-----------+\n  | - balance |  <-- private\n  +-----------+\n         ^\n         |  only via methods\n         v\n  +-----------+\n  | get / set |\n  +-----------+",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    public double getBalance() { return balance; }

    void deposit(double amt) { balance += amt; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account();
        a.deposit(100);
        System.out.println(a.getBalance());
    }
}`,
              caption: "balance is hidden; access is via methods only."
            },
            notes: [
              "Fields are declared with the private modifier so they are invisible outside the class.",
              "Every read and write must use a method defined in the class, giving the class full control.",
              "Access is enforced at compile time by the compiler and at runtime by access flags in the .class file."
            ],
            exampleOutput: "100.0"
          },
          {
            name: "Controlled Access (getters/setters)",
            definition: "Controlled access exposes private data through public getter and setter methods that can validate, transform, or log values.",
            diagram: "  client --set()--> [ private field ]\n          <--get()--\n   (validation in set, transform in get)",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    public void setBalance(double b) {
        if (b >= 0) this.balance = b;
    }

    public double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account();
        a.setBalance(250);
        a.setBalance(-5);
        System.out.println(a.getBalance());
    }
}`,
              caption: "Setter rejects negative values; getter returns the stored value."
            },
            notes: [
              "Setters can validate inputs and reject invalid values, enforcing class invariants.",
              "Getters can compute, format, or trigger events on the way out without changing the call site.",
              "Internal representation can evolve freely; external code keeps working as long as the public API is stable."
            ],
            exampleOutput: "250.0"
          }
        ],
        example: "class Account { private double balance; public void deposit(double amt) { if (amt > 0) balance += amt; } public double getBalance() { return balance; } } // balance is hidden; only validated deposit and read access are exposed.",
        conclusion: "Encapsulation provides data hiding, increases flexibility, reusability, and makes code easier to test and maintain. Combined with abstraction, it forms the foundation of well-designed Java applications."
      },
      sixteenMark: {
        intro: "Encapsulation is a core OOP principle that combines data and behavior into a single entity while hiding internal details from the outside world.",
        definition: "Encapsulation is the mechanism of bundling data with the methods that operate on that data, and restricting direct access to some of the object's components to enforce controlled interaction.",
        explanation: "In Java, encapsulation is realized by declaring fields as private and exposing them through public accessor (getter) and mutator (setter) methods. This hides the internal representation and enables validation, lazy initialization, change notification, and read-only or write-only access (by exposing only getter or only setter). Encapsulation is also the foundation for designing robust, evolving APIs: clients depend on the public methods, not on internal fields, so internal implementation can change freely.\n\nThree benefits follow: (1) data protection — invalid values are rejected in setters; (2) flexibility — the class can change internally without breaking callers; (3) testability — controlled inputs and outputs make unit testing straightforward.",
        working: "At compile time, the compiler checks access modifiers and generates accessor methods where required. At runtime, the JVM uses access flags stored in the .class file to enforce visibility between classes. Reflection can bypass encapsulation, but doing so is risky and should be avoided in production code.",
        diagram: "+----------------------+\n|        Class         |\n+----------------------+\n| - data1 : Type       |\n| - data2 : Type       |\n+----------------------+\n| + getData1() : Type  |\n| + setData1(Type)     |\n| + operation()        |\n+----------------------+\n         ^\n         |  access only through public methods\n         |\n      Caller",
        types: [
          {
            name: "Data Hiding",
            definition: "Data hiding restricts direct access to an object's fields so all interaction must go through the class's own methods.",
            diagram: "  +-----------+\n  | - balance |  <-- private\n  +-----------+\n         ^\n         |  only via methods\n         v\n  +-----------+\n  | get / set |\n  +-----------+",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    public double getBalance() { return balance; }

    void deposit(double amt) { balance += amt; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account();
        a.deposit(100);
        System.out.println(a.getBalance());
    }
}`,
              caption: "balance is private; access is through methods only."
            },
            notes: [
              "Fields are declared private and cannot be referenced from any other class.",
              "The class becomes the sole owner of its state and decides how that state is read or changed.",
              "Combined with private methods, this makes a class a self-contained black box."
            ],
            exampleOutput: "100.0"
          },
          {
            name: "Controlled Access (getters/setters)",
            definition: "Controlled access exposes private data only through public accessor (getter) and mutator (setter) methods that can validate, transform, or notify.",
            diagram: "  client --set()--> [ private field ]\n          <--get()--\n   (validation in set, transform in get)",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    public void setBalance(double b) {
        if (b >= 0) this.balance = b;
    }

    public double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account();
        a.setBalance(250);
        a.setBalance(-5);
        System.out.println(a.getBalance());
    }
}`,
              caption: "Setter rejects negative amounts; getter returns the stored value."
            },
            notes: [
              "Setters can validate, reject invalid values, or trigger side-effects (events, logging).",
              "Getters can compute, format, or lazy-initialize values on the way out.",
              "Internal representation can change without breaking callers, as long as the public API is preserved."
            ],
            exampleOutput: "250.0"
          },
          {
            name: "Read-Only Fields",
            definition: "Read-only fields are private fields exposed only via a public getter with no setter, so external code can observe but never change the value.",
            diagram: "  client  --get-->  [ private final field ]\n              X--set--X   (no setter)",
            code: {
              language: "java",
              code: `class User {
    private final String id;

    User(String id) { this.id = id; }

    public String getId() { return id; }
}

public class Main {
    public static void main(String[] args) {
        User u = new User("U1001");
        System.out.println(u.getId());
    }
}`,
              caption: "Final id field with only a getter — read-only from outside."
            },
            notes: [
              "The field is commonly declared final and assigned exactly once in the constructor.",
              "Read-only fields are the foundation of immutable classes such as String and Integer.",
              "External code can read the value but cannot mutate it, preventing accidental changes."
            ],
            exampleOutput: "U1001"
          },
          {
            name: "Write-Only Fields",
            definition: "Write-only fields are private fields exposed only via a setter with no public getter, so callers can push values in but never read them back.",
            diagram: "  client  --set-->  [ private field ]\n              X--get--X   (no getter)",
            code: {
              language: "java",
              code: `class SecureSink {
    private String token;

    public void setToken(String t) { this.token = t; }

    void flush() { System.out.println("flushed"); }
}

public class Main {
    public static void main(String[] args) {
        SecureSink s = new SecureSink();
        s.setToken("abc");
        s.flush();
    }
}`,
              caption: "token can be set but never read from outside the class."
            },
            notes: [
              "Useful for security-sensitive inputs such as passwords, tokens, or audit messages.",
              "The field is consumed by an internal method rather than returned to the caller.",
              "Read access can still be granted internally to trusted code paths within the class."
            ],
            exampleOutput: "flushed"
          }
        ],
        example: "class Employee {\n    private String name;\n    private double salary;\n\n    public void setSalary(double s) {\n        if (s >= 0) salary = s;\n    }\n    public String getName() { return name; }\n    public void setName(String n) { this.name = n; }\n    public double getSalary() { return salary; }\n}",
        output: "External code cannot read or modify name/salary directly. They are only accessed via getters/setters, and invalid salaries are rejected.",
        advantages: [
          "Data hiding and protection from unauthorized access",
          "Increased flexibility — internal implementation can change freely",
          "Reusability — encapsulated classes can be reused in different contexts",
          "Maintainability — internal changes don't affect external code",
          "Easier testing — controlled inputs and outputs",
          "Validation and invariants enforced in setters"
        ],
        applications: [
          "JavaBeans specification",
          "Spring framework beans",
          "Hibernate/JPA entity classes",
          "REST API DTOs and request/response models",
          "Microservices and domain models"
        ],
        conclusion: "Encapsulation is the cornerstone of modular, secure, and maintainable object-oriented software. Combined with abstraction, it forms the basis of well-designed Java applications and is heavily used in frameworks like Spring and Hibernate."
      }
    },
    viva: [
      { q: "What is encapsulation?", a: "Wrapping data and methods that operate on that data into a single unit and restricting direct access to some components." },
      { q: "How is encapsulation implemented in Java?", a: "By declaring fields private and exposing public getter and setter methods." },
      { q: "Can we achieve encapsulation without access modifiers?", a: "Access modifiers are the standard way. Without them you can simulate it via conventions but not enforce it." },
      { q: "What is the difference between encapsulation and abstraction?", a: "Encapsulation is data hiding (how it is hidden); abstraction is implementation hiding (what is exposed)." },
      { q: "Is encapsulation the same as data hiding?", a: "Data hiding is an aspect of encapsulation. Encapsulation also includes bundling data and behavior in a class." },
      { q: "Can a class be read-only via encapsulation?", a: "Yes — provide only getters (and no public setters) to make fields read-only from outside." }
    ],
    quiz: {
      mcqs: [
        { question: "Which access modifier is most commonly used to achieve encapsulation?", options: ["public", "private", "protected", "default"], answer: 1, explanation: "private hides the field from outside; access is given via getters/setters." },
        { question: "Encapsulation primarily provides:", options: ["Performance", "Data hiding", "Multiple inheritance", "Polymorphism"], answer: 1, explanation: "Encapsulation hides the internal state." },
        { question: "Which of the following is NOT a benefit of encapsulation?", options: ["Security", "Maintainability", "Faster execution", "Flexibility"], answer: 2, explanation: "Encapsulation does not directly affect execution speed." },
        { question: "A class with all private fields and public getters/setters is an example of:", options: ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"], answer: 1, explanation: "Private fields + public accessors = encapsulation." }
      ],
      trueFalse: [
        { statement: "Encapsulation can be achieved using private variables and public methods.", answer: true, explanation: "This is the standard pattern." },
        { statement: "Encapsulation means exposing all data as public.", answer: false, explanation: "Encapsulation is the opposite — it hides data." }
      ]
    },
    revision: {
      oneMin: "Encapsulation = private data + public methods (with validation).",
      fiveMin: [
        "Declare fields private.",
        "Provide public getters and setters.",
        "Validate inputs in setters.",
        "Hide internal representation.",
        "Improves modularity and testability."
      ],
      examDay: [
        "Write 'data binding + data hiding' definition.",
        "Mention private + public getter/setter.",
        "Give a real-world analogy (capsule, ATM, account).",
        "Draw a class diagram with - and + symbols."
      ],
      memoryTrick: "Encapsulation = Capsule (medicine) — outer shell protects the powder inside.",
      faq: [
        { q: "Is encapsulation only about access modifiers?", a: "Mostly yes, but it also includes bundling data and methods into a single class." },
        { q: "Can a class without getters be encapsulated?", a: "Yes, if all data is private and access is only via methods, even without explicit getters." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-abstraction",
    unitId: 1,
    index: 3,
    title: "Data Abstraction",
    tagline: "Showing only the essentials, hiding the rest",
    oneLiner: "Abstraction is the process of hiding implementation details and exposing only the essential features of an object to the user.",
    analogy: "When you drive a car, you use the steering wheel, accelerator, and brake. You don't need to know how the engine, gearbox, or fuel injection work. That is abstraction.",
    whyExists: "To reduce complexity by exposing only relevant features and to decouple what an object does from how it does it.",
    whereUsed: ["Abstract classes", "Interfaces", "API design", "Service layers", "Design patterns (Template, Strategy, Factory)"],
    visualCue: "🎭",
    code: {
      language: "java",
      code: `abstract class Shape {
    abstract double area();
    void display() { System.out.println("A shape"); }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override
    double area() { return Math.PI * r * r; }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle(5);
        System.out.println(\"Area = \" + s.area());
        s.display();
    }
}`,
      caption: "Abstraction via abstract class; Circle provides concrete area()."
    },
    internalWorking: {
      steps: [
        "abstract keyword prevents direct instantiation of the class.",
        "Subclasses must implement all abstract methods, or be declared abstract too.",
        "The compiler checks abstract method coverage at compile time.",
        "At runtime, dynamic dispatch resolves the call to the subclass implementation.",
        "Abstract classes still occupy method tables; abstract methods are placeholders in the vtable."
      ],
      memory: "An abstract class can hold instance variables and constants that subclasses inherit, just like a regular class."
    },
    examAnswer: {
      twoMark: "Data abstraction is the process of hiding implementation details and showing only the essential features of an object. In Java, it is achieved using abstract classes and interfaces.",
      thirteenMark: {
        intro: "Abstraction is one of the four pillars of OOP. It allows programmers to manage complexity by focusing on what an object does, not how.",
        definition: "Abstraction is the concept of exposing only the required characteristics of an entity and hiding the implementation details. In Java, it is implemented using abstract classes (0 to 100% abstraction) and interfaces (100% abstraction, with allowances for default methods in Java 8+).",
        explanation: "An abstract class may contain abstract methods (declared but not implemented) and concrete methods. A class that extends an abstract class must implement all abstract methods, otherwise it must also be declared abstract. Interfaces (pre-Java 8) only had abstract methods; from Java 8, they can have default and static methods, and from Java 9, private methods as well. Abstraction enables loose coupling and easier maintenance.",
        diagram: "         <<abstract>> Shape\n        +-----------------+\n        | + area() : dbl  | <-- abstract\n        | + display()     | <-- concrete\n        +-----------------+\n            ^\n            |\n     +------+------+\n     |             |\n   Circle       Rectangle\n     |             |\n     +-- area() override in each",
        types: [
          {
            name: "Abstract Classes",
            definition: "An abstract class is declared with the abstract keyword; it can mix abstract and concrete methods and may have constructors, but cannot be instantiated directly.",
            diagram: "  <<abstract>> Shape\n  +------------------+\n  | + area()         | <-- abstract\n  | + display()      | <-- concrete\n  +------------------+\n        ^\n   +----+----+\n Circle   Square",
            code: {
              language: "java",
              code: `abstract class Shape {
    abstract double area();
    void display() { System.out.println("A shape"); }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override
    double area() { return Math.PI * r * r; }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle(5);
        System.out.println(s.area());
    }
}`,
              caption: "Shape is abstract; Circle supplies the concrete area()."
            },
            notes: [
              "Abstract classes can declare constructors, instance fields, and any mix of abstract and concrete methods.",
              "A non-abstract subclass must implement every inherited abstract method, or it must itself be declared abstract.",
              "Abstract classes support partial abstraction (0 to 100%) and are useful when subclasses share code and state."
            ],
            exampleOutput: "78.53981633974483"
          },
          {
            name: "Interfaces",
            definition: "An interface is a reference type that declares a contract of abstract methods; from Java 8 it can also hold default and static methods, and from Java 9 private methods too.",
            diagram: "  <<interface>> Vehicle\n  +------------------+\n  | + start()        |\n  | + stop()         |\n  +------------------+\n       ^ implements\n  +----+----+\n  Car     Bike",
            code: {
              language: "java",
              code: `interface Vehicle {
    void start();
    void stop();
}

class Car implements Vehicle {
    public void start() { System.out.println("Car start"); }
    public void stop()  { System.out.println("Car stop"); }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();
        v.stop();
    }
}`,
              caption: "Vehicle defines a contract; Car implements it."
            },
            notes: [
              "Before Java 8, interfaces could only declare abstract methods and public static final constants.",
              "From Java 8, interfaces can have default and static methods; from Java 9, they can also have private methods.",
              "A class can implement any number of interfaces, providing Java's form of multiple inheritance of type."
            ],
            exampleOutput: "Car start\nCar stop"
          }
        ],
        example: "abstract class Animal { abstract void sound(); } class Dog extends Animal { @Override void sound() { System.out.println(\"Bark\"); } } // Animal defines the contract; Dog provides concrete behavior.",
        conclusion: "Abstraction simplifies complex systems by exposing only the relevant parts and is key to designing scalable, maintainable systems."
      },
      sixteenMark: {
        intro: "Data abstraction is a fundamental OOP principle that separates interface from implementation, allowing programmers to work with high-level concepts without worrying about low-level details.",
        definition: "Abstraction is the process of identifying the essential features of an object and ignoring the irrelevant details. In Java, abstraction is achieved through abstract classes and interfaces, both of which can define a contract without specifying the underlying implementation.",
        explanation: "Abstract classes can have constructors, instance variables, abstract methods, and concrete methods. They are used when classes share code. Interfaces (before Java 8) were pure abstract; from Java 8, they can have default and static methods with bodies. From Java 9, they can also have private methods. A class can implement multiple interfaces, providing Java's way of supporting multiple inheritance of type. Abstract data types (ADTs) like List, Set, Map are practical examples.\n\nChoosing between an abstract class and an interface: use an abstract class when classes share code (state + behavior); use an interface to define a contract that many unrelated classes can implement, or to mix in capabilities.",
        working: "The compiler ensures that any non-abstract subclass provides implementations for all inherited abstract methods. At runtime, the JVM uses dynamic dispatch (vtable lookup) to call the correct overridden method on the actual object type.",
        diagram: "      <<interface>> Drawable\n      +-----------------+\n      | + draw()        |\n      +-----------------+\n             ^\n      +------+------+\n      |             |\n   Circle        Square\n      |             |\n      +-- draw() override in each",
        types: [
          {
            name: "Abstract Classes",
            definition: "An abstract class is declared with the abstract keyword; it can hold constructors, instance state, and any mix of abstract and concrete methods, but cannot be instantiated directly.",
            diagram: "  <<abstract>> Shape\n  +------------------+\n  | + area()         | <-- abstract\n  | + display()      | <-- concrete\n  +------------------+\n        ^\n   +----+----+\n Circle   Square",
            code: {
              language: "java",
              code: `abstract class Shape {
    abstract double area();
    void display() { System.out.println("A shape"); }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }
    @Override
    double area() { return Math.PI * r * r; }
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Circle(5);
        System.out.println(s.area());
    }
}`,
              caption: "Shape is abstract; Circle supplies the concrete area()."
            },
            notes: [
              "Abstract classes can declare constructors that are invoked by subclass constructors via super().",
              "An abstract class can have zero abstract methods; the 'abstract' modifier alone is enough to block instantiation.",
              "Subclasses must implement all inherited abstract methods or be declared abstract themselves."
            ],
            exampleOutput: "78.53981633974483"
          },
          {
            name: "Interfaces",
            definition: "An interface is a reference type that declares an abstract contract; from Java 8 it can also hold default and static methods, and from Java 9 private methods too.",
            diagram: "  <<interface>> Vehicle\n  +------------------+\n  | + start()        |\n  | + stop()         |\n  +------------------+\n       ^ implements\n  +----+----+\n  Car     Bike",
            code: {
              language: "java",
              code: `interface Vehicle {
    void start();
    void stop();
}

class Car implements Vehicle {
    public void start() { System.out.println("Car start"); }
    public void stop()  { System.out.println("Car stop"); }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();
        v.stop();
    }
}`,
              caption: "Vehicle defines a contract; Car implements it."
            },
            notes: [
              "Pre-Java 8, interfaces could contain only abstract methods and public static final constants.",
              "Java 8 added default and static methods; Java 9 added private methods to share code inside the interface.",
              "A class can implement any number of interfaces, providing Java's form of multiple inheritance of type."
            ],
            exampleOutput: "Car start\nCar stop"
          },
          {
            name: "Abstract Methods",
            definition: "An abstract method is declared without a body; every concrete subclass must provide its own implementation, forming the contract enforced at compile time.",
            diagram: "  abstract void draw();   // declaration\n  -----------------------\n  class Circle {\n      void draw() { ... }  // implementation\n  }",
            code: {
              language: "java",
              code: `abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,
              caption: "sound() is abstract in Animal; Dog provides the body."
            },
            notes: [
              "An abstract method has a signature but no body; only the abstract modifier and a semicolon are required.",
              "Abstract methods cannot be private, static, or final because they must be visible and overridable by subclasses.",
              "If a subclass does not implement an inherited abstract method, it must be declared abstract too."
            ],
            exampleOutput: "Bark"
          }
        ],
        example: "interface Vehicle { void start(); void stop(); }\nclass Car implements Vehicle {\n    @Override public void start() { System.out.println(\"Car start\"); }\n    @Override public void stop()  { System.out.println(\"Car stop\"); }\n}\nclass Bike implements Vehicle {\n    @Override public void start() { System.out.println(\"Bike start\"); }\n    @Override public void stop()  { System.out.println(\"Bike stop\"); }\n}",
        output: "Car start\nCar stop",
        advantages: [
          "Reduces complexity by hiding implementation",
          "Enables loose coupling between components",
          "Improves code reusability and modularity",
          "Simplifies maintenance and future extensions",
          "Facilitates parallel development by team members",
          "Allows swapping implementations without changing callers"
        ],
        applications: [
          "Collections framework (List, Set, Map interfaces)",
          "JDBC API (Connection, Statement, ResultSet interfaces)",
          "Design patterns (Template Method, Strategy, Factory)",
          "GUI frameworks (ActionListener, EventHandler)",
          "Web services and REST APIs"
        ],
        conclusion: "Abstraction, combined with encapsulation, inheritance, and polymorphism, makes Java a powerful language for building modular and scalable systems. It is the foundation of contract-based design and modern API development."
      }
    },
    viva: [
      { q: "How do you achieve abstraction in Java?", a: "Using abstract classes and interfaces." },
      { q: "Can we have an abstract class without any abstract method?", a: "Yes. Marking a class abstract is allowed even with no abstract methods." },
      { q: "What is the difference between an abstract class and an interface?", a: "An abstract class can have state and constructors; an interface (pre-Java 8) is pure abstraction. From Java 8, interfaces can also have default and static methods." },
      { q: "Why cannot we instantiate an abstract class?", a: "Because it may contain unimplemented methods; instantiation would lead to undefined behavior." },
      { q: "What is a pure abstract class?", a: "An interface — it has no concrete methods and only declares behavior." }
    ],
    quiz: {
      mcqs: [
        { question: "Which keyword is used to declare an abstract class?", options: ["interface", "abstract", "virtual", "sealed"], answer: 1, explanation: "abstract keyword is used." },
        { question: "An abstract class can have:", options: ["Only abstract methods", "Only concrete methods", "Both abstract and concrete", "None of the above"], answer: 2, explanation: "Abstract classes can mix both." },
        { question: "Which of these supports 100% abstraction?", options: ["Concrete class", "Abstract class", "Interface (pre-Java 8)", "Final class"], answer: 2, explanation: "Interfaces had only abstract methods before Java 8." },
        { question: "Can an abstract class have a constructor?", options: ["Yes", "No", "Only default", "Only private"], answer: 0, explanation: "Yes — it is invoked by subclass constructors via super()." }
      ],
      trueFalse: [
        { statement: "Abstract classes can have constructors.", answer: true, explanation: "Yes, they can; constructors are used by subclasses." },
        { statement: "We can create objects of an abstract class.", answer: false, explanation: "Instantiation is not allowed." }
      ]
    },
    revision: {
      oneMin: "Abstraction = show what, hide how. Use abstract class or interface.",
      fiveMin: [
        "Use abstract class for partial abstraction.",
        "Use interface for full abstraction / multiple inheritance.",
        "Subclass must implement all abstract methods.",
        "Abstract class can have constructors and state.",
        "Interface methods are public abstract by default (until Java 8)."
      ],
      examDay: [
        "Define abstraction in one line.",
        "Differentiate abstract class vs interface.",
        "Give a real-life example (TV remote, car, ATM).",
        "Write a small program demonstrating abstraction."
      ],
      memoryTrick: "Abstraction = ATM machine — you press buttons; the cash mechanism inside is hidden.",
      faq: [
        { q: "Can an abstract class have a main method?", a: "Yes, it can have main and you can run it." },
        { q: "Can an interface have variables?", a: "Yes, but they are implicitly public static final." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-inheritance",
    unitId: 1,
    index: 4,
    title: "Inheritance",
    tagline: "Building hierarchies of classes",
    oneLiner: "Inheritance is the OOP mechanism that allows a class (subclass/child) to acquire the fields and methods of another class (superclass/parent) using the extends keyword, enabling code reuse and hierarchical classification.",
    analogy: "Like a child inheriting traits from parents — eye color, language — but adding their own personality. A 'Car' inherits from 'Vehicle' but adds car-specific features.",
    whyExists: "To enable code reuse, model hierarchical 'is-a' relationships, support polymorphism, and reduce duplication.",
    whereUsed: ["Frameworks (Spring, Hibernate)", "GUI component libraries", "Domain models", "Design patterns", "Test hierarchies (JUnit)"],
    visualCue: "🌳",
    code: {
      language: "java",
      code: `class Vehicle {
    String brand;
    int year;

    Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    void honk() {
        System.out.println("Beep!");
    }
}

class Car extends Vehicle {
    int doors;

    Car(String brand, int year, int doors) {
        super(brand, year);
        this.doors = doors;
    }

    @Override
    void honk() {
        System.out.println("Car horn: Beep beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car("Honda", 2022, 4);
        System.out.println(c.brand + " " + c.year + " doors=" + c.doors);
        c.honk();
    }
}`,
      caption: "Car inherits from Vehicle; calls super() and overrides honk()."
    },
    internalWorking: {
      steps: [
        "JVM loads the subclass .class; it includes a reference to its superclass .class.",
        "When 'new Car(...)' runs, the superclass fields are allocated as part of the object.",
        "The subclass constructor calls super(...) to initialize inherited fields.",
        "Inherited methods are stored in the parent's method area; the subclass can call them via super.method().",
        "At runtime, instanceof and dynamic dispatch use the inheritance chain to resolve type and behavior."
      ],
      memory: "A subclass object contains a 'super' view: it is also an instance of the parent class, holding the parent's fields within the same heap block."
    },
    examAnswer: {
      twoMark: "Inheritance is the OOP mechanism that allows a class to inherit properties and behavior from another class using the extends keyword. It supports the 'is-a' relationship, enables code reuse, and is a prerequisite for runtime polymorphism in Java.",
      thirteenMark: {
        intro: "Inheritance is a cornerstone of OOP that enables hierarchical classification and code reuse.",
        definition: "Inheritance is the mechanism by which one class (subclass/child) acquires the fields and methods of another class (superclass/parent). In Java, it is expressed using the 'extends' keyword and represents an 'is-a' relationship.",
        explanation: "Java supports several types of inheritance:\n1. Single inheritance — a class extends one parent (Java allows only this for classes).\n2. Multilevel inheritance — a chain: A -> B -> C.\n3. Hierarchical inheritance — multiple subclasses share one parent.\n4. Multiple inheritance (of type) — a class implements multiple interfaces.\n\nJava does NOT support multiple inheritance of classes (to avoid the diamond problem). Constructors are not inherited, but the subclass constructor must call super(...) as its first statement (explicitly or implicitly). Private members of the parent are not directly accessible in the child, but they are inherited as part of the object. The 'super' keyword refers to the parent class.",
        diagram: "           Vehicle\n          +--------+\n          | honk() |\n          +--------+\n              ^  extends\n              |\n            Car\n        +--------+\n        | doors  |\n        | honk() | (overridden)\n        +--------+",
        example: "class Animal { String name; void eat() { System.out.println(name + \" eats\"); } } class Dog extends Animal { void bark() { System.out.println(name + \" barks\"); } } Dog d = new Dog(); d.name = \"Rex\"; d.eat(); d.bark();",
        types: [
          {
            name: "Single Inheritance",
            definition: "Single inheritance is the case where one class extends exactly one superclass, forming a direct parent-child relationship.",
            diagram: "  Animal\n    ^\n    | extends\n    |\n    Dog",
            code: {
              language: "java",
              code: `class Animal {
    void eat() { System.out.println("eat"); }
}

class Dog extends Animal {
    void bark() { System.out.println("bark"); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}`,
              caption: "Dog inherits from Animal via single inheritance."
            },
            notes: [
              "Every class in Java is part of a single-inheritance chain ending at java.lang.Object.",
              "A subclass automatically gains all non-private members of its single superclass.",
              "If no superclass is specified, the class implicitly extends Object."
            ],
            exampleOutput: "eat\nbark"
          },
          {
            name: "Multilevel Inheritance",
            definition: "Multilevel inheritance is a chain of single inheritance where a class extends another, which itself extends a third, building an ancestor chain.",
            diagram: "  Animal\n    ^\n    |\n   Dog\n    ^\n    |\n  Puppy",
            code: {
              language: "java",
              code: `class Animal { void eat() { System.out.println("eat"); } }
class Dog extends Animal { void bark() { System.out.println("bark"); } }
class Puppy extends Dog { void weep() { System.out.println("weep"); } }

public class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.weep();
    }
}`,
              caption: "Puppy inherits Dog, which inherits Animal."
            },
            notes: [
              "Members accumulate as the chain deepens; Puppy has access to eat(), bark(), and weep().",
              "The constructor chain calls super() implicitly at each level, finally reaching Object().",
              "Java forbids multiple-inheritance of classes, so this kind of chain is the only way to share state across levels."
            ],
            exampleOutput: "eat\nbark\nweep"
          }
        ],
        conclusion: "Inheritance enables code reuse and polymorphism, but it should be used only when there is a true 'is-a' relationship. Overuse leads to fragile hierarchies; many modern designs prefer composition over inheritance."
      },
      sixteenMark: {
        intro: "Inheritance is a foundational OOP concept that allows a class to inherit state and behavior from another, supporting reuse, extensibility, and polymorphism.",
        definition: "Inheritance is the mechanism by which a new class (subclass) is created from an existing class (superclass), inheriting its non-private fields and methods. The subclass can add new members, override inherited methods, and reuse the parent's code. In Java, inheritance is expressed with the 'extends' keyword (for classes) and 'implements' (for interfaces).",
        explanation: "Types of inheritance in Java:\n1. Single — class B extends A.\n2. Multilevel — A -> B -> C.\n3. Hierarchical — B and C both extend A.\n4. Multiple (of type) — class C implements I1, I2; or class C extends A implements I1, I2.\n5. Hybrid — a combination of the above using interfaces.\n\nKey rules:\n- Java does NOT support multiple inheritance of classes (no 'extends A, B') to avoid the diamond ambiguity.\n- Constructors are NOT inherited. The subclass constructor must invoke super(...) as the first statement; if omitted, the compiler inserts super() (no-arg call to parent).\n- Private members are not directly accessible in the subclass (though they exist in the object). Use protected or package-private for accessible inheritance.\n- The Object class is the implicit superclass of every class.\n- Use the 'final' keyword to prevent a class from being extended.",
        working: "1. When a subclass object is created, the JVM allocates memory for the combined object (parent fields + child fields).\n2. The subclass constructor's first action is to call a parent constructor (super(...) or the implicit no-arg one).\n3. Inherited methods are looked up in the parent's vtable unless overridden; the JVM uses dynamic dispatch to call the most specific version.\n4. The 'instanceof' operator checks the inheritance chain at runtime.",
        diagram: "        +-------------+\n        |   Vehicle   |\n        +-------------+\n        | brand       |\n        | year        |\n        | honk()      |\n        +-------------+\n              ^  extends\n              |\n        +-------------+\n        |     Car     |\n        +-------------+\n        | doors       |\n        | honk() { ... }  <-- overridden\n        +-------------+",
        example: "class Employee {\n    String name;\n    double salary;\n    Employee(String name, double salary) {\n        this.name = name; this.salary = salary;\n    }\n    double computeBonus() { return salary * 0.10; }\n}\nclass Manager extends Employee {\n    Manager(String n, double s) { super(n, s); }\n    @Override\n    double computeBonus() { return salary * 0.20 + 5000; }\n}",
        output: "Manager gets a higher bonus than a regular Employee due to the overridden computeBonus().",
        types: [
          {
            name: "Single Inheritance",
            definition: "Single inheritance is the case where one class extends exactly one superclass, forming a direct parent-child relationship.",
            diagram: "  Animal\n    ^\n    | extends\n    |\n    Dog",
            code: {
              language: "java",
              code: `class Animal {
    void eat() { System.out.println("eat"); }
}

class Dog extends Animal {
    void bark() { System.out.println("bark"); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}`,
              caption: "Dog inherits from Animal via single inheritance."
            },
            notes: [
              "Every class in Java is part of a single-inheritance chain ending at java.lang.Object.",
              "A subclass automatically gains all non-private members of its single superclass.",
              "If no superclass is specified, the class implicitly extends Object."
            ],
            exampleOutput: "eat\nbark"
          },
          {
            name: "Multilevel Inheritance",
            definition: "Multilevel inheritance is a chain of single inheritance where a class extends another, which itself extends a third, building an ancestor chain.",
            diagram: "  Animal\n    ^\n    |\n   Dog\n    ^\n    |\n  Puppy",
            code: {
              language: "java",
              code: `class Animal { void eat() { System.out.println("eat"); } }
class Dog extends Animal { void bark() { System.out.println("bark"); } }
class Puppy extends Dog { void weep() { System.out.println("weep"); } }

public class Main {
    public static void main(String[] args) {
        Puppy p = new Puppy();
        p.eat();
        p.bark();
        p.weep();
    }
}`,
              caption: "Puppy inherits Dog, which inherits Animal."
            },
            notes: [
              "Members accumulate as the chain deepens; Puppy has access to eat(), bark(), and weep().",
              "The constructor chain calls super() implicitly at each level, finally reaching Object().",
              "Java forbids multiple-inheritance of classes, so this kind of chain is the only way to share state across levels."
            ],
            exampleOutput: "eat\nbark\nweep"
          },
          {
            name: "Hierarchical Inheritance",
            definition: "Hierarchical inheritance is the case where multiple subclasses share the same superclass, each extending it independently.",
            diagram: "       Animal\n   +-----+-----+\n   |     |     |\n  Dog   Cat   Cow",
            code: {
              language: "java",
              code: `class Animal { void eat() { System.out.println("eat"); } }
class Dog  extends Animal { void sound() { System.out.println("bark"); } }
class Cat  extends Animal { void sound() { System.out.println("meow"); } }
class Cow  extends Animal { void sound() { System.out.println("moo");  } }

public class Main {
    public static void main(String[] args) {
        new Dog().eat();  new Dog().sound();
        new Cat().eat();  new Cat().sound();
        new Cow().eat();  new Cow().sound();
    }
}`,
              caption: "Dog, Cat, and Cow each extend Animal independently."
            },
            notes: [
              "Each subclass inherits the parent's members and may add or override its own.",
              "This pattern models a shared abstraction with many concrete variants in the real world.",
              "A change in the parent class automatically affects all subclasses, so design parent APIs carefully."
            ],
            exampleOutput: "eat\nbark\neat\nmeow\neat\nmoo"
          },
          {
            name: "Multiple Inheritance (via Interfaces)",
            definition: "Java does not allow a class to extend more than one class, but a class can implement any number of interfaces, providing multiple inheritance of type.",
            diagram: "  I1  I2\n   ^   ^\n   |   |\n   +---+---+\n       |\n       C",
            code: {
              language: "java",
              code: `interface Flyable { void fly(); }
interface Swimmable { void swim(); }

class Duck implements Flyable, Swimmable {
    public void fly()  { System.out.println("flying");  }
    public void swim() { System.out.println("swimming"); }
}

public class Main {
    public static void main(String[] args) {
        Duck d = new Duck();
        d.fly();
        d.swim();
    }
}`,
              caption: "Duck implements both Flyable and Swimmable."
            },
            notes: [
              "If two interfaces declare the same default method, the implementing class must override it to disambiguate.",
              "Interfaces solve the diamond problem by allowing only one default implementation of any given method.",
              "This is Java's way of expressing 'is-a' relationships with more than one capability."
            ],
            exampleOutput: "flying\nswimming"
          },
          {
            name: "Hybrid Inheritance",
            definition: "Hybrid inheritance combines more than one of the previous forms, typically using interfaces to overcome Java's no-multiple-inheritance restriction.",
            diagram: "   I1  I2\n    ^   ^\n    |   |\n    +---+---+\n        |\n        C extends B  (B is a class)\n        +-- implements I1, I2",
            code: {
              language: "java",
              code: `class Animal { void eat() { System.out.println("eat"); } }
interface Pet    { void play();   }
interface Trainable { void learn(); }

class Dog extends Animal implements Pet, Trainable {
    public void play()  { System.out.println("play");  }
    public void learn() { System.out.println("learn"); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.play();
        d.learn();
    }
}`,
              caption: "Dog extends Animal and implements Pet and Trainable."
            },
            notes: [
              "This is the practical 'best of all worlds' form: single class inheritance plus multiple interface implementation.",
              "Use this when a class is genuinely 'a kind of X' and additionally 'is also Y and Z'.",
              "The result resembles a hybrid of hierarchical and multiple inheritance without the diamond problem."
            ],
            exampleOutput: "eat\nplay\nlearn"
          }
        ],
        advantages: [
          "Promotes code reuse — common code lives in the parent",
          "Models real-world hierarchical relationships (is-a)",
          "Supports polymorphism through method overriding",
          "Reduces redundancy and improves maintainability",
          "Enables framework design (template methods, hooks)"
        ],
        applications: [
          "GUI frameworks (JButton extends AbstractButton)",
          "Servlet API (HttpServlet extends GenericServlet)",
          "Exception hierarchy (RuntimeException extends Exception)",
          "JUnit test classes",
          "Domain modeling (Manager is-a Employee)"
        ],
        conclusion: "Inheritance is a powerful OOP feature that enables reuse, hierarchy, and polymorphism. In Java, single class inheritance plus multiple interface implementation provide clarity without the diamond problem. Use it judiciously — prefer composition for 'has-a' relationships and use inheritance only for genuine 'is-a' cases."
      }
    },
    viva: [
      { q: "What keyword is used for inheritance in Java?", a: "extends (for classes); implements (for interfaces)." },
      { q: "Does Java support multiple inheritance of classes?", a: "No. Java supports only single inheritance of classes. Multiple inheritance is achieved via interfaces." },
      { q: "What does super(...) do?", a: "Calls a constructor of the parent class. It must be the first statement in a constructor." },
      { q: "Are constructors inherited?", a: "No. They are not inherited, but the subclass constructor can call them via super()." },
      { q: "What is the difference between 'is-a' and 'has-a'?", a: "'is-a' suggests inheritance (Car is-a Vehicle). 'has-a' suggests composition (Car has-a Engine)." },
      { q: "What is the root class of all Java classes?", a: "java.lang.Object." }
    ],
    quiz: {
      mcqs: [
        { question: "Which keyword is used to inherit a class in Java?", options: ["inherits", "extends", "implements", "super"], answer: 1, explanation: "extends is used for class inheritance." },
        { question: "Can a class extend multiple classes in Java?", options: ["Yes", "No", "Only abstract ones", "Only if they are final"], answer: 1, explanation: "Java allows single inheritance of classes to avoid the diamond problem." },
        { question: "What is the result of 'class C extends A, B' in Java?", options: ["Compiles", "Runtime error", "Compile error", "Works only with interfaces"], answer: 2, explanation: "Java does not allow extending multiple classes." },
        { question: "Which members are NOT inherited?", options: ["Public methods", "Protected fields", "Private fields", "Constructors"], answer: 3, explanation: "Constructors are not inherited. Private fields are inherited but not directly accessible." }
      ],
      trueFalse: [
        { statement: "A subclass can access private fields of its superclass directly.", answer: false, explanation: "Private members are not directly accessible, even in subclasses. Use protected or getters." },
        { statement: "Java supports multiple inheritance of type via interfaces.", answer: true, explanation: "A class can implement multiple interfaces." }
      ]
    },
    revision: {
      oneMin: "Inheritance = subclass extends parent. Single class inheritance + multiple interfaces.",
      fiveMin: [
        "Use 'is-a' to decide",
        "extends for class, implements for interface",
        "super(...) calls parent constructor",
        "Constructors are not inherited",
        "Object is the root superclass"
      ],
      examDay: [
        "Draw an inheritance hierarchy",
        "Show super() in constructor",
        "Mention Object as root class",
        "Differentiate is-a vs has-a"
      ],
      memoryTrick: "Inheritance = is-a relationship. Car IS-A Vehicle.",
      faq: [
        { q: "Can a final class be inherited?", a: "No. Marking a class 'final' prevents inheritance." },
        { q: "Can I prevent method overriding?", a: "Yes, mark the method as final." }
      ]
    },
    simulator: { type: "inheritance-tree", root: "Animal", nodes: [
      { name: "Animal", methods: ["eat()", "sleep()", "sound()"] },
      { name: "Dog", parent: "Animal", methods: ["sound()", "fetch()"] },
      { name: "Cat", parent: "Animal", methods: ["sound()", "scratch()"] },
      { name: "Puppy", parent: "Dog", methods: ["weep()"] }
    ] }
  },
  {
    id: "u1-polymorphism",
    unitId: 1,
    index: 5,
    title: "Polymorphism",
    tagline: "One interface, many implementations",
    oneLiner: "Polymorphism is the ability of an object to take many forms — the same interface (method call) can represent different underlying behaviors depending on the actual object type.",
    analogy: "A person behaves differently in different roles — as an employee, parent, friend. The 'you' is one person, but the behavior depends on context. That is polymorphism.",
    whyExists: "To write flexible, decoupled code that works uniformly with objects of different types through a common interface.",
    whereUsed: ["Frameworks (Spring DI)", "Design patterns (Strategy, Template, State)", "Plugin systems", "GUI event handling", "Collections"],
    visualCue: "🔄",
    code: {
      language: "java",
      code: `class Animal {
    void sound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}
class Cat extends Animal {
    @Override
    void sound() { System.out.println("Meow"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a;
        a = new Dog(); a.sound();
        a = new Cat(); a.sound();
    }
}`,
      caption: "Same call a.sound() prints different output based on actual object type."
    },
    internalWorking: {
      steps: [
        "Compiler checks the call against the static type of the reference (here, Animal).",
        "At runtime, the JVM looks up the actual object's class in the vtable.",
        "The most specific overridden method is invoked — this is dynamic dispatch.",
        "For overloading (compile-time), the compiler picks the matching method by signature, not by runtime type."
      ],
      memory: "Each class has a vtable mapping method names to actual implementations. Dynamic dispatch walks the vtable of the actual object's class."
    },
    examAnswer: {
      twoMark: "Polymorphism is the ability of an object to take many forms. In Java, it appears as compile-time polymorphism (method overloading — same name, different parameters) and runtime polymorphism (method overriding — subclass redefines parent's method via dynamic dispatch).",
      thirteenMark: {
        intro: "Polymorphism is one of the four pillars of OOP, enabling flexible and extensible designs.",
        definition: "Polymorphism allows the same interface (method call or reference type) to represent different underlying forms (behaviors). In Java, polymorphism comes in two forms: compile-time (overloading, by signature) and run-time (overriding, by dynamic dispatch).",
        explanation: "1. Compile-time (static) polymorphism — achieved through method overloading. The compiler picks the correct method based on argument types at compile time. Return type alone does not disambiguate.\n\n2. Run-time (dynamic) polymorphism — achieved through method overriding. A subclass provides a specific implementation of a method already defined in its parent. The JVM uses dynamic dispatch to call the most specific version based on the actual object type at runtime.\n\nPolymorphism enables code like: Animal a = new Dog(); a.sound(); — the same call behaves differently based on the actual object. This is the foundation of flexible, extensible design.",
        diagram: "Compile-time                 Run-time\n(overloading)               (overriding)\n   |                            |\n   v                            v\nadd(int, int)              Animal a;\nadd(double, double)        a = new Dog();   // a.sound() -> \"Bark\"\nadd(int, int, int)         a = new Cat();   // a.sound() -> \"Meow\"",
        example: "class Shape { void draw() { System.out.println(\"Drawing shape\"); } } class Circle extends Shape { @Override void draw() { System.out.println(\"Drawing circle\"); } } Shape s = new Circle(); s.draw(); // Output: Drawing circle",
        types: [
          {
            name: "Compile-time Polymorphism (Overloading)",
            definition: "Compile-time polymorphism is achieved by method overloading: multiple methods share the same name but differ in parameter list, so the compiler selects the right one based on argument types at compile time.",
            diagram: "  add(int,int)     --> resolved by compiler\n  add(double,double) --> resolved by compiler\n  add(int,int,int)   --> resolved by compiler",
            code: {
              language: "java",
              code: `class Math {
    int add(int a, int b)        { return a + b; }
    double add(double a, double b){ return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}

public class Main {
    public static void main(String[] args) {
        Math m = new Math();
        System.out.println(m.add(1, 2));
        System.out.println(m.add(1.5, 2.5));
        System.out.println(m.add(1, 2, 3));
    }
}`,
              caption: "add() is overloaded with different parameter lists."
            },
            notes: [
              "The compiler picks the method at compile time using the static types of the arguments.",
              "Return type alone does NOT distinguish overloads; the parameter list must differ.",
              "There is zero runtime cost; the binding is already fixed in the .class file."
            ],
            exampleOutput: "3\n4.0\n6"
          },
          {
            name: "Run-time Polymorphism (Overriding)",
            definition: "Run-time polymorphism is achieved by method overriding: a subclass provides a specific implementation of a method inherited from its superclass, and the JVM picks the actual object's version at runtime via dynamic dispatch.",
            diagram: "  Animal a = new Dog();\n  a.sound(); ---> Dog.sound()  (chosen at runtime)\n  a = new Cat();\n  a.sound(); ---> Cat.sound()  (chosen at runtime)",
            code: {
              language: "java",
              code: `class Animal { void sound() { System.out.println("..."); } }
class Dog  extends Animal { @Override void sound() { System.out.println("Bark"); } }
class Cat  extends Animal { @Override void sound() { System.out.println("Meow"); } }

public class Main {
    public static void main(String[] args) {
        Animal a;
        a = new Dog(); a.sound();
        a = new Cat(); a.sound();
    }
}`,
              caption: "Parent reference, child object — dynamic dispatch picks the child's version."
            },
            notes: [
              "Static binding uses the reference type; dynamic dispatch uses the actual object type.",
              "Only instance methods are dispatched dynamically; static, final, and private methods are statically bound.",
              "The @Override annotation helps the compiler verify that you are overriding rather than overloading."
            ],
            exampleOutput: "Bark\nMeow"
          }
        ],
        conclusion: "Polymorphism is the key to flexible, decoupled systems. Compile-time polymorphism is resolved by the compiler; runtime polymorphism is resolved by the JVM via dynamic dispatch. Together they make Java a powerful language for extensibility."
      },
      sixteenMark: {
        intro: "Polymorphism is a core OOP concept that lets the same interface drive different behaviors, enabling extensibility and loose coupling.",
        definition: "Polymorphism is the ability of a single interface (method name, reference type) to represent different underlying forms. In Java, polymorphism has two forms: compile-time (method overloading) and run-time (method overriding with dynamic dispatch).",
        explanation: "1. Compile-time polymorphism (overloading):\n   - Multiple methods share the same name but have different parameter lists (number, type, or order of parameters).\n   - The compiler selects the correct method at compile time based on argument types.\n   - Return type alone does NOT disambiguate; it must differ in parameters.\n   - Can occur within a class or across a parent-child class.\n\n2. Run-time polymorphism (overriding):\n   - A subclass provides a specific implementation of a method already defined in its parent.\n   - The method must have the same name, parameter list, and return type (or a covariant return).\n   - Access level cannot be more restrictive.\n   - Resolved at runtime via dynamic dispatch using the actual object type.\n   - The @Override annotation helps the compiler verify correctness.\n\n3. Polymorphic references:\n   - A reference of type Parent can hold an object of type Child.\n   - Method calls are resolved against the reference type for overloading, but against the actual object for overriding.",
        working: "Compile time: javac binds overloading by argument types.\nRun time: the JVM uses the object's vtable to find the most specific override. Each class loaded into the JVM has a vtable mapping method names to actual code. For an interface or abstract method, the JVM looks up the concrete method in the actual class's vtable.",
        diagram: "Compile-time (overloading)         Run-time (overriding)\n+-------------------+             +-------------------+\n| print(int)        |             |   Animal          |\n| print(String)     |             |   sound()         |\n| print(double)     |             +-------------------+\n+-------------------+                       ^\n   Selected at compile time             +-----+-----+\n                                        |           |\n                                      Dog         Cat\n                                   sound()=B   sound()=M\n                                        |           |\n                                Selected at run time",
        example: "class Bank { double rate() { return 5.0; } }\nclass SBI extends Bank { @Override double rate() { return 6.5; } }\nclass HDFC extends Bank { @Override double rate() { return 7.0; } }\n\npublic static void main(String[] args) {\n    Bank b;\n    b = new SBI();   System.out.println(\"SBI rate: \" + b.rate() + \"%\");\n    b = new HDFC();  System.out.println(\"HDFC rate: \" + b.rate() + \"%\");\n}",
        output: "SBI rate: 6.5%\nHDFC rate: 7.0%",
        types: [
          {
            name: "Compile-time Polymorphism (Overloading)",
            definition: "Compile-time polymorphism is achieved by method overloading: multiple methods share the same name but differ in parameter list, so the compiler selects the right one based on argument types at compile time.",
            diagram: "  add(int,int)     --> resolved by compiler\n  add(double,double) --> resolved by compiler\n  add(int,int,int)   --> resolved by compiler",
            code: {
              language: "java",
              code: `class Math {
    int add(int a, int b)         { return a + b; }
    double add(double a, double b){ return a + b; }
    int add(int a, int b, int c)  { return a + b + c; }
}

public class Main {
    public static void main(String[] args) {
        Math m = new Math();
        System.out.println(m.add(1, 2));
        System.out.println(m.add(1.5, 2.5));
        System.out.println(m.add(1, 2, 3));
    }
}`,
              caption: "add() is overloaded with different parameter lists."
            },
            notes: [
              "The compiler picks the method at compile time using the static types of the arguments.",
              "Return type alone does NOT distinguish overloads; the parameter list must differ.",
              "There is zero runtime cost; the binding is already fixed in the .class file."
            ],
            exampleOutput: "3\n4.0\n6"
          },
          {
            name: "Run-time Polymorphism (Overriding)",
            definition: "Run-time polymorphism is achieved by method overriding: a subclass provides a specific implementation of a method inherited from its superclass, and the JVM picks the actual object's version at runtime via dynamic dispatch.",
            diagram: "  Animal a = new Dog();\n  a.sound(); ---> Dog.sound()  (chosen at runtime)\n  a = new Cat();\n  a.sound(); ---> Cat.sound()  (chosen at runtime)",
            code: {
              language: "java",
              code: `class Animal { void sound() { System.out.println("..."); } }
class Dog  extends Animal { @Override void sound() { System.out.println("Bark"); } }
class Cat  extends Animal { @Override void sound() { System.out.println("Meow"); } }

public class Main {
    public static void main(String[] args) {
        Animal a;
        a = new Dog(); a.sound();
        a = new Cat(); a.sound();
    }
}`,
              caption: "Parent reference, child object — dynamic dispatch picks the child's version."
            },
            notes: [
              "Static binding uses the reference type; dynamic dispatch uses the actual object type.",
              "Only instance methods are dispatched dynamically; static, final, and private methods are statically bound.",
              "The @Override annotation helps the compiler verify that you are overriding rather than overloading."
            ],
            exampleOutput: "Bark\nMeow"
          }
        ],
        advantages: [
          "Single interface for multiple types",
          "Easy to extend — add new subclasses without changing existing code",
          "Supports loose coupling between components",
          "Enables dynamic method dispatch",
          "Foundation of many design patterns (Strategy, State, Template)"
        ],
        applications: [
          "Plugin architectures",
          "GUI frameworks (component hierarchies)",
          "Strategy and Template Method patterns",
          "Collections and generic algorithms",
          "Hibernate and JPA (polymorphic queries)"
        ],
        conclusion: "Polymorphism is the most powerful of the OOP pillars for writing extensible code. Compile-time polymorphism (overloading) is convenient; runtime polymorphism (overriding) is what enables truly flexible, decoupled systems in Java."
      }
    },
    viva: [
      { q: "What is polymorphism?", a: "The ability of a single interface to represent different underlying forms. In Java: overloading (compile-time) and overriding (run-time)." },
      { q: "Difference between compile-time and run-time polymorphism?", a: "Compile-time = method overloading (resolved by compiler). Run-time = method overriding (resolved by JVM via dynamic dispatch)." },
      { q: "Can return type alone differentiate overloaded methods?", a: "No. Overloaded methods must differ in parameter list." },
      { q: "What is dynamic dispatch?", a: "The mechanism by which the JVM selects the actual method to invoke at runtime based on the object's class, not the reference type." },
      { q: "What is the role of the @Override annotation?", a: "It is a compile-time check that the method actually overrides a method from a superclass or interface." }
    ],
    quiz: {
      mcqs: [
        { question: "Method overloading is an example of:", options: ["Run-time polymorphism", "Compile-time polymorphism", "Encapsulation", "Inheritance"], answer: 1, explanation: "Overloading is resolved at compile time." },
        { question: "Method overriding is resolved at:", options: ["Compile time", "Run time", "Link time", "Loading time"], answer: 1, explanation: "The JVM uses dynamic dispatch." },
        { question: "Which can differ in two overloaded methods?", options: ["Return type only", "Parameter list", "Access modifier only", "Method name"], answer: 1, explanation: "Parameter list (number, type, order) must differ." },
        { question: "Animal a = new Dog(); a.sound() — which sound() runs?", options: ["Animal's", "Dog's", "Compile error", "Both"], answer: 1, explanation: "JVM calls the actual object's overridden method." }
      ],
      trueFalse: [
        { statement: "Overloading is resolved at runtime.", answer: false, explanation: "Overloading is resolved at compile time by argument types." },
        { statement: "Overriding requires the same method signature.", answer: true, explanation: "Name + parameter list must match (return type can be covariant)." }
      ]
    },
    revision: {
      oneMin: "Polymorphism = overloading (compile) + overriding (runtime).",
      fiveMin: [
        "Overloading: same name, different params",
        "Overriding: same signature in subclass",
        "Reference type vs actual type",
        "Dynamic dispatch via vtable",
        "Use @Override for safety"
      ],
      examDay: [
        "Define polymorphism in 1-2 lines",
        "Differentiate overloading vs overriding",
        "Give a runtime polymorphism example",
        "Mention dynamic dispatch"
      ],
      memoryTrick: "Overloading = One name, MANY signatures (compile). Overriding = One signature, MANY implementations (runtime).",
      faq: [
        { q: "Can a static method be overridden?", a: "No. Static methods are hidden, not overridden." },
        { q: "Can a constructor be overridden?", a: "No. Constructors are not inherited and cannot be overridden." }
      ]
    },
    simulator: { type: "dynamic-dispatch", classes: [
      { name: "Animal", methods: [{ name: "sound", impl: "Some sound" }] },
      { name: "Dog", methods: [{ name: "sound", impl: "Bark" }] },
      { name: "Cat", methods: [{ name: "sound", impl: "Meow" }] }
    ] }
  },
  {
    id: "u1-class-object",
    unitId: 1,
    index: 6,
    title: "Classes and Objects",
    tagline: "Blueprints and instances",
    oneLiner: "A class is a blueprint that defines the data and behavior of a type; an object is a runtime instance of a class, created with the new keyword, occupying memory in the heap.",
    analogy: "A class is an architectural plan for a house. An object is the actual house built from that plan. You can build many houses (objects) from the same plan (class).",
    whyExists: "To model real-world entities as data structures with associated behavior, enabling modular and reusable code.",
    whereUsed: ["Every Java program", "Domain modeling", "GUI components", "Collections of items", "Data transfer"],
    visualCue: "📦",
    code: {
      language: "java",
      code: `class Student {
    String name;
    int rollNo;

    Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    void introduce() {
        System.out.println(\"Hi, I am \" + name + \" (Roll \" + rollNo + \")\");\n    }
}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s1 = new Student(\"Alice\", 101);\n        Student s2 = new Student(\"Bob\", 102);\n        s1.introduce();\n        s2.introduce();\n    }\n}`,
      caption: "A Student class with two distinct objects s1 and s2."
    },
    internalWorking: {
      steps: [
        "The .class file is loaded by the ClassLoader when first referenced.",
        "'new Student(...)' triggers a multi-step process: memory allocation, default initialization, constructor call, and reference return.",
        "Each object gets its own copy of instance fields on the heap.",
        "Methods are stored once in the method area; each call uses a new stack frame.",
        "The 'this' keyword inside a method refers to the current object — the receiver of the method call."
      ],
      memory: "Class metadata (method code, static fields) lives in the method area. Each object lives in the heap with its own instance fields. The reference variable (s1, s2) lives on the stack."
    },
    examAnswer: {
      twoMark: "A class is a user-defined blueprint that defines the fields and methods its objects will have. An object is a runtime instance of a class, created with the 'new' keyword, with its own copy of instance fields stored on the heap.",
      thirteenMark: {
        intro: "Classes and objects are the basic units of OOP in Java. Every Java program is built from one or more classes, and execution happens through their objects.",
        definition: "A class is a template that declares the fields (state) and methods (behavior) its instances will have. An object is a concrete instance of a class, created with 'new', occupying memory in the heap and accessed via a reference variable.",
        explanation: "Key points about classes and objects:\n1. Class declaration: contains fields, methods, constructors, and possibly nested classes.\n2. Object creation: 'new ClassName(args)' allocates memory, calls a constructor, and returns a reference.\n3. Reference variables: hold the address of an object, not the object itself. Stored on the stack.\n4. Anonymous objects: 'new Student(...)' used immediately without assigning to a variable.\n5. The 'this' keyword: refers to the current object inside instance methods/constructors.\n6. Memory: class metadata goes to the method area; each object goes to the heap.\n7. Multiple references can point to the same object; modifying it via one reference is visible to all.\n8. Garbage collection reclaims objects when no live references remain.",
        diagram: "      Class: Student              Heap\n     +----------------+      +-------------------+\n     | name : String  |      | s1 -> name=Alice  |\n     | rollNo : int   |      |      rollNo=101   |\n     | introduce()    |      +-------------------+\n     +----------------+      +-------------------+\n                             | s2 -> name=Bob    |\n     s1 = new Student(...)   |      rollNo=102   |\n     s2 = new Student(...)   +-------------------+\n                             (two distinct objects)",
        example: "class Box { int length, width; Box(int l, int w) { length = l; width = w; } int area() { return length * width; } } Box b1 = new Box(5, 3); Box b2 = new Box(7, 2); System.out.println(b1.area()); // 15",
        types: [
          {
            name: "Class Members (static)",
            definition: "Class members are declared with the static modifier and belong to the class itself, not to any particular object; there is exactly one copy per class, regardless of how many objects are created.",
            diagram: "  static int count;  -->  one per class\n  static void inc()  -->  one per class\n  shared by all objects",
            code: {
              language: "java",
              code: `class Counter {
    static int count;

    Counter() { count++; }

    static void show() { System.out.println("count=" + count); }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        Counter.show();
    }
}`,
              caption: "count is shared by all Counter objects."
            },
            notes: [
              "Static members are accessed via ClassName.member, not via an object reference.",
              "They are loaded into the method area when the class is initialized, before any object is created.",
              "Static methods cannot use 'this' or 'super' and can only call other static members directly."
            ],
            exampleOutput: "count=3"
          },
          {
            name: "Instance Members",
            definition: "Instance members are declared without the static modifier and belong to individual objects; every object has its own copy of every instance field.",
            diagram: "  int value;   --> one per object\n  void set()   --> one per object\n  each object has its own state",
            code: {
              language: "java",
              code: `class Box {
    int size;

    Box(int s) { this.size = s; }
}

public class Main {
    public static void main(String[] args) {
        Box a = new Box(10);
        Box b = new Box(20);
        System.out.println(a.size);
        System.out.println(b.size);
    }
}`,
              caption: "Each Box has its own size value."
            },
            notes: [
              "Instance fields are initialized to default values (0, false, null) before any constructor runs.",
              "Instance methods implicitly receive 'this' — the object on which the method was called.",
              "Two instances of the same class are independent: changing one does not affect the other."
            ],
            exampleOutput: "10\n20"
          }
        ],
        conclusion: "Classes are blueprints; objects are the concrete things built from them. Java programs create objects dynamically, call methods on them, and the JVM manages their lifetime in the heap."
      },
      sixteenMark: {
        intro: "Classes and objects are the foundational building blocks of Java. A class is a template; an object is a runtime instance that occupies heap memory and is manipulated via references.",
        definition: "A class is a user-defined type that declares fields (attributes) and methods (functions). An object is a runtime instance of a class, created with the 'new' keyword, with its own state stored on the heap. Multiple objects of the same class are independent of each other.",
        explanation: "Anatomy of a class:\n- Fields (instance variables) — each object gets its own copy.\n- Methods — shared across all instances; executed via a stack frame.\n- Constructors — initialize new objects.\n- Static members — belong to the class, not objects.\n- Access modifiers — control visibility.\n\nAnatomy of an object:\n- Identity — the memory address (hidden from Java code).\n- State — current values of its fields.\n- Behavior — the methods it can respond to.\n\nObject creation steps:\n1. Class loading (if not already loaded).\n2. Memory allocation on the heap.\n3. Default initialization of fields (0, false, null).\n4. Constructor execution (with 'this' bound to the new object).\n5. Reference returned to the caller.\n\n'this' reference — points to the current object; resolves field shadowing, passes the current object, or invokes another constructor (this()).",
        working: "1. Class metadata (fields, method bytecode) is loaded into the method area on first use.\n2. 'new ClassName(args)' allocates heap memory, defaults fields, runs the constructor, and returns a reference.\n3. The reference is stored in a local variable (on the stack) or in another object.\n4. Method calls push a new stack frame; 'this' is the receiver.\n5. When no references remain, the object becomes eligible for garbage collection.",
        diagram: "+---------------------------+\n|  Stack                   |\n|  +---------------------+ |\n|  | s1 (ref)            | |\n|  | s2 (ref)            | |\n|  +---------------------+ |\n+-------------|-----------+\n              v\n+---------------------------+\n|  Heap                     |\n|  +-----------+ +---------+|\n|  | Object s1 | | Object s2||\n|  | name=A   | | name=B   ||\n|  | roll=101 | | roll=102 ||\n|  +-----------+ +---------+|\n+---------------------------+\n              ^\n              |\n+---------------------------+\n|  Method Area              |\n|  Class: Student           |\n|  - field signatures       |\n|  - method bytecode        |\n+---------------------------+",
        example: "class Point {\n    int x, y;\n    Point(int x, int y) {\n        this.x = x;     // 'this.x' refers to the field, x refers to the parameter\n        this.y = y;\n    }\n    void print() {\n        System.out.println(\"(\" + x + \", \" + y + \")\");\n    }\n}\nPoint p = new Point(3, 4);\np.print();",
        output: "(3, 4)",
        types: [
          {
            name: "Class Members (static)",
            definition: "Class members are declared with the static modifier and belong to the class itself, not to any particular object; there is exactly one copy per class, regardless of how many objects are created.",
            diagram: "  static int count;  -->  one per class\n  static void inc()  -->  one per class\n  shared by all objects",
            code: {
              language: "java",
              code: `class Counter {
    static int count;

    Counter() { count++; }

    static void show() { System.out.println("count=" + count); }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        Counter.show();
    }
}`,
              caption: "count is shared by all Counter objects."
            },
            notes: [
              "Static members are accessed via ClassName.member, not via an object reference.",
              "They are loaded into the method area when the class is initialized, before any object is created.",
              "Static methods cannot use 'this' or 'super' and can only call other static members directly."
            ],
            exampleOutput: "count=3"
          },
          {
            name: "Instance Members",
            definition: "Instance members are declared without the static modifier and belong to individual objects; every object has its own copy of every instance field.",
            diagram: "  int value;   --> one per object\n  void set()   --> one per object\n  each object has its own state",
            code: {
              language: "java",
              code: `class Box {
    int size;

    Box(int s) { this.size = s; }
}

public class Main {
    public static void main(String[] args) {
        Box a = new Box(10);
        Box b = new Box(20);
        System.out.println(a.size);
        System.out.println(b.size);
    }
}`,
              caption: "Each Box has its own size value."
            },
            notes: [
              "Instance fields are initialized to default values (0, false, null) before any constructor runs.",
              "Instance methods implicitly receive 'this' — the object on which the method was called.",
              "Two instances of the same class are independent: changing one does not affect the other."
            ],
            exampleOutput: "10\n20"
          },
          {
            name: "Local Variables",
            definition: "Local variables are declared inside a method, constructor, or block; they live on the stack for the duration of the call and have no default value, so they must be definitely assigned before use.",
            diagram: "  void m() {\n      int x = 5;  <-- local, on stack\n      System.out.println(x);\n  }",
            code: {
              language: "java",
              code: `class Demo {
    void show() {
        int x = 10;
        if (x > 0) {
            int y = 20;
            System.out.println(x + y);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        new Demo().show();
    }
}`,
              caption: "x and y are local variables inside methods/blocks."
            },
            notes: [
              "Local variables are stored in the stack frame of the current method call.",
              "They have no default value; reading an uninitialized local is a compile-time error.",
              "Block-scoped: a variable declared inside { } is visible only up to the closing brace."
            ],
            exampleOutput: "30"
          },
          {
            name: "Block Types",
            definition: "Java has several kinds of blocks: instance initializer blocks, static initializer blocks, and plain code blocks inside methods; each runs at a well-defined moment in the object or class lifecycle.",
            diagram: "  class C {\n      static { ... }   <-- once, on class load\n      { ... }          <-- per object, before ctor body\n      C() { ... }      <-- ctor body\n  }",
            code: {
              language: "java",
              code: `class Trace {
    static { System.out.println("static block"); }

    { System.out.println("instance block"); }

    Trace() { System.out.println("constructor"); }
}

public class Main {
    public static void main(String[] args) {
        new Trace();
    }
}`,
              caption: "Static block runs once, instance block and constructor run per object."
            },
            notes: [
              "Static blocks run once when the class is initialized, in the order they appear.",
              "Instance initializer blocks run on every object creation, before the constructor body.",
              "Plain code blocks in methods are simply used to scope local variables."
            ],
            exampleOutput: "static block\ninstance block\nconstructor"
          }
        ],
        advantages: [
          "Classes provide reusability — one class, many objects",
          "Objects model real-world entities naturally",
          "Encapsulation of state and behavior",
          "Easy to maintain and extend",
          "Support for polymorphism and dynamic dispatch"
        ],
        applications: [
          "Every Java program uses classes and objects",
          "Domain modeling (User, Order, Product, etc.)",
          "Data structures (List, Map, Set)",
          "GUI components (Button, Window, Panel)",
          "Service layer and DTOs in enterprise apps"
        ],
        conclusion: "Classes and objects are the heart of Java. A class defines the structure; objects are the runtime entities that hold state and respond to messages. Mastering class design and object lifecycle is the first step toward writing effective Java programs."
      }
    },
    viva: [
      { q: "What is a class?", a: "A blueprint or template that defines the fields and methods its instances will have." },
      { q: "What is an object?", a: "A runtime instance of a class, created with 'new', occupying memory in the heap." },
      { q: "Where is an object stored?", a: "On the heap. The reference variable is stored on the stack." },
      { q: "What is the 'this' keyword?", a: "A reference to the current object — the receiver of the method call." },
      { q: "Can two references point to the same object?", a: "Yes. Both references access the same heap object; changes are visible through both." },
      { q: "What is the default value of an uninitialized int field?", a: "0. For object references it's null; for boolean it's false." }
    ],
    quiz: {
      mcqs: [
        { question: "An object is created using which keyword?", options: ["class", "new", "this", "object"], answer: 1, explanation: "The 'new' keyword creates an object." },
        { question: "Where are objects stored in memory?", options: ["Stack", "Heap", "Method area", "Cache"], answer: 1, explanation: "Objects are allocated on the heap." },
        { question: "The 'this' keyword refers to:", options: ["The current class", "The current object", "The parent class", "The main method"], answer: 1, explanation: "'this' refers to the current object." },
        { question: "How many objects does 'new Student(); new Student();' create?", options: ["0", "1", "2", "Depends"], answer: 2, explanation: "Two separate objects are allocated on the heap." }
      ],
      trueFalse: [
        { statement: "A class can exist without any objects.", answer: true, explanation: "A class can be used as a namespace for static members without instantiation." },
        { statement: "Two objects of the same class share their instance fields.", answer: false, explanation: "Each object has its own copy of instance fields." }
      ]
    },
    revision: {
      oneMin: "Class = blueprint. Object = instance on the heap. new creates it; this refers to it.",
      fiveMin: [
        "Class has fields + methods",
        "Object is created with new",
        "Memory: heap (object), stack (reference)",
        "this = current object",
        "Each object has its own fields"
      ],
      examDay: [
        "Define class and object",
        "Draw a class diagram with fields/methods",
        "Show 'new' usage",
        "Mention heap vs stack"
      ],
      memoryTrick: "Class = Cookie cutter. Object = Cookie.",
      faq: [
        { q: "Can we create an object without 'new'?", a: "Yes, using reflection (Class.newInstance()), clone(), or deserialization." },
        { q: "What is an anonymous object?", a: "An object created with 'new' and used immediately, not assigned to any reference." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-constructors",
    unitId: 1,
    index: 7,
    title: "Constructors",
    tagline: "Special methods that initialize objects",
    oneLiner: "A constructor is a special method with the same name as the class and no return type, automatically invoked when an object is created with the 'new' keyword, used to initialize the object's state.",
    analogy: "Think of a constructor as the check-in form at a hotel — it captures your name, ID, room preference, and sets you up in a valid initial state before you use the room.",
    whyExists: "To ensure every object is created in a valid, initialized state and to encapsulate the initialization logic.",
    whereUsed: ["Every Java class", "Frameworks (Spring, JPA, Jackson)", "POJOs and DTOs", "Singleton pattern", "Builder pattern"],
    visualCue: "🏗️",
    code: {
      language: "java",
      code: `class Student {
    String name;
    int age;

    Student() {
        this("Unknown", 0);
    }

    Student(String name, int age) {
        this.name = name;
        if (age > 0) this.age = age;
    }

    Student(Student other) {
        this.name = other.name;
        this.age = other.age;
    }

    void display() {
        System.out.println(name + " (" + age + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        Student s2 = new Student("Alice", 20);
        Student s3 = new Student(s2);
        s1.display(); s2.display(); s3.display();
    }
}`,
      caption: "Default, parameterized, and copy constructors with chaining via this()."
    },
    internalWorking: {
      steps: [
        "When 'new Student(...)' is encountered, the JVM ensures the class is loaded.",
        "Memory is allocated on the heap for the object.",
        "Instance fields are initialized to default values (0, false, null).",
        "The matching constructor is invoked (bound at compile time by signature).",
        "If the constructor uses this(...) or super(...), that call happens first.",
        "The 'this' reference is bound to the new object throughout the constructor.",
        "A reference to the constructed object is returned to the caller."
      ],
      memory: "Constructors themselves are stored in the method area; they use the stack for parameters and 'this' for accessing the heap object they initialize."
    },
    examAnswer: {
      twoMark: "A constructor in Java is a special member used to initialize objects. It has the same name as the class, no return type, and is automatically invoked when an object is created with 'new'. If no constructor is defined, the compiler provides a default no-arg constructor.",
      thirteenMark: {
        intro: "Constructors are fundamental to object creation in Java. They guarantee that every new object starts in a valid state.",
        definition: "A constructor is a special method invoked automatically when an object of a class is created. It has the same name as the class, no return type (not even void), and is used to initialize the object's state.",
        explanation: "Types of constructors in Java:\n1. Default constructor — no-arg, provided automatically by the compiler if no constructor is defined.\n2. Parameterized constructor — accepts arguments to set initial values.\n3. Copy constructor — not built-in but commonly written by accepting an object of the same type and copying its fields.\n4. Private constructor — restricts instantiation; used in singleton pattern and utility classes.\n5. Constructor chaining — this() calls another constructor in the same class; super() calls the parent constructor.\n\nRules: the first statement of a constructor is either this() or super() (explicit or implicit). Constructors are not inherited, but a subclass constructor implicitly calls super() if no explicit super(...) is provided.",
        diagram: "Student s = new Student(\"John\", 20);\n          |\n          +--> Constructor Student(String, int) is invoked\n                  |\n                  +--> super() (Object) called implicitly\n                  +--> Initializes name and age\n                  +--> Returns reference to s",
        example: "class Box { int l, b; Box() { l = 0; b = 0; } Box(int x, int y) { l = x; b = y; } Box(Box o) { l = o.l; b = o.b; } } // Default, parameterized, and copy constructors.",
        types: [
          {
            name: "Default Constructor",
            definition: "A default constructor is a no-argument constructor the compiler provides automatically only when a class defines no constructor at all.",
            diagram: "  class Box { }\n  Box b = new Box();   <-- default ctor synthesized",
            code: {
              language: "java",
              code: `class Box {
    int x;
}

public class Main {
    public static void main(String[] args) {
        Box b = new Box();
        System.out.println(b.x);
    }
}`,
              caption: "Compiler provides the no-arg constructor automatically."
            },
            notes: [
              "The default constructor has no parameters and simply calls super().",
              "It is added only when the class has no other constructor; defining any constructor removes it.",
              "Fields are initialized to their default values (0, false, null) before the constructor body runs."
            ],
            exampleOutput: "0"
          },
          {
            name: "Parameterized Constructor",
            definition: "A parameterized constructor accepts arguments so that the caller can supply initial values for the new object's fields at creation time.",
            diagram: "  Box(int l, int w)  --> ctor with parameters\n  Box b = new Box(5, 3);  <-- values passed in",
            code: {
              language: "java",
              code: `class Box {
    int l, w;

    Box(int l, int w) {
        this.l = l;
        this.w = w;
    }
}

public class Main {
    public static void main(String[] args) {
        Box b = new Box(5, 3);
        System.out.println(b.l * b.w);
    }
}`,
              caption: "Parameterized ctor initializes l and w from arguments."
            },
            notes: [
              "Parameters can be any number or type, allowing flexible object creation.",
              "Using 'this.field' disambiguates shadowing when parameter names match field names.",
              "A class can declare many parameterized constructors; the compiler picks the one matching the arguments."
            ],
            exampleOutput: "15"
          },
          {
            name: "Copy Constructor",
            definition: "A copy constructor takes another object of the same class and copies its field values into the new object, producing a field-by-field clone.",
            diagram: "  Box(Box other)  --> copies other.l, other.w\n  Box b2 = new Box(b1);",
            code: {
              language: "java",
              code: `class Box {
    int l, w;

    Box(int l, int w) {
        this.l = l;
        this.w = w;
    }

    Box(Box other) {
        this.l = other.l;
        this.w = other.w;
    }
}

public class Main {
    public static void main(String[] args) {
        Box a = new Box(2, 3);
        Box b = new Box(a);
        System.out.println(b.l + "," + b.w);
    }
}`,
              caption: "Box(Box) copies fields from another Box."
            },
            notes: [
              "Java does not auto-generate a copy constructor; you must write it yourself.",
              "The result is a shallow copy: object fields are shared, not deep-cloned.",
              "Useful when you want a new object with the same starting state as an existing one."
            ],
            exampleOutput: "2,3"
          }
        ],
        conclusion: "Constructors ensure objects are always initialized in a valid state, support encapsulation of initialization logic, and enable flexible object creation through overloading and chaining."
      },
      sixteenMark: {
        intro: "Constructors are special members of a class that play a central role in object creation and initialization in Java.",
        definition: "A constructor is a special method with the same name as the class, no return type, automatically invoked when an object is created. Its primary purpose is to initialize the new object's state.",
        explanation: "Java supports several kinds of constructors:\n- Default (no-arg) constructor: provided automatically by the compiler if no constructor is defined. Disappears as soon as you write any constructor.\n- Parameterized constructor: accepts arguments to set initial values.\n- Copy constructor: a constructor that takes an object of the same class and copies its fields. Java does not provide one automatically; you write it yourself.\n- Private constructor: prevents external instantiation. Used in singleton, utility, and factory classes.\n\nConstructor chaining:\n- this(args) calls another constructor in the same class.\n- super(args) calls a constructor in the parent class.\n- The first statement of a constructor is either this(...) or super(...), even if not written explicitly.\n- If omitted, the compiler inserts super() (no-arg call to parent).\n\nConstructors are NOT inherited. They cannot be overridden, but they can be overloaded.",
        working: "1. 'new MyClass(args)' triggers class loading (if not already loaded).\n2. Memory is allocated on the heap for the new object.\n3. Instance fields are set to default values (0, false, null).\n4. The matching constructor (selected by argument types at compile time) executes.\n5. The constructor's 'this' refers to the new object.\n6. A reference to the constructed object is returned to the caller.",
        diagram: "ClassLoader loads class\n            |\n         new MyClass()\n            |\n    Heap: allocate object\n            |\n    Initialize fields to defaults\n            |\n    Invoke constructor body\n            |\n    Return reference",
        example: "class Employee {\n    String name;\n    double salary;\n\n    Employee() { this(\"Unknown\", 0); }   // chains to parameterized\n\n    Employee(String n, double s) {\n        name = n;\n        salary = s;\n    }\n}",
        output: "Constructors can be chained via this() and super() to avoid duplication.",
        types: [
          {
            name: "Default Constructor",
            definition: "A default constructor is a no-argument constructor the compiler provides automatically only when a class defines no constructor at all.",
            diagram: "  class Box { }\n  Box b = new Box();   <-- default ctor synthesized",
            code: {
              language: "java",
              code: `class Box {
    int x;
}

public class Main {
    public static void main(String[] args) {
        Box b = new Box();
        System.out.println(b.x);
    }
}`,
              caption: "Compiler provides the no-arg constructor automatically."
            },
            notes: [
              "The default constructor has no parameters and simply calls super().",
              "It is added only when the class has no other constructor; defining any constructor removes it.",
              "Fields are initialized to their default values (0, false, null) before the constructor body runs."
            ],
            exampleOutput: "0"
          },
          {
            name: "Parameterized Constructor",
            definition: "A parameterized constructor accepts arguments so that the caller can supply initial values for the new object's fields at creation time.",
            diagram: "  Box(int l, int w)  --> ctor with parameters\n  Box b = new Box(5, 3);  <-- values passed in",
            code: {
              language: "java",
              code: `class Box {
    int l, w;

    Box(int l, int w) {
        this.l = l;
        this.w = w;
    }
}

public class Main {
    public static void main(String[] args) {
        Box b = new Box(5, 3);
        System.out.println(b.l * b.w);
    }
}`,
              caption: "Parameterized ctor initializes l and w from arguments."
            },
            notes: [
              "Parameters can be any number or type, allowing flexible object creation.",
              "Using 'this.field' disambiguates shadowing when parameter names match field names.",
              "A class can declare many parameterized constructors; the compiler picks the one matching the arguments."
            ],
            exampleOutput: "15"
          },
          {
            name: "Copy Constructor",
            definition: "A copy constructor takes another object of the same class and copies its field values into the new object, producing a field-by-field clone.",
            diagram: "  Box(Box other)  --> copies other.l, other.w\n  Box b2 = new Box(b1);",
            code: {
              language: "java",
              code: `class Box {
    int l, w;

    Box(int l, int w) {
        this.l = l;
        this.w = w;
    }

    Box(Box other) {
        this.l = other.l;
        this.w = other.w;
    }
}

public class Main {
    public static void main(String[] args) {
        Box a = new Box(2, 3);
        Box b = new Box(a);
        System.out.println(b.l + "," + b.w);
    }
}`,
              caption: "Box(Box) copies fields from another Box."
            },
            notes: [
              "Java does not auto-generate a copy constructor; you must write it yourself.",
              "The result is a shallow copy: object fields are shared, not deep-cloned.",
              "Useful when you want a new object with the same starting state as an existing one."
            ],
            exampleOutput: "2,3"
          },
          {
            name: "Private Constructor",
            definition: "A private constructor has private access and blocks external instantiation; it is the standard way to implement singletons and static-only utility classes.",
            diagram: "  class Util {\n      private Util() {}   <-- no one can 'new Util()'\n      static int add(...){...}\n  }",
            code: {
              language: "java",
              code: `class Singleton {
    private static final Singleton I = new Singleton();

    private Singleton() {}

    static Singleton get() { return I; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Singleton.get() == Singleton.get());
    }
}`,
              caption: "Private ctor + static field enforces a single instance."
            },
            notes: [
              "A private constructor prevents 'new' from outside the class, so the class controls how it is created.",
              "Used in the Singleton pattern to guarantee exactly one instance in the JVM.",
              "Utility classes such as java.util.Collections also use a private constructor to prevent instantiation."
            ],
            exampleOutput: "true"
          },
          {
            name: "Constructor Chaining (this() / super())",
            definition: "Constructor chaining lets one constructor call another in the same class via this(...) or a parent constructor via super(...), avoiding duplicated initialization code.",
            diagram: "  Student()          --> this(\"Unknown\", 0)\n  Student(String, int) --> super(); set fields\n  A subclass ctor     --> super() to its parent",
            code: {
              language: "java",
              code: `class Person {
    String name;
    Person() { this("Anonymous"); }
    Person(String n) { this.name = n; }
}

class Student extends Person {
    int roll;
    Student() { super(); this.roll = 0; }
    Student(String n, int r) { super(n); this.roll = r; }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student("Alice", 101);
        System.out.println(s.name + " " + s.roll);
    }
}`,
              caption: "this() chains within Student; super() chains up to Person."
            },
            notes: [
              "this() and super() must be the first statement of a constructor; they cannot both appear.",
              "If neither is written, the compiler inserts a call to super() (the parent's no-arg ctor).",
              "Chaining keeps each constructor focused on one specific set of initial values."
            ],
            exampleOutput: "Alice 101"
          }
        ],
        advantages: [
          "Guarantees objects are created in a valid state",
          "Encapsulates initialization logic",
          "Supports constructor overloading for flexibility",
          "Enables inheritance-based super() chaining",
          "Allows immutability when all fields are set in the constructor"
        ],
        applications: [
          "Initializing object fields with validation",
          "Implementing factory and builder patterns",
          "Dependency injection in frameworks (Spring)",
          "Singletons via private constructor",
          "Immutable classes (all fields final, set in constructor)"
        ],
        conclusion: "Constructors are a cornerstone of Java OOP. Mastering default, parameterized, copy, and chained constructors is essential for robust class design and is widely used in real-world frameworks and patterns."
      }
    },
    viva: [
      { q: "What is a constructor?", a: "A special method that initializes an object; same name as class, no return type." },
      { q: "What happens if you don't write a constructor?", a: "The compiler provides a default no-arg constructor (but only if no other constructor is defined)." },
      { q: "Can a constructor be private?", a: "Yes. Used in singleton patterns and utility classes to prevent external instantiation." },
      { q: "What is constructor chaining?", a: "Calling one constructor from another using this() (same class) or super() (parent class)." },
      { q: "Are constructors inherited?", a: "No. But a subclass constructor can call the parent's via super()." },
      { q: "Can a constructor call another constructor explicitly?", a: "Yes, using this(...) as the first statement." }
    ],
    quiz: {
      mcqs: [
        { question: "A constructor has:", options: ["A return type", "No return type", "void return", "int return"], answer: 1, explanation: "Constructors have no return type — not even void." },
        { question: "What is the name of a constructor?", options: ["init", "create", "Same as class", "main"], answer: 2, explanation: "Same as the class name." },
        { question: "Which keyword is used to call a parent constructor?", options: ["this", "super", "parent", "base"], answer: 1, explanation: "super() calls the parent constructor." },
        { question: "Can a constructor be overloaded?", options: ["Yes", "No", "Only with default", "Only with private"], answer: 0, explanation: "Multiple constructors with different parameter lists can coexist." }
      ],
      trueFalse: [
        { statement: "Constructors are inherited.", answer: false, explanation: "Constructors are not inherited." },
        { statement: "A class can have multiple constructors.", answer: true, explanation: "Yes, via overloading." }
      ]
    },
    revision: {
      oneMin: "Constructor = same name as class, no return type, called by new.",
      fiveMin: [
        "Default vs parameterized",
        "this() for chaining in same class",
        "super() for parent constructor",
        "Private constructor for singleton",
        "Compiler provides default if none defined"
      ],
      examDay: [
        "Define constructor in 1 line",
        "List types: default, parameterized, copy, private",
        "Show constructor chaining with this() and super()",
        "Give a real-life analogy (hotel check-in)"
      ],
      memoryTrick: "Constructor = Class name + no return type + called by new.",
      faq: [
        { q: "Can a constructor call another constructor?", a: "Yes, using this() as the first statement." },
        { q: "What is a copy constructor?", a: "A constructor that takes an object of the same class and copies its fields. Java does not provide one automatically." }
      ]
    },
    simulator: { type: "constructor-overloading", options: [
      { name: "Student()", params: [] },
      { name: "Student(String name)", params: ["String"] },
      { name: "Student(String name, int age)", params: ["String", "int"] },
      { name: "Student(Student other)", params: ["Student"] }
    ] }
  },
  {
    id: "u1-keywords-static-final",
    unitId: 1,
    index: 8,
    title: "static and final Keywords",
    tagline: "Class-level members and constants",
    oneLiner: "static makes a member belong to the class (shared by all instances); final makes a variable a constant, a method non-overridable, or a class non-extendable.",
    analogy: "static is the school name — same for every student, accessed via the school. final is a permanent record — once written, it cannot be changed.",
    whyExists: "static enables class-level data and behavior (no instance needed). final enforces immutability and prevents unwanted modification, extension, or overriding.",
    whereUsed: ["Constants (Math.PI)", "Utility/helper classes", "Counters and IDs", "Singleton pattern", "Immutable classes (String)"],
    visualCue: "🔑",
    code: {
      language: "java",
      code: `class MathUtils {
    public static final double PI = 3.14159;
    public static int counter = 0;

    public static int square(int x) {
        return x * x;
    }

    MathUtils() { counter++; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println("PI = " + MathUtils.PI);
        System.out.println("Square of 5 = " + MathUtils.square(5));
        new MathUtils();
        new MathUtils();
        System.out.println("Objects created: " + MathUtils.counter);
    }
}`,
      caption: "static final constant, static method, and static counter."
    },
    internalWorking: {
      steps: [
        "Static fields are stored in the method area (metaspace since Java 8).",
        "Static fields are initialized when the class is loaded.",
        "Static methods are bound at compile time (no 'this' parameter).",
        "Static methods can be called via ClassName.method() without an instance.",
        "Static blocks run once at class loading, in the order they appear.",
        "Final variables (primitives) hold a constant value; final references cannot be reassigned but the object they point to can be mutated unless it is also immutable."
      ],
      memory: "Method area: static fields + method bytecode. Heap: per-object instance fields. final references live in the method area (if static) or heap (if instance), but their binding cannot change."
    },
    examAnswer: {
      twoMark: "static makes a member belong to the class rather than any instance, so it is shared and accessed via ClassName.member. final makes a variable a constant, a method non-overridable, or a class non-extendable.",
      thirteenMark: {
        intro: "static and final are two important Java keywords that control scope, lifetime, and mutability of class members.",
        definition: "static is a non-access modifier that makes a member belong to the class, not to instances. final is a non-access modifier that prevents modification: a final variable is a constant, a final method cannot be overridden, and a final class cannot be extended.",
        explanation: "static can be applied to:\n- Variables: shared across all instances; one copy per class.\n- Methods: called via ClassName.method(); cannot use 'this' or access non-static members directly.\n- Blocks: static { ... } run once at class loading.\n- Nested classes: nested static class doesn't need an outer instance.\n\nfinal can be applied to:\n- Variables: must be initialized exactly once; cannot be reassigned.\n- Methods: cannot be overridden in subclasses.\n- Classes: cannot be extended (e.g., String, Math).\n- Parameters: the parameter cannot be reassigned inside the method.\n\nA 'final static' variable is a compile-time constant (e.g., Math.PI, Integer.MAX_VALUE).",
        diagram: "Class: MathUtils\n+----------------------+\n| - PI : double (final static)\n| - counter : int (static)\n| - square(int) : int (static)\n+----------------------+\n   ^\n   | accessed via MathUtils.PI, MathUtils.square(5)\n   |\nObject 1, Object 2, ...  share the same 'counter' and access 'PI'",
        example: "class Config { public static final int MAX_USERS = 100; public static final String APP_NAME = \"MyApp\"; } class Counter { static int count = 0; Counter() { count++; } }",
        types: [
          {
            name: "Static Variables",
            definition: "A static variable is declared with the static keyword and is shared by every instance of the class; exactly one copy exists per class, regardless of how many objects are created.",
            diagram: "  class Counter {\n      static int count;  <-- one per class\n  }\n  obj1, obj2, obj3  -->  all see the same count",
            code: {
              language: "java",
              code: `class Counter {
    static int count;

    Counter() { count++; }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println(Counter.count);
    }
}`,
              caption: "count is a single shared variable across all objects."
            },
            notes: [
              "Static fields are allocated in the method area (metaspace in Java 8+) when the class is initialized.",
              "They are accessed via ClassName.variable, not via an object reference.",
              "They are not thread-safe by default; synchronization or AtomicXxx classes are required for shared mutable state."
            ],
            exampleOutput: "3"
          },
          {
            name: "Static Methods",
            definition: "A static method is declared with the static keyword and belongs to the class; it can be called without creating an object and cannot use 'this' or call non-static members directly.",
            diagram: "  static int add(int a, int b)  -->  Math.add(2, 3)\n  no 'this' available inside the body",
            code: {
              language: "java",
              code: `class MathUtil {
    static int square(int n) { return n * n; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(MathUtil.square(5));
    }
}`,
              caption: "square() is called on the class, not on an object."
            },
            notes: [
              "Static methods are bound at compile time and not subject to dynamic dispatch.",
              "Inside a static method, you cannot use 'this' or 'super'.",
              "The main() method itself is static so the JVM can call it without creating an instance."
            ],
            exampleOutput: "25"
          },
          {
            name: "Static Blocks",
            definition: "A static block is a block of code marked static that runs once when the class is first loaded, used to initialize static fields or perform one-time setup.",
            diagram: "  class C {\n      static { System.out.println(\"loaded\"); }\n  }\n  <-- runs once, on first reference to C",
            code: {
              language: "java",
              code: `class Config {
    static int mode;

    static {
        mode = 1;
        System.out.println("Config loaded");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Config.mode);
    }
}`,
              caption: "Static block sets mode before any code uses Config."
            },
            notes: [
              "Static blocks run in the order they appear in the source file.",
              "They are typically used to load native libraries or initialize complex static fields.",
              "They run only once per class loader, no matter how many times the class is referenced."
            ],
            exampleOutput: "Config loaded\n1"
          }
        ],
        conclusion: "static enables class-level data and behavior; final enforces immutability and prevents unwanted modification. Together they are essential for writing robust, predictable Java code."
      },
      sixteenMark: {
        intro: "static and final are foundational keywords in Java. They control whether a member belongs to a class or an instance, and whether its value or behavior can be changed.",
        definition: "static is a non-access modifier that makes a member belong to the class rather than to any specific instance. final is a non-access modifier that prevents modification: a final variable is a constant, a final method cannot be overridden, and a final class cannot be extended.",
        explanation: "static usage:\n- Static variable: one copy per class, shared by all instances. Accessed via ClassName.var. Initialized at class loading.\n- Static method: belongs to the class, not an object. Cannot use 'this' or call non-static methods directly. Can be called as ClassName.method().\n- Static block: static { ... } runs once when the class is loaded, in source order.\n- Static import: import static java.lang.Math.*; lets you write sqrt(x) instead of Math.sqrt(x).\n- Static nested class: a nested class that does not need an outer instance.\n\nfinal usage:\n- Final variable: must be assigned exactly once. For primitives, the value is constant. For references, the binding is constant but the object's state can still change (unless the object is immutable).\n- Final method: cannot be overridden in subclasses. Used to lock down behavior.\n- Final class: cannot be extended. Examples: String, Math, Integer (all wrapper classes).\n- Final parameter: cannot be reassigned inside the method.\n\nstatic + final: a compile-time constant (e.g., public static final int MAX = 100;). These are inlined at compile time.",
        working: "1. When a class is loaded, the JVM allocates memory for static fields in the method area and runs static initializers.\n2. 'new MyClass()' allocates instance fields on the heap and runs the constructor.\n3. Static methods are bound at compile time; instance methods may be bound at runtime via dynamic dispatch.\n4. Final variables are checked at compile time for definite assignment.",
        diagram: "        +-------------------------+\n        |      Class Loader       |\n        +-------------------------+\n                  |\n                  v\n+-----------------------------------+\n|         Method Area              |\n|  - static fields                 |\n|  - method bytecode               |\n+-----------------------------------+\n                  |\n                  v\n+-----------------------------------+\n|         Heap (objects)           |\n|  - instance fields per object    |\n+-----------------------------------+\nfinal variable: cannot be reassigned\nfinal method: cannot be overridden\nfinal class: cannot be extended",
        example: "final class Constants {\n    public static final double PI = 3.14159;\n    public static final int MAX = 100;\n}\nclass Parent {\n    public final void show() { System.out.println(\"Cannot override\"); }\n}\nclass Child extends Parent {\n    // public void show() {} // COMPILE ERROR — cannot override final method\n}",
        output: "Static members are shared; final members cannot be changed.",
        types: [
          {
            name: "Static Variables",
            definition: "A static variable is declared with the static keyword and is shared by every instance of the class; exactly one copy exists per class, regardless of how many objects are created.",
            diagram: "  class Counter {\n      static int count;  <-- one per class\n  }\n  obj1, obj2, obj3  -->  all see the same count",
            code: {
              language: "java",
              code: `class Counter {
    static int count;

    Counter() { count++; }
}

public class Main {
    public static void main(String[] args) {
        new Counter();
        new Counter();
        new Counter();
        System.out.println(Counter.count);
    }
}`,
              caption: "count is a single shared variable across all objects."
            },
            notes: [
              "Static fields are allocated in the method area (metaspace in Java 8+) when the class is initialized.",
              "They are accessed via ClassName.variable, not via an object reference.",
              "They are not thread-safe by default; synchronization or AtomicXxx classes are required for shared mutable state."
            ],
            exampleOutput: "3"
          },
          {
            name: "Static Methods",
            definition: "A static method is declared with the static keyword and belongs to the class; it can be called without creating an object and cannot use 'this' or call non-static members directly.",
            diagram: "  static int add(int a, int b)  -->  Math.add(2, 3)\n  no 'this' available inside the body",
            code: {
              language: "java",
              code: `class MathUtil {
    static int square(int n) { return n * n; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(MathUtil.square(5));
    }
}`,
              caption: "square() is called on the class, not on an object."
            },
            notes: [
              "Static methods are bound at compile time and not subject to dynamic dispatch.",
              "Inside a static method, you cannot use 'this' or 'super'.",
              "The main() method itself is static so the JVM can call it without creating an instance."
            ],
            exampleOutput: "25"
          },
          {
            name: "Static Blocks",
            definition: "A static block is a block of code marked static that runs once when the class is first loaded, used to initialize static fields or perform one-time setup.",
            diagram: "  class C {\n      static { System.out.println(\"loaded\"); }\n  }\n  <-- runs once, on first reference to C",
            code: {
              language: "java",
              code: `class Config {
    static int mode;

    static {
        mode = 1;
        System.out.println("Config loaded");
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Config.mode);
    }
}`,
              caption: "Static block sets mode before any code uses Config."
            },
            notes: [
              "Static blocks run in the order they appear in the source file.",
              "They are typically used to load native libraries or initialize complex static fields.",
              "They run only once per class loader, no matter how many times the class is referenced."
            ],
            exampleOutput: "Config loaded\n1"
          },
          {
            name: "Final Variables",
            definition: "A final variable can be assigned exactly once and cannot be reassigned; for primitives the value is constant, for references the binding is constant but the object's state can still change.",
            diagram: "  final int MAX = 10;   <-- constant primitive\n  final List L = new ArrayList();  <-- reference is constant",
            code: {
              language: "java",
              code: `class App {
    public static final int MAX = 100;
    public static final String NAME = "Demo";

    public static void main(String[] args) {
        System.out.println(MAX);
        System.out.println(NAME);
    }
}`,
              caption: "MAX and NAME are compile-time constants."
            },
            notes: [
              "A final field must be definitely assigned exactly once (in its declaration or in every constructor).",
              "public static final fields are typically written UPPER_SNAKE_CASE as compile-time constants.",
              "Marking a reference final does not freeze the object it points to — only the reference itself."
            ],
            exampleOutput: "100\nDemo"
          },
          {
            name: "Final Methods",
            definition: "A final method is declared with the final keyword and cannot be overridden by any subclass; the compiler can also inline it as a small optimization.",
            diagram: "  class P { final void m() {} }\n  class C extends P {\n      // void m() {}   <-- COMPILE ERROR\n  }",
            code: {
              language: "java",
              code: `class Parent {
    public final void show() { System.out.println("Parent"); }
}

class Child extends Parent {
    // public void show() {}   // would not compile

    public void print() { System.out.println("Child"); }
}

public class Main {
    public static void main(String[] args) {
        new Child().show();
        new Child().print();
    }
}`,
              caption: "show() is final and cannot be overridden."
            },
            notes: [
              "Final methods are statically bound, so they participate less in dynamic dispatch.",
              "They are useful to lock down critical behavior that subclasses must not change.",
              "All methods in a final class are implicitly final, but only when the class itself is final."
            ],
            exampleOutput: "Parent\nChild"
          },
          {
            name: "Final Classes",
            definition: "A final class is declared with the final keyword and cannot be extended; this is how String, Math, and the wrapper classes in java.lang are designed.",
            diagram: "  final class String\n  class Sub extends String { }   <-- COMPILE ERROR",
            code: {
              language: "java",
              code: `final class Constants {
    public static final int MAX = 100;
}

public class Main {
    public static void main(String[] args) {
        System.out.println(Constants.MAX);
    }
}`,
              caption: "Constants is final — no subclass can be created."
            },
            notes: [
              "All methods in a final class are implicitly final because they cannot be overridden anyway.",
              "Examples in the JDK: String, Math, all primitive wrapper classes (Integer, Long, Double, ...).",
              "Final classes are a deliberate design choice to prevent extension and preserve invariants."
            ],
            exampleOutput: "100"
          }
        ],
        advantages: [
          "static: shared state, memory efficient (one copy)",
          "static: utility/helper methods callable without an instance",
          "final: enforces immutability and design contracts",
          "final: enables compiler optimizations (inlining of constants)",
          "final: prevents unintended modification in subclasses"
        ],
        applications: [
          "Constants (Math.PI, Integer.MAX_VALUE)",
          "Utility classes (Collections, Arrays, Math)",
          "Singleton pattern via private constructor + static instance",
          "Counters and ID generators",
          "Immutable value classes (String, LocalDate, BigDecimal)"
        ],
        conclusion: "static and final are essential Java keywords. static provides class-level members and behavior; final enforces immutability and prevents unwanted modification. Used together (public static final), they create compile-time constants. They form the foundation of well-designed, robust Java APIs."
      }
    },
    viva: [
      { q: "What does the static keyword do?", a: "Makes a member belong to the class instead of any instance. It is shared across all objects and accessed via ClassName.member." },
      { q: "What does the final keyword do?", a: "For variables: makes them constant. For methods: prevents overriding. For classes: prevents extension." },
      { q: "Where are static variables stored?", a: "In the method area (metaspace in Java 8+)." },
      { q: "Can a static method access instance variables?", a: "No, not directly. It needs an object reference to do so." },
      { q: "What is a static block?", a: "A block of code marked static that runs once when the class is loaded, used to initialize static fields." },
      { q: "Can a final variable be reassigned?", a: "No. It must be assigned exactly once." }
    ],
    quiz: {
      mcqs: [
        { question: "Static variables are stored in:", options: ["Stack", "Heap", "Method area", "Cache"], answer: 2, explanation: "Static fields are stored in the method area/metaspace." },
        { question: "How many copies of a static variable exist per class?", options: ["One per object", "One per class", "One per method", "None"], answer: 1, explanation: "One copy shared across all instances." },
        { question: "Which of the following can be final?", options: ["Variable", "Method", "Class", "All of the above"], answer: 3, explanation: "Variables, methods, and classes can all be marked final." },
        { question: "Can a final class be inherited?", options: ["Yes", "No", "Only abstract", "Only with permission"], answer: 1, explanation: "A final class cannot be extended." }
      ],
      trueFalse: [
        { statement: "Static variables can be accessed without creating an object.", answer: true, explanation: "Yes, using ClassName.variable." },
        { statement: "A final reference variable means the object it points to cannot be modified.", answer: false, explanation: "The reference binding cannot change, but the object's internal state can still be mutated (unless it is immutable)." }
      ]
    },
    revision: {
      oneMin: "static = class-level. final = cannot be changed/overridden/extended.",
      fiveMin: [
        "static var: shared, in method area",
        "static method: no 'this', called via class",
        "final var: assign once",
        "final method: no override",
        "final class: no extension"
      ],
      examDay: [
        "Define static and final",
        "Give example of public static final",
        "Mention static block and its use",
        "State where static fields are stored"
      ],
      memoryTrick: "static = Stationery (shared). final = Final exam (cannot be retaken).",
      faq: [
        { q: "Can a static variable be local?", a: "No. static can only be a class member, not a local variable." },
        { q: "Are static variables thread-safe by default?", a: "No. They need synchronization or Atomic* classes for thread safety." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-method-overloading",
    unitId: 1,
    index: 9,
    title: "Method Overloading",
    tagline: "Same name, different signatures",
    oneLiner: "Method overloading is defining multiple methods with the same name but different parameter lists (number, type, or order) in the same class — a form of compile-time polymorphism.",
    analogy: "A 'wash' function with different recipes: wash(car), wash(truck), wash(car, wax). Same name, different inputs, different behaviors.",
    whyExists: "To improve readability and let callers use the same method name for logically similar operations on different data.",
    whereUsed: ["Constructors", "println and print in PrintStream", "valueOf in wrapper classes", "Math.max, Math.min", "String.valueOf"],
    visualCue: "🎯",
    code: {
      language: "java",
      code: `class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    String add(String a, String b) { return a + b; }
}

public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(2, 3));
        System.out.println(calc.add(2.5, 3.5));
        System.out.println(calc.add(1, 2, 3));
        System.out.println(calc.add("Hi ", "Java"));
    }
}`,
      caption: "Four overloaded add() methods with different parameter lists."
    },
    internalWorking: {
      steps: [
        "At compile time, javac groups methods by name and looks at their parameter lists.",
        "When you call calc.add(2, 3), the compiler picks the method whose signature matches the argument types exactly.",
        "If no exact match, Java applies type promotion (e.g., int -> long -> float -> double) to find the best match.",
        "The chosen method is encoded in the bytecode as a static call.",
        "At runtime, no further dispatch is needed — the binding happened at compile time."
      ],
      memory: "Overloaded methods are separate methods at the bytecode level; only the call site is bound at compile time."
    },
    examAnswer: {
      twoMark: "Method overloading in Java is defining multiple methods in the same class with the same name but different parameter lists (number, type, or order). The compiler selects the correct method at compile time based on the arguments — this is called compile-time polymorphism.",
      thirteenMark: {
        intro: "Method overloading is a form of compile-time (static) polymorphism that makes APIs more readable and flexible.",
        definition: "Method overloading is the technique of defining multiple methods with the same name but different parameter lists — different number, type, or order of parameters — within the same class.",
        explanation: "Overloading rules:\n1. Methods must differ in parameter list. Return type alone is NOT enough to disambiguate.\n2. Access modifiers and exception lists can vary freely.\n3. The compiler picks the best match based on argument types.\n4. If no exact match, Java applies automatic type promotion (byte -> short -> int -> long -> float -> double) to find a match.\n5. Varargs (...) can be used; a method with a fixed-arity match is preferred over a varargs method.\n6. Overloading can occur within a class or across parent and child (subclass can overload parent's methods).",
        diagram: "add(int, int)\nadd(double, double)\nadd(int, int, int)\nadd(String, String)\n   ^\n   |  all share the name 'add' in the same class\n   |  selected at compile time",
        example: "class Demo { void show(int a) { System.out.println(\"int: \" + a); } void show(String s) { System.out.println(\"str: \" + s); } void show(double d) { System.out.println(\"dbl: \" + d); } } Demo d = new Demo(); d.show(10); d.show(\"Hi\"); d.show(3.14);",
        types: [
          {
            name: "Different Number of Parameters",
            definition: "Overloading by number means defining methods with the same name that accept a different count of parameters.",
            diagram: "  show(int)         --> 1 parameter\n  show(int, int)     --> 2 parameters\n  show(int, int, int) --> 3 parameters",
            code: {
              language: "java",
              code: `class Demo {
    void show(int a)               { System.out.println("one: " + a); }
    void show(int a, int b)         { System.out.println("two: " + a + "," + b); }
    void show(int a, int b, int c)  { System.out.println("three: " + a + "," + b + "," + c); }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(1);
        d.show(1, 2);
        d.show(1, 2, 3);
    }
}`,
              caption: "show() is overloaded by arity."
            },
            notes: [
              "The compiler picks the method whose parameter count matches the call site exactly.",
              "Adding or removing parameters gives a brand new signature.",
              "This form is heavily used in constructors and variadic-style APIs."
            ],
            exampleOutput: "one: 1\ntwo: 1,2\nthree: 1,2,3"
          },
          {
            name: "Different Types of Parameters",
            definition: "Overloading by type means defining methods with the same name and arity but different parameter types, so callers can pass different kinds of data.",
            diagram: "  show(int)     --> int call site\n  show(String)  --> String call site\n  show(double)  --> double call site",
            code: {
              language: "java",
              code: `class Demo {
    void show(int n)    { System.out.println("int " + n); }
    void show(double d) { System.out.println("dbl " + d); }
    void show(String s) { System.out.println("str " + s); }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(5);
        d.show(2.5);
        d.show("hi");
    }
}`,
              caption: "show() is overloaded by parameter type."
            },
            notes: [
              "The compiler uses the static type of the argument to choose the best match.",
              "If no exact match exists, Java applies automatic type promotion (e.g., int -> long -> double).",
              "Autoboxing is also considered, but exact match always wins over boxing."
            ],
            exampleOutput: "int 5\ndbl 2.5\nstr hi"
          },
          {
            name: "Different Order of Parameters",
            definition: "Overloading by order means defining methods with the same name and number of parameters but with the types in a different sequence.",
            diagram: "  register(String, int)  --> name, age\n  register(int, String)  --> age, name",
            code: {
              language: "java",
              code: `class Reg {
    void register(String name, int age) {
        System.out.println("name=" + name + " age=" + age);
    }
    void register(int age, String name) {
        System.out.println("age=" + age + " name=" + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Reg r = new Reg();
        r.register("Alice", 20);
        r.register(20, "Alice");
    }
}`,
              caption: "register() is overloaded by parameter order."
            },
            notes: [
              "Order matters: (String, int) and (int, String) are distinct signatures.",
              "Use this carefully — it can confuse readers at the call site.",
              "Pick distinct names when the meaning of the parameters changes, to keep APIs readable."
            ],
            exampleOutput: "name=Alice age=20\nage=20 name=Alice"
          }
        ],
        conclusion: "Method overloading increases API usability by letting one name represent logically similar operations. The compiler resolves the right method at compile time, so it is fast and predictable."
      },
      sixteenMark: {
        intro: "Method overloading is a common Java technique that allows a class to have multiple methods with the same name but different parameter lists, supporting clean, readable APIs.",
        definition: "Method overloading is the practice of defining two or more methods in the same class with the same name but different parameter lists (different number, type, or order of parameters). The compiler selects the right method at compile time based on the argument types — this is called compile-time or static polymorphism.",
        explanation: "Rules and details:\n- Methods are distinguished by their signatures: name + parameter types. Return type is NOT part of the signature for overloading.\n- Access modifiers, exception lists, and return type can vary freely between overloaded methods.\n- The compiler picks the most specific match:\n  1. Exact match by argument types.\n  2. Widening primitive conversion (e.g., int -> long -> float -> double).\n  3. Autoboxing / unboxing (e.g., int <-> Integer).\n  4. Varargs (only if no other match).\n- A subclass can overload methods inherited from its parent — this is not overriding.\n- Overloading applies to methods and constructors.\n- Overloading is resolved at compile time, so there is no runtime cost.",
        working: "1. The compiler reads all methods named X in the class and groups them by parameter list.\n2. At each call site, javac selects the best-matching method based on the static types of the arguments.\n3. The chosen method is referenced directly in the bytecode (an invokevirtual or invokespecial instruction).\n4. No runtime lookup of overloads occurs.",
        diagram: "Source code:\n  calc.add(2, 3)        -->  add(int, int)\n  calc.add(2.5, 3.5)    -->  add(double, double)\n  calc.add(1, 2, 3)     -->  add(int, int, int)\n  calc.add(\"Hi\", \"Bye\") -->  add(String, String)\n\n  Compiler picks one method per call site at compile time.",
        example: "class Account { String name; double bal;\n  Account() { this(\"Default\", 0); }\n  Account(String n) { this(n, 0); }\n  Account(String n, double b) { name = n; bal = b; }\n}",
        output: "All three constructors create an Account with appropriate initial values, demonstrating constructor overloading (a special form of method overloading).",
        types: [
          {
            name: "Different Number of Parameters",
            definition: "Overloading by number means defining methods with the same name that accept a different count of parameters.",
            diagram: "  show(int)         --> 1 parameter\n  show(int, int)     --> 2 parameters\n  show(int, int, int) --> 3 parameters",
            code: {
              language: "java",
              code: `class Demo {
    void show(int a)               { System.out.println("one: " + a); }
    void show(int a, int b)         { System.out.println("two: " + a + "," + b); }
    void show(int a, int b, int c)  { System.out.println("three: " + a + "," + b + "," + c); }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(1);
        d.show(1, 2);
        d.show(1, 2, 3);
    }
}`,
              caption: "show() is overloaded by arity."
            },
            notes: [
              "The compiler picks the method whose parameter count matches the call site exactly.",
              "Adding or removing parameters gives a brand new signature.",
              "This form is heavily used in constructors and variadic-style APIs."
            ],
            exampleOutput: "one: 1\ntwo: 1,2\nthree: 1,2,3"
          },
          {
            name: "Different Types of Parameters",
            definition: "Overloading by type means defining methods with the same name and arity but different parameter types, so callers can pass different kinds of data.",
            diagram: "  show(int)     --> int call site\n  show(String)  --> String call site\n  show(double)  --> double call site",
            code: {
              language: "java",
              code: `class Demo {
    void show(int n)    { System.out.println("int " + n); }
    void show(double d) { System.out.println("dbl " + d); }
    void show(String s) { System.out.println("str " + s); }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show(5);
        d.show(2.5);
        d.show("hi");
    }
}`,
              caption: "show() is overloaded by parameter type."
            },
            notes: [
              "The compiler uses the static type of the argument to choose the best match.",
              "If no exact match exists, Java applies automatic type promotion (e.g., int -> long -> double).",
              "Autoboxing is also considered, but exact match always wins over boxing."
            ],
            exampleOutput: "int 5\ndbl 2.5\nstr hi"
          },
          {
            name: "Different Order of Parameters",
            definition: "Overloading by order means defining methods with the same name and number of parameters but with the types in a different sequence.",
            diagram: "  register(String, int)  --> name, age\n  register(int, String)  --> age, name",
            code: {
              language: "java",
              code: `class Reg {
    void register(String name, int age) {
        System.out.println("name=" + name + " age=" + age);
    }
    void register(int age, String name) {
        System.out.println("age=" + age + " name=" + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Reg r = new Reg();
        r.register("Alice", 20);
        r.register(20, "Alice");
    }
}`,
              caption: "register() is overloaded by parameter order."
            },
            notes: [
              "Order matters: (String, int) and (int, String) are distinct signatures.",
              "Use this carefully — it can confuse readers at the call site.",
              "Pick distinct names when the meaning of the parameters changes, to keep APIs readable."
            ],
            exampleOutput: "name=Alice age=20\nage=20 name=Alice"
          },
          {
            name: "Type Promotion in Overloading",
            definition: "When no exact type match exists, the compiler promotes a smaller primitive to a larger one to find a compatible overload (e.g., int -> long -> float -> double).",
            diagram: "  int arg --> long, float, or double overload\n  byte/short arg --> int, long, float, double overload",
            code: {
              language: "java",
              code: `class Promo {
    void show(int a)    { System.out.println("int " + a); }
    void show(double d) { System.out.println("dbl " + d); }
}

public class Main {
    public static void main(String[] args) {
        Promo p = new Promo();
        p.show(10);
        p.show(10L);
        p.show(10.5);
    }
}`,
              caption: "int is exact-matched, long promotes to double, double is exact."
            },
            notes: [
              "Promotion order: byte -> short -> int -> long -> float -> double.",
              "char also promotes to int, long, float, or double.",
              "If two overloads both match via promotion, the compiler picks the most specific (widest reachable) one."
            ],
            exampleOutput: "int 10\ndbl 10.0\ndbl 10.5"
          },
          {
            name: "Varargs Overloading",
            definition: "A method that accepts varargs (Type... args) can be matched by zero or more arguments; a fixed-arity overload is preferred over a varargs match when both apply.",
            diagram: "  show(int...)  --> 0..N ints\n  show(int, int) --> exactly 2 ints  (preferred over varargs)",
            code: {
              language: "java",
              code: `class Demo {
    void show(int... a) {
        System.out.print("varargs: ");
        for (int x : a) System.out.print(x + " ");
        System.out.println();
    }
}

public class Main {
    public static void main(String[] args) {
        Demo d = new Demo();
        d.show();
        d.show(1);
        d.show(1, 2, 3);
    }
}`,
              caption: "show(int...) is the only overload, so it matches all calls."
            },
            notes: [
              "Varargs syntax is just an array passed by the caller, with a small syntactic sugar.",
              "When both a fixed-arity method and a varargs method match, the fixed-arity method is chosen.",
              "You can have only one varargs parameter per method, and it must be the last parameter."
            ],
            exampleOutput: "varargs: \nvarargs: 1 \nvarargs: 1 2 3"
          }
        ],
        advantages: [
          "Multiple ways to call the same logical operation",
          "Improves readability — same name for similar actions",
          "Compile-time resolution — no runtime overhead",
          "Used heavily in standard library (println, valueOf, etc.)",
          "Supports flexible API design"
        ],
        applications: [
          "Constructors (overloading is the standard way to provide multiple initializers)",
          "PrintStream.println (overloaded for int, double, String, Object, char[], etc.)",
          "Wrapper class valueOf (String -> Integer, int -> Integer, etc.)",
          "String concatenation and conversion methods",
          "Math functions (max(int, int), max(double, double), max(long, long))"
        ],
        conclusion: "Method overloading is a key technique in Java that enhances API usability and code readability. Because overload resolution happens at compile time, it has no runtime cost and is one of the simplest forms of polymorphism in Java."
      }
    },
    viva: [
      { q: "What is method overloading?", a: "Multiple methods with the same name but different parameter lists in the same class." },
      { q: "How does the compiler choose which overloaded method to call?", a: "Based on the static types of the arguments passed at the call site." },
      { q: "Can overloaded methods differ only in return type?", a: "No. The parameter list must differ; return type alone is not enough." },
      { q: "Is overloading a runtime or compile-time polymorphism?", a: "Compile-time (static) polymorphism." },
      { q: "Can a subclass overload a method from its parent?", a: "Yes. The subclass can define new methods with the same name but different parameters — that is overloading, not overriding." }
    ],
    quiz: {
      mcqs: [
        { question: "Method overloading is resolved at:", options: ["Runtime", "Compile time", "Both", "Never"], answer: 1, explanation: "Static binding by the compiler." },
        { question: "Which of these is required for two methods to be overloaded?", options: ["Same name, same params", "Same name, different params", "Different name, different params", "Same return type"], answer: 1, explanation: "Overloading = same name, different parameter list." },
        { question: "Method overloading enables:", options: ["Multiple ways to call similar logic", "Inheritance", "Runtime polymorphism", "Abstraction"], answer: 0, explanation: "It provides flexible, readable APIs." },
        { question: "Can two methods differ only in return type and be overloaded?", options: ["Yes", "No", "Only if both are static", "Only inside interfaces"], answer: 1, explanation: "Parameter list must differ." }
      ],
      trueFalse: [
        { statement: "Two methods can have the same name and same parameter list if they differ in return type.", answer: false, explanation: "That is a compile error — duplicate method." },
        { statement: "Constructor overloading is a form of method overloading.", answer: true, explanation: "Constructors follow the same overloading rules." }
      ]
    },
    revision: {
      oneMin: "Overloading = same name, different parameter lists. Compile-time polymorphism.",
      fiveMin: [
        "Differ in number, type, or order of parameters",
        "Return type alone is not enough",
        "Compiler picks best match",
        "Type promotion rules apply",
        "Used in println, valueOf, constructors"
      ],
      examDay: [
        "Define overloading in 1 line",
        "Give an example with 3 overloads",
        "Mention compile-time binding",
        "Differentiate from overriding"
      ],
      memoryTrick: "Overloading = One name, MANY signatures (compile-time). Overriding = One signature, MANY implementations (runtime).",
      faq: [
        { q: "Is overloading runtime polymorphism?", a: "No. It is compile-time (static) polymorphism." },
        { q: "Can private methods be overloaded?", a: "Yes, as long as they are in the same class." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u1-method-overriding",
    unitId: 1,
    index: 10,
    title: "Method Overriding",
    tagline: "Subclass redefines parent's behavior",
    oneLiner: "Method overriding is when a subclass provides a specific implementation of a method already defined in its parent class, with the same name, parameter list, and a compatible return type — enabling runtime polymorphism.",
    analogy: "A child refusing to follow a parent's recipe exactly — they use the same dish name and ingredients but prepare it their own way. Same signature, different implementation.",
    whyExists: "To allow subclasses to customize or extend behavior inherited from the parent, enabling polymorphic dispatch and flexible designs.",
    whereUsed: ["Runtime polymorphism", "Frameworks (Template Method pattern)", "equals() and toString() in Object subclasses", "GUI event handlers", "Strategy and State patterns"],
    visualCue: "🎭",
    code: {
      language: "java",
      code: `class Bank {
    double getRateOfInterest() { return 5.0; }
}
class SBI extends Bank {
    @Override
    double getRateOfInterest() { return 6.5; }
}
class HDFC extends Bank {
    @Override
    double getRateOfInterest() { return 7.0; }
}

public class Main {
    public static void main(String[] args) {
        Bank b;
        b = new SBI();
        System.out.println("SBI rate: " + b.getRateOfInterest() + "%");
        b = new HDFC();
        System.out.println("HDFC rate: " + b.getRateOfInterest() + "%");
    }
}`,
      caption: "Each subclass overrides getRateOfInterest() with its own rate."
    },
    internalWorking: {
      steps: [
        "The subclass declares a method with the same name, parameter list, and compatible return type as the parent.",
        "The compiler checks the signature, access level, and exception compatibility.",
        "At runtime, the JVM uses the actual object's class (via vtable) to find the most specific implementation.",
        "Dynamic dispatch invokes the subclass's version, even when called via a parent reference.",
        "Use the @Override annotation to have the compiler verify correctness."
      ],
      memory: "Each class has a vtable. Overriding replaces the parent's entry with the child's code. The JVM follows the vtable of the actual object at runtime."
    },
    examAnswer: {
      twoMark: "Method overriding is when a subclass provides a specific implementation of a method already defined in its parent class, with the same signature and a compatible return type. It enables runtime polymorphism via dynamic dispatch.",
      thirteenMark: {
        intro: "Method overriding is the foundation of runtime polymorphism in Java. It allows a subclass to provide a specific implementation of an inherited method.",
        definition: "Method overriding is the act of redefining a method inherited from a superclass in the subclass, with the same name, parameter list, and a return type that is the same or covariant (a subtype of the parent's return type).",
        explanation: "Rules of overriding:\n1. Method name, parameter list must match exactly.\n2. Return type must be the same or a covariant subtype (Java 5+).\n3. Access level cannot be more restrictive (can be less restrictive).\n4. Cannot override final, static, or private methods.\n5. Cannot throw new or broader checked exceptions; can throw fewer or narrower.\n6. The @Override annotation tells the compiler to verify these rules.\n\nWhen a method is called on a parent reference that actually holds a child object, the JVM uses dynamic dispatch to call the child's overridden version. This is runtime polymorphism.",
        diagram: "   Bank\n  +--------+\n  | rate() |\n  +--------+\n     ^  (overridden by)\n     |\n  +----+----+\n  |         |\n SBI      HDFC\n rate()=6.5 rate()=7.0\n\n Bank b = new SBI();   b.rate();  --> 6.5 (dynamic dispatch)",
        example: "class Animal { void sound() { System.out.println(\"...\"); } } class Dog extends Animal { @Override void sound() { System.out.println(\"Bark\"); } } Animal a = new Dog(); a.sound(); // Output: Bark",
        types: [
          {
            name: "Standard Overriding",
            definition: "Standard overriding is when a subclass redefines a non-final, non-static, non-private method with the exact same name, parameter list, and return type as the parent.",
            diagram: "  Animal\n  +---------+\n  | sound() |\n  +---------+\n       ^ overrides\n       |\n     Dog\n   sound() = \"Bark\"",
            code: {
              language: "java",
              code: `class Animal { void sound() { System.out.println("..."); } }

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,
              caption: "Dog.sound() overrides Animal.sound()."
            },
            notes: [
              "The overriding method must have the same name and parameter list as the parent's method.",
              "The @Override annotation is recommended: the compiler will reject the method if it does not actually override anything.",
              "The call is resolved at runtime via dynamic dispatch, so the child's version is chosen."
            ],
            exampleOutput: "Bark"
          },
          {
            name: "Covariant Return Type",
            definition: "An overriding method may declare a return type that is a subtype of the parent's return type; this is called a covariant return and was introduced in Java 5.",
            diagram: "  Animal clone()  --> child can return Dog",
            code: {
              language: "java",
              code: `class Animal {
    Animal copy() { return new Animal(); }
}

class Dog extends Animal {
    @Override
    Dog copy() { return new Dog(); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        Dog c = d.copy();
        System.out.println(c.getClass().getSimpleName());
    }
}`,
              caption: "Dog.copy() returns Dog, a subtype of Animal."
            },
            notes: [
              "The overriding return type must be the same as, or a subtype of, the parent's return type.",
              "This lets callers use the more specific returned type without an extra cast.",
              "Java 5 introduced this feature; before that, return types had to match exactly."
            ],
            exampleOutput: "Dog"
          }
        ],
        conclusion: "Method overriding enables runtime polymorphism — the same call behaves differently based on the actual object type. It is a cornerstone of flexible, extensible OOP design."
      },
      sixteenMark: {
        intro: "Method overriding is the mechanism by which a subclass provides a specific implementation of a method inherited from its superclass, enabling runtime polymorphism and dynamic method dispatch.",
        definition: "Method overriding is redefining a non-final, non-static, non-private method in a subclass with the same name, parameter list, and a return type that is the same or a covariant subtype. The JVM uses dynamic dispatch to call the actual object's overridden version at runtime.",
        explanation: "Overriding rules:\n- The method name and parameter list must match exactly.\n- The return type must be the same or a covariant subtype (introduced in Java 5; e.g., overriding List return type with ArrayList is allowed).\n- The access level cannot be more restrictive than the parent's (can be the same or wider).\n- Cannot override final, static, or private methods:\n  - final methods are explicitly non-overridable.\n  - static methods are hidden, not overridden.\n  - private methods are not visible to subclasses.\n- Cannot declare new or broader checked exceptions in the override. Can throw fewer, narrower, or any unchecked (Runtime) exceptions.\n- The @Override annotation is recommended — it makes the compiler verify that you are actually overriding (not overloading) and catches signature mismatches.\n\nDynamic dispatch:\n- The JVM looks up the method in the actual object's class vtable at runtime.\n- The call site uses the reference's static type only for compile-time checks (like access).\n- This is the foundation of runtime polymorphism.",
        working: "1. Compile time: javac verifies the override is valid (signature, access, exceptions).\n2. Class loading: each class gets a vtable mapping method names to code.\n3. Runtime: when b.rate() is called on a Bank reference holding an SBI object, the JVM walks the actual object's vtable and invokes SBI's rate() method.\n4. The result: the same call yields different behavior depending on the actual object type.",
        diagram: "      Animal\n     +--------+\n     | sound()|\n     +--------+\n          ^\n          | overrides\n     +----+----+\n     |         |\n    Dog       Cat\n   sound()   sound()\n   =\"Bark\"   =\"Meow\"\n\n Animal a = new Dog();\n a.sound();   --> \"Bark\"  (via dynamic dispatch)\n\n Animal a = new Cat();\n a.sound();   --> \"Meow\"",
        example: "class Shape { double area() { return 0; } }\nclass Circle extends Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    @Override\n    double area() { return Math.PI * r * r; }\n}\nclass Square extends Shape {\n    double s;\n    Square(double s) { this.s = s; }\n    @Override\n    double area() { return s * s; }\n}",
        output: "Same call shape.area() returns the area of the actual shape — circle, square, etc.",
        types: [
          {
            name: "Standard Overriding",
            definition: "Standard overriding is when a subclass redefines a non-final, non-static, non-private method with the exact same name, parameter list, and return type as the parent.",
            diagram: "  Animal\n  +---------+\n  | sound() |\n  +---------+\n       ^ overrides\n       |\n     Dog\n   sound() = \"Bark\"",
            code: {
              language: "java",
              code: `class Animal { void sound() { System.out.println("..."); } }

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}`,
              caption: "Dog.sound() overrides Animal.sound()."
            },
            notes: [
              "The overriding method must have the same name and parameter list as the parent's method.",
              "The @Override annotation is recommended: the compiler will reject the method if it does not actually override anything.",
              "The call is resolved at runtime via dynamic dispatch, so the child's version is chosen."
            ],
            exampleOutput: "Bark"
          },
          {
            name: "Covariant Return Type",
            definition: "An overriding method may declare a return type that is a subtype of the parent's return type; this is called a covariant return and was introduced in Java 5.",
            diagram: "  Animal clone()  --> child can return Dog",
            code: {
              language: "java",
              code: `class Animal {
    Animal copy() { return new Animal(); }
}

class Dog extends Animal {
    @Override
    Dog copy() { return new Dog(); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        Dog c = d.copy();
        System.out.println(c.getClass().getSimpleName());
    }
}`,
              caption: "Dog.copy() returns Dog, a subtype of Animal."
            },
            notes: [
              "The overriding return type must be the same as, or a subtype of, the parent's return type.",
              "This lets callers use the more specific returned type without an extra cast.",
              "Java 5 introduced this feature; before that, return types had to match exactly."
            ],
            exampleOutput: "Dog"
          },
          {
            name: "Exception Narrowing",
            definition: "An overriding method may declare fewer or narrower checked exceptions than the parent; it cannot throw new or broader checked exceptions.",
            diagram: "  parent: throws IOException\n  child : throws FileNotFoundException  (subtype, OK)\n  child : throws SQLException           (broader, NOT OK)",
            code: {
              language: "java",
              code: `import java.io.IOException;
import java.io.FileNotFoundException;

class Parent {
    void read() throws IOException { throw new IOException("p"); }
}

class Child extends Parent {
    @Override
    void read() throws FileNotFoundException { throw new FileNotFoundException("c"); }
}

public class Main {
    public static void main(String[] args) throws Exception {
        Parent p = new Child();
        p.read();
    }
}`,
              caption: "Child.read() throws a narrower checked exception than Parent.read()."
            },
            notes: [
              "Checked exceptions in the override must be the same as, or a subtype of, the parent's throws clause.",
              "Unchecked (Runtime) exceptions are unrestricted — you can throw any of them in the override.",
              "This rule preserves Liskov Substitution: callers using the parent's signature should not see new checked exceptions."
            ],
            exampleOutput: "(throws FileNotFoundException at runtime)"
          },
          {
            name: "Access Level Widening",
            definition: "An overriding method can be declared with a wider (less restrictive) access level than the parent, but never with a narrower one.",
            diagram: "  parent: protected  --> child: public  (OK)\n  parent: public      --> child: private  (ERROR)",
            code: {
              language: "java",
              code: `class Parent {
    protected void show() { System.out.println("p"); }
}

class Child extends Parent {
    @Override
    public void show() { System.out.println("c"); }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.show();
    }
}`,
              caption: "Child widens the parent's protected method to public."
            },
            notes: [
              "Widening is allowed because callers using the parent's type can still invoke the method.",
              "Narrowing would break the parent's contract, so the compiler rejects it.",
              "Common pattern: parents declare a method protected and subclasses expose it as public via override."
            ],
            exampleOutput: "c"
          }
        ],
        advantages: [
          "Enables runtime polymorphism (one interface, many behaviors)",
          "Allows subclasses to customize inherited behavior",
          "Supports the Open/Closed Principle: open for extension, closed for modification",
          "Forms the basis of many design patterns (Template, Strategy, State)",
          "Enables framework design (subclass and override template methods)"
        ],
        applications: [
          "Template Method pattern (override hooks)",
          "GUI event handlers (override actionPerformed)",
          "equals() and toString() in custom classes",
          "Polymorphic collections (List of Shapes with mixed types)",
          "Frameworks: Spring, Hibernate, JUnit use overriding heavily"
        ],
        conclusion: "Method overriding is the foundation of runtime polymorphism in Java. By redefining parent methods in subclasses and using dynamic dispatch, Java enables flexible, extensible designs where new behaviors can be added without modifying existing code."
      }
    },
    viva: [
      { q: "What is method overriding?", a: "A subclass provides a specific implementation of a method already defined in its parent class, with the same signature." },
      { q: "Can we override a static method?", a: "No. Static methods are hidden, not overridden. They are bound at compile time." },
      { q: "Can we override a private method?", a: "No. Private methods are not visible to subclasses, so they cannot be overridden." },
      { q: "Can we override a final method?", a: "No. Final methods are explicitly non-overridable." },
      { q: "What is the role of @Override annotation?", a: "It instructs the compiler to verify that the method is actually overriding a parent method — it catches signature mistakes." },
      { q: "What is covariant return type?", a: "An overriding method can return a subtype of the parent's return type (e.g., parent returns Animal, child returns Dog)." }
    ],
    quiz: {
      mcqs: [
        { question: "Method overriding is an example of:", options: ["Compile-time polymorphism", "Run-time polymorphism", "Encapsulation", "Inheritance"], answer: 1, explanation: "Resolved at runtime via dynamic dispatch." },
        { question: "Which methods can be overridden?", options: ["static", "final", "private", "Instance methods of a non-final class"], answer: 3, explanation: "Instance methods of non-final classes are overridable." },
        { question: "In an override, the return type can be:", options: ["Any type", "Same or covariant subtype", "Only the same", "Only a primitive"], answer: 1, explanation: "Same or covariant subtype (Java 5+)." },
        { question: "Can a subclass throw a new checked exception in an override?", options: ["Yes", "No", "Only RuntimeException", "Only if parent declares it"], answer: 1, explanation: "Cannot throw new or broader checked exceptions." }
      ],
      trueFalse: [
        { statement: "Static methods can be overridden.", answer: false, explanation: "Static methods are hidden, not overridden." },
        { statement: "The @Override annotation is mandatory.", answer: false, explanation: "It is optional but strongly recommended for safety." }
      ]
    },
    revision: {
      oneMin: "Overriding = same signature, new implementation. Runtime polymorphism.",
      fiveMin: [
        "Match name + parameter list",
        "Same or covariant return type",
        "Cannot be more restrictive",
        "Cannot throw new checked exceptions",
        "Resolved at runtime by JVM"
      ],
      examDay: [
        "Define overriding in 1 line",
        "List 5 rules of overriding",
        "Show a runtime polymorphism example",
        "Mention @Override annotation"
      ],
      memoryTrick: "Overriding = Overwriting the parent's recipe with your own version (same name, same ingredients).",
      faq: [
        { q: "Can a constructor be overridden?", a: "No. Constructors are not inherited and cannot be overridden." },
        { q: "Can an overridden method be called from the subclass?", a: "Yes, using super.methodName()." }
      ]
    },
    simulator: { type: "dynamic-dispatch", classes: [
      { name: "Bank", methods: [{ name: "rateOfInterest", impl: "5.0%" }] },
      { name: "SBI", methods: [{ name: "rateOfInterest", impl: "6.5%" }] },
      { name: "HDFC", methods: [{ name: "rateOfInterest", impl: "7.0%" }] }
    ] }
  },
  {
    id: "u1-packages-access-control",
    unitId: 1,
    index: 11,
    title: "Packages and Access Control",
    tagline: "Organizing code and controlling visibility",
    oneLiner: "Packages group related classes and interfaces into namespaces; access modifiers (private, default, protected, public) control which classes and packages can see and use each member.",
    analogy: "A building has public lobbies (anyone), apartment floors (residents only), offices (employees only), and vaults (just the manager). Packages and access modifiers give code the same layered visibility.",
    whyExists: "To organize code, prevent naming conflicts, and enforce encapsulation by controlling which parts of a program can see which other parts.",
    whereUsed: ["Every non-trivial Java project", "Standard library (java.util, java.io, java.net)", "Frameworks and libraries", "JAR files", "Modular code organization"],
    visualCue: "📁",
    code: {
      language: "java",
      code: `// File: myapp/utils/Helper.java
package myapp.utils;

public class Helper {
    public void publicMethod() {
        System.out.println("Public: visible everywhere");
    }
    protected void protectedMethod() {
        System.out.println("Protected: same package or subclass");
    }
    void defaultMethod() {
        System.out.println("Default: same package only");
    }
    private void privateMethod() {
        System.out.println("Private: inside this class only");
    }

    public void callAll() {
        publicMethod();
        protectedMethod();
        defaultMethod();
        privateMethod();
    }
}`,
      caption: "Different access modifiers in a single class."
    },
    internalWorking: {
      steps: [
        "The package keyword places the class in a named namespace (mapped to a directory).",
        "import statements bring types from other packages into scope.",
        "The compiler resolves type names using the import list and java.lang.* default.",
        "Access checks happen at compile time, with additional checks for protected at runtime (subclass context).",
        "The JVM enforces access flags in the .class file: each member has ACC_PUBLIC, ACC_PRIVATE, ACC_PROTECTED bits.",
        "Reflection can bypass access control but may trigger IllegalAccessError without setAccessible(true)."
      ],
      memory: "Code from any package can be loaded by the JVM; access control is enforced by the compiler and JVM when members are actually referenced."
    },
    examAnswer: {
      twoMark: "Packages group related classes into namespaces and map to directories. Access modifiers (private, default, protected, public) control visibility of class members, enforcing encapsulation across packages and class hierarchies.",
      thirteenMark: {
        intro: "Packages and access control are essential for organizing large Java projects and enforcing encapsulation at a module level.",
        definition: "A package is a namespace that groups related classes and interfaces; in Java, it maps to a directory structure. An access modifier is a keyword (private, default, protected, public) that controls the visibility of a class, method, or field.",
        explanation: "Access modifiers in Java:\n- private: accessible only within the same class.\n- default (no modifier): accessible within the same package.\n- protected: accessible within the same package AND by subclasses (even in other packages).\n- public: accessible from anywhere.\n\nFor top-level classes, only public and default are allowed (a class cannot be private or protected at the top level).\n\nPackages:\n- Declared with the 'package' keyword at the top of the file.\n- Convention: reverse domain, e.g., com.example.project.\n- Subpackages (com.example.project.utils) are separate packages for access purposes — they are not 'inside' the parent.\n- The import statement brings types into scope; import java.util.* imports all classes from java.util.",
        diagram: "Visibility Matrix\n+----------------+--------+--------+--------+--------+\n| Modifier        | Same   | Same   | Sub-   | Other  |\n|                 | Class  | Pkg    | class  |        |\n+----------------+--------+--------+--------+--------+\n| private         |  YES   |  no    |  no    |  no    |\n| default         |  YES   |  YES   |  no    |  no    |\n| protected       |  YES   |  YES   |  YES   |  no    |\n| public          |  YES   |  YES   |  YES   |  YES   |\n+----------------+--------+--------+--------+--------+",
        example: "package com.example.school;\npublic class Student {\n    private int rollNo;          // only Student\n    String name;                 // same package only (default)\n    protected int age;           // same package or subclass\n    public String getName() { return name; }  // everywhere\n}",
        types: [
          {
            name: "public",
            definition: "The public modifier exposes a class or member to every other class in every package, with no restriction.",
            diagram: "  public class Api  <-- visible everywhere\n  public void serve()  <-- callable from any package",
            code: {
              language: "java",
              code: `public class App {
    public int version = 1;

    public void run() { System.out.println("running"); }
}

public class Main {
    public static void main(String[] args) {
        App a = new App();
        System.out.println(a.version);
        a.run();
    }
}`,
              caption: "Public members are accessible from anywhere."
            },
            notes: [
              "Top-level classes are usually declared public so they can be used by other packages.",
              "Public members form the documented API of a class; they should be carefully designed and stable.",
              "Exposing too much as public breaks encapsulation, so prefer the most restrictive modifier that still works."
            ],
            exampleOutput: "1\nrunning"
          },
          {
            name: "private",
            definition: "The private modifier hides a member so it is accessible only inside the class that declares it, enforcing the strongest encapsulation.",
            diagram: "  private int balance;  <-- visible only inside Account\n  same package: NO\n  subclass:     NO\n  other class:  NO",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    Account(double b) { balance = b; }

    public double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account(100);
        System.out.println(a.getBalance());
    }
}`,
              caption: "balance is private; only getBalance() exposes it."
            },
            notes: [
              "private is the most restrictive access modifier and the default choice for fields.",
              "Accessor methods (getters/setters) are how external code interacts with private state.",
              "Inner classes can access the private members of their enclosing class and vice versa."
            ],
            exampleOutput: "100.0"
          },
          {
            name: "default (package-private)",
            definition: "When no access modifier is written, the member is package-private: visible to every class in the same package but hidden from all other packages.",
            diagram: "  String name;  <-- same package: YES\n                <-- other package: NO",
            code: {
              language: "java",
              code: `class Helper {
    String greet() { return "hello"; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Helper().greet());
    }
}`,
              caption: "Helper and Main in the same package; greet() is default-accessible."
            },
            notes: [
              "Default access is sometimes written as 'package-private' to be explicit.",
              "Useful for grouping tightly coupled classes that should not be used outside the package.",
              "Subpackages are NOT considered part of the same package for access purposes."
            ],
            exampleOutput: "hello"
          }
        ],
        conclusion: "Packages and access modifiers are foundational to organizing Java code and enforcing encapsulation. Choosing the right visibility is essential for maintainable, secure APIs."
      },
      sixteenMark: {
        intro: "Packages and access control are the mechanisms that organize Java code into namespaces and restrict visibility of types and members. They are critical for large projects and reusable libraries.",
        definition: "A package is a namespace that groups related types; it is declared with the 'package' keyword and corresponds to a directory structure. An access modifier is a keyword that controls the visibility of a class member — private, default (package-private), protected, or public.",
        explanation: "Access modifier rules:\n- private: visible only inside the same class.\n- default (no keyword): visible inside the same package.\n- protected: visible inside the same package and from subclasses (even in other packages).\n- public: visible everywhere.\n\nTop-level classes can be only public or default. Inner classes can use all four modifiers.\n\nPackage rules:\n- The package declaration must be the first non-comment statement in a .java file.\n- By convention, package names are lowercase and reverse-DNS, e.g., com.example.project.\n- Subpackages are independent for access purposes: com.example and com.example.util are different packages, and com.example.util cannot access default members of com.example.\n- The CLASSPATH environment variable (or -cp flag) tells the JVM where to find .class files.\n- The import statement lets you use short class names from other packages; java.lang.* is imported automatically.\n- Static import (import static) lets you use static members without class qualification.",
        working: "1. Compiler checks access at compile time based on the call site's package and inheritance relationship.\n2. JVM stores access flags in the .class file: ACC_PUBLIC, ACC_PRIVATE, ACC_PROTECTED.\n3. At runtime, when a method or field is accessed, the JVM checks the caller's relationship to the target class.\n4. Reflection can bypass these checks via setAccessible(true), but is restricted by the SecurityManager / module system.",
        diagram: "Java Project Structure\n\nmyapp/\n├── Main.java          (package myapp;)\n└── utils/\n    └── Helper.java    (package myapp.utils;)\n\n   +----------------+\n   |   myapp        |\n   +----------------+\n         |\n   +----------------+\n   | myapp.utils    |\n   +----------------+   default members visible to both\n\nAccess from myapp.Main:\n  public  -> YES\n  default -> YES (same package)\n  protected -> YES (same package or subclass)\n  private -> NO",
        example: "// File: com/example/shape/Shape.java\npackage com.example.shape;\npublic class Shape {\n    public void draw() { System.out.println(\"Drawing\"); }\n    protected void resize() { System.out.println(\"Resizing\"); }\n}\n\n// File: com/example/Circle.java\npackage com.example;\nimport com.example.shape.Shape;\npublic class Circle extends Shape {\n    void demo() {\n        draw();          // OK - public\n        resize();        // OK - protected + subclass (different package)\n    }\n}",
        output: "Public members are visible everywhere. Default members are only visible within the same package. Protected members extend visibility to subclasses in any package. Private members are only visible inside the declaring class.",
        types: [
          {
            name: "public",
            definition: "The public modifier exposes a class or member to every other class in every package, with no restriction.",
            diagram: "  public class Api  <-- visible everywhere\n  public void serve()  <-- callable from any package",
            code: {
              language: "java",
              code: `public class App {
    public int version = 1;

    public void run() { System.out.println("running"); }
}

public class Main {
    public static void main(String[] args) {
        App a = new App();
        System.out.println(a.version);
        a.run();
    }
}`,
              caption: "Public members are accessible from anywhere."
            },
            notes: [
              "Top-level classes are usually declared public so they can be used by other packages.",
              "Public members form the documented API of a class; they should be carefully designed and stable.",
              "Exposing too much as public breaks encapsulation, so prefer the most restrictive modifier that still works."
            ],
            exampleOutput: "1\nrunning"
          },
          {
            name: "private",
            definition: "The private modifier hides a member so it is accessible only inside the class that declares it, enforcing the strongest encapsulation.",
            diagram: "  private int balance;  <-- visible only inside Account\n  same package: NO\n  subclass:     NO\n  other class:  NO",
            code: {
              language: "java",
              code: `class Account {
    private double balance;

    Account(double b) { balance = b; }

    public double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        Account a = new Account(100);
        System.out.println(a.getBalance());
    }
}`,
              caption: "balance is private; only getBalance() exposes it."
            },
            notes: [
              "private is the most restrictive access modifier and the default choice for fields.",
              "Accessor methods (getters/setters) are how external code interacts with private state.",
              "Inner classes can access the private members of their enclosing class and vice versa."
            ],
            exampleOutput: "100.0"
          },
          {
            name: "default (package-private)",
            definition: "When no access modifier is written, the member is package-private: visible to every class in the same package but hidden from all other packages.",
            diagram: "  String name;  <-- same package: YES\n                <-- other package: NO",
            code: {
              language: "java",
              code: `class Helper {
    String greet() { return "hello"; }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Helper().greet());
    }
}`,
              caption: "Helper and Main in the same package; greet() is default-accessible."
            },
            notes: [
              "Default access is sometimes written as 'package-private' to be explicit.",
              "Useful for grouping tightly coupled classes that should not be used outside the package.",
              "Subpackages are NOT considered part of the same package for access purposes."
            ],
            exampleOutput: "hello"
          },
          {
            name: "protected",
            definition: "The protected modifier makes a member visible within the same package AND to subclasses (even in other packages), giving subclasses controlled access to inherited internals.",
            diagram: "  protected int age;  <-- same package: YES\n                       <-- subclass (any pkg): YES\n                       <-- other pkg, non-subclass: NO",
            code: {
              language: "java",
              code: `class Person {
    protected String name = "Alice";
}

class Student extends Person {
    void show() { System.out.println(name); }
}

public class Main {
    public static void main(String[] args) {
        new Student().show();
    }
}`,
              caption: "name is protected; Student (a subclass) can read it."
            },
            notes: [
              "protected combines default access with subclass access, across package boundaries.",
              "A subclass can only access protected members through its own type, not through a sibling subclass instance.",
              "Top-level classes cannot be protected; only members and inner classes can."
            ],
            exampleOutput: "Alice"
          }
        ],
        advantages: [
          "Prevents naming conflicts between classes",
          "Enables modular code organization",
          "Enforces encapsulation across packages",
          "Supports controlled API exposure",
          "Makes large projects maintainable"
        ],
        applications: [
          "Standard library organization (java.util, java.io, java.net)",
          "Frameworks (org.springframework, com.fasterxml.jackson)",
          "Multi-team enterprise codebases",
          "Reusable libraries published as JAR files",
          "Java 9+ modules (a stronger form of packages)"
        ],
        conclusion: "Packages and access control are the foundations of code organization and encapsulation in Java. Packages group related types; access modifiers enforce who can see and use each member. Together they make large Java projects maintainable, secure, and reusable."
      }
    },
    viva: [
      { q: "What is a package in Java?", a: "A namespace that groups related classes and interfaces. Declared with the 'package' keyword; mapped to a directory." },
      { q: "What is the default access modifier?", a: "No keyword — also called package-private. Visible only within the same package." },
      { q: "Difference between default and protected?", a: "Default: same package only. Protected: same package OR subclass (even in another package)." },
      { q: "Can a top-level class be private?", a: "No. Top-level classes can be public or default (package-private) only." },
      { q: "What is the default package?", a: "The unnamed package — classes without a package declaration. Discouraged for real projects." },
      { q: "What is the use of the import statement?", a: "It brings types from other packages into scope so you can use their short names." }
    ],
    quiz: {
      mcqs: [
        { question: "Which access modifier is the most restrictive?", options: ["public", "protected", "default", "private"], answer: 3, explanation: "private is visible only inside the same class." },
        { question: "A member with no access modifier is:", options: ["public", "protected", "default (package-private)", "private"], answer: 2, explanation: "No modifier = package-private." },
        { question: "Which access allows subclass access from a different package?", options: ["private", "default", "protected", "package"], answer: 2, explanation: "protected allows subclass access across packages." },
        { question: "Top-level classes can be:", options: ["public or private", "public or default", "Only public", "Any modifier"], answer: 1, explanation: "Top-level classes can only be public or default." }
      ],
      trueFalse: [
        { statement: "A protected member is accessible from a subclass in a different package.", answer: true, explanation: "Protected allows access from subclasses regardless of package." },
        { statement: "Two classes in the same package can access each other's private members.", answer: false, explanation: "Private members are only accessible inside the declaring class." }
      ]
    },
    revision: {
      oneMin: "Package = namespace. private < default < protected < public.",
      fiveMin: [
        "private: same class only",
        "default: same package only",
        "protected: same package + subclasses",
        "public: everywhere",
        "Subpackages are independent"
      ],
      examDay: [
        "Define package and access modifiers",
        "Draw the visibility matrix",
        "Give one example per modifier",
        "Mention import statement and CLASSPATH"
      ],
      memoryTrick: "private < default < protected < public. Like rooms: bedroom < house < family < town.",
      faq: [
        { q: "Can a class be protected?", a: "No, only public or default at the top level. Inner classes can be protected." },
        { q: "What is the unnamed package?", a: "The default package used when no package declaration is given — discouraged in real projects." }
      ]
    },
    simulator: { type: "none" }
  }
];
