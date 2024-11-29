// TypeScript Advanced Tutorial for Developers
// ============================================

// 1. Type Guards
// --------------
// Type Guards help narrow down types using runtime checks.

function isString(value: unknown): value is string {
    return typeof value === "string";
  }
  
  function printValue(value: number | string) {
    if (isString(value)) {
      console.log(`String Value: ${value.toUpperCase()}`);
    } else {
      console.log(`Number Value: ${value * 2}`);
    }
  }
  printValue("Hello");
  printValue(10);
  
  // 2. Advanced Generics
  // ---------------------
  // Generics with constraints make functions more robust.
  
  interface Lengthwise {
    length: number;
  }
  
  function logWithLength<T extends Lengthwise>(item: T): void {
    console.log(`Length: ${item.length}`);
  }
  logWithLength("TypeScript");
  logWithLength([1, 2, 3]);
  // logWithLength(123); // Error: Argument does not have a length property.
  
  // 3. Conditional Types
  // ---------------------
  // Conditional Types allow more dynamic type resolutions.
  
  type IsString<T> = T extends string ? true : false;
  
  let stringCheck: IsString<string> = true; // true
  let numberCheck: IsString<number> = false; // false
  
  // 4. Utility Types
  // -----------------
  // TypeScript provides built-in utility types to simplify type operations.
  
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Partial: Makes all properties optional.
  type PartialUser = Partial<User>;
  let userUpdate: PartialUser = { name: "Alice" };
  
  // Readonly: Makes all properties read-only.
  type ReadonlyUser = Readonly<User>;
  const newUser: ReadonlyUser = { id: 1, name: "Bob", email: "bob@example.com" };
  // newUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
  
  // 5. Decorators
  // -------------
  // Decorators are a powerful feature for meta-programming (used in classes).
  
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
  
  // 6. Mapped Types
  // ----------------
  // Mapped Types allow transformations of types.
  
  type Optional<T> = {
    [P in keyof T]?: T[P];
  };
  
  type RequiredUser = Required<User>;
  
  // 7. Intersection and Union Types
  // --------------------------------
  // Combining multiple types dynamically.
  
  type Admin = {
    role: string;
  };
  
  type AdminUser = User & Admin;
  let admin: AdminUser = { id: 1, name: "Charlie", email: "charlie@example.com", role: "Admin" };
  
  // Union Types with Discriminated Unions
  interface Circle {
    kind: "circle";
    radius: number;
  }
  
  interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
  }
  
  type Shape = Circle | Rectangle;
  
  function calculateArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "rectangle":
        return shape.width * shape.height;
    }
  }
  console.log(calculateArea({ kind: "circle", radius: 5 }));
  
  // 8. Advanced Classes
  // --------------------
  // Abstract Classes and Access Modifiers
  
  abstract class Animal {
    constructor(public name: string) {}
  
    abstract makeSound(): void;
  
    move(): void {
      console.log(`${this.name} is moving.`);
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log(`${this.name} barks.`);
    }
  }
  
  const dog = new Dog("Buddy");
  dog.makeSound();
  dog.move();
  
  // 9. Module Augmentation
  // -----------------------
  // Extend existing modules or types.
  
//   declare module "./math" {
//     export function divide(a: number, b: number): number;
//   }
  
  // 10. Advanced Function Types
  // ---------------------------
  // Overloads in functions.
  
  function combine(a: string, b: string): string;
  function combine(a: number, b: number): number;
  function combine(a: any, b: any): any {
    return a + b;
  }
  
  console.log(combine("Hello, ", "World!"));
  console.log(combine(5, 10));
  
  // Congratulations!
  // -----------------
  // You've explored advanced TypeScript concepts. Dive deeper and build amazing applications!
  // This tutorial is brought to you by Usama Forayaje. Happy coding!
  