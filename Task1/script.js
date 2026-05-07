// Question 1
var a = 10;
a = 15;
console.log(a); // 15

// Question 2
// let b = 20;
// let b = 30;

// Error because let cannot be redeclared

// Question 3
const c = 50;
console.log(c); // 50

// Question 4
// const x = 10;
// x = 20;

// Error because const value cannot be changed

// Question 5
var p = 5;
var p = 10;
console.log(p); // 10

// Question 6
let q = 25;
q = q + 10;
console.log(q); // 35

// Question 7
const r = 7;
console.log(r + 3); // 10

// Question 8
let aa = 10;
console.log(aa);

// Question 9
console.log("This is normal output");

// Question 10
console.warn("This is warning message");

// Question 11
console.error("This is error message");

// Question 12
console.clear();

// It clears console

// Question 13
let a1 = "hello";
console.log(typeof a1); // string

// Question 14
let b1 = 100;
console.log(typeof b1); // number

// Question 15
let c1 = false;
console.log(typeof c1); // boolean

// Question 16
let d1;
console.log(d1); // undefined

// Question 17
console.log(typeof null); // object

// Question 18
console.log(Number("25")); // 25

// Question 19
let fruits = ["apple", "banana", "orange"];
console.log(fruits);

// Question 20
let arr1 = ["a", "b", "c"];
console.log(arr1[1]); // b

// Question 21
let arr2 = ["x", "y", "z"];
console.log(arr2[arr2.length - 1]); // z

// Question 22
console.log(arr2[0]); // x

// Question 23
let arr3 = ["apple", "banana"];
console.log(arr3.length); // 2

// Question 24
arr3.push("orange");
console.log(arr3);

// Question 25
let obj1 = {
  name: "Naveen",
  age: 25
};

console.log(obj1);

// Question 26
let obj2 = {
  name: "Naveen"
};

console.log(obj2.name); // Naveen

// Question 27
let obj3 = {
  fruits: ["apple", "banana"]
};

console.log(obj3.fruits[1]); // banana

// Question 28
console.log(obj3.fruits[obj3.fruits.length - 1]); // banana

// Question 29
console.log(5 + 3); // 8

// Question 30
console.log(10 % 3); // 1

// Question 31
console.log(2 ** 3); // 8

// Question 32
console.log(10 / 2); // 5

// Question 33
let inc = 5;
inc++;
console.log(inc); // 6

// Question 34
let b2 = 5;
let c2 = b2++;
console.log(b2, c2); // 6 5

// Question 35
let x1 = 5;
let y1 = ++x1;
console.log(x1, y1); // 6 6

// Question 36
let m1 = 3;
let n1 = m1--;
console.log(m1, n1); // 2 3

// Question 37
console.log(5 == "5"); // true

// Question 38
console.log(5 === "5"); // false

// Question 39
console.log(true && false || true); // true

// Question 40
5 > 3
  ? console.log("Yes")
  : console.log("No");