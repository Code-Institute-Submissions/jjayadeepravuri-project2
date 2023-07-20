// Question were taken from: https://codescracker.com/exam/sublist.php.
// All questions for the quiz are stored below.

const questions = [
    {
        question: "The snippet that has to be used to check if 'a' is not equal to 'null' is",
        answer1: "if(a!null)",
        answer2: "if(a!=null)",
        answer3: "if (!a)",
        answer4: "if(a!==null)",
        correct: 4
    },
    {
        question: "JavaScript code is written inside file having extension:",
        answer1: ".jvs",
        answer2: ".js",
        answer3: ".jsc",
        answer4: ".javascript",
        correct: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "<javascript>",
        answer2: "<js>",
        answer3: "<script>",
        answer4: "<scripting>>",
        correct: 3
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answer1: "if (1 == 5)",
        answer2: "if i = 5",
        answer3: "if i == 5 then",
        answer4: "if i = 5 then",
        correct: 1
    },
    {
        question: "We can declare all type of variables in JavaScript with the keyword:",
        answer1: "var",
        answer2: "obj",
        answer3: "jvar",
        answer4: "cre",
        correct: 1
    },
    {
        question: "JavaScript code can be called by using:",
        answer1: "RMI",
        answer2: "Preprocessor",
        answer3: "Function or Method",
        answer4: "Array",
        correct: 3
    },
    {
        question: "Multiple Declarations of variables are separated by _____ symbol.",
        answer1: "Colon",
        answer2: "Semicolon",
        answer3: "Asterisk",
        answer4: "Comma",
        correct: 4
    },
    {
        question: "Add and Assignment operator is shown by which of the following symbol?",
        answer1: "+==",
        answer2: "+=",
        answer3: "=+",
        answer4: "==+",
        correct: 2
    },
    {
        question: "Which is the function used to loop in an array to view all the values?",
        answer1: "each()",
        answer2: "all()",
        answer3: "loop()",
        answer4: "while()",
        correct: 1
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answer1: "Math.ceil(x,y)",
        answer2: "ceil(x,y)",
        answer3: "top(x,y)",
        answer4: "Math.max(x,y)",
        correct: 4
    },
    {
        question: "Which of the following is the assignment operator?",
        answer1: "=",
        answer2: "===",
        answer3: "->",
        answer4: "<-",
        correct: 1
    },
    {
        question: "How many reserved words are there in JavaScript?",
        answer1: "94",
        answer2: "63",
        answer3: "48",
        answer4: "37",
        correct: 2
    },
    {
        question: "The unordered collection of properties, each of which has a name and a value is called:",
        answer1: "Object",
        answer2: "String",
        answer3: "Serialized Object",
        answer4: "Array",
        correct: 1
    },
    {
        question: "What is the significance of scripting?",
        answer1: "Convenient",
        answer2: "Static",
        answer3: "Dynamic",
        answer4: "Reachable",
        correct: 3
    },
    {
        question: "How to assign the image source in JavaScript?",
        answer1: "image.src = 'url'",
        answer2: "image = 'url'",
        answer3: "source('url')",
        answer4: "img = src=''",
        correct: 1
    },
    {
        question: "Which event handler is triggered when the user mouse moves onto a link?",
        answer1: "onMouseOnto",
        answer2: "onMouse",
        answer3: "onMouseOut",
        answer4: "onMouseOver",
        correct: 4
    },
    {
        question: "How do you focus a particular part of the HTML page in JavaScript?",
        answer1: "on()",
        answer2: "hover()",
        answer3: "focus()",
        answer4: "active()",
        correct: 3
    },
    {
        question: "JavaScript is a _____ language.",
        answer1: "Object-Based",
        answer2: "Assembly-language",
        answer3: "High-level",
        answer4: "Object-Oriented",
        correct: 1
    },
    {
        question: "Which of the following Attribute is used to include External JS code inside your HTML Document:",
        answer1: "link",
        answer2: "script",
        answer3: "src",
        answer4: "ext",
        correct: 3
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answer1: "if (i <> 5)",
        answer2: "if i =! 5 then",
        answer3: "if (i != 5)",
        answer4: "if i <> 5",
        correct: 3
    },
    {
        question: "How does a FOR loop start?",
        answer1: "for i = 1 to 5",
        answer2: "for (i = 0; i <= 5)",
        answer3: "for (i <= 5; i++)",
        answer4: "for (i=0; i<=5, i++)",
        correct: 4
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answer1: "Math.rnd(7.25)",
        answer2: "rnd(7.25)",
        answer3: "round(7.25)",
        answer4: "Math.round(7.25)",
        correct: 4
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answer1: "Math.ceil(x,y)",
        answer2: "top(x,y)",
        answer3: "Math.max(x,y)",
        answer4: "ceil(x,y)",
        correct: 3
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer1: "onmousececlick",
        answer2: "onclick",
        answer3: "onchange",
        answer4: "onmouseover",
        correct: 2
    },
    {
        question: "JavaScript is a ___ -side programming language.",
        answer1: "Client",
        answer2: "Server",
        answer3: "Both",
        answer4: "None",
        correct: 3
    },
    {
        question: "Which JavaScript label catches all the values, except for the ones specified?",
        answer1: "catch",
        answer2: "label",
        answer3: "try",
        answer4: "default",
        correct: 4
    },
    {
        question: "What will the code return? Boolean(3 < 7)",
        answer1: "true",
        answer2: "false",
        answer3: "NaN",
        answer4: "SyntaxError",
        correct: 1
    },
    {
        question: "Determine the result 'String('Hello') === 'Hello';':",
        answer1: "true",
        answer2: "false",
        answer3: "ReferenceError",
        answer4: "SyntaxError",
        correct: 1
    },
    {
        question: "Which of the following statements will show a message as well as ask for user input in a popup?",
        answer1: "prompt()",
        answer2: "confirm()",
        answer3: "alert()",
        answer4: "message()",
        correct: 1
    },
    {
        question: "Which of the following is an event listener in JavaScript?",
        answer1: "onclick",
        answer2: "blur",
        answer3: "click",
        answer4: "Click()",
        correct: 1
    },
    {
        question: "Which JavaScript variable cannot be used as First character but can be use after first character?",
        answer1: "Dollar Sign",
        answer2: "Asterisk",
        answer3: "Underscore",
        answer4: "Digit",
        correct: 4
    },
    {
        question: "Multiple Declarations of variables are separated by _____ symbol.",
        answer1: "Colon",
        answer2: "Semicolon",
        answer3: "Asterisk",
        answer4: "Comma",
        correct: 4
    },
    {
        question: "Which of the operator is used to test if a particular property exists or not?",
        answer1: "exists",
        answer2: "within",
        answer3: "in",
        answer4: "exist",
        correct: 3
    },
    {
        question: "The snippet that has to be used to check if 'a' is not equal to 'null' is:",
        answer1: "if(a!null)",
        answer2: "if (!a)",
        answer3: "if(a!=null)",
        answer4: "if(a!==null)",
        correct: 4
    },
    {
        question: "Among the following, which one is a ternary operator?",
        answer1: "-",
        answer2: ":",
        answer3: "?:",
        answer4: "+",
        correct: 3
    },
    {
        question: "What kind of scoping does JavaScript use?",
        answer1: "Sequential",
        answer2: "Lexical",
        answer3: "Literal",
        answer4: "Segmental",
        correct: 2
    },
    {
        question: "The method or operator used to identify the array is:",
        answer1: "==",
        answer2: "===",
        answer3: "typeof:",
        answer4: "isarrayType()",
        correct: 3
    },
    {
        question: "The keyword or the property that you use to refer to an object through which they were invoked is:",
        answer1: "object",
        answer2: "this",
        answer3: "to",
        answer4: "from",
        correct: 2
    },
    {
        question: "The regular expression to match any one character not between the brackets is:",
        answer1: "[D]",
        answer2: "[^...]",
        answer3: "[^]",
        answer4: "[...]",
        correct: 2
    },
    {
        question: "Which of the following is the descendant operator?",
        answer1: "...",
        answer2: "..",
        answer3: "*",
        answer4: "@",
        correct: 1
    },
    {
        question: "Which is the function used to retrieve a value?",
        answer1: "getItem()",
        answer2: "retrieveItem()",
        answer3: "retrieve()",
        answer4: "get()",
        correct: 1
    },
    {
        question: "Which is the opposite to the load event in JavaScript?",
        answer1: "preload",
        answer2: "unload",
        answer3: "postload",
        answer4: "dontload",
        correct: 2
    },
    {
        question: "The element that can also register handlers for load and error events is:",
        answer1: "form",
        answer2: "body",
        answer3: "img",
        answer4: "html",
        correct: 3
    },
    {
        question: "The history property belongs to which object?",
        answer1: "Location",
        answer2: "Element",
        answer3: "Window",
        answer4: "History",
        correct: 4
    },
    {
        question: "What is the datatype of the go() method parameter?",
        answer1: "Float",
        answer2: "Integer",
        answer3: "Double",
        answer4: "String",
        correct: 2
    },
    {
        question: "The node directly above a node is called:",
        answer1: "ancestors",
        answer2: "child",
        answer3: "parent",
        answer4: "sibling",
        correct: 3
    },
    {
        question: "The return type of getElementsByClassName() is:",
        answer1: "NodeList",
        answer2: "Node",
        answer3: "Document",
        answer4: "DOM",
        correct: 1
    },
    {
        question: "Which of the following is the Web application equivalent to querySelectorAll()?",
        answer1: "$()",
        answer2: "#()",
        answer3: "&()",
        answer4: "None",
        correct: 1
    },
    {
        question: "In general, event handler is nothing but:",
        answer1: "handler",
        answer2: "event",
        answer3: "interface",
        answer4: "function",
        correct: 4
    },
    {
        question: "How to test if two nodes are equal?",
        answer1: "==",
        answer2: "isEqualNode()",
        answer3: "equal()",
        answer4: "None",
        correct: 2
    },
    {
        question: "How can the nodes in the node list be accessed?",
        answer1: "Looping",
        answer2: "Key",
        answer3: "Index Number",
        answer4: "None",
        correct: 3
    },
    {
        question: "JavaScript code between a pair of 'script' tags are called:",
        answer1: "Inline",
        answer2: "Referenced",
        answer3: "External",
        answer4: "Non-inline",
        correct: 1
    },
    {
        question: "Assignment Operators is following type of operator:",
        answer1: "Binary",
        answer2: "Ternary",
        answer3: "Unarry",
        answer4: "None",
        correct: 1
    },
    {
        question: "Assignment Operators is following type of operator:",
        answer1: "Binary",
        answer2: "Ternary",
        answer3: "Unarry",
        answer4: "None",
        correct: 1
    },
];