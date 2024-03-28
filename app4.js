const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day, Hooman";
} else {
  greeting = "Good evening, Hooman";
}

document.getElementById("Sirin").innerHTML = greeting;
