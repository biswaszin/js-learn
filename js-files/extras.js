// maps
// like dictionaries, key value pairs
// except can only hold unique keys

const map = new Map();
map.set("bertholdt", "shifter");
map.set("reiner", "warrior");
map.set("annie", "shifter");
map.set("bertholdt", "colossal titan");

console.log(map);

// PROMISES / ASYNC / AWAIT

function placeOrder(pizza) {
  return new Promise((resolve, reject) => {
    console.log(`Placing Order for ${pizza}`);

    setTimeout(() => {
      if (pizza === "Margherita") {
        resolve("Order Confirmed! ETA 30min"); // Success
      } else {
        reject("Sorry, we only have Margherita"); // Failure
      }
    }, 1500);
  });
}
