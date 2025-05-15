export const questionBank = {
  Beginner: {
    Easy: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        question: "Which tag is used for creating a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: "<a>"
      },
      {
        question: "What is the correct way to comment in JavaScript?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
        correctAnswer: "// This is a comment"
      },
      {
        question: "Which CSS property is used to change text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: "color"
      },
      {
        question: "What is the default display property of a <div> element?",
        options: ["inline", "block", "inline-block", "none"],
        correctAnswer: "block"
      },
      {
        question: "Which HTML element is used to define the title of a document?",
        options: ["<title>", "<head>", "<meta>", "<h1>"],
        correctAnswer: "<title>"
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets", "Computer Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["style", "class", "font", "styles"],
        correctAnswer: "style"
      },
      {
        question: "What is the purpose of the <head> tag in HTML?",
        options: ["To contain metadata", "To display content", "To create links", "To define the body"],
        correctAnswer: "To contain metadata"
      },
      {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Number", "Boolean", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        question: "What is the correct syntax for referring to an external script called 'script.js'?",
        options: ["<script src='script.js'>", "<script href='script.js'>", "<script name='script.js'>", "<script file='script.js'>"],
        correctAnswer: "<script src='script.js'>"
      },
      {
        question: "Which HTML element is used to create a list?",
        options: ["<list>", "<ul>", "<ol>", "<li>"],
        correctAnswer: "<ul>"
      },
      {
        question: "What is the purpose of the <form> tag in HTML?",
        options: ["To create a form for user input", "To define a section", "To create a link", "To display images"],
        correctAnswer: "To create a form for user input"
      },
      {
        question: "Which of the following is a valid JavaScript variable name?",
        options: ["1stVariable", "first-variable", "firstVariable", "first variable"],
        correctAnswer: "firstVariable"
      },
      {
        question: "What does the 'alt' attribute in an <img> tag do?",
        options: ["Specifies an alternative text", "Defines the image source", "Sets the image size", "Links to another page"],
        correctAnswer: "Specifies an alternative text"
      }
    ],
    Medium: [
      {
        question: "What is the difference between let and var in JavaScript?",
        options: [
          "let has block scope, var has function scope",
          "var has block scope, let has function scope",
          "They are exactly the same",
          "let is not a valid keyword"
        ],
        correctAnswer: "let has block scope, var has function scope"
      },
      {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        options: [
          "To make a function run asynchronously",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To make a function run asynchronously"
      },
      {
        question: "What is the CSS box model?",
        options: [
          "Content, padding, border, and margin",
          "Only content and border",
          "Only margin and padding",
          "Header, body, and footer"
        ],
        correctAnswer: "Content, padding, border, and margin"
      },
      {
        question: "What is the purpose of the DOCTYPE declaration?",
        options: [
          "Tells the browser which version of HTML/XML to use",
          "Declares document title",
          "Links external stylesheets",
          "Sets document language"
        ],
        correctAnswer: "Tells the browser which version of HTML/XML to use"
      },
      {
        question: "What is event bubbling in JavaScript?",
        options: [
          "Event propagation from child to parent elements",
          "Creating multiple events",
          "Removing event listeners",
          "Adding event listeners"
        ],
        correctAnswer: "Event propagation from child to parent elements"
      },
      {
        question: "What is the purpose of the 'return' statement in a function?",
        options: [
          "To exit the function and return a value",
          "To create a new function",
          "To declare a variable",
          "To call another function"
        ],
        correctAnswer: "To exit the function and return a value"
      },
      {
        question: "What is the difference between == and === in JavaScript?",
        options: [
          "== checks value, === checks value and type",
          "== checks type, === checks value",
          "They are the same",
          "== is used for strings, === for numbers"
        ],
        correctAnswer: "== checks value, === checks value and type"
      },
      {
        question: "What is a closure in JavaScript?",
        options: [
          "A function that has access to variables in its outer scope",
          "A way to close the browser window",
          "A method to end a loop",
          "A type of HTML tag"
        ],
        correctAnswer: "A function that has access to variables in its outer scope"
      },
      {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "References the current object context",
          "Creates a new variable",
          "Declares a function",
          "Imports external modules"
        ],
        correctAnswer: "References the current object context"
      },
      {
        question: "What is the purpose of the 'map()' method in JavaScript?",
        options: [
          "To create a new array with the results of calling a function on every element",
          "To filter elements from an array",
          "To reduce an array to a single value",
          "To find an element in an array"
        ],
        correctAnswer: "To create a new array with the results of calling a function on every element"
      },
      {
        question: "What is the purpose of the 'filter()' method in JavaScript?",
        options: [
          "To create a new array with elements that pass a test",
          "To transform elements in an array",
          "To find an element in an array",
          "To sort an array"
        ],
        correctAnswer: "To create a new array with elements that pass a test"
      },
      {
        question: "What is the purpose of the 'reduce()' method in JavaScript?",
        options: [
          "To reduce an array to a single value",
          "To create a new array",
          "To filter elements",
          "To find an element"
        ],
        correctAnswer: "To reduce an array to a single value"
      },
      {
        question: "What is the purpose of the 'forEach()' method in JavaScript?",
        options: [
          "To execute a function on each element in an array",
          "To create a new array",
          "To filter elements",
          "To find an element"
        ],
        correctAnswer: "To execute a function on each element in an array"
      },
      {
        question: "What is the purpose of the 'setTimeout()' function in JavaScript?",
        options: [
          "To execute a function after a specified delay",
          "To create a loop",
          "To stop execution",
          "To create a new thread"
        ],
        correctAnswer: "To execute a function after a specified delay"
      },
      {
        question: "What is the purpose of the 'setInterval()' function in JavaScript?",
        options: [
          "To execute a function repeatedly at specified intervals",
          "To create a loop",
          "To stop execution",
          "To create a new thread"
        ],
        correctAnswer: "To execute a function repeatedly at specified intervals"
      }
    ],
    Hard: [
      {
        question: "What is closure in JavaScript?",
        options: [
          "A function that has access to variables in its outer scope",
          "A way to close the browser window",
          "A method to end a loop",
          "A type of HTML tag"
        ],
        correctAnswer: "A function that has access to variables in its outer scope"
      },
      {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "References the current object context",
          "Creates a new variable",
          "Declares a function",
          "Imports external modules"
        ],
        correctAnswer: "References the current object context"
      },
      {
        question: "What is the difference between null and undefined?",
        options: [
          "undefined means variable declared but not assigned, null is an assigned value",
          "They are exactly the same",
          "null is not a valid JavaScript value",
          "undefined is not a valid JavaScript value"
        ],
        correctAnswer: "undefined means variable declared but not assigned, null is an assigned value"
      },
      {
        question: "What is the purpose of the bind() method?",
        options: [
          "Sets the this value for a function",
          "Joins two arrays",
          "Creates a new function",
          "Modifies array elements"
        ],
        correctAnswer: "Sets the this value for a function"
      },
      {
        question: "What is prototype inheritance in JavaScript?",
        options: [
          "Objects inheriting properties and methods from other objects",
          "Creating new objects",
          "Copying object properties",
          "Deleting object properties"
        ],
        correctAnswer: "Objects inheriting properties and methods from other objects"
      },
      {
        question: "What is the purpose of the 'async/await' syntax in JavaScript?",
        options: [
          "To handle asynchronous operations more easily",
          "To create new threads",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To handle asynchronous operations more easily"
      },
      {
        question: "What is the purpose of the 'Promise' object in JavaScript?",
        options: [
          "To represent the eventual completion (or failure) of an asynchronous operation",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To represent the eventual completion (or failure) of an asynchronous operation"
      },
      {
        question: "What is the purpose of the 'fetch()' function in JavaScript?",
        options: [
          "To make network requests",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To make network requests"
      },
      {
        question: "What is the purpose of the 'localStorage' object in JavaScript?",
        options: [
          "To store data in the browser persistently",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To store data in the browser persistently"
      },
      {
        question: "What is the purpose of the 'sessionStorage' object in JavaScript?",
        options: [
          "To store data for the duration of the page session",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To store data for the duration of the page session"
      },
      {
        question: "What is the purpose of the 'window' object in JavaScript?",
        options: [
          "Represents the browser window and provides methods to interact with it",
          "Creates a new thread",
          "Stops function execution",
          "Declares a variable"
        ],
        correctAnswer: "Represents the browser window and provides methods to interact with it"
      },
      {
        question: "What is the purpose of the 'document' object in JavaScript?",
        options: [
          "Represents the web page and provides methods to interact with it",
          "Creates a new thread",
          "Stops function execution",
          "Declares a variable"
        ],
        correctAnswer: "Represents the web page and provides methods to interact with it"
      },
      {
        question: "What is the purpose of the 'addEventListener()' method in JavaScript?",
        options: [
          "To attach an event handler to an element",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To attach an event handler to an element"
      },
      {
        question: "What is the purpose of the 'removeEventListener()' method in JavaScript?",
        options: [
          "To remove an event handler from an element",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To remove an event handler from an element"
      },
      {
        question: "What is the purpose of the 'setAttribute()' method in JavaScript?",
        options: [
          "To set the value of an attribute on an element",
          "To create a new thread",
          "To stop function execution",
          "To declare a variable"
        ],
        correctAnswer: "To set the value of an attribute on an element"
      }
    ]
  },
  Intermediate: {
    Easy: [
      {
        question: "What is React's Virtual DOM?",
        options: ["A virtual browser", "A lightweight copy of the actual DOM", "A JavaScript library", "A browser extension"],
        correctAnswer: "A lightweight copy of the actual DOM"
      },
      {
        question: "What is the purpose of useEffect in React?",
        options: ["To handle side effects", "To create state variables", "To handle routing", "To style components"],
        correctAnswer: "To handle side effects"
      },
      {
        question: "What is the purpose of useState in React?",
        options: ["To manage component state", "To create routes", "To handle events", "To style components"],
        correctAnswer: "To manage component state"
      },
      {
        question: "What is a React component?",
        options: ["A reusable UI piece", "A database table", "A styling rule", "A JavaScript variable"],
        correctAnswer: "A reusable UI piece"
      },
      {
        question: "What is the purpose of props in React?",
        options: ["To pass data to components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To pass data to components"
      },
      {
        question: "What is the purpose of the key prop in React?",
        options: ["To uniquely identify elements in a list", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To uniquely identify elements in a list"
      },
      {
        question: "What is the purpose of the render method in React?",
        options: ["To display UI elements", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To display UI elements"
      },
      {
        question: "What is the purpose of the componentWillUnmount lifecycle method?",
        options: ["To perform cleanup before the component is removed", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform cleanup before the component is removed"
      },
      {
        question: "What is the purpose of the useContext hook in React?",
        options: ["To access context values", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To access context values"
      },
      {
        question: "What is the purpose of the useReducer hook in React?",
        options: ["To manage complex state logic", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage complex state logic"
      },
      {
        question: "What is the purpose of the useMemo hook in React?",
        options: ["To optimize performance by memoizing values", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To optimize performance by memoizing values"
      },
      {
        question: "What is the purpose of the useCallback hook in React?",
        options: ["To memoize callback functions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To memoize callback functions"
      },
      {
        question: "What is the purpose of the useLayoutEffect hook in React?",
        options: ["To perform side effects synchronously after all DOM mutations", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform side effects synchronously after all DOM mutations"
      },
      {
        question: "What is the purpose of the forwardRef function in React?",
        options: ["To forward refs to child components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To forward refs to child components"
      },
      {
        question: "What is the purpose of the React Router library?",
        options: ["To handle routing in React applications", "To manage state", "To style components", "To create forms"],
        correctAnswer: "To handle routing in React applications"
      },
    ],
    Medium: [
      {
        question: "What is the purpose of the React Context API?",
        options: ["To manage global state", "To handle routing", "To style components", "To create forms"],
        correctAnswer: "To manage global state"
      },
      {
        question: "What is the purpose of the React.memo function?",
        options: ["To optimize functional components by memoizing them", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To optimize functional components by memoizing them"
      },
      {
        question: "What is the purpose of the useDebugValue hook in React?",
        options: ["To display a label for custom hooks in React DevTools", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To display a label for custom hooks in React DevTools"
      },
      {
        question: "What is the purpose of the React.StrictMode component?",
        options: ["To highlight potential problems in an application", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To highlight potential problems in an application"
      },
      {
        question: "What is the purpose of the useId hook in React?",
        options: ["To generate unique IDs for accessibility", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To generate unique IDs for accessibility"
      },
      {
        question: "What is the purpose of the useInsertionEffect hook in React?",
        options: ["To perform side effects before DOM mutations", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform side effects before DOM mutations"
      },
      {
        question: "What is the purpose of the useSyncExternalStore hook in React?",
        options: ["To subscribe to external stores", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To subscribe to external stores"
      },
      {
        question: "What is the purpose of the useMutableSource hook in React?",
        options: ["To read and subscribe to mutable sources", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To read and subscribe to mutable sources"
      },
      {
        question: "What is the purpose of the useEffect cleanup function?",
        options: ["To clean up side effects when a component unmounts", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To clean up side effects when a component unmounts"
      },
      {
        question: "What is the purpose of the useReducer hook in React?",
        options: ["To manage complex state logic", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage complex state logic"
      },
      {
        question: "What is the purpose of the useContext hook in React?",
        options: ["To access context values", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To access context values"
      },
      {
        question: "What is the purpose of the useRef hook in React?",
        options: ["To create mutable references", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create mutable references"
      },
      {
        question: "What is the purpose of the useLayoutEffect hook in React?",
        options: ["To perform side effects synchronously after all DOM mutations", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform side effects synchronously after all DOM mutations"
      },
      {
        question: "What is the purpose of the forwardRef function in React?",
        options: ["To forward refs to child components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To forward refs to child components"
      },
      {
        question: "What is the purpose of the React Router library?",
        options: ["To handle routing in React applications", "To manage state", "To style components", "To create forms"],
        correctAnswer: "To handle routing in React applications"
      }
    ],
    Hard: [
      {
        question: "What is the purpose of the React Context API?",
        options: ["To manage global state", "To handle routing", "To style components", "To create forms"],
        correctAnswer: "To manage global state"
      },
      {
        question: "What is the purpose of the useDebugValue hook in React?",
        options: ["To display a label for custom hooks in React DevTools", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To display a label for custom hooks in React DevTools"
      },
      {
        question: "What is the purpose of the React.StrictMode component?",
        options: ["To highlight potential problems in an application", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To highlight potential problems in an application"
      },
      {
        question: "What is the purpose of the useTransition hook in React?",
        options: ["To manage concurrent rendering", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage concurrent rendering"
      },
      {
        question: "What is the purpose of the useDeferredValue hook in React?",
        options: ["To defer updating a value until the browser is idle", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To defer updating a value until the browser is idle"
      },
      {
        question: "What is the purpose of the useId hook in React?",
        options: ["To generate unique IDs for accessibility", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To generate unique IDs for accessibility"
      },
      {
        question: "What is the purpose of the useInsertionEffect hook in React?",
        options: ["To perform side effects before DOM mutations", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform side effects before DOM mutations"
      },
      {
        question: "What is the purpose of the useSyncExternalStore hook in React?",
        options: ["To subscribe to external stores", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To subscribe to external stores"
      },
      {
        question: "What is the purpose of the useMutableSource hook in React?",
        options: ["To read and subscribe to mutable sources", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To read and subscribe to mutable sources"
      },
      {
        question: "What is the purpose of the useReducer hook in React?",
        options: ["To manage complex state logic", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage complex state logic"
      },
      {
        question: "What is the purpose of the useContext hook in React?",
        options: ["To access context values", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To access context values"
      },
      {
        question: "What is the purpose of the useRef hook in React?",
        options: ["To create mutable references", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create mutable references"
      },
      {
        question: "What is the purpose of the useLayoutEffect hook in React?",
        options: ["To perform side effects synchronously after all DOM mutations", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To perform side effects synchronously after all DOM mutations"
      },
      {
        question: "What is the purpose of the forwardRef function in React?",
        options: ["To forward refs to child components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To forward refs to child components"
      },
      {
        question: "What is the purpose of the React Router library?",
        options: ["To handle routing in React applications", "To manage state", "To style components", "To create forms"],
        correctAnswer: "To handle routing in React applications"
      }
    ]
  },
  Advanced: {
    Easy: [
      {
        question: "What is the purpose of the mapStateToProps function?",
        options: ["To map state from the Redux store to component props", "To dispatch actions", "To manage state", "To handle events"],
        correctAnswer: "To map state from the Redux store to component props"
      },
      {
        question: "What is the purpose of the mapDispatchToProps function?",
        options: ["To map dispatch actions to component props", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To map dispatch actions to component props"
      },
      {
        question: "What is middleware in Redux?",
        options: ["A way to extend Redux with custom functionality", "A component", "A function that modifies state", "A library"],
        correctAnswer: "A way to extend Redux with custom functionality"
      },
      {
        question: "What is the purpose of the Redux Thunk middleware?",
        options: ["To handle asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To handle asynchronous actions"
      },
      {
        question: "What is the purpose of the combineReducers function?",
        options: ["To combine multiple reducers into one", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To combine multiple reducers into one"
      },
      {
        question: "What is the purpose of the Provider component in React-Redux?",
        options: ["To provide the Redux store to React components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To provide the Redux store to React components"
      },
      {
        question: "What is the purpose of the useSelector hook in React-Redux?",
        options: ["To select data from the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To select data from the Redux store"
      },
      {
        question: "What is the purpose of the useDispatch hook in React-Redux?",
        options: [" To dispatch actions to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To dispatch actions to the Redux store"
      },
      {
        question: "What is the purpose of the createStore function in Redux?",
        options: ["To create a Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a Redux store"
      },
      {
        question: "What is the purpose of the applyMiddleware function in Redux?",
        options: ["To apply middleware to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To apply middleware to the Redux store"
      },
      {
        question: "What is the purpose of the useStore hook in React-Redux?",
        options: ["To access the Redux store directly", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To access the Redux store directly"
      },
      {
        question: "What is the purpose of the configureStore function in Redux Toolkit?",
        options: ["To configure the Redux store with default settings", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To configure the Redux store with default settings"
      },
      {
        question: "What is the purpose of the createAsyncThunk function in Redux Toolkit?",
        options: ["To create asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create asynchronous actions"
      },
      {
        question: "What is the purpose of the createEntityAdapter function in Redux Toolkit?",
        options: ["To manage normalized state for collections", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage normalized state for collections"
      },
      {
        question: "What is the purpose of the createReducer function in Redux Toolkit?",
        options: ["To create a reducer with a simplified syntax", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a reducer with a simplified syntax"
      }
    ],
    Medium: [
      {
        question: "What is the purpose of the Redux DevTools?",
        options: ["To debug Redux state changes", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To debug Redux state changes"
      },
      {
        question: "What is the purpose of the Redux Toolkit?",
        options: ["To simplify Redux development", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To simplify Redux development"
      },
      {
        question: "What is the purpose of the useSelector hook in React-Redux?",
        options: ["To select data from the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To select data from the Redux store"
      },
      {
        question: "What is the purpose of the useDispatch hook in React-Redux?",
        options: ["To dispatch actions to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To dispatch actions to the Redux store"
      },
      {
        question: "What is the purpose of the Provider component in React-Redux?",
        options: ["To provide the Redux store to React components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To provide the Redux store to React components"
      },
      {
        question: "What is the purpose of the combineReducers function?",
        options: ["To combine multiple reducers into one", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To combine multiple reducers into one"
      },
      {
        question: "What is the purpose of the Redux Thunk middleware?",
        options: ["To handle asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To handle asynchronous actions"
      },
      {
        question: "What is the purpose of the Redux Saga middleware?",
        options: ["To manage side effects in Redux", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage side effects in Redux"
      },
      {
        question: "What is the purpose of the createStore function in Redux?",
        options: ["To create a Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a Redux store"
      },
      {
        question: "What is the purpose of the applyMiddleware function in Redux?",
        options: ["To apply middleware to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To apply middleware to the Redux store"
      },
      {
        question: "What is the purpose of the createSlice function in Redux Toolkit?",
        options: ["To create a slice of the Redux state", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a slice of the Redux state"
      },
      {
        question: "What is the purpose of the configureStore function in Redux Toolkit?",
        options: ["To configure the Redux store with default settings", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To configure the Redux store with default settings"
      },
      {
        question: "What is the purpose of the createAsyncThunk function in Redux Toolkit?",
        options: ["To create asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create asynchronous actions"
      },
      {
        question: "What is the purpose of the createEntityAdapter function in Redux Toolkit?",
        options: ["To manage normalized state for collections", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage normalized state for collections"
      },
      {
        question: "What is the purpose of the createReducer function in Redux Toolkit?",
        options: ["To create a reducer with a simplified syntax", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a reducer with a simplified syntax"
      }
    ],
    Hard: [
      {
        question: "What is the purpose of the Redux DevTools?",
        options: ["To debug Redux state changes", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To debug Redux state changes"
      },
      {
        question: "What is the purpose of the Redux Toolkit?",
        options: ["To simplify Redux development", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To simplify Redux development"
      },
      {
        question: "What is the purpose of the useSelector hook in React-Redux?",
        options: ["To select data from the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To select data from the Redux store"
      },
      {
        question: "What is the purpose of the useDispatch hook in React-Redux?",
        options: ["To dispatch actions to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To dispatch actions to the Redux store"
      },
      {
        question: "What is the purpose of the Provider component in React-Redux?",
        options: ["To provide the Redux store to React components", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To provide the Redux store to React components"
      },
      {
        question: "What is the purpose of the combineReducers function?",
        options: ["To combine multiple reducers into one", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To combine multiple reducers into one"
      },
      {
        question: "What is the purpose of the Redux Thunk middleware?",
        options: ["To handle asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To handle asynchronous actions"
      },
      {
        question: "What is the purpose of the Redux Saga middleware?",
        options: ["To manage side effects in Redux", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage side effects in Redux"
      },
      {
        question: "What is the purpose of the createStore function in Redux?",
        options: ["To create a Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a Redux store"
      },
      {
        question: "What is the purpose of the applyMiddleware function in Redux?",
        options: ["To apply middleware to the Redux store", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To apply middleware to the Redux store"
      },
      {
        question: "What is the purpose of the createSlice function in Redux Toolkit?",
        options: ["To create a slice of the Redux state", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a slice of the Redux state"
      },
      {
        question : "What is the purpose of the configureStore function in Redux Toolkit?",
        options: ["To configure the Redux store with default settings", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To configure the Redux store with default settings"
      },
      {
        question: "What is the purpose of the createAsyncThunk function in Redux Toolkit?",
        options: ["To create asynchronous actions", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create asynchronous actions"
      },
      {
        question: "What is the purpose of the createEntityAdapter function in Redux Toolkit?",
        options: ["To manage normalized state for collections", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To manage normalized state for collections"
      },
      {
        question: "What is the purpose of the createReducer function in Redux Toolkit?",
        options: ["To create a reducer with a simplified syntax", "To manage state", "To handle events", "To style components"],
        correctAnswer: "To create a reducer with a simplified syntax"
      }
    ]
  }
};