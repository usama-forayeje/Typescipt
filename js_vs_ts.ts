// Welcome to TypeScript Tutorial for Beginners
// ============================================

// What is TypeScript?
// --------------------
// TypeScript is a programming language built on JavaScript that adds static typing.
// This means you can catch errors while writing code, making your programs safer and easier to debug.

// Comparing TypeScript with JavaScript:
// -------------------------------------
// JavaScript Example:
let jsAge = 25; // No type information
let jsUsername = "John"; // Can change to a number later (no type safety)
jsUsername = 42; // Allowed in JavaScript
console.log(`Age: ${jsAge}, Username: ${jsUsername}`);

// TypeScript Example:
let tsAge: number = 25; // Type is strictly number
let tsUsername: string = "John"; // Type is strictly string
// tsUsername = 42; // Error: Type 'number' is not assignable to type 'string'
console.log(`Age: ${tsAge}, Username: ${tsUsername}`);

// Getting Started with TypeScript
// --------------------------------
// Step 1: Install Node.js if not installed.
// Step 2: Install TypeScript globally by running:
// npm install -g typescript

// How to Run TypeScript Code
// ---------------------------
// Save your TypeScript code in a file with the `.ts` extension.
// Compile the file to JavaScript using:
// tsc filename.ts
// Run the resulting JavaScript file using:
// node filename.js

// 1. Basic Types
// ---------------
// JavaScript Example:
let jsValue = "hello"; // Can change to a number or boolean later
jsValue = 42; // No error
console.log("Value:", jsValue);

// TypeScript Example:
let tsValue: string = "hello"; // Strictly string
// tsValue = 42; // Error: Type 'number' is not assignable to type 'string'
console.log("Value:", tsValue);

// 2. Arrays and Tuples
// --------------------
// JavaScript Arrays:
let jsNumbers = [1, "two", 3]; // Can hold mixed types
console.log("Numbers:", jsNumbers);

// TypeScript Arrays:
let tsNumbers: number[] = [1, 2, 3]; // Only numbers allowed
console.log("Numbers:", tsNumbers);

// TypeScript Tuples:
let tsUserInfo: [string, number] = ["Alice", 30];
console.log(`Name: ${tsUserInfo[0]}, Age: ${tsUserInfo[1]}`);

// 3. Enums
// --------
// JavaScript Equivalent:
const JSRole = {
  Admin: 0,
  User: 1,
  Guest: 2,
};
let jsUserRole = JSRole.User;
console.log(`User Role: ${jsUserRole}`);

// TypeScript Enum:
enum Role {
  Admin,
  User,
  Guest,
}
let tsUserRole: Role = Role.User;
console.log(`User Role: ${Role[tsUserRole]}`);

// 4. Functions
// ------------
// JavaScript Example:
function jsAdd(a, b) {
  return a + b; // No type checking
}
console.log(`Sum of 5 and 10: ${jsAdd(5, 10)}`);

// TypeScript Example:
function tsAdd(a: number, b: number): number {
  return a + b; // Strictly checks parameter and return types
}
console.log(`Sum of 5 and 10: ${tsAdd(5, 10)}`);

// 5. Objects
// ----------
// JavaScript Object:
let jsUser = {
  name: "Charlie",
  age: 22,
  isStudent: true,
};
console.log("User Info:", jsUser);

// TypeScript Object:
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};
let tsUser: User = {
  name: "Charlie",
  age: 22,
  isStudent: true,
};
console.log("User Info:", tsUser);

// 6. Union and Intersection Types
// --------------------------------
// JavaScript Equivalent:
function jsPrintId(id) {
  console.log(`ID: ${id}`);
}
jsPrintId(123);
jsPrintId("ABC123");

// TypeScript Union:
function tsPrintId(id: number | string): void {
  console.log(`ID: ${id}`);
}
tsPrintId(123);
tsPrintId("ABC123");

// 7. Generics
// -----------
// JavaScript Example:
function jsIdentity(value) {
  return value; // No type checking
}
console.log("String Identity:", jsIdentity("Hello"));
console.log("Number Identity:", jsIdentity(42));

// TypeScript Generics:
function tsIdentity<T>(value: T): T {
  return value;
}
console.log("String Identity:", tsIdentity<string>("Hello"));
console.log("Number Identity:", tsIdentity<number>(42));

// Congratulations!
// -----------------
// You have learned the basics of TypeScript with comparisons to JavaScript. This tutorial was created by Usama Forayaje to help you take your skills to the next level. Happy coding!
