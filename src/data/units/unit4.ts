import type { TopicContent } from "../types";

export const unit4Topics: TopicContent[] = [
  {
    id: "u4-string",
    unitId: 4,
    index: 1,
    title: "String",
    tagline: "Immutable sequence of characters",
    oneLiner: "String in Java is an immutable object representing a sequence of characters, stored in the String Constant Pool for interning.",
    analogy: "A printed book page. Once printed, the content cannot be changed; you can only make a new copy with edits.",
    whyExists: "To provide efficient, secure, and predictable handling of character sequences; immutability enables safe sharing and String Pool optimization.",
    whereUsed: ["Almost every Java program", "Keys in maps", "Configuration", "Logging"],
    visualCue: "📜",
    code: {
      language: "java",
      code: `String s = "Hello";
String t = "Hello";          // refers to same pooled object
String u = new String("Hello"); // new object on heap
System.out.println(s == t);  // true
System.out.println(s == u);  // false
System.out.println(s.equals(u)); // true`,
      caption: "String interning and equals."
    },
    internalWorking: {
      steps: [
        "String literals are interned into the String Constant Pool (in the heap since Java 7).",
        "String objects are immutable — every modification creates a new String.",
        "String concatenation with + is compiled to StringBuilder operations."
      ]
    },
    examAnswer: {
      twoMark: "String in Java is an immutable object representing a sequence of characters. Strings are stored in a special area called the String Constant Pool. Any modification creates a new String object. Strings are thread-safe by design.",
      thirteenMark: {
        intro: "String is one of the most-used classes in Java.",
        definition: "String is a final class in java.lang that wraps an immutable array of characters. Once created, its content cannot be changed.",
        explanation: "String literals are interned: identical literals point to the same pooled object. == compares references; .equals() compares values. Use new String(\"x\") to force a new object. Strings are thread-safe. Heavy concatenation should use StringBuilder.",
        diagram: "String Pool (heap):\n  \"Hello\" → shared\nHeap: new String(\"Hello\") → separate",
        example: "String s = \"Hi\"; s.concat(\" there\"); // s unchanged, new String returned",
        conclusion: "String is fundamental to Java; understanding interning and immutability is key."
      },
      sixteenMark: {
        intro: "String is Java's built-in immutable character sequence class.",
        definition: "String is a final class in java.lang representing immutable Unicode character sequences. Internally it uses a final char[] (or byte[] in Java 9+ with compact strings).",
        explanation: "Strings are immutable: every modification (concat, replace, toUpperCase) returns a new String. String literals are interned in the String Pool to save memory. == checks reference equality; .equals() checks content. The + operator is overloaded for String and is implemented via StringBuilder under the hood. For heavy string manipulation, use StringBuilder or StringBuffer.",
        working: "1. String literal \"abc\" goes to String Pool.\n2. new String(\"abc\") creates a separate heap object.\n3. .intern() moves a String to the pool (or returns existing).",
        diagram: "Pool: \"Hi\"  \"Hello\"\nHeap: obj1 (ref Pool), obj2 (own)",
        example: "String a = \"Hi\";\nString b = \"Hi\";\nString c = new String(\"Hi\");\nSystem.out.println(a == b); // true (same pool ref)\nSystem.out.println(a == c); // false (different object)",
        output: "true\nfalse",
        advantages: ["Thread safety", "Security (e.g., class loading)", "Hashing consistency", "Pool optimization"],
        applications: ["Keys in HashMaps", "Configuration", "Logging", "Network I/O"],
        conclusion: "String is a fundamental and carefully designed class. Master interning, immutability, and concatenation performance."
      }
    },
    viva: [
      { q: "Why is String immutable?", a: "For security, thread safety, and to enable String Pool interning." },
      { q: "Difference: == vs .equals()?", a: "== checks reference; .equals() checks value." }
    ],
    quiz: {
      mcqs: [
        { question: "String is:", options: ["Mutable", "Immutable", "Sometimes", "Thread-unsafe"], answer: 1, explanation: "Immutable." },
        { question: "String literals are stored in:", options: ["Stack", "Heap", "String Pool", "Cache"], answer: 2, explanation: "String Constant Pool." }
      ],
      trueFalse: [
        { statement: "s.concat(x) modifies s.", answer: false, explanation: "Returns new String." }
      ]
    },
    revision: { oneMin: "String = immutable + interned.", fiveMin: ["== vs equals", "String Pool", "StringBuilder for loops"], examDay: ["Diagram of pool vs heap"], memoryTrick: "String = sealed envelope.", faq: [{ q: "What is intern()?", a: "Returns canonical (pool) version of a String." }] },
    simulator: { type: "string-memory", samples: [{ literal: "Hello", interned: true }, { literal: "Hello", interned: false }, { literal: "World", interned: true }] }
  },
  {
    id: "u4-stringbuffer",
    unitId: 4,
    index: 2,
    title: "StringBuffer",
    tagline: "Mutable, thread-safe strings",
    oneLiner: "StringBuffer is a mutable, thread-safe alternative to String, allowing in-place modifications of character sequences.",
    analogy: "Unlike a printed book, StringBuffer is a whiteboard. You can write and erase on it without creating a new board.",
    whyExists: "To provide an efficient way to do many string modifications without creating many objects.",
    whereUsed: ["Heavy string concatenation in loops", "Log building", "JSON construction"],
    visualCue: "📝",
    code: {
      language: "java",
      code: `StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
sb.insert(5, ",");
System.out.println(sb); // Hello, World`,
      caption: "Mutable string operations."
    },
    internalWorking: {
      steps: ["StringBuffer has a mutable char[] buffer.", "All public methods are synchronized, ensuring thread safety.", "Capacity grows automatically (usually doubles)."]
    },
    examAnswer: {
      twoMark: "StringBuffer in Java is a mutable, thread-safe sequence of characters. It is similar to String but can be modified without creating new objects. It is synchronized, making it slower than StringBuilder in single-threaded contexts.",
      thirteenMark: {
        intro: "StringBuffer is the original mutable string class.",
        definition: "StringBuffer is a thread-safe, mutable sequence of characters. It is a legacy class; StringBuilder is preferred for single-threaded code.",
        explanation: "Methods like append(), insert(), delete(), reverse() modify the buffer in place. All methods are synchronized. Default capacity is 16; grows automatically. Use toString() to convert to a String.",
        diagram: "StringBuffer sb;\n sb.append(x) → buffer mutated\n sb.toString() → new String",
        example: "StringBuffer sb = new StringBuffer(); for (int i=0; i<10; i++) sb.append(i);",
        conclusion: "StringBuffer is useful for thread-safe mutable strings, but StringBuilder is faster for single-threaded use."
      },
      sixteenMark: {
        intro: "StringBuffer provides thread-safe mutable strings.",
        definition: "StringBuffer is a final class in java.lang that wraps a mutable char[] buffer. All public methods are synchronized.",
        explanation: "StringBuffer was the first mutable string class in Java. Its main methods are append(), insert(), delete(), replace(), reverse(). It grows its internal buffer when needed (capacity grows by (oldCapacity*2)+2). Use toString() to obtain an immutable String view. For single-threaded code, StringBuilder is preferred (faster, no synchronization).",
        working: "1. Internal char[] buffer initialized with default capacity (16).\n2. append() adds to buffer; grows if needed.\n3. toString() creates new String from buffer.",
        diagram: "Buffer: [H][e][l][l][o][ ][W][o][r][l][d]\n           ↑ capacity = 16 (auto-grows)",
        example: "StringBuffer sb = new StringBuffer(\"Hi\"); sb.append(\" there\"); System.out.println(sb.length() + \" \" + sb.capacity());",
        output: "8 16",
        advantages: ["Mutable, in-place modification", "Thread-safe", "Efficient for many appends"],
        applications: ["String building in loops", "Log construction", "JSON/XML building"],
        conclusion: "Use StringBuffer when thread safety is needed; otherwise prefer StringBuilder for performance."
      }
    },
    viva: [
      { q: "StringBuffer vs StringBuilder?", a: "StringBuffer is synchronized (thread-safe); StringBuilder is not (faster)." },
      { q: "Default capacity?", a: "16." }
    ],
    quiz: {
      mcqs: [
        { question: "StringBuffer is:", options: ["Immutable", "Mutable and synchronized", "Static", "Final only"], answer: 1, explanation: "Mutable + synchronized." }
      ],
      trueFalse: [
        { statement: "StringBuffer is faster than StringBuilder.", answer: false, explanation: "StringBuilder is faster (no sync)." }
      ]
    },
    revision: { oneMin: "StringBuffer = mutable + thread-safe.", fiveMin: ["append/insert/delete", "Default capacity 16", "toString()"], examDay: ["String vs StringBuffer vs StringBuilder table"], memoryTrick: "StringBuffer = synchronized whiteboard.", faq: [{ q: "Initial capacity?", a: "16, grows by (old*2)+2." }] },
    simulator: { type: "none" }
  },
  {
    id: "u4-file-handling",
    unitId: 4,
    index: 3,
    title: "File Handling",
    tagline: "Reading and writing files",
    oneLiner: "File handling in Java is performed using classes in java.io (and java.nio.file) to create, read, write, and manipulate files on the file system.",
    analogy: "A file is a notebook. Java provides tools to open it (FileInputStream), read it (Scanner, BufferedReader), write to it (FileWriter, PrintWriter), and close it.",
    whyExists: "To allow programs to persist data and interact with the file system.",
    whereUsed: ["Configuration files", "Logs", "Data processing", "Persistence"],
    visualCue: "📁",
    code: {
      language: "java",
      code: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) System.out.println(line);
}`,
      caption: "Reading a file line by line."
    },
    internalWorking: {
      steps: ["FileDescriptor is opened by the OS.", "Stream wraps file descriptor.", "Buffer accumulates data for efficient I/O."]
    },
    examAnswer: {
      twoMark: "File handling in Java is done using java.io classes like File, FileInputStream, FileOutputStream, FileReader, FileWriter, BufferedReader, etc. Files are read/written using streams. The try-with-resources statement auto-closes resources.",
      thirteenMark: {
        intro: "File handling is essential for persistent storage.",
        definition: "File handling in Java refers to operations on files: create, read, write, delete, rename, etc. It is done using classes in java.io and java.nio.file.",
        explanation: "java.io.File represents file path. Streams (InputStream/OutputStream, Reader/Writer) provide byte/character I/O. Buffered streams improve performance. try-with-resources (Java 7+) auto-closes streams. NIO.2 (java.nio.file) provides Path, Files, etc.",
        diagram: "FileReader  → reads characters\n  ↑\nBufferedReader (buffers lines)\n  ↑\nFile (path representation)",
        example: "Files.writeString(Path.of(\"a.txt\"), \"Hello\"); // NIO",
        conclusion: "File handling is a fundamental I/O task in Java."
      },
      sixteenMark: {
        intro: "File handling encompasses creating, reading, writing, and managing files in Java.",
        definition: "File handling is the process of interacting with files on the file system using Java's I/O and NIO APIs.",
        explanation: "java.io provides classic stream-based I/O: File, FileInputStream, FileOutputStream, FileReader, FileWriter, BufferedReader, BufferedWriter, PrintWriter, Scanner. java.nio.file (NIO.2, Java 7+) provides Path, Files, FileSystems, Channels, Buffers. NIO offers better performance and more features. try-with-resources ensures streams are closed. Files.copy, Files.move, Files.delete, Files.readAllLines are common operations.",
        working: "1. Open file (constructor or factory method).\n2. Wrap in stream.\n3. Read/write using stream methods.\n4. Close stream (auto with try-with-resources).",
        diagram: "File → InputStream/Reader → Buffer → Consumer\n        ↓\n       OutputStream/Writer → File",
        example: "Path p = Paths.get(\"hello.txt\");\nFiles.writeString(p, \"Hello World\");\nString content = Files.readString(p);\nSystem.out.println(content);",
        output: "Hello World",
        advantages: ["Persistence", "Data exchange", "Configuration management"],
        applications: ["Logging", "Configuration", "Data import/export", "Caching"],
        conclusion: "File handling is a basic but critical capability in any Java application."
      }
    },
    viva: [
      { q: "Difference: FileInputStream vs FileReader?", a: "FileInputStream: bytes. FileReader: characters." },
      { q: "What is try-with-resources?", a: "Statement that auto-closes resources implementing AutoCloseable." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is for character I/O?", options: ["FileInputStream", "FileReader", "FileOutputStream", "DataInputStream"], answer: 1, explanation: "FileReader reads characters." }
      ],
      trueFalse: [
        { statement: "Java 7 introduced NIO.2.", answer: true, explanation: "java.nio.file was added in Java 7." }
      ]
    },
    revision: { oneMin: "File = storage unit, I/O = reading/writing data.", fiveMin: ["File, FileReader/Writer", "try-with-resources", "NIO Path and Files"], examDay: ["File copy program"], memoryTrick: "Streams = data flow, Reader/Writer = text, Input/Output = bytes.", faq: [{ q: "What is a relative path?", a: "Path relative to the current working directory." }] },
    simulator: { type: "file-stream" }
  },
  {
    id: "u4-streams",
    unitId: 4,
    index: 4,
    title: "Byte Streams & Character Streams",
    tagline: "Two ways to read/write data",
    oneLiner: "Java provides two main I/O abstractions: byte streams (InputStream/OutputStream) for binary data, and character streams (Reader/Writer) for text data.",
    analogy: "Byte stream = raw pipe carrying water drops. Character stream = pipe with a translator that handles letters.",
    whyExists: "Different data types need different handling — binary vs text.",
    whereUsed: ["File I/O", "Network sockets", "Pipes"],
    visualCue: "🌊",
    code: {
      language: "java",
      code: `// Byte stream
try (FileInputStream in = new FileInputStream("a.bin")) { /* read bytes */ }
// Character stream
try (FileReader r = new FileReader("a.txt")) { /* read chars */ }`,
      caption: "Byte vs character streams."
    },
    internalWorking: { steps: ["Byte streams work on raw bytes (8-bit).", "Character streams use a charset to convert bytes to chars."] },
    examAnswer: {
      twoMark: "Byte streams (InputStream/OutputStream) handle binary data, reading/writing 8-bit bytes. Character streams (Reader/Writer) handle text data, reading/writing 16-bit Unicode characters using a charset.",
      thirteenMark: {
        intro: "Streams are the foundation of Java I/O.",
        definition: "Byte streams deal with raw binary data; character streams deal with text.",
        explanation: "Byte streams: InputStream, OutputStream, FileInputStream, FileOutputStream, BufferedInputStream, DataInputStream. Character streams: Reader, Writer, FileReader, FileWriter, BufferedReader, PrintWriter. Bridge streams: InputStreamReader (byte→char), OutputStreamWriter (char→byte).",
        diagram: "InputStream/OutputStream ← bytes\nReader/Writer ← characters (charset)",
        example: "InputStreamReader isr = new InputStreamReader(new FileInputStream(\"f.txt\"), StandardCharsets.UTF_8);",
        conclusion: "Choose byte streams for binary, character streams for text."
      },
      sixteenMark: {
        intro: "Streams are categorized into byte and character streams, each suited to different data.",
        definition: "Byte streams (InputStream, OutputStream subclasses) handle 8-bit binary data. Character streams (Reader, Writer subclasses) handle 16-bit Unicode characters.",
        explanation: "Use byte streams for binary files (images, audio, serialized objects). Use character streams for text. Internally, character streams wrap byte streams with a charset. Buffered variants improve performance. Object streams (ObjectInputStream, ObjectOutputStream) support serialization.",
        working: "1. Stream is opened.\n2. Read/write methods called.\n3. Stream is flushed and closed.",
        diagram: "[Data Source] → InputStream (bytes) → Consumer\n[Producer] → OutputStream (bytes) → [Data Sink]\n\n[Data Source] → Reader (chars via charset) → Consumer\n[Producer] → Writer (chars via charset) → [Data Sink]",
        example: "BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(\"a.txt\"), StandardCharsets.UTF_8));",
        output: "Buffered character reading.",
        advantages: ["Efficient I/O", "Buffering support", "Charset handling"],
        applications: ["File copy", "Network I/O", "Pipes"],
        conclusion: "Understanding byte vs character streams is essential for correct I/O in Java."
      }
    },
    viva: [
      { q: "When to use byte stream?", a: "For binary data like images, audio." },
      { q: "Bridge between byte and char streams?", a: "InputStreamReader / OutputStreamWriter." }
    ],
    quiz: {
      mcqs: [
        { question: "FileReader is a:", options: ["Byte stream", "Character stream", "Filter", "Buffer"], answer: 1, explanation: "Character stream." }
      ],
      trueFalse: [
        { statement: "PrintWriter is a byte stream.", answer: false, explanation: "Character stream." }
      ]
    },
    revision: { oneMin: "Bytes for binary, chars for text.", fiveMin: ["InputStream/OutputStream", "Reader/Writer", "Bridge classes"], examDay: ["File copy program"], memoryTrick: "Bytes = raw, Chars = readable text.", faq: [{ q: "What is a charset?", a: "Encoding like UTF-8 that maps chars to bytes." }] },
    simulator: { type: "file-stream" }
  },
  {
    id: "u4-generics",
    unitId: 4,
    index: 5,
    title: "Generics",
    tagline: "Type-safe reusable code",
    oneLiner: "Generics enable types (classes and methods) to be parameters, allowing type-safe reuse of code for different data types.",
    analogy: "A shipping box that fits any item. The label says what's inside. Generics parameterize the type of content.",
    whyExists: "To provide compile-time type safety and eliminate the need for explicit casts.",
    whereUsed: ["Collections (List<T>, Map<K,V>)", "Utility methods", "Custom data structures"],
    visualCue: "🎯",
    code: {
      language: "java",
      code: `List<String> list = new ArrayList<>();
list.add("Hi");        // type-checked
// list.add(123);      // compile error
String s = list.get(0); // no cast needed`,
      caption: "Generic List with type parameter."
    },
    internalWorking: {
      steps: ["Compiler enforces type rules at compile time.", "At runtime, generics are erased to raw types (type erasure) for backward compatibility."]
    },
    examAnswer: {
      twoMark: "Generics in Java allow types to be parameters when defining classes, interfaces, and methods. They provide compile-time type safety and eliminate the need for explicit casts. Generics were introduced in Java 5.",
      thirteenMark: {
        intro: "Generics are a key Java feature for type-safe reusable code.",
        definition: "Generics enable a class, interface, or method to operate on objects of various types while providing compile-time type safety.",
        explanation: "Type parameters are declared in angle brackets: <T>, <K, V>. They can be bounded: <T extends Number>. Wildcards: ? (any), ? extends T (upper bound), ? super T (lower bound). Generics are implemented via type erasure at runtime.",
        diagram: "class Box<T> { T value; } Box<Integer> b1; Box<String> b2;",
        example: "public <T> void printArray(T[] arr) { for (T t : arr) System.out.println(t); }",
        conclusion: "Generics are essential for modern, type-safe Java code."
      },
      sixteenMark: {
        intro: "Generics provide type parameters for classes, interfaces, and methods.",
        definition: "Generics in Java are a language feature that allows the type of data being operated on to be specified as a parameter, enabling type-safe code reuse.",
        explanation: "Generics were introduced in Java 5. They use angle brackets: <T>, <K, V>, etc. Bounded types: <T extends Comparable<T>>. Wildcards: ? (any type), ? extends T (upper bound), ? super T (lower bound — used in PECS rule). At runtime, generics are erased to raw types for backward compatibility (type erasure). This means no new classes are created for parameterized types.",
        working: "1. Compiler checks type rules at compile time.\n2. At runtime, type erasure removes generics; raw types are used.\n3. Bridge methods handle polymorphism after erasure.",
        diagram: "List<Integer> (compile time) → List (runtime, erased)",
        example: "public class GenericBox<T> { private T value; public void set(T v) { value = v; } public T get() { return value; } }",
        output: "Type-safe storage with no casts needed.",
        advantages: ["Compile-time type safety", "No explicit casts", "Generic algorithms", "Reusability"],
        applications: ["Collections", "Comparable/Comparator", "Stream API"],
        conclusion: "Generics are foundational to modern Java. They are used in every major library and are essential for type safety."
      }
    },
    viva: [
      { q: "What is type erasure?", a: "Removal of generic type info at runtime for backward compatibility." },
      { q: "What is a bounded type?", a: "Type parameter with an upper bound: <T extends Number>." }
    ],
    quiz: {
      mcqs: [
        { question: "Generics were introduced in:", options: ["Java 1.0", "Java 5", "Java 8", "Java 11"], answer: 1, explanation: "Java 5." },
        { question: "Wildcard for unknown type:", options: ["*", "?", "T", "&"], answer: 1, explanation: "? is wildcard." }
      ],
      trueFalse: [
        { statement: "Generics are reified at runtime.", answer: false, explanation: "They are erased." }
      ]
    },
    revision: { oneMin: "Generics = parameterized types.", fiveMin: ["<T>", "Bounded types", "Wildcards ? extends/super", "Type erasure"], examDay: ["Generic method example"], memoryTrick: "Generic = box with a label.", faq: [{ q: "What is PECS?", a: "Producer Extends, Consumer Super — rule for wildcards." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-generic-classes",
    unitId: 4,
    index: 6,
    title: "Generic Classes",
    tagline: "Classes parameterized by type",
    oneLiner: "A generic class is a class that can work with any type, specified as a type parameter when the class is used.",
    analogy: "A generic storage container — the type of item it holds is decided when you instantiate it.",
    whyExists: "To write classes that work on any type without sacrificing type safety.",
    whereUsed: ["Collections (ArrayList, HashMap)", "Wrappers", "Data structures"],
    visualCue: "🧰",
    code: {
      language: "java",
      code: `class Box<T> {
    T value;
    Box(T v) { value = v; }
    T get() { return value; }
}
Box<Integer> ib = new Box<>(10);
Box<String> sb = new Box<>("Hi");`,
      caption: "Generic Box class."
    },
    internalWorking: { steps: ["Type parameter T is replaced by actual type at compile time (in code) and erased at runtime."] },
    examAnswer: {
      twoMark: "A generic class is a class declared with one or more type parameters. It allows the class to operate on any type, with type safety guaranteed at compile time. Example: class Box<T> { T value; }",
      thirteenMark: {
        intro: "Generic classes are core to the Java Collections framework.",
        definition: "A generic class is a class with one or more type parameters (placeholders for types) declared in angle brackets.",
        explanation: "Type parameters can be single (T) or multiple (K, V, T). They can be bounded: <T extends Number>. Cannot use primitive types as type arguments (use wrappers). Can have multiple bounds: <T extends A & B>.",
        diagram: "class Box<T> { T item; } Box<Integer>, Box<String>",
        example: "class Pair<A, B> { A first; B second; } Pair<String, Integer> p = new Pair<>();",
        conclusion: "Generic classes enable reusable, type-safe data structures."
      },
      sixteenMark: {
        intro: "Generic classes parameterize class definitions with types.",
        definition: "A generic class is a class that declares one or more type parameters, allowing it to be reused for different types with compile-time type safety.",
        explanation: "Generic classes can have multiple type parameters: <T, U, V>. They can be bounded: <T extends Comparable<T>>. The diamond operator <> simplifies instantiation. Static members of a generic class cannot use the class's type parameter (they belong to the raw class).",
        working: "1. Class is declared with type parameters.\n2. At use site, type arguments are provided.\n3. Compiler inserts casts and type checks.\n4. At runtime, type erasure removes generics.",
        diagram: "class Container<T> {\n  private T item;\n  public void set(T t) { item = t; }\n  public T get() { return item; }\n}",
        example: "class Stack<E> { private Object[] data = new Object[10]; private int top = -1; public void push(E e) { data[++top] = e; } public E pop() { return (E) data[top--]; } }",
        output: "Type-safe stack with internal Object array (erasure).",
        advantages: ["Type safety", "Reusability", "Cleaner code"],
        applications: ["Collections", "Custom data structures", "Wrappers"],
        conclusion: "Generic classes are the building blocks of type-safe, reusable Java libraries."
      }
    },
    viva: [
      { q: "Can generic class have static fields of type T?", a: "No, because static belongs to raw class." },
      { q: "Can we create generic array?", a: "Not directly, due to type erasure. Workaround: use Object[] and cast." }
    ],
    quiz: {
      mcqs: [
        { question: "Can primitives be type arguments?", options: ["Yes", "No", "Sometimes", "Always"], answer: 1, explanation: "No, use wrappers." }
      ],
      trueFalse: [
        { statement: "Generic class can have multiple type parameters.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "Generic class = class <T> { }", fiveMin: ["Diamond operator", "Bounded type", "Multiple parameters"], examDay: ["Box class example"], memoryTrick: "Generic class = mold for any type.", faq: [{ q: "Raw type?", a: "Generic class used without type arguments (warning)." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-generic-methods",
    unitId: 4,
    index: 7,
    title: "Generic Methods",
    tagline: "Methods that work on any type",
    oneLiner: "A generic method introduces its own type parameters and can be called with different argument types, providing type safety.",
    analogy: "A photocopy machine that works with any document — you tell it the type at runtime.",
    whyExists: "To write utility methods that work on different types without overloading.",
    whereUsed: ["Collections.sort", "Stream operations", "Utility libraries"],
    visualCue: "🔧",
    code: {
      language: "java",
      code: `public static <T> void print(T[] arr) {
    for (T t : arr) System.out.println(t);
}
print(new Integer[]{1,2,3});
print(new String[]{"a","b"});`,
      caption: "Generic print method."
    },
    internalWorking: { steps: ["Type parameter is declared before return type.", "Compiler infers the type at call site (or it is explicitly provided)."] },
    examAnswer: {
      twoMark: "A generic method is a method that declares its own type parameters, allowing it to be called with arguments of different types. The type parameter is placed before the return type. Example: public static <T> void print(T x).",
      thirteenMark: {
        intro: "Generic methods add flexibility to method definitions.",
        definition: "A generic method declares its own type parameters and can be invoked with any reference type that matches the constraints.",
        explanation: "Type parameters are declared before the return type. Can be bounded: <T extends Comparable<T>>. Compiler infers types from arguments. Useful for static utility methods.",
        diagram: "<T> returnType methodName(T arg) { }",
        example: "static <T extends Comparable<T>> T max(T a, T b) { return a.compareTo(b) > 0 ? a : b; }",
        conclusion: "Generic methods provide reusable, type-safe logic."
      },
      sixteenMark: {
        intro: "Generic methods bring type parameters to methods, separate from the enclosing class.",
        definition: "A generic method is a method with its own type parameter(s), declared before the return type. It can be invoked on different types with type safety.",
        explanation: "Generic methods are useful for static utility methods and methods that operate on types independent of the class. They can be bounded. The compiler usually infers type arguments; explicit specification is possible: Util.<String>method(arg).",
        working: "1. Type parameter declared in method signature.\n2. Compiler infers type from argument.\n3. Method body uses the type.\n4. At runtime, type is erased.",
        diagram: "public static <T> List<T> asList(T... items) { return Arrays.asList(items); }",
        example: "static <T> void swap(T[] a, int i, int j) { T t = a[i]; a[i] = a[j]; a[j] = t; }",
        output: "Generic swap of array elements.",
        advantages: ["Type-safe utilities", "Reusability", "Inference at call site"],
        applications: ["Collections.sort", "Comparators", "Stream API"],
        conclusion: "Generic methods are a powerful tool for writing flexible, type-safe utility code."
      }
    },
    viva: [
      { q: "Where is type parameter placed in method?", a: "Before the return type." },
      { q: "Can generic method be static?", a: "Yes." }
    ],
    quiz: {
      mcqs: [
        { question: "Generic method signature begins with:", options: ["return type", "<T>", "void", "static"], answer: 1, explanation: "<T> before return type." }
      ],
      trueFalse: [
        { statement: "Generic methods can be in non-generic classes.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "<T> returnType methodName(T arg).", fiveMin: ["Static generic methods", "Bounded methods", "Type inference"], examDay: ["swap, max example"], memoryTrick: "Generic method = type-flexible tool.", faq: [{ q: "What is type inference?", a: "Compiler determines type from arguments." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-bounded-types",
    unitId: 4,
    index: 8,
    title: "Bounded Types",
    tagline: "Constraining type parameters",
    oneLiner: "Bounded types restrict the types that can be used as type arguments, by specifying an upper bound (extends) or lower bound (super).",
    analogy: "A job posting that requires at least a bachelor's degree. Bounded types restrict the candidates.",
    whyExists: "To allow operations on type parameters that require specific capabilities (e.g., Comparable).",
    whereUsed: ["Comparable<T>", "Number subclasses", "Sorting algorithms"],
    visualCue: "⛓️",
    code: {
      language: "java",
      code: `public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
max(3, 5);     // works
max("a", "b"); // works`,
      caption: "Bounded type parameter."
    },
    internalWorking: { steps: ["Compiler checks that actual type extends the bound.", "Type parameter has access to methods of the bound."] },
    examAnswer: {
      twoMark: "Bounded types in Java restrict the type arguments that can be used with a generic class or method. Upper bound: <T extends Bound>. Lower bound (with wildcards): <? super T>. This enables access to specific methods of the bound.",
      thirteenMark: {
        intro: "Bounded types add constraints to type parameters.",
        definition: "A bounded type parameter has an upper bound declared with 'extends'. Only subtypes of the bound can be used as type arguments.",
        explanation: "Multiple bounds: <T extends A & B>. Wildcards: ? extends T (read-only), ? super T (write). Used in PECS principle.",
        diagram: "<T extends Number>\n<T extends Comparable<T> & Serializable>",
        example: "public static <T extends Number> double sum(T[] arr) { double s=0; for (T t: arr) s += t.doubleValue(); return s; }",
        conclusion: "Bounded types allow generic code to use methods of specific types."
      },
      sixteenMark: {
        intro: "Bounded types constrain type parameters to subtypes of a class or to types implementing interfaces.",
        definition: "Bounded type parameters are declared using 'extends' for an upper bound on classes or interfaces. Wildcards (? extends T, ? super T) add flexibility in method signatures.",
        explanation: "Upper bound: <T extends Number> — T must be Number or its subclass. Multiple bounds: <T extends A & B>. Lower bound (wildcards only): <? super Integer>. PECS: Producer Extends, Consumer Super. Bounded types enable using methods of the bound inside the generic code.",
        working: "1. Compiler verifies type argument satisfies bound.\n2. Inside generic code, T is treated as the bound type.\n3. Methods of bound are accessible.",
        diagram: "Box<T extends Number> — only Number subtypes allowed\nList<? extends Number> — read-only list of Numbers\nList<? super Integer> — list that can hold Integer or supertypes",
        example: "static <T extends Comparable<T>> void sort(T[] arr) { /* sort */ }",
        output: "Sorts any array of Comparable items.",
        advantages: ["Type safety with specific operations", "Allows specific method calls", "PECS for flexible APIs"],
        applications: ["Collections", "Comparators", "Stream API"],
        conclusion: "Bounded types are essential for writing expressive, type-safe generic code."
      }
    },
    viva: [
      { q: "What is multiple bound syntax?", a: "<T extends A & B>" },
      { q: "PECS stands for?", a: "Producer Extends, Consumer Super." }
    ],
    quiz: {
      mcqs: [
        { question: "Upper bound syntax:", options: ["<T super X>", "<T extends X>", "<T>", "<T & X>"], answer: 1, explanation: "extends for upper bound." }
      ],
      trueFalse: [
        { statement: "PECS: producer extends, consumer super.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "<T extends Bound> constrains type parameter.", fiveMin: ["Upper bound", "Multiple bounds", "Wildcards ? extends/super", "PECS"], examDay: ["Example with Comparable"], memoryTrick: "Bounded type = eligible candidates only.", faq: [{ q: "What if no bound is given?", a: "Default upper bound is Object." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-string-methods",
    unitId: 4,
    index: 9,
    title: "String Methods",
    tagline: "Common String operations",
    oneLiner: "The String class provides many methods for string manipulation: length, charAt, substring, indexOf, replace, split, toLowerCase, toUpperCase, trim, equals, etc.",
    analogy: "A Swiss Army knife for text — every tool you might need to inspect, cut, or transform strings.",
    whyExists: "To provide convenient, well-tested string operations.",
    whereUsed: ["All string-handling code"],
    visualCue: "🧵",
    code: {
      language: "java",
      code: `String s = "  Hello World  ";
s.length();        // 15
s.trim();          // "Hello World"
s.substring(2,7);  // "Hello"
s.toUpperCase();   // "  HELLO WORLD  "
s.split(" ");      // ["", "", "Hello", "World", "", ""]
s.replace("l","L");// "  HeLLo WorLd  "`,
      caption: "Common String methods."
    },
    internalWorking: { steps: ["All String methods are final and return new Strings (immutability).", "split uses regex; equals does character-by-character comparison."] },
    examAnswer: {
      twoMark: "The String class in Java provides many methods for string manipulation including length(), charAt(), substring(), indexOf(), replace(), split(), trim(), toUpperCase(), toLowerCase(), equals(), compareTo(), concat(), valueOf(), and more.",
      thirteenMark: {
        intro: "String methods are essential for everyday Java programming.",
        definition: "String methods are member functions of java.lang.String used to inspect, compare, and transform strings.",
        explanation: "Inspection: length(), isEmpty(), charAt(). Comparison: equals(), equalsIgnoreCase(), compareTo(), startsWith(), endsWith(). Search: indexOf(), lastIndexOf(), contains(). Modification: substring(), concat(), replace(), toLowerCase(), toUpperCase(), trim(). Splitting: split(). Conversion: valueOf(), format().",
        diagram: "String s = \"Hello\";\ns.length() → 5\ns.charAt(1) → 'e'",
        example: "String s = \"Java is fun\"; String[] words = s.split(\" \"); // [Java, is, fun]",
        conclusion: "Mastering String methods is a must for Java programming."
      },
      sixteenMark: {
        intro: "String methods cover a wide range of operations: inspection, comparison, searching, and transformation.",
        definition: "The String class provides a rich API for character sequence manipulation.",
        explanation: "Key methods grouped by purpose: 1) Inspection: length(), isEmpty(), charAt(int). 2) Comparison: equals(Object), equalsIgnoreCase(String), compareTo(String), compareToIgnoreCase(String), startsWith, endsWith. 3) Search: indexOf(int/String), lastIndexOf, contains. 4) Modification: substring, concat, replace, replaceAll, toLowerCase, toUpperCase, trim, strip. 5) Splitting: split(String regex). 6) Conversion: valueOf, format. All return new Strings (immutability).",
        working: "1. Each method may scan the char[] internally.\n2. Methods returning modified strings allocate new String objects.\n3. equals compares content; == compares references.",
        diagram: "s = \"Hello\"\n s.length() = 5\n s.indexOf('l') = 2\n s.substring(1,4) = \"ell\"",
        example: "String email = \"user@example.com\"; int at = email.indexOf('@'); String domain = email.substring(at+1); // example.com",
        output: "domain = example.com",
        advantages: ["Rich API", "Well-tested", "Unicode support"],
        applications: ["Text processing", "Validation", "Parsing"],
        conclusion: "String methods are an essential part of the Java developer's toolkit."
      }
    },
    viva: [
      { q: "Difference: equals() vs compareTo()?", a: "equals returns boolean for equality; compareTo returns int (lexicographic)." },
      { q: "Does trim() remove all whitespace?", a: "Removes leading/trailing whitespace <= 0x20. strip() (Java 11+) handles Unicode whitespace." }
    ],
    quiz: {
      mcqs: [
        { question: "s.length() returns:", options: ["Bytes", "Characters", "Words", "Code units"], answer: 1, explanation: "Number of chars." }
      ],
      trueFalse: [
        { statement: "String methods mutate the original string.", answer: false, explanation: "Returns new Strings." }
      ]
    },
    revision: { oneMin: "length, charAt, substring, indexOf, replace, split, trim, equals, ...", fiveMin: ["Inspection vs Modification", "split uses regex", "equals vs =="], examDay: ["List 10 common methods"], memoryTrick: "String = immutable; methods return new strings.", faq: [{ q: "What is regex in split()?", a: "Regular expression as separator." }] },
    simulator: { type: "none" }
  }
];
