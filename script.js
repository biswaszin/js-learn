let userName = prompt("What's your name?");
let phoneNumber = prompt("Enter your phone number: ");
let userAvatar = prompt("Choose your avatar: ");

function createContact(
  phoneNumber,
  name = "Anonymous",
  avatar = "default.jpg",
) {
  if (phoneNumber.length < 10) {
    phoneNumber = "Invalid Phone Number";
  }

  const filepath = "/public/pictures/" + avatar;
  return `Contact Saved! Name: ${name}, Phone Number: ${phoneNumber}, Avatar: ${filepath}`;
}

let contactSaved = createContact(phoneNumber, userName, userAvatar);

console.log(contactSaved);
