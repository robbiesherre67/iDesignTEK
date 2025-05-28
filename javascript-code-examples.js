<------------ DATA TYPES ------------ START

1. Primitive Data Types (Immutable, stored by value)
These are the most basic data types.

PRIMITIVE EXAMPLES:::
let age = 25;               // Number
let name = "Alice";         // String
let isOnline = false;       // Boolean
let something;              // Undefined
let nothing = null;         // Null
let bigNumber = 9007199254740991n; // BigInt
let uniqueId = Symbol("id"); // Symbol

1. Primitive Data Types
These are basic types of data that are not objects and have immutable values.

a. String
Text data wrapped in quotes ('', "", or for template literals).

let name = "Alice";
let greeting = `Hello, ${name}`;

b. Number
Represents integers and floating-point numbers.

let age = 30;
let price = 19.99;

c. Boolean
Represents true or false.

let isLoggedIn = true;
let isAdmin = false;

d. Undefined
A variable that has been declared but not assigned a value.

let score;
console.log(score); // undefined

e. Null
Represents an intentional absence of any object value.

let selectedItem = null;

f. Symbol (ES6)
Used to create unique identifiers (mostly for object keys).

let id = Symbol("id");

g. BigInt (ES11)
Used for very large integers beyond Number.MAX_SAFE_INTEGER.

let bigNumber = 1234567890123456789012345678901234567890n;

============================================

2. Non-Primitive (Reference) Data Types (Stored by reference)
These can store multiple values and are mutable.
These store references to collections or more complex entities.

Type	Description	Example
Object	Collection of key-value pairs	let obj = { name: "Bob" };
Array	Ordered list of values	let arr = [1, 2, 3];
Function	Callable object	function greet() {}

a. Object
Key-value pairs.

let user = {
  name: "Alice",
  age: 25,
  isMember: true
};

b. Array
Ordered collection of values.

let colors = ["red", "green", "blue"];

c. Function
A reusable block of code.

function greet(name) {
  return `Hello, ${name}`;
}

d. Date, RegExp, Map, Set, etc.
Other built-in object types.

let today = new Date();
let pattern = /hello/i;

<------------ DATA TYPES ------------ END

<------------ VARIABLES ------------ START

In JavaScript, variables are used to store data values that can be retrieved, modified, and manipulated throughout your code. 
Variables are declared using one of three keywords: var, let, and const. Each of these keywords offers different features and scoping rules.

let
Scope: Block-scoped (anything within {} such as loops, conditionals, or functions).

Hoisting: Variables declared with let are hoisted but not initialized until their declaration is evaluated. 
This can prevent errors due to using the variable before declaration.

Re-assignment: Allowed, but re-declaration within the same block is not permitted.

Example:

let age = 30;
console.log(age); // Output: 30

age = 31; // Allowed: variable is re-assigned to a new value
console.log(age); // Output: 31

// Trying to redeclare in the same scope would cause an error:
// let age = 32; // Uncaught SyntaxError: Identifier 'age' has already been declared

const
Scope: Block-scoped, similar to let.

Hoisting: Also hoisted but not initialized until declaration is evaluated.

Re-assignment: Not allowed. A variable declared with const must be assigned a value at declaration, 
and that value cannot be changed through re-assignment (although the contents of objects and arrays declared with const can be modified).

Example:

const city = "New York";
console.log(city); // Output: New York

// Attempting to reassign will cause an error:
// city = "Los Angeles"; // Uncaught TypeError: Assignment to constant variable.

<------------ VARIABLES ------------ END

<------------ DESTRUCTURING OBJECTS ------------ START

Destructuring objects in JavaScript is a syntax that allows you to extract properties from an object and 
assign them to variables in a concise way. This feature improves code readability and reduces the need to 
access properties repeatedly using dot notation.

Basic Object Destructuring
Given an object, you can extract its properties into variables using a pattern that mirrors the structure of the object.

Example:
const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Traditional approach
const name1 = user.name;
const age1 = user.age;

// With destructuring
const { name, age, city } = user;

console.log(name); // Output: Alice
console.log(age);  // Output: 30
console.log(city); // Output: New York

Here, the variable names name, age, and city directly match the keys in the user object.

Renaming Variables
You can rename the extracted properties by using a colon followed by the new variable name.

Example:
const user = {
  name: "Alice",
  age: 30
};

const { name: userName, age: userAge } = user;

console.log(userName); // Output: Alice
console.log(userAge);  // Output: 30

In this example, userName holds the value of user.name and userAge holds the value of user.age.

Default Values
If a property does not exist in the object, you can assign a default value during destructuring.

Example:
const user = {
  name: "Alice"
};

// age is not present in the user object, so the default value of 25 is used.
const { name, age = 25 } = user;

console.log(name); // Output: Alice
console.log(age);  // Output: 25

Nested Object Destructuring
When dealing with objects that contain nested objects, you can destructure both the outer and inner objects.

Example:
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001"
  }
};

// Destructuring both the outer property and the nested object
const { name, address: { street, city, zip } } = user;

console.log(name);   // Output: Alice
console.log(street); // Output: 123 Main St
console.log(city);   // Output: New York
console.log(zip);    // Output: 10001

Notice that the nested properties (street, city, zip) are destructured from the address object.

Destructuring in Function Parameters
You can also destructure objects directly in the parameters of a function. 
This is useful when a function expects an object and you want to extract specific properties.

Example:
const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

function greet({ name, city }) {
  return `Hello ${name} from ${city}!`;
}

console.log(greet(user)); // Output: Hello Alice from New York!
Here, the function greet directly destructures the name and city properties from the passed-in user object.

Rest Properties in Destructuring
You can also capture the remaining properties of an object using the rest operator (...). 
This is particularly useful when you want to separate some properties from the rest.

Example:
const user = {
  name: "Alice",
  age: 30,
  city: "New York",
  occupation: "Developer"
};

const { name, ...otherDetails } = user;

console.log(name);        // Output: Alice
console.log(otherDetails); // Output: { age: 30, city: "New York", occupation: "Developer" }
Here, name is extracted and the rest of the properties are grouped into the otherDetails object.

Summary
Basic Destructuring: Directly extracts properties into variables.
Renaming: Allows changing variable names during extraction.
Default Values: Provide default values for missing properties.
Nested Destructuring: Extracts values from nested objects.
Function Parameters: Streamlines functions that accept objects.
Rest Properties: Gathers remaining properties into a separate object.
Destructuring objects is a powerful feature that not only shortens your code but also enhances its clarity and maintainability. 
Whether you're extracting values for simple assignments or deep-nested properties, destructuring provides a flexible syntax for working with objects in JavaScript.

<------------ DESTRUCTURING OBJECTS ------------ END

<------------ JAVASCRIPT OBJECTS ------------ START

JavaScript objects are one of the core building blocks in the language. 
They are collections of key-value pairs that allow you to group related data and functions (called methods) together. 
This makes them ideal for modeling real-world entities, where each object represents an item with specific attributes and behaviors.

Key Concepts
Properties: These are variables attached to the object. Each property has a key (or name) and a value. 
The value can be any valid JavaScript data type (such as a number, string, array, function, or even another object).

Methods: These are functions defined as properties of an object. Methods allow objects to perform actions related to the data they hold.

Object Literal: The most common way to create an object is using an object literal, where properties and methods are defined inside curly braces {}.

Example: Creating a Person Object
Below is an example that demonstrates how to create an object representing a person, add properties and a method, and then access or modify those properties.

// Creating an object using an object literal
const person = {
  // Properties
  name: "Alice",
  age: 30,
  isMember: true,

  // Nested Object as a property
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001"
  },

  // Method: a function associated with the object
  greet: function() {
    // 'this' refers to the current object (person)
    console.log("Hello, my name is " + this.name);
  }
};

// Accessing properties using dot notation
console.log(person.name);       // Output: Alice
console.log(person.age);        // Output: 30

// Accessing nested object properties
console.log(person.address.city); // Output: New York

// Invoking a method on the object
person.greet(); // Output: Hello, my name is Alice

// Adding a new property after the object is created
person.occupation = "Developer";
console.log(person.occupation); // Output: Developer

// Modifying an existing property
person.age = 31;
console.log(person.age); // Output: 31

Explanation
Defining the Object:
The object person is defined using curly braces. Inside, key-value pairs represent the properties and a method:

name, age, and isMember are straightforward properties.

address is itself an object, demonstrating nested objects.

greet is a method that prints a greeting using the object's own data via the this keyword.

Accessing Properties:
Dot notation (object.key) is typically used to access properties. In the example, person.name returns "Alice".

Calling Methods:
The method greet is called with person.greet(), which uses the this keyword to refer to person and access its name property.

Modifying Objects:
JavaScript objects are mutable. You can add new properties or change existing ones after the object has been created, as shown by adding occupation and updating age.

This object-oriented approach is fundamental in JavaScript, allowing you to create structured data models and organize your code in a way that is both intuitive and efficient.

In programming, mutable refers to the capability of an object or data structure to have its state or content changed after it’s created. 
In other words, if something is mutable, you can modify it (e.g., change its properties, add new values, or remove existing ones) without having to create a new version of the object.

Detailed Explanation
Mutable Objects:
These objects allow for modifications after their creation. For instance, in JavaScript, regular objects and arrays are mutable. 
You can add, update, or remove their properties or elements.

Example:
// An object is created with initial properties
const person = {
  name: "Alice",
  age: 30
};

// Changing a property is allowed because the object is mutable.
person.age = 31; 

// Adding a new property is also possible.
person.city = "New York";
console.log(person); // { name: "Alice", age: 31, city: "New York" }

Immutable Objects:
In contrast, immutable objects or data structures cannot be altered once they are created. 
Any change to an immutable object would result in creating a new object with the updated values rather than modifying the original one. 
While some data types (like strings in many languages) are immutable by nature, JavaScript objects and arrays are mutable unless you 
intentionally use methods to enforce immutability (such as using libraries or Object.freeze).

Why It Matters
Understanding mutability is important because:

Predictability: Mutable objects can lead to side effects if they are changed unexpectedly, which might cause bugs in your code.

State Management: Knowing whether an object is mutable or immutable can help in managing the state of applications, especially in complex systems or when working with frameworks and libraries that rely on predictable state changes.

Performance: Sometimes creating new objects instead of modifying existing ones (a practice encouraged by immutability) can have performance implications.

In summary, if an object is mutable, it means that its content or properties can be directly modified after its creation without generating a new instance.

<------------ JAVASCRIPT OBJECTS ------------ END

<------------ THIS KEYWORD ------------ START

The this keyword in JavaScript is a reference to the execution context, and its value is determined by how a function is 
invoked rather than where it is defined. In simpler terms, this points to different objects depending on the context in which your code is running.

1. Global Context
Non-strict Mode:
When used in the global scope (outside of any function), this refers to the global object. In browsers, this is typically the window object.

console.log(this === window); // true (in a browser)

Strict Mode:
In strict mode ("use strict";), this in the global scope is undefined.
"use strict";
console.log(this); // undefined

2. Function Context

a. Regular Functions
Non-Strict Mode:
When a function is called in the global context (not as a method of an object), this refers to the global object.

function showThis() {
  console.log(this);
}
showThis(); // Outputs: window (in a browser)

Strict Mode:
In strict mode, if you call a regular function without an explicit context, this becomes undefined.

"use strict";
function showThis() {
  console.log(this);
}
showThis(); // Outputs: undefined

b. Method Invocation
When you call a function as a method of an object, this inside the method refers to the object that the method belongs to.

const person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Outputs: "Hello, my name is Alice"

3. Constructor Functions
When you use a function with the new keyword to create an object, this inside the constructor refers to the new object being created.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const bob = new Person("Bob", 25);
console.log(bob.name); // Outputs: "Bob"

4. Explicit Binding with call, apply, and bind
JavaScript allows you to explicitly set the value of this using the methods call(), apply(), and bind().

call(): Immediately invokes the function with a specified this value and arguments provided individually.

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Alice" };
greet.call(user); // Outputs: "Hello, Alice"

apply(): Similar to call(), but arguments are passed as an array.

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const user = { name: "Bob" };
greet.apply(user, ["Hi"]); // Outputs: "Hi, Bob"

bind(): Returns a new function with a bound this value, which can be invoked later.

function greet() {
  console.log("Hello, " + this.name);
}

const user = { name: "Charlie" };
const boundGreet = greet.bind(user);
boundGreet(); // Outputs: "Hello, Charlie"

5. Arrow Functions and Lexical Scoping
Arrow functions do not have their own this binding. Instead, they inherit the this value from the 
enclosing lexical context, which makes them particularly useful for cases like callbacks.

const person = {
  name: "Alice",
  hobbies: ["reading", "hiking"],
  listHobbies: function() {
    // Arrow function inherits `this` from listHobbies method
    this.hobbies.forEach(hobby => {
      console.log(this.name + " likes " + hobby);
    });
  }
};

person.listHobbies();
// Outputs:
// "Alice likes reading"
// "Alice likes hiking"

If you used a regular function inside forEach in the example above, you would need to bind the correct context to have access to this.name.

SUMMARY
Global Context: In non-strict mode, this in the global context refers to the global object. In strict mode, it’s undefined.
Function Context: In a regular function, this depends on how the function is called, often defaulting to the global object or being undefined in strict mode.
Method Invocation: When a function is called as an object’s method, this refers to the object.
Constructor Functions: When using new, this refers to the newly created object.
Explicit Binding: call(), apply(), and bind() can be used to set this explicitly.
Arrow Functions: Arrow functions inherit this from their surrounding lexical scope rather than having their own binding.
Understanding how this works is fundamental in JavaScript since it governs how functions and methods operate in different contexts.

<------------ THIS KEYWORD ------------ END

<------------ FUNCTIONS ------------ START

JavaScript functions are one of the core building blocks of the language, allowing you to encapsulate code for reuse, abstraction, and organization. 
Functions let you execute the same set of instructions whenever needed, pass in data through parameters, and even return data as output. 
Here is a detailed exploration of JavaScript functions with various examples.

1. Function Fundamentals
Definition and Syntax
A function is a reusable block of code designed to perform a particular task. In JavaScript, there are several ways to define functions:

Function Declarations
Function Expressions
Arrow Functions
Immediately Invoked Function Expressions (IIFE)

A. Function Declarations
A function declaration defines a named function. The syntax is straightforward:

// Function Declaration Example
function greet(name) {
  return `Hello, ${name}!`;
}

// Calling the function
console.log(greet("Alice")); // Output: Hello, Alice!

Key Points:

They are hoisted, meaning the function can be called before its declaration in the code.

The function is globally scoped if declared outside any block, or locally scoped if declared inside a function.

B. Function Expressions
A function expression involves creating a function and assigning it to a variable. It can be named or anonymous:

// Anonymous Function Expression
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// Named Function Expression (less common)
const subtract = function subtractNumbers(a, b) {
  return a - b;
};

console.log(subtract(10, 4)); // Output: 6

Key Points:

Function expressions are not hoisted in the same way as function declarations.

Often used as callback functions or to create closures.

C. Arrow Functions
Introduced in ES6, arrow functions provide a more concise syntax. They differ from regular functions in that they do not 
have their own this, arguments, or super. This is particularly useful in scenarios involving callbacks.

// Basic Arrow Function Example
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20

// Arrow function with multiple statements requires a block and a return statement
const divide = (a, b) => {
  if (b === 0) {
    console.error("Division by zero");
    return null;
  }
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

Key Points:

Arrow functions are always anonymous.
They have an implicit return if the function body is a single expression without braces.

D. Immediately Invoked Function Expressions (IIFE)
IIFEs are functions that run as soon as they are defined. They are useful for creating isolated scopes and avoiding polluting the global namespace.

// IIFE Example
(function() {
  const message = "This function runs immediately!";
  console.log(message);
})();
// Output: This function runs immediately!

Key Points:

The function is wrapped inside parentheses, and immediately followed by () to execute it.

Helps in creating a private scope, especially useful before ES6 introduced let and const.

2. Function Parameters, Default Values, and the Rest Operator

A. Parameters and Arguments
Parameters allow functions to accept input values (arguments) which can be used within the function.

function sayHello(firstName, lastName) {
  // Concatenating parameters
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(sayHello("John", "Doe")); // Output: Hello, John Doe!

B. Default Parameters
JavaScript functions can have default parameter values. These values are used if no argument (or undefined) is provided.

function greetWithDefault(name = "Guest") {
  return `Welcome, ${name}!`;
}

console.log(greetWithDefault());        // Output: Welcome, Guest!
console.log(greetWithDefault("Emily")); // Output: Welcome, Emily!

C. The Rest Operator
The rest operator (...) allows a function to accept an indefinite number of arguments as an array.

function sumAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

Key Points:

Use the rest operator when you are unsure of how many arguments a function might receive.

3. Returning Values from Functions
A function can return a value using the return keyword. If no value is returned, the function returns undefined by default.

function computeArea(width, height) {
  return width * height; // Returns the computed area.
}

const area = computeArea(5, 10);
console.log(`The area is ${area}`); // Output: The area is 50

If you omit the return statement, the function implicitly returns undefined.

function logMessage(message) {
  console.log(message);
}

const result = logMessage("Logging a message"); // Logs the message and returns undefined.
console.log(result); // Output: undefined

4. Functions as First-Class Citizens
In JavaScript, functions are treated as first-class citizens. This means they can be:

Assigned to variables.

Passed as arguments to other functions.

Returned as values from other functions.

A. Passing Functions as Arguments (Callbacks)

function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}

function displayGreeting(name) {
  console.log(`Hi, ${name}!`);
}

processUserInput(displayGreeting); // Output: Hi, Alice!

B. Returning Functions (Higher-Order Functions)
Higher-order functions either take functions as arguments or return them.

function createMultiplier(multiplier) {
  // Returns a new function that uses the multiplier
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

Key Points:

This pattern is very useful in functional programming.

It allows for flexible and reusable code patterns.

5. Scope and Closures
A. Function Scope
Variables declared within a function are not accessible from outside the function. This is known as function scope.

function example() {
  const secret = "I am a secret!";
  console.log(secret); // Accessible here
}

example();
// console.log(secret); // Uncaught ReferenceError: secret is not defined

B. Closures
A closure is created when a function is defined inside another function, allowing the inner function 
to access variables in the outer function’s scope even after the outer function has finished executing.

function outer() {
  const outerVar = "I'm from the outer function";

  function inner() {
    console.log(outerVar); // inner has access to outerVar
  }

  return inner;
}

const innerFunction = outer();
innerFunction(); // Output: I'm from the outer function

Key Points:

Closures help encapsulate data and maintain state across function invocations.
They are a powerful feature used in many design patterns, such as module patterns.

6. Advanced Topics
A. Recursive Functions
A recursive function is one that calls itself. This is useful for tasks that can be defined in terms of simpler, smaller tasks (such as computing factorials or performing tree traversals).

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
Key Points:

Ensure a base case is defined to avoid infinite recursion.

Recursion can be less efficient than iteration for some problems, so use it when it makes the code clearer or easier to understand.

B. Anonymous Functions and Callbacks
Anonymous functions are functions defined without a name, often used as inline callbacks.

// Sorting an array with an anonymous callback
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers); // Output: [1, 2, 3, 4, 5]
Using arrow functions, this can be written more concisely:

numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]
C. Error Handling in Functions
Proper error handling within functions is crucial for building resilient applications. You can use try...catch to handle exceptions.

function parseJSON(jsonString) {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed;
  } catch (error) {
    console.error("Invalid JSON string:", error);
    return null;
  }
}

const validJSON = '{"name":"Bob", "age":30}';
console.log(parseJSON(validJSON)); // Output: { name: 'Bob', age: 30 }

const invalidJSON = '{name:"Bob", age:30}';
console.log(parseJSON(invalidJSON)); // Output: null (and logs an error to console)
Key Points:

Use try-catch blocks to manage potential errors, especially when dealing with external input.

7. Practical Examples and Use Cases
Example 1: Callback for Event Handling
In browser environments, functions are frequently used as event handlers.

// Assume there is a button with the id 'myButton' in your HTML.
document.getElementById('myButton').addEventListener('click', function() {
  console.log("Button clicked!");
});
Example 2: Using an Arrow Function in Array Methods
Arrow functions are particularly handy for array methods such as map(), filter(), and reduce().

const numbersArray = [1, 2, 3, 4, 5];

// Squaring each element using map with an arrow function
const squares = numbersArray.map(num => num * num);
console.log(squares); // Output: [1, 4, 9, 16, 25]

// Filtering even numbers using filter
const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
Example 3: Creating a Module with Closures
Modules use closures to encapsulate functionality and data:

const counterModule = (function() {
  let counter = 0;

  return {
    increment: function() {
      counter++;
      console.log("Counter:", counter);
    },
    decrement: function() {
      counter--;
      console.log("Counter:", counter);
    },
    getValue: function() {
      return counter;
    }
  };
})();

counterModule.increment(); // Output: Counter: 1
counterModule.increment(); // Output: Counter: 2
counterModule.decrement(); // Output: Counter: 1
console.log("Current Value:", counterModule.getValue()); // Output: Current Value: 1
Key Points:

This pattern keeps the counter variable private and exposes only the necessary methods.

Conclusion
JavaScript functions are versatile and form the backbone of programming patterns in the language. 
From basic function declarations to advanced topics like closures and recursion, understanding functions is critical for mastering JavaScript. 
By practicing different function types and their use cases, you can write cleaner, more modular, and efficient code.

<------------ FUNCTIONS ------------ END

<-------------- SCOPE CHAIN ------------ START

In JavaScript, the scope chain is the mechanism by which the JavaScript engine resolves variables. 
When you reference an identifier (variable, function, etc.), JavaScript will first look in the innermost (or current) scope. 
If it doesn’t find the identifier, it looks in the next outer scope, continuing this process until it reaches the global scope.

Below is an overview and explanation highlighting the "global scope," the "first (or local) scope" (such as inside a function), 
and the "second (or nested) scope" (such as an inner function inside another function).

1. Global Scope
The global scope is the outermost scope in JavaScript. Any variable declared in the global space becomes a property of the global 
object (for example, window in browsers). Global variables can be accessed from anywhere in your code.

// Global Scope
const globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible because it's in the global scope.
}
showGlobal();  // Output: I am global

console.log(globalVar);  // Also outputs: I am global

2. First (Local) Scope
The first scope is typically a local scope created by a function. When you declare variables inside a function, 
they are only accessible within that function. This creates a new scope that is nested within the global scope.

// Global Scope
const globalMessage = "Hello from global";

function firstScope() {
  // First (Local) Scope
  const localMessage = "Hello from first (local) scope";
  
  console.log(globalMessage);  // Accessible due to the scope chain.
  console.log(localMessage);   // Accessible within this function.
}

firstScope();

console.log(globalMessage);      // Accessible here.
 // console.log(localMessage);   // Error: localMessage is not defined!

Key Points:
Variables declared within a function (first local scope) are not accessible outside that function.
However, these variables can still access values from the outer (global) scope.

3. Second (Nested) Scope
The second scope refers to a nested scope created inside another function or block within the first (local) scope. 
When you have a function nested inside another function, the inner function has access to its own variables, 
the variables of the outer function, and the global variables. This is due to JavaScript’s lexical scoping and the scope chain.

// Global Scope
const siteName = "Example.com";

function outerFunction() {
  // First (Local) Scope
  const greeting = "Hello";
  
  function innerFunction() {
    // Second (Nested) Scope
    const innerMessage = "Welcome!";
    console.log(greeting);          // Accessing variable from outer (first) scope.
    console.log(siteName);          // Accessing global variable.
    console.log(innerMessage);      // Accessible within innerFunction.
  }
  
  innerFunction();
  
  // console.log(innerMessage);    // Error: innerMessage is not defined in outerFunction.
}

outerFunction();

How the Scope Chain Works Here:

When innerFunction references innerMessage, it first looks inside its own scope.
If a variable is not found (for example, greeting), it then looks in the outer function’s scope where it was defined.
If it still isn’t found (for example, siteName), JavaScript finally checks the global scope.
If the variable isn’t found in any of these scopes, a ReferenceError is thrown.

4. Block Scope with let and const
Modern JavaScript (ES6 and later) introduces block scope via the let and const keywords. 
Unlike var, which has function scope, variables declared with let or const are limited to the block 
(denoted by curly braces {}) in which they are declared.

function blockScopeExample() {
  if (true) {
    let blockMessage = "I'm block-scoped!";
    console.log(blockMessage);  // Accessible here.
  }
  
  // console.log(blockMessage); // Error: blockMessage is not accessible here.
}

blockScopeExample();

Note: The concept of block scope is also part of the scope chain. If you declare a variable inside a block, 
the JavaScript engine will search for it in that block first, then move outward to surrounding scopes as needed.

Summary
Global Scope: The outermost layer available everywhere in your program.

First (Local) Scope: Created when you declare a function; variables here are only accessible within that function, but they have access to the global scope.

Second (Nested) Scope: When you nest another function within a function, the inner (nested) function can access its own variables, 
then the variables of the outer function(s), and finally the global variables.

Block Scope: Introduced by let and const, which restrict variables to the block they’re declared in.

Understanding the scope chain is essential for managing variable visibility and lifetime in JavaScript, avoiding conflicts, and maintaining clean, predictable code.

<--------------- SCOPE CHAIN ------------ END

<------------ HOISTING ------------ START

JavaScript hoisting is a behavior in which variable and function declarations are moved to the top of their containing scope 
during the compilation phase. However, only the declarations are hoisted—not the initializations. 
This means that you can use functions and variables before they are declared in your code, but with some important nuances.

1. Function Declarations vs. Variable Declarations
Function Declarations
Function declarations are hoisted completely. This means that both the function’s declaration and its definition (the actual code) 
are moved to the top of the scope. As a result, you can safely call a function before it appears in the code:

// Calling a function before its definition works due to hoisting.
console.log(greet("Alice")); // Output: Hello, Alice!

function greet(name) {
  return `Hello, ${name}!`;
}

In the code above, the entire function greet is hoisted, so the call to greet("Alice") works as expected.

Variable Declarations
Variables declared using var are hoisted to the top of their function or global scope, but only the declaration 
is hoisted—not the initialization. When you try to access such a variable before its initialization, you get undefined.

console.log(score); // Outputs: undefined
var score = 100;

In this snippet, var score is hoisted, so JavaScript knows about the variable, but its value isn’t assigned until the line where you set it to 100.

Variables declared with let and const are also hoisted but are not initialized. 
They are placed in a “temporal dead zone” (TDZ) from the start of the block until their declaration is evaluated, 
meaning that trying to access them before their declaration will throw a ReferenceError.

// Uncommenting the next line would cause an error:
// console.log(age); // ReferenceError: Cannot access 'age' before initialization
let age = 25;
console.log(age); // Outputs: 25

2. Detailed Example Demonstrating Hoisting
Below is a comprehensive example that demonstrates hoisting with both function declarations and variable declarations (using both var and let):

// Example demonstrating hoisting

// Function Declaration is fully hoisted:
console.log(helloWorld()); // Output: "Hello, World!"

function helloWorld() {
  return "Hello, World!";
}

// Variable declared with var is hoisted but initialized to undefined:
console.log(myVar); // Output: undefined
var myVar = "This variable is declared with var";
console.log(myVar); // Output: "This variable is declared with var"

// Variable declared with let is hoisted, but in temporal dead zone:
try {
  console.log(myLet); // Throws ReferenceError
} catch (error) {
  console.error("Error:", error.message); // Output: "Cannot access 'myLet' before initialization"
}
let myLet = "This variable is declared with let";
console.log(myLet); // Output: "This variable is declared with let"

Explanation:

Function Declaration:
The function helloWorld is fully hoisted. Therefore, you can call it before its declaration and it returns the expected value.

Variable with var:
The declaration of myVar is hoisted to the top of the scope, but its initialization ("This variable is declared with var") 
occurs on the original line in the code. Thus, the first console.log(myVar) prints undefined.

Variable with let:
The declaration of myLet is hoisted, but since it is not initialized until the code reaches that line, accessing it 
before the declaration results in a ReferenceError due to the temporal dead zone.

3. Summary
Hoisting moves declarations to the top of the current scope (global or function scope) during the compilation phase.

Function declarations are fully hoisted (declaration + definition), allowing you to call functions before they are written in the code.

Variable declarations using var are hoisted and initialized with undefined until the actual assignment occurs.

Variables declared with let and const are hoisted but are not accessible until their declaration line is executed, 
which prevents accidental access before initialization.

Understanding hoisting helps prevent common errors and makes it clearer why certain behaviors occur when accessing 
variables and functions before their expected location in the code.

<------------ HOISTING ------------ END

<------------ LOCAL STORAGE ------------ START

Local Storage is a web API that allows you to store key/value pairs in a user's browser. 
It is part of the Web Storage API and is often used to save small amounts of data that need to 
persist across page reloads or sessions, such as user preferences, temporary states, or caching data. 

Here’s a step-by-step example along with explanations on how to use it in JavaScript.
Key Characteristics of Local Storage
Persistence: Data stored in localStorage persists even after the browser is closed and reopened.

String-Based Storage: All data is stored as strings. 
To store objects or arrays, you need to convert them into JSON strings using JSON.stringify() and parse them back with JSON.parse().

Synchronous API: Methods such as setItem(), getItem(), and removeItem() work synchronously, meaning they block execution until the operation is complete.

Scope: Local Storage is scoped per origin (protocol, host, and port). Data saved from one website cannot be accessed by another.

Example: Local Storage in a Simple HTML/JavaScript Application
Below is a complete HTML document with inline JavaScript that demonstrates how to save and retrieve data using localStorage.
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Local Storage Example</title>
</head>
<body>
  <h2>Local Storage Demo</h2>
  <button onclick="saveData()">Save Data</button>
  <button onclick="loadData()">Load Data</button>
  <div id="output"></div>

  <script>
    // Function to save data to localStorage
    function saveData() {
      // Save a simple string
      localStorage.setItem('greeting', 'Hello, Local Storage!');

      // To save a more complex data structure like an object, 
      // convert it into a JSON string first.
      const userInfo = {
        name: 'Jane Doe',
        age: 28,
        email: 'jane.doe@example.com'
      };
      localStorage.setItem('user', JSON.stringify(userInfo));

      // Inform the user that data has been saved
      document.getElementById('output').innerHTML = 'Data saved to Local Storage!';
    }

    // Function to load data from localStorage
    function loadData() {
      // Retrieve the simple string
      const greeting = localStorage.getItem('greeting');
      
      // Retrieve the object data and parse it back to an object
      const userData = localStorage.getItem('user');
      let user = userData ? JSON.parse(userData) : null;

      // Build a display message
      let message = '<p>Greeting: ' + greeting + '</p>';
      if (user) {
        message += '<p>User: ' + user.name + ', Age: ' + user.age + ', Email: ' + user.email + '</p>';
      }

      // Display the stored data on the page
      document.getElementById('output').innerHTML = message;
    }
  </script>
</body>
</html>

Explanation
HTML Structure:

Two buttons trigger the functions saveData() and loadData().

A <div> with id="output" is used to display messages.

Saving Data:

The function saveData() calls localStorage.setItem('greeting', 'Hello, Local Storage!') to store a simple string value.

An object userInfo is created. Since localStorage only supports strings, the object is serialized into a JSON string using JSON.stringify(userInfo) before being stored.

After saving, a message is displayed to the user to confirm that data has been stored.

Loading Data:

The function loadData() retrieves the string stored under 'greeting' using localStorage.getItem('greeting').

It then retrieves the serialized user object with localStorage.getItem('user') and converts it back into a JavaScript object using JSON.parse().

A simple HTML string is built and inserted into the output div to display the saved values.

Error Handling:

In the sample, we include a simple check (userData ? JSON.parse(userData) : null) to ensure that if no data is available for the key 'user', it won’t attempt to parse a null value.

Best Practices
Check for Feature Support:
Although most modern browsers support localStorage, you might want to ensure it is available before using it:

if (typeof(Storage) !== "undefined") {
    // Safe to use localStorage
} else {
    console.log("Local Storage is not supported in this browser.");
}

Data Size Limitations:
Local storage typically has a quota (usually around 5–10 MB depending on the browser), so it’s intended for small amounts of data.

Security Considerations:
Do not store sensitive information (like passwords or personal data) directly in localStorage since the data is accessible by any script running on the page and is not encrypted.

Handling JSON:
Always wrap JSON operations in try/catch blocks if there’s a chance the data may be malformed or if the stored data might have been tampered with.

<------------ LOCAL STORAGE ------------- END

<------------ BTOA METHOD ------------- START

The btoa() method in JavaScript is used to create a Base64-encoded string from a "string" of binary data. 
Essentially, it takes a string (which should be in a “binary-safe” format, often plain ASCII) and encodes it into Base64. 
This can be useful for encoding data to be safely transmitted in environments that only support text, such as embedding images or transmitting binary data via text protocols.

Below is an example that demonstrates how to use btoa() for encoding and its counterpart atob() for decoding.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>btoa() Example</title>
</head>
<body>
  <h2>Base64 Encoding with btoa()</h2>
  <script>
    // The string to be encoded must be in a binary-safe format (e.g., plain ASCII)
    let originalString = "Hello, World!";
    
    // Encode the string to Base64 using btoa()
    let encodedString = btoa(originalString);
    console.log("Encoded String:", encodedString);  // Outputs: "SGVsbG8sIFdvcmxkIQ=="
    
    // To decode the Base64 encoded string back to the original string, use atob()
    let decodedString = atob(encodedString);
    console.log("Decoded String:", decodedString);  // Outputs: "Hello, World!"
    
    // Displaying results on the page
    document.body.innerHTML += "<p>Original String: " + originalString + "</p>";
    document.body.innerHTML += "<p>Encoded String: " + encodedString + "</p>";
    document.body.innerHTML += "<p>Decoded String: " + decodedString + "</p>";
  </script>
</body>
</html>

How It Works
Encoding:

The btoa() function takes the originalString and converts it into a Base64 encoded string.

In this example, "Hello, World!" is encoded to "SGVsbG8sIFdvcmxkIQ==".

Decoding:

The atob() function is used to decode the Base64 encoded string back to its original form.

Important Notes:

Input Format: The input to btoa() should be binary-safe (typically plain ASCII). If you try to encode characters 
outside of the Latin1 range, you might encounter errors. For Unicode strings, you may need to encode them properly 
(for example, using encodeURIComponent() or other techniques) before applying btoa().

Usage: These methods are part of the Window interface in browsers and are widely supported across modern web browsers.

This example provides a complete demonstration of how to encode and decode a string using the btoa() and atob() methods in JavaScript.

<------------ BTOA METHOD ------------- END

<------------ SESSION STORAGE --------- START

Session Storage is part of the Web Storage API and provides a way to store key-value pairs in the browser 
for the duration of a page session. Unlike localStorage, which persists data even after the browser is closed, 
sessionStorage data is cleared when the page session ends (typically when the tab or browser is closed).

Example: Using Session Storage in a Simple HTML/JavaScript Page

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Session Storage Example</title>
</head>
<body>
  <h2>Session Storage Demo</h2>
  <button onclick="saveData()">Save Data</button>
  <button onclick="loadData()">Load Data</button>
  <div id="output"></div>

  <script>
    // Function to save data to sessionStorage
    function saveData() {
      // Save a simple string
      sessionStorage.setItem('sessionMessage', 'Hello, sessionStorage!');

      // To store a more complex structure like an object, convert it to a JSON string
      const user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
      };
      sessionStorage.setItem('user', JSON.stringify(user));

      // Inform the user that data has been saved
      document.getElementById('output').innerHTML = 'Data saved in Session Storage!';
    }

    // Function to load data from sessionStorage
    function loadData() {
      // Retrieve the simple string
      const sessionMessage = sessionStorage.getItem('sessionMessage');

      // Retrieve the object data and parse it back into an object
      const userData = sessionStorage.getItem('user');
      const user = userData ? JSON.parse(userData) : null;

      // Build a display message
      let output = `<p>Session Message: ${sessionMessage}</p>`;
      if (user) {
        output += `<p>User: ${user.name}, Age: ${user.age}, Email: ${user.email}</p>`;
      }

      // Display the data on the page
      document.getElementById('output').innerHTML = output;
    }
  </script>
</body>
</html>

Explanation
HTML Structure:

Two buttons trigger the saveData() and loadData() functions.
The <div> with id="output" is used to display feedback and loaded data.

Saving Data:
The function saveData() uses sessionStorage.setItem() to save a simple string (sessionMessage) and a JSON-stringified object (user).
Since sessionStorage only stores strings, any object needs to be converted to a JSON string using JSON.stringify().

Loading Data:
The function loadData() retrieves the stored string and object using sessionStorage.getItem().
The object is converted back into a JavaScript object with JSON.parse().
The retrieved data is then displayed within the <div> element.

Session Storage Characteristics:
Data stored in sessionStorage only lasts for the duration of the session (typically until the tab or browser is closed).
This makes it ideal for storing temporary data like user session information or temporary application state.

This example provides a simple demonstration of using sessionStorage to store and retrieve data in a web application using JavaScript.

<------------ SESSION STORAGE ---------- END

<---------- DATE METHOD ----------- START

The JavaScript Date object provides built-in methods to work with dates and times. You can create a new date instance, 
retrieve parts of the date (like the year, month, day, hours, etc.), and perform operations like comparing dates or formatting them.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Date Methods Example</title>
</head>
<body>
  <h2>JavaScript Date Methods Demo</h2>
  <div id="output"></div>

  <script>
    // Create a new Date object representing the current date and time
    const now = new Date();

    // Retrieve various parts of the date using Date methods
    const year = now.getFullYear();      // Returns the current 4-digit year (e.g., 2025)
    const month = now.getMonth() + 1;      // Returns the month (0-11); add 1 to get 1-12 format
    const day = now.getDate();             // Returns the day of the month (1-31)
    const hour = now.getHours();           // Returns the hour (0-23)
    const minutes = now.getMinutes();      // Returns the minutes (0-59)
    const seconds = now.getSeconds();      // Returns the seconds (0-59)

    // Other useful Date methods:
    const dayOfWeek = now.getDay();        // Returns the day of the week (0-6, where 0 is Sunday)
    const timestamp = now.getTime();       // Returns the number of milliseconds since January 1, 1970 (Unix Epoch)

    // Build an HTML message to display the date information
    let message = `<p><strong>Current Date and Time:</strong> ${now.toString()}</p>`;
    message += `<p><strong>Year:</strong> ${year}</p>`;
    message += `<p><strong>Month:</strong> ${month}</p>`;
    message += `<p><strong>Day:</strong> ${day}</p>`;
    message += `<p><strong>Hour:</strong> ${hour}</p>`;
    message += `<p><strong>Minutes:</strong> ${minutes}</p>`;
    message += `<p><strong>Seconds:</strong> ${seconds}</p>`;
    message += `<p><strong>Day of the Week:</strong> ${dayOfWeek} (0 represents Sunday)</p>`;
    message += `<p><strong>Timestamp (milliseconds since Unix Epoch):</strong> ${timestamp}</p>`;

    // Display the message inside the output div
    document.getElementById('output').innerHTML = message;
  </script>
</body>
</html>

Explanation
Creating a Date Object:
The code uses new Date() to create a date object (now) that represents the current date and time.

Extracting Date Components:

getFullYear() returns the current four-digit year.
getMonth() returns a zero-based month (0 for January, 11 for December), so we add 1 for typical 1–12 representation.
getDate() gives the day of the month.
getHours(), getMinutes(), and getSeconds() return the current hour, minute, and second, respectively.
getDay() returns the day of the week as a number (0-6).
getTime() returns the Unix timestamp in milliseconds.

Displaying the Results:
The gathered information is formatted into an HTML string and injected into the page using innerHTML, 
so you can see real-time date data when you load the page.

This example provides a clear demonstration of how to work with the JavaScript Date object and its methods. 
You can build upon this foundation to further manipulate dates, format outputs, or perform date arithmetic as needed.

<---------- DATE METHOD -----------END

<------------ STRING METHOD ------------ START

JavaScript strings include a rich set of methods that allow you to manipulate text in various ways. 
In this example, we’ll create a sample string and use several common string methods to demonstrate how you can modify and work with string data.

Below is an HTML document that demonstrates several string methods:

trim() – removes leading and trailing whitespace
toUpperCase() – converts all characters to uppercase
indexOf() – finds the position of a specified substring
slice() – extracts a section of the string
replace() – replaces a specified value with another value
split() – divides the string into an array of substrings based on a delimiter

EXAMPLE:
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript String Methods Example</title>
</head>
<body>
  <h2>JavaScript String Methods Demo</h2>
  <div id="output"></div>
  
  <script>
    // Define an example string with extra whitespace
    let example = "  Hello, JavaScript! Learn and enjoy string methods.  ";
    
    // Remove whitespace at the start and end
    let trimmed = example.trim();
    
    // Convert the trimmed string to uppercase
    let upper = trimmed.toUpperCase();

    // Find the starting index of the substring "JavaScript"
    let index = trimmed.indexOf("JavaScript");
    
    // Extract the substring "JavaScript" using slice() based on the found index
    let extracted = trimmed.slice(index, index + "JavaScript".length);

    // Replace "JavaScript" with "JS" in the trimmed string
    let replaced = trimmed.replace("JavaScript", "JS");

    // Split the trimmed string into an array of words
    let words = trimmed.split(" ");

    // Build a message displaying each result
    let message = `<p><strong>Original String:</strong> ${example}</p>`;
    message += `<p><strong>Trimmed String:</strong> ${trimmed}</p>`;
    message += `<p><strong>Uppercase String:</strong> ${upper}</p>`;
    message += `<p><strong>Index of "JavaScript":</strong> ${index}</p>`;
    message += `<p><strong>Extracted ("JavaScript" using slice()):</strong> ${extracted}</p>`;
    message += `<p><strong>After Replace ("JavaScript" → "JS"):</strong> ${replaced}</p>`;
    message += `<p><strong>Split into Words:</strong> ${words.join(", ")}</p>`;
    
    // Display the assembled information in the output div
    document.getElementById("output").innerHTML = message;
  </script>
</body>
</html>

Explanation
Initial String Setup:
The example string " Hello, JavaScript! Learn and enjoy string methods. " includes extra whitespace at both ends.

Trim:
The trim() method removes the whitespace at the beginning and end of the string, resulting in a cleaner version used for further operations.

toUpperCase:
Converting the trimmed string to uppercase with toUpperCase() shows how you can standardize text formats.

indexOf:
Using indexOf("JavaScript") finds the position where the substring "JavaScript" first appears. This index is useful for extraction or validation tasks.

slice:
The slice() method is then used to extract the substring "JavaScript" from the trimmed string, using the index found earlier and adding the length of the word.

replace:
The replace() method substitutes the first occurrence of "JavaScript" with "JS", demonstrating how to update text content.

split:
Finally, split(" ") divides the trimmed string into an array of words based on spaces, which can be very useful for parsing text.

This example provides a clear overview of several JavaScript string methods that you can use to perform typical text manipulations. 
You can expand on this by exploring additional string methods available in JavaScript to suit your specific needs.

<------------ STRING METHOD ------------ END

<------------ IF ELSE ------------ START

The if...else statement in JavaScript is a conditional control structure that allows you to execute different blocks of code based on whether a condition is true or false.

Below is an example that demonstrates how to use the if...else statement to determine if a number is positive, negative, or zero:

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript if...else Example</title>
</head>
<body>
  <h2>JavaScript if...else Statement Demo</h2>
  <div id="output"></div>

  <script>
    // Define a number to test; try different values (e.g., -5, 0, 10)
    let number = 10;
    
    // Initialize an empty message
    let message = "";

    // Use if...else if...else to check the number's value
    if (number > 0) {
      message = "The number is positive.";
    } else if (number < 0) {
      message = "The number is negative.";
    } else {
      message = "The number is zero.";
    }
    
    // Display the result on the page
    document.getElementById("output").innerHTML = `<p>${message}</p>`;
  </script>
</body>
</html>

Explanation
Defining the Number:
The variable number is set to a value (in this example, 10). You can change this value to test different cases.

The if Statement:
The first condition, if (number > 0), checks if the number is greater than zero. If true, it assigns "The number is positive." to the message variable.

The else if Statement:
If the first condition is false, the else if checks if number < 0, and if true, it assigns "The number is negative." to the message.

The else Statement:
If none of the previous conditions are met (meaning the number is neither greater than nor less than zero), the else block executes, assigning "The number is zero." to the message.

Displaying the Output:
Finally, the resulting message is inserted into the HTML element with the id="output" to display the result on the web page.

This example shows a simple and effective way to use conditional statements in JavaScript to perform different actions based on a variable's value.

<------------ IF ELSE ------------ END

<------------ LOOPS ------------ START

Loops in JavaScript provide a way to run the same block of code repeatedly until a specified condition is met. 
There are several types of loops available, including for, while, and do...while. Below is an example that 
demonstrates all three loop types by iterating from 1 to 5 and outputting the numbers.

Example: Loops in JavaScript
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Loops Example</title>
</head>
<body>
  <h2>JavaScript Loops Demo</h2>
  <div id="output-for"></div>
  <div id="output-while"></div>
  <div id="output-do-while"></div>

  <script>
    // For Loop: Iterates from 1 to 5
    let forOutput = "For Loop: ";
    for (let i = 1; i <= 5; i++) {
      forOutput += i + " ";
    }
    document.getElementById("output-for").innerHTML = forOutput;

    // While Loop: Iterates from 1 to 5
    let whileOutput = "While Loop: ";
    let j = 1;
    while (j <= 5) {
      whileOutput += j + " ";
      j++;
    }
    document.getElementById("output-while").innerHTML = whileOutput;

    // Do...While Loop: Iterates from 1 to 5
    let doWhileOutput = "Do-While Loop: ";
    let k = 1;
    do {
      doWhileOutput += k + " ";
      k++;
    } while (k <= 5);
    document.getElementById("output-do-while").innerHTML = doWhileOutput;
  </script>
</body>
</html>

Explanation
For Loop:

Syntax: for (initialization; condition; increment) { /* code to execute */ }

Example:
The for loop starts by initializing i to 1 and continues to run as long as i is less than or equal to 5, 
incrementing i after each iteration. The numbers are concatenated into a string (forOutput) which is then displayed on the page.

While Loop:

Syntax: while (condition) { /* code to execute */ }

Example:
The while loop initializes a counter j at 1 and checks the condition j <= 5 before each iteration. 
As long as the condition is true, the loop appends the value of j to the whileOutput string and then increments j.

Do...While Loop:

Syntax:
do {
  // code to execute
} while (condition);

Example:
The do...while loop runs the block of code at least once before checking the condition (k <= 5). 
In this example, it appends the value of k to the doWhileOutput string, increments k, and then checks 
the condition to decide if it should continue.

Each loop type is useful in different situations:

For loops are handy when the number of iterations is known.

While loops are more suitable when the number of iterations is uncertain.

Do...while loops ensure the code runs at least once before the condition is evaluated.

This example offers a clear overview of the basic loop structures in JavaScript, which you can tailor to more complex scenarios as needed.

<------------ LOOPS ------------ END

<------------ ARRAY METHODS ------------- START

JavaScript provides many built-in methods to work with arrays, making it easy to add, remove, transform, 
or extract information from an array. Below is an example that demonstrates several common array methods along with explanations for each.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Array Methods Example</title>
</head>
<body>
  <h2>JavaScript Array Methods Demo</h2>
  <div id="output"></div>

  <script>
    // Start with an initial array
    let fruits = ['Apple', 'Banana', 'Cherry'];
    let output = `<p><strong>Initial Array:</strong> ${JSON.stringify(fruits)}</p>`;

    // push() - Adds an element to the end of the array
    fruits.push('Orange');
    output += `<p><strong>After push('Orange'):</strong> ${JSON.stringify(fruits)}</p>`;

    // pop() - Removes the last element from the array and returns it
    const removedFruit = fruits.pop();
    output += `<p><strong>After pop():</strong> ${JSON.stringify(fruits)} (Removed: ${removedFruit})</p>`;

    // shift() - Removes the first element from the array and returns it
    const shiftedFruit = fruits.shift();
    output += `<p><strong>After shift():</strong> ${JSON.stringify(fruits)} (Removed: ${shiftedFruit})</p>`;

    // unshift() - Adds an element to the beginning of the array
    fruits.unshift('Strawberry');
    output += `<p><strong>After unshift('Strawberry'):</strong> ${JSON.stringify(fruits)}</p>`;

    // splice() - Can add or remove elements at a specific index.
    // Here, starting at index 1, we add 'Mango' without removing any elements.
    fruits.splice(1, 0, 'Mango');
    output += `<p><strong>After splice(1, 0, 'Mango'):</strong> ${JSON.stringify(fruits)}</p>`;

    // slice() - Creates a shallow copy of a portion of an array.
    // In this example, we copy items from index 1 up to (but not including) index 3.
    let slicedFruits = fruits.slice(1, 3);
    output += `<p><strong>Result of slice(1, 3):</strong> ${JSON.stringify(slicedFruits)}</p>`;

    // forEach() - Iterates over each element in the array
    output += `<p><strong>forEach() Iteration:</strong> `;
    fruits.forEach((fruit, index) => {
      output += `[${index}]: ${fruit} `;
    });
    output += `</p>`;

    // map() - Creates a new array with the results of calling a provided function on every element.
    // Here we convert each fruit's name to uppercase.
    let upperFruits = fruits.map(fruit => fruit.toUpperCase());
    output += `<p><strong>map() to Uppercase:</strong> ${JSON.stringify(upperFruits)}</p>`;

    // filter() - Creates a new array with elements that pass the test provided by a function.
    // In this example, we filter fruits that contain the letter 'a' or 'A'.
    let filteredFruits = fruits.filter(fruit =>
      fruit.toLowerCase().includes('a')
    );
    output += `<p><strong>filter() fruits containing "a":</strong> ${JSON.stringify(filteredFruits)}</p>`;

    // reduce() - Executes a reducer function on each element of the array, resulting in a single output value.
    // For demonstration, we calculate the total number of characters across all fruit names.
    let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
    output += `<p><strong>reduce() total length of fruit names:</strong> ${totalLength}</p>`;

    // Display the results in the page's output div
    document.getElementById('output').innerHTML = output;
  </script>
</body>
</html>

Explanation
Initial Array:
We begin with an array named fruits containing three string elements.

push():
The push() method appends 'Orange' to the end of the array.

pop():
The pop() method removes the last element (in this case, 'Orange') and returns it.

shift():
The shift() method removes the first element (here, 'Apple') and returns it.

unshift():
The unshift() method adds 'Strawberry' to the beginning of the array.

splice():
With splice(), we insert 'Mango' at index 1 without removing any element (the second parameter is 0, meaning no removal).

slice():
The slice() method is used to create a shallow copy of a subarray. It extracts elements from index 1 to index 3 (excluding index 3).

forEach():
The forEach() method iterates through each array element. In this example, it appends each fruit along with its index to the output string.

map():
The map() method is used to create a new array where each fruit's name is transformed to uppercase.

filter():
The filter() method creates a new array including only the fruits that contain the letter "a" (case insensitive).

reduce():
Finally, the reduce() method processes the entire array to calculate the total number of characters in all the fruit names.

This example provides a comprehensive demonstration of several JavaScript array methods that are commonly used in daily programming. 
Each method helps manipulate array data to fit various needs, from simple additions and removals to more complex transformations and aggregations.

<------------ ARRAY METHODS ------------- END

<------------ EVENTS ------------- START

JavaScript events allow you to execute code in response to various user interactions 
(like clicks, key presses, or mouse movements) or browser actions (such as the page loading). 
By listening for these events and defining callback functions (event handlers), you can create interactive web applications.

Below is a complete HTML example that demonstrates different types of events:

Click Event: Responds when a button is clicked.

Mouse Events: Change the style of an element on mouseover and mouseout.

Keyboard Event: Detects key presses as the user types in an input field.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Events Example</title>
  <style>
    /* Simple styling for the interactive elements */
    #hoverDiv {
      margin-top: 20px;
      padding: 20px;
      background-color: lightgray;
      width: 200px;
      text-align: center;
    }
    #inputField {
      margin-top: 20px;
      padding: 5px;
      width: 200px;
    }
  </style>
</head>
<body>
  <h2>JavaScript Events Demo</h2>
  
  <!-- Button for click event -->
  <button id="clickBtn">Click me!</button>
  
  <!-- Div for mouseover and mouseout events -->
  <div id="hoverDiv">
    Hover over me!
  </div>
  
  <!-- Input field for keydown event -->
  <input type="text" id="inputField" placeholder="Type something...">
  
  <!-- Div to display output messages -->
  <div id="output" style="margin-top:20px;"></div>
  
  <script>
    // Add a click event listener to the button
    document.getElementById("clickBtn").addEventListener("click", function() {
      document.getElementById("output").innerHTML = "<p>You clicked the button!</p>";
    });

    // Add mouseover and mouseout event listeners to the div
    const hoverDiv = document.getElementById("hoverDiv");
    
    // Change background and display message on mouseover
    hoverDiv.addEventListener("mouseover", function() {
      hoverDiv.style.backgroundColor = "lightblue";
      document.getElementById("output").innerHTML = "<p>You hovered over the div!</p>";
    });

    // Revert background and update message on mouseout
    hoverDiv.addEventListener("mouseout", function() {
      hoverDiv.style.backgroundColor = "lightgray";
      document.getElementById("output").innerHTML = "<p>You left the div.</p>";
    });

    // Add keydown event listener to the input field
    document.getElementById("inputField").addEventListener("keydown", function(event) {
      document.getElementById("output").innerHTML = `<p>You pressed the key: ${event.key}</p>`;
    });
  </script>
</body>
</html>

Explanation
Click Event:

A <button> element with the ID "clickBtn" is set up.
An event listener is attached using addEventListener("click", ...).
When the button is clicked, the function updates the "output" div with a message.

Mouse Events:

A <div> with the ID "hoverDiv" listens for "mouseover" and "mouseout" events.
On "mouseover", its background color changes and a message is shown.
On "mouseout", it reverts to its original background color and a different message is displayed.

Keyboard Event:

An <input> element with the ID "inputField" listens for "keydown" events.
When a key is pressed while the input field is focused, the event handler displays the pressed key by accessing event.key.

This example demonstrates how JavaScript events can be used to create interactive elements on a webpage by 
responding to user actions and updating the page content dynamically.

<------------ EVENTS ------------- END

<------------ TIMEOUTS/INTERVALS ------------- START

JavaScript offers two primary timing functions: setTimeout and setInterval.

setTimeout:
Executes a function once after a specified delay (in milliseconds).

setInterval:
Executes a function repeatedly at fixed time intervals until it is explicitly stopped using clearInterval.

Below is an example that demonstrates both methods with explanations on how to use them.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Timeouts and Intervals Example</title>
</head>
<body>
  <h2>JavaScript Timeouts and Intervals Demo</h2>
  
  <!-- Element to show the message from setTimeout -->
  <div id="timeoutOutput"></div>
  
  <!-- Element to show the counter from setInterval -->
  <div id="intervalOutput"></div>
  
  <!-- Button to stop the interval -->
  <button id="stopButton">Stop Interval</button>
  
  <script>
    // setTimeout: Executes a function after a delay (3000 milliseconds = 3 seconds)
    setTimeout(function() {
      document.getElementById("timeoutOutput").innerHTML = "setTimeout: This message appears after 3 seconds.";
    }, 3000);
    
    // setInterval: Executes a function repeatedly every 1000 milliseconds (1 second)
    let counter = 0;
    const intervalID = setInterval(function() {
      counter++;
      document.getElementById("intervalOutput").innerHTML = "setInterval: Counter = " + counter;
    }, 1000);
    
    // clearInterval: Stops the setInterval when the button is clicked
    document.getElementById("stopButton").addEventListener("click", function() {
      clearInterval(intervalID);
      document.getElementById("intervalOutput").innerHTML += " (Interval stopped)";
    });
  </script>
</body>
</html>

Explanation
Using setTimeout:

The setTimeout function schedules a one-time execution of a function after a delay.
In the example, after 3000 milliseconds (3 seconds), a message is inserted into the HTML element with id="timeoutOutput".

Using setInterval:

The setInterval function schedules a function to be executed repeatedly at fixed intervals—in this case, every 1000 milliseconds (1 second).
A counter variable is incremented each second, and its current value is displayed in the intervalOutput element.

Stopping setInterval:

The clearInterval function stops the repeated execution.
When the button with id="stopButton" is clicked, the interval is cleared, halting the counter update.

This example demonstrates how you can control timed execution of code in JavaScript, whether for a one-time delay or for repeatedly running actions.

<------------ TIMEOUTS/INTERVALS ------------- END

<------------ PROMISES ------------- START

JavaScript Promises provide a way to handle asynchronous operations in a more readable and maintainable fashion. 
A Promise represents a value that may be available now, later, or never. It can be in one of three states:

Pending: The initial state when the asynchronous operation has not yet completed.

Fulfilled: The operation completed successfully, and the promise is resolved with a result.

Rejected: The operation failed, and the promise is rejected with an error.

Below is an example that demonstrates how to create a promise that simulates an asynchronous operation 
(like fetching data) and how to handle its resolution or rejection using .then(), .catch(), and .finally().

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Promises Example</title>
</head>
<body>
  <h2>JavaScript Promises Demo</h2>
  <div id="output"></div>

  <script>
    // Function that returns a promise simulating an asynchronous operation.
    function fetchData() {
      return new Promise((resolve, reject) => {
        // Simulate a delay of 2 seconds (2000 milliseconds)
        setTimeout(() => {
          // Randomly determine whether to resolve or reject the promise
          const isSuccess = Math.random() >= 0.5;
          if (isSuccess) {
            resolve("Data fetched successfully!");
          } else {
            reject("Error: Data fetching failed!");
          }
        }, 2000);
      });
    }

    // Using the promise with then() for success handling, catch() for errors,
    // and finally() for code that should execute in both cases.
    fetchData()
      .then(result => {
        // This block executes if the promise is resolved
        document.getElementById("output").innerHTML = `<p>${result}</p>`;
      })
      .catch(error => {
        // This block executes if the promise is rejected
        document.getElementById("output").innerHTML = `<p>${error}</p>`;
      })
      .finally(() => {
        // This block executes regardless of the promise's outcome
        console.log("The promise has been settled (either resolved or rejected).");
      });
  </script>
</body>
</html>

Explanation
Creating the Promise (fetchData):

The fetchData function returns a new promise that simulates an asynchronous task using setTimeout.

After a delay of 2 seconds, the promise is either resolved with a success message or rejected with an error message. 
Here, the outcome is determined randomly with Math.random().

Handling the Promise:

.then() Method:
Attached to the promise to handle successful resolution. If the promise is fulfilled, the success message is displayed in the HTML element with id="output".

.catch() Method:
Used to catch and handle any errors if the promise is rejected.

.finally() Method:
Executes code after the promise is settled regardless of the outcome, useful for cleanup tasks such as stopping loading indicators.

Usage and Benefits:

Promises help avoid deeply nested callback functions (often referred to as "callback hell"), making asynchronous code more readable.
They provide a structured approach to handle both success and error scenarios.

This example is a basic demonstration of JavaScript Promises. In real-world applications, 
promises are often used for operations like API calls or database queries, where the result is not immediately available.

<------------ PROMISES ------------- END

<----------- FETCH METHOD ------------ START

The Fetch API provides a modern, promise-based way to make network requests in JavaScript. 
It is used to retrieve resources over the network, such as JSON data from an API. Unlike older AJAX methods, 
Fetch uses Promises, which makes it easier to chain asynchronous operations and handle success or error cases.

Below is an example that demonstrates how to use the Fetch API to retrieve data from a public API and then process and display the JSON response.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Fetch API Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #output {
      margin-top: 20px;
      padding: 10px;
      background-color: #f0f0f0;
      border: 1px solid #ddd;
    }
  </style>
</head>
<body>
  <h2>Fetch API Example</h2>
  <button id="fetchButton">Fetch Data</button>
  <div id="output"></div>
  
  <script>
    // Get reference to the button and output div
    const fetchButton = document.getElementById('fetchButton');
    const outputDiv = document.getElementById('output');

    // Function to fetch data from a public API endpoint
    function fetchData() {
      // URL to a sample API (using JSONPlaceholder, a free fake API for testing)
      const apiURL = 'https://jsonplaceholder.typicode.com/posts/1';

      // Use the Fetch API to send a GET request
      fetch(apiURL)
        .then(response => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Convert the response data into JSON
          return response.json();
        })
        .then(data => {
          // Process the JSON data and display it on the page
          outputDiv.innerHTML = `
            <h3>Fetched Data:</h3>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Body:</strong> ${data.body}</p>
          `;
        })
        .catch(error => {
          // Handle any errors that occurred during the fetch
          outputDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
        });
    }

    // Add an event listener to the button to call fetchData when clicked
    fetchButton.addEventListener('click', fetchData);
  </script>
</body>
</html>

Explanation
HTML Structure:

A button with the ID "fetchButton" is used to trigger the fetch operation.

A div with the ID "output" is provided to display the fetched data or error messages.

Using the Fetch API:

The fetch(apiURL) method sends a GET request to the API endpoint (in this example, a fake post from JSONPlaceholder).

Response Handling:

The .then(response => { ... }) block checks if the response is successful using response.ok. If not, an error is thrown.

The response is then converted into JSON using response.json().

Processing JSON Data:

The next .then(data => { ... }) block extracts the JSON data and creates HTML content to display the post's ID, title, and body.

Error Handling:

The .catch(error => { ... }) block catches any errors during the fetch process and displays an error message.

Event Listener:

The code attaches an event listener to the button so that when it is clicked, the fetchData() function is executed to initiate the API request.

This example demonstrates how to retrieve data asynchronously using the Fetch API, process a JSON response, 
and display the results on a webpage. It shows the simplicity and flexibility of using promises for handling 
asynchronous operations in modern JavaScript applications.

<----------- FETCH METHOD ------------ END

<--------- JOIN METHOD -------- START

The JavaScript join() method is used to combine all elements of an array into a single string, 
with an optional separator between each element. If no separator is provided, the default is a comma (,).

Below is an example that demonstrates how to use the join() method in different ways:

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript join() Method Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #output {
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h2>Using the join() Method</h2>
  <div id="output"></div>
  
  <script>
    // Define an array of fruits
    let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

    // Join the array elements into a single string using the default comma separator
    let joinedWithComma = fruits.join();
    
    // Join the array elements with a custom separator (e.g., a hyphen)
    let joinedWithHyphen = fruits.join(' - ');
    
    // Join the array elements with a space separator
    let joinedWithSpace = fruits.join(' ');

    // Assemble messages to display
    let message = `<p><strong>Original Array:</strong> ${JSON.stringify(fruits)}</p>`;
    message += `<p><strong>Joined with default separator (","):</strong> ${joinedWithComma}</p>`;
    message += `<p><strong>Joined with hyphen (" - "):</strong> ${joinedWithHyphen}</p>`;
    message += `<p><strong>Joined with space (" "):</strong> ${joinedWithSpace}</p>`;
    
    // Display the results in the output div
    document.getElementById('output').innerHTML = message;
  </script>
</body>
</html>

Explanation
Array Definition:
The array fruits contains several fruit names.

Using join() Without a Separator:
When calling fruits.join() without a parameter, it uses the default separator (a comma) to 
combine the array elements. For instance, the result will be "Apple,Banana,Cherry,Date".

Using join() With a Custom Separator:

Hyphen Separator:
fruits.join(' - ') combines the elements separated by a hyphen and spaces, resulting in "Apple - Banana - Cherry - Date".

Space Separator:
fruits.join(' ') combines the elements using a single space, resulting in "Apple Banana Cherry Date".

Displaying the Output:
The example builds a message string that shows the original array (formatted with JSON.stringify for clarity) 
and the results of the join() method with different separators. This message is then injected into the page, 
allowing you to see the effects of the join() method.

This example highlights how the join() method can be used to convert an array into a string with various formatting options, 
making it useful for display purposes or when constructing strings from array data.

<--------- JOIN METHOD -------- START

<------------ TRY / CATCH ------------- START

The try...catch statement in JavaScript allows you to test a block of code for errors (in the try block) and handle any 
errors that might occur (in the catch block). You can also use a finally block to execute code that runs regardless of 
whether an error was thrown. This mechanism helps prevent your program from stopping abruptly due to runtime errors.

Below is an example that demonstrates how try...catch works:

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Try...Catch Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #output {
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h2>Try...Catch Method Demo</h2>
  <div id="output"></div>
  
  <script>
    // A function that simulates an error by attempting to parse an invalid JSON string.
    function parseData(jsonString) {
      try {
        // Attempt to parse the provided JSON string.
        // If the string is not valid JSON, an error will be thrown.
        let data = JSON.parse(jsonString);
        // If parsing is successful, return the parsed data.
        return data;
      } catch (error) {
        // Handle any errors that occur during parsing.
        // The error object provides useful information about what went wrong.
        console.error("Parsing error:", error.message);
        // Return a default value or handle the error as needed.
        return null;
      } finally {
        // This block executes whether or not an error occurred.
        console.log("parseData() execution completed.");
      }
    }

    // Example using a valid JSON string.
    let validJSON = '{"name": "Alice", "age": 30}';
    let resultValid = parseData(validJSON);
    
    // Example using an invalid JSON string.
    let invalidJSON = '{"name": "Bob", "age": 25'; // Note the missing closing bracket.
    let resultInvalid = parseData(invalidJSON);

    // Build output message.
    let message = "<p><strong>Valid JSON Parsing Result:</strong></p>";
    message += `<pre>${JSON.stringify(resultValid, null, 2)}</pre>`;
    message += "<p><strong>Invalid JSON Parsing Result:</strong> Returned value is " + resultInvalid + "</p>";

    document.getElementById("output").innerHTML = message;
  </script>
</body>
</html>

Explanation
The try Block:

In the function parseData, the try block contains code that attempts to parse a JSON string using JSON.parse().
If the JSON string is correctly formatted, it will be parsed and returned as an object.

The catch Block:

If an error occurs during the parsing (for example, due to malformed JSON), the code execution immediately jumps to the catch block.
The caught error is logged using console.error(), and the function returns null as a fallback.

The finally Block:

The finally block runs after the try and catch blocks have finished executing, regardless of whether an error was thrown.
In this example, it logs a message to the console indicating that the function has completed its execution.

Usage in the Example:

Two calls to parseData demonstrate both a successful parse (with a valid JSON string) and a failed parse (with an invalid JSON string).
The output is displayed on the web page, showing the result of each parsing attempt.

Using try...catch is essential for robust error handling in asynchronous operations, user input parsing, network requests, or any section of code where errors might occur. This approach helps ensure that your application can gracefully manage errors without crashing.

<------------ TRY / CATCH ------------- END

<------------ ASYNCHRONOUS JS ------------- START

Asynchronous JavaScript allows you to perform tasks (like API calls, timers, or file operations) 
without blocking the execution of other code. Although JavaScript is single-threaded, you can manage 
asynchronous operations using several patterns such as callbacks, Promises, and the newer async/await syntax. 
This capability helps keep your application responsive, even while waiting for long-running tasks to complete.

Below is an example that demonstrates three common asynchronous approaches:

Callback-based Asynchronous Operations

Promise-based Asynchronous Operations

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Asynchronous JavaScript Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #output {
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
      margin-top: 10px;
    }
    button {
      margin-bottom: 10px;
      padding: 8px 12px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>Asynchronous JavaScript Demo</h2>
  
  <button id="asyncBtn">Run Asynchronous Operations</button>
  <div id="output"></div>
  
  <script>
    const outputDiv = document.getElementById('output');

    // 1. Callback-based Asynchronous Operation
    function simulateAsyncWithCallback(callback) {
      setTimeout(() => {
        callback("Callback: Operation completed after 2 seconds.");
      }, 2000);
    }

    // 2. Promise-based Asynchronous Operation
    function simulateAsyncWithPromise() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate successful asynchronous operation.
          resolve("Promise: Operation completed after 2 seconds.");
        }, 2000);
      });
    }

    // 3. Async/Await-based Operation
    async function simulateAsyncWithAsyncAwait() {
      // Await the resolution of the promise-based function
      const result = await simulateAsyncWithPromise();
      return "Async/Await: " + result;
    }

    // Event listener for button click to run the asynchronous operations.
    document.getElementById('asyncBtn').addEventListener('click', () => {
      // Clear previous output.
      outputDiv.innerHTML = "<p>Starting asynchronous operations...</p>";

      // Using the callback approach
      simulateAsyncWithCallback(result => {
        outputDiv.innerHTML += `<p>${result}</p>`;
      });

      // Using the Promise approach
      simulateAsyncWithPromise()
        .then(result => {
          outputDiv.innerHTML += `<p>${result}</p>`;
        })
        .catch(err => {
          outputDiv.innerHTML += `<p style="color:red;">Promise Error: ${err}</p>`;
        });

      // Using Async/Await
      (async () => {
        try {
          const result = await simulateAsyncWithAsyncAwait();
          outputDiv.innerHTML += `<p>${result}</p>`;
        } catch (error) {
          outputDiv.innerHTML += `<p style="color:red;">Async/Await Error: ${error}</p>`;
        }
      })();
    });
  </script>
</body>
</html>

Explanation
Callback Approach:

The function simulateAsyncWithCallback uses setTimeout to simulate a delay, after which it calls a callback function with a success message.
Callbacks are a traditional way of handling asynchronous operations but can lead to nested code structures ("callback hell") when dealing with multiple sequential operations.

Promise Approach:

The function simulateAsyncWithPromise returns a Promise that resolves with a success message after a 2-second delay.
Promises provide a cleaner way to manage asynchronous operations and allow chaining operations with .then() and error handling with .catch().

Async/Await Approach:

The function simulateAsyncWithAsyncAwait is declared as async, allowing you to use the await keyword to pause execution until a Promise is resolved.
This syntax makes asynchronous code look and behave more like synchronous code, improving readability.

Event Listener:

When the button is clicked, all three asynchronous methods are executed concurrently.
Their results are displayed on the page within the #output element once each operation is complete.

This example demonstrates different techniques for performing asynchronous operations in JavaScript, helping you decide which method fits best for your application’s needs.

<------------ ASYNCHRONOUS JS ------------- END

<------------ AWAIT ASYNC -------------- START

Async/Await is a modern way to handle asynchronous operations in JavaScript. 
It simplifies working with Promises by allowing you to write asynchronous code that looks and behaves more like synchronous code. 
With async/await, you mark a function as async and then use the await keyword to pause execution until a 
Promise is resolved or rejected. This reduces the need for chaining .then() and nested callbacks.

Below is a detailed example that demonstrates how to use async/await in a typical scenario: fetching data from a public API.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Async/Await Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #output {
      margin-top: 20px;
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
    }
    button {
      padding: 8px 12px;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h2>Async/Await Demo: Fetching Data</h2>
  <button id="fetchButton">Fetch Data</button>
  <div id="output"></div>

  <script>
    // The async function that fetches data from a public API.
    async function fetchData() {
      // Clear any previous output.
      document.getElementById('output').innerHTML = "Fetching data...";

      // Use a try/catch block to handle errors.
      try {
        // The await keyword pauses execution until the Promise returned by fetch resolves.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        // Check if the response is successful; otherwise, throw an error.
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Await the conversion of the response data into JSON.
        const data = await response.json();

        // Display the fetched data on the page.
        document.getElementById('output').innerHTML = `
          <h3>Post Details:</h3>
          <p><strong>Title:</strong> ${data.title}</p>
          <p><strong>Body:</strong> ${data.body}</p>
        `;
      } catch (error) {
        // Handle any errors that occur during the fetch or data conversion.
        document.getElementById('output').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      } finally {
        // The finally block executes regardless of success or failure.
        console.log("fetchData() has completed.");
      }
    }

    // Attach an event listener to the button to trigger the async function when clicked.
    document.getElementById('fetchButton').addEventListener('click', fetchData);
  </script>
</body>
</html>

Explanation
Async Function Declaration:

The function fetchData is declared as async, which means it will return a Promise and allows the use of await inside it.

Using Await:

The expression await fetch(url) pauses the function execution until the Promise returned by fetch resolves.
Similarly, await response.json() waits for the JSON conversion of the response data.

Error Handling with Try/Catch:

A try block wraps the asynchronous operations so that any errors (such as network errors or JSON parsing errors) can be caught in the catch block.
If the fetch response is not OK (i.e., the HTTP status code indicates an error), an error is manually thrown to be caught.

Finally Block:

The finally block executes regardless of whether an error occurred. This is useful for cleanup or logging actions.

Event Listener:

An event listener is added to the button so that clicking it invokes the async function, demonstrating a typical user-triggered asynchronous operation.

This example shows how async/await not only makes asynchronous code easier to write and read but also integrates 
well with error handling using try/catch, making your asynchronous operations robust and maintainable.

<------------ AWAIT ASYNC -------------- END

<------------ OOP - CONSTRUCTORS & PROTOTYPES ------------- START

In JavaScript, object-oriented programming (OOP) can be achieved using constructor functions and prototypes. 
This approach allows you to create objects with similar properties and methods, while sharing common functionality across instances without duplicating code.

Key Concepts
Constructor Functions:
A constructor function is used to initialize new objects. By convention, constructor function names start with an uppercase letter. 
When invoked with the new keyword, the constructor creates a new object, sets its context (this) to that object, and returns it.

Prototypes:
Every function in JavaScript has a prototype property. When objects are created using a constructor function, 
they inherit properties and methods from that constructor’s prototype. This mechanism is memory efficient since 
methods attached to the prototype are shared among all instances, rather than each instance having its own copy.

Example: Constructors & Prototypes
Below is a complete example that creates a simple Person constructor, adds a method to its prototype, 
and then creates instances to demonstrate inheritance of methods.

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>OOP - Constructors & Prototypes Example</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
    }
    #output {
      padding: 10px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <h2>OOP in JavaScript: Constructors & Prototypes</h2>
  <div id="output"></div>
  
  <script>
    // Constructor function to create Person objects
    function Person(name, age) {
      this.name = name;
      this.age = age;
    }

    // Adding a shared method to the Person prototype.
    // This method will be available to all Person instances.
    Person.prototype.sayHello = function() {
      return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    };

    // Creating instances of Person using the 'new' keyword
    var person1 = new Person("Alice", 30);
    var person2 = new Person("Bob", 25);

    // Displaying the output by calling the shared method on each instance
    var outputMessage = "<p>" + person1.sayHello() + "</p>";
    outputMessage += "<p>" + person2.sayHello() + "</p>";

    // Inject the output into the HTML page
    document.getElementById("output").innerHTML = outputMessage;
  </script>
</body>
</html>

Explanation
Constructor Function (Person):

The function Person(name, age) initializes new objects with name and age properties.
When you use new Person("Alice", 30), a new object is created, and its properties are set accordingly.

Prototype Method (sayHello):

The method sayHello is added to Person.prototype. This ensures that all Person objects share the same sayHello method.
When you call person1.sayHello(), JavaScript looks up the method on the instance; if it’s not directly found there, it checks the prototype.

Creating and Using Instances:

Two instances, person1 and person2, are created with different values for name and age.
The shared sayHello method is called on both instances, outputting a personalized greeting for each.

This pattern leverages the power of prototypes to efficiently share common behavior across many objects, 
while constructors allow you to create multiple instances with unique properties. 
This is a fundamental approach in JavaScript’s object-oriented programming prior to the introduction of 
ES6 classes, which, under the hood, still use prototypes.

<------------ OOP - CONSTRUCTORS & PROTOTYPES ------------- END

<------------ MODULES & TOOLING ------------- START

JavaScript modules let you split your code into separate, reusable files by exporting functions, objects, 
or primitives from one file and importing them into another. Modern module systems (such as ES6 modules) 
help you organize your codebase, maintain better structure, and work efficiently with tooling 
like bundlers (Webpack, Rollup) and transpilers (Babel).

Below is an example that demonstrates how to use ES6 modules along with some notes about tooling.

Example Overview
Imagine you have a small math library that you want to reuse in your application. 
You could create a separate module file (e.g., math.js) that exports a couple of functions. 
Then, in your main file (e.g., app.js), you import these functions and use them in your code.

File: math.js
// Exporting multiple functions using named exports
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// You can also export variables or objects
export const PI = 3.14159;

File: app.js
// Importing named exports from the math.js module
import { add, multiply, PI } from './math.js';

console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));
console.log("Value of PI =", PI);

// You can also import the entire module as an object:
import * as math from './math.js';
console.log("Using math object, 10 + 20 =", math.add(10, 20));

File: index.html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JavaScript Modules & Tooling Example</title>
</head>
<body>
  <h2>JavaScript Modules Demo</h2>
  <!-- Use type="module" to load an ES6 module -->
  <script type="module" src="app.js"></script>
</body>
</html>

Explanation
Creating a Module (math.js):

The file math.js defines two functions, add and multiply, and a constant PI.

These are exported using ES6 named exports. This makes them available to any file that imports this module.

Importing a Module (app.js):

In app.js, we import the functions and constant from math.js using the ES6 import statement.
The code demonstrates two ways of importing:
Named Imports: Directly pulling in add, multiply, and PI.

Namespace Import: Importing everything under the math namespace.

The imported functions are then used to perform simple calculations, and the results are logged to the console.

Loading Modules in the Browser (index.html):

The <script> tag in the HTML file is given the attribute type="module", which tells the browser that the script should be treated as an ES6 module.

This approach is supported in modern browsers, and the module’s dependency graph is automatically managed.

Tooling Considerations:

Bundlers: Tools like Webpack, Rollup, or Parcel can bundle your modular JavaScript code into a single file 
for production use. Bundlers help optimize your code and manage dependencies.

Transpilers: Babel can transform modern ES6+ module syntax into older formats (like CommonJS) to support older browsers.

Development Workflow: Tooling improves development by enabling hot-module reloading, code splitting, and tree shaking 
(removing unused code), contributing to faster builds and better performance.

This example shows the basics of JavaScript modules using the ES6 syntax along with a quick overview of how tooling 
can further enhance your development workflow. Modules and associated tooling make it easier to maintain large 
codebases by promoting code reuse and ensuring that your application scales well.

<------------ MODULES & TOOLING ------------- END

<------------ ITERATORS, GENERATORS, & DATA STRUCTURES ------------- START

Iterators and generators are advanced JavaScript features that help you work with data in a sequential, 
controlled manner. They are closely related and often used when dealing with various data structures 
such as arrays, sets, maps, or even custom collections.

Iterators
An iterator is an object that adheres to the iteration protocol. It has a next() method that returns an object with two properties:

value: The next value in the sequence.

done: A boolean indicating whether there are further values to process.

Custom Iterator Example
Below is a simple example of a custom iterator that produces numbers from 1 through n:
// A custom iterator that yields numbers from 1 to n.
function createIterator(n) {
  let current = 1;
  return {
    next() {
      if (current <= n) {
        return { value: current++, done: false };
      } else {
        return { done: true };
      }
    }
  };
}

// Using the iterator:
const numberIterator = createIterator(5);
let result = "";
let nextVal = numberIterator.next();
while (!nextVal.done) {
  result += nextVal.value + " ";
  nextVal = numberIterator.next();
}
console.log("Custom Iterator:", result); // Outputs: "Custom Iterator: 1 2 3 4 5 "

Generators
A generator is a special kind of function that can pause and resume execution using the yield keyword. 
When a generator function is invoked, it returns an iterator—a generator object—that conforms to the iterator protocol. 
Generators simplify creating iterators, especially when the logic for generating values is complex or stateful.

Generator Function Example
The same functionality using a generator function becomes much more concise:
// A generator that yields numbers from 1 to n.
function* numberGenerator(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

// Using the generator:
let genOutput = "";
for (let num of numberGenerator(5)) {
  genOutput += num + " ";
}
console.log("Generator Function:", genOutput); // Outputs: "Generator Function: 1 2 3 4 5 "

Built-in Data Structures and Iteration
Modern JavaScript built-in data structures such as Arrays, Sets, and Maps are iterable. 
This means they implement the Symbol.iterator method, and you can loop over them with a for...of loop.

Array, Set, and Map Examples
// Array iteration:
const fruits = ["Apple", "Banana", "Cherry"];
let arrayResult = "";
for (const fruit of fruits) {
  arrayResult += fruit + " ";
}
console.log("Array Iteration:", arrayResult); // "Apple Banana Cherry "

// Set iteration:
const mySet = new Set(["Alpha", "Beta", "Gamma"]);
let setResult = "";
for (const item of mySet) {
  setResult += item + " ";
}
console.log("Set Iteration:", setResult); // "Alpha Beta Gamma "

// Map iteration:
const myMap = new Map([
  ["A", "Alpha"],
  ["B", "Beta"],
  ["C", "Gamma"]
]);
let mapResult = "";
for (const [key, value] of myMap) {
  mapResult += `{${key}: ${value}} `;
}
console.log("Map Iteration:", mapResult); // "{A: Alpha} {B: Beta} {C: Gamma} "

Custom Data Structures with Generators
You can also create your own data structures that are iterable by implementing the Symbol.iterator property. 
Using a generator function makes this task straightforward.

Custom Collection Example
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Iterators, Generators & Data Structures</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    #output { background: #f9f9f9; border: 1px solid #ddd; padding: 10px; margin-top: 20px; }
  </style>
</head>
<body>
  <h2>Iterators, Generators, & Data Structures in JavaScript</h2>
  <div id="output"></div>
  <script>
    // Custom Collection Class that is Iterable using a Generator
    class CustomCollection {
      constructor(...items) {
        this.items = items;
      }
      // Implement the default iterator using a generator function.
      *[Symbol.iterator]() {
        for (const item of this.items) {
          yield item;
        }
      }
    }
    
    // Create an instance of the custom collection.
    const customColl = new CustomCollection("One", "Two", "Three");
    let customResult = "Custom Collection Iteration: ";
    for (const item of customColl) {
      customResult += item + " ";
    }
    
    // Assemble all outputs.
    const outputContent = `
      <p><strong>Custom Iterator (createIterator):</strong> 1 2 3 4 5</p>
      <p><strong>Generator Function (numberGenerator):</strong> 1 2 3 4 5</p>
      <p><strong>Array Iteration:</strong> Apple Banana Cherry</p>
      <p><strong>Set Iteration:</strong> Alpha Beta Gamma</p>
      <p><strong>Map Iteration:</strong> {A: Alpha} {B: Beta} {C: Gamma}</p>
      <p><strong>Custom Collection Iteration:</strong> ${customResult}</p>
    `;
    document.getElementById("output").innerHTML = outputContent;
  </script>
</body>
</html>

Explanation
Custom Iterator:
We define a function (createIterator) that returns an object with a next() method, yielding sequential numbers until a condition is met.

Generator Function:
The generator function numberGenerator uses yield to return a sequence of numbers. 
It makes the iterator implementation concise and easy to maintain.

Built-In Data Structures:
Arrays, Sets, and Maps are inherently iterable because they implement the Symbol.iterator method. 
This allows you to use them directly in for...of loops.

Custom Data Structure:
The CustomCollection class accepts a list of items and implements the default iterator via a generator 
function tied to Symbol.iterator. This makes instances of CustomCollection iterable.

Iterators and generators significantly enhance how you work with data, giving you the flexibility to 
define custom iteration behavior while leveraging built-in iteration for both standard and user-defined data structures.

<------------ ITERATORS, GENERATORS, & DATA STRUCTURES ------------- END

<------------ MODERN FOR LOOPS ------------- START

In modern JavaScript there are four distinct loop constructs that use the for keyword:

Classic for
The familiar C-style loop with initializer, test and final-expression.

for (let i = 0; i < 5; i++) {
  console.log(i);
}
-----------------
for in
Iterates over the enumerable property names (keys) of an object.

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key, obj[key]);
}
-----------------
for of
Iterates over the values of any iterable (arrays, strings, Maps, Sets, etc.).

const arr = [10, 20, 30];
for (let value of arr) {
  console.log(value);
}  
-----------------
for await of
Inside an async function, iterates asynchronously over an async iterable (e.g. streams, async generators).

async function process(stream) {
  for await (let chunk of stream) {
    console.log(chunk);
  }
}  

<------------ MODERN FOR LOOPS ------------- END





