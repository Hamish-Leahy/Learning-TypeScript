# Learning TypeScript

This repository documents my journey of learning TypeScript to enhance my development skills. It includes notes, code samples, and projects as I explore TypeScript's features and best practices.

## Learning Plan

### Week 1: Introduction and Basics
- **Day 1-2**: Set up TypeScript environment
  - Install Node.js and npm
  - Install TypeScript using npm
  - Verify the installation
- **Day 3-5**: Basic TypeScript Syntax
  - Type annotations
  - Basic types (string, number, boolean, array, tuple, enum, any, void, null, undefined)
  - Type inference

### Week 2: Functions and Interfaces
- **Day 1-3**: Functions
  - Function types
  - Optional and default parameters
  - Rest parameters
- **Day 4-5**: Interfaces
  - Defining interfaces
  - Optional properties
  - Readonly properties

### Week 3: Classes and Modules
- **Day 1-3**: Classes
  - Class basics
  - Inheritance
  - Access modifiers
- **Day 4-5**: Modules
  - Importing and exporting modules
  - Namespaces

### Week 4: Advanced Types and Generics
- **Day 1-2**: Advanced Types
  - Union types
  - Intersection types
  - Type aliases
- **Day 3-5**: Generics
  - Generic functions
  - Generic classes
  - Generic constraints

### Week 5: Practical Projects and Testing
- **Day 1-3**: Small Projects
  - Build small projects to apply what you've learned
  - Example: To-do list application, simple API integration
- **Day 4-5**: Testing
  - Set up testing environment
  - Write tests for your TypeScript code using popular frameworks like Jest

## TypeScript Cheat Sheet

### Basic Types
- `string`, `number`, `boolean`, `null`, `undefined`, `any`, `void`, `never`

### Type Annotations
```typescript
let message: string = "Hello, TypeScript";
let count: number = 10;
let isActive: boolean = true;
```

### Arrays and Tuples
```typescript
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 42];
```

### Functions
```typescript
function greet(name: string): string {
    return `Hello, ${name}`;
}

function add(a: number, b: number): number {
    return a + b;
}
```

### Interfaces
```typescript
interface Person {
    name: string;
    age: number;
    isStudent?: boolean; // optional property
}

let user: Person = {
    name: "John",
    age: 25
};
```

### Classes
```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters`);
    }
}

let dog = new Animal("Dog");
dog.move(10);
```

### Modules
```typescript
// module.ts
export const PI = 3.14;
export function calculateArea(radius: number): number {
    return PI * radius * radius;
}

// main.ts
import { PI, calculateArea } from './module';

console.log(PI);
console.log(calculateArea(5));
```

### Generics
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let output2 = identity<number>(100);
```

### Union and Intersection Types
```typescript
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

let ball: ColorfulCircle = {
    color: "red",
    radius: 10
};
```

### Type Aliases
```typescript
type Point = {
    x: number;
    y: number;
};

let point: Point = { x: 10, y: 20 };
```

## Resources
- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

Follow along as I continue to learn and share my progress with TypeScript!
