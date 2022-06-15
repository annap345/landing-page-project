function contactButton() {
  let name = prompt("Enter your name:");
  let email = prompt("Enter your email:");
  alert("Thanks! We will get in touch with you soon🥰");
}

let button = document.querySelector("button");
button.addEventListener("click", contactButton);
