let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

// Function to append number to display
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to append decimal point to display
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Function to append operator to input
function appendOperator(op) {
    if (currentInput === '') return; // Don't append operator if there's no number
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to calculate the result
function calculateResult() {
    if (previousInput === '' || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case'%':
            result = prev % current;
            break;
        case '/':
            if (current === 0) {
                alert("Error: Division by zero");
                clearDisplay();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Update the display with current input
function updateDisplay() {
    display.value = currentInput;
}
function calculateSquareRoot() {
    if (currentInput === '') return;
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateDisplay();
}
