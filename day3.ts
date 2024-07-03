// Type Annotations

// String
let firstName: string = "John";
console.log(firstName);

// Number
let age: number = 30;
console.log(age);

// Boolean
let isStudent: boolean = true;
console.log(isStudent);

// Array
let hobbies: string[] = ["Reading", "Gaming", "Coding"];
console.log(hobbies);

// Tuple
let person: [string, number, boolean] = ["Alice", 25, false];
console.log(person);

// Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor);

// Any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

// Void
function sayHello(): void {
    console.log("Hello, World!");
}
sayHello();

// Null and Undefined
let u: undefined = undefined;
let n: null = null;
console.log(u);
console.log(n);
