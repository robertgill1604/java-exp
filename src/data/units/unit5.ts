import type { TopicContent } from "../types";

export const unit5Topics: TopicContent[] = [
  {
    id: "u5-event-handling",
    unitId: 5,
    index: 1,
    title: "Event Handling",
    tagline: "Responding to user actions",
    oneLiner: "Event handling in JavaFX is the mechanism to respond to user actions (mouse clicks, key presses, etc.) using event listeners and handlers.",
    analogy: "A doorbell. When a visitor presses (event), the bell rings (handler).",
    whyExists: "To allow GUI applications to react to user input.",
    whereUsed: ["GUI applications", "Games", "Interactive forms"],
    visualCue: "🖱️",
    code: {
      language: "java",
      code: `Button btn = new Button("Click me");
btn.setOnAction(e -> System.out.println("Clicked!"));
// Or with EventHandler:
btn.setOnAction(new EventHandler<ActionEvent>() {
    public void handle(ActionEvent e) { System.out.println("Clicked!"); }
});`,
      caption: "JavaFX event handling with lambda and anonymous class."
    },
    internalWorking: {
      steps: ["Event source fires an event.", "Event is dispatched to registered handlers.", "Handler's handle() is invoked."]
    },
    examAnswer: {
      twoMark: "Event handling in JavaFX is the mechanism to respond to user interactions. An EventHandler is registered on a node (e.g., button) and is invoked when the corresponding event occurs. Java 8+ lambdas make this concise.",
      thirteenMark: {
        intro: "Event handling is fundamental to interactive JavaFX apps.",
        definition: "Event handling is a delegation-based model: an event source registers with an event handler, which is invoked when the event occurs.",
        explanation: "EventHandler<ActionEvent> is a functional interface. Nodes have setOn* methods (setOnAction, setOnMouseClicked, etc.). Events bubble through the scene graph; filters (capture phase) and handlers (bubble phase) can be added.",
        diagram: "Source → Event → Filter (capture) → Target → Handler (bubble)",
        example: "btn.setOnAction(e -> label.setText(\"Clicked\"));",
        conclusion: "JavaFX event handling is clean and lambda-friendly."
      },
      sixteenMark: {
        intro: "JavaFX event handling uses a delegation model with filters and handlers.",
        definition: "Event handling in JavaFX is the process of capturing and responding to events (mouse, keyboard, etc.) using EventHandler and EventFilter interfaces.",
        explanation: "Events are dispatched along a chain from the root to the target. EventFilter runs in the capture phase (root to target); EventHandler runs in the bubble phase (target to root). Common events: ActionEvent, MouseEvent, KeyEvent. setOn* methods are convenience for adding handlers.",
        working: "1. User triggers event (e.g., clicks button).\n2. JavaFX builds EventDispatchChain.\n3. Event passes through filters (root to target).\n4. Handlers at target and bubble back to root are called.",
        diagram: "[root] → ... → [target]\n         filters         handlers\n         (down)         (up)",
        example: "button.addEventFilter(MouseEvent.MOUSE_CLICKED, e -> { if (e.getClickCount() == 2) System.out.println(\"Double click\"); });",
        output: "Double click detected.",
        advantages: ["Flexible", "Filters and handlers", "Lambda support"],
        applications: ["Forms", "Games", "Interactive UIs"],
        conclusion: "Mastering event handling is essential for building interactive JavaFX applications."
      }
    },
    viva: [
      { q: "What is the difference between filter and handler?", a: "Filter runs in capture phase (root to target); handler runs in bubble phase (target to root)." },
      { q: "Can a node have multiple handlers for the same event?", a: "Yes, via addEventHandler." }
    ],
    quiz: {
      mcqs: [
        { question: "setOnAction expects:", options: ["ActionEvent handler", "MouseEvent", "Runnable", "String"], answer: 0, explanation: "ActionEvent handler." }
      ],
      trueFalse: [
        { statement: "Filters run in bubble phase.", answer: false, explanation: "Capture phase." }
      ]
    },
    revision: { oneMin: "Event → Handler.handle() called.", fiveMin: ["Lambda handlers", "setOn* methods", "Filter vs Handler"], examDay: ["Event example with lambda"], memoryTrick: "Source fires, listener listens, handler handles.", faq: [{ q: "What is event bubbling?", a: "Event travels from target up to root." }] },
    simulator: { type: "javafx-event" }
  },
  {
    id: "u5-event-listener",
    unitId: 5,
    index: 2,
    title: "Event Listener",
    tagline: "Listening for events",
    oneLiner: "An event listener is an object that waits for and reacts to events fired by an event source.",
    analogy: "A smoke detector. It listens (waits) for smoke (event) and triggers an alarm (handler).",
    whyExists: "To decouple event sources from event handlers.",
    whereUsed: ["GUI", "Servlet listeners", "JavaFX EventHandler"],
    visualCue: "👂",
    code: {
      language: "java",
      code: `btn.setOnAction(event -> System.out.println("clicked")); // listener (lambda)`,
      caption: "Lambda as listener."
    },
    internalWorking: { steps: ["Listener is registered with the source.", "Source calls listener's method when event occurs."] },
    examAnswer: {
      twoMark: "An event listener is an object that implements an event-handling interface (e.g., EventHandler<ActionEvent>) and is registered on a source. When the source fires the event, the listener's method is invoked.",
      thirteenMark: {
        intro: "Listeners are key to event-driven programming.",
        definition: "An event listener is an object that implements a listener interface and is notified when an event of interest occurs.",
        explanation: "In JavaFX, EventHandler<T extends Event> is a functional interface with handle(T event). Lambdas can be used as listeners.",
        diagram: "Source → has → Listeners\nEvent → invokes → listener.handle(e)",
        example: "btn.setOnMouseClicked(e -> System.out.println(e.getX()));",
        conclusion: "Listeners decouple event generation from response."
      },
      sixteenMark: {
        intro: "Event listeners are a core part of GUI programming.",
        definition: "An event listener is an object registered to receive notifications of events occurring on a source.",
        explanation: "In JavaFX, you can attach handlers via setOn* methods (replaces any previous handler) or addEventHandler (additive). For custom events, you can create your own EventType and dispatch them with Event.fireEvent.",
        working: "1. Listener registered with source.\n2. Source's internal event dispatcher calls registered listeners.\n3. Listener handles the event.",
        diagram: "Source\n  ↑\n  listeners[]",
        example: "button.addEventHandler(MouseEvent.MOUSE_CLICKED, e -> handleClick(e));",
        output: "Click handled.",
        advantages: ["Decoupling", "Multiple listeners per source", "Reusable handlers"],
        applications: ["GUI", "Server-side events"],
        conclusion: "Listeners are foundational to event-driven Java applications."
      }
    },
    viva: [
      { q: "How to remove a listener?", a: "removeEventHandler(EventType, handler)." }
    ],
    quiz: {
      mcqs: [
        { question: "JavaFX listener interface is:", options: ["Runnable", "EventHandler", "ActionListener", "Listener"], answer: 1, explanation: "EventHandler." }
      ],
      trueFalse: [
        { statement: "A lambda can be a listener.", answer: true, explanation: "Yes, since Java 8." }
      ]
    },
    revision: { oneMin: "Listener = object that reacts to events.", fiveMin: ["EventHandler functional interface", "setOn* vs addEventHandler"], examDay: ["Lambda listener example"], memoryTrick: "Listener = ear, source = speaker.", faq: [{ q: "setOn* vs addEventHandler?", a: "setOn* replaces; addEventHandler adds." }] },
    simulator: { type: "javafx-event" }
  },
  {
    id: "u5-stage-scene",
    unitId: 5,
    index: 3,
    title: "Stage & Scene",
    tagline: "Top-level windows and content",
    oneLiner: "In JavaFX, a Stage is the top-level container (window), and a Scene is the content tree attached to the stage.",
    analogy: "Stage = theater stage. Scene = the set/props on the stage. You swap scenes to change what is on the stage.",
    whyExists: "To organize the visual hierarchy of a JavaFX application.",
    whereUsed: ["All JavaFX apps"],
    visualCue: "🎬",
    code: {
      language: "java",
      code: `Stage stage = new Stage();
Scene scene = new Scene(root, 800, 600);
stage.setScene(scene);
stage.setTitle("My App");
stage.show();`,
      caption: "Creating a stage and scene."
    },
    internalWorking: { steps: ["Stage is the top-level window.", "Scene holds the root node of the scene graph.", "Stage renders the scene."] },
    examAnswer: {
      twoMark: "Stage is the top-level window in JavaFX; Scene is the content of the stage, consisting of a root node and a graph of children. A stage can have only one scene at a time.",
      thirteenMark: {
        intro: "Stage and Scene are the top of the JavaFX hierarchy.",
        definition: "Stage is the top-level container representing a window. Scene is a tree of nodes (the scene graph) attached to a stage.",
        explanation: "Stage has methods like setTitle, setScene, show, close. Scene has setRoot and dimensions. Only one scene is shown at a time, but you can switch scenes. The primary stage is created by the Application's start() method.",
        diagram: "Stage (window)\n  └── Scene\n        └── root (e.g., VBox)\n              ├── Button\n              └── Label",
        example: "VBox root = new VBox(new Label(\"Hi\"), new Button(\"OK\"));\nstage.setScene(new Scene(root));",
        conclusion: "Stage and Scene are essential to JavaFX's structure."
      },
      sixteenMark: {
        intro: "JavaFX apps use Stage and Scene to organize UI hierarchy.",
        definition: "Stage is the top-level window in a JavaFX app. Scene is the content tree of nodes attached to a stage. The Application's start(Stage primaryStage) method is the entry point.",
        explanation: "Stages have an init, showing, and hidden lifecycle. Scenes can be swapped. A scene's root is typically a layout pane (VBox, HBox, BorderPane). CSS can be applied to a scene. The scene graph is rendered using the prism pipeline (hardware-accelerated).",
        working: "1. Application.start(Stage) is called.\n2. Create root layout.\n3. Wrap in Scene.\n4. Set scene on stage and show.",
        diagram: "[PrimaryStage]\n   |\n  [Scene]\n   |\n  [Root: Pane]\n   |---Child1\n   |---Child2",
        example: "@Override public void start(Stage stage) { StackPane root = new StackPane(); root.getChildren().add(new Text(\"Hello\")); stage.setScene(new Scene(root, 300, 200)); stage.show(); }",
        output: "Window with 'Hello' text.",
        advantages: ["Clear hierarchy", "Scene swapping", "Hardware acceleration"],
        applications: ["Desktop apps", "Tools", "Games"],
        conclusion: "Stage and Scene form the foundation of any JavaFX application."
      }
    },
    viva: [
      { q: "How many scenes can a stage have at once?", a: "Only one." },
      { q: "What is the primary stage?", a: "The main stage passed to Application.start()." }
    ],
    quiz: {
      mcqs: [
        { question: "Scene contains:", options: ["Window", "Graph of nodes", "Process", "Class"], answer: 1, explanation: "Scene = node graph." }
      ],
      trueFalse: [
        { statement: "A Stage is a Node.", answer: false, explanation: "Stage is Window; Scene contains Nodes." }
      ]
    },
    revision: { oneMin: "Stage = window, Scene = content tree.", fiveMin: ["setScene", "show()", "Application.start()"], examDay: ["Stage/Scene example"], memoryTrick: "Stage = theater window, Scene = what's on it.", faq: [{ q: "Can stage be modal?", a: "Yes, via initModality." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "Stage", label: "Main Window" }, { type: "Scene", label: "Root" }] }
  },
  {
    id: "u5-hbox-vbox",
    unitId: 5,
    index: 4,
    title: "HBox & VBox",
    tagline: "Horizontal and vertical layouts",
    oneLiner: "HBox arranges its children in a single horizontal row; VBox arranges them in a single vertical column.",
    analogy: "HBox = books on a horizontal shelf. VBox = books in a vertical stack.",
    whyExists: "To provide simple linear layouts without manual positioning.",
    whereUsed: ["Forms", "Toolbars", "Menus"],
    visualCue: "📐",
    code: {
      language: "java",
      code: `HBox h = new HBox(10, new Button("A"), new Button("B"));
h.setPadding(new Insets(10));
VBox v = new VBox(5, new Label("Top"), new TextField(), new Button("Go"));`,
      caption: "HBox and VBox layouts."
    },
    internalWorking: { steps: ["Layout computes preferred size of each child.", "Children are placed in order with spacing."] },
    examAnswer: {
      twoMark: "HBox and VBox are JavaFX layout containers. HBox arranges child nodes horizontally; VBox arranges them vertically. Both support spacing, padding, and alignment.",
      thirteenMark: {
        intro: "HBox and VBox are simple linear layout panes.",
        definition: "HBox (Horizontal Box) and VBox (Vertical Box) are layout containers in javafx.scene.layout.",
        explanation: "Children are added in order. spacing sets gap between children. setPadding adds inner padding. setAlignment controls alignment. setFillWidth (HBox) controls if children fill the width.",
        diagram: "HBox: [A] - [B] - [C]\nVBox: [A]\n       [B]\n       [C]",
        example: "HBox h = new HBox(5, new Button(\"OK\"), new Button(\"Cancel\"));",
        conclusion: "HBox and VBox are the simplest layout containers."
      },
      sixteenMark: {
        intro: "HBox and VBox are linear layout panes for horizontal and vertical arrangement.",
        definition: "HBox (HorizontalBox) and VBox (VerticalBox) are Pane subclasses that lay out children in a single row or column, with optional spacing, padding, and alignment.",
        explanation: "HBox arranges children left-to-right by default; alignment can be set (center, top-right, etc.). VBox stacks top-to-bottom. margin (Insets) can be set per child. fillWidth (HBox) makes all children fill the available width equally. HBox and VBox can be nested for complex layouts.",
        working: "1. Add children via constructor or getChildren().add().\n2. Layout pass computes positions.\n3. Rendering uses computed layout.",
        diagram: "HBox(spacing=10)\n  ├── [Button A]\n  ├── [Button B]\n  └── [Button C]\n\nVBox(spacing=5)\n  ├── [Label]\n  ├── [TextField]\n  └── [Button]",
        example: "HBox root = new HBox(10, new Button(\"Save\"), new Button(\"Load\"), new Button(\"Exit\"));\nroot.setAlignment(Pos.CENTER);",
        output: "Three buttons in a row, centered.",
        advantages: ["Simple", "Predictable", "Composable"],
        applications: ["Forms", "Toolbars", "Menus"],
        conclusion: "HBox and VBox are the workhorses of JavaFX layout."
      }
    },
    viva: [
      { q: "How to add spacing?", a: "new HBox(10, ...)." },
      { q: "How to center children?", a: "setAlignment(Pos.CENTER)." }
    ],
    quiz: {
      mcqs: [
        { question: "HBox arranges children:", options: ["Vertically", "Horizontally", "Grid", "Free"], answer: 1, explanation: "Horizontal." }
      ],
      trueFalse: [
        { statement: "HBox and VBox can be nested.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "HBox = horizontal, VBox = vertical.", fiveMin: ["spacing, padding, alignment", "Nesting"], examDay: ["Simple form example"], memoryTrick: "HBox = row, VBox = column.", faq: [{ q: "What is fillWidth?", a: "HBox option to make all children same width." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "HBox", label: "HBox" }, { type: "VBox", label: "VBox" }] }
  },
  {
    id: "u5-combobox-listview",
    unitId: 5,
    index: 5,
    title: "ComboBox & ListView",
    tagline: "Selecting from a list",
    oneLiner: "ComboBox is a drop-down list allowing the user to select one of several options; ListView displays a vertical list of selectable items.",
    analogy: "ComboBox = a closed drawer you open to pick one item. ListView = a shelf of items always visible.",
    whyExists: "To provide pre-defined choices to the user in a compact way.",
    whereUsed: ["Country pickers", "Settings", "Filters"],
    visualCue: "📋",
    code: {
      language: "java",
      code: `ComboBox<String> cb = new ComboBox<>();
cb.getItems().addAll("Red", "Green", "Blue");
cb.setValue("Red");

ListView<String> lv = new ListView<>();
lv.getItems().addAll("Apple", "Banana", "Cherry");`,
      caption: "ComboBox and ListView."
    },
    internalWorking: { steps: ["Items list is observed; UI updates on changes.", "Selection is tracked by selection model."] },
    examAnswer: {
      twoMark: "ComboBox is a drop-down list that allows the user to select one item from many. ListView displays a vertical list of items from which the user can select one or multiple. Both use ObservableList for items.",
      thirteenMark: {
        intro: "ComboBox and ListView are selection controls.",
        definition: "ComboBox<T> is a drop-down list of T items. ListView<T> displays T items in a vertical scrollable list.",
        explanation: "Use getItems() to access the ObservableList. setValue / getValue for ComboBox; getSelectionModel for ListView. CellFactory customizes rendering.",
        diagram: "ComboBox: [▼] → Dropdown\nListView: Item1\n          Item2\n          Item3",
        example: "ComboBox<String> cb = new ComboBox<>(); cb.getItems().addAll(\"A\", \"B\");",
        conclusion: "Both are essential for choice input."
      },
      sixteenMark: {
        intro: "ComboBox and ListView provide selection from a list of items.",
        definition: "ComboBox shows a collapsed drop-down that expands on click. ListView shows items in a vertical scrollable list. Both use ObservableList for their items.",
        explanation: "ComboBox supports editing (setEditable(true)). ListView supports single or multiple selection. Cell factory allows custom rendering of items (e.g., with images). Both can be observed via listeners on their selection model.",
        working: "1. Create with items or empty.\n2. Add items via getItems().add(...).\n3. Set selection model and listeners.",
        diagram: "ComboBox\n  ┌─────────┐\n  │ Red     │\n  └─────────┘\n\nListView\n  ┌─────────┐\n  │ Apple   │\n  │ Banana  │\n  │ Cherry  │\n  └─────────┘",
        example: "ComboBox<String> cb = new ComboBox<>(FXCollections.observableArrayList(\"A\", \"B\"));\ncb.setOnAction(e -> System.out.println(cb.getValue()));",
        output: "Selected item printed.",
        advantages: ["Compact UI", "Customizable rendering", "Observable"],
        applications: ["Forms", "Filters", "Settings"],
        conclusion: "ComboBox and ListView are versatile selection controls for JavaFX."
      }
    },
    viva: [
      { q: "How to make ComboBox editable?", a: "setEditable(true)." },
      { q: "How to allow multiple selection in ListView?", a: "lv.getSelectionModel().setSelectionMode(SelectionMode.MULTIPLE)." }
    ],
    quiz: {
      mcqs: [
        { question: "ComboBox is used to:", options: ["Show images", "Pick one from many", "Enter free text", "Display grid"], answer: 1, explanation: "Pick one from a list." }
      ],
      trueFalse: [
        { statement: "ListView supports multi-selection.", answer: true, explanation: "Yes." }
      ]
    },
    revision: { oneMin: "ComboBox = dropdown, ListView = visible list.", fiveMin: ["ObservableList", "Selection model", "CellFactory"], examDay: ["ComboBox example"], memoryTrick: "Combo = compressed, List = laid out.", faq: [{ q: "Editable ComboBox?", a: "setEditable(true) for user input + suggestions." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "ComboBox", label: "Choose" }, { type: "ListView", label: "List" }] }
  },
  {
    id: "u5-textfield-button-label",
    unitId: 5,
    index: 6,
    title: "TextField, Button, Label",
    tagline: "Basic input/output controls",
    oneLiner: "TextField is a single-line text input. Button is a clickable control. Label is a non-editable text display.",
    analogy: "TextField = blank form field. Button = action trigger. Label = printed name tag.",
    whyExists: "To provide basic input and display primitives.",
    whereUsed: ["Forms", "Dialogs", "Every GUI app"],
    visualCue: "🔘",
    code: {
      language: "java",
      code: `TextField tf = new TextField();
Button btn = new Button("Submit");
Label lbl = new Label("Enter name:");
btn.setOnAction(e -> lbl.setText("Hi " + tf.getText()));`,
      caption: "TextField, Button, Label."
    },
    internalWorking: { steps: ["TextField stores text in a string property.", "Button fires ActionEvent on click.", "Label is read-only."] },
    examAnswer: {
      twoMark: "TextField is a single-line text input control. Button is a clickable control that fires an ActionEvent. Label displays read-only text. All are javafx.scene.control classes.",
      thirteenMark: {
        intro: "These are the basic controls in JavaFX.",
        definition: "TextField, Button, and Label are the most fundamental input and display controls in JavaFX.",
        explanation: "TextField: getText(), setText(), setPromptText(). Button: setText, setOnAction. Label: setText, setGraphic. Use HBox/VBox to lay them out.",
        diagram: "Label: \"Name:\"\nTextField: [_____]\nButton: [Submit]",
        example: "new TextField(); new Button(\"OK\"); new Label(\"Status\");",
        conclusion: "These three are the building blocks of any form."
      },
      sixteenMark: {
        intro: "TextField, Button, and Label are basic input/output controls in JavaFX.",
        definition: "TextField is a single-line text input control. Button is a clickable control. Label is a non-editable text display.",
        explanation: "TextField supports prompt text (placeholder), text change listeners, and action handlers. Button can have text and/or a graphic (icon). Label can wrap text and display a graphic. All have CSS-styleable properties.",
        working: "1. Create control.\n2. Set text or prompt.\n3. Add to scene graph.\n4. Attach event handlers for Button and TextField.",
        diagram: "VBox\n  ├── Label \"Name:\"\n  ├── TextField\n  └── Button \"OK\"",
        example: "TextField tf = new TextField(); tf.setPromptText(\"Your name\");\nButton b = new Button(\"Greet\");\nb.setOnAction(e -> System.out.println(\"Hi \" + tf.getText()));",
        output: "Greets user on click.",
        advantages: ["Simple API", "Easy to use", "Styleable"],
        applications: ["Forms", "Dialogs", "Search bars"],
        conclusion: "These basic controls are essential to any JavaFX form."
      }
    },
    viva: [
      { q: "How to set placeholder text?", a: "setPromptText(\"Enter name\")." }
    ],
    quiz: {
      mcqs: [
        { question: "Label is:", options: ["Editable", "Read-only", "Clickable", "Hidden"], answer: 1, explanation: "Read-only." }
      ],
      trueFalse: [
        { statement: "Button can have a graphic.", answer: true, explanation: "Yes, setGraphic(node)." }
      ]
    },
    revision: { oneMin: "TextField = input, Button = action, Label = display.", fiveMin: ["promptText", "setOnAction", "setGraphic"], examDay: ["Simple form"], memoryTrick: "TBL = Type, Button, Look.", faq: [{ q: "TextField vs TextArea?", a: "TextField is single-line; TextArea multi-line." }] },
    simulator: { type: "javafx-layout", controls: [{ type: "TextField", label: "Name" }, { type: "Button", label: "OK" }, { type: "Label", label: "Output" }] }
  },
  {
    id: "u5-registration-form",
    unitId: 5,
    index: 7,
    title: "Registration Form",
    tagline: "Putting it all together",
    oneLiner: "A registration form is a JavaFX scene combining TextField, PasswordField, ComboBox, RadioButton, CheckBox, DatePicker, and Button to collect user data.",
    analogy: "A sign-up sheet at a workshop, but with dropdowns, checkboxes, and date pickers.",
    whyExists: "To provide a real-world demonstration of JavaFX controls, layout, and event handling.",
    whereUsed: ["Sign-up forms", "Account creation", "Surveys"],
    visualCue: "📝",
    code: {
      language: "java",
      code: `GridPane gp = new GridPane();
gp.add(new Label("Name:"), 0, 0);
gp.add(new TextField(), 1, 0);
gp.add(new Label("Email:"), 0, 1);
gp.add(new TextField(), 1, 1);
gp.add(new Label("Country:"), 0, 2);
gp.add(new ComboBox<>(), 1, 2);
Button submit = new Button("Register");
gp.add(submit, 1, 3);
submit.setOnAction(e -> System.out.println("Registered!"));`,
      caption: "Simple registration form with GridPane."
    },
    internalWorking: { steps: ["Form is built in start(Stage).", "Inputs are collected on submit.", "Validation logic is added in handler."] },
    examAnswer: {
      twoMark: "A JavaFX registration form combines layout containers (VBox, GridPane) with input controls (TextField, PasswordField, ComboBox, DatePicker) and a submit Button. The submit button's handler validates and processes the data.",
      thirteenMark: {
        intro: "Registration forms are a classic JavaFX exercise.",
        definition: "A registration form is a GUI scene that collects user information through various input controls and processes the data when submitted.",
        explanation: "Use GridPane for clean alignment. Combine TextField, PasswordField, ComboBox, DatePicker, RadioButton, CheckBox. Validate input in the submit handler. Show feedback via Labels or Alert dialogs.",
        diagram: "GridPane\n  Name   [_____]\n  Email  [_____]\n  Pass   [*****]\n  Country[▼]\n  DOB    [📅]\n  Gender ( ) Male ( ) Female\n  ☐ Subscribe\n  [Register]",
        example: "See code above; uses GridPane and various controls.",
        conclusion: "Registration forms are a comprehensive demonstration of JavaFX."
      },
      sixteenMark: {
        intro: "Registration forms showcase the integration of JavaFX layouts and controls.",
        definition: "A registration form is a JavaFX application that uses multiple controls and layouts to collect user data for account creation.",
        explanation: "Typical controls: TextField (name, email), PasswordField (password), ComboBox (country, gender), DatePicker (DOB), CheckBox (terms), RadioButton (gender), Button (submit). Layout: GridPane or VBox with HBox. Validation: check non-empty fields, email format, password strength. Use Alert (information/error) for feedback. Bind values to a model class (MVVM).",
        working: "1. Build form layout in start().\n2. Add controls to layout.\n3. Implement submit handler with validation.\n4. Show success/failure via Alert or label update.",
        diagram: "[VBox]\n  [HBox: Title]\n  [GridPane: fields]\n  [HBox: Buttons]",
        example: "Alert a = new Alert(Alert.AlertType.INFORMATION, \"Registered!\");\na.show();",
        output: "Confirmation dialog.",
        advantages: ["User-friendly", "Comprehensive demo", "Validation built-in"],
        applications: ["Account creation", "Surveys", "Event registration"],
        conclusion: "Building a registration form is a great way to master JavaFX layouts, controls, and event handling."
      }
    },
    viva: [
      { q: "Which layout is best for forms?", a: "GridPane for label/field alignment; VBox for vertical stacking." }
    ],
    quiz: {
      mcqs: [
        { question: "PasswordField is a:", options: ["TextField", "Special TextField", "Label", "Button"], answer: 1, explanation: "Masked TextField." }
      ],
      trueFalse: [
        { statement: "Alert is a dialog.", answer: true, explanation: "Yes, Alert shows modal dialogs." }
      ]
    },
    revision: { oneMin: "Form = layout + controls + handler.", fiveMin: ["GridPane alignment", "Validation in handler", "Alert for feedback"], examDay: ["Full registration code"], memoryTrick: "Form = fields + submit + validate.", faq: [{ q: "How to validate email format?", a: "Regex: .+@.+\\..+" }] },
    simulator: { type: "registration-form" }
  }
];
