// A shared template for all the movies.
// Containing just the methods.

const movieMethods = {
  describe() {
    return `${this.title} (${this.rating})`;
  },
  isTopRated() {
    return this.rating >= 9.0;
  },
};

// Factory function - manually links the protoype

const creatMovie = (title, rating) => {
  const movie = Object.create(movieMethods); // Setting up the prototype
  movie.title = title;
  movie.rating = rating;

  return movie;
};

const m1 = creatMovie("Inception", 9.0);
const m2 = creatMovie("Obsession", 8.9);

m1.describe();
m2.isTopRated();

// Instead of all these bs, we can apply Class.
// Class is not a new system. It's just a cleaner syntax over constructor fn + prototype

class Movie {
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }

  // these go on Movie.prototype automatically, the methods ie
  describe() {
    return `Title: ${this.title}, Rating: ${this.rating}`;
  }

  isTopRated() {
    return this.rating >= 9.0;
  }
}

// So the template for our objects is ready.

const m3 = new Movie("Fred Again..", 9.9);
const m4 = new Movie("NEOVIM", 9.8);

console.log(m3.describe());

// one level deeper - Inheritance

class StreamingMovie extends Movie {
  constructor(title, rating, platform) {
    super(title, rating);
    this.platform = platform;
  }

  whereToWatch() {
    return `To Watch: ${this.title}, Visit: ${this.platform}`;
  }
}

const m5 = new StreamingMovie("Shashank Redemption", 9.9, "Netflix");
console.log(m5.whereToWatch());
