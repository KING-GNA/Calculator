function clearDisplay(){
    document.getElementById("display").value = "";
}

numbers = [0,1,2,3,4,5,6,7,8,9];

// Function to clear the display
function clearDisplay(){
    document.getElementById("display").value = "";
}

// Array of numbers
numbers = [0,1,2,3,4,5,6,7,8,9];

// Function to update the display when a number is clicked
function updateDisplay(number) {
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue + number;
}

// Function to perform calculations when an operator is clicked
function performCalculation(operator) {
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue + operator;
}

// Function to calculate the result when the "=" button is clicked
function calculateResult() {
    var currentValue = document.getElementById("display").value;
    var result = eval(currentValue);
    document.getElementById("display").value = result;
}


// Function to toggle plus-minus sign
function togglePlusMinus() {
    var currentValue = document.getElementById("display").value;
    if (currentValue !== "") {
        if (currentValue.indexOf("-") === 0) {
            document.getElementById("display").value = currentValue.slice(1);
        } else {
            document.getElementById("display").value = "-" + currentValue;
        }
    }
}

// Add event listeners to the number buttons
for (var i = 0; i < numbers.length; i++) {
    document.getElementById("num" + numbers[i]).addEventListener("click", function() {
        updateDisplay(this.textContent);
    });
}

function del(){
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

// Add event listeners to the operator buttons
document.getElementById("add").addEventListener("click", function() {
    performCalculation("+");
});
document.getElementById("subtract").addEventListener("click", function() {
    performCalculation("-");
});
document.getElementById("multiply").addEventListener("click", function() {
    performCalculation("*");
});
document.getElementById("divide").addEventListener("click", function() {
    performCalculation("/");
});

document.getElementById("percent").addEventListener("click", function() {
    performCalculation("%");
});

// Add event listener to the "=" button
document.getElementById("equals").addEventListener("click", calculateResult);

// Add event listener to the "Clear" button
document.getElementById("clear").addEventListener("click", clearDisplay);

// Add event listener to the comma button
document.getElementById("comma").addEventListener("click", addComma);

// Add event listener to the plus-minus button
document.getElementById("plus-minus").addEventListener("click", togglePlusMinus);