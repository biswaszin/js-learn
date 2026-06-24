// class which has public properties

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Zin", 100);

// class which will have private property with #

class Movie {
  #title;

  static movieCounter = 0;
  constructor(title, rating) {
    this.#title = title; // Making sure the title is private.
    this.rating = rating;
    Movie.movieCounter++;
  }

  // since, our title is a read only (cuz we cannot change it)
  // to output it, we need a getter. so let's set it?
  get titleCaps() {
    const allCaps = this.#title.toUpperCase();
    return allCaps;
  }

  // this upper method acts like a property. let's make a function now for the same thin
  allTitleCaps() {
    const allCaps = this.#title.toUpperCase();
    return allCaps;
  }

  get title() {
    return this.#title;
  }

  static getMovieCounter() {
    return Movie.movieCounter;
  }
}

const movie1 = new Movie("Cyberpunk", 9.8);
const movie2 = new Movie("Obsession", 9.9);

console.log(movie1.title);
console.log(movie2.title);
console.log(`Movie Counter: ${Movie.getMovieCounter()}`);

class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }

  formatMessage(message) {
    return `To: ${this.recipient}, Message: ${message}`;
  }
}

class SMSSender extends Sender {
  formatMessage(message) {
    return `${super.formatMessage(message)} [SMS]`;
  }
}
