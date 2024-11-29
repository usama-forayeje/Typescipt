// TypeScript Comprehensive Tutorial for All Levels
// ================================================

// Introduction to TypeScript Basics
// ----------------------------------
// TypeScript is a superset of JavaScript that adds static typing, making it easier to catch errors and write robust applications.

// 1. Basic Types
// ---------------
let age: number = 25;
let username: string = "Alice";
let isActive: boolean = true;
console.log(`Age: ${age}, Username: ${username}, Active: ${isActive}`);

// Arrays store multiple values of the same type.
let numbers: number[] = [1, 2, 3];
console.log("Numbers:", numbers);

// Tuples store multiple values of different types in a specific order.
let userInfo: [string, number] = ["Alice", 30];
console.log(`Name: ${userInfo[0]}, Age: ${userInfo[1]}`);

// 2. Enums
// --------
enum Role {
  Admin,
  User,
  Guest,
}
let userRole: Role = Role.User;
console.log(`User Role: ${Role[userRole]}`);

// 3. Functions
// ------------
function add(a: number, b: number): number {
  return a + b;
}
console.log(`Sum: ${add(5, 10)}`);

// Optional and Default Parameters
function greet(name: string, age: number = 18): string {
  return `Hello ${name}, you are ${age} years old!`;
}
console.log(greet("Bob"));

// 4. Objects
// ----------
type User = {
  name: string;
  age: number;
  isStudent: boolean;
};
let user: User = { name: "Charlie", age: 22, isStudent: true };
console.log("User Info:", user);

// 5. Union and Intersection Types
// --------------------------------
function printId(id: number | string): void {
  console.log(`ID: ${id}`);
}
printId(123);
printId("ABC123");

// Combining multiple types into one.
type Employee = { empId: number; department: string };
type Staff = Employee & User;
let staffMember: Staff = {
  empId: 101,
  department: "HR",
  name: "Diana",
  age: 28,
  isStudent: false,
};
console.log("Staff Info:", staffMember);

// Introduction to Advanced Concepts
// ----------------------------------

// 6. Generics
// -----------
function identity<T>(value: T): T {
  return value;
}
console.log("String Identity:", identity<string>("Hello"));
console.log("Number Identity:", identity<number>(42));

// 7. Classes and Interfaces
// --------------------------
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

// 8. Utility Types
// ----------------
interface Product {
  id: number;
  name: string;
  price?: number; // Optional property
}
const product: Product = { id: 1, name: "Tablet" };
console.log("Product Info:", product);

// 9. Advanced Generics
// ---------------------
interface Lengthwise {
  length: number;
}
function logWithLength<T extends Lengthwise>(item: T): void {
  console.log(`Length: ${item.length}`);
}
logWithLength("TypeScript");
logWithLength([1, 2, 3]);

// 10. Decorators
// --------------
function Logger(target: any, propertyKey: string) {
  console.log(`Property: ${propertyKey} was accessed.`);
}

class Person {
  @Logger
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
const person = new Person("John");
console.log(person.name);


// Congratulations!
// -----------------
// You have learned the basics of TypeScript. Practice more to master it.
// This tutorial was created by Usama Forayaje to help you take your skills to the next level.
// Happy coding!
