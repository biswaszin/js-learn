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
    this.#title = title;
    this.rating = rating;
  }
}

const movie1 = new Movie("Cyberpunk", 9.8);
console.log(movie1);
movie1.rating = 9.2;
console.log(movie1.rating);
