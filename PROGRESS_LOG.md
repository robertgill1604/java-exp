# Java Exam Master - Work Log

## Task: Add `types` (TypeSection) classification to all topics

### Why
- Topics with multiple sub-types (e.g., 5 types of inheritance) had them mashed into a single `explanation` paragraph
- Need: each type as its own card with definition, ASCII diagram, code snippet, key notes, pros/cons
- UI: `TypeCard` component (`src/components/topics/type-card.tsx`) renders `TypeSection` as a card

### Schema (in `src/data/types.ts`)
```ts
type TypeSection = {
  name: string;
  definition: string;
  diagram?: string;
  code: CodeBlock;
  notes: string[];
  pros?: string[];
  cons?: string[];
  exampleOutput?: string;
};
// Used as: ExamAnswer.thirteenMark.types?: TypeSection[]
//           ExamAnswer.sixteenMark.types?: TypeSection[]
```

### Status

| Unit | Topics | Status | Build | types-arrays | Size Before → After |
|------|--------|--------|-------|--------------|---------------------|
| 1    | 11 (10 with types) | DONE | PASS | 20 (10 × 2 marks) | 124KB → 207KB |
| 2    | 10 | DONE | PASS | 20 (10 × 2 marks) | 96KB → 168KB |
| 3    | 7 | DONE | PASS | 14 (7 × 2 marks) | 85KB → 145KB |
| 4    | 9 | DONE | PASS | 18 (9 × 2 marks) | 76KB → 152KB |
| 5    | 7 | DONE | PASS | 14 (7 × 2 marks) | 62KB → 110KB |

**Total: 86 `types` arrays across all units. Build compiles successfully. 11 static pages prerender.**

### Topics with types by unit (planned)

#### Unit 1
- u1-encapsulation: Data Hiding, Controlled Access, Read-Only, Write-Only
- u1-abstraction: Abstract Classes, Interfaces, Abstract Methods
- u1-inheritance: Single, Multilevel, Hierarchical, Multiple, Hybrid
- u1-polymorphism: Compile-time, Runtime
- u1-class-object: Class Members, Instance Members, Local Variables, Block Types
- u1-constructors: Default, Parameterized, Copy, Private, Constructor Chaining
- u1-keywords-static-final: Static Variables, Static Methods, Static Blocks, Final Variables, Final Methods, Final Classes
- u1-method-overloading: Different Number, Different Types, Different Order, Type Promotion, Varargs
- u1-method-overriding: Standard, Covariant Return, Exception Narrowing, Access Widening
- u1-packages-access-control: Public, Protected, Default, Private
- u1-object-oriented-programming: SKIP (intro topic)

#### Unit 2
- u2-inheritance: Single, Multilevel, Hierarchical, Multiple, Hybrid
- u2-types-inheritance: Single, Multilevel, Hierarchical, Multiple, Hybrid
- u2-abstract-class: Abstract Class, Abstract Method, Concrete Class
- u2-interfaces: Regular, Functional, Marker, Default Methods, Static Methods
- u2-multiple-inheritance: Single, Multiple via Interfaces, Diamond Problem, InterfaceName.super
- u2-dynamic-method-dispatch: Overriding, Upcasting, Downcasting, instanceof
- u2-method-overloading: Different Number, Different Types, Different Order, Type Promotion, Varargs
- u2-method-overriding: Standard, Covariant Return, Exception Narrowing, Access Widening
- u2-super: super.field, super.method(), super(), this() vs super()
- u2-packages: Public, Protected, Default, Private

#### Unit 3
- u3-exception-handling: Checked, Unchecked, Errors
- u3-try-catch: try-catch-finally, Multiple catch, try-with-resources, Multi-catch
- u3-throw-vs-throws: throw, throws, Custom exception
- u3-custom-exception: Checked Custom, Unchecked Custom
- u3-multithreading: Thread class, Runnable, Callable
- u3-thread-lifecycle: New, Runnable, Blocked, Waiting, Timed_Waiting, Terminated
- u3-synchronization: synchronized method, synchronized block, static synchronized, volatile, wait/notify

#### Unit 4
- u4-string: String (immutable), StringBuilder (mutable, fast), StringBuffer (mutable, thread-safe)
- u4-string-memory: String Literal, new keyword, intern()
- u4-string-methods: length/charAt/substring, equals/compareTo, indexOf/contains/replace, split/join/format
- u4-exception-types: Checked, Unchecked, Errors
- u4-file-handling: Byte Streams, Character Streams, Buffered Streams, File class
- u4-generics: Generic Class, Generic Method, Generic Interface, Bounded, Wildcards
- u4-collections: List, Set, Map, Queue
- u4-lambda: Lambda Expression, Functional Interface, Method Reference
- u4-streams: Intermediate Operations, Terminal Operations, Short-circuit Operations

#### Unit 5 (JavaFX)
- u5-javafx-intro: SKIP (intro)
- u5-event-handling: ActionEvent, MouseEvent, KeyEvent, WindowEvent
- u5-javafx-controls: Button/TextField/Label, CheckBox/RadioButton, ComboBox/ListView, Slider/ProgressBar
- u5-javafx-layout: BorderPane, VBox/HBox, GridPane, FlowPane/TilePane, StackPane
- u5-application-lifecycle: init(), start(Stage primaryStage), stop()
- u5-styling: CSS Inline, CSS External, JavaFX CSS selectors
- u5-registration-form: Controls section, Layout section, Event handling section

### Accuracy rules to follow
- Verify each Java code snippet compiles (no `class="..."` artifacts, proper indentation)
- Use `formatJavaCode` for single-line code (auto-formats)
- 2-space indent for multi-line code
- ASCII diagrams: use `+--+`, `|`, `^`, `v`, `-->`, `<--`
- 2-4 factual notes per type
- `exampleOutput` matches the code's stdout

### Files modified
- `src/data/types.ts`: added `TypeSection` type, added `types?` to both `thirteenMark` and `sixteenMark`
- `src/components/topics/type-card.tsx`: NEW - renders TypeSection as card, TypeSectionList as grouped section
- `src/components/topics/exam-answer-card.tsx`: wired TypeSectionList into 13/16-mark tabs
- `src/data/units/unitN.ts`: added `types` arrays

### Build verification
- `npm run build` runs from `D:\Projects\Others\java-exp`
- Must see "✓ Compiled successfully"
- 11 static pages should generate
