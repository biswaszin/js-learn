const err = new Error("We've run out of baked salmons!");
console.log(err.message);

try {
  console.log("try this code");
} catch {
  console.log("if that didn't run, show this instead");
}
