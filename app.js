let increaseButton = document.getElementById("increase");
let decreaseButton = document.getElementById("decrease");
let batteryLevel = document.getElementById("batteryLevel");
let charge = document.getElementById("charge");
let counter = 0;

increaseButton.addEventListener("click", increaseBattery);
decreaseButton.addEventListener("click", decreaseBattery);