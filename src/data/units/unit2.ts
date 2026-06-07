import type { TopicContent } from "../types";

export const unit2Topics: TopicContent[] = [
  {
    id: "u2-inheritance",
    unitId: 2,
    index: 1,
    title: "Inheritance",
    tagline: "Acquiring properties from a parent class",
    oneLiner: "Inheritance is the OOP mechanism where one class (subclass/child) acquires the properties and behaviors of another class (superclass/parent) using the 'extends' keyword.",
    analogy: "Like a child inheriting traits from parents — eye color, language, surname — and adding their own uniqueness.",
    whyExists: "To promote code reuse, establish a class hierarchy, and support polymorphism.",
    whereUsed: ["Class hierarchies", "Frameworks", "Design patterns", "GUI libraries", "Domain modeling"],
    visualCue: "🧬",
    code: {
      language: "java",
      code: `class Animal {
    void speak() { System.out.println("..."); }
}
class Dog extends Animal {
    void speak() { System.out.println("Bark"); }
}`,
      caption: "Dog inherits from Animal and overrides speak()."
    },
    internalWorking: {
      steps: [
        "JVM creates a class hierarchy based on 'extends'.",
        "Subclass objects contain a hidden reference to parent (super).",
        "Method calls are resolved through vtable (dynamic dispatch).",
        "super() is implicitly called as first line of subclass constructor."
      ],
      memory: "On heap, a Dog object contains: child fields + parent fields + hidden 'super' pointer. Method code lives once in the method area, shared across all instances."
    },
    examAnswer: {
      twoMark: "Inheritance is the OOP concept where a child class acquires the properties and methods of a parent class using the 'extends' keyword in Java. It supports code reuse and establishes an 'is-a' relationship that enables runtime polymorphism.",
      thirteenMark: {
        intro: "Inheritance is one of the four pillars of OOP, enabling hierarchical class design and reuse.",
        definition: "Inheritance is the mechanism by which a class (subclass/derived/child) can inherit fields and methods from another class (superclass/base/parent). In Java, this is achieved using the 'extends' keyword. The relationship modeled is 'is-a' (Dog is-a Animal).",
        explanation: "Java supports single inheritance for classes (a class can extend only one parent) but multiple inheritance of type through interfaces. Subclasses inherit all non-private members (public, protected, and package-private members), can override methods, and can add new members. The 'super' keyword refers to the parent. Constructors are not inherited but are invoked via super() as the first line of a subclass constructor. If no super() is written, the compiler inserts a call to the no-argument parent constructor. Static methods are not inherited in the override sense; they are hidden, not overridden. The Object class sits at the root of every class hierarchy.",
        diagram: "        +-----------------+\n        |     Object      |  <- java.lang.Object (root)\n        +-----------------+\n                ^\n        +-----------------+\n        |     Animal      |  <- parent (superclass)\n        |  + speak()      |\n        +-----------------+\n           ^          ^\n   +-------------+  +-------------+\n   |     Dog     |  |     Cat     |  <- children (subclasses)\n   |  + speak()  |  |  + speak()  |\n   |  + fetch()  |  |             |\n   +-------------+  +-------------+",
        example: "class Vehicle {\n  int speed;\n  void run() { System.out.println(\"running\"); }\n}\nclass Car extends Vehicle {\n  int wheels = 4;\n  void honk() { System.out.println(\"beep\"); }\n}",
        conclusion: "Inheritance is a powerful mechanism for code reuse, hierarchical design, and runtime polymorphism. Use it only when a true 'is-a' relationship exists; otherwise prefer composition."
      },
      sixteenMark: {
        intro: "Inheritance enables hierarchical class relationships and is a foundation of OOP design, code reuse, and polymorphism.",
        definition: "Inheritance is the process by which a subclass inherits the structure and behavior (fields and methods) of its superclass, modeling an 'is-a' relationship between types.",
        explanation: "Java supports single inheritance between classes and multiple inheritance of type via interfaces. Private members are not inherited (they are still present in memory but inaccessible to subclasses). Protected members are accessible to subclasses and to the same package. Constructors are not inherited, but the parent's constructor is invoked via super() (implicitly or explicitly) as the first statement of a subclass constructor. The Object class is the root of the inheritance hierarchy — every class extends Object directly or transitively. Inheritance enables polymorphism: a superclass reference can hold a subclass object and call overridden methods, with the JVM dispatching to the actual object's method at runtime (dynamic dispatch). Static methods are not overridden; they are hidden. Fields are not overridden; they are shadowed. A class declared final cannot be extended. An abstract class may have abstract (no body) and concrete methods. Use inheritance when the relationship is genuinely 'is-a'; otherwise prefer composition (has-a) to keep coupling low.",
        working: "1. Source compiled by javac; subclass depends on parent bytecode.\n2. ClassLoader loads parent class first, then subclass into the method area.\n3. 'new Subclass()' allocates heap memory for the full object (parent + child fields).\n4. Subclass constructor invokes super() — parent portion is initialized first.\n5. The object's class pointer points to Subclass metadata, which includes a vtable.\n6. At method-call site, the JVM reads the actual object's class, looks up the method in the vtable, walks up the hierarchy if needed, and invokes the resolved method.\n7. Field access uses compile-time reference type (no polymorphism for fields).",
        diagram: "        Object  (java.lang.Object)\n          ^\n        Animal\n          ^\n   +-----+-----+\n   |           |\n  Dog         Cat\n\n   Heap (Dog object):\n   +------------------+\n   | Animal portion   | <-- super\n   |   - name         |\n   |   - age          |\n   +------------------+\n   | Dog portion      |\n   |   - breed        |\n   +------------------+\n   vtable -> [Object.equals, Object.hashCode,\n              Animal.speak, Dog.speak, Dog.fetch]",
        example: "class A {\n  void show() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  void show() { System.out.println(\"B\"); }\n}\nclass C extends B {\n  void show() { System.out.println(\"C\"); }\n}\nA ref = new C();\nref.show();",
        output: "C",
        advantages: [
          "Code reuse — common code lives in the parent",
          "Method overriding enables runtime polymorphism",
          "Establishes clear, intuitive class hierarchies",
          "Easier maintenance — changes in parent propagate to subclasses",
          "Supports generic algorithms via supertype references"
        ],
        applications: [
          "Class libraries and frameworks (e.g., Spring, JavaFX)",
          "GUI component hierarchies (Component, Container, JButton)",
          "Domain modeling with explicit 'is-a' relations",
          "Design patterns: Template Method, Strategy, Factory",
          "Java standard library: Throwable -> Exception -> IOException, etc."
        ],
        conclusion: "Inheritance is central to OOP in Java. It enables code reuse, polymorphism, and clean hierarchical design. Use it carefully — favor composition over inheritance unless a true 'is-a' relationship exists."
      }
    },
    viva: [
      { q: "Keyword for inheritance in Java?", a: "extends (for classes), implements (for interfaces)." },
      { q: "Is multiple inheritance of classes allowed?", a: "No, Java allows multiple inheritance only through interfaces." },
      { q: "What is the parent of every class?", a: "java.lang.Object." },
      { q: "Are private members inherited?", a: "They exist in the object but are not directly accessible to subclasses." },
      { q: "Can a final class be inherited?", a: "No, final classes cannot be extended." },
      { q: "What is the default super() call?", a: "If a constructor does not explicitly call super() or this(), the compiler inserts super() — a call to the parent's no-arg constructor." }
    ],
    quiz: {
      mcqs: [
        { question: "Inheritance in Java uses:", options: ["inherits", "extends", "implements", "super"], answer: 1, explanation: "extends for class inheritance." },
        { question: "How many parents can a class extend?", options: ["Unlimited", "Two", "One", "None"], answer: 2, explanation: "Single inheritance only." },
        { question: "What is the root class?", options: ["Class", "Root", "Object", "Base"], answer: 2, explanation: "java.lang.Object." },
        { question: "Which members are NOT inherited?", options: ["public", "protected", "private", "package-private"], answer: 2, explanation: "private members are not accessible to subclasses (though they exist)." },
        { question: "Is-a relationship is modeled by:", options: ["Composition", "Aggregation", "Inheritance", "Association"], answer: 2, explanation: "Inheritance models 'is-a'; composition models 'has-a'." }
      ],
      trueFalse: [
        { statement: "Constructors are inherited.", answer: false, explanation: "Not inherited; super() is used to invoke parent." },
        { statement: "Private members are inherited.", answer: false, explanation: "Private members are not accessible to subclasses." },
        { statement: "Multiple class inheritance is allowed in Java.", answer: false, explanation: "Not allowed; use interfaces instead." },
        { statement: "Java supports multilevel inheritance.", answer: true, explanation: "Yes — A -> B -> C is allowed." }
      ]
    },
    revision: {
      oneMin: "Inheritance = extends + super() + is-a relationship.",
      fiveMin: [
        "Single inheritance via extends",
        "Multiple via interfaces",
        "Object is the root",
        "super() for parent constructor (implicit if not written)",
        "Override vs overload",
        "Private members are not accessible (not inherited in the usable sense)"
      ],
      examDay: ["Define inheritance", "Types", "Example with Animal/Dog", "Inheritance vs Composition table"],
      memoryTrick: "Child extends parent; the parent gives, the child adds.",
      faq: [
        { q: "Can interfaces extend interfaces?", a: "Yes, using extends." },
        { q: "Inheritance vs Composition?", a: "Inheritance: is-a, tight coupling, compile-time binding. Composition: has-a, loose coupling, runtime flexibility." }
      ]
    },
    simulator: { type: "inheritance-tree", root: "Object", nodes: [{ name: "Animal", parent: "Object", methods: ["speak()"] }, { name: "Dog", parent: "Animal", methods: ["speak()", "fetch()"] }, { name: "Cat", parent: "Animal", methods: ["speak()"] }] }
  },
  {
    id: "u2-types-inheritance",
    unitId: 2,
    index: 2,
    title: "Types of Inheritance",
    tagline: "Single, Multilevel, Hierarchical, Multiple (via interfaces), Hybrid",
    oneLiner: "Java supports five types of inheritance: single, multilevel, hierarchical, multiple (via interfaces), and hybrid (combination).",
    analogy: "Like family trees — single (one parent), multilevel (grandparent → parent → child), hierarchical (one parent, many children), and hybrid (mix).",
    whyExists: "To provide flexibility in class design while avoiding the diamond problem.",
    whereUsed: ["Frameworks", "Domain modeling", "API design"],
    visualCue: "🌳",
    code: {
      language: "java",
      code: `// Single
class B extends A {}
// Multilevel
class C extends B {}
// Hierarchical
class B1 extends A {}
class B2 extends A {}
// Multiple (via interfaces)
class C implements I1, I2 {}
// Hybrid
class C extends B implements I1 {}`,
      caption: "Five types of inheritance in Java."
    },
    internalWorking: {
      steps: [
        "Compiler builds class hierarchy based on extends/implements.",
        "JVM maintains vtable for method dispatch.",
        "Multiple interfaces use interface method tables (itables) to resolve calls.",
        "Cyclic inheritance (A extends B, B extends A) is rejected at compile time."
      ]
    },
    examAnswer: {
      twoMark: "Java supports single, multilevel, hierarchical, multiple (via interfaces), and hybrid inheritance. Multiple inheritance of classes is not allowed in Java to avoid the diamond problem of state and method ambiguity.",
      thirteenMark: {
        intro: "Inheritance in Java comes in several types, each suited to different design needs and modeling scenarios.",
        definition: "Inheritance types describe the structure of class relationships: single (one parent, one child), multilevel (chain of inheritance), hierarchical (one parent, multiple children), multiple (one child, multiple parents — only via interfaces), hybrid (a combination of two or more types).",
        explanation: "Java does not support multiple inheritance of classes to avoid ambiguity (the diamond problem), where the compiler and runtime cannot decide which parent's method implementation to use. Java achieves multiple inheritance of type through interfaces — classes can implement several interfaces, combining their type contracts. Hybrid inheritance is achieved by combining class inheritance with interface implementation, e.g., a class extends one class and implements multiple interfaces. With Java 8 default methods, conflicts between interfaces must be explicitly resolved by the implementing class. Cyclic inheritance (A extends B, B extends A) is a compile-time error.",
        diagram: "Single:        Multilevel:     Hierarchical:    Multiple:        Hybrid:\n  A                A                  A          I1   I2        A      I1\n  |                |                  |           \\  /          |     /\n  B                B                  |            C             B    I2\n                   |               +--+--+                       |\n                   C               |     |                       C\n                                  B1    B2                     (extends B,\n                                                              implements I1)",
        example: "class A {}\nclass B extends A {}      // Single\nclass C extends B {}      // Multilevel (A -> B -> C)\nclass D extends A {}      // Hierarchical (A -> B, A -> D)\ninterface I1 { void m1(); }\ninterface I2 { void m2(); }\nclass E implements I1, I2 { // Multiple (via interfaces)\n  public void m1() {}\n  public void m2() {}\n}",
        conclusion: "Java's design of inheritance types balances expressiveness with safety. Multiple inheritance is supported safely through interfaces, eliminating the diamond problem for instance state."
      },
      sixteenMark: {
        intro: "Java provides five types of inheritance, balancing expressiveness, code reuse, and type safety.",
        definition: "Inheritance types categorize how classes and interfaces relate through 'extends' and 'implements'. The five types are single, multilevel, hierarchical, multiple, and hybrid.",
        explanation: "Single — one parent, one child. Multilevel — chain: A → B → C. Hierarchical — one parent, many children. Multiple — one class, multiple interfaces (since Java does not allow extending multiple classes). Hybrid — a combination, e.g., a class extending one class and implementing multiple interfaces. The diamond problem is avoided in Java because interfaces (pre-Java 8) had no instance state and no method bodies, so there was nothing ambiguous to inherit. With default methods in Java 8+, conflicts can occur when two interfaces have a default method with the same signature; the implementing class must override the method and may invoke a specific super version using InterfaceName.super.method(). Interface inheritance itself is multiple — an interface can extend several interfaces. Cyclic class inheritance is rejected at compile time.",
        working: "1. Compiler parses extends and implements clauses and builds a directed acyclic graph (DAG) of types.\n2. For each class, JVM builds a vtable (for class methods) and itables (for interface methods).\n3. When a method is invoked on a reference, the JVM consults the vtable for class methods and itables for interface methods.\n4. For default method conflicts, the compiler enforces resolution at compile time; class implementation wins over interface defaults.",
        diagram: "                Object\n                  ^\n                  A\n                  ^\n        +---------+---------+\n        |                   |\n        B                   C          // Hierarchical\n        ^\n        D                                  // Multilevel (A -> B -> D)\n\n        Multiple (interfaces):\n           I1   I2\n            \\   /\n             C                                // implements I1, I2\n\n        Hybrid:\n           A\n           ^\n           B  <- extends B\n           ^\n           C  <- extends B, implements I1, I2",
        example: "interface Printable { void print(); }\ninterface Showable  { void show();  }\nclass Document implements Printable, Showable {\n  public void print() { System.out.println(\"Printing\"); }\n  public void show()  { System.out.println(\"Showing\");  }\n}",
        output: "Document can act as both a Printable and a Showable type.",
        advantages: [
          "Flexibility in design — pick the type that fits the relationship",
          "Reuse through multiple paths (interfaces)",
          "Polymorphism across hierarchies",
          "Supports the diamond problem avoidance at language level"
        ],
        applications: [
          "Frameworks: frameworks expose a base class with multiple optional mixin interfaces",
          "Adapter pattern: implement many role interfaces",
          "Domain hierarchies: combine abstract base + role interfaces (e.g., Employee extends Person implements Payable, Trainable)",
          "Event systems: multiple listener interfaces"
        ],
        conclusion: "Understanding the five types of inheritance equips developers to choose the right structure for any class design, balancing reuse, polymorphism, and safety."
      }
    },
    viva: [
      { q: "Why doesn't Java support multiple class inheritance?", a: "To avoid the diamond problem (ambiguity in method resolution)." },
      { q: "How is multiple inheritance achieved in Java?", a: "Through interfaces, which can be implemented many at once." },
      { q: "What is the diamond problem?", a: "When a class inherits from two parents that both define the same method, the compiler cannot pick one." },
      { q: "Can an interface extend multiple interfaces?", a: "Yes — multiple interface inheritance is allowed." }
    ],
    quiz: {
      mcqs: [
        { question: "Multiple inheritance in Java is achieved using:", options: ["Classes", "Interfaces", "Abstract classes", "Packages"], answer: 1, explanation: "Interfaces only." },
        { question: "Which type is NOT supported by Java classes?", options: ["Single", "Multilevel", "Hierarchical", "Multiple (classes)"], answer: 3, explanation: "Multiple class inheritance is not allowed." },
        { question: "Hybrid inheritance combines:", options: ["Two classes", "Two interfaces", "Class + interface", "Nothing"], answer: 2, explanation: "Hybrid = class inheritance + interface implementation." },
        { question: "Cyclic inheritance is detected at:", options: ["Runtime", "Compile time", "Linking time", "Loading time"], answer: 1, explanation: "Cyclic class inheritance is a compile-time error." }
      ],
      trueFalse: [
        { statement: "Java supports hybrid inheritance.", answer: true, explanation: "Through combination of class and interfaces." },
        { statement: "An interface can extend multiple interfaces.", answer: true, explanation: "Yes — multiple interface inheritance is allowed." },
        { statement: "Two classes can extend each other.", answer: false, explanation: "Cyclic inheritance is illegal." }
      ]
    },
    revision: {
      oneMin: "5 types: single, multilevel, hierarchical, multiple (interfaces), hybrid.",
      fiveMin: [
        "Single: A->B",
        "Multilevel: A->B->C",
        "Hierarchical: A->B, A->C",
        "Multiple: implements I1, I2",
        "Hybrid: extends B + implements I1, I2"
      ],
      examDay: ["Draw all 5 types", "Explain diamond problem", "Show how hybrid is built"],
      memoryTrick: "S-M-H-M-H: Single, Multilevel, Hierarchical, Multiple, Hybrid.",
      faq: [
        { q: "Diamond problem?", a: "Ambiguity from multiple parents with the same method name." },
        { q: "Hybrid inheritance example?", a: "class C extends B implements I1, I2 — combines class and interface inheritance." }
      ]
    },
    simulator: { type: "inheritance-tree", root: "Object", nodes: [{ name: "A", parent: "Object", methods: ["foo()"] }, { name: "B", parent: "A", methods: ["foo()"] }, { name: "C", parent: "A", methods: [] }, { name: "D", parent: "B", methods: [] }] }
  },
  {
    id: "u2-abstract-class",
    unitId: 2,
    index: 3,
    title: "Abstract Classes",
    tagline: "Incomplete blueprints that subclasses must complete",
    oneLiner: "An abstract class in Java is a class declared with the 'abstract' keyword that cannot be instantiated and may contain abstract (unimplemented) methods.",
    analogy: "A partially filled form. The framework is there, but some fields must be filled in by whoever uses it.",
    whyExists: "To define a common base with some shared code and some contracts that subclasses must fulfill.",
    whereUsed: ["Template Method pattern", "Frameworks", "Plugin architectures", "Framework hooks"],
    visualCue: "🧩",
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
      caption: "Shape is abstract; Circle provides area()."
    },
    internalWorking: {
      steps: [
        "Abstract class loaded like any class but cannot be 'new'-ed directly.",
        "Subclass must implement all inherited abstract methods, or be declared abstract too.",
        "Abstract class can still have constructors — they run when a subclass is instantiated via super()."
      ]
    },
    examAnswer: {
      twoMark: "An abstract class in Java is declared with the 'abstract' keyword. It can have abstract (unimplemented) and concrete (implemented) methods. It cannot be instantiated and is meant to be subclassed; the first concrete subclass must implement all inherited abstract methods.",
      thirteenMark: {
        intro: "Abstract classes are useful when you want to share code among related classes while enforcing a contract for specific behavior.",
        definition: "An abstract class is a class that is declared abstract — it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed.",
        explanation: "Abstract classes can have constructors (invoked by subclasses via super()), instance variables, static members, abstract methods (no body, declared with abstract), and concrete methods. A subclass must provide implementations for all inherited abstract methods, unless it is itself declared abstract. Abstract classes are used to capture common state and behavior, while leaving specific behavior to subclasses. An abstract class can extend another abstract or concrete class. From Java 8, abstract classes can also have default and static methods (in the sense of instance/static concrete methods), and from Java 9, private concrete methods too. An abstract class cannot be final (they are opposites), and an abstract method cannot be final, static, or private.",
        diagram: "+-----------------------+\n| abstract class Shape  |\n+-----------------------+\n|  # color : String      |  <- shared state\n|  + Shape(c:String)    |  <- constructor\n|  + display() : void    |  <- concrete method\n|  + area() : double     |  <- ABSTRACT (no body)\n+-----------------------+\n          ^\n          |\n+-----------------------+\n| class Circle : Shape   |\n+-----------------------+\n|  - r : double          |\n|  + Circle(r)           |\n|  + area() : double     |  <- implements area()\n+-----------------------+",
        example: "abstract class Animal {\n  String name;\n  Animal(String n) { this.name = n; }\n  abstract void sound();                 // contract\n  void sleep() { System.out.println(\"zzz\"); }  // shared code\n}\nclass Dog extends Animal {\n  Dog() { super(\"Dog\"); }\n  void sound() { System.out.println(\"Bark\"); }\n}",
        conclusion: "Abstract classes are a key tool for partial abstraction and code reuse. They provide shared state and behavior plus a contract that subclasses must fulfill."
      },
      sixteenMark: {
        intro: "Abstract classes provide a balance between full abstraction (interfaces) and full implementation (concrete classes). They are the standard tool for partial abstraction in Java.",
        definition: "An abstract class is a class declared with the 'abstract' keyword, which may contain abstract methods (no body) and concrete methods. It cannot be instantiated directly; it is meant to be extended.",
        explanation: "Abstract classes support partial abstraction. They can have constructors (used by subclasses via super()), instance variables (state), static members, and any access modifier on members. Abstract methods have no body and must be implemented by the first concrete subclass — otherwise that subclass must also be abstract. An abstract class can extend another abstract or concrete class. An abstract class can implement interfaces without providing implementations of their abstract methods (the implementations are left to concrete subclasses). From Java 8, abstract classes can have default-style concrete methods; from Java 9, private concrete helper methods are allowed. An abstract class can be referenced by a variable whose type is the abstract class, enabling polymorphism. Abstract classes differ from interfaces in that they can hold non-static state and have constructors; interfaces (pre-Java 8) could not. An abstract class cannot be marked final (final means 'cannot extend'; abstract means 'must extend').",
        working: "1. Abstract class is compiled into a .class file just like a normal class; the class file's access flag has ACC_ABSTRACT set.\n2. At runtime, ClassLoader loads the abstract class into the method area.\n3. The JVM rejects 'new AbstractClass()' with InstantiationError at runtime; the compiler rejects it at compile time.\n4. Subclass constructor calls super() — parent constructor initializes shared state.\n5. Subclass overrides all abstract methods; only then can it be instantiated.\n6. Method calls on an abstract-typed reference are dispatched dynamically to the actual subclass implementation.",
        diagram: "Abstract hierarchy in memory:\n\n        Animal (abstract)         <-- cannot 'new Animal()'\n        +-- name : String\n        +-- sound() [abstract]\n        +-- sleep() [concrete]\n              ^\n              |\n        Dog (concrete)            <-- new Dog() OK\n        +-- sound() { Bark }",
        example: "abstract class BankAccount {\n  double balance;\n  BankAccount(double b) { this.balance = b; }\n  abstract double calculateInterest();\n  double getBalance() { return balance; }\n}\nclass SavingsAccount extends BankAccount {\n  SavingsAccount(double b) { super(b); }\n  double calculateInterest() { return balance * 0.04; }\n}\nclass CurrentAccount extends BankAccount {\n  CurrentAccount(double b) { super(b); }\n  double calculateInterest() { return balance * 0.02; }\n}",
        output: "calculateInterest differs per account type — common template, varying details.",
        advantages: [
          "Partial abstraction — share code, leave specifics to subclasses",
          "Code reuse for shared logic in a base class",
          "Enforces contracts on subclasses (abstract methods)",
          "Can hold state (instance variables)",
          "Can have constructors and access modifiers"
        ],
        applications: [
          "Template Method pattern — base defines skeleton, subclasses fill steps",
          "Adapter pattern with shared base",
          "GUI component base classes (Component, Widget)",
          "Game entity hierarchies (Entity, Player, Enemy)",
          "Frameworks providing hooks for clients to override"
        ],
        conclusion: "Abstract classes are the go-to tool for partial abstraction in Java, enabling shared code plus enforced contracts. Prefer interfaces when you only need a contract with no shared state, and abstract classes when you need both shared state and a contract."
      }
    },
    viva: [
      { q: "Can an abstract class have a constructor?", a: "Yes — used by subclasses via super()." },
      { q: "Can an abstract class have no abstract method?", a: "Yes — just declaring the class abstract is allowed." },
      { q: "Can an abstract class be final?", a: "No — they are opposites." },
      { q: "Can we instantiate an abstract class?", a: "No, not directly. We can subclass and instantiate the subclass." },
      { q: "Can abstract methods be private or static?", a: "No — abstract methods must be overridable." }
    ],
    quiz: {
      mcqs: [
        { question: "Abstract class can be instantiated:", options: ["Yes", "No", "Only with new", "Sometimes"], answer: 1, explanation: "Cannot be instantiated." },
        { question: "Abstract methods have:", options: ["A body", "No body", "Return type", "Static"], answer: 1, explanation: "No body." },
        { question: "An abstract class can contain:", options: ["Only abstract methods", "Only concrete methods", "Both", "Neither"], answer: 2, explanation: "Both abstract and concrete methods are allowed." },
        { question: "Which is true about abstract and final?", options: ["Can both apply", "Opposites", "Same", "Abstract implies final"], answer: 1, explanation: "final prevents extension; abstract requires it." }
      ],
      trueFalse: [
        { statement: "Abstract class can have main method.", answer: true, explanation: "Yes — you can run an abstract class with main()." },
        { statement: "Abstract class can have constructors.", answer: true, explanation: "Yes — used to initialize state for subclasses." },
        { statement: "An abstract method can be private.", answer: false, explanation: "abstract requires the method to be overridable." }
      ]
    },
    revision: {
      oneMin: "abstract class = partial abstraction, cannot instantiate, may have abstract + concrete methods.",
      fiveMin: [
        "Can have constructors",
        "Subclass must implement all abstract methods (or be abstract too)",
        "Can have state and concrete methods",
        "Cannot be final",
        "Static, private, final methods cannot be abstract"
      ],
      examDay: ["Abstract vs Interface comparison", "Real-world use case", "Constructors in abstract classes"],
      memoryTrick: "Abstract = blueprint with missing parts.",
      faq: [
        { q: "Can abstract be final?", a: "No — they are opposites." },
        { q: "When to use abstract class over interface?", a: "When you need shared state, constructors, or shared concrete behavior across related classes." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-interfaces",
    unitId: 2,
    index: 4,
    title: "Interfaces",
    tagline: "100% abstract contracts",
    oneLiner: "An interface in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types.",
    analogy: "An interface is like a job description. It states what tasks must be done but not how. Any employee (class) that takes the job must fulfill those tasks.",
    whyExists: "To support multiple inheritance of type, decoupling, and to define contracts for unrelated classes.",
    whereUsed: ["Callbacks (ActionListener)", "API contracts", "Dependency injection", "Strategy pattern", "Lambda targets (functional interfaces)"],
    visualCue: "📋",
    code: {
      language: "java",
      code: `interface Drawable {
    void draw();                   // abstract by default
    default void show() {          // default method (Java 8+)
        System.out.println("Showing");
    }
}
class Circle implements Drawable {
    public void draw() { System.out.println("Circle"); }
}`,
      caption: "Interface with abstract and default methods."
    },
    internalWorking: {
      steps: [
        "Interfaces have no instance state (only static final constants).",
        "Default methods provide backward-compatible evolution of interfaces.",
        "Static methods belong to the interface itself, not to implementing objects.",
        "JVM uses itables (interface method tables) for method dispatch on interfaces."
      ]
    },
    examAnswer: {
      twoMark: "An interface in Java is a blueprint of a class that contains abstract methods (and, from Java 8, default and static methods; from Java 9, private methods). A class uses 'implements' to adopt an interface, providing implementations for its abstract methods. Interfaces enable multiple inheritance of type.",
      thirteenMark: {
        intro: "Interfaces define contracts that classes can adopt, supporting multiple inheritance of type and decoupling between API and implementation.",
        definition: "An interface is a reference type in Java, declared with the 'interface' keyword, that can contain abstract methods, default methods, static methods, constants (implicitly public static final), and nested types. Classes implement interfaces using the 'implements' keyword.",
        explanation: "Before Java 8, interfaces could only have abstract methods and public static final fields. From Java 8, default methods (concrete methods with 'default' keyword) and static methods with bodies are allowed, providing backward-compatible evolution. From Java 9, private methods (concrete helpers) are allowed for code reuse within the interface. Interfaces support multiple inheritance of type: a class can implement many interfaces. All interface members are implicitly public — abstract methods are public abstract, fields are public static final, and nested types are public static. Marker interfaces (e.g., Serializable, Cloneable) have no members and just mark a class as having a property. A functional interface is an interface with exactly one abstract method and can be used as the target of a lambda expression (e.g., Runnable, Comparator).",
        diagram: "<<interface>>\n   Drawable\n   -----------------\n   + draw() : void         <- public abstract\n   + show() : void         <- public default\n   -----------------\n       ^ implements\n       |\n   +-----------+\n   |  Circle   |\n   +-----------+\n   | + draw()  |\n   +-----------+",
        example: "interface Vehicle {\n  void start();                            // abstract\n  default void honk() {                    // Java 8 default\n    System.out.println(\"Beep!\");\n  }\n  static int getWheels() { return 2; }     // Java 8 static\n}\nclass Car implements Vehicle {\n  public void start() { System.out.println(\"Car start\"); }\n}",
        conclusion: "Interfaces are a core Java feature for defining contracts and supporting multiple inheritance of type. They evolved from pure contracts (Java 7 and earlier) to flexible APIs with default and static methods."
      },
      sixteenMark: {
        intro: "Interfaces are Java's primary mechanism for defining type contracts and supporting multiple inheritance of type. They have evolved significantly from Java 7 to Java 9 and beyond.",
        definition: "An interface is a reference type that defines a contract. It can include abstract methods, default methods, static methods, constants, nested types, and (from Java 9) private methods.",
        explanation: "Interfaces support multiple inheritance: a class can implement many interfaces, combining their type contracts. They decouple API definition from implementation, allowing different implementations to be swapped. From Java 8, default methods allow interface evolution without breaking existing implementations — a new method can be added with a default body so old implementers still compile. Static methods in interfaces provide utility functions associated with the interface. Nested types in interfaces are implicitly public static. Interfaces can extend other interfaces (multiple interface inheritance is allowed, separated by commas). A class that implements an interface must provide public implementations for all abstract methods inherited, or be declared abstract. If two interfaces have a default method with the same signature, the implementing class must override the method and can resolve the conflict by calling InterfaceName.super.method(). A functional interface has exactly one abstract method and is the target type for lambda expressions (annotation @FunctionalInterface is optional but recommended).",
        working: "1. A class implementing an interface must override all abstract methods (or be abstract).\n2. Default methods are inherited as-is, or can be overridden by the implementing class.\n3. The JVM uses itables (interface method tables) for method dispatch on interfaces — separate from class vtables.\n4. When a method is called on an interface-typed reference, the JVM looks up the method in the object's class vtable, then falls back to itables if not found.\n5. Static interface methods are bound at compile time (like static class methods).",
        diagram: "<<interface>> I1     <<interface>> I2\n+----------------+   +----------------+\n| + m1() [abs]   |   | + m2() [abs]   |\n| + m3() [default]|  |                |\n+----------------+   +----------------+\n        \\                 /\n         \\               /\n          +-------+-------+\n                  |\n              class C\n         +----------------+\n         | + m1() {...}   |\n         | + m2() {...}   |\n         | + m3() {...}   | <- may override default\n         +----------------+",
        example: "interface A { default void hello() { System.out.println(\"A\"); } }\ninterface B { default void hello() { System.out.println(\"B\"); } }\nclass C implements A, B {\n  public void hello() { A.super.hello(); } // resolve default conflict\n}\nnew C().hello();",
        output: "A",
        advantages: [
          "Multiple inheritance of type",
          "Decouples API from implementation",
          "Supports lambda expressions (functional interfaces)",
          "Enables loose coupling and dependency inversion",
          "Backward-compatible evolution via default methods"
        ],
        applications: [
          "Java Collections framework (List, Set, Map, etc.)",
          "JDBC (Connection, Statement, ResultSet)",
          "Event listeners (ActionListener, MouseListener)",
          "Strategy pattern (sortable strategies as functional interfaces)",
          "Dependency injection frameworks (Spring beans implement injection interfaces)"
        ],
        conclusion: "Interfaces are essential to modern Java. They define contracts, support multiple inheritance of type, enable lambda-based functional programming, and are the backbone of many design patterns and frameworks."
      }
    },
    viva: [
      { q: "Difference between interface and abstract class?", a: "Abstract can have state and constructors; interface cannot (only static final fields). A class can implement many interfaces but extend only one class." },
      { q: "Can an interface extend another interface?", a: "Yes, using extends (multiple allowed)." },
      { q: "What is a functional interface?", a: "An interface with exactly one abstract method; can be the target of a lambda." },
      { q: "Can an interface have a constructor?", a: "No — interfaces cannot be instantiated." },
      { q: "Are interface variables final?", a: "Yes, all fields in an interface are implicitly public static final." }
    ],
    quiz: {
      mcqs: [
        { question: "Interface methods are by default:", options: ["public abstract", "private", "protected", "static"], answer: 0, explanation: "public abstract by default." },
        { question: "Class implements interface using:", options: ["extends", "implements", "inherits", "uses"], answer: 1, explanation: "implements." },
        { question: "Variables in an interface are:", options: ["public static final", "private", "protected", "transient"], answer: 0, explanation: "Implicitly public static final constants." },
        { question: "Which feature arrived in Java 8 for interfaces?", options: ["Generics", "Default methods", "private methods", "Module system"], answer: 1, explanation: "Default and static methods arrived in Java 8." }
      ],
      trueFalse: [
        { statement: "Interface can have constructors.", answer: false, explanation: "Interfaces cannot have constructors — they cannot be instantiated." },
        { statement: "A class can implement multiple interfaces.", answer: true, explanation: "Yes — Java's way to do multiple inheritance of type." },
        { statement: "Functional interface must have exactly one abstract method.", answer: true, explanation: "Yes — that is the definition of a functional interface." }
      ]
    },
    revision: {
      oneMin: "Interface = contract; supports multiple inheritance of type; pre-Java 8 = 100% abstract; from Java 8 = default + static methods.",
      fiveMin: [
        "abstract + default + static + (Java 9) private methods",
        "Multiple implements",
        "Functional interfaces (1 abstract method) for lambdas",
        "Marker interfaces (no methods, e.g., Serializable)",
        "Fields are public static final"
      ],
      examDay: ["Abstract vs Interface table", "Java 8 default methods", "Functional interface example"],
      memoryTrick: "Interface = a job description for unrelated classes.",
      faq: [
        { q: "Can interface be final?", a: "No — final would prevent implementing classes, but interface is meant to be implemented." },
        { q: "Can we have private methods in an interface?", a: "Yes, from Java 9 — used as concrete helpers for default methods." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-multiple-inheritance",
    unitId: 2,
    index: 5,
    title: "Multiple Inheritance using Interfaces",
    tagline: "Getting the best of multiple worlds",
    oneLiner: "Java does not support multiple inheritance of classes but allows a class to implement multiple interfaces, achieving multiple inheritance of type.",
    analogy: "A person can have multiple roles — Engineer, Musician, Parent. Each role is an interface; the person implements all of them.",
    whyExists: "To allow classes to inherit multiple type definitions without the diamond problem of state.",
    whereUsed: ["Frameworks", "Event handling", "Pluggable architectures", "Cross-cutting concerns"],
    visualCue: "🔗",
    code: {
      language: "java",
      code: `interface Printable { void print(); }
interface Showable { void show(); }
class A implements Printable, Showable {
    public void print() { System.out.println("Print"); }
    public void show() { System.out.println("Show"); }
}`,
      caption: "Class A implements two interfaces."
    },
    internalWorking: {
      steps: [
        "JVM builds interface method tables (itables) for each implemented interface.",
        "When a method is called, JVM walks the vtable, then the itables to find the implementation.",
        "Default method conflicts (Java 8+) are resolved at compile time by the implementing class."
      ]
    },
    examAnswer: {
      twoMark: "Java supports multiple inheritance through interfaces. A class can implement multiple interfaces, inheriting their type definitions (and from Java 8, default methods). This avoids the diamond problem of multiple class inheritance because interfaces do not carry instance state.",
      thirteenMark: {
        intro: "Java chose interfaces to support multiple inheritance safely, balancing flexibility with type safety.",
        definition: "Multiple inheritance using interfaces is the ability of a class to implement more than one interface, combining the type contracts and (from Java 8) default method implementations of all of them.",
        explanation: "A class can 'implement' any number of interfaces, separated by commas in the implements clause. It must provide implementations for all abstract methods of all interfaces (or be declared abstract itself). Since interfaces (pre-Java 8) had no instance state and no method bodies, there was no ambiguity. From Java 8, default methods can cause conflicts — when two interfaces have a default method with the same signature, the implementing class must override the method and may invoke a specific super version using InterfaceName.super.method(). Interfaces can also extend multiple other interfaces (multiple interface inheritance).",
        diagram: "        I1   I2\n         \\   /\n          \\ /\n           C          <- implements I1, I2\n\nConflict resolution:\n        I1 (default m())   I2 (default m())\n                \\         /\n                 \\       /\n                   C\n                   |\n              overrides m()\n              may call I1.super.m() or I2.super.m()",
        example: "interface Camera { void click(); }\ninterface Music  { void play();  }\nclass Phone implements Camera, Music {\n  public void click() { System.out.println(\"click\"); }\n  public void play()  { System.out.println(\"play\");  }\n}",
        conclusion: "Multiple inheritance via interfaces is Java's safe way to combine multiple type contracts. It avoids the diamond problem of state and supports role-based design."
      },
      sixteenMark: {
        intro: "Java deliberately excluded multiple class inheritance but compensated with powerful interface-based multiple inheritance.",
        definition: "Multiple inheritance using interfaces means a class can implement two or more interfaces, inheriting all the type definitions, abstract method signatures, and (from Java 8) default method bodies.",
        explanation: "Since interfaces do not have instance state (only constants), and methods (pre-Java 8) had no bodies, the diamond problem did not arise. With Java 8's default methods, conflicts are possible and must be resolved by the implementing class using InterfaceName.super.method(). Interface inheritance itself is multiple — an interface can extend several interfaces. This is the basis of role-based design: a class can take on several 'roles' by implementing several interfaces. A class can also implement a generic interface with concrete type arguments, e.g., class Box implements Comparable<Box>. Multiple interface inheritance also enables mixin-like patterns: classes can opt into additional behavior contracts without extending them.",
        working: "1. Class implementing multiple interfaces is compiled with one itable per interface.\n2. The JVM stores interface metadata in the method area.\n3. At a call site like I1 ref = new C(); ref.m();, the compiler emits invokeinterface bytecode.\n4. At runtime, the JVM walks the itables to find the implementation in the actual object's class.\n5. Default method conflicts are detected at compile time; the implementing class must explicitly override the conflicting method and disambiguate using InterfaceName.super.method() if needed.",
        diagram: "          interface I1   interface I2\n         +-------------+   +-------------+\n         | + m() [def] |   | + m() [def] |\n         +-------------+   +-------------+\n                  \\             /\n                   \\           /\n                  +----------------+\n                  |   class C       |\n                  | public void m() {|\n                  |   I1.super.m(); |\n                  | }                |\n                  +----------------+",
        example: "interface I1 { default void show() { System.out.println(\"I1\"); } }\ninterface I2 { default void show() { System.out.println(\"I2\"); } }\nclass C implements I1, I2 {\n  public void show() { I1.super.show(); } // disambiguate\n}\nnew C().show();",
        output: "I1",
        advantages: [
          "Combines multiple type contracts in one class",
          "No diamond problem with state",
          "Flexibility for class design",
          "Supports role-based and mixin-like patterns",
          "Enables lambda-based functional composition"
        ],
        applications: [
          "GUI components (Component + MouseListener + KeyListener)",
          "Cross-cutting concerns (Comparable + Serializable + Cloneable)",
          "Strategy pattern (multiple strategies as interfaces)",
          "Stream APIs (functional interfaces like Function, Predicate, Consumer)",
          "Adapter and Decorator patterns"
        ],
        conclusion: "Multiple inheritance through interfaces is the foundation of Java's flexible, modular type system. It allows classes to combine many role contracts safely while keeping state single-inherited."
      }
    },
    viva: [
      { q: "Why no multiple class inheritance in Java?", a: "To avoid ambiguity (diamond problem) with state and method resolution." },
      { q: "Can an interface extend multiple interfaces?", a: "Yes — separated by commas." },
      { q: "How is a default method conflict resolved?", a: "The implementing class must override the method and can call InterfaceName.super.method()." },
      { q: "Can a class extend one class and implement many interfaces?", a: "Yes — that is the typical hybrid inheritance pattern." }
    ],
    quiz: {
      mcqs: [
        { question: "Java supports multiple inheritance via:", options: ["Classes", "Interfaces", "Both", "None"], answer: 1, explanation: "Interfaces." },
        { question: "If two interfaces have a default method with the same name, the implementing class must:", options: ["Do nothing", "Override and resolve the conflict", "Inherit the first one", "Crash at runtime"], answer: 1, explanation: "Must override and resolve, possibly using InterfaceName.super.method()." },
        { question: "An interface can extend:", options: ["One class", "Multiple interfaces", "Only Object", "Nothing"], answer: 1, explanation: "Interfaces can extend multiple interfaces." }
      ],
      trueFalse: [
        { statement: "Diamond problem exists with interfaces in Java 8+.", answer: true, explanation: "Possible with default methods, but resolvable at compile time." },
        { statement: "A class can extend one class and implement many interfaces.", answer: true, explanation: "Yes — this is the typical Java pattern." }
      ]
    },
    revision: {
      oneMin: "Java = single class + multiple interface inheritance.",
      fiveMin: [
        "implements I1, I2",
        "Resolve default conflicts with InterfaceName.super.method()",
        "Interfaces can extend multiple interfaces",
        "Class + multiple interfaces = hybrid"
      ],
      examDay: ["Diagram I1, I2 -> C", "Diamond problem explanation", "Default method conflict example"],
      memoryTrick: "One parent class, many interface roles.",
      faq: [
        { q: "Can interface extend class?", a: "No — interfaces can only extend other interfaces." },
        { q: "What if two interfaces have same constant name?", a: "Compiler error — must use fully qualified InterfaceName.CONSTANT to disambiguate." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-dynamic-method-dispatch",
    unitId: 2,
    index: 6,
    title: "Dynamic Method Dispatch",
    tagline: "Runtime polymorphism via overridden methods",
    oneLiner: "Dynamic method dispatch is the mechanism by which a call to an overridden method is resolved at runtime, based on the actual object's type, not the reference type.",
    analogy: "A TV remote (reference) can control different TVs (objects). The button you press (method call) is the same, but the action depends on the actual TV brand.",
    whyExists: "To enable runtime polymorphism — a superclass reference can invoke subclass-specific behavior.",
    whereUsed: ["Polymorphism", "Strategy pattern", "Frameworks", "Plugin systems", "GUI event handling"],
    visualCue: "🎯",
    code: {
      language: "java",
      code: `class A { void show() { System.out.println("A"); } }
class B extends A { void show() { System.out.println("B"); } }
A obj = new B();
obj.show();   // B — dynamic dispatch`,
      caption: "Superclass reference, subclass object — overridden method runs."
    },
    internalWorking: {
      steps: [
        "JVM stores method tables (vtables) for each class.",
        "At call site, JVM uses the actual object's class vtable to find the method.",
        "Static, private, and final methods are not subject to dynamic dispatch (early/static binding)."
      ]
    },
    examAnswer: {
      twoMark: "Dynamic method dispatch is the process by which the JVM resolves a call to an overridden method at runtime, based on the actual type of the object, not the reference type. It enables runtime polymorphism and is implemented via the virtual method table (vtable).",
      thirteenMark: {
        intro: "Dynamic method dispatch is the heart of runtime polymorphism in Java.",
        definition: "Dynamic method dispatch is the mechanism by which a call to an overridden instance method is resolved at runtime, allowing the JVM to invoke the subclass's version of the method through a superclass (or interface) reference.",
        explanation: "When a superclass reference variable holds a subclass object, and an overridden method is called, the JVM looks at the actual object's class to decide which method to invoke. This is done via vtable (virtual method table) lookup — each class has a vtable mapping method names to actual code addresses. Static methods, private methods, and final methods are not subject to dynamic dispatch (they use static/early binding). The compiler emits 'invokevirtual' or 'invokeinterface' bytecode for dynamically dispatched calls. The actual object's class is read from the heap at call time, and the vtable is consulted to find the method to invoke. Field access is not polymorphic — the field is resolved at compile time based on the reference type.",
        diagram: "    A ref = new B();\n        ref.show();\n            |\n            v\n    +-----------------+\n    |   JVM step      |\n    |  1. read object's class (B)\n    |  2. look up show() in B's vtable\n    |  3. invoke B.show()\n    +-----------------+",
        example: "class Animal { void sound() { System.out.println(\"...\"); } }\nclass Dog extends Animal { void sound() { System.out.println(\"Bark\"); } }\nAnimal a = new Dog();  // upcast\na.sound();             // dynamic dispatch -> Dog.sound()",
        conclusion: "Dynamic method dispatch enables flexible, polymorphic behavior and is a cornerstone of OOP in Java. The JVM always picks the actual object's method, never the reference-type's."
      },
      sixteenMark: {
        intro: "Dynamic method dispatch enables runtime polymorphism, a key feature of OOP and the foundation of many design patterns and frameworks.",
        definition: "Dynamic method dispatch is the runtime resolution of which overridden method to invoke, based on the actual object's type rather than the reference type. It is also called late binding.",
        explanation: "Java uses late binding (dynamic dispatch) for instance methods that are non-static, non-final, and non-private. At each call site, the JVM consults the method table of the actual object's class, walking up the hierarchy if needed. Static methods, private methods, and final methods (including all methods in a final class) are statically bound — resolved at compile time. Constructors are also statically bound (invokespecial). A superclass reference can hold any subclass object (upcasting), and calls to overridden methods are dispatched to the actual object's class. Field access, however, is resolved at compile time based on the reference type — there is no field polymorphism. Interfaces use invokeinterface and itables for dispatch. The Object class methods (equals, hashCode, toString) are virtual and dispatched dynamically, which is why overriding them works as expected.",
        working: "1. Compiler emits invokevirtual (for class methods) or invokeinterface (for interface methods) bytecode at the call site.\n2. At runtime, the JVM reads the actual object's class from the object header on the heap.\n3. The method is looked up in that class's vtable (or itables for interfaces).\n4. If not found, the superclass's vtable is consulted (and so on up to Object).\n5. The address of the resolved method is called, with the object as 'this'.",
        diagram: "Reference type:  Animal   (compile-time view)\nActual type:     Dog      (runtime view)\n   ref.sound()\n        |\n        v\n   JVM resolves via vtable of Dog\n        |\n        v\n   Dog.sound() executes\n\n   Dog's vtable (simplified):\n   +--------+--------------------+\n   | name   | impl class         |\n   +--------+--------------------+\n   | equals | Object             |\n   | sound | Dog  <-- overridden |\n   | sleep | Animal             |\n   +--------+--------------------+",
        example: "interface Shape { double area(); }\nclass Circle implements Shape {\n  double r;\n  Circle(double r) { this.r = r; }\n  public double area() { return Math.PI * r * r; }\n}\nclass Square implements Shape {\n  double s;\n  Square(double s) { this.s = s; }\n  public double area() { return s * s; }\n}\nShape s = new Circle(5);\nSystem.out.println(s.area());  // 78.5398...",
        output: "78.53981633974483 (Circle's area is invoked through Shape reference)",
        advantages: [
          "Runtime polymorphism",
          "Flexible code: same interface, different behaviors",
          "Enables Strategy, State, Template Method, and many other patterns",
          "Supports late binding for framework extensibility"
        ],
        applications: [
          "GUI event handling (callback methods dispatched to actual listener)",
          "Plugin systems where a base class/interface is implemented by many plugins",
          "Frameworks like Spring that hold base-type references to user beans",
          "Collections.sort() sorting arbitrary Comparable implementations",
          "Java I/O streams (InputStream references hold subclass instances)"
        ],
        conclusion: "Dynamic method dispatch is the runtime engine that makes polymorphism work in Java. It allows supertype references to invoke subtype-specific behavior, which is essential for flexible, decoupled, and extensible designs."
      }
    },
    viva: [
      { q: "When is dynamic dispatch used?", a: "For instance methods that are overridden (not static, private, or final)." },
      { q: "What is not subject to dynamic dispatch?", a: "Static, private, and final methods — they are bound at compile time." },
      { q: "What bytecode is used for dynamic dispatch?", a: "invokevirtual (class) and invokeinterface (interface)." },
      { q: "Is field access polymorphic?", a: "No — fields are resolved at compile time based on reference type." }
    ],
    quiz: {
      mcqs: [
        { question: "Dynamic dispatch resolves at:", options: ["Compile time", "Runtime", "Both", "None"], answer: 1, explanation: "Runtime resolution." },
        { question: "Which methods are not dispatched dynamically?", options: ["static", "private", "final", "All of these"], answer: 3, explanation: "All three are statically bound." },
        { question: "Field access in Java is resolved at:", options: ["Compile time", "Runtime", "Both", "Never"], answer: 0, explanation: "Fields are not polymorphic — compile-time resolution by reference type." },
        { question: "Which bytecode is used for dynamic dispatch of instance methods?", options: ["invokestatic", "invokevirtual", "invokespecial", "getfield"], answer: 1, explanation: "invokevirtual (and invokeinterface for interfaces)." }
      ],
      trueFalse: [
        { statement: "Dynamic dispatch uses vtable lookup.", answer: true, explanation: "Yes — each class has a vtable mapping methods to actual code." },
        { statement: "Constructors use dynamic dispatch.", answer: false, explanation: "Constructors use invokespecial (static binding)." }
      ]
    },
    revision: {
      oneMin: "Dynamic dispatch = runtime, based on actual object type.",
      fiveMin: [
        "invokevirtual / invokeinterface",
        "vtable lookup",
        "Reference vs actual type",
        "Static/private/final = static binding"
      ],
      examDay: ["Diagram with vtable", "Example Animal a = new Dog()", "Why fields are not polymorphic"],
      memoryTrick: "Reference says Animal, object is Dog — Dog wins.",
      faq: [
        { q: "What is a vtable?", a: "Virtual method table — array of method pointers per class." },
        { q: "Why use itable for interfaces?", a: "Interfaces have multiple inheritance, so a single vtable is insufficient — JVM uses separate itables per interface." }
      ]
    },
    simulator: { type: "dynamic-dispatch", classes: [{ name: "A", methods: [{ name: "show", impl: "A.show()" }] }, { name: "B", methods: [{ name: "show", impl: "B.show()" }] }, { name: "C", methods: [{ name: "show", impl: "C.show()" }] }] }
  },
  {
    id: "u2-method-overloading",
    unitId: 2,
    index: 7,
    title: "Method Overloading",
    tagline: "Same method name, different signatures",
    oneLiner: "Method overloading is defining multiple methods with the same name but different parameter lists in the same class.",
    analogy: "A 'cut' function: cut(tree), cut(rope), cut(cake). Same word, different recipes based on input.",
    whyExists: "To provide multiple ways to perform similar operations with different inputs.",
    whereUsed: ["print() variants", "Constructors", "Utility methods", "Math operations", "Builder APIs"],
    visualCue: "🧮",
    code: {
      language: "java",
      code: `class MathUtil {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    String add(String a, String b) { return a + b; }
}`,
      caption: "add() overloaded for int, double, String."
    },
    internalWorking: {
      steps: [
        "Compiler picks the method based on argument types — compile-time polymorphism.",
        "Method signature includes name and parameter types; return type is not part of the signature for overloading."
      ]
    },
    examAnswer: {
      twoMark: "Method overloading in Java is defining multiple methods with the same name but different parameter lists (number, type, or order of parameters) within the same class. The compiler resolves which method to call based on the arguments at compile time — it is a form of compile-time (static) polymorphism.",
      thirteenMark: {
        intro: "Method overloading is a form of compile-time polymorphism that improves API usability.",
        definition: "Method overloading is the ability to define multiple methods with the same name in the same class, as long as their parameter lists differ in number, type, or order of types.",
        explanation: "Methods can be overloaded by changing the number of parameters, the types of parameters, or the order of types. The return type alone is not enough to distinguish overloaded methods — the compiler would not know which to call. Overloading is resolved at compile time using the most-specific applicable method. Constructors can also be overloaded. Overloading improves readability and usability of APIs (println has 10 overloads). It also plays nicely with autoboxing and varargs in Java 5+, though those can introduce ambiguity if not used carefully.",
        diagram: "add(int, int)        -> int\nadd(double, double)  -> double\nadd(String, String)  -> String\n\nCompile-time resolution:\n  add(1, 2)         -> add(int, int)\n  add(1.0, 2.0)     -> add(double, double)\n  add(\"a\", \"b\")     -> add(String, String)",
        example: "class Printer {\n  void print(int i)        { System.out.println(\"int: \"    + i); }\n  void print(double d)     { System.out.println(\"double: \" + d); }\n  void print(String s)     { System.out.println(\"String: \" + s); }\n  void print(String s, int n) { for (int i = 0; i < n; i++) System.out.println(s); }\n}",
        conclusion: "Method overloading is essential for clean, expressive APIs. The compiler picks the best match at compile time, so it is also called static polymorphism."
      },
      sixteenMark: {
        intro: "Overloading is one of the most commonly used features in Java for creating flexible, intuitive APIs.",
        definition: "Method overloading is the definition of multiple methods with the same name in a class, distinguished by their parameter lists. It is a form of compile-time (static) polymorphism.",
        explanation: "Overloaded methods must differ in number, type, or order of parameters. The return type is not part of the signature for overloading (you cannot have two methods that differ only in return type — the compiler would not know which to call). The compiler uses the most specific applicable method at the call site. Overloading is resolved at compile time (static binding). Constructors can be overloaded (this is how multiple initializations are provided). Varargs (since Java 5) lets you overload with variable number of arguments, treated as an array. Autoboxing and widening can interact in surprising ways: print(int) may be preferred over print(long) for an int argument; print(Object) might be picked for a String if no String overload exists. Method hiding is unrelated to overloading — it is when a subclass defines a static method with the same signature as a parent's static method.",
        working: "1. Compiler analyzes the call site and the types of the arguments.\n2. Phase 1: matching methods without autoboxing or varargs.\n3. Phase 2: matching with autoboxing/unboxing.\n4. Phase 3: matching with varargs.\n5. The most specific applicable method is selected.\n6. If no match, compile error. If ambiguous, compile error.",
        diagram: "Resolution phases for overloading:\n  print(5)\n     |\n     v\n  Phase 1: exact match (int -> int)?   YES -> use it\n  Phase 1: widening match (int -> long)?  not needed\n  Phase 2: autoboxing match (int -> Integer)?  not needed\n  Phase 3: varargs match (int -> int...)?  not needed\n\n  print(null)\n     |\n     v\n  Phase 1: exact match (null -> String) vs (null -> Object) -> ambiguous -> compile error",
        example: "class Box {\n  void draw()               { System.out.println(\"no-arg\"); }\n  void draw(int s)          { System.out.println(\"size: \" + s); }\n  void draw(int l, int b)   { System.out.println(\"lxb: \" + l + \"x\" + b); }\n  void draw(String... vals){ for (String v : vals) System.out.println(v); }\n}\nnew Box().draw();          // no-arg\nnew Box().draw(5);         // size: 5\nnew Box().draw(2, 3);      // lxb: 2x3\nnew Box().draw(\"a\",\"b\");   // varargs: a, b",
        output: "no-arg\nsize: 5\nlxb: 2x3\na\nb",
        advantages: [
          "Same name for related operations — intuitive API",
          "Compile-time safety (errors caught early)",
          "Readability — clients do not need to remember multiple method names",
          "Supports varargs and autoboxing combinations"
        ],
        applications: [
          "System.out.println (overloaded for many types)",
          "Constructors (multiple ways to initialize an object)",
          "Math operations (overloaded for primitive types)",
          "Builder pattern (wither-style overloaded setters)",
          "Stream APIs (collect, toList, etc.)"
        ],
        conclusion: "Overloading is a fundamental Java feature that makes APIs more usable and expressive. Remember: same name, different parameter list, compile-time resolution, return type alone is not enough."
      }
    },
    viva: [
      { q: "Can methods be overloaded by return type alone?", a: "No — parameter list must differ." },
      { q: "Is overloading runtime polymorphism?", a: "No — it is compile-time polymorphism (static binding)." },
      { q: "Can main() be overloaded?", a: "Yes, but only public static void main(String[]) is the entry point." },
      { q: "What is the difference between overloading and overriding?", a: "Overloading: same name, different params, compile-time, same class. Overriding: same signature, runtime, parent-child." }
    ],
    quiz: {
      mcqs: [
        { question: "Overloading differs in:", options: ["Return type", "Parameter list", "Access", "Name"], answer: 1, explanation: "Parameter list must differ." },
        { question: "Overloading is resolved at:", options: ["Compile time", "Runtime", "Both", "Never"], answer: 0, explanation: "Static binding at compile time." },
        { question: "Two methods that differ only in return type are:", options: ["Overloaded", "Overridden", "Compile error", "Hidden"], answer: 2, explanation: "Return type alone is not enough to overload." }
      ],
      trueFalse: [
        { statement: "main can be overloaded.", answer: true, explanation: "Yes — but only the standard signature is the entry point." },
        { statement: "Constructors can be overloaded.", answer: true, explanation: "Yes — constructor overloading is common." }
      ]
    },
    revision: {
      oneMin: "Same name + different params = overloading.",
      fiveMin: [
        "Compile-time",
        "Differs in number/type/order",
        "Return type alone is not enough",
        "Constructors can be overloaded"
      ],
      examDay: ["Example with print()", "Overloading vs overriding comparison"],
      memoryTrick: "Overloading = same name, different ingredients.",
      faq: [
        { q: "Can private methods be overloaded?", a: "Yes — overloading is independent of access modifier." },
        { q: "What about autoboxing and varargs?", a: "They are part of the overload resolution phases, and can cause ambiguity if not careful." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-method-overriding",
    unitId: 2,
    index: 8,
    title: "Method Overriding",
    tagline: "Redefining parent behavior in child",
    oneLiner: "Method overriding is redefining a parent class method in a subclass with the same signature to provide a specific implementation.",
    analogy: "A child learning to cook the family recipe differently — same dish name, new ingredients.",
    whyExists: "To allow subclasses to provide specific behavior for methods defined in the parent.",
    whereUsed: ["Polymorphism", "Frameworks", "GUI event handlers", "toString(), equals(), hashCode()"],
    visualCue: "🔁",
    code: {
      language: "java",
      code: `class Animal { void sound() { System.out.println("..."); } }
class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); }
}`,
      caption: "Dog overrides Animal's sound()."
    },
    internalWorking: {
      steps: [
        "Compiler checks signature match (and @Override annotation).",
        "JVM at runtime looks up the method in the actual object's class first via the vtable."
      ]
    },
    examAnswer: {
      twoMark: "Method overriding is redefining a parent class's method in a subclass with the same name and parameter list (and a compatible return type). It enables runtime polymorphism and is resolved at runtime via dynamic dispatch.",
      thirteenMark: {
        intro: "Overriding is the foundation of runtime polymorphism.",
        definition: "Method overriding is the process by which a subclass provides a specific implementation of a method already defined in its superclass. The method in the subclass must have the same name and parameter list as the parent's, and a compatible (same or covariant) return type.",
        explanation: "Overriding methods are resolved at runtime using dynamic dispatch. The @Override annotation is recommended for safety — the compiler will reject an attempt that does not actually override a parent method. Access modifier can be widened but not narrowed. Cannot override static methods (only hide them), private methods (not visible), or final methods. Constructors cannot be overridden. The overriding method can throw fewer or narrower checked exceptions than the parent. From Java 5, the return type can be covariant — a subtype of the parent's return type.",
        diagram: "Animal.sound()        [parent]\n    ^\n    | overridden by\n    v\nDog.sound()             [child]\n\nAt runtime:\n  Animal a = new Dog();\n  a.sound();  --> Dog.sound() runs (vtable lookup)",
        example: "class Vehicle {\n  void run() { System.out.println(\"running\"); }\n}\nclass Bike extends Vehicle {\n  @Override\n  void run() { System.out.println(\"Bike running safely\"); }\n}",
        conclusion: "Overriding enables flexible, polymorphic code. Use @Override for safety and follow the rules: same signature, same or covariant return, equal or wider access, no narrowing of checked exceptions."
      },
      sixteenMark: {
        intro: "Overriding is the primary mechanism for runtime polymorphism in Java. It lets subclasses tailor inherited behavior.",
        definition: "Method overriding is when a subclass provides a new implementation for a method inherited from its superclass, with the same name and parameter list, and a compatible return type.",
        explanation: "Overriding is enabled by virtual method dispatch in the JVM. Rules: 1) Same name and parameter list. 2) Return type can be the same or covariant (subclass). 3) Access level cannot be more restrictive (e.g., parent is protected, child can be public but not private). 4) Cannot override static methods (only hide), private methods (not visible to subclass), or final methods (or methods in a final class). 5) Use @Override annotation for safety. 6) Use super.method() to call the parent version. 7) The overriding method can throw fewer or narrower checked exceptions, but not new or broader ones. 8) Constructors cannot be overridden. The Object class methods (toString, equals, hashCode) are commonly overridden.",
        working: "1. Compiler checks method signature, return type compatibility, and access level.\n2. @Override ensures the compiler verifies the override actually matches a parent method.\n3. JVM at runtime uses vtable to find the actual method in the object's class.\n4. The actual object's class method is invoked (not the reference-type's).",
        diagram: "    Reference: Animal\n    Object:    Dog\n       animal.sound()\n           |\n           v\n       JVM: object's class is Dog\n           |\n           v\n       Dog.sound() runs\n\n  Vtable (Dog):\n  +--------+-----------------+\n  | method | impl            |\n  +--------+-----------------+\n  | sound  | Dog.sound       |  <-- overridden\n  | sleep  | Animal.sleep    |\n  | toString | Dog.toString  |  <-- overridden from Object\n  +--------+-----------------+",
        example: "class A {\n  void m() { System.out.println(\"A\"); }\n}\nclass B extends A {\n  @Override\n  void m() {\n    super.m();                 // call parent\n    System.out.println(\"B\");\n  }\n}\nnew B().m();",
        output: "A\nB",
        advantages: [
          "Runtime polymorphism",
          "Specific behavior in subclasses",
          "Pluggable behavior via base-type references",
          "Supports framework extension points"
        ],
        applications: [
          "Object.equals, hashCode, toString",
          "GUI event handlers (actionPerformed)",
          "Template Method pattern",
          "Strategy and State patterns",
          "Frameworks exposing extension points (Spring's ApplicationContext callbacks)"
        ],
        conclusion: "Overriding is essential for OOP and Java polymorphism. Follow the rules carefully, use @Override, and remember that the JVM picks the actual object's method at runtime."
      }
    },
    viva: [
      { q: "Difference: overloading vs overriding?", a: "Overloading: same name, different params, compile-time, same class. Overriding: same signature, runtime, parent-child." },
      { q: "Can we override a final method?", a: "No." },
      { q: "Can we override static methods?", a: "No — static methods are hidden, not overridden." },
      { q: "What is covariant return type?", a: "An overriding method can return a subtype of the parent's return type." }
    ],
    quiz: {
      mcqs: [
        { question: "Overriding requires:", options: ["Same name and params", "Same return", "Same access", "All"], answer: 3, explanation: "All three must hold (with covariant return)." },
        { question: "Can static methods be overridden?", options: ["Yes", "No, they are hidden", "Only in interfaces", "Sometimes"], answer: 1, explanation: "Static methods are hidden, not overridden." },
        { question: "An overriding method can throw:", options: ["More checked exceptions", "Fewer/narrower checked exceptions", "Any RuntimeException", "Only IOException"], answer: 1, explanation: "Can throw fewer or narrower checked exceptions." }
      ],
      trueFalse: [
        { statement: "Constructors can be overridden.", answer: false, explanation: "Constructors are not inherited." },
        { statement: "@Override is mandatory.", answer: false, explanation: "Optional but strongly recommended." }
      ]
    },
    revision: {
      oneMin: "Overriding = same signature, runtime polymorphism.",
      fiveMin: [
        "@Override annotation",
        "super.method() to call parent",
        "Cannot override final/static/private",
        "Same or covariant return type",
        "Access level cannot be narrower"
      ],
      examDay: ["Compare overloading vs overriding table", "Rules of overriding", "Covariant return type example"],
      memoryTrick: "Overriding = child changes the recipe but keeps the name.",
      faq: [
        { q: "Covariant return?", a: "Subclass return type can be a subtype of parent's." },
        { q: "Can an overriding method throw new checked exceptions?", a: "No — it can only throw the same, narrower, or fewer checked exceptions." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-super",
    unitId: 2,
    index: 9,
    title: "super Keyword",
    tagline: "Referring to the immediate parent",
    oneLiner: "The 'super' keyword in Java refers to the immediate superclass object and is used to access parent class members, constructors, and overridden methods.",
    analogy: "Like calling your father 'Dad' to differentiate from yourself. super = parent reference inside child.",
    whyExists: "To differentiate parent members from child members and to invoke parent constructors.",
    whereUsed: ["Constructor chaining", "Accessing overridden methods", "Accessing hidden fields"],
    visualCue: "👆",
    code: {
      language: "java",
      code: `class A { int x = 10; void m() { System.out.println("A.m"); } }
class B extends A {
    int x = 20;
    void m() { super.m(); System.out.println("B.m x=" + super.x); }
}`,
      caption: "Using super to access parent members."
    },
    internalWorking: {
      steps: [
        "Compiler generates super accessor bytecode (aload_0; getfield).",
        "At runtime, super refers to the parent portion of the object on the heap."
      ]
    },
    examAnswer: {
      twoMark: "The 'super' keyword in Java is a reference variable used to refer to the immediate parent class. It can access parent fields (super.field), call parent methods (super.method()), and invoke parent constructors (super(args)) as the first line of a subclass constructor.",
      thirteenMark: {
        intro: "super is essential for inheritance-based design — it gives the child a controlled window into the parent.",
        definition: "super is a reference to the immediate superclass. It is used to differentiate parent members from child members, to call parent constructors, and to invoke overridden methods.",
        explanation: "Three uses of super: 1) super.field — access hidden parent field (when child declares a same-named field). 2) super.method() — call the parent's overridden method (typically inside an override). 3) super(args) — call a specific parent constructor; this must be the first line in a subclass constructor. If neither super() nor this() is written, the compiler inserts super() with no args. super cannot be used in static context. super is implicitly 'this.super' — the parent portion of the current object.",
        diagram: "        super\n          |\n          v\n   +---------------+\n   |   Parent      |\n   +---------------+\n          ^\n          | extends\n   +---------------+\n   |   Child       |\n   |   this  ------+--> own fields/methods\n   |   super ------+--> parent fields/methods\n   +---------------+",
        example: "class Animal {\n  String name = \"Animal\";\n  Animal() { System.out.println(\"Animal ctor\"); }\n}\nclass Dog extends Animal {\n  String name = \"Dog\";\n  Dog() {\n    super();                      // call parent constructor\n    System.out.println(\"Dog ctor\");\n    System.out.println(\"super.name = \" + super.name);\n  }\n}",
        conclusion: "super is vital for controlling inheritance behavior in Java. It enables constructor chaining, explicit access to parent members, and clean override-then-extend patterns."
      },
      sixteenMark: {
        intro: "super provides controlled access to parent class members from a subclass. It is the bridge between child and parent.",
        definition: "super is a built-in reference in Java that refers to the immediate superclass. It is used to access parent's fields, methods, and constructors that may be hidden or overridden in the child class.",
        explanation: "super is implicitly available in every non-static method of a subclass. It cannot be assigned another value. It is used in three ways: 1) super(args) — invoke parent constructor; must be the first statement in the subclass constructor. If the parent has no no-arg constructor, the subclass must explicitly call super(args). 2) super.method() — call parent method, typically inside an override to extend behavior. 3) super.field — access a parent field when the child hides it with a same-named field. super cannot be used in a static context (since it is an instance reference). It also cannot be used in main(). this() and super() cannot both appear in the same constructor (only one can be the first line).",
        working: "1. super is resolved at compile time to the parent class type.\n2. At runtime, it accesses the parent portion of the object's memory.\n3. super(args) invokes the matching parent constructor (resolved by argument types).\n4. The compiler ensures super() or this() is the first line of a constructor if used.\n5. If neither is used, the compiler inserts super() — a no-arg call.",
        diagram: "       Dog object on heap\n       +------------------+\n       | parent portion   | <-- super refers here\n       |   - name (parent)|\n       |   - age          |\n       +------------------+\n       | child portion    |\n       |   - breed        |\n       +------------------+",
        example: "class A {\n  int i = 1;\n  A(int i) { this.i = i; }\n}\nclass B extends A {\n  int i = 2;\n  B(int i) { super(i); }                  // pass i to parent ctor\n  void show() {\n    System.out.println(\"super.i = \" + super.i);\n    System.out.println(\"this.i  = \" + this.i);\n  }\n}\nnew B(10).show();",
        output: "super.i = 10\nthis.i  = 2",
        advantages: [
          "Explicit parent access — disambiguates hidden members",
          "Avoids naming conflicts between parent and child fields/methods",
          "Enables constructor chaining",
          "Allows subclass to extend rather than fully replace parent behavior"
        ],
        applications: [
          "Constructor chaining (mandatory when parent has no no-arg constructor)",
          "Calling base class behavior in Template Method pattern",
          "Field hiding — accessing parent field via super.field",
          "Method overriding that extends the parent's behavior (super.method() inside override)"
        ],
        conclusion: "super is a key part of inheritance, providing controlled access to parent functionality. It is the bridge that lets subclasses reuse and extend — not blindly replace — parent behavior."
      }
    },
    viva: [
      { q: "Can super be used in static methods?", a: "No — super refers to instance context." },
      { q: "Is super() mandatory?", a: "Compiler inserts a no-arg super() if not written explicitly." },
      { q: "Can this() and super() be in the same constructor?", a: "No — only one can be the first line." },
      { q: "What if the parent has no no-arg constructor?", a: "Subclass must explicitly call super(args) as the first line." }
    ],
    quiz: {
      mcqs: [
        { question: "super refers to:", options: ["Child", "Parent class", "Object", "Class"], answer: 1, explanation: "Immediate parent." },
        { question: "super() must be:", options: ["Last line", "First line", "Middle", "Optional always"], answer: 1, explanation: "First line in a constructor (or else compiler error)." },
        { question: "super can be used in:", options: ["Static methods", "Instance methods", "Both", "Neither"], answer: 1, explanation: "Instance context only — not in static methods." }
      ],
      trueFalse: [
        { statement: "super() must be first line.", answer: true, explanation: "Yes, in constructors." },
        { statement: "this() and super() can be in the same constructor.", answer: false, explanation: "No — they conflict on the first line." }
      ]
    },
    revision: {
      oneMin: "super = parent reference inside child.",
      fiveMin: [
        "super.field — access hidden field",
        "super.method() — call overridden parent method",
        "super(args) — call parent constructor (first line)"
      ],
      examDay: ["Constructor chaining example", "super vs this comparison"],
      memoryTrick: "super = Senior, parent.",
      faq: [
        { q: "Can we use this() and super() in same constructor?", a: "No — only one can be the first line." },
        { q: "What if parent has no no-arg constructor?", a: "Subclass MUST explicitly call super(args)." }
      ]
    },
    simulator: { type: "none" }
  },
  {
    id: "u2-packages",
    unitId: 2,
    index: 10,
    title: "Packages",
    tagline: "Organizing classes into namespaces",
    oneLiner: "A package in Java is a namespace that organizes a set of related classes and interfaces, providing access protection and avoiding name conflicts.",
    analogy: "Like folders on your computer — java.util, java.io, etc. — each contains related files.",
    whyExists: "To avoid class name conflicts, organize code, and provide access control.",
    whereUsed: ["Standard library", "Frameworks", "Project structure", "Modular programming"],
    visualCue: "📦",
    code: {
      language: "java",
      code: `package com.example.util;
import java.util.List;
public class Helper { /* ... */ }`,
      caption: "Declaring and using packages."
    },
    internalWorking: {
      steps: [
        "Compiler maps package to directory structure.",
        "ClassLoader loads classes from classpath based on fully qualified name.",
        "java.lang is auto-imported; no import needed for its classes."
      ]
    },
    examAnswer: {
      twoMark: "A package in Java is a group of related classes and interfaces declared with the 'package' keyword. Packages provide access protection, namespace management, and easier organization. Java has built-in packages (java.lang, java.util, java.io) and allows user-defined packages.",
      thirteenMark: {
        intro: "Packages are essential for organizing Java code and avoiding name collisions.",
        definition: "A package is a namespace that groups related types. Java has built-in packages (java.lang, java.util, java.io) and allows user-defined packages.",
        explanation: "Use 'package' to declare; 'import' to use. Packages map to directory structure — the package name corresponds to folder path on disk. They prevent name conflicts and provide access control (default = package-private). The fully qualified name is packageName.className. The java.lang package is auto-imported, so classes like String, Object, Math need no import. Static import (Java 5+) lets you import static members of a class, so you can write sqrt(2) instead of Math.sqrt(2).",
        diagram: "java.lang  -> String, Object, Math, System\njava.util  -> List, Map, Collections, ArrayList\njava.io    -> File, InputStream, BufferedReader\njava.sql   -> Connection, Statement, ResultSet\n\nUser packages:\ncom.example.util  -> Helper, StringUtils\ncom.example.app   -> Main, AppConfig",
        example: "// File: com/example/util/Helper.java\npackage com.example.util;\npublic class Helper {\n  public static int square(int x) { return x * x; }\n}\n\n// File: com/example/app/Main.java\npackage com.example.app;\nimport com.example.util.Helper;\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println(Helper.square(5));   // 25\n  }\n}",
        conclusion: "Packages are fundamental for large-scale Java development, providing namespace management, access control, and code organization."
      },
      sixteenMark: {
        intro: "Packages provide modularity, namespace management, and access control in Java. They are the basis of Java's modular code organization.",
        definition: "A package is a collection of related classes and interfaces grouped under a unique namespace, declared with the 'package' keyword at the top of a source file.",
        explanation: "Packages are declared with the 'package' keyword (must be the first statement in the file, before any import). Classes are imported with 'import'. The package name maps to a directory: package com.example.util -> folder com/example/util/. java.lang is auto-imported. There are four access levels: private (class only), default/package-private (package), protected (package + subclasses in other packages), and public (all). Packages can be sealed for security (signed JAR with package sealing). Java 9 introduced the module system on top of packages for stronger encapsulation. Static import (since Java 5) imports static members: import static java.lang.Math.*; then you can use sqrt(2) directly. Fully qualified names can always be used instead of import.",
        working: "1. Compiler verifies the package declaration matches the directory structure.\n2. Compiler generates .class files with the fully qualified class name.\n3. ClassLoader uses the classpath to find .class files at runtime.\n4. JVM resolves class references via the fully qualified name.\n5. Package-private access is enforced by the compiler and JVM verifier.",
        diagram: "src/\n  com/example/app/Main.java     (package com.example.app)\n  com/example/util/Helper.java  (package com.example.util)\n\nCompiled output:\n  classes/com/example/app/Main.class\n  classes/com/example/util/Helper.class\n\nJAR packaging:\n  myapp.jar\n   - com/example/app/Main.class\n   - com/example/util/Helper.class\n   - META-INF/MANIFEST.MF",
        example: "import java.util.ArrayList;\nimport java.util.*;                     // wildcard import\nimport static java.lang.Math.PI;        // static import\n\npublic class Test {\n  public static void main(String[] args) {\n    ArrayList<String> list = new ArrayList<>();\n    System.out.println(\"PI = \" + PI);   // PI, not Math.PI\n    System.out.println(\"Count: \" + list.size());\n  }\n}",
        output: "PI = 3.141592653589793\nCount: 0",
        advantages: [
          "Namespace management — avoid name conflicts",
          "Access control (package-private)",
          "Modular code organization",
          "Reusability — packages can be distributed as JARs",
          "Encapsulation — hide internal classes"
        ],
        applications: [
          "Java standard library (java.lang, java.util, java.io, java.nio, java.sql, java.net)",
          "Spring Framework (org.springframework.*)",
          "Apache Commons (org.apache.commons.*)",
          "Enterprise projects — typically use reverse-domain naming (com.company.project.*)",
          "Module system (Java 9+) for stronger encapsulation"
        ],
        conclusion: "Packages are a foundational concept for building maintainable, large-scale Java applications. They provide namespace, organization, and access control — the building blocks of modular Java code."
      }
    },
    viva: [
      { q: "Default package?", a: "No-name package; classes have no package declaration (discouraged)." },
      { q: "Auto-imported package?", a: "java.lang is auto-imported." },
      { q: "What is a static import?", a: "import static java.lang.Math.*; — lets you use static members without class prefix." },
      { q: "Can two classes in same package have the same name?", a: "No — within a package, class names must be unique." }
    ],
    quiz: {
      mcqs: [
        { question: "Package declaration must be:", options: ["First statement", "Last", "Middle", "Optional"], answer: 0, explanation: "Must be first statement (after comments)." },
        { question: "Which package is auto-imported?", options: ["java.util", "java.io", "java.lang", "java.sql"], answer: 2, explanation: "java.lang is auto-imported." },
        { question: "Static import is used for:", options: ["Classes", "Static members", "Packages", "JARs"], answer: 1, explanation: "Static import imports static members (methods/fields)." }
      ],
      trueFalse: [
        { statement: "java.lang is auto-imported.", answer: true, explanation: "Yes — String, Object, Math, etc. need no import." },
        { statement: "Two classes in the same package can have the same simple name.", answer: false, explanation: "Class names must be unique within a package." }
      ]
    },
    revision: {
      oneMin: "Package = namespace, organizes classes.",
      fiveMin: [
        "package declaration (first statement)",
        "import (types) and import static (static members)",
        "Maps to folder structure",
        "java.lang is auto-imported"
      ],
      examDay: ["Access modifiers table", "Built-in packages list", "Static import example"],
      memoryTrick: "Packages = folders for classes.",
      faq: [
        { q: "Can two classes in same package have same name?", a: "No — names must be unique within a package." },
        { q: "What is the unnamed (default) package?", a: "Classes with no package declaration belong to the default package — discouraged in real projects." }
      ]
    },
    simulator: { type: "none" }
  }
];
