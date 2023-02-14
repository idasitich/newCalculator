const number = document.querySelectorAll('.yellow');
const operatorButton = document.querySelectorAll('.purple');
const equals = document.getElementById('equals');
const ac = document.getElementById('ac');
const bs = document.getElementById('bs');
const screen = document.getElementById('screen');
const screen2 = document.getElementById('screen2');
const decimals = document.getElementById('decimals');



number.forEach((button) => {
    button.addEventListener('click', numberHandler);
});

operatorButton.forEach((button) => {
    button.addEventListener('click', operatorHandler);
});

equals.addEventListener('click', equalsHandler);
decimals.addEventListener('click', decimalHandler);
ac.addEventListener('click', clearHandler);
bs.addEventListener('click', backspaceHandler);



document.addEventListener('keydown', function(event) {
    if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '0') {
        numberHandler({target: {textContent: event.key}});
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        operatorHandler({target: {value: event.key}});
    } else if (event.key === '.' || event.key === 'Decimal') {
        decimalHandler();
    } else if (event.key === 'Backspace') {
        backspaceHandler();
    } else if (event.key === '=' || event.key === 'Enter') {
        equalsHandler();
    }
});

