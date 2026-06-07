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
    whereUsed: ["Almost every Java program", "Keys in maps", "Configuration", "Logging", "Class loading (security)"],
    visualCue: "📜",
    code: {
      language: "java",
      code: `String s = "Hello";
String t = "Hello";
String u = new String("Hello");
System.out.println(s == t);
System.out.println(s == u);
System.out.println(s.equals(u));
System.out.println(s.length());
System.out.println(s.charAt(1));
System.out.println(s.substring(1,4));`,
      caption: "String interning, equals, and common methods."
    },
    internalWorking: {
      steps: [
        "String literals are interned into the String Constant Pool (located in the heap since Java 7).",
        "String objects are immutable — every modification (concat, replace, toUpperCase) creates a new String.",
        "String concatenation with + is compiled to StringBuilder.append() calls by javac.",
        "The internal char[] (Java 8) or byte[] + coder (Compact Strings, Java 9+) is marked final — it cannot be reassigned."
      ]
    },
    examAnswer: {
      twoMark: "String in Java is an immutable object representing a sequence of characters, defined by the final class java.lang.String. Strings are stored in a special area called the String Constant Pool for interning. Any modification (concat, replace, toUpperCase) creates a new String object. Strings are inherently thread-safe and widely used as HashMap keys.",
      thirteenMark: {
        intro: "String is one of the most frequently used classes in Java, designed around immutability and pool-based memory sharing.",
        definition: "String is a final class in java.lang that wraps an immutable array of characters (char[] in Java 8; byte[] + coder in Java 9+ Compact Strings). Once created, its content cannot be changed.",
        explanation: "String literals are interned: identical literals point to the same pooled object. == compares references; .equals() compares values. The new String(\"x\") constructor forces a new heap object. Strings are thread-safe due to immutability. Heavy concatenation inside loops should use StringBuilder. Methods like concat(), replace(), toUpperCase() return new String instances. The hash code is cached after first computation, making String excellent as a HashMap key.",
        diagram: "          +-----------------+\n          |   String Pool   |\n          |   (in Heap)     |\n          +-----------------+\n                |  \"Hello\"  (shared)\n                v\nStack ref s -+--- t --------+\n                                |\nHeap      new String(\"Hello\") <-+ u (separate object)\n\nAfter s.concat(\"x\"):  s unchanged, new String returned",
        example: "String s = \"Hi\";\nString t = s.concat(\" there\");\nSystem.out.println(s); // Hi (unchanged)\nSystem.out.println(t); // Hi there (new String)",
        conclusion: "Mastering String requires understanding immutability, the String Constant Pool, the difference between == and .equals(), and when to switch to StringBuilder for performance."
      },
      sixteenMark: {
        intro: "String is Java's built-in immutable character-sequence class, foundational to language design, security, and the Collections framework.",
        definition: "String is a final class in java.lang representing immutable Unicode character sequences. Internally it uses a final char[] (Java 8) or byte[] plus a coder byte (Java 9+ Compact Strings) so that Latin-1 strings consume half the heap.",
        explanation: "Strings are immutable: every modification (concat, replace, toUpperCase, substring, trim) returns a new String. String literals are interned in the String Constant Pool to save memory — the JVM ensures only one copy of each distinct literal exists. == checks reference equality; .equals() checks content. The + operator is overloaded for String and the compiler rewrites it to use StringBuilder.append(). For heavy string manipulation in loops, use StringBuilder or StringBuffer explicitly. The String class caches its hashCode() on first call, which is why String is a great HashMap/HashSet key. The intern() method adds a heap String to the pool, returning the canonical reference.",
        working: "1. The JVM encounters a String literal \"abc\" and looks it up in the String Constant Pool.\n2. If present, the same reference is reused; if not, a new pooled object is created.\n3. new String(\"abc\") always creates a new heap object outside the pool (unless interned).\n4. .intern() returns the canonical (pooled) version, creating one if necessary.\n5. Concatenation a + b is compiled to: new StringBuilder().append(a).append(b).toString().",
        diagram: "         +-------------------+\n         |  String Constant  |\n         |       Pool        |\n         |   (Heap, Java 7+)|\n         +-------------------+\n        \"Hi\"  \"Hello\"  \"abc\"\n\nStack references:\n  s ----> \"Hi\"      (pooled)\n  t ----> \"Hi\"      (same pooled object, == true)\n  u ----> new String(\"Hi\")  (own heap object, == false)",
        example: "String a = \"Hi\";\nString b = \"Hi\";\nString c = new String(\"Hi\");\nString d = c.intern();\nSystem.out.println(a == b);   // true  (same pool ref)\nSystem.out.println(a == c);   // false (different object)\nSystem.out.println(a == d);   // true  (d was interned to pool)",
        output: "true\nfalse\ntrue",
        advantages: [
          "Thread safety by design (immutable)",
          "Security (e.g., class names, paths, keys)",
          "Hashing consistency (cached hashCode)",
          "String Pool memory optimization",
          "Safe to share across threads"
        ],
        applications: [
          "Keys in HashMap / HashSet",
          "Configuration (system properties, env vars)",
          "Logging messages",
          "Network I/O and protocols",
          "Reflection and class loading"
        ],
        conclusion: "String is a fundamental and carefully designed class. Always remember: it is immutable, interned, thread-safe, and concatenation produces a new object — use StringBuilder for performance-critical loops."
      }
    },
    viva: [
      { q: "Why is String immutable?", a: "For security, thread safety, hash-code caching, and to enable String Pool interning." },
      { q: "Difference: == vs .equals()?", a: "== checks reference (memory) equality; .equals() checks content equality." },
      { q: "What is the String Constant Pool?", a: "A special area in the heap where the JVM stores unique String literals for reuse." },
      { q: "What does intern() do?", a: "Returns the canonical (pooled) representation of a String, adding it to the pool if absent." },
      { q: "Why is String a good HashMap key?", a: "Immutability guarantees a stable hashCode; the hash is cached after first call." }
    ],
    quiz: {
      mcqs: [
        { question: "String is:", options: ["Mutable", "Immutable", "Sometimes", "Thread-unsafe"], answer: 1, explanation: "Immutable." },
        { question: "String literals are stored in:", options: ["Stack", "Heap (String Pool)", "Method area only", "CPU cache"], answer: 1, explanation: "String Constant Pool, located in the heap since Java 7." },
        { question: "s1.equals(s2) compares:", options: ["References", "Memory address", "Content", "Length only"], answer: 2, explanation: "Character-by-character content." },
        { question: "Which creates a new object outside the pool?", options: ["String s = \"Hi\";", "String s = new String(\"Hi\");", "String s = \"Hi\".intern();", "String s = String.valueOf('H');"], answer: 1, explanation: "new String forces a new heap object." }
      ],
      trueFalse: [
        { statement: "s.concat(x) modifies s.", answer: false, explanation: "Returns a new String; s is unchanged." },
        { statement: "Two identical String literals share the same pooled object.", answer: true, explanation: "Interning reuses one object." },
        { statement: "String is thread-safe.", answer: true, explanation: "Immutability makes it safe to share." }
      ]
    },
    revision: { oneMin: "String = immutable + interned + thread-safe.", fiveMin: ["== vs equals", "String Pool (in heap)", "StringBuilder for loops", "intern() adds to pool"], examDay: ["Diagram of pool vs heap objects", "Immutability justification", "concat vs +"], memoryTrick: "String = sealed envelope (content fixed).", faq: [{ q: "What is intern()?", a: "Returns canonical (pool) version of a String." }, { q: "What is Compact Strings in Java 9?", a: "byte[] + coder replaces char[] for Latin-1 strings, halving heap usage." }] },
    simulator: { type: "string-memory", samples: [{ literal: "Hello", interned: true }, { literal: "Hello", interned: false }, { literal: "World", interned: true }] }
  },
  {
    id: "u4-stringbuffer",
    unitId: 4,
    index: 2,
    title: "StringBuffer",
    tagline: "Mutable, thread-safe strings",
    oneLiner: "StringBuffer is a mutable, thread-safe alternative to String, allowing in-place modifications of character sequences without creating new objects.",
    analogy: "Unlike a printed book, StringBuffer is a whiteboard. You can write, erase, and rewrite on it without creating a new board.",
    whyExists: "To provide an efficient way to do many string modifications (appends, inserts, deletes) without allocating many intermediate String objects.",
    whereUsed: ["Heavy string concatenation in loops", "Log building", "JSON / XML construction", "Multi-threaded string assembly"],
    visualCue: "📝",
    code: {
      language: "java",
      code: `StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");
sb.insert(5, ",");
sb.reverse();
System.out.println(sb.length());
System.out.println(sb.capacity());
System.out.println(sb);`,
      caption: "Mutable string operations with StringBuffer."
    },
    internalWorking: {
      steps: [
        "StringBuffer has a mutable char[] buffer (not final).",
        "All public mutating methods are synchronized, ensuring thread safety at a performance cost.",
        "Default capacity is 16; grows to (oldCapacity * 2) + 2 when exceeded.",
        "toString() snapshots the current contents into a new immutable String."
      ]
    },
    examAnswer: {
      twoMark: "StringBuffer in Java is a mutable, thread-safe sequence of characters defined in java.lang. It is similar to String but its contents can be modified in place. All public methods are synchronized, making it safe for multi-threaded use but slower than StringBuilder in single-threaded contexts. Default capacity is 16 and grows automatically.",
      thirteenMark: {
        intro: "StringBuffer is the original mutable string class in Java, predating StringBuilder.",
        definition: "StringBuffer is a final, thread-safe class in java.lang that wraps a mutable char[] buffer. It allows in-place modification of characters and is internally synchronized.",
        explanation: "Key methods: append() (adds to end), insert(offset, value), delete(start, end), deleteCharAt(index), reverse(), setCharAt(index, ch), replace(start, end, str), setLength(n). All public mutating methods are synchronized on `this`, making StringBuffer safe for concurrent use. Default initial capacity is 16; when the buffer is too small, it grows to (oldCapacity * 2) + 2. toString() creates a new String snapshot. For single-threaded code, prefer StringBuilder for better performance.",
        diagram: "StringBuffer sb (initial capacity 16)\n |--> append(x) --> buffer mutated in place\n |--> insert(i,x) --> shifts chars right of i\n |--> toString() --> new immutable String\n\nBuffer layout:\n  [H][e][l][l][o][ ][W][o][r][l][d][?][?][?][?][?]\n  ^ length=11     ^ capacity=16 (grows when full)",
        example: "StringBuffer sb = new StringBuffer();\nfor (int i = 0; i < 10; i++) {\n    sb.append(i).append(' ');\n}\nSystem.out.println(sb); // 0 1 2 3 4 5 6 7 8 9",
        conclusion: "StringBuffer is the right choice when multiple threads will modify the same string concurrently. For single-threaded heavy string building, StringBuilder is significantly faster."
      },
      sixteenMark: {
        intro: "StringBuffer provides thread-safe mutable string operations, ideal when a string is shared between threads.",
        definition: "StringBuffer is a final class in java.lang that wraps a mutable char[] buffer (not final). Every public mutating method is declared synchronized, ensuring atomic operations across threads.",
        explanation: "StringBuffer was the first mutable string class in Java (Java 1.0). Its main methods are append(), insert(), delete(), deleteCharAt(), replace(), reverse(), setCharAt(), setLength(). It grows its internal buffer when needed — new capacity = (oldCapacity * 2) + 2. Use ensureCapacity(n) to pre-allocate. toString() snapshots the buffer into a new immutable String (the returned String does not share state). For single-threaded code, StringBuilder is preferred because it drops synchronization and is much faster under contention-free workloads.",
        working: "1. Internal char[] buffer is created with initial capacity (default 16, or the length of the constructor argument + 16).\n2. append() writes at position `count` and increments `count`.\n3. If `count` exceeds the buffer length, a new, larger char[] is allocated and the contents are copied over (and possibly the old array is GC'd).\n4. insert() shifts characters to the right, then writes the new value.\n5. toString() returns `new String(value, 0, count)` — a brand new immutable String.\n6. Because append/insert/delete are synchronized, two threads cannot interleave steps on the same instance.",
        diagram: "Initial: capacity=16, count=0\n  [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n\nAfter append(\"Hello\"): capacity=16, count=5\n  [H][e][l][l][o][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n\nAfter many appends (overflow): new capacity = 16*2+2 = 34\n  [...contents...][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]\n  ^ count              ^ new slots",
        example: "StringBuffer sb = new StringBuffer(\"Hi\");\nsb.append(\" there\");\nsb.insert(0, \"Hey! \");\nSystem.out.println(sb.length());   // 14\nSystem.out.println(sb.capacity()); // 34 (default 16 + appended 8)",
        output: "14\n34",
        advantages: [
          "Mutable: in-place modification, no intermediate objects",
          "Thread-safe: every public method is synchronized",
          "Efficient for many appends in shared contexts",
          "Familiar API: append, insert, delete, reverse"
        ],
        applications: [
          "Building long strings in concurrent code",
          "Log message construction across threads",
          "JSON / XML building where the buffer is shared",
          "Legacy code maintenance"
        ],
        conclusion: "Use StringBuffer only when thread safety is required. In single-threaded hot paths, StringBuilder is preferred for its lower overhead."
      }
    },
    viva: [
      { q: "StringBuffer vs StringBuilder?", a: "StringBuffer is synchronized (thread-safe, slower); StringBuilder is not synchronized (faster, not thread-safe)." },
      { q: "Default initial capacity?", a: "16 characters. It grows to (old * 2) + 2 when full." },
      { q: "Is StringBuffer final?", a: "Yes, the class is final and cannot be subclassed." },
      { q: "Does toString() mutate the buffer?", a: "No, it returns a new immutable String snapshot." }
    ],
    quiz: {
      mcqs: [
        { question: "StringBuffer is:", options: ["Immutable", "Mutable and synchronized", "Static", "Final only"], answer: 1, explanation: "Mutable + synchronized." },
        { question: "Default capacity of StringBuffer is:", options: ["8", "10", "16", "32"], answer: 2, explanation: "16." },
        { question: "When the buffer is full, it grows to:", options: ["old + 1", "old * 2", "(old * 2) + 2", "old * 4"], answer: 2, explanation: "New capacity = (old * 2) + 2." }
      ],
      trueFalse: [
        { statement: "StringBuffer is faster than StringBuilder.", answer: false, explanation: "StringBuilder is faster (no synchronization)." },
        { statement: "toString() on a StringBuffer returns a new String object.", answer: true, explanation: "A new immutable String is created." }
      ]
    },
    revision: { oneMin: "StringBuffer = mutable + thread-safe + synchronized.", fiveMin: ["append/insert/delete/reverse", "Default capacity 16, grows (old*2)+2", "toString() snapshots", "String vs StringBuffer vs StringBuilder table"], examDay: ["String vs StringBuffer vs StringBuilder comparison", "Thread-safety explanation"], memoryTrick: "StringBuffer = synchronized whiteboard.", faq: [{ q: "Initial capacity formula?", a: "16, then (old * 2) + 2 on growth." }, { q: "Why prefer StringBuilder in single thread?", a: "Avoids monitor enter/exit overhead." }] },
    simulator: { type: "none" }
  },
  {
    id: "u4-file-handling",
    unitId: 4,
    index: 3,
    title: "File Handling",
    tagline: "Reading and writing files",
    oneLiner: "File handling in Java is performed using classes in java.io (classic streams) and java.nio.file (NIO.2) to create, read, write, copy, and manipulate files on the file system.",
    analogy: "A file is a notebook. Java gives you tools to open it (FileInputStream), read it (Scanner, BufferedReader), write to it (FileWriter, PrintWriter), and close it — automatically with try-with-resources.",
    whyExists: "To allow programs to persist data beyond the lifetime of a process and to exchange data with the file system.",
    whereUsed: ["Configuration files", "Application logs", "CSV / text data processing", "Persistence", "Report generation"],
    visualCue: "📁",
    code: {
      language: "java",
      code: `try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}`,
      caption: "Reading a text file line by line with try-with-resources."
    },
    internalWorking: {
      steps: [
        "The OS opens the file and returns a low-level file descriptor.",
        "The Java stream constructor wraps that descriptor in a stream object (InputStream, Reader, etc.).",
        "Buffered streams read ahead in chunks, reducing costly OS-level calls.",
        "Closing the outermost stream propagates the close down the chain (or each must be closed individually).",
        "try-with-resources (Java 7+) guarantees close() is called even on exceptions."
      ]
    },
    examAnswer: {
      twoMark: "File handling in Java is done using classes in java.io and java.nio.file. java.io provides File, FileInputStream, FileOutputStream, FileReader, FileWriter, BufferedReader, BufferedWriter, PrintWriter, and Scanner. java.nio.file (NIO.2) provides Path, Files, Paths, and FileSystems. try-with-resources automatically closes streams implementing AutoCloseable.",
      thirteenMark: {
        intro: "File handling enables programs to read and write persistent data on the file system.",
        definition: "File handling in Java refers to operations on files: create, read, write, copy, move, delete, rename, and inspect metadata. It is done using java.io (stream-based) and java.nio.file (Path-based) APIs.",
        explanation: "java.io.File represents a file/directory path (legacy). Streams provide byte/character I/O: InputStream/OutputStream (bytes), Reader/Writer (characters). Buffered streams improve performance by reading/writing in chunks. try-with-resources (Java 7+) auto-closes streams. NIO.2 (java.nio.file) provides Path (a path object), Files (utility methods), Paths (factory), Channels, and Buffers — offering better performance and more features. Scanner is convenient for parsing text. RandomAccessFile allows non-sequential access.",
        diagram: "java.io.File (path) --> FileInputStream / FileReader --> BufferedReader / Scanner --> Consumer\n                                       (raw bytes/chars)         (buffered)            (program)\n\njava.nio.file.Path --> Files.newBufferedReader() --> BufferedReader (NIO backed)",
        example: "Path p = Path.of(\"a.txt\");\nFiles.writeString(p, \"Hello\");\nString content = Files.readString(p);\nSystem.out.println(content);",
        conclusion: "Prefer NIO.2 (java.nio.file) for new code; use java.io streams when working with classic APIs or sockets. Always use try-with-resources."
      },
      sixteenMark: {
        intro: "File handling in Java is provided by two complementary APIs: java.io (classic streams) and java.nio.file (NIO.2, since Java 7).",
        definition: "File handling is the process of interacting with files and directories on the file system using Java's I/O and NIO APIs. It covers creation, reading, writing, copying, moving, deletion, and metadata queries.",
        explanation: "java.io provides: File (path), FileInputStream/FileOutputStream (bytes), FileReader/FileWriter (chars), BufferedReader/BufferedWriter (buffered chars), PrintWriter (formatted text), DataInputStream/DataOutputStream (typed primitives), ObjectInputStream/ObjectOutputStream (serialized objects), RandomAccessFile (seek), Scanner (parsing). java.nio.file provides: Path, Paths, Files, FileSystems, FileStore, attribute views, Channels, and Buffers. NIO.2 offers better performance (memory-mapped files, async I/O) and a richer API. try-with-resources (Java 7+) ensures streams are closed even on exceptions — every relevant class implements AutoCloseable. The most common operations: Files.copy, Files.move, Files.delete, Files.readAllLines, Files.write, Files.readString, Files.writeString (Java 11+).",
        working: "1. Open the file via constructor (java.io) or factory (Files.newInputStream, Files.newBufferedReader).\n2. Wrap raw streams in buffered streams for performance.\n3. Read or write using appropriate methods.\n4. Always close the stream in a finally block OR — preferred — with try-with-resources.\n5. Handle checked exceptions: FileNotFoundException, IOException.",
        diagram: "Source File --> FileInputStream --> BufferedInputStream --> DataInputStream --> Program\n                                                                                    (typed read)\n\nProgram --> PrintWriter --> BufferedWriter --> FileWriter --> Target File\n                                                           (char write)\n\nNIO.2 equivalent:\nFile --> Files.newInputStream(p) --> BufferedReader --> Program\nFile --> Files.writeString(p, s)                       (one call)",
        example: "Path src  = Path.of(\"hello.txt\");\nPath dest = Path.of(\"backup.txt\");\nFiles.writeString(src, \"Hello World\");\nFiles.copy(src, dest, StandardCopyOption.REPLACE_EXISTING);\n\nString content = Files.readString(src);\nSystem.out.println(content);\n\nFiles.delete(dest);",
        output: "Hello World",
        advantages: [
          "Persistence across program runs",
          "Data exchange with other systems",
          "Configuration management",
          "Large-data processing (streaming)",
          "Backup and audit logs"
        ],
        applications: [
          "Application logging (log4j, SLF4J)",
          "Reading config files (properties, YAML, JSON)",
          "Import / export of CSV, text, XML",
          "Caching computed results",
          "Source code processing (compilers, linters)"
        ],
        conclusion: "File handling is a basic but critical capability. Use NIO.2 (java.nio.file) for new code, wrap streams in buffered variants, and always close with try-with-resources."
      }
    },
    viva: [
      { q: "Difference: FileInputStream vs FileReader?", a: "FileInputStream reads raw bytes (8-bit); FileReader reads characters (16-bit, charset-decoded)." },
      { q: "What is try-with-resources?", a: "A statement that auto-closes any resource implementing AutoCloseable; introduced in Java 7." },
      { q: "Difference: java.io vs java.nio.file?", a: "java.io is stream-based and old; java.nio.file is Path/Files-based (NIO.2, Java 7+) with better performance and features." },
      { q: "What does Files.copy do on conflict?", a: "Throws FileAlreadyExistsException unless StandardCopyOption.REPLACE_EXISTING is supplied." }
    ],
    quiz: {
      mcqs: [
        { question: "Which is used for character I/O?", options: ["FileInputStream", "FileReader", "FileOutputStream", "DataInputStream"], answer: 1, explanation: "FileReader reads characters." },
        { question: "try-with-resources was introduced in:", options: ["Java 5", "Java 6", "Java 7", "Java 8"], answer: 2, explanation: "Java 7." },
        { question: "Which NIO.2 class holds a path?", options: ["File", "Path", "FileSystem", "DirectoryStream"], answer: 1, explanation: "Path (java.nio.file.Path)." }
      ],
      trueFalse: [
        { statement: "Java 7 introduced NIO.2 (java.nio.file).", answer: true, explanation: "NIO.2 was added in Java 7." },
        { statement: "try-with-resources requires the resource to implement AutoCloseable.", answer: true, explanation: "AutoCloseable.close() is invoked automatically." }
      ]
    },
    revision: { oneMin: "File = storage unit; I/O = reading/writing data.", fiveMin: ["File, FileReader/Writer, BufferedReader", "try-with-resources", "NIO: Path, Files, Paths", "Checked exception IOException"], examDay: ["File copy program (io and nio)", "Stream hierarchy diagram"], memoryTrick: "Streams = data flow, Reader/Writer = text, Input/Output = bytes.", faq: [{ q: "What is a relative path?", a: "A path relative to the current working directory (user.dir system property)." }, { q: "What exception is thrown if the file is missing?", a: "java.io.FileNotFoundException (a subclass of IOException)." }] },
    simulator: { type: "file-stream" }
  },
  {
    id: "u4-streams",
    unitId: 4,
    index: 4,
    title: "Byte Streams & Character Streams",
    tagline: "Two ways to read/write data",
    oneLiner: "Java provides two main I/O abstractions: byte streams (InputStream/OutputStream) for binary data, and character streams (Reader/Writer) for text data decoded with a charset.",
    analogy: "Byte stream = raw pipe carrying water drops. Character stream = pipe with a built-in translator that converts the drops into readable letters using a charset.",
    whyExists: "Different data types need different handling — binary data (images, audio, serialized objects) vs textual data.",
    whereUsed: ["File I/O", "Network sockets", "Pipes", "Compression", "Serialization"],
    visualCue: "🌊",
    code: {
      language: "java",
      code: `try (FileInputStream in = new FileInputStream("a.bin");
     FileOutputStream out = new FileOutputStream("b.bin")) {
    byte[] buf = new byte[1024];
    int n;
    while ((n = in.read(buf)) != -1) {
        out.write(buf, 0, n);
    }
}`,
      caption: "Byte stream file copy using a 1 KB buffer."
    },
    internalWorking: {
      steps: [
        "Byte streams work on raw 8-bit bytes — no charset conversion.",
        "Character streams use a Charset (default UTF-8 since Java 18; was platform default before) to convert bytes to/from 16-bit chars.",
        "Bridge classes: InputStreamReader (bytes -> chars), OutputStreamWriter (chars -> bytes).",
        "Buffered streams wrap an existing stream to read/write in larger chunks, drastically reducing OS calls.",
        "Object streams (ObjectInputStream/ObjectOutputStream) add serialization on top of byte streams."
      ]
    },
    examAnswer: {
      twoMark: "Byte streams (InputStream/OutputStream) handle 8-bit binary data. Character streams (Reader/Writer) handle 16-bit Unicode text using a charset. Bridge classes — InputStreamReader and OutputStreamWriter — convert between them. Buffered streams wrap an existing stream to add a buffer for better performance. Always close streams, preferably with try-with-resources.",
      thirteenMark: {
        intro: "Streams are the foundation of Java I/O, split into byte streams and character streams.",
        definition: "Byte streams deal with raw 8-bit binary data; character streams deal with text using a charset.",
        explanation: "Byte streams: InputStream, OutputStream, FileInputStream, FileOutputStream, BufferedInputStream, BufferedOutputStream, DataInputStream, DataOutputStream, ObjectInputStream, ObjectOutputStream, ByteArrayInputStream, ByteArrayOutputStream, PrintStream. Character streams: Reader, Writer, FileReader, FileWriter, BufferedReader, BufferedWriter, PrintWriter, CharArrayReader, CharArrayWriter, StringReader, StringWriter. Bridge: InputStreamReader (byte -> char), OutputStreamWriter (char -> byte). Buffered variants reduce system calls and improve performance dramatically.",
        diagram: "                +-------------------+\n                |    InputStream    |   (bytes)\n                +-------------------+\n                          ^\n        FileInputStream, ByteArrayInputStream,\n        BufferedInputStream, ObjectInputStream,\n        DataInputStream, PipedInputStream\n\n                +-------------------+\n                |      Reader       |   (chars, charset)\n                +-------------------+\n                          ^\n        FileReader, BufferedReader, CharArrayReader,\n        StringReader, InputStreamReader (bridge)",
        example: "try (InputStreamReader isr = new InputStreamReader(\n        new FileInputStream(\"f.txt\"), StandardCharsets.UTF_8);\n     BufferedReader br = new BufferedReader(isr)) {\n    System.out.println(br.readLine());\n}",
        conclusion: "Use byte streams for binary data, character streams for text. Use InputStreamReader / OutputStreamWriter to bridge the two worlds."
      },
      sixteenMark: {
        intro: "Streams are categorized into byte and character streams, each suited to a different data domain.",
        definition: "Byte streams (InputStream, OutputStream and subclasses) handle 8-bit binary data. Character streams (Reader, Writer and subclasses) handle 16-bit Unicode text via a Charset.",
        explanation: "Use byte streams for binary files (images, audio, PDFs, serialized objects, raw network frames). Use character streams for text. Internally, character streams wrap byte streams with a charset; the JVM default charset was platform-dependent before Java 18 and is UTF-8 from Java 18 onwards. Buffered variants (BufferedInputStream, BufferedReader, BufferedOutputStream, BufferedWriter) read/write in larger chunks and dramatically improve throughput. Object streams (ObjectInputStream, ObjectOutputStream) add Java object serialization on top of byte streams. PrintWriter is the go-to class for writing formatted text (has println, printf). DataInputStream/DataOutputStream allow reading and writing typed primitives in a portable binary format.",
        working: "1. Open the stream (constructor or factory).\n2. Optionally wrap it in a buffered stream for performance.\n3. Read/write using stream methods (read, write, readLine, println).\n4. Flush before closing if the stream is buffered.\n5. Close in a finally block OR — preferred — with try-with-resources.",
        diagram: "[Data Source]\n     |\n     v\n  InputStream (raw bytes)        <-- FileInputStream, ByteArrayInputStream\n     |                              BufferedInputStream (wraps for buffering)\n     v                              DataInputStream (typed primitives)\n  Consumer                          ObjectInputStream (serialized objects)\n\n  Reader (chars via Charset)      <-- FileReader, CharArrayReader\n     |                              BufferedReader (wraps for line buffering)\n     v                              InputStreamReader (byte->char bridge)\n  Consumer",
        example: "BufferedReader br = new BufferedReader(\n    new InputStreamReader(\n        new FileInputStream(\"a.txt\"),\n        StandardCharsets.UTF_8));\nString line;\nwhile ((line = br.readLine()) != null) {\n    System.out.println(line);\n}",
        output: "(prints each line of a.txt)",
        advantages: [
          "Unified abstraction for I/O",
          "Buffered variants for high throughput",
          "Charset handling for internationalization",
          "Layered streams (filter pattern) for composability"
        ],
        applications: [
          "File copy and conversion",
          "Network I/O over sockets",
          "Compression (GZIPInputStream / GZIPOutputStream)",
          "Serialization (Object streams)",
          "Reading HTTP responses"
        ],
        conclusion: "Understanding byte vs character streams and the filter (decorator) pattern is essential for correct, efficient I/O in Java. Always close streams and prefer buffered variants."
      }
    },
    viva: [
      { q: "When to use a byte stream?", a: "For binary data like images, audio, PDFs, or serialized objects." },
      { q: "Bridge between byte and char streams?", a: "InputStreamReader (bytes to chars) and OutputStreamWriter (chars to bytes)." },
      { q: "Why wrap streams in Buffered variants?", a: "Buffered streams read/write in chunks, reducing expensive OS-level I/O calls." },
      { q: "Is FileReader character or byte stream?", a: "Character stream (uses the platform default charset unless specified)." }
    ],
    quiz: {
      mcqs: [
        { question: "FileReader is a:", options: ["Byte stream", "Character stream", "Filter", "Buffer"], answer: 1, explanation: "Character stream." },
        { question: "Which class bridges bytes to chars?", options: ["OutputStreamWriter", "InputStreamReader", "BufferedReader", "FileReader"], answer: 1, explanation: "InputStreamReader wraps a byte stream and decodes chars." },
        { question: "Default charset since Java 18 is:", options: ["US-ASCII", "ISO-8859-1", "UTF-8", "UTF-16"], answer: 2, explanation: "UTF-8 became the default in Java 18." }
      ],
      trueFalse: [
        { statement: "PrintWriter is a byte stream.", answer: false, explanation: "PrintWriter is a character stream." },
        { statement: "BufferedReader can read one line at a time.", answer: true, explanation: "readLine() returns one line at a time." }
      ]
    },
    revision: { oneMin: "Bytes for binary, chars for text, bridges connect them.", fiveMin: ["InputStream/OutputStream", "Reader/Writer", "InputStreamReader / OutputStreamWriter", "Buffered variants", "Default charset"], examDay: ["Stream class hierarchy diagram", "File copy program with buffer"], memoryTrick: "Bytes = raw pipe, Chars = pipe with translator.", faq: [{ q: "What is a charset?", a: "An encoding (e.g., UTF-8, ISO-8859-1) that maps chars to bytes." }, { q: "What is the default FileReader charset?", a: "The JVM default charset; always specify UTF-8 explicitly for portability." }] },
    simulator: { type: "file-stream" }
  },
  {
    id: "u4-generics",
    unitId: 4,
    index: 5,
    title: "Generics",
    tagline: "Type-safe reusable code",
    oneLiner: "Generics enable types (classes, interfaces, and methods) to be parameterized, allowing type-safe code reuse across different data types without explicit casts.",
    analogy: "A shipping box that fits any item. The label says what is inside. Generics parameterize the type of content the box holds.",
    whyExists: "To provide compile-time type safety, eliminate the need for explicit casts, and enable writing algorithms that work across types.",
    whereUsed: ["Collections (List<T>, Map<K,V>)", "Stream API", "Utility methods", "Custom data structures", "Comparable/Comparator"],
    visualCue: "🎯",
    code: {
      language: "java",
      code: `List<String> list = new ArrayList<>();
list.add("Hi");
String s = list.get(0);
List<Integer> nums = List.of(1, 2, 3);
Optional<String> opt = Optional.of(\"x\");`,
      caption: "Generic List, immutable List.of, and Optional."
    },
    internalWorking: {
      steps: [
        "The compiler enforces type rules at compile time (insertion, retrieval).",
        "At runtime, generics are erased to their raw types (type erasure) for backward compatibility with pre-Java 5 code.",
        "The compiler inserts casts and bridge methods so the bytecode type-checks correctly.",
        "Because of erasure, you cannot use primitives as type arguments (use wrappers) or create generic arrays directly."
      ]
    },
    examAnswer: {
      twoMark: "Generics in Java allow types to be parameters when defining classes, interfaces, and methods. They provide compile-time type safety, eliminate the need for explicit casts, and enable code reuse. Generics were introduced in Java 5 and implemented using type erasure, so generic type information is not retained at runtime.",
      thirteenMark: {
        intro: "Generics are a key Java feature for type-safe reusable code.",
        definition: "Generics enable a class, interface, or method to operate on objects of various types while providing compile-time type safety.",
        explanation: "Type parameters are declared in angle brackets: <T>, <K, V>, <E> (element), <N> (number). They can be bounded: <T extends Number>. Wildcards: ? (any type), ? extends T (upper bound), ? super T (lower bound, used in PECS). Generics are implemented via type erasure at runtime: after compilation, type parameters are removed and raw types are used. This means primitives cannot be type arguments (use wrappers), and instanceof with type parameters is not allowed.",
        diagram: "class Box<T>        <-- type parameter T\nBox<Integer> b1;    <-- compile time: Box of Integer\nBox<String>  b2;    <-- compile time: Box of String\n\nAfter erasure (runtime):\nBox (raw) b1;       <-- both become plain Box",
        example: "public static <T> void printArray(T[] arr) {\n    for (T t : arr) System.out.println(t);\n}\nprintArray(new Integer[]{1, 2, 3});\nprintArray(new String[]{\"a\", \"b\"});",
        conclusion: "Generics are essential for modern, type-safe Java code. The Collections framework, Stream API, and Optional are all built on them."
      },
      sixteenMark: {
        intro: "Generics provide type parameters for classes, interfaces, and methods, enabling type-safe code that can be reused across types.",
        definition: "Generics in Java are a language feature that allows the type of data being operated on to be specified as a parameter, enabling type-safe code reuse and stronger compile-time checks.",
        explanation: "Generics were introduced in Java 5. They use angle brackets: <T>, <K, V>, <E>, etc. Bounded types: <T extends Comparable<T>> restrict which types can be used. Wildcards: ? (any), ? extends T (upper bound — for producers), ? super T (lower bound — for consumers). PECS rule: Producer Extends, Consumer Super. At runtime, generics are erased to raw types for backward compatibility (type erasure). This means no new classes are created for parameterized types, and primitive types cannot be type arguments (use Integer, Double, etc.). The compiler inserts casts and generates bridge methods to preserve polymorphism. Generics cannot be used in static contexts of a generic class's own type parameter, and you cannot create generic arrays directly (use ArrayList instead).",
        working: "1. The compiler checks type rules at compile time and rejects unsafe operations.\n2. After compilation, generic type parameters are erased; raw types and casts are inserted.\n3. Bridge methods are generated by the compiler to preserve polymorphic dispatch after erasure.\n4. At runtime, only the raw type exists; reflection sees no parameterization (with some caveats via getGenericSuperclass).",
        diagram: "Source code:        List<Integer> list = new ArrayList<>();\n                          list.add(1);\n                          int n = list.get(0);\n\nCompiled bytecode:    List list = new ArrayList();\n                          list.add(Integer.valueOf(1));\n                          int n = ((Integer) list.get(0)).intValue();\n                          ^--- cast inserted by compiler",
        example: "public class GenericBox<T> {\n    private T value;\n    public void set(T v) { value = v; }\n    public T  get()     { return value; }\n}\nGenericBox<Integer> ib = new GenericBox<>();\nib.set(42);\nInteger n = ib.get();   // no cast needed",
        output: "Type-safe storage with no explicit casts at the call site.",
        advantages: [
          "Compile-time type safety (errors caught early)",
          "No explicit casts at the call site",
          "Generic algorithms reusable across types",
          "Cleaner, more readable code",
          "Better IDE support and auto-completion"
        ],
        applications: [
          "Collections framework (List, Set, Map)",
          "Comparable and Comparator",
          "Stream API and Optional",
          "Spring and Hibernate generic containers",
          "Custom data structures and utilities"
        ],
        conclusion: "Generics are foundational to modern Java. They are used in every major library and are essential for type safety, readability, and reusability."
      }
    },
    viva: [
      { q: "What is type erasure?", a: "Removal of generic type information at compile time, leaving raw types at runtime for backward compatibility." },
      { q: "What is a bounded type?", a: "A type parameter with an upper bound: <T extends Number>." },
      { q: "Why can't primitives be type arguments?", a: "Because of type erasure — primitives cannot replace reference type parameters in bytecode." },
      { q: "What is PECS?", a: "Producer Extends, Consumer Super — the rule for choosing wildcards." }
    ],
    quiz: {
      mcqs: [
        { question: "Generics were introduced in:", options: ["Java 1.0", "Java 5", "Java 8", "Java 11"], answer: 1, explanation: "Java 5." },
        { question: "Wildcard for unknown type:", options: ["*", "?", "T", "&"], answer: 1, explanation: "? is the wildcard." },
        { question: "Can int be a type argument?", options: ["Yes", "No", "Only with varargs", "Only since Java 10"], answer: 1, explanation: "No; use Integer." }
      ],
      trueFalse: [
        { statement: "Generics are reified at runtime.", answer: false, explanation: "They are erased." },
        { statement: "PECS stands for Producer Extends, Consumer Super.", answer: true, explanation: "Wildcard rule." }
      ]
    },
    revision: { oneMin: "Generics = parameterized types.", fiveMin: ["<T>", "Bounded types <T extends X>", "Wildcards ? extends / ? super", "Type erasure", "PECS"], examDay: ["Generic method example", "Wildcard explanation"], memoryTrick: "Generic = labeled box (the label is the type).", faq: [{ q: "What is PECS?", a: "Producer Extends, Consumer Super — the rule for choosing wildcards in APIs." }, { q: "Can you create a generic array?", a: "Not directly (new T[10] is illegal). Workaround: Object[] + unchecked cast or use ArrayList<T>." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-generic-classes",
    unitId: 4,
    index: 6,
    title: "Generic Classes",
    tagline: "Classes parameterized by type",
    oneLiner: "A generic class is a class declared with one or more type parameters, allowing it to be instantiated for different types with compile-time type safety.",
    analogy: "A generic storage container — the type of item it holds is decided when you instantiate it.",
    whyExists: "To write classes (data structures, wrappers) that work on any type without sacrificing type safety or code duplication.",
    whereUsed: ["Collections (ArrayList<E>, HashMap<K,V>)", "Optional<T>", "Wrappers", "Custom data structures"],
    visualCue: "🧰",
    code: {
      language: "java",
      code: `class Box<T> {
    private T value;
    Box(T v) { value = v; }
    T get()  { return value; }
}
Box<Integer> ib = new Box<>(10);
Box<String>  sb = new Box<>("Hi");
System.out.println(ib.get() + sb.get());`,
      caption: "Generic Box class with one type parameter."
    },
    internalWorking: {
      steps: [
        "The class declaration includes one or more type parameters: class Name<T, U> { ... }.",
        "The compiler substitutes the actual type arguments at the use site.",
        "Static members cannot use the enclosing class's type parameter (they belong to the raw class).",
        "At runtime, type erasure removes the type parameters; the bytecode is for the raw type."
      ]
    },
    examAnswer: {
      twoMark: "A generic class is a class declared with one or more type parameters in angle brackets after the class name. It allows the class to operate on any reference type with compile-time type safety. Example: class Box<T> { T value; }. Static fields of a generic class cannot use the class's type parameter. The diamond operator <> simplifies instantiation.",
      thirteenMark: {
        intro: "Generic classes are the backbone of the Java Collections framework.",
        definition: "A generic class is a class with one or more type parameters (placeholders for types) declared in angle brackets after the class name.",
        explanation: "Type parameters can be single (T) or multiple (K, V, E, T). They can be bounded: <T extends Number>. Cannot use primitive types as type arguments (use wrappers). Multiple bounds: <T extends A & B> (the first bound is a class, the rest are interfaces). The diamond operator <> lets the compiler infer the type at instantiation. Static fields and methods cannot reference the enclosing generic class's type parameter (they belong to the raw class).",
        diagram: "class Pair<A, B> {\n   A first;\n   B second;\n}\n\nPair<String, Integer> p = new Pair<>();\np.first  = \"age\";\np.second = 25;",
        example: "class Triple<A, B, C> {\n    A a; B b; C c;\n    Triple(A a, B b, C c) { this.a = a; this.b = b; this.c = c; }\n}\nTriple<String, Integer, Boolean> t =\n    new Triple<>(\"x\", 1, true);",
        conclusion: "Generic classes enable reusable, type-safe data structures. They are the building blocks of the Java Collections framework."
      },
      sixteenMark: {
        intro: "Generic classes parameterize class definitions with one or more types, providing type safety and reusability.",
        definition: "A generic class is a class that declares one or more type parameters, allowing it to be instantiated for different types with compile-time type safety.",
        explanation: "Generic classes can have multiple type parameters: <T, U, V> or named by convention T (type), E (element), K (key), V (value), N (number), S, U (additional). They can be bounded: <T extends Comparable<T>>. The diamond operator <> (Java 7+) simplifies instantiation. Static members of a generic class cannot use the class's type parameter because they belong to the raw class, not to any particular parameterization. Inner non-static classes can use the enclosing class's type parameter. A generic class's type parameter can be used in instance fields, constructors, and instance methods.",
        working: "1. Class is declared with type parameters: class Container<T> { ... }.\n2. At the use site, type arguments are provided: Container<String> c = new Container<>();.\n3. The compiler performs type checks and inserts casts where needed.\n4. At runtime, the bytecode is for the raw Container; the type parameter is gone.\n5. The compiler also generates bridge methods to preserve polymorphism after erasure.",
        diagram: "Source:        class Container<T> {\n                 private T item;\n                 public void set(T t) { item = t; }\n                 public T   get()     { return item; }\n              }\n              Container<String> cs = new Container<>();\n              cs.set(\"hello\");\n              String s = cs.get();  // no cast\n\nAfter erasure: class Container {\n                 private Object item;\n                 public void set(Object t) { item = t; }\n                 public Object get()      { return item; }\n              }\n              + unchecked-cast warning sites in bytecode",
        example: "class Stack<E> {\n    private Object[] data = new Object[10];\n    private int top = -1;\n    public void push(E e) { data[++top] = e; }\n    @SuppressWarnings(\"unchecked\")\n    public E pop() { return (E) data[top--]; }\n}\nStack<Integer> s = new Stack<>();\ns.push(1); s.push(2);\nInteger x = s.pop();",
        output: "Type-safe stack backed by an internal Object[] (erasure).",
        advantages: [
          "Compile-time type safety",
          "Reusability across types",
          "Cleaner, more readable code",
          "No explicit casts at call sites"
        ],
        applications: [
          "Collections (ArrayList, HashMap, HashSet)",
          "Custom data structures (Stack, Queue, Tree)",
          "Wrapper / Holder types",
          "Generic result containers (Pair, Triple, Result)"
        ],
        conclusion: "Generic classes are the building blocks of type-safe, reusable Java libraries. Use the diamond operator, prefer bounded types when you need to call methods on T, and remember the static-field limitation."
      }
    },
    viva: [
      { q: "Can a generic class have static fields of type T?", a: "No, because static members belong to the raw class, not a specific parameterization." },
      { q: "Can we create a generic array?", a: "Not directly (new T[10] is illegal). Workarounds: Object[] + unchecked cast, or use ArrayList<T>." },
      { q: "What does the diamond operator do?", a: "It tells the compiler to infer the type arguments from the assignment: new Box<>() instead of new Box<Integer>()." }
    ],
    quiz: {
      mcqs: [
        { question: "Can primitives be type arguments?", options: ["Yes", "No", "Sometimes", "Always"], answer: 1, explanation: "No, use wrappers." },
        { question: "Diamond operator was introduced in:", options: ["Java 5", "Java 6", "Java 7", "Java 8"], answer: 2, explanation: "Java 7." }
      ],
      trueFalse: [
        { statement: "A generic class can have multiple type parameters.", answer: true, explanation: "Yes, e.g., Map<K, V>." },
        { statement: "Static methods can use the class's type parameter.", answer: false, explanation: "Static members are shared across all parameterizations." }
      ]
    },
    revision: { oneMin: "Generic class = class <T> { ... }", fiveMin: ["Diamond operator <>", "Bounded type <T extends X>", "Multiple parameters <K, V>", "Static field limitation", "Inner non-static can use enclosing T"], examDay: ["Box / Pair / Stack example", "Static field question"], memoryTrick: "Generic class = mold that fills in the type later.", faq: [{ q: "What is a raw type?", a: "Using a generic class without type arguments (Box instead of Box<Integer>); generates an unchecked warning." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-generic-methods",
    unitId: 4,
    index: 7,
    title: "Generic Methods",
    tagline: "Methods that work on any type",
    oneLiner: "A generic method introduces its own type parameters, declared before the return type, and can be called with different argument types with full type safety.",
    analogy: "A photocopier that works with any document — you tell it the type at the call site (or it infers it).",
    whyExists: "To write utility methods that work across types without overloading or sacrificing type safety.",
    whereUsed: ["Collections.sort, Collections.max", "Stream operations", "Utility libraries (Apache Commons, Guava)", "Comparators"],
    visualCue: "🔧",
    code: {
      language: "java",
      code: `public static <T> void print(T[] arr) {
    for (T t : arr) System.out.println(t);
}
print(new Integer[]{1, 2, 3});
print(new String[]{"a", "b", "c"});`,
      caption: "Generic print method with type inference."
    },
    internalWorking: {
      steps: [
        "Type parameters are declared before the return type: <T> ReturnType methodName(...)",
        "The compiler usually infers the type arguments from the actual arguments (target typing since Java 8).",
        "Bounded type parameters restrict the type: <T extends Comparable<T>> T max(T a, T b).",
        "Generic methods can be static or instance methods and can live in non-generic classes."
      ]
    },
    examAnswer: {
      twoMark: "A generic method is a method that declares its own type parameters, placed before the return type. It allows the method to be called with arguments of different types with full type safety. The compiler infers the type from the actual arguments (or you can specify it explicitly). Example: public static <T> void print(T x).",
      thirteenMark: {
        intro: "Generic methods add flexibility to method definitions, independent of the enclosing class.",
        definition: "A generic method declares its own type parameter(s) before the return type and can be invoked with any reference type that matches the constraints.",
        explanation: "Type parameters are declared in angle brackets before the return type. They can be bounded: <T extends Comparable<T>>. The compiler infers the type from arguments (target typing). Generic methods are ideal for static utility methods and methods that operate on types independent of the class. They can be used in non-generic classes as well. The diamond-like type inference can be overridden by specifying explicit type arguments: Util.<String>method(arg).",
        diagram: "<T> ReturnType methodName(T arg) { ... }\n\nExamples:\n  <T> void   print(T x)\n  <T> T[]    reverse(T[] arr)\n  <T extends Comparable<T>> T max(T a, T b)",
        example: "static <T extends Comparable<T>> T max(T a, T b) {\n    return a.compareTo(b) > 0 ? a : b;\n}\nSystem.out.println(max(3, 5));        // 5\nSystem.out.println(max(\"a\", \"b\"));    // b",
        conclusion: "Generic methods are the workhorse of reusable utility code. Master type inference and bounded type parameters to write expressive, safe APIs."
      },
      sixteenMark: {
        intro: "Generic methods bring type parameters to methods, decoupled from the enclosing class.",
        definition: "A generic method is a method that declares its own type parameter(s) before the return type. It can be invoked on different types with full type safety, and the type is usually inferred from the actual arguments.",
        explanation: "Generic methods are particularly useful for static utility methods and methods that operate on types independent of the class. They can be bounded. The compiler usually infers type arguments via target typing (Java 8+); explicit specification is possible: Util.<String>method(arg). Generic methods can appear in non-generic classes. They can also be generic constructors. Varargs of generic types are allowed but generate a heap pollution warning unless annotated @SafeVarargs. The Collections utility class (sort, max, min, binarySearch, reverse) is built almost entirely on generic methods.",
        working: "1. The type parameter is declared in the method signature: <T extends X> ReturnType name(T arg).\n2. The compiler infers the type from the actual arguments at the call site.\n3. Inside the method, T behaves as if it were the bound (or Object if unbounded).\n4. At runtime, the type is erased; bridge methods and casts are inserted by the compiler.",
        diagram: "public static <T> List<T> asList(T... items) {\n    return Arrays.asList(items);\n}\n\nCall sites:\n  asList(1, 2, 3)        --> T inferred as Integer\n  asList(\"a\", \"b\")       --> T inferred as String\n  asList<Integer>(1, 2)  --> explicit type argument",
        example: "static <T> void swap(T[] a, int i, int j) {\n    T t = a[i];\n    a[i] = a[j];\n    a[j] = t;\n}\nString[] arr = {\"x\", \"y\", \"z\"};\nswap(arr, 0, 2);\nSystem.out.println(Arrays.toString(arr)); // [z, y, x]",
        output: "[z, y, x]",
        advantages: [
          "Type-safe utilities",
          "Reusability across types",
          "Type inference at the call site",
          "Decoupled from the enclosing class"
        ],
        applications: [
          "Collections.sort / max / min / binarySearch",
          "Stream operations",
          "Comparator.comparing / thenComparing",
          "Apache Commons, Guava, Spring utilities"
        ],
        conclusion: "Generic methods are a powerful tool for writing flexible, type-safe utility code. Combine them with bounded types, wildcards, and @SafeVarargs to express powerful, reusable APIs."
      }
    },
    viva: [
      { q: "Where is the type parameter placed in a generic method?", a: "In angle brackets, before the return type: <T> ReturnType methodName(T arg)." },
      { q: "Can a generic method be static?", a: "Yes, generic methods are commonly static utility methods." },
      { q: "What is type inference?", a: "The compiler determines the type argument from the actual method arguments at the call site." }
    ],
    quiz: {
      mcqs: [
        { question: "Generic method signature begins with:", options: ["return type", "<T>", "void", "static"], answer: 1, explanation: "<T> before the return type." },
        { question: "Can a generic method live in a non-generic class?", options: ["Yes", "No", "Only if private", "Only if final"], answer: 0, explanation: "Yes, it has its own type parameter." }
      ],
      trueFalse: [
        { statement: "Generic methods can be in non-generic classes.", answer: true, explanation: "Yes." },
        { statement: "The compiler can infer the type argument from the call site.", answer: true, explanation: "Target typing / type inference." }
      ]
    },
    revision: { oneMin: "<T> ReturnType methodName(T arg).", fiveMin: ["Static generic methods", "Bounded methods <T extends X>", "Type inference / target typing", "Explicit type arguments"], examDay: ["swap, max, print examples", "Type inference explanation"], memoryTrick: "Generic method = type-flexible tool.", faq: [{ q: "What is type inference?", a: "Compiler determines the type argument from the actual arguments at the call site." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-bounded-types",
    unitId: 4,
    index: 8,
    title: "Bounded Types",
    tagline: "Constraining type parameters",
    oneLiner: "Bounded types restrict the types that can be used as type arguments by specifying an upper bound (extends) or lower bound (super, wildcards only).",
    analogy: "A job posting that requires at least a bachelor's degree. Bounded types restrict the candidates that can be used.",
    whyExists: "To allow operations on type parameters that require specific capabilities (e.g., Comparable, Number, Serializable).",
    whereUsed: ["Comparable<T>", "Number subclasses", "Sorting and searching", "Stream.max / min", "Collections.max"],
    visualCue: "⛓️",
    code: {
      language: "java",
      code: `public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) > 0 ? a : b;
}
System.out.println(max(3, 5));
System.out.println(max("apple", "banana"));
List<Integer> nums = List.of(3, 1, 4, 1, 5);
System.out.println(Collections.max(nums));`,
      caption: "Bounded type parameter and Collections.max."
    },
    internalWorking: {
      steps: [
        "The compiler verifies that the actual type argument satisfies the bound.",
        "Inside the generic code, T is treated as the bound type, so its methods are accessible.",
        "Multiple bounds are joined with &, where the first bound is a class (if any) and the rest are interfaces.",
        "Wildcard ? extends T means 'some unknown subtype of T' (read-only); ? super T means 'some unknown supertype of T' (write-friendly)."
      ]
    },
    examAnswer: {
      twoMark: "Bounded types in Java restrict the type arguments that can be used with a generic class or method. Upper bound: <T extends Bound>. Lower bound (with wildcards): <? super T>. This enables access to specific methods of the bound inside the generic code. The PECS rule (Producer Extends, Consumer Super) guides wildcard use in API design.",
      thirteenMark: {
        intro: "Bounded types add constraints to type parameters, enabling method calls on the bound.",
        definition: "A bounded type parameter has an upper bound declared with 'extends'. Only subtypes of the bound can be used as type arguments, and the bound's methods are accessible inside the generic code.",
        explanation: "Upper bound: <T extends Number> — T must be Number or a subclass; you can call Number's methods on T. Multiple bounds: <T extends A & B> (first is class, rest are interfaces). Wildcards: ? extends T (upper bound, read-only), ? super T (lower bound, write-friendly). Use the PECS rule: Producer Extends, Consumer Super. If no bound is given, the implicit bound is Object.",
        diagram: "Upper bound:  <T extends Number>           accepts Integer, Double, Long, ...\nMulti-bound:   <T extends Comparable<T>        accepts types that implement both interfaces\n                & Serializable>\nWildcard up:   List<? extends Number>          read-only list of Numbers\nWildcard low:  List<? super Integer>            list that can hold Integer or supertypes",
        example: "public static <T extends Number> double sum(T[] arr) {\n    double s = 0;\n    for (T t : arr) s += t.doubleValue();\n    return s;\n}\nSystem.out.println(sum(new Integer[]{1, 2, 3}));   // 6.0",
        conclusion: "Bounded types let you write generic code that uses specific operations of a known super-type. Combine upper bounds, multi-bounds, and wildcards for expressive APIs."
      },
      sixteenMark: {
        intro: "Bounded types constrain type parameters to subtypes of a class or types implementing one or more interfaces, allowing method calls on the bound.",
        definition: "Bounded type parameters are declared with 'extends' for an upper bound on classes or interfaces. Wildcards (? extends T, ? super T) add flexibility to method signatures for input and output positions.",
        explanation: "Upper bound on type parameter: <T extends Number> — T must be Number or its subclass. Multiple bounds: <T extends A & B> (class A first, then interfaces). Wildcards: ? extends T (some unknown subtype, suitable for reading — producer), ? super T (some unknown supertype, suitable for writing — consumer). PECS rule: Producer Extends, Consumer Super. Bounded types enable using methods of the bound inside the generic code. Without a bound, the implicit upper bound is Object. The Collections class uses bounded wildcards heavily: Collections.copy(List<? super T> dest, List<? extends T> src).",
        working: "1. The compiler verifies that the type argument satisfies the bound at the use site.\n2. Inside the generic code, T is treated as the bound type; its methods are accessible.\n3. For wildcards, the compiler applies the same check; a wildcard bound does not allow adding elements (extends) or adding non-null elements (super) without casts.",
        diagram: "Box<T extends Number>            --> only Number subtypes allowed\nList<? extends Number> read        --> can read Number, cannot add\nList<? super Integer>   write      --> can add Integer, reads as Object\n<T extends Comparable<T>>         --> can call compareTo on T\n<T extends Runnable & AutoCloseable>\n                                   --> T is both Runnable and AutoCloseable",
        example: "static <T extends Comparable<T>> void sort(T[] arr) {\n    for (int i = 1; i < arr.length; i++) {\n        T key = arr[i];\n        int j = i - 1;\n        while (j >= 0 && arr[j].compareTo(key) > 0) {\n            arr[j + 1] = arr[j];\n            j--;\n        }\n        arr[j + 1] = key;\n    }\n}\nInteger[] a = {5, 2, 8, 1};\nsort(a);\nSystem.out.println(Arrays.toString(a)); // [1, 2, 5, 8]",
        output: "[1, 2, 5, 8]",
        advantages: [
          "Type safety with specific operations",
          "Allows calling bound methods on T",
          "PECS rule for flexible API signatures",
          "Compile-time enforcement of constraints"
        ],
        applications: [
          "Collections.max / min / sort",
          "Comparators",
          "Stream operations (Comparable requirements)",
          "Stream pipelines (Function<? super T, ? extends R>)",
          "Custom numeric algorithms"
        ],
        conclusion: "Bounded types are essential for expressive, type-safe generic code. Use upper bounds for compile-time capability checks, multi-bounds for combined contracts, and wildcards (PECS) for flexible API inputs and outputs."
      }
    },
    viva: [
      { q: "What is the multiple-bound syntax?", a: "<T extends A & B> — the first bound is a class (if any), the rest are interfaces." },
      { q: "PECS stands for?", a: "Producer Extends, Consumer Super." },
      { q: "Default upper bound if none specified?", a: "Object." }
    ],
    quiz: {
      mcqs: [
        { question: "Upper bound syntax:", options: ["<T super X>", "<T extends X>", "<T>", "<T & X>"], answer: 1, explanation: "extends for upper bound." },
        { question: "PECS rule: ? extends is for:", options: ["Producers", "Consumers", "Both", "Neither"], answer: 0, explanation: "Producer Extends." }
      ],
      trueFalse: [
        { statement: "PECS: producer extends, consumer super.", answer: true, explanation: "Yes." },
        { statement: "A wildcard can have a lower bound (super) only.", answer: true, explanation: "? super T is allowed on wildcards; on type parameters only extends is allowed." }
      ]
    },
    revision: { oneMin: "<T extends Bound> constrains type parameter.", fiveMin: ["Upper bound", "Multiple bounds <T extends A & B>", "Wildcards ? extends / ? super", "PECS", "Default bound is Object"], examDay: ["Example with Comparable", "PECS application in Collections.copy"], memoryTrick: "Bounded type = eligible candidates only.", faq: [{ q: "What if no bound is given?", a: "Default upper bound is Object." }, { q: "Why can't you add to List<? extends Number>?", a: "Because the actual element type is an unknown subtype of Number; adding could violate type safety at runtime." }] },
    simulator: { type: "generics" }
  },
  {
    id: "u4-string-methods",
    unitId: 4,
    index: 9,
    title: "String Methods",
    tagline: "Common String operations",
    oneLiner: "The String class provides a rich API for inspection, comparison, searching, modification, splitting, and conversion of character sequences — all returning new Strings because String is immutable.",
    analogy: "A Swiss Army knife for text — every tool you might need to inspect, cut, transform, or join strings.",
    whyExists: "To provide convenient, well-tested string operations in a single class.",
    whereUsed: ["All string-handling code", "Input validation", "Text parsing", "Log formatting", "CSV/JSON processing"],
    visualCue: "🧵",
    code: {
      language: "java",
      code: `String s = "  Hello World  ";
System.out.println(s.length());
System.out.println(s.trim());
System.out.println(s.substring(2, 7));
System.out.println(s.toUpperCase());
System.out.println(s.replace("l", "L"));
System.out.println(s.contains(\"World\"));
System.out.println(s.indexOf('o'));
String[] parts = s.split(" ");
System.out.println(Arrays.toString(parts));`,
      caption: "Common String methods: length, trim, substring, replace, contains, indexOf, split."
    },
    internalWorking: {
      steps: [
        "All String methods are final and return new Strings (immutability).",
        "split() uses a regular expression as the separator.",
        "equals() does a character-by-character comparison; equalsIgnoreCase() is the case-insensitive variant.",
        "compareTo() returns a negative, zero, or positive int based on lexicographic Unicode order.",
        "replaceAll() and split() compile a Pattern under the hood; for repeated use, prefer the java.util.regex.Pattern API for performance."
      ]
    },
    examAnswer: {
      twoMark: "The String class in Java provides many methods for string manipulation. Inspection: length(), isEmpty(), charAt(). Comparison: equals(), equalsIgnoreCase(), compareTo(), startsWith(), endsWith(). Search: indexOf(), lastIndexOf(), contains(). Modification: substring(), concat(), replace(), toLowerCase(), toUpperCase(), trim(), strip(). Splitting/joining: split(), join(). Conversion: valueOf(), format(). All return new Strings because String is immutable.",
      thirteenMark: {
        intro: "String methods are essential for everyday Java programming.",
        definition: "String methods are member functions of java.lang.String used to inspect, compare, search, modify, split, join, and convert strings.",
        explanation: "Inspection: length(), isEmpty(), isBlank() (Java 11+), charAt(int). Comparison: equals(Object), equalsIgnoreCase(String), compareTo(String), compareToIgnoreCase(String), startsWith, endsWith, regionMatches. Search: indexOf(int/String, from), lastIndexOf, contains(CharSequence). Modification: substring(begin, end), concat, replace(target, replacement), replaceAll(regex, repl), toLowerCase, toUpperCase, trim, strip, stripLeading, stripTrailing. Splitting/joining: split(String regex), join(CharSequence delimiter, CharSequence... elements). Conversion: valueOf(...), format(String, args...). All return new Strings.",
        diagram: "String s = \"Hello\";\ns.length()         = 5\ns.charAt(1)        = 'e'\ns.indexOf('l')     = 2\ns.lastIndexOf('l') = 3\ns.substring(1, 4)  = \"ell\"\ns.startsWith(\"He\") = true\ns.equals(\"hello\")  = false\ns.equalsIgnoreCase(\"hello\") = true",
        example: "String s = \"Java is fun\";\nString[] words = s.split(\" \");    // [Java, is, fun]\nString csv    = String.join(\",\", words); // Java,is,fun",
        conclusion: "Mastering String methods is a must for Java programming. Group them by purpose: inspect, compare, search, modify, split/join, convert."
      },
      sixteenMark: {
        intro: "String methods cover inspection, comparison, search, modification, splitting/joining, and conversion — all returning new Strings because String is immutable.",
        definition: "The String class provides a rich API for character-sequence manipulation, defined in java.lang.String. All instance methods that would 'change' the string instead return a brand new String object.",
        explanation: "Inspection: length(), isEmpty(), isBlank() (Java 11+), charAt(int), codePointAt(int). Comparison: equals(Object), equalsIgnoreCase(String), compareTo(String), compareToIgnoreCase(String), startsWith(prefix, offset), endsWith(suffix), regionMatches(ignoreCase, toffset, other, ooffset, len), contentEquals(CharSequence). Search: indexOf(int/String, from), lastIndexOf(int/String), contains(CharSequence). Modification: substring(begin, end), concat(String), replace(oldChar, newChar), replace(CharSequence, CharSequence), replaceAll(regex, replacement), replaceFirst(regex, repl), toLowerCase(locale), toUpperCase(locale), trim(), strip() (Unicode whitespace, Java 11+), stripLeading, stripTrailing, indent (Java 12+). Splitting/joining: split(String regex, limit), join(CharSequence delim, Iterable / varargs). Conversion: valueOf(...), copyValueOf(char[]), format(String, args...). Since Java 9 the underlying storage is byte[] + coder (Compact Strings).",
        working: "1. Each method may scan the internal char[] (or byte[] in Java 9+) once or more.\n2. Methods returning 'modified' strings allocate new String objects (immutability).\n3. equals() does a content comparison; == is a reference comparison.\n4. compareTo() returns <0, 0, >0 based on Unicode code points.\n5. split() and replaceAll() compile a Pattern; for repeated regex use, prefer java.util.regex.Pattern directly for caching.",
        diagram: "s = \"Hello\"\n s.length()           = 5\n s.charAt(1)          = 'e'\n s.indexOf('l')       = 2\n s.lastIndexOf('l')   = 3\n s.substring(1, 4)    = \"ell\"\n s.toUpperCase()      = \"HELLO\"\n s.replace('l','L')   = \"HeLLo\"\n s.split(\"\")          = [\"H\",\"e\",\"l\",\"l\",\"o\"]\n s.startsWith(\"He\")   = true",
        example: "String email = \"user@example.com\";\nint at = email.indexOf('@');\nString local  = email.substring(0, at);     // user\nString domain = email.substring(at + 1);    // example.com\nSystem.out.println(local + \" | \" + domain);\n\nString csv = String.join(\",\", \"a\", \"b\", \"c\"); // a,b,c\nString fmt = String.format(\"Hi %s, you are %d\", \"Aswin\", 21);",
        output: "user | example.com\na,b,c\nHi Aswin, you are 21",
        advantages: [
          "Comprehensive API for every common need",
          "Well-tested and immutable",
          "Unicode-aware (with locale overloads)",
          "Convenient static helpers: valueOf, join, format"
        ],
        applications: [
          "Text processing and validation",
          "Parsing delimited data (CSV, TSV, logs)",
          "Building formatted output (format / printf)",
          "Searching and replacing text",
          "Trimming and normalizing user input"
        ],
        conclusion: "String methods are an essential part of the Java developer's toolkit. Group them mentally: inspect, compare, search, modify, split/join, convert — and remember that every method returns a new String."
      }
    },
    viva: [
      { q: "Difference: equals() vs compareTo()?", a: "equals returns boolean for equality; compareTo returns int (negative, 0, positive) for lexicographic ordering." },
      { q: "Does trim() remove all whitespace?", a: "Removes leading/trailing chars <= 0x20 (ASCII whitespace). strip() (Java 11+) handles Unicode whitespace." },
      { q: "Is split() regex-based?", a: "Yes, split takes a regular expression. Use Pattern.quote() to split on a literal string." },
      { q: "Does String.concat modify the original?", a: "No, it returns a new String. Strings are immutable." }
    ],
    quiz: {
      mcqs: [
        { question: "s.length() returns:", options: ["Bytes", "Characters (UTF-16 code units)", "Words", "Code points"], answer: 1, explanation: "Number of chars (UTF-16 code units)." },
        { question: "Which method joins strings with a delimiter?", options: ["split", "concat", "join", "format"], answer: 2, explanation: "String.join(delimiter, elements)." },
        { question: "Which is case-insensitive comparison?", options: ["equals", "equalsIgnoreCase", "compareTo", "contains"], answer: 1, explanation: "equalsIgnoreCase." }
      ],
      trueFalse: [
        { statement: "String methods mutate the original string.", answer: false, explanation: "All return new Strings." },
        { statement: "trim() removes Unicode whitespace.", answer: false, explanation: "trim() removes only chars <= 0x20; use strip() for Unicode whitespace." }
      ]
    },
    revision: { oneMin: "length, charAt, substring, indexOf, replace, split, trim, equals, contains, format, join.", fiveMin: ["Inspection vs Modification", "split uses regex", "equals vs ==", "trim() vs strip()", "compareTo ordering"], examDay: ["List 10 common methods with examples", "Write a parser for CSV using split"], memoryTrick: "String = immutable Swiss Army knife; every method returns a new string.", faq: [{ q: "What is regex in split()?", a: "A regular expression used as the separator. Use Pattern.quote() to escape literal characters." }, { q: "When to use strip() vs trim()?", a: "Use strip() (Java 11+) when you need Unicode-aware whitespace removal; trim() only handles ASCII chars <= 0x20." }] },
    simulator: { type: "none" }
  }
];
