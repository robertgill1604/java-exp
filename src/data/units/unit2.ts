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
      ]
    },
    examAnswer: {
      twoMark: "Inheritance is the OOP concept where a child class acquires the properties and methods of a parent class using the 'extends' keyword in Java. It supports code reuse and polymorphism.",
      thirteenMark: {
        intro: "Inheritance is one of the four pillars of OOP, enabling hierarchical class design.",
        definition: "Inheritance is the mechanism by which a class (subclass/derived/child) can inherit fields and methods from another class (superclass/base/parent). In Java, this is achieved using the 'extends' keyword.",
        explanation: "Java supports single inheritance for classes (a class can extend only one parent) but multiple inheritance of type through interfaces. Subclasses inherit all non-private members, can override methods, and add new members. The 'super' keyword refers to the parent. Constructors are not inherited but are invoked via super().",
        diagram: "Animal (parent)\n  + speak()\n   |\n   +-- Dog extends Animal\n   |     + speak()  // override\n   +-- Cat extends Animal\n         + speak()",
        example: "class Vehicle { int speed; void run() {} } class Car extends Vehicle { int wheels = 4; }",
        conclusion: "Inheritance is a powerful mechanism for code reuse and polymorphism in Java."
      },
      sixteenMark: {
        intro: "Inheritance enables hierarchical class relationships and is a foundation of OOP design.",
        definition: "Inheritance is the process by which a subclass inherits the structure and behavior (fields and methods) of its superclass.",
        explanation: "Java supports single inheritance between classes and multiple inheritance of type via interfaces. Private members are not inherited. Constructors are not inherited, but the parent's constructor is invoked via super(). The Object class is the root of the inheritance hierarchy. Inheritance enables polymorphism, where a superclass reference can hold a subclass object and call overridden methods.",
        working: "1. Subclass loaded by ClassLoader.\n2. Subclass object created on heap.\n3. Subclass object contains a hidden 'super' pointer to parent portion.\n4. super() runs parent constructor first.\n5. Method dispatch: JVM looks up method in actual object's class first, then walks up the hierarchy.",
        diagram: "Object\n  ↑\nAnimal\n  ↑\nDog",
        example: "class A { void show() { System.out.println(\"A\"); } } class B extends A { void show() { System.out.println(\"B\"); } } A a = new B(); a.show(); // B",
        output: "B",
        advantages: [
          "Code reuse",
          "Method overriding for polymorphism",
          "Establishes clear hierarchies",
          "Easier maintenance"
        ],
        applications: [
          "Class libraries and frameworks",
          "GUI component hierarchies",
          "Domain modeling",
          "Design patterns (Template Method)"
        ],
        conclusion: "Inheritance is central to OOP in Java. It enables code reuse, polymorphism, and clean hierarchical design."
      }
    },
    viva: [
      { q: "Keyword for inheritance in Java?", a: "extends (for classes), implements (for interfaces)." },
      { q: "Is multiple inheritance of classes allowed?", a: "No, Java allows multiple inheritance only through interfaces." },
      { q: "What is the parent of every class?", a: "java.lang.Object." }
    ],
    quiz: {
      mcqs: [
        { question: "Inheritance in Java uses:", options: ["inherits", "extends", "implements", "super"], answer: 1, explanation: "extends for class inheritance." },
        { question: "How many parents can a class extend?", options: ["Unlimited", "Two", "One", "None"], answer: 2, explanation: "Single inheritance only." },
        { question: "What is the root class?", options: ["Class", "Root", "Object", "Base"], answer: 2, explanation: "java.lang.Object." }
      ],
      trueFalse: [
        { statement: "Constructors are inherited.", answer: false, explanation: "Not inherited; super() is used to invoke parent." },
        { statement: "Private members are inherited.", answer: false, explanation: "Private members are not accessible to subclasses." }
      ]
    },
    revision: {
      oneMin: "Inheritance = extends + super() + is-a relationship.",
      fiveMin: [
        "Single inheritance via extends",
        "Multiple via interfaces",
        "Object is the root",
        "super() for parent",
        "Override vs overload"
      ],
      examDay: ["Define inheritance", "Types", "Example with Animal/Dog"],
      memoryTrick: "Child extends parent; the parent gives, the child adds.",
      faq: [{ q: "Can interfaces extend interfaces?", a: "Yes, using extends." }]
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
      steps: ["Compiler builds class hierarchy based on extends/implements.", "JVM maintains vtable for method dispatch.", "Multiple interfaces use interface method tables to resolve conflicts."]
    },
    examAnswer: {
      twoMark: "Java supports single, multilevel, hierarchical, multiple (via interfaces), and hybrid inheritance. Multiple inheritance of classes is not allowed in Java to avoid the diamond problem.",
      thirteenMark: {
        intro: "Inheritance in Java comes in several types, each suited to different design needs.",
        definition: "Inheritance types describe the structure of class relationships: single (one parent, one child), multilevel (chain), hierarchical (one parent, multiple children), multiple (one child, multiple parents — only via interfaces), hybrid (combination of types).",
        explanation: "Java does not support multiple inheritance of classes to avoid ambiguity (the diamond problem). It achieves multiple inheritance of type through interfaces. Hybrid inheritance is achieved by combining class inheritance with interface implementation.",
        diagram: "Single: A → B\nMultilevel: A → B → C\nHierarchical: A → B, A → C\nMultiple: B → C, I1 → C\nHybrid: mix of the above",
        example: "class A {} class B extends A {} class C extends B {} // Multilevel",
        conclusion: "Java's design of inheritance types balances flexibility with safety."
      },
      sixteenMark: {
        intro: "Java provides five types of inheritance, balancing expressiveness and safety.",
        definition: "Inheritance types categorize how classes and interfaces relate through 'extends' and 'implements'.",
        explanation: "Single — one parent, one child. Multilevel — chain: A→B→C. Hierarchical — one parent, many children. Multiple — one class, multiple interfaces (since Java does not allow extending multiple classes). Hybrid — combination, e.g., a class extending one class and implementing multiple interfaces. The diamond problem is avoided in Java because interfaces (pre-Java 8) had no state and no method bodies. With default methods in Java 8+, conflicts must be explicitly resolved.",
        working: "Compiler generates method resolution tables (vtables) and interface tables. For multiple interfaces with same default method, the implementing class must override and resolve.",
        diagram: "Object\n  ↑\nA\n  ↑\nB  C    // hierarchical\n  ↑\nD         // multilevel",
        example: "interface Printable { void print(); } interface Showable { void show(); } class A implements Printable, Showable { public void print() {} public void show() {} }",
        output: "Multiple inheritance via interfaces works.",
        advantages: [
          "Flexibility in design",
          "Reuse through multiple paths",
          "Polymorphism across hierarchies"
        ],
        applications: ["Frameworks", "Adapter pattern", "Domain hierarchies"],
        conclusion: "Understanding the five types of inheritance equips developers to choose the right structure for any class design."
      }
    },
    viva: [
      { q: "Why doesn't Java support multiple class inheritance?", a: "To avoid the diamond problem (ambiguity)." },
      { q: "How is multiple inheritance achieved in Java?", a: "Through interfaces." }
    ],
    quiz: {
      mcqs: [
        { question: "Multiple inheritance in Java is achieved using:", options: ["Classes", "Interfaces", "Abstract classes", "Packages"], answer: 1, explanation: "Interfaces only." },
        { question: "Which type is NOT supported by Java classes?", options: ["Single", "Multilevel", "Hierarchical", "Multiple (classes)"], answer: 3, explanation: "Multiple class inheritance is not allowed." }
      ],
      trueFalse: [
        { statement: "Java supports hybrid inheritance.", answer: true, explanation: "Through combination of class and interfaces." }
      ]
    },
    revision: { oneMin: "5 types: single, multilevel, hierarchical, multiple (interfaces), hybrid.", fiveMin: ["Single: A→B", "Multilevel: A→B→C", "Hierarchical: A→B,C", "Multiple: implements I1,I2", "Hybrid: mix"], examDay: ["Draw all 5", "Explain diamond problem"], memoryTrick: "S-M-H-M-H: Single, Multilevel, Hierarchical, Multiple, Hybrid.", faq: [{ q: "Diamond problem?", a: "Ambiguity from multiple parents with same method." }] },
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
    whereUsed: ["Template Method pattern", "Frameworks", "Plugin architectures"],
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
      steps: ["Abstract class loaded like any class but cannot be 'new'-ed directly.", "Subclass must implement all abstract methods, or be declared abstract too."]
    },
    examAnswer: {
      twoMark: "An abstract class in Java is declared with the 'abstract' keyword. It can have abstract (unimplemented) and concrete (implemented) methods. It cannot be instantiated and is meant to be subclassed.",
      thirteenMark: {
        intro: "Abstract classes are useful when you want to share code among related classes while enforcing a contract.",
        definition: "An abstract class is a class that is declared abstract — it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed.",
        explanation: "Abstract classes can have constructors, instance variables, abstract methods, and concrete methods. A subclass must provide implementations for all inherited abstract methods, unless it is itself declared abstract. Abstract classes are used to capture common state and behavior, while leaving specific behavior to subclasses.",
        diagram: "Shape (abstract)\n  + area() : double    [abstract]\n  + display()          [concrete]",
        example: "abstract class Animal { abstract void sound(); void sleep() { System.out.println(\"zzz\"); } } class Dog extends Animal { void sound() { System.out.println(\"Bark\"); } }",
        conclusion: "Abstract classes are a key tool for partial abstraction and code reuse."
      },
      sixteenMark: {
        intro: "Abstract classes provide a balance between full abstraction (interfaces) and full implementation (concrete classes).",
        definition: "An abstract class is a class declared with the 'abstract' keyword, which may contain abstract methods (no body) and concrete methods. It cannot be instantiated directly; it is meant to be extended.",
        explanation: "Abstract classes support partial abstraction. They can have constructors used by subclasses, instance variables, static members, and any access modifier. Abstract methods have no body and must be implemented by the first concrete subclass. An abstract class can extend another abstract or concrete class. From Java 8, interfaces can also have default and static methods, blurring the line further.",
        working: "1. Abstract class loaded into method area.\n2. Cannot 'new' an abstract class directly.\n3. Subclass constructor calls super().\n4. Subclass must override all abstract methods.",
        diagram: "Animal (abstract)\n  + sound() [abstract]\n  + sleep() [concrete]",
        example: "abstract class BankAccount { double bal; BankAccount(double b) { bal = b; } abstract double calculateInterest(); double getBalance() { return bal; } } class SavingsAccount extends BankAccount { SavingsAccount(double b) { super(b); } double calculateInterest() { return bal * 0.04; } }",
        output: "calculateInterest differs per account type.",
        advantages: [
          "Partial abstraction",
          "Code reuse for shared logic",
          "Enforces contracts on subclasses",
          "Can have state (instance vars)"
        ],
        applications: ["Template Method", "Adapter", "GUI component base classes"],
        conclusion: "Abstract classes are the go-to tool for partial abstraction in Java, enabling shared code plus enforced contracts."
      }
    },
    viva: [
      { q: "Can an abstract class have a constructor?", a: "Yes, used by subclasses via super()." },
      { q: "Can an abstract class have no abstract method?", a: "Yes, just declaring the class abstract is allowed." }
    ],
    quiz: {
      mcqs: [
        { question: "Abstract class can be instantiated:", options: ["Yes", "No", "Only with new", "Sometimes"], answer: 1, explanation: "Cannot be instantiated." },
        { question: "Abstract methods have:", options: ["A body", "No body", "Return type", "Static"], answer: 1, explanation: "No body." }
      ],
      trueFalse: [
        { statement: "Abstract class can have main method.", answer: true, explanation: "Yes, you can run it." }
      ]
    },
    revision: { oneMin: "abstract class = partial abstraction, cannot instantiate.", fiveMin: ["Can have constructors", "Subclass must implement abstract methods", "Can have state"], examDay: ["Abstract vs Interface", "Use case"], memoryTrick: "Abstract = blueprint with missing parts.", faq: [{ q: "Can abstract be final?", a: "No, they are opposites." }] },
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
    whereUsed: ["Callbacks (ActionListener)", "API contracts", "Dependency injection", "Strategy pattern"],
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
      steps: ["Interfaces have no instance state (only static final constants).", "Default methods provide backward-compatible evolution.", "Static methods belong to the interface."]
    },
    examAnswer: {
      twoMark: "An interface in Java is a blueprint of a class that contains abstract methods (and from Java 8, default and static methods). A class uses 'implements' to adopt an interface, providing implementations for its abstract methods.",
      thirteenMark: {
        intro: "Interfaces define contracts that classes can adopt, supporting multiple inheritance of type.",
        definition: "An interface is a reference type in Java, declared with the 'interface' keyword, that can contain abstract methods, default methods, static methods, and constants. Classes implement interfaces using the 'implements' keyword.",
        explanation: "Before Java 8, interfaces could only have abstract methods and public static final fields. From Java 8, default and static methods with bodies are allowed. From Java 9, private methods are allowed. Interfaces support multiple inheritance of type. A class can implement multiple interfaces. Marker interfaces (e.g., Serializable) have no methods.",
        diagram: "<<interface>>\nDrawable\n  + draw()\n  + show() [default]",
        example: "interface Vehicle { void start(); } class Car implements Vehicle { public void start() { System.out.println(\"Car start\"); } }",
        conclusion: "Interfaces are a core Java feature for defining contracts and supporting multiple inheritance of type."
      },
      sixteenMark: {
        intro: "Interfaces are Java's primary mechanism for defining type contracts and supporting multiple inheritance of type.",
        definition: "An interface is a reference type that defines a contract. It can include abstract methods, default methods, static methods, constants, and (from Java 9) private methods.",
        explanation: "Interfaces support multiple inheritance: a class can implement many interfaces. They decouple API definition from implementation. From Java 8, default methods allow interface evolution without breaking existing implementations. Static methods in interfaces provide utility functions. Nested types in interfaces are implicitly public static. Interfaces can extend other interfaces (multiple interface inheritance is allowed).",
        working: "1. Class implementing interface must override all abstract methods.\n2. Default methods can be inherited or overridden.\n3. JVM uses itables (interface tables) for method dispatch on interfaces.",
        diagram: "<<interface>> I1 <<interface>> I2\n         ↘       ↙\n            C\n        (must implement I1 & I2 methods)",
        example: "interface A { default void hello() { System.out.println(\"A\"); } } interface B { default void hello() { System.out.println(\"B\"); } } class C implements A, B { public void hello() { A.super.hello(); } }",
        output: "A (resolved via A.super.hello())",
        advantages: [
          "Multiple inheritance of type",
          "Decouples API from implementation",
          "Supports lambda expressions (functional interfaces)",
          "Enables loose coupling"
        ],
        applications: ["Collections framework", "JDBC", "Event listeners", "Strategy pattern"],
        conclusion: "Interfaces are essential to modern Java. They define contracts, support multiple inheritance of type, and enable many design patterns."
      }
    },
    viva: [
      { q: "Difference between interface and abstract class?", a: "Abstract can have state; interface cannot (only static final)." },
      { q: "Can an interface extend another interface?", a: "Yes, using extends (multiple allowed)." }
    ],
    quiz: {
      mcqs: [
        { question: "Interface methods are by default:", options: ["public abstract", "private", "protected", "static"], answer: 0, explanation: "public abstract by default." },
        { question: "Class implements interface using:", options: ["extends", "implements", "inherits", "uses"], answer: 1, explanation: "implements." }
      ],
      trueFalse: [
        { statement: "Interface can have constructors.", answer: false, explanation: "Interfaces cannot have constructors." }
      ]
    },
    revision: { oneMin: "Interface = 100% abstraction (pre-Java 8) + supports multiple inheritance.", fiveMin: ["abstract + default + static methods", "Multiple implements", "Functional interfaces (1 method)"], examDay: ["Abstract vs Interface table", "Java 8 default methods"], memoryTrick: "Interface = a job description for unrelated classes.", faq: [{ q: "Can interface be final?", a: "No." }] },
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
    whereUsed: ["Frameworks", "Event handling", "Pluggable architectures"],
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
      steps: ["JVM builds interface method tables (itables) for each interface.", "When a method is called, JVM walks the itable to find the implementation."]
    },
    examAnswer: {
      twoMark: "Java supports multiple inheritance through interfaces. A class can implement multiple interfaces, inheriting their type definitions. This avoids the diamond problem of multiple class inheritance.",
      thirteenMark: {
        intro: "Java chose interfaces to support multiple inheritance safely.",
        definition: "Multiple inheritance using interfaces is the ability of a class to implement more than one interface, combining the type contracts of all of them.",
        explanation: "A class can 'implement' any number of interfaces, separated by commas. It must provide implementations for all abstract methods of all interfaces (or be abstract). Since interfaces (pre-Java 8) had no state, there is no ambiguity. From Java 8, default methods can cause conflicts, which the implementing class must resolve.",
        diagram: "I1   I2\n  ↘ ↙\n    C",
        example: "interface A { void a(); } interface B { void b(); } class C implements A, B { public void a() {} public void b() {} }",
        conclusion: "Multiple inheritance via interfaces is Java's safe way to combine multiple type contracts."
      },
      sixteenMark: {
        intro: "Java deliberately excluded multiple class inheritance but compensated with powerful interface-based multiple inheritance.",
        definition: "Multiple inheritance using interfaces means a class can implement two or more interfaces, inheriting all the type definitions and method signatures (and from Java 8, default methods).",
        explanation: "Since interfaces do not have instance state (only constants), and methods (pre-Java 8) had no bodies, the diamond problem did not arise. With Java 8's default methods, conflicts are possible and must be resolved by the implementing class using InterfaceName.super.method(). Interface inheritance is also multiple: an interface can extend multiple interfaces.",
        working: "1. Class implementing multiple interfaces gets itables for each.\n2. Method dispatch looks up each itable.\n3. Default method conflicts resolved at compile time.",
        diagram: "interface I1  interface I2\n    ↑             ↑\n    +------+------+\n           |\n        class C",
        example: "interface Camera { void click(); } interface Music { void play(); } class Phone implements Camera, Music { public void click() { System.out.println(\"click\"); } public void play() { System.out.println(\"play\"); } }",
        output: "Phone can act as a Camera and a Music player.",
        advantages: [
          "Combines multiple type contracts",
          "No diamond problem with state",
          "Flexibility for class design"
        ],
        applications: ["GUI components", "Cross-cutting concerns", "Strategy pattern"],
        conclusion: "Multiple inheritance through interfaces is the foundation of Java's flexible, modular type system."
      }
    },
    viva: [
      { q: "Why no multiple class inheritance in Java?", a: "To avoid ambiguity (diamond problem)." },
      { q: "Can an interface extend multiple interfaces?", a: "Yes." }
    ],
    quiz: {
      mcqs: [
        { question: "Java supports multiple inheritance via:", options: ["Classes", "Interfaces", "Both", "None"], answer: 1, explanation: "Interfaces." }
      ],
      trueFalse: [
        { statement: "Diamond problem exists with interfaces in Java 8+.", answer: true, explanation: "Possible with default methods." }
      ]
    },
    revision: { oneMin: "Java = single class + multiple interface inheritance.", fiveMin: ["implements I1, I2", "Resolve default conflicts"], examDay: ["Diagram I1,I2 → C", "Diamond problem explanation"], memoryTrick: "One parent class, many interface roles.", faq: [{ q: "Can interface extend class?", a: "No." }] },
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
    whereUsed: ["Polymorphism", "Strategy pattern", "Frameworks", "Plugin systems"],
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
      steps: ["JVM stores method tables (vtables) for each class.", "At call site, JVM uses the actual object's class vtable to find the method."]
    },
    examAnswer: {
      twoMark: "Dynamic method dispatch is the process by which the JVM resolves a call to an overridden method at runtime, based on the actual type of the object, not the reference type. It enables runtime polymorphism.",
      thirteenMark: {
        intro: "Dynamic method dispatch is the heart of runtime polymorphism in Java.",
        definition: "Dynamic method dispatch is the mechanism by which a call to an overridden method is resolved at runtime, allowing the JVM to invoke the subclass's version of the method through a superclass reference.",
        explanation: "When a superclass reference variable holds a subclass object, and an overridden method is called, the JVM looks at the actual object's class to decide which method to invoke. This is done via vtable (virtual method table) lookup. Static methods, private methods, and final methods are not subject to dynamic dispatch.",
        diagram: "A ref = new B();\n  ref.show();\n   ↓\n   JVM looks at object's class (B) → invokes B.show()",
        example: "class Animal { void sound() {} } class Dog extends Animal { void sound() { System.out.println(\"Bark\"); } } Animal a = new Dog(); a.sound(); // Bark",
        conclusion: "Dynamic method dispatch enables flexible, polymorphic behavior and is a cornerstone of OOP in Java."
      },
      sixteenMark: {
        intro: "Dynamic method dispatch enables runtime polymorphism, a key feature of OOP.",
        definition: "Dynamic method dispatch is the runtime resolution of which overridden method to invoke, based on the actual object's type rather than the reference type.",
        explanation: "Java uses late binding (dynamic dispatch) for instance methods (non-static, non-final, non-private). At each call site, the JVM consults the method table of the actual object's class, walking up the hierarchy if needed. This is what allows a superclass reference to invoke subclass-specific behavior, enabling flexible designs.",
        working: "1. Compiler emits invokevirtual for the method call.\n2. At runtime, JVM reads the actual object's class from the heap.\n3. Method is looked up in that class's vtable.\n4. If not found, the superclass's vtable is consulted.\n5. Address of the method is called.",
        diagram: "Reference type: Animal\nActual type:    Dog\n  ref.sound()\n       ↓\n   JVM: object's class is Dog → Dog.sound()",
        example: "interface Shape { double area(); } class Circle implements Shape { public double area() { return 3.14 * r * r; } } class Square implements Shape { public double area() { return s * s; } } Shape s = new Circle(5); System.out.println(s.area());",
        output: "78.5 (or precise value)",
        advantages: [
          "Runtime polymorphism",
          "Flexible code: same interface, different behaviors",
          "Enables Strategy and State patterns"
        ],
        applications: ["GUI event handling", "Plugin systems", "Frameworks like Spring"],
        conclusion: "Dynamic method dispatch is the runtime engine that makes polymorphism work in Java."
      }
    },
    viva: [
      { q: "When is dynamic dispatch used?", a: "For instance methods that are overridden." },
      { q: "What is not subject to dynamic dispatch?", a: "Static, private, and final methods." }
    ],
    quiz: {
      mcqs: [
        { question: "Dynamic dispatch resolves at:", options: ["Compile time", "Runtime", "Both", "None"], answer: 1, explanation: "Runtime resolution." },
        { question: "Which methods are not dispatched dynamically?", options: ["static", "private", "final", "All of these"], answer: 3, explanation: "All three are statically bound." }
      ],
      trueFalse: [
        { statement: "Dynamic dispatch uses vtable lookup.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "Dynamic dispatch = runtime, based on actual object type.", fiveMin: ["invokevirtual", "vtable lookup", "Reference vs actual type"], examDay: ["Diagram with vtable", "Example Animal a = new Dog()"], memoryTrick: "Reference says Animal, object is Dog — Dog wins.", faq: [{ q: "What is a vtable?", a: "Virtual method table — array of method pointers per class." }] },
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
    whereUsed: ["print() variants", "Constructors", "Utility methods", "Math operations"],
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
      steps: ["Compiler picks the method based on argument types — compile-time polymorphism.", "Method signature includes name and parameter types; return type is not part of it (except for overriding)."]
    },
    examAnswer: {
      twoMark: "Method overloading in Java is defining multiple methods with the same name but different parameter lists (number, type, or order of parameters) within the same class. The compiler resolves which method to call based on the arguments at compile time.",
      thirteenMark: {
        intro: "Method overloading is a form of compile-time polymorphism.",
        definition: "Method overloading is the ability to define multiple methods with the same name in the same class, as long as their parameter lists differ.",
        explanation: "Methods can be overloaded by changing the number of parameters, the types of parameters, or the order of types. The return type alone is not enough to distinguish overloaded methods. Overloading is resolved at compile time. Constructors can also be overloaded. It improves readability and usability of APIs.",
        diagram: "add(int,int) → int\nadd(double,double) → double\nadd(String,String) → String",
        example: "void print(int i) {} void print(double d) {} void print(String s) {}",
        conclusion: "Method overloading is essential for clean, expressive APIs."
      },
      sixteenMark: {
        intro: "Overloading is one of the most commonly used features in Java for creating flexible APIs.",
        definition: "Method overloading is the definition of multiple methods with the same name in a class, distinguished by their parameter lists.",
        explanation: "Overloaded methods must differ in number, type, or order of parameters. The return type is not part of the signature for overloading (cannot have two methods that differ only in return type). The compiler uses the most specific applicable method at the call site. Overloading is resolved at compile time (static binding). It is also called static polymorphism.",
        working: "1. Compiler analyzes the call site.\n2. Picks the best matching method based on argument types.\n3. Generates an invokespecial (for private/constructor) or invokevirtual (for instance) bytecode.",
        diagram: "print(5)     → print(int)\nprint(5.0)   → print(double)\nprint(\"hi\")  → print(String)",
        example: "class Box { void draw() {} void draw(int s) {} void draw(int l, int b) {} }",
        output: "Three draw methods, picked at compile time.",
        advantages: [
          "Same name, intuitive API",
          "Compile-time safety",
          "Readability"
        ],
        applications: ["println variants", "Constructors", "Math operations"],
        conclusion: "Overloading is a fundamental Java feature that makes APIs more usable and expressive."
      }
    },
    viva: [
      { q: "Can methods be overloaded by return type alone?", a: "No, parameter list must differ." },
      { q: "Is overloading runtime polymorphism?", a: "No, it is compile-time polymorphism." }
    ],
    quiz: {
      mcqs: [
        { question: "Overloading differs in:", options: ["Return type", "Parameter list", "Access", "Name"], answer: 1, explanation: "Parameter list must differ." }
      ],
      trueFalse: [
        { statement: "main can be overloaded.", answer: true, explanation: "Yes, but only public static void main(String[]) is the entry point." }
      ]
    },
    revision: { oneMin: "Same name + different params = overloading.", fiveMin: ["Compile-time", "Differs in number/type/order"], examDay: ["Example with print()"], memoryTrick: "Overloading = same name, different ingredients.", faq: [{ q: "Can private methods be overloaded?", a: "Yes." }] },
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
      steps: ["Compiler checks signature match.", "JVM at runtime looks up the method in the actual object's class first."]
    },
    examAnswer: {
      twoMark: "Method overriding is redefining a parent class's method in a subclass with the same name, return type, and parameter list. It enables runtime polymorphism.",
      thirteenMark: {
        intro: "Overriding is the foundation of runtime polymorphism.",
        definition: "Method overriding is the process by which a subclass provides a specific implementation of a method already defined in its superclass. The method in the subclass must have the same name, return type (or covariant), and parameter list.",
        explanation: "Overriding methods are resolved at runtime using dynamic dispatch. The @Override annotation is recommended for safety. Access modifier can be widened but not narrowed. Cannot override static, private, or final methods. Constructors cannot be overridden.",
        diagram: "Animal.sound()    [parent]\n   ↺ overridden by\nDog.sound()         [child]",
        example: "class Vehicle { void run() { System.out.println(\"running\"); } } class Bike extends Vehicle { void run() { System.out.println(\"Bike running\"); } }",
        conclusion: "Overriding enables flexible, polymorphic code."
      },
      sixteenMark: {
        intro: "Overriding is the primary mechanism for runtime polymorphism in Java.",
        definition: "Method overriding is when a subclass provides a new implementation for a method inherited from its superclass, with the same signature (name and parameter list).",
        explanation: "Overriding is enabled by virtual method dispatch in the JVM. Rules: 1) Same name and parameter list. 2) Return type can be the same or covariant (subclass). 3) Access level cannot be more restrictive. 4) Cannot override static, private, or final methods. 5) Use @Override annotation for safety. 6) Use super.method() to call parent version.",
        working: "1. Compiler checks method signature and access.\n2. JVM at runtime uses vtable to find the actual method.\n3. The actual object's class method is invoked.",
        diagram: "Reference: Animal\nObject:    Dog\n  animal.sound()\n      ↓\n   Dog.sound() runs",
        example: "class A { void m() { System.out.println(\"A\"); } } class B extends A { @Override void m() { super.m(); System.out.println(\"B\"); } } new B().m();",
        output: "A\nB",
        advantages: [
          "Runtime polymorphism",
          "Specific behavior in subclasses",
          "Pluggable behavior"
        ],
        applications: ["equals()", "hashCode()", "toString()", "GUI handlers"],
        conclusion: "Overriding is essential for OOP and Java polymorphism."
      }
    },
    viva: [
      { q: "Difference: overloading vs overriding?", a: "Overloading: same name, different params, compile-time. Overriding: same signature, runtime." },
      { q: "Can we override a final method?", a: "No." }
    ],
    quiz: {
      mcqs: [
        { question: "Overriding requires:", options: ["Same name and params", "Same return", "Same access", "All"], answer: 3, explanation: "All three must hold (with covariant return)." }
      ],
      trueFalse: [
        { statement: "Constructors can be overridden.", answer: false, explanation: "Constructors are not inherited." }
      ]
    },
    revision: { oneMin: "Overriding = same signature, runtime polymorphism.", fiveMin: ["@Override annotation", "super.method()", "Cannot override final/static/private"], examDay: ["Compare overloading vs overriding table"], memoryTrick: "Overriding = child changes the recipe but keeps the name.", faq: [{ q: "Covariant return?", a: "Subclass return type can be a subtype of parent's." }] },
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
      steps: ["Compiler generates super accessor bytecode (aload_0; getfield).", "At runtime, super refers to the parent portion of the object."]
    },
    examAnswer: {
      twoMark: "The 'super' keyword in Java is a reference variable used to refer to the immediate parent class. It can access parent fields, methods, and constructors.",
      thirteenMark: {
        intro: "super is essential for inheritance-based design.",
        definition: "super is a reference to the immediate superclass. It is used to differentiate parent members from child members, to call parent constructors, and to invoke overridden methods.",
        explanation: "Three uses of super: 1) super.field — access hidden parent field. 2) super.method() — call overridden parent method. 3) super(args) — call parent constructor (must be first line in subclass constructor). If not used, compiler inserts super() with no args.",
        diagram: "super → parent class\n  ↑\nchild class",
        example: "class Animal { String name = \"Animal\"; Animal() { System.out.println(\"Animal ctor\"); } } class Dog extends Animal { Dog() { super(); System.out.println(\"Dog ctor\"); } }",
        conclusion: "super is vital for controlling inheritance behavior in Java."
      },
      sixteenMark: {
        intro: "super provides controlled access to parent class members from a subclass.",
        definition: "super is a built-in reference in Java that refers to the immediate superclass. It is used to access parent's fields, methods, and constructors that may be hidden or overridden in the child class.",
        explanation: "super is implicitly available in every non-static method of a subclass. It cannot be assigned another value. It is used to: 1) Invoke parent constructor via super(args) — must be the first statement. 2) Call parent method via super.method() — typically inside an override. 3) Access parent field via super.field — when child has a same-named field.",
        working: "1. super is resolved at compile time to the parent class.\n2. At runtime, it accesses the parent portion of the object's memory.\n3. super(args) invokes the matching parent constructor.",
        diagram: "Dog object on heap\n  +----+----+\n  | super  | → Animal portion\n  +----+----+",
        example: "class A { int i = 1; A(int i) { this.i = i; } } class B extends A { int i = 2; B(int i) { super(i); } void show() { System.out.println(super.i + \" \" + this.i); } }",
        output: "i from parent and child are accessible.",
        advantages: [
          "Explicit parent access",
          "Avoids ambiguity in naming",
          "Enables constructor chaining"
        ],
        applications: ["Constructor chaining", "Calling base class behavior", "Field hiding"],
        conclusion: "super is a key part of inheritance, providing controlled access to parent functionality."
      }
    },
    viva: [
      { q: "Can super be used in static methods?", a: "No, super refers to instance context." },
      { q: "Is super() mandatory?", a: "Compiler inserts a no-arg super() if not written." }
    ],
    quiz: {
      mcqs: [
        { question: "super refers to:", options: ["Child", "Parent class", "Object", "Class"], answer: 1, explanation: "Immediate parent." }
      ],
      trueFalse: [
        { statement: "super() must be first line.", answer: true, explanation: "Yes, in constructors." }
      ]
    },
    revision: { oneMin: "super = parent reference.", fiveMin: ["super.field", "super.method()", "super()"], examDay: ["Constructor chaining example"], memoryTrick: "super = Senior, parent.", faq: [{ q: "Can we use this() and super() in same constructor?", a: "No, only one can be the first line." }] },
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
      steps: ["Compiler maps package to directory structure.", "ClassLoader loads classes from classpath based on fully qualified name."]
    },
    examAnswer: {
      twoMark: "A package in Java is a group of related classes and interfaces. Packages provide access protection, namespace management, and easier organization. Java has built-in packages (java.lang, java.util) and user-defined packages.",
      thirteenMark: {
        intro: "Packages are essential for organizing Java code.",
        definition: "A package is a namespace that groups related types. Java has built-in packages (java.lang, java.util, java.io) and allows user-defined packages.",
        explanation: "Use 'package' to declare; 'import' to use. Packages map to directory structure. They prevent name conflicts and provide access control (default = package-private). The fully qualified name is packageName.className.",
        diagram: "java.lang  → String, Object, Math\njava.util   → List, Map, Collections\njava.io     → File, InputStream",
        example: "package mypack; public class MyClass {} // file at mypack/MyClass.java",
        conclusion: "Packages are fundamental for large-scale Java development."
      },
      sixteenMark: {
        intro: "Packages provide modularity, namespace management, and access control in Java.",
        definition: "A package is a collection of related classes and interfaces grouped under a unique namespace.",
        explanation: "Packages are declared with the 'package' keyword (must be first statement). Classes are imported with 'import'. The package name maps to a directory. java.lang is auto-imported. There are four access levels: private (class), default (package), protected (package + subclasses), public (all). Packages can be sealed for security. Java 9 introduced modules on top of packages.",
        working: "1. Compiler verifies package matches directory.\n2. ClassLoader uses classpath to find .class files.\n3. JVM resolves class references via fully qualified name.",
        diagram: "src/\n  com/example/app/Main.java  (package com.example.app)\n  com/example/util/Helper.java",
        example: "import java.util.ArrayList; import java.util.*; public class Test { ArrayList<String> list = new ArrayList<>(); }",
        output: "ArrayList from java.util is used.",
        advantages: [
          "Namespace management",
          "Access control",
          "Modular code organization",
          "Reusability"
        ],
        applications: ["Java standard library", "Spring modules", "Apache Commons"],
        conclusion: "Packages are a foundational concept for building maintainable, large-scale Java applications."
      }
    },
    viva: [
      { q: "Default package?", a: "No name package; classes have no package declaration." },
      { q: "Auto-imported package?", a: "java.lang is auto-imported." }
    ],
    quiz: {
      mcqs: [
        { question: "Package declaration must be:", options: ["First statement", "Last", "Middle", "Optional"], answer: 0, explanation: "Must be first." }
      ],
      trueFalse: [
        { statement: "java.lang is auto-imported.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "Package = namespace, organizes classes.", fiveMin: ["package decl", "import", "Maps to folder"], examDay: ["Access modifiers", "Built-in packages"], memoryTrick: "Packages = folders for classes.", faq: [{ q: "Can two classes in same package have same name?", a: "No." }] },
    simulator: { type: "none" }
  }
];
