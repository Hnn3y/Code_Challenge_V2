const display = document.getElementById("display");
const buttons = document.querySelectorAll("button"); 

let currentInput = "";
let previousInput = ""; 
let operator = ""; 

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent; 

        if (button.id === "clear") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
            return;
        }

        if (button.id === "equal") {
            if (previousInput && currentInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator); 
                display.value = currentInput; 
                previousInput = ""; 
                operator = ""; 
            }
            return;
        }

        if (button.dataset.op) {
            if (currentInput) {
                operator = button.dataset.op; 
                previousInput = currentInput; 
                currentInput = ""; 
            }
            return;
        }

        currentInput += value; 
        display.value = currentInput; 
    });
});

function calculate(num1, num2, operator) {
    const a = parseFloat(num1); 
    const b = parseFloat(num2);

    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return b === 0 ? "Error" : a / b; 
    return num2; 
}
