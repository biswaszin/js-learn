// Trynna understand the event loop more
// PROMISES

function checkUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "biswas") {
        reject("Username has already been taken!");
      } else {
        resolve("Username is available!");
      }
    }, 3000);
  });
}

checkUsername("biswaszin")
  .then((message) => {
    console.log("✅", message);
  })
  .catch((reason) => {
    console.error("❌", reason);
  })
  .finally(() => {
    console.log("Check complete");
  });
