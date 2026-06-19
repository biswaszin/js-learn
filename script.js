let askEmail = prompt("What's your email address?");
let name = prompt("Could you mention your name too?");

let userEmail = askEmail;
let userName = name;

function getGreeting(email, name = "there") {
  console.log(`Hello ${name}, welcome! You've registered your email: ${email}`);
}

getGreeting(userEmail, userName);
