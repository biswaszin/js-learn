function landscape() {
  result = "";

  function flat(size) {
    for (let count = 0; count < size; count++) {
      result += "_";
    }
  }

  function mountain(size) {
    result += "/";

    for (let count = 0; count < size; count++) {
      result += "'";
    }

    result += "\\";
  }

  flat(6);
  mountain(4);
  flat(3);
  mountain(8);

  return result;
}

console.log(landscape());
