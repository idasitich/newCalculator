let Number1 = '';
let Number2 = '';
let operator = '';
let result = '';
let decimal = false;


const add = (num1, num2) => {
    return num1 + num2;
};
const subtract = (num1, num2) => {
    return num1 - num2;
};
const multiply = (num1, num2) => {
    return num1 * num2;
};
const divide = (num1, num2) => {
    if (num2 === 0) {
        return "Can't divide by 0";
    }
    return num1 / num2;
};


const operate = (operator, num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Invalid operator';
    }
};

const numberHandler = (event) => {
    if (screen.value === "Can't divide by 0") handleClear();
    const value = event.target.textContent;
    if (!operator) {
        if (result) {
            Number1 = '';
            result = '';
        }
        Number1 += value;
        screen.value = Number1;
    } else {
        Number2 += value;
        screen2.value += value;
       
    }
};
const operatorHandler = (event) => {
    if (screen.value === "Can't divide by 0") clearHandler();
    if (screen.value === ''  && screen2.value === '' && event.target.textContent!=='-') return;
    if (screen.value === ''  && screen2.value === '' && event.target.textContent==='-')
    {
        Number1 = '0';
        operator = event.target.value;
        screen2.value = operator;
        screen.value = '';
        return;
    }   
    if (operator !== '')
    {
        Number1 = operate(operator,Number1,Number2);
        if (Number1 === "Can't divide by 0") {
            screen.value = "Can't divide by 0";
            screen2.value = '';
            return;
        }
        Number2 = '';
    }
    operator = event.target.value;
    screen2.value = Number1 + operator + Number2;
    screen.value = '';
    decimal = false;
};
const decimalHandler = () => {
    if (screen.value === "Can't divide by 0") clearHandler();
    if (!decimal) {
        if (!operator) {
            if (result) {
                Number1 = '';
                result = '';
            }
            if (Number1 === '') Number1 = '0';
            Number1 += '.';
            screen.value = Number1;
        } else {
            if (Number2 === '') Number2 = '0';
            Number2 += '.';
            screen.value = Number2; 
        }
        decimal = true;
    }
};
const clearHandler = () => {
    Number1 = '';
    operator = '';
    Number2 = '';
    result = '';
    screen.value = '';
    screen2.value = '';
    decimal = false;
};
const backspaceHandler = () => {
    if (screen.value === "Can't divide by 0") clearHandler();
    let screenValue = screen.value;
    if (screenValue.length === 0 && !operator) return;
    if (Number2) {
        Number2 = Number2.slice(0, Number2.length - 1);
        screen.value = Number2;
    }
    else if (operator) {
        Number2 = '';
        operator = '';
        screen2.value = '';
        screen.value = Number1;
    }
    else {
        Number2 = '';
        operator = '';
        result = '';
        screen2.value = ''
        Number1 = Number1.toString();
        Number1 = Number1.slice(0, Number1.length - 1);
        if (Number1 === '-') Number1 = '';
        screen.value = Number1;
    }
    if (screenValue[screenValue.length-1] === '.') decimal = false;
};

const equalsHandler = () => {
    if (screen.value === "Can't divide by 0") handleClear();
    if (Number1 && operator && Number2) {
        result = operate(operator, parseFloat(Number1),parseFloat(Number2));
        screen.value = result;
        screen2.value = '';
        Number1 = result;
        operator = '';
        Number2 = '';
        decimal = false;
    }
};