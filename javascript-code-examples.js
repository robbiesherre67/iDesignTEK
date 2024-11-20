*****************************

*****************************
REACT to start the DEV Server Locally -> npm run dev

END of local REACT project run -> npm run build and this creates 
a "dist" that you can deploy your code with.
-----------------------------
npm create vite@latest ADD name of your project
change the port of the localhost SERVER:3000

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
-----------------------------
cd INTO YOUR REACT FOLDER
  npm install
  npm run dev

ROUTING install = npm i react-router-dom
*****************************

CMD SHIFT D  = selects all of the text you want to change at one Time.
rafce = creating a React ARROW Function for components

*****************************
  TAILWIND CSS INSTALL ->

https://tailwindcss.com/docs/guides/create-react-app

*****************************

React Basics Concepts
Using Router and Links to "link" to other pages on a SPA
LINKS -- import the links and use <NavLink instead of <a href="" 

JSX (JavaScript Syntax Extension) An HTML-like syntax within JavaScript(components)

import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <nav>
        <ul className="navbar_list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
        </ul>
      </nav>
    );
  };

  ROUTES links with ID
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<SingleProduct />} />
  <Route path="/articles" element={<Articles />} />
  <Route path="/admin" element={<Admin />} />
  <Route path="*" element={<NotFound />} />
</Routes>
------------------------------
Creating component
Component is Reusable piece of code that used to define certain part of user interface.

Think of a React component as a small, self-contained piece of code that describes how a 
part of a website or application should look and behave.

Here is the basic structure of react component:

import React from "react";
 
const Card = () => {
    return <div>Card Component</div>;
};
 
export default Card;

JSX and Babel
JSX stands for “JavaScript XML” and it is code in which we can write HTML and JavaScript code together. 
This code looks very similar to the HTML markup.

import React from "react";
 
const Card = () => {
    const name = "Code Bless You!";
    return <h1>Name: {name}</h1>;  // This is jsx code
};
 
export default Card;
Now this JSX code, browser can not understand, so we have to covert this code into 
vanilla JavaScript code and for that React use babel library.

You can paste this code in to babel.io website and you can see it’s vanilla JavaScript code.

So we can easily write JSX code in our file and babel will convert that code in to 
JavaScript code that browsers can understand.

Article - https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html

Adding multiple elements
So for adding multiple elements in react component, we have to wrap them with one parent element. 
Because we know in babel our code convert in React JSX function and that function only add one 
element in its first argument.

There are 2 solutions for that:

We can wrap our elements with any one parent element.

import React from "react";
 
const Card = () => {
    return (
        <div>
            <h1>This is Card Component</h1>
            <button>Add new task</button>
        </div>
    );
};
 
export default Card;
We can use React.Fragment component for wrapping them.

import React from "react";
 
const Card = () => {
    return (
        <React.Fragment>
            <h1>This is Card Component</h1>
            <button>Add new task</button>
        </React.Fragment>
    );
};
 
export default Card;
or we can use this also

import React from "react";
 
const Card = () => {
    return (
        <>
            <h1>This is Card Component</h1>
            <button>Add new task</button>
        </>
    );
};
 
export default Card;
Adding JavaScript expression in to JSX
Now to add JavaScript expression in to JSX, we just need to add curly brackets 
and inside this we can add JavaScript expression.

import React from "react";
 
const Card = () => {
    const tasks = 5;
    return (
        <>
            <h1>Total Tasks: {tasks}</h1>
            <button>Add new task</button>
        </>
    );
};
 
export default Card;

Adding attributes and events in JSX
In JSX, we can add attribute/events same as we add attributes/events in HTML. But some attributes are different.

For example, for adding class to our element, we have to use className attribute and also for 
defining inline style, we have to pass style object in style attribute.


State
When we change our normal variable value, that value change will not happen on our web page. 
So for reflecting that change on our DOM, we have to make our variable as state variable.

In simple words, if we define our variable as state variable, then react will watch that variable 
and if its value change, then react will reflect that change immediately.

So for defining state variable we have to use useState hook.

What are hooks?
hooks in React are functions that allow us to add state and other React features to functional components.

Before hooks were introduced, state and other features could only be used in class components. 
However, with hooks, you can use these features directly in functional components, making them more powerful and versatile.

useState Hook
useState is used to create state variables in functional components. So to use the useState 
hook we need to first import that and use it inside the function component.

We pass any type of data - Like Boolean, number, text, object, array anything. This useState 
hook returns array with two items. The first one is its current value and the second one is 
the function for updating that value.

import React, { useState } from "react";
 
const Card = () => {
    const [count, setCount] = useState(5);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <h1>Total Counts: {count}</h1>
            <button onClick={handleClick}>Add new task</button>
        </>
    );
};
 
export default Card;
We can also use useState hook, for handling inputs. Just we have to pass our set function in onChange event.

import React, { useState } from "react";
 
const Card = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    return (
        <>
            <input type='text' onChange={handleChange} />
            <h1>Input: {input}</h1>
        </>
    );
};
 
export default Card;


Mapping list items
As we see in Section 2, we will use map method to display the list of items in react. 
This map method is very useful.

Always remember to add key attribute for returning element and pass unique value in it. 
That will help react to quickly identified which element gets changed.

import React from "react";
 
const Card = () => {
    const products = ["Product1", "Product2", "Product3"];
    return (
        <>
            <ul>
                {products.map((product) => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </>
    );
};
 
export default Card;
*****************************
*****************************

//ARROW Function
const greet = (language) => console.log("Hello Javascript World", language);
greet("ReactJS");

//Accessing the Object value
const user = {
  name: "Harley",
  email: "robbiesherre@idesigntek.com",
};
console.log(user["email"]);

// Object Destructuring
const user = {
  name: "Robbie",
  email: "robbiesherre@idesigntek.com",
  country: "United States",
};
const { name, email, country } = user;
console.log(user);

//MAP Method with ARROW function AND Template Literal
const products = ["Product1", "Product2", "Product3"];

const displayItems = products.map((product) => `<li> ${product} </li>`);
console.log(displayItems);

// Filter Method
const ages = [5, 23, 14, 30, 21];
//console.log(ages);
const adults = ages.filter((age) => age > 18);
console.log(adults);

// Spread Operator
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];
//const numbers = arr1.concat(arr2);
const numbers = [...arr1, 5, 6, ...arr2]; // Always seperate with a "comma"
console.log(numbers);

const obj1 = {
  name: "Meet",
};
const obj2 = {
  name: ["Teaching", "Learning"],
};
const user = { ...obj1, ...obj2, YouTube: "Javascript Coding" };
console.log(user);

// Ternary Operator = used for adding condition
// Ternary operators are the shortcut way to write if-else conditions
// condition ? trueExpression : falseExpression

const marks = 50;
const result = marks > 35 ? "Pass" : "Fail";
console.log(result);

// Modules
function post() {
  console.log("This is a post");
}
function feed() {
  console.log("This is feed");
  post();
  post();
  post();
}
feed();

**********************************************
**********************************************
**********************************************
JavaScript Summary
**********************************************
**********************************************
**********************************************
Var vs Let vs Const
Var, Let and Const these three keywords are used to define variables in JavaScript. Let and const are the ES6 features which JavaScript introduce lately.

Var is the functional scope variable - which means we can use variable that declare with var is accessible in whole function.

But let and const are the block scope variables - which means we can only use them in that particular code block, in which they are defined.



Arrow Function
Arrow function is the another way to define function. By using arrow function syntax we can define JavaScript functions more easily.

// Defining function using function keyword
function sayHello() {
    console.log("Hello JavaScript World!");
}
 
// Defining function using arrow function
const sayHello = () => {
    console.log("Hello JavaScript World!");
}


Accessing the objects
First of all, object is collection of similar type of data and storing them in key value pair.

There are two ways to access the objects properties:

const user = {
    name: "Harley",
    email: "harley07@gmail.com",
};
 
console.log(user.email); // Output: harley07@gmail.com
console.log(user["email"]); // Output: harley07@gmail.com


Object Destructuring
By using object destructuring, we can get properties as variables in just one line.\

const user = {
    name: "Sam",
    email: "samEmail@gmail.com",
    country: "US",
};
 
// const name = user.name;
// const email = user.email;
// const country = user.country;
 
const { name: userName, email, country } = user;
 
console.log(userName, email, country);


Array .map method
In react, .map method is used to display elements in our web-page and It will always returns a new array. So here is the example for that. We have list of products and we want to display them on our web-page.

In map method, we have to pass callback function which runs for each item and we can get that each item value in first parameter.

Now whatever we return from our call back function, it will add in new array.

const products = ["Product1", "Product2", "Product3"];
 
const displayItems = products.map((product) => `<li>${product}</li>`);
 
console.log(displayItems); // Output: ["<li>Product1</li>", "<li>Product2</li>", "<li>Product3</li>"]


Array .filter method
Filter method is used to filter data from array and also it will return a new array.

In filter method we pass function as argument and in that function we have to pass condition. Now which element pass that condition only that element will added in the new array.

const ages = [5, 23, 14, 30, 21];
 
console.log(ages); // Output: [5, 23, 14, 30, 21]
 
const adults = ages.filter((age) => age >= 18);
 
console.log(adults); // Output: [23, 30, 21]


Spread operator (…)
Spread operator is used to get all items from array/object. Let’s see with example.

const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];
const arr3 = [5, 6];
 
const numbers = [...arr1, 5, 6, ...arr2];
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
In this example, we get all arr1 and arr2 items using spread operator and add them in our new array which is numbers array.

In simple words, …arr1 means we get 1, 2, 3, 4

We can also use this spread operator in objects for getting the objects values.



Ternary Operator
Ternary operator also known as conditional operator which is the shortcut way to write if else condition.

const marks = 30;
const result = marks > 35 ? "Pass" : "Fail";
 
console.log(result); // Output: "Fail"
 
//syntax - condition ? trueExpression : falseExpression


Modules
Module is a file that contains code to perform specific task. It can contain variables, objects, functions and so on.

Imagine we have 5 features in single file, then we can divide each feature in single file called as module and then use them where we need it.

Now to use function in other modules, we need to export that function from that module with export keyword.

// post.jsx
export function post() {
    console.log("This is post");
}
 
// feed.jsx
import { post } from "./post";
 
export function feed() {
    console.log("This is feed");
    post();
    post();
    post();
}
 
// main.jsx
import { feed } from "./feed";
 
feed();
Now we have another method to export function or variable from our module which is by using export default

Mostly, we will use export our main function of our module as default export. The difference is only in import statement.

**********************************************
**********************************************
**********************************************
CODE SNIPPETS 
type the following for components = rafce this generates the following code ->
 React from 'react'

const javascript-code-examples = () => {
  return (
    <div>
      
    </div>
  )
}

export default javascript-code-examples

****************************************
FOR LOOP example ->
A for loop is a statement that executes a block of code a set number of times. For loops are useful when you need to repeat a task a specific number of times.

for (let step = 0; step < 5; step++) {
  console.log("Walking east one step");
  }

Instead of writing:
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

You can write:
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
**************************************
ARROW FUNCTION
An arrow function in JavaScript is a more concise way to write function expressions. 
Introduced in ES6, arrow functions are especially useful for shorter functions and 
are often used with array methods like map, filter, and reduce.

Syntax:

(param1, param2, ...) => expression
Parentheses: Required if there are zero or multiple parameters, but optional if there's exactly one parameter.
Arrow (=>): Separates the parameter list from the function body.
Expression: If the body has a single expression, it implicitly returns the result. For multiple statements, you must use curly braces {} and an explicit return.

Examples:
1. Basic Arrow Function:
Equivalent to function expression:

// Traditional function
const add = function (a, b) {
  return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));        // Output: 5
console.log(addArrow(2, 3));   // Output: 5

2. Single Parameter (Parentheses Optional):
If the function takes a single parameter, you can omit the parentheses:

const square = x => x * x;

console.log(square(4)); // Output: 16

3. No Parameters (Parentheses Required):
If there are no parameters, use empty parentheses:

const greet = () => 'Hello, World!';

console.log(greet()); // Output: Hello, World!

4. Multiline Function Body:
For functions with multiple statements, use curly braces {} and return:

const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(3, 4)); // Output: 12

Key Characteristics:
1. Implicit Return:
If the function body contains a single expression, the result is returned implicitly without using the return keyword.

const double = x => x * 2;
console.log(double(5)); // Output: 10

2. Lexical this Binding:
Arrow functions do not have their own this. Instead, they inherit this from the surrounding scope. This makes them useful in situations where this can be ambiguous.

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function () {
  setTimeout(() => {
    console.log(`My name is ${this.name}`); // Arrow function inherits `this` from `sayName`
  }, 1000);
};

const john = new Person('John');
john.sayName(); // Output: My name is John
Note: In contrast, a traditional function would require bind(this) or saving this to a variable.

3. Cannot Be Used as Constructors:
Arrow functions cannot be used with new to create objects because they don’t have a this binding or a prototype.

const Foo = () => {};
const obj = new Foo(); // TypeError: Foo is not a constructor
When to Use Arrow Functions:
When you need concise and clean syntax.
When this binding needs to refer to the surrounding lexical scope.
For callbacks or methods like map, filter, reduce, etc.
When Not to Use Arrow Functions:
When defining methods in an object literal or class (use traditional function to preserve this binding).
When creating constructor functions.

****************************************
OBJECT LITERAL
In JavaScript, an object literal is a simple way to create an object using curly braces {}. 
It allows you to define properties (key-value pairs) and methods directly.

Syntax:

const objectName = {
  key1: value1,
  key2: value2,
  key3: function() {
    // Method logic
  }
};

Keys are the property names (can be strings, or symbols).
Values can be of any data type: strings, numbers, arrays, functions, or even other objects.

Example:

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'gaming', 'coding'],
  greet: function () {
    return `Hello, my name is ${this.firstName} ${this.lastName}.`;
  },
  isAdult: function () {
    return this.age >= 18;
  }
};

console.log(person.firstName); // Output: John
console.log(person.greet());   // Output: Hello, my name is John Doe.
console.log(person.isAdult()); // Output: true

Features:
1. Shorthand Property Names:
If the property name and the variable name are the same, you can use shorthand:

const firstName = 'Alice';
const lastName = 'Smith';

const user = { firstName, lastName };
console.log(user); // Output: { firstName: 'Alice', lastName: 'Smith' }

2. Computed Property Names:
You can use an expression inside square brackets [] to compute the property name dynamically:

const key = 'dynamicKey';
const obj = {
  [key]: 'This is a dynamic value',
};

console.log(obj.dynamicKey); // Output: This is a dynamic value

3. Method Definition Shorthand:
You can define methods without the function keyword:

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(2, 3));      // Output: 5
console.log(calculator.subtract(5, 3)); // Output: 2

4. Nested Objects:
Objects can have other objects as values:

const car = {
  brand: 'Tesla',
  model: 'Model 3',
  specifications: {
    range: '358 miles',
    topSpeed: '140 mph',
  }
};

console.log(car.specifications.range); // Output: 358 miles

Advantages of Object Literals:
Simple and concise: No need for a constructor or class to create objects.
Flexible: You can easily add, modify, or delete properties.
Modifying Object Properties:

const book = {
  title: 'JavaScript Basics',
  author: 'Jane Doe',
};

// Add a new property
book.year = 2021;

// Modify an existing property
book.author = 'John Doe';

// Delete a property
delete book.year;

console.log(book);
// Output: { title: 'JavaScript Basics', author: 'John Doe' }  

************************

------------ Functions ------------ START

In JavaScript, a function is a reusable block of code designed to perform a particular task. 
Functions allow you to structure your code, make it modular, and avoid repetition.

Defining a Function
There are several ways to define functions in JavaScript:

1. Function Declaration:
A traditional way to define a function. It can be called before its definition due to hoisting.


function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

*************

2. Function Expression:
A function assigned to a variable. It is not hoisted, so it must be defined before being used.


const greet = function (name) {
  return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!

*************
  
3. Arrow Function:
A concise way to write functions, introduced in ES6. It does not have its own this or arguments.


const greet = (name) => `Hello, ${name}!`;

console.log(greet('Charlie')); // Output: Hello, Charlie!

*************

4. Anonymous Function:
A function without a name. Often used as a callback.


setTimeout(function () {
  console.log('This is an anonymous function!');
}, 1000);

*************

5. IIFE (Immediately Invoked Function Expression):
A function that runs immediately after it is defined.


(function () {
  console.log('This function runs immediately!');
})();
Parameters and Arguments
Functions can take inputs (parameters) and return outputs. If a parameter is not provided, it is undefined by default.


function add(a, b = 0) {
  return a + b;
}

console.log(add(5, 10)); // Output: 15
console.log(add(5));     // Output: 5 (b defaults to 0)
Return Statement
The return statement specifies the value a function should return. If omitted, the function returns undefined.


function square(num) {
  return num * num;
}

console.log(square(4)); // Output: 16
Scope
Functions have their own local scope:

Variables defined inside a function are not accessible outside it.
Functions can access variables from the outer (global) scope.

const globalVar = 'Global';

function testScope() {
  const localVar = 'Local';
  console.log(globalVar); // Output: Global
  console.log(localVar);  // Output: Local
}

testScope();
console.log(localVar); // Error: localVar is not defined
Default Parameters
You can set default values for function parameters.


function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!
Rest Parameters
Use ... to accept a variable number of arguments as an array.


function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
Anonymous vs. Named Functions
Anonymous: A function without a name. Useful for callbacks.
Named: A function with a name, helpful for debugging.

const anonymous = function () {
  console.log('I am anonymous!');
};

function named() {
  console.log('I am named!');
}

*************

Callback Functions
A function passed as an argument to another function to be executed later.


function processUserInput(callback) {
  const name = 'Alice';
  callback(name);
}

processUserInput(function (name) {
  console.log(`Hello, ${name}!`);
});
// Output: Hello, Alice!

*************

Arrow Functions and this
Arrow functions do not bind their own this. Instead, they inherit this from the surrounding scope.


const person = {
  name: 'Bob',
  greet: function () {
    setTimeout(() => {
      console.log(`Hi, I’m ${this.name}`);
    }, 1000);
  },
};

person.greet(); // Output: Hi, I’m Bob
Summary
Functions in JavaScript are essential for:

Modularity: Breaking down code into smaller, reusable parts.
Encapsulation: Isolating logic in functions to improve clarity.
Flexibility: Handling inputs (parameters) and returning results.

------------ Functions ------------ END  
