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
  constructor(title, rating) {
    this.#title = title; // Making sure the title is private.
    this.rating = rating;
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
}

const movie1 = new Movie("Cyberpunk", 9.8);
console.log(`Movie Name: ${movie1.title}, Rating: ${movie1.rating}`);
console.log(movie1.titleCaps);
console.log(movie1.allTitleCaps());
console.log(movie1.title);
