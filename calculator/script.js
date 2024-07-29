// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let operator = '';
    let operand1 = '';
    let operand2 = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operand1 = '';
                operand2 = '';
                operator = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (operator && operand1) {
                    operand2 = currentInput;
                    try {
                        const result = eval(`${operand1} ${operator} ${operand2}`);
                        display.textContent = result;
                        currentInput = result;
                        operand1 = '';
                        operand2 = '';
                        operator = '';
                    } catch (e) {
                        display.textContent = 'Error';
                    }
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                operand1 = currentInput;
                operator = value;
                currentInput = '';
                display.textContent = `${operand1} ${operator}`;
            } else {
                currentInput += value;
                display.textContent = `${operand1} ${operator} ${currentInput}`;
            }
        });
    });
});
