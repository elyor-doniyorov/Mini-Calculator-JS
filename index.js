// Define numbers
let num1 = 12;
let num2 = 8;
// Getting elements using Dom manipulation
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");
let showEntries = document.getElementById("showEntries");

// Create add(),subtract(),divide(),multiply() functions
function add() {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;
}

function subtract() {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function divide() {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply() {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}
