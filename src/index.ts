let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("star");
let biggy: bigint = 24n;

let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

//Array
let array2: number[] = [1, 2, 3];

//Usage
array2 = [1];
array2 = [1, 2, 3, 4, 5];
array2 = ["hello"]; //Error

//Tuple
let tuple: [number, number] = [0, 0];

//Usage
tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error: must be 2 items
tuple = [5, 4, 3]; // Error: must be 2 items
tuple = ["elite", 1337]; // Error: must be number

/////////////

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

let unit: { x: number; y: number } = {
  x: 1,
  y: 1,
};

type Point = { x: number; y: number };

let objectExample: Point = {
  x: 2,
  y: 2,
};

const point: Point = { x: 0, y: 0 };

point = { x: 1, y: 1 }; // Error

// All other behaviours are the same as `let`
point.x = 123;
point.y = 456;

function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log("LOG:", message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2); // 3
sum(1, 2, 3); // 6

type Add = (a: number, b: number) => number;

let add2: Add;

add2 = function (a: number, b: number): number {
  return a + b;
};

add2 = (a, b) => a + b;

type User = { id: string };
type Product = { id: string };

let user: User = { id: "user-asfef23" };
let product: Product = { id: "product-fwefw575" };

user = product;
product = user;

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

/** Extra info ok */
point2D = point3D;
function takesPoint2D(point: Point2D) {
  /** ... */
}
takesPoint2D(point3D);

/** Error: missing info */
point3D = point2D;
function takesPoint3D(point: Point3D) {
  /** ... */
}
takesPoint3D(point2D);

class Animal {
  private name: string;
  protected nick: string;

  constructor(name: string, nick: string) {
    this.name = name;
    this.nick = nick;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} ${this.nick} moved ${distanceInMeters}`);
  }
}

let cat = new Animal("Cat", "Fluffy");
cat.move(10);
cat.name = "Dog";
cat.nick = "Puppy";

class Bird extends Animal {
  fly(distanceInMeters: number) {
    console.log(`${this.name} ${this.nick} flew ${distanceInMeters}`);
  }
}

/** A FIFO (First In First Out) collection */
class Queue2<T> {
  data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}

const queue2 = new Queue2<number>();
queue2.push(123);
queue2.push("Hello world");

console.log(queue2.pop().toPrecision(1));
console.log(queue2.pop().toPrecision(1));

let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = "Hello";

// unknown
exampleUnknown = 123;
exampleUnknown = "Hello";

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}
if (typeof exampleUnknown == "boolean") {
  let unknownSetBool: boolean = exampleUnknown;
}

let someLegacyVariable1: any;
let someLegacyVariable2: unknown;

someLegacyVariable1 = toString();
console.log(someLegacyVariable1.trim());

someLegacyVariable2 = toString();
if (typeof someLegacyVariable2 == "string") {
  console.log(someLegacyVariable2.trim());
}

function log2(value: any) {
  console.log(value.toFixed(2));
}

log2(123.1223);
log2("Hello");

function log3(value: unknown) {
  if (typeof value == "number") {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}

log3(123.1223);
log3("Hello");

let hello2 = load();

if (typeof hello2 === "string") {
  const trimmed = hello.trim();
}
const trimmed2 = (hello2 as string).trim();
const trimmed3 = (<string>hello).trim(); // Doesn't work in .tsx files

let leet;

// Later
leet = "1337";

// Use as number
const number = +leet;

console.log(number === 1337); // true
console.log(number); // '1337'

/**
 * @returns true if the input string is a palindrome
 */
export function isPalindrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("madan")); // false

console.log("Logged in user:", process.env.USER);

import fs from "fs";
fs.writeFileSync("hello.txt", "Hello world");

import express from "express";
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.listen(3000, () => {
  console.log("Server started");
});

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const mainAsync = async () => {
  await delay(1000);
  console.log("1s");
  await delay(1000);
  console.log("2s");
  await delay(1000);
  console.log("3s");
};

mainAsync();
