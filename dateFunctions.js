let now = new Date();
let date = now.toLocaleDateString("en-NZ");
document.getElementById("headingOne").innerHTML =
  "Swim Program for " + date;