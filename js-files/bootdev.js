const person = {
  firstName: "Ankit",
  lastName: "Biswas",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

const myObject = {
  message: "Hello, World!",
  myMethod() {
    console.log(this);
    console.log(this.message);
  },
};

// Arrow Function

const add = (x, y) => {
  return x + y;
};

const isSpamMessage = (message) => {
  return true;
};

console.log(add(2, 4));
console.log(person.getFullName());

function doAllTheMath(x, y) {
  const sum = x + y;
  const difference = x - y;
  const multiply = x * y;
  const quotient = x / y;

  return {
    sum,
    difference,
    multiply,
    quotient,
  };
}

const results = doAllTheMath(10, 5);
console.log(doAllTheMath(10, 5).sum);
console.log(results.difference);

const human = {
  name: "Biswaszin",
  gender: "Cat",

  introduceYourself() {
    return `I'm ${this.name}! and I'm a ${gender}!`;
  },
};

const { name, gender } = human;
console.log(name);
console.log(human.introduceYourself());
const introductionHuman = human.introduceYourself.bind(human);
console.log(introductionHuman());
