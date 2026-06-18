let x = 0;

while (x < 3) {
  console.log(x);
  x++;
}

function add(a, b) {
  return a + b;
}

let sum = add(5, 8);
console.log(sum);

let personName = prompt("What's your name? ");

function greet(name) {
  alert(`Hey there! Welcome ${name}`);
}

greet(personName);

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);

// PUSH() :adds an elem to the end of the array
// POP() :removes the last elem
// SHIFT() :removes the first elem of the array
// UNSHIFT() :adds an elem in the beginning of the array
// SLICE() :extracts a portion of the array
// forEach() :executes a function once for each element in the array
