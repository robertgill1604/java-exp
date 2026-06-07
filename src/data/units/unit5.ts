import type { TopicContent } from "../types";

export const unit5Topics: TopicContent[] = [
  {
    id: "u5-event-handling",
    unitId: 5,
    index: 1,
    title: "Event Handling",
    tagline: "Responding to user actions",
    oneLiner: "Event handling in JavaFX is the mechanism to respond to user actions (mouse clicks, key presses, focus changes, etc.) using event listeners, handlers, and the delegation-based dispatch chain.",
    analogy: "A doorbell system. The button (event source) is pressed (event fires); the bell (handler) is called and rings. Pressing different buttons can ring different bells (polymorphic dispatch).",
    whyExists: "To allow GUI applications to react to user input in a decoupled, type-safe, and composable way using Java's delegation event model (DEM).",
    whereUsed: ["GUI applications", "Games", "Interactive forms", "Drawing tools", "Touch interfaces"],
    visualCue: "🖱️",
    code: {
      language: "java",
      code: `Button btn = new Button("Click me");
btn.setOnAction(e -> System.out.println("Clicked!"));
// Or with EventHandler interface:
btn.setOnAction(new EventHandler<ActionEvent>() {
    public void handle(ActionEvent e) { System.out.println("Clicked!"); }
});
// Property listener (text changes):
Label lbl = new Label("Hi");
lbl.textProperty().addListener((obs, oldV, newV) -> System.out.println(newV));`,
      caption: "JavaFX event handling with lambda, anonymous class, and property listener."
    },
    internalWorking: {
      steps: [
        "User performs an action (mouse click, key press, focus change).",
        "JavaFX constructs an Event of a specific EventType (e.g., ActionEvent.ACTION, MouseEvent.MOUSE_CLICKED).",
        "Event traverses the EventDispatchChain from the root node downward (CAPTURE phase) where EventFilters run.",
        "At the TARGET node, the event is dispatched to registered EventHandlers.",
        "Event then bubbles back up the scene graph (BUBBLING phase) where other handlers may run.",
        "Consumed events (event.consume()) stop further propagation."
      ]
    },
    examAnswer: {
      twoMark: "Event handling in JavaFX is the mechanism to respond to user interactions. An EventHandler is registered on a node (e.g., setOnAction on a Button) and is invoked when the corresponding event occurs. Java 8+ lambdas make this concise via the EventHandler<T extends Event> functional interface.",
      thirteenMark: {
        intro: "Event handling is fundamental to interactive JavaFX apps and follows the delegation event model.",
        definition: "Event handling is a delegation-based model: an event source (Node) registers one or more EventHandler<T extends Event> or EventFilter<T extends Event> instances. When an event occurs, the runtime traverses the scene graph, invoking filters during the capture phase (root → target) and handlers during the bubbling phase (target → root).",
        explanation: "EventHandler<ActionEvent> is a functional interface with a single void handle(T event) method, so lambdas can be used since Java 8. Nodes expose convenience setters like setOnAction, setOnMouseClicked, setOnKeyPressed, setOnMouseEntered, setOnScroll, etc., each replacing any previous handler. For multiple listeners on the same event, use addEventHandler or addEventFilter. The event object carries source, target, type, and event-specific data (mouse coords, key code, modifiers). Events can be consumed to stop propagation.",
        diagram: "Source → Event → Filter (capture) → Target → Handler (bubble)\n\n  CAPTURE phase        TARGET        BUBBLING phase\n   (root → target)    (handlers)    (target → root)\n  +---------------+   +-------+   +---------------+\n  | filter1       |   | h1    |   | h2            |\n  | filter2       |   | h3    |   | h4            |\n  +---------------+   +-------+   +---------------+",
        example: "Button b = new Button(\"Go\"); Label l = new Label(\"...\"); b.setOnAction(e -> l.setText(\"Clicked!\"));",
        conclusion: "JavaFX event handling is clean, lambda-friendly, and provides both capture and bubble phases for fine-grained control over event flow."
      },
      sixteenMark: {
        intro: "JavaFX event handling uses a delegation model with filters, handlers, and a two-phase (capture + bubble) dispatch along the scene graph.",
        definition: "Event handling in JavaFX is the process of capturing and responding to events (mouse, keyboard, touch, window, etc.) using the EventHandler<T extends Event> and EventFilter<T extends Event> interfaces registered on a Node or Scene.",
        explanation: "When an event occurs, JavaFX creates an Event object with a specific EventType. It then walks the EventDispatchChain: starting from the Stage → Scene → root → ... → target. During the CAPTURE phase (root downward), all registered EventFilters on each ancestor are invoked. At the TARGET, the event is delivered. During the BUBBLE phase (target back up to root), EventHandlers on each node are invoked. Convenience methods (setOnAction, etc.) install a single handler. For additive registration, use addEventHandler() / addEventFilter(). Common event types: ActionEvent (buttons, menus), MouseEvent (clicks, moves, enters), KeyEvent (pressed, released, typed), WindowEvent (close, hidden), and InputEvent (parent of mouse + key).",
        working: "1. User triggers event (e.g., clicks a button).\n2. JavaFX builds EventDispatchChain and dispatches the Event.\n3. Capture phase: filters run from root down to target.\n4. Target receives the event; its handlers run.\n5. Bubble phase: handlers on ancestors fire from target back to root.\n6. If event.consume() is called, dispatch stops.",
        diagram: "  CAPTURE (down)              TARGET          BUBBLE (up)\n   +-----------+             +-------+         +-----------+\n   | root      | ---Event--> | target| --Ev--> | root      |\n   | filters   |             |handlers|        | handlers  |\n   +-----------+             +-------+         +-----------+\n   EventDispatchChain: Stage → Scene → Parent → ... → Node",
        example: "Button b = new Button(\"OK\");\nb.addEventFilter(MouseEvent.MOUSE_CLICKED, e -> {\n    if (e.getClickCount() == 2) { System.out.println(\"Double!\"); e.consume(); }\n});\nb.setOnAction(e -> System.out.println(\"Single click action\"));",
        output: "Single click action\nDouble!   (only on double click; consume() prevents ActionEvent)",
        advantages: [
          "Decoupled source vs handler — easy to add/remove listeners",
          "Two-phase (capture + bubble) for fine-grained control",
          "Lambda support since Java 8 (functional interface)",
          "Type-safe generic EventHandler<T extends Event>",
          "Convenience setters for common events",
          "Pluggable EventFilter for early interception"
        ],
        applications: [
          "Button clicks, menu selections",
          "Mouse drag/drop drawing apps",
          "Keyboard shortcuts and form input",
          "Touch gestures on touch screens",
          "Custom events (Event.fireEvent)"
        ],
        conclusion: "Mastering JavaFX event handling — including the capture/bubble model, lambda handlers, filters, and event consumption — is essential for building interactive, responsive applications."
      }
    },
    viva: [
      { q: "What is the difference between filter and handler?", a: "Filter runs in capture phase (root → target); handler runs in bubble phase (target → root)." },
      { q: "Can a node have multiple handlers for the same event?", a: "Yes, via addEventHandler. setOnAction replaces any previous handler." },
      { q: "What does event.consume() do?", a: "Stops the event from being delivered to further nodes/handlers." },
      { q: "Which method is preferred, lambda or anonymous class?", a: "Lambda (since Java 8) — same behavior, more concise, less boilerplate." }
    ],
    quiz: {
      mcqs: [
        { question: "setOnAction expects:", options: ["ActionEvent handler", "MouseEvent", "Runnable", "String"], answer: 0, explanation: "setOnAction takes an EventHandler<ActionEvent>." },
        { question: "EventFilter runs in the:", options: ["Bubble phase", "Capture phase", "Render phase", "Idle phase"], answer: 1, explanation: "Capture phase, from root toward target." },
        { question: "Calling event.consume() will:", options: ["Restart event", "Stop propagation", "Throw an exception", "Log the event"], answer: 1, explanation: "Stops further dispatch." },
        { question: "EventHandler is a(n) ___ interface.", options: ["Marker", "Functional", "Abstract class", "Concrete"], answer: 1, explanation: "Functional interface — single abstract method handle(T)." }
      ],
      trueFalse: [
        { statement: "Filters run in bubble phase.", answer: false, explanation: "Capture phase." },
        { statement: "setOnAction replaces any existing handler.", answer: true, explanation: "Yes, setOn* is a single-slot setter." },
        { statement: "Lambdas can be used as event handlers in JavaFX.", answer: true, explanation: "Since Java 8, yes." }
      ]
    },
    revision: { oneMin: "Event → capture (filters) → target → bubble (handlers).", fiveMin: ["Lambda handlers", "setOn* methods", "addEventHandler vs addEventFilter", "event.consume()", "EventDispatchChain"], examDay: ["Lambda button example", "Capture vs bubble diagram"], memoryTrick: "Capture = Car (going down); Bubble = Ball (going up).", faq: [{ q: "What is event bubbling?", a: "Event travels from target up to root in the bubble phase." }, { q: "EventHandler vs EventFilter?", a: "Handler fires at/after target; filter can intercept earlier in capture phase." }] },
    simulator: { type: "javafx-event" }
  },
  {
    id: "u5-event-listener",
    unitId: 5,
    index: 2,
    title: "Event Listener",
    tagline: "Listening for events",
    oneLiner: "An event listener is an object that waits for and reacts to events fired by an event source; in JavaFX this is implemented via the EventHandler<T extends Event> functional interface.",
    analogy: "A smoke detector. It listens (waits) for smoke (event) and triggers an alarm (handler). Multiple detectors can listen to the same fire — multiple listeners on one source.",
    whyExists: "To decouple event sources from event handlers so that producers (UI) and consumers (logic) can vary independently.",
    whereUsed: ["GUI", "Servlet listeners", "JavaFX EventHandler", "Observer pattern", "Reactive streams"],
    visualCue: "👂",
    code: {
      language: "java",
      code: `btn.setOnAction(event -> System.out.println("clicked"));            // lambda listener
btn.addEventHandler(MouseEvent.MOUSE_CLICKED, e -> handleClick(e));   // additive
btn.removeEventHandler(MouseEvent.MOUSE_CLICKED, handler);            // removal
// Property listener (similar pattern):
slider.valueProperty().addListener((obs, oldV, newV) -> label.setText("Vol: " + newV));`,
      caption: "Lambda as listener and additive handler registration."
    },
    internalWorking: {
      steps: [
        "Listener (EventHandler or EventFilter) is registered with a source node via setOn* or addEventHandler/addEventFilter.",
        "Source keeps an internal list of registered listeners (per EventType).",
        "When the source fires an event, its internal dispatch iterates the listener list and invokes handle() / handle() on each.",
        "removeEventHandler() removes a specific listener instance (by reference equality)."
      ]
    },
    examAnswer: {
      twoMark: "An event listener is an object that implements an event-handling interface (e.g., EventHandler<ActionEvent> in JavaFX, ActionListener in Swing) and is registered on a source. When the source fires the event, the listener's method is invoked. JavaFX's EventHandler<T extends Event> is a functional interface, so lambdas are common.",
      thirteenMark: {
        intro: "Listeners are key to event-driven programming and the Observer pattern.",
        definition: "An event listener is an object that implements a listener interface (EventHandler<T extends Event> in JavaFX) and is notified when an event of interest occurs on a source. It is the consumer side of the event delegation model.",
        explanation: "In JavaFX, EventHandler<T extends Event> is a functional interface with handle(T event). It can be implemented as a lambda, an anonymous class, or a method reference. setOn* methods (setOnAction, setOnMouseClicked, ...) install/replace a single handler; addEventHandler allows multiple listeners. Listeners receive the event and can read source, target, type, and event-specific data (e.g., MouseEvent.getX(), KeyEvent.getCode()).",
        diagram: "Source (Button)\n   |\n   |-- listeners: [EventHandler#1, EventHandler#2, ...]\n   |\n   '--- on event --> listener.handle(e) for each",
        example: "btn.setOnMouseClicked(e -> System.out.println(\"x=\" + e.getX() + \" y=\" + e.getY()));",
        conclusion: "Listeners decouple event generation from response and form the foundation of JavaFX's interaction model."
      },
      sixteenMark: {
        intro: "Event listeners are a core part of GUI programming and follow the Observer pattern.",
        definition: "An event listener is an object registered to receive notifications of events occurring on a source. In JavaFX, it implements the EventHandler<T extends Event> interface (functional) whose single method handle(T event) is invoked when a matching event is dispatched.",
        explanation: "You can attach handlers via setOn* methods (which replace any previous handler) or addEventHandler (additive, supports multiple listeners). For custom events, you can create your own EventType and dispatch them with Event.fireEvent(target, customEvent). Property listeners (added via ObservableValue.addListener) observe value changes on properties like text, value, selected, etc., and are similar in spirit but live on properties rather than events. Lambda listeners are concise; method references allow reuse. Listeners can be removed with removeEventHandler when no longer needed (e.g., when a node is removed from the scene).",
        working: "1. Listener registered with source via setOn* or addEventHandler.\n2. Source's internal event dispatcher walks the registered listeners.\n3. Each listener's handle(event) is invoked with the event object.\n4. Listener can read state, mutate UI, or call event.consume().\n5. Listeners can be removed via removeEventHandler(type, listener).",
        diagram: "Source\n  +-----------------------+\n  | handlers[ActionEvent] |  <-- list per EventType\n  |   -> handler1        |\n  |   -> handler2        |\n  +-----------------------+\n  on Event: dispatch all handlers in order",
        example: "Button btn = new Button(\"Click\");\nEventHandler<MouseEvent> h = e -> System.out.println(\"click\");\nbtn.addEventHandler(MouseEvent.MOUSE_CLICKED, h);\n// later: btn.removeEventHandler(MouseEvent.MOUSE_CLICKED, h);",
        output: "click",
        advantages: [
          "Decouples source from handler",
          "Multiple listeners per source / event type",
          "Reusable handlers across nodes",
          "Lambda support for terse code",
          "Type-safe via generic EventHandler<T>"
        ],
        applications: [
          "GUI controls responding to clicks",
          "Game input (keyboard, mouse)",
          "Observable property change tracking",
          "Custom domain events with EventType"
        ],
        conclusion: "Listeners are foundational to event-driven Java applications, enabling loosely coupled, reactive UIs that respond cleanly to user input and state changes."
      }
    },
    viva: [
      { q: "How to remove a listener?", a: "removeEventHandler(EventType, handler) — by reference equality." },
      { q: "Difference: setOn* vs addEventHandler?", a: "setOn* replaces the single handler; addEventHandler adds to the list (multiple allowed)." },
      { q: "Can a lambda listener be removed?", a: "Only if you keep a reference to the same lambda — reference equality is used." },
      { q: "What is a property listener?", a: "An InvalidationListener or ChangeListener on an ObservableValue (e.g., text, value)." }
    ],
    quiz: {
      mcqs: [
        { question: "JavaFX listener interface is:", options: ["Runnable", "EventHandler", "ActionListener", "Listener"], answer: 1, explanation: "EventHandler<T extends Event>." },
        { question: "setOnAction does what to previous handler?", options: ["Adds", "Replaces", "Throws", "Ignores"], answer: 1, explanation: "setOn* is a single-slot setter." },
        { question: "To attach multiple listeners to one event, use:", options: ["setOnAction", "addEventHandler", "setListener", "addAction"], answer: 1, explanation: "addEventHandler is additive." }
      ],
      trueFalse: [
        { statement: "A lambda can be a listener.", answer: true, explanation: "Yes, since Java 8." },
        { statement: "removeEventHandler uses object equality (==).", answer: true, explanation: "Reference equality of the handler instance." }
      ]
    },
    revision: { oneMin: "Listener = object that reacts to events.", fiveMin: ["EventHandler functional interface", "setOn* vs addEventHandler", "Property listeners", "Removal by reference"], examDay: ["Lambda listener example", "addEventHandler pattern"], memoryTrick: "Listener = ear, source = speaker.", faq: [{ q: "setOn* vs addEventHandler?", a: "setOn* replaces; addEventHandler adds. Use addEventHandler for multiple subscribers." }] },
    simulator: { type: "javafx-event" }
  },
  {
    id: "u5-stage-scene",
    unitId: 5,
    index: 3,
    title: "Stage & Scene",
    tagline: "Top-level windows and content",
    oneLiner: "In JavaFX, a Stage is the top-level container (OS window), and a Scene is the content tree (scene graph) attached to the stage. A Stage can display one Scene at a time.",
    analogy: "Stage = theater stage. Scene = the set/props on the stage. You swap scenes to change what is on the stage. The Application's start(Stage) hands you the primary stage.",
    whyExists: "To organize the visual hierarchy of a JavaFX application: window → content tree → nodes, enabling scene switching, CSS, and hardware-accelerated rendering via Prism.",
    whereUsed: ["All JavaFX apps", "Multi-window dialogs", "Wizards (scene swap)", "MDI applications"],
    visualCue: "🎬",
    code: {
      language: "java",
      code: `public class MyApp extends Application {
  @Override public void start(Stage stage) {
    VBox root = new VBox(new Label("Hello"), new Button("OK"));
    Scene scene = new Scene(root, 400, 300);
    scene.getStylesheets().add("file:style.css");
    stage.setTitle("My App");
    stage.setScene(scene);
    stage.setResizable(false);
    stage.show();
  }
  public static void main(String[] args) { launch(args); }
}`,
      caption: "Creating a stage, scene, and root layout."
    },
    internalWorking: {
      steps: [
        "Application.launch() initializes the toolkit and calls init() (optional, runs on JavaFX Application Thread).",
        "start(Stage primaryStage) is called with the primary stage created by the platform.",
        "Inside start, you build a root Node (e.g., VBox) and wrap it in a Scene(root, w, h).",
        "stage.setScene(scene) attaches the scene; stage.show() makes it visible.",
        "Prism (JavaFX's graphics pipeline) renders the scene graph each frame using GPU acceleration.",
        "When the last window closes, stop() is invoked and the application exits."
      ]
    },
    examAnswer: {
      twoMark: "Stage is the top-level window in JavaFX (created by the platform or via new Stage()); Scene is the content of the stage, consisting of a root node and a graph of children. A stage can have only one scene at a time, but scenes can be swapped.",
      thirteenMark: {
        intro: "Stage and Scene are the top of the JavaFX hierarchy.",
        definition: "Stage is the top-level container representing a window (an instance of javafx.stage.Stage, which extends Window). Scene is a tree of nodes (the scene graph) attached to a stage (an instance of javafx.scene.Scene).",
        explanation: "Stage methods: setTitle, setScene, show, hide, close, setResizable, setFullScreen, setMaximized, initStyle (DECORATED/UNDECORATED/TRANSPARENT/UTILITY), initModality (NONE/MODAL), centerOnScreen. Scene methods: setRoot, getRoot, getStylesheets (for CSS), getWidth/getHeight, setFill, setCursor. Only one scene is shown at a time per stage, but you can switch with setScene(). The primary stage is created by the Application's start(Stage) method; additional stages can be created with new Stage().",
        diagram: "Stage (window)\n  +-- title bar\n  +-- Scene\n        +-- root (e.g., VBox)\n              +-- Button\n              +-- Label",
        example: "VBox root = new VBox(new Label(\"Hi\"), new Button(\"OK\"));\nStage s = new Stage();\ns.setScene(new Scene(root, 320, 200));\ns.setTitle(\"Demo\");\ns.show();",
        conclusion: "Stage and Scene are essential to JavaFX's structure, providing clear window/content separation, scene swapping, and CSS integration."
      },
      sixteenMark: {
        intro: "JavaFX apps use Stage and Scene to organize UI hierarchy and lifecycle.",
        definition: "Stage is the top-level window in a JavaFX app (an OS-level window). Scene is the content tree of nodes attached to a stage. The Application subclass's start(Stage primaryStage) method is the entry point called by the framework after init().",
        explanation: "Stages have a lifecycle: created, shown, hidden, closed. You can use initStyle() to choose between decorated, undecorated, transparent, or utility windows, and initModality() to make a new stage block its owner (modal). The scene's root is typically a layout Pane (VBox, HBox, BorderPane, StackPane, GridPane, etc.). CSS can be applied to a scene via getStylesheets().add(\"file:style.css\") for global styling, or per-node with setStyle() for inline styles (e.g., -fx-background-color). The scene graph is rendered using the Prism pipeline (hardware-accelerated) and laid out by the layout system in pulses (~60 fps). The Application's init() method runs before start() and is good for non-UI setup; stop() runs when the last window closes and is good for cleanup.",
        working: "1. Application.start(Stage) is called by the framework.\n2. Create a root layout (e.g., BorderPane).\n3. Wrap in Scene: new Scene(root, width, height).\n4. Optionally attach CSS: scene.getStylesheets().add(\"style.css\").\n5. stage.setScene(scene) and stage.show().\n6. (Optional) listen for window events via stage.setOnCloseRequest().\n7. When last window closes → stop() → app exits.",
        diagram: "Application Thread\n   |\n   init()\n   |\n   start(Stage primaryStage)\n   |\n   +--- Stage (window) -- title, scene, style, modality\n   |     |\n   |     +-- Scene (w x h, css, fill, cursor)\n   |           |\n   |           +-- root: Pane\n   |                 +-- Node1, Node2, ...\n   |\n   stop()   <-- when last window closes",
        example: "@Override public void start(Stage stage) {\n  StackPane root = new StackPane();\n  root.getChildren().add(new Text(\"Hello\"));\n  Scene scene = new Scene(root, 300, 200);\n  scene.setFill(Color.LIGHTBLUE);\n  stage.setTitle(\"Demo\");\n  stage.setScene(scene);\n  stage.setResizable(false);\n  stage.show();\n}",
        output: "Window titled 'Demo' with light blue background and 'Hello' text in the center.",
        advantages: [
          "Clear separation of window vs content",
          "Scene swapping enables wizard/multi-view UIs",
          "Hardware-accelerated rendering (Prism)",
          "CSS integration for global theming",
          "Programmatic and declarative (FXML) UI options"
        ],
        applications: [
          "Desktop applications",
          "Tools and IDEs",
          "Games and visualizations",
          "Multi-window dialogs (modal Stages)"
        ],
        conclusion: "Stage and Scene form the foundation of any JavaFX application. Mastering their lifecycle, styling, and scene switching is essential for building robust, polished desktop UIs."
      }
    },
    viva: [
      { q: "How many scenes can a stage have at once?", a: "Only one — setScene replaces the displayed scene." },
      { q: "What is the primary stage?", a: "The main stage passed to Application.start() by the framework." },
      { q: "What is the difference between Stage and Window?", a: "Stage extends Window; Stage adds the public JavaFX API (setScene, show, initStyle, etc.)." },
      { q: "How is CSS applied to a Scene?", a: "scene.getStylesheets().add(\"file:style.css\") or scene.getStylesheets().add(getClass().getResource(\"style.css\").toExternalForm())." }
    ],
    quiz: {
      mcqs: [
        { question: "Scene contains:", options: ["Window", "Graph of nodes", "Process", "Class"], answer: 1, explanation: "Scene = node graph (the scene graph)." },
        { question: "Stage is:", options: ["A Node", "A Window", "A CSS class", "A thread"], answer: 1, explanation: "Stage is a top-level window." },
        { question: "Which method makes the stage visible?", options: ["show()", "open()", "setVisible(true)", "display()"], answer: 0, explanation: "stage.show() displays the window." },
        { question: "Application.start() is given:", options: ["A Scene", "A Stage", "A Pane", "A Node"], answer: 1, explanation: "start(Stage primaryStage)." }
      ],
      trueFalse: [
        { statement: "A Stage is a Node.", answer: false, explanation: "Stage is a Window; Scene contains Nodes." },
        { statement: "You can swap a Stage's scene at runtime.", answer: true, explanation: "stage.setScene(newScene) replaces the current scene." }
      ]
    },
    revision: { oneMin: "Stage = window, Scene = content tree, root = topmost Parent.", fiveMin: ["setScene", "show()", "Application.start()", "getStylesheets()", "initStyle/initModality"], examDay: ["Stage/Scene example with CSS"], memoryTrick: "Stage = theater window, Scene = what's on it.", faq: [{ q: "Can stage be modal?", a: "Yes, via initModality(Modality.APPLICATION_MODAL or WINDOW_MODAL)." }, { q: "Init vs start?", a: "init() runs before start() (no UI), start() receives the primary stage." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "Stage", label: "Main Window" }, { type: "Scene", label: "Root" }] }
  },
  {
    id: "u5-hbox-vbox",
    unitId: 5,
    index: 4,
    title: "HBox & VBox",
    tagline: "Horizontal and vertical layouts",
    oneLiner: "HBox arranges its children in a single horizontal row; VBox arranges them in a single vertical column. Both are layout panes in javafx.scene.layout.",
    analogy: "HBox = books on a horizontal shelf. VBox = books in a vertical stack. Both let you control spacing, padding, and alignment like arranging books neatly.",
    whyExists: "To provide simple linear layouts without manual positioning, while remaining composable (HBox and VBox can be nested for complex UIs).",
    whereUsed: ["Forms", "Toolbars", "Menus", "Button rows", "Side panels"],
    visualCue: "📐",
    code: {
      language: "java",
      code: `HBox row  = new HBox(10, new Button("A"), new Button("B")); // 10px gap
row.setPadding(new Insets(10));
row.setAlignment(Pos.CENTER);
VBox col  = new VBox(5, new Label("Top"), new TextField(), new Button("Go"));
col.setSpacing(5);
Button b = new Button("Big"); HBox.setHgrow(b, Priority.ALWAYS);  // grow to fill
row.getChildren().add(b);`,
      caption: "HBox and VBox with spacing, padding, alignment, and Hgrow."
    },
    internalWorking: {
      steps: [
        "Each child reports its preferred size (computePrefWidth/Height) based on its content.",
        "Layout sums the children's preferred sizes plus spacing × (n-1) and adds padding.",
        "If the pane is larger than preferred, alignment and Hgrow/Vgrow decide extra space distribution.",
        "If the pane is smaller, children may be clipped or shrunk (depending on min size and resize policy)."
      ]
    },
    examAnswer: {
      twoMark: "HBox and VBox are JavaFX layout containers in javafx.scene.layout. HBox arranges child nodes horizontally (left to right); VBox arranges them vertically (top to bottom). Both support spacing (gap between children), padding (Insets), and alignment (Pos).",
      thirteenMark: {
        intro: "HBox and VBox are simple, composable linear layout panes.",
        definition: "HBox (HorizontalBox) and VBox (VerticalBox) are Pane subclasses that lay out children in a single row (HBox) or column (VBox), with optional spacing, padding, alignment, and per-node growth priority.",
        explanation: "Children are added in order via the constructor or getChildren().add(). spacing sets the gap between consecutive children. setPadding(new Insets(...)) adds inner padding on all four sides. setAlignment(Pos.CENTER) (or Pos.CENTER_LEFT, TOP_RIGHT, BASELINE_CENTER, etc.) controls how children are aligned within the pane. HBox.setHgrow(child, Priority.ALWAYS) and VBox.setVgrow(child, Priority.ALWAYS) make a child expand to fill extra space. HBox.fillWidth (boolean) controls whether children share the available width equally when they don't have Hgrow. Per-child margins can be set with HBox.setMargin(child, new Insets(...)).",
        diagram: "HBox: [A] - [B] - [C]   (left → right)\nVBox: [A]\n       [B]\n       [C]   (top → bottom)\n\nNesting: VBox containing HBoxes is a very common form layout.",
        example: "HBox h = new HBox(5, new Button(\"OK\"), new Button(\"Cancel\"));\nh.setAlignment(Pos.CENTER);",
        conclusion: "HBox and VBox are the simplest, most-used layout containers in JavaFX, and nesting them gives powerful form-like layouts with minimal code."
      },
      sixteenMark: {
        intro: "HBox and VBox are linear layout panes for horizontal and vertical child arrangement, with rich options for spacing, padding, alignment, and growth.",
        definition: "HBox (HorizontalBox) and VBox (VerticalBox) are Pane subclasses in javafx.scene.layout that lay out children in a single row or column, with optional spacing, padding, alignment, and per-child growth priority.",
        explanation: "HBox arranges children left-to-right by default; alignment can be set (Pos.CENTER, Pos.CENTER_LEFT, Pos.TOP_RIGHT, Pos.BASELINE_CENTER, etc.). VBox stacks top-to-bottom. The Insets class represents padding (top, right, bottom, left) and margins. fillWidth (HBox) makes all children fill the available width equally unless overridden by Hgrow; HBox's fillHeight controls vertical fill. HBox and VBox can be freely nested: a VBox of HBoxes is the canonical pattern for forms. Use Region.setPrefSize / setMinSize / setMaxSize to hint at sizing; Pane.setStyle supports inline CSS like -fx-background-color. The layout pass is triggered on each pulse whenever the scene graph changes (children added, size changed, etc.).",
        working: "1. Add children via constructor or getChildren().add().\n2. Optionally set spacing, padding, alignment, fillWidth/Height.\n3. Set per-child growth with HBox.setHgrow/VBox.setVgrow.\n4. Layout pass queries each child for preferred size, distributes spacing and Hgrow, and places.\n5. Rendering uses the computed layout positions and sizes.",
        diagram: "HBox(spacing=10, alignment=CENTER)\n  +--[Button A]--[Button B]--[Button C]--+\n\nVBox(spacing=5, padding=10)\n  +--[Label]------+\n  |  [TextField]  |\n  |  [Button]     |\n  +---------------+\n\nNested form:\n  VBox\n    HBox: [Label][TextField]\n    HBox: [Label][TextField]\n    Button [Submit]",
        example: "HBox toolbar = new HBox(10, new Button(\"Save\"), new Button(\"Load\"), new Button(\"Exit\"));\ntoolbar.setAlignment(Pos.CENTER);\ntoolbar.setPadding(new Insets(8));\nButton save = new Button(\"Save\");\nHBox.setHgrow(save, Priority.ALWAYS);  // expands\ntoolbar.getChildren().add(save);",
        output: "Toolbar with three buttons centered; the 'Save' button grows to fill any extra horizontal space.",
        advantages: [
          "Simple, predictable, and lightweight",
          "Composability via nesting (VBox of HBoxes)",
          "Fine-grained control with spacing, padding, alignment",
          "Per-child growth/margins for responsive layout",
          "Inline CSS via setStyle() for theming"
        ],
        applications: [
          "Forms (label + field rows)",
          "Toolbars and button rows",
          "Menus and side panels",
          "Login/registration screens",
          "Card layouts and dialog bodies"
        ],
        conclusion: "HBox and VBox are the workhorses of JavaFX layout. Mastering spacing, padding, alignment, and growth priorities enables building clean, responsive UIs with very little code."
      }
    },
    viva: [
      { q: "How to add spacing?", a: "new HBox(10, ...) or h.setSpacing(10) — same for VBox." },
      { q: "How to center children?", a: "setAlignment(Pos.CENTER)." },
      { q: "How to make a child grow?", a: "HBox.setHgrow(child, Priority.ALWAYS) or VBox.setVgrow(child, Priority.ALWAYS)." },
      { q: "What does fillWidth do on HBox?", a: "If true, all children share available width equally (unless overridden by Hgrow)." }
    ],
    quiz: {
      mcqs: [
        { question: "HBox arranges children:", options: ["Vertically", "Horizontally", "In a grid", "Freely"], answer: 1, explanation: "Horizontal row." },
        { question: "Which class represents padding/margins?", options: ["Margin", "Insets", "Padding", "Edge"], answer: 1, explanation: "Insets in javafx.geometry." },
        { question: "To make a child fill extra horizontal space in HBox use:", options: ["setGrow", "setHgrow(Priority.ALWAYS)", "setFill(true)", "setExpand()"], answer: 1, explanation: "HBox.setHgrow(child, Priority.ALWAYS)." }
      ],
      trueFalse: [
        { statement: "HBox and VBox can be nested.", answer: true, explanation: "Yes — a very common pattern." },
        { statement: "VBox has setHgrow but not setVgrow.", answer: false, explanation: "VBox has setVgrow; HBox has setHgrow." }
      ]
    },
    revision: { oneMin: "HBox = row, VBox = column; spacing + padding + alignment.", fiveMin: ["Insets", "Pos.CENTER", "Priority.ALWAYS", "fillWidth", "Nesting"], examDay: ["VBox of HBoxes form layout", "Hgrow example"], memoryTrick: "HBox = row, VBox = column; H goes horizontal, V goes vertical.", faq: [{ q: "What is fillWidth?", a: "HBox option to make all children the same width when no Hgrow is set." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "HBox", label: "HBox" }, { type: "VBox", label: "VBox" }] }
  },
  {
    id: "u5-combobox-listview",
    unitId: 5,
    index: 5,
    title: "ComboBox & ListView",
    tagline: "Selecting from a list",
    oneLiner: "ComboBox<T> is a drop-down list allowing the user to select one of several options; ListView<T> displays a vertical list of selectable items, supporting single or multiple selection.",
    analogy: "ComboBox = a closed drawer you open to pick one item. ListView = an open shelf of items always visible. Both are populated from an ObservableList<T>.",
    whyExists: "To provide pre-defined choices to the user in a compact, observable, and customizable way, replacing ad-hoc text input with validated selections.",
    whereUsed: ["Country/state pickers", "Settings screens", "Filters", "Searchable lists", "Tag pickers"],
    visualCue: "📋",
    code: {
      language: "java",
      code: `ComboBox<String> cb = new ComboBox<>();
cb.getItems().addAll("Red", "Green", "Blue");
cb.setValue("Red");
cb.setEditable(true);                                   // user can type
cb.setPromptText("Pick a color");
cb.setOnAction(e -> System.out.println(cb.getValue()));
ListView<String> lv = new ListView<>(FXCollections.observableArrayList("Apple", "Banana", "Cherry"));
lv.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE);
lv.getSelectionModel().selectedItemProperty().addListener((o, ov, nv) -> System.out.println(nv));`,
      caption: "ComboBox (drop-down) and ListView (visible list) with selection."
    },
    internalWorking: {
      steps: [
        "Both controls back their items with an ObservableList<T>, so UI auto-updates when the list changes.",
        "A CellFactory (Callback<ListView<T>, ListCell<T>>) creates a ListCell for each item, allowing custom rendering.",
        "A SelectionModel tracks which item(s) are selected; it exposes selectedItem / selectedIndex properties.",
        "For ComboBox, the editor is a TextField when editable=true, otherwise just a label showing the value."
      ]
    },
    examAnswer: {
      twoMark: "ComboBox is a drop-down list that allows the user to select one item from many. ListView displays a vertical list of items from which the user can select one or multiple. Both use ObservableList<T> for their items and expose a SelectionModel for tracking selection.",
      thirteenMark: {
        intro: "ComboBox and ListView are selection controls in javafx.scene.control.",
        definition: "ComboBox<T> is a drop-down list of T items, showing the selected value with an arrow that expands the full list. ListView<T> displays T items in a vertical scrollable list with built-in selection.",
        explanation: "Use getItems() to access the underlying ObservableList<T> (so add/remove updates UI automatically). setValue/getValue works on ComboBox; ListView uses getSelectionModel().getSelectedItem() and selectedItemProperty(). A CellFactory (setCellFactory) customizes how each item is rendered (text, graphics). Both can fire change events via selection property listeners. ComboBox.setEditable(true) allows free-text input (with completion from items).",
        diagram: "ComboBox (collapsed):  [ Red         ▼ ]\n              (expanded):   [ Red         ▲ ]\n                            +---------+\n                            | Red     |\n                            | Green   |\n                            | Blue    |\n                            +---------+\nListView:        +---------+\n                | Apple   |\n                | Banana  |\n                | Cherry  |\n                +---------+",
        example: "ComboBox<String> cb = new ComboBox<>();\ncb.getItems().addAll(\"A\", \"B\", \"C\");\ncb.setValue(\"A\");",
        conclusion: "Both are essential for choice input; ComboBox for compactness, ListView for visibility and multi-selection."
      },
      sixteenMark: {
        intro: "ComboBox and ListView provide selection from a list of items with rich customization and observable data binding.",
        definition: "ComboBox<T> shows a collapsed drop-down that expands on click to reveal a list of T items, while ListView<T> shows T items in a vertical scrollable list. Both back their items with ObservableList<T> and use a SelectionModel to track chosen item(s).",
        explanation: "ComboBox supports editing (setEditable(true)) so users can type a custom value in addition to picking from the list. The converter (setConverter) lets you map between String and T (useful for custom types). ListView supports single or multiple selection (setSelectionMode(SelectionMode.MULTIPLE)). CellFactory allows custom rendering of items (e.g., with images, two-line rows, colored badges). Both can be observed via listeners on the selection model (selectedItemProperty) or via a ChangeListener on the items list. FocusModel supports keyboard navigation. For very large lists, use a paging ListView or virtualize rendering (default cells are virtualized).",
        working: "1. Create with items (or empty and add later).\n2. Add items via getItems().add(...) — ObservableList auto-updates UI.\n3. Configure selection: cb.setValue(x) or lv.getSelectionModel().select(i).\n4. (Optional) Provide a CellFactory for custom rendering.\n5. Listen to selection changes for reactive UI updates.",
        diagram: "ComboBox (single-select drop-down)\n  collapsed: [ value      ▼ ]\n  expanded:  +----------------+\n             | item 1         |\n             | item 2  <--sel |\n             | item 3         |\n             +----------------+\n\nListView (single or multi-select)\n  +-----------+\n  | item 1    |\n  | item 2    |  <-- selected (multi: shift/ctrl)\n  | item 3    |\n  | ...       |\n  +-----------+",
        example: "ComboBox<String> cb = new ComboBox<>(FXCollections.observableArrayList(\"A\", \"B\", \"C\"));\ncb.setOnAction(e -> System.out.println(\"Picked: \" + cb.getValue()));\n\nListView<String> lv = new ListView<>(FXCollections.observableArrayList(\"Apple\", \"Banana\"));\nlv.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE);\nlv.getSelectionModel().selectedItemProperty().addListener((o, ov, nv) -> System.out.println(nv));",
        output: "On selection, prints the chosen item(s) to console.",
        advantages: [
          "Compact UI (ComboBox) and visible list (ListView)",
          "Observable item list — UI updates automatically",
          "Customizable rendering with CellFactory",
          "Multiple-selection support (ListView)",
          "Editable text input (ComboBox)"
        ],
        applications: [
          "Forms (country, language, theme pickers)",
          "Filters and faceted search",
          "Settings screens",
          "Tag/keyword pickers",
          "Reorderable lists (with drag/drop extension)"
        ],
        conclusion: "ComboBox and ListView are versatile selection controls for JavaFX. Understanding ObservableList, SelectionModel, and CellFactory unlocks powerful, reactive list UIs."
      }
    },
    viva: [
      { q: "How to make ComboBox editable?", a: "setEditable(true)." },
      { q: "How to allow multiple selection in ListView?", a: "lv.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE)." },
      { q: "What is a CellFactory?", a: "A Callback<ListView<T>, ListCell<T>> that creates a custom ListCell for rendering each item (e.g., with images, two lines)." },
      { q: "Why use ObservableList instead of ArrayList?", a: "ObservableList fires change events so the UI auto-updates when items are added/removed." }
    ],
    quiz: {
      mcqs: [
        { question: "ComboBox is used to:", options: ["Show images", "Pick one from many", "Enter free text", "Display grid"], answer: 1, explanation: "Pick one item from a drop-down list." },
        { question: "ListView's items should be an:", options: ["ArrayList", "ObservableList", "HashSet", "Vector"], answer: 1, explanation: "ObservableList<T> for automatic UI updates." },
        { question: "To customize how items render, override:", options: ["CellFactory", "ItemFactory", "RenderBuilder", "setRender"], answer: 0, explanation: "setCellFactory(Callback<ListView<T>, ListCell<T>>)." }
      ],
      trueFalse: [
        { statement: "ListView supports multi-selection.", answer: true, explanation: "Yes, via SelectionModel." },
        { statement: "ComboBox cannot be made editable.", answer: false, explanation: "setEditable(true) makes it editable." }
      ]
    },
    revision: { oneMin: "ComboBox = dropdown, ListView = visible list; both use ObservableList + SelectionModel.", fiveMin: ["ObservableList", "SelectionMode", "CellFactory", "setEditable", "selectedItemProperty"], examDay: ["ComboBox + ListView code", "Multi-selection example"], memoryTrick: "Combo = compressed, List = laid out.", faq: [{ q: "Editable ComboBox?", a: "setEditable(true) for user text input + suggestions from items." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "ComboBox", label: "Choose" }, { type: "ListView", label: "List" }] }
  },
  {
    id: "u5-textfield-button-label",
    unitId: 5,
    index: 6,
    title: "TextField, Button, Label",
    tagline: "Basic input/output controls",
    oneLiner: "TextField is a single-line text input. PasswordField is a masked TextField. Button is a clickable control firing ActionEvent. Label is a non-editable text display that can also host a graphic (icon).",
    analogy: "TextField = blank form field. PasswordField = the same field with dots. Button = action trigger. Label = printed name tag.",
    whyExists: "To provide the most basic input, output, and trigger primitives for any GUI form or dialog.",
    whereUsed: ["Forms", "Dialogs", "Search bars", "Every GUI app"],
    visualCue: "🔘",
    code: {
      language: "java",
      code: `TextField tf = new TextField();
tf.setPromptText("Enter your name");
tf.setPrefColumnCount(20);
PasswordField pf = new PasswordField();
Button btn = new Button("Submit");
ImageView icon = new ImageView(new Image("file:check.png"));
btn.setGraphic(icon);
Label lbl = new Label("Status: ready");
btn.setOnAction(e -> lbl.setText("Hi " + tf.getText() + "!"));
tf.setOnKeyPressed(e -> { if (e.getCode() == KeyCode.ENTER) btn.fire(); });`,
      caption: "TextField, PasswordField, Button with graphic, and Label."
    },
    internalWorking: {
      steps: [
        "TextField exposes a StringProperty text; setting it programmatically updates the displayed text and fires change events.",
        "PasswordField extends TextField and masks input with bullets/circles.",
        "Button has a StringProperty text and a BooleanProperty armed; clicking fires an ActionEvent if the button is not disabled.",
        "Label is read-only; it can wrap text (setWrapText(true)) and display a graphic (setGraphic(node))."
      ]
    },
    examAnswer: {
      twoMark: "TextField is a single-line text input control in javafx.scene.control. PasswordField is a TextField subclass that masks input. Button is a clickable control that fires an ActionEvent when clicked. Label displays read-only text and optionally a graphic.",
      thirteenMark: {
        intro: "These are the basic controls in JavaFX and the building blocks of any form.",
        definition: "TextField, PasswordField, Button, and Label are the most fundamental input and display controls in javafx.scene.control. They all extend Control/Region and have observable properties (text, promptText, graphic, etc.).",
        explanation: "TextField: getText(), setText(), setPromptText(\"...\") for placeholder, setPrefColumnCount(n) for width hint. PasswordField: same as TextField, but displays dots. Button: setText, setOnAction, setGraphic(Node), setDisable. Label: setText, setGraphic, setWrapText(true). They are typically arranged in HBox/VBox/GridPane.",
        diagram: "Label: \"Name:\"\nTextField: [_________________]\nPasswordField: [*****]\nButton: [Submit 🖫]",
        example: "TextField tf = new TextField(); Button b = new Button(\"OK\"); Label l = new Label(\"Status\"); b.setOnAction(e -> l.setText(\"Hi \" + tf.getText()));",
        conclusion: "These four controls are the building blocks of any JavaFX form, and together enable simple, complete input/output interactions."
      },
      sixteenMark: {
        intro: "TextField, PasswordField, Button, and Label are basic input/output controls in JavaFX with rich text, graphic, and event features.",
        definition: "TextField is a single-line text input control. PasswordField is a TextField that masks its content. Button is a clickable control that fires an ActionEvent when activated. Label is a non-editable text display that can host a graphic (icon, image) and wrap text.",
        explanation: "TextField supports prompt text (placeholder, setPromptText), text change listeners (textProperty().addListener), action handlers (setOnAction, fired on Enter), and a default column count (setPrefColumnCount). PasswordField hides input but stores the actual string. Button can have text and/or a graphic (setGraphic(node)) and supports keyboard activation. Button.fire() simulates a click programmatically. Label can wrap text (setWrapText(true)) and display a graphic to the left of or above the text. All have CSS-styleable properties (e.g., -fx-background-color, -fx-text-fill, -fx-font) that can be set inline via setStyle() or globally via a stylesheet.",
        working: "1. Create control (e.g., new TextField()).\n2. Set text, prompt, or graphic as needed.\n3. Add to a layout pane (VBox, HBox, GridPane).\n4. Attach event handlers: setOnAction for Button, textProperty for TextField, setOnKeyPressed for keyboard.\n5. Style inline (setStyle) or via CSS stylesheet.",
        diagram: "VBox\n  +-- Label \"Name:\" -----------+\n  +-- TextField [_________] ---+\n  +-- PasswordField [*****] --+\n  +-- Button [ Submit 🖫 ] ---+\n  +-- Label \"Status: ...\" ----+",
        example: "TextField tf = new TextField();\ntf.setPromptText(\"Your name\");\nButton greet = new Button(\"Greet\");\ngreet.setOnAction(e -> System.out.println(\"Hi \" + tf.getText()));\ntf.setOnAction(e -> greet.fire());   // Enter triggers Button",
        output: "User types name and presses Enter (or clicks Greet); 'Hi <name>' is printed.",
        advantages: [
          "Simple, well-known API",
          "Observable text property for reactive binding",
          "Customizable with graphics and CSS",
          "Keyboard-friendly (focus traversal, accelerators)",
          "PasswordField reuses TextField code with masking"
        ],
        applications: [
          "Forms (login, registration, search)",
          "Dialogs (input prompts, confirmations)",
          "Toolbars and command bars",
          "Status bars and captions"
        ],
        conclusion: "TextField, PasswordField, Button, and Label are essential to any JavaFX form. Master their text properties, events, and CSS styling to build polished, interactive UIs."
      }
    },
    viva: [
      { q: "How to set placeholder text?", a: "setPromptText(\"Enter name\") — shown when the field is empty." },
      { q: "PasswordField extends what?", a: "TextField — it overrides the skin/cell to mask characters." },
      { q: "How to fire a Button programmatically?", a: "button.fire() — triggers the action handler as if clicked." },
      { q: "Label vs TextField?", a: "Label is read-only; TextField allows user input. Label can also show a graphic." }
    ],
    quiz: {
      mcqs: [
        { question: "Label is:", options: ["Editable", "Read-only", "Clickable", "Hidden"], answer: 1, explanation: "Label is read-only by design." },
        { question: "PasswordField extends:", options: ["Label", "TextField", "Control", "Field"], answer: 1, explanation: "It is a TextField subclass with masked input." },
        { question: "Button's primary event is:", options: ["MouseEvent", "ActionEvent", "KeyEvent", "WindowEvent"], answer: 1, explanation: "ActionEvent (via setOnAction)." }
      ],
      trueFalse: [
        { statement: "Button can have a graphic.", answer: true, explanation: "setGraphic(node) — typically an ImageView or icon node." },
        { statement: "TextField is single-line only.", answer: true, explanation: "For multi-line, use TextArea." }
      ]
    },
    revision: { oneMin: "TextField = input, PasswordField = masked input, Button = action, Label = display.", fiveMin: ["promptText", "setOnAction", "setGraphic", "textProperty listener", "button.fire()"], examDay: ["Simple form with 3 controls"], memoryTrick: "TBL = Type, Button, Look.", faq: [{ q: "TextField vs TextArea?", a: "TextField is single-line; TextArea multi-line and supports wrapping." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "TextField", label: "Name" }, { type: "Button", label: "OK" }, { type: "Label", label: "Output" }] }
  },
  {
    id: "u5-registration-form",
    unitId: 5,
    index: 7,
    title: "Registration Form",
    tagline: "Putting it all together",
    oneLiner: "A registration form is a JavaFX scene combining TextField, PasswordField, ComboBox, RadioButton (in a ToggleGroup), CheckBox, DatePicker, and Button to collect, validate, and submit user data.",
    analogy: "A sign-up sheet at a workshop, but with dropdowns, checkboxes, date pickers, and password fields — backed by validation logic and a submit handler.",
    whyExists: "To provide a real-world demonstration of JavaFX controls, layout, event handling, validation, and feedback (Alert/label) all working together.",
    whereUsed: ["Sign-up forms", "Account creation", "Surveys", "Event registration", "Admin onboarding"],
    visualCue: "📝",
    code: {
      language: "java",
      code: `GridPane gp = new GridPane(); gp.setHgap(8); gp.setVgap(8); gp.setPadding(new Insets(12));
gp.add(new Label("Name:"), 0, 0);   TextField nameF = new TextField();   gp.add(nameF, 1, 0);
gp.add(new Label("Email:"), 0, 1);  TextField emailF = new TextField();  gp.add(emailF, 1, 1);
gp.add(new Label("Password:"), 0, 2); PasswordField passF = new PasswordField(); gp.add(passF, 1, 2);
gp.add(new Label("Country:"), 0, 3); ComboBox<String> country = new ComboBox<>(); country.getItems().addAll("India","USA","UK"); gp.add(country, 1, 3);
gp.add(new Label("Gender:"), 0, 4); ToggleGroup g = new ToggleGroup(); RadioButton m = new RadioButton("Male"); m.setToggleGroup(g); RadioButton f = new RadioButton("Female"); f.setToggleGroup(g); HBox gh = new HBox(10, m, f); gp.add(gh, 1, 4);
gp.add(new Label("DOB:"), 0, 5); DatePicker dob = new DatePicker(); gp.add(dob, 1, 5);
CheckBox terms = new CheckBox("I agree to the terms"); gp.add(terms, 1, 6);
Button submit = new Button("Register"); gp.add(submit, 1, 7);
submit.setOnAction(e -> {
  if (nameF.getText().isEmpty() || !emailF.getText().matches(".+@.+\\\\..+") || passF.getText().length() < 6 || g.getSelectedToggle() == null || !terms.isSelected()) {
    new Alert(Alert.AlertType.ERROR, "Please fill all fields correctly.").show();
  } else {
    new Alert(Alert.AlertType.INFORMATION, "Welcome, " + nameF.getText() + "!").show();
  }
});`,
      caption: "Full registration form with GridPane, validation, and Alert feedback."
    },
    internalWorking: {
      steps: [
        "Form is built in start(Stage) using a GridPane to align label/value pairs in rows.",
        "Inputs are read from each control (getText, getValue, isSelected, getSelectedToggle) on submit.",
        "Validation logic runs in the submit handler (Button.setOnAction).",
        "Feedback is shown via Alert (modal dialog) or by updating a status Label.",
        "For complex forms, use ScrollPane to wrap content; for multi-step forms, swap Scenes."
      ]
    },
    examAnswer: {
      twoMark: "A JavaFX registration form combines layout containers (VBox, GridPane) with input controls (TextField, PasswordField, ComboBox, DatePicker, RadioButton in a ToggleGroup, CheckBox) and a submit Button. The submit button's handler validates inputs and shows an Alert (or updates a Label) with success or error feedback.",
      thirteenMark: {
        intro: "Registration forms are a classic JavaFX exercise that integrates layouts, controls, and event handling.",
        definition: "A registration form is a GUI scene that collects user information through various input controls and processes the data when a submit button is pressed, typically with validation and feedback.",
        explanation: "Use GridPane for clean label/field alignment. Combine TextField (name, email), PasswordField (password, masked), ComboBox (country, role), DatePicker (DOB), ToggleGroup with RadioButton (gender), CheckBox (terms), and Button (submit). Validate input in the submit handler: non-empty checks, regex for email, minimum password length, terms accepted. Show feedback via Alert (information/error) or by updating a status Label. Use HBox to group related controls (gender radios, action buttons).",
        diagram: "GridPane form (label : value):\n  Name    [______________]\n  Email   [______________]\n  Pass    [**************]\n  Country [▼ India     ]\n  DOB     [📅 2000-01-01]\n  Gender  (•) Male  ( ) Female\n  ☐ I agree to the terms\n  [ Register ]",
        example: "See the multi-line code block above: a GridPane with all common controls, validation in submit handler, and Alert feedback.",
        conclusion: "Registration forms are a comprehensive demonstration of JavaFX: layouts, controls, events, validation, and user feedback in a single, cohesive app."
      },
      sixteenMark: {
        intro: "Registration forms showcase the integration of JavaFX layouts, multiple controls, validation logic, and user feedback via Alerts — a holistic demo of desktop UI development.",
        definition: "A registration form is a JavaFX application (or scene) that uses multiple controls and layouts to collect, validate, and submit user data for account creation, event registration, or any data-entry workflow.",
        explanation: "Typical controls used: TextField (name, email, phone), PasswordField (password, masked), ComboBox or ChoiceBox (country, role), DatePicker (date of birth), RadioButton grouped by ToggleGroup (gender, single choice), CheckBox (terms, subscriptions, multi-choice), TextArea (address, comments), Button (submit, reset). Layout: GridPane is most common for label/value alignment, with VBox as the outer container and HBox for grouping related controls (gender radios, action buttons). Validation runs in the submit handler: check non-empty fields, regex for email (.+@.+\\..+), minimum password length (e.g., 6+), checkbox for terms, date not in future, etc. Use Alert (information/error/warning) for modal feedback, or update a status Label. For long forms, wrap the GridPane in a ScrollPane. For multi-step forms, swap Scenes (e.g., personal info → address → review). For MVVM-style apps, bind form values to a model class. FXML can be used to define the UI declaratively, with @FXML annotations injecting controls into a controller class.",
        working: "1. Build form layout in start() with GridPane/VBox/HBox.\n2. Add controls to layout; group radios in a ToggleGroup.\n3. Implement submit handler with validation logic.\n4. On success: persist (e.g., to DB) and show Alert with success message.\n5. On failure: show Alert with error message, or highlight fields in red.\n6. (Optional) Use FXML + @FXML for cleaner separation of UI and logic.\n7. (Optional) Bind to a model class for MVVM; use Alert/Toast for feedback.",
        diagram: "[VBox root]\n  +--[Label: \"Create Account\"]\n  +--[GridPane: form rows]\n  |    +-- Name     [TextField]\n  |    +-- Email    [TextField]\n  |    +-- Password [PasswordField]\n  |    +-- Country  [ComboBox]\n  |    +-- DOB      [DatePicker]\n  |    +-- Gender   (•)M ( )F  (RadioButton + ToggleGroup)\n  |    +-- Terms    [CheckBox]\n  +--[HBox: [Register] [Reset]]\n  +--[Label: status / errors]\n\nValidation flow:\n  Submit -> read fields -> validate -> Alert.show()",
        example: "Alert a = new Alert(Alert.AlertType.INFORMATION, \"Registered successfully!\");\na.setHeaderText(\"Welcome, \" + nameF.getText());\na.showAndWait();\n// Or for errors:\nnew Alert(Alert.AlertType.ERROR, \"Please correct the highlighted fields.\").show();",
        output: "Modal Alert dialog (success or error) appears over the form; user clicks OK to dismiss.",
        advantages: [
          "User-friendly with rich input controls",
          "Validation built into the submit handler",
          "Great for learning layouts, events, and CSS together",
          "Easy to extend with more fields or steps",
          "FXML + controller enables clean separation"
        ],
        applications: [
          "Account creation in desktop apps",
          "Event/competition registration",
          "Surveys and feedback collection",
          "Admin onboarding",
          "Kiosk data entry"
        ],
        conclusion: "Building a registration form is the best single exercise to master JavaFX layouts, controls, event handling, validation, and user feedback — a complete mini-application that touches every key concept in the framework."
      }
    },
    viva: [
      { q: "Which layout is best for forms?", a: "GridPane for label/field alignment; VBox as outer container; HBox for grouping buttons or related controls." },
      { q: "How to group radio buttons so only one is selected?", a: "Put them in the same ToggleGroup via setToggleGroup(group)." },
      { q: "How to validate an email?", a: "Regex: .+@.+\\..+ on the email TextField's text in the submit handler." },
      { q: "How to show a modal confirmation?", a: "new Alert(Alert.AlertType.INFORMATION, \"...\").showAndWait()." }
    ],
    quiz: {
      mcqs: [
        { question: "PasswordField is a:", options: ["TextField", "Special TextField (masked)", "Label", "Button"], answer: 1, explanation: "PasswordField extends TextField and masks input." },
        { question: "To make only one RadioButton selectable, use:", options: ["Group", "ToggleGroup", "RadioGroup", "SelectionGroup"], answer: 1, explanation: "ToggleGroup in javafx.scene.control." },
        { question: "DatePicker is used to:", options: ["Pick a date", "Show a clock", "Pick time", "Display calendar"], answer: 0, explanation: "DatePicker lets the user choose a date (LocalDate)." }
      ],
      trueFalse: [
        { statement: "Alert is a modal dialog.", answer: true, explanation: "Yes, Alert blocks input to its owner window." },
        { statement: "FXML is a Java code UI definition.", answer: false, explanation: "FXML is XML-based; controllers are Java." }
      ]
    },
    revision: { oneMin: "Form = GridPane + controls + ToggleGroup + Button + validation + Alert.", fiveMin: ["GridPane alignment", "ToggleGroup for radios", "Validation regex", "Alert types", "FXML + @FXML"], examDay: ["Full registration code with validation", "Alert usage"], memoryTrick: "Form = fields + submit + validate + feedback.", faq: [{ q: "How to validate email format?", a: "Regex: .+@.+\\..+" }, { q: "What is FXML?", a: "XML-based UI definition loaded with FXMLLoader; controllers use @FXML to inject controls." }] },
    simulator: { type: "registration-form" }
  }
];
