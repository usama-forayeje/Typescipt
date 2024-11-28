// Welcome to TypeScript Tutorial for Beginners
// ============================================

// What is TypeScript?
// --------------------
// TypeScript is a programming language built on JavaScript that adds static typing.
// This means you can catch errors while writing code, making your programs safer and easier to debug.

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
// Use types to define the kind of values a variable can hold.
let age: number = 25; // A number type variable
let username: string = "John"; // A string type variable
let isActive: boolean = true; // A boolean type variable

console.log(`Age: ${age}, Username: ${username}, Active: ${isActive}`);

// 2. Arrays and Tuples
// --------------------
// Arrays store multiple values of the same type.
let numbers: number[] = [1, 2, 3];
console.log("Numbers:", numbers);

// Tuples store multiple values of different types in a specific order.
let userInfo: [string, number] = ["Alice", 30];
console.log(`Name: ${userInfo[0]}, Age: ${userInfo[1]}`);

// 3. Enums
// --------
// Enums allow you to define a set of named constants.
enum Role {
  Admin,
  User,
  Guest,
}

let userRole: Role = Role.User;
console.log(`User Role: ${Role[userRole]}`);

// 4. Functions
// ------------
// Functions can have typed parameters and return values.
function add(a: number, b: number): number {
  return a + b;
}
console.log(`Sum of 5 and 10: ${add(5, 10)}`);

// Optional and Default Parameters
function greet(name: string, age: number = 18): string {
  return `Hello ${name}, you are ${age} years old!`;
}
console.log(greet("Bob"));

// 5. Objects
// ----------
// Objects can have a defined structure using types.
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};

let user: User = {
  name: "Charlie",
  age: 22,
  isStudent: true,
};
console.log("User Info:", user);

// 6. Union and Intersection Types
// --------------------------------
// Union Type allows a variable to hold values of different types.
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}
printId(123);
printId("ABC123");

// Intersection Type combines multiple types into one.
type Employee = {
  empId: number;
  department: string;
};

type Person = {
  name: string;
  age: number;
};

type Staff = Employee & Person;
let staffMember: Staff = {
  empId: 101,
  department: "HR",
  name: "Diana",
  age: 28,
};
console.log("Staff Info:", staffMember);

// 7. Generics
// -----------
// Generics make functions flexible and reusable.
function identity<T>(value: T): T {
  return value;
}
console.log("String Identity:", identity<string>("Hello"));
console.log("Number Identity:", identity<number>(42));

// 8. Classes
// ----------
// Classes define blueprints for objects.
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

const cat = new Animal("Cat");
cat.makeSound();

// 9. Interfaces
// -------------
// Interfaces are similar to types and define object structures.
interface Vehicle {
  brand: string;
  speed: number;
  drive(): void;
}

const bike: Vehicle = {
  brand: "Yamaha",
  speed: 80,
  drive() {
    console.log(`Driving a ${this.brand} at ${this.speed} km/h.`);
  },
};

bike.drive();

// 10. Advanced Topics
// --------------------
// Readonly and Optional Properties
type Product = {
  readonly id: number;
  name: string;
  price?: number; // Optional property
};

const product: Product = { id: 1, name: "Tablet" };
console.log("Product Info:", product);

// product.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// 11. Modules
// -----------
// Export and Import example.
export function multiply(a: number, b: number): number {
  return a * b;
}

// Import example (in another file):
// import { multiply } from './filename';
// console.log(multiply(2, 3));

// Congratulations!
// -----------------
// You have learned the basics of TypeScript. Practice more to master it.
// This tutorial was created by Usama Forayaje to help you take your skills to the next level.
// Happy coding!
