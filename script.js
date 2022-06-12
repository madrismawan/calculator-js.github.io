const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

let prevNumber = '';
let result = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    console.log(result);
    if(currentNumber === '0'){
        currentNumber = number;
    }else if(result !== ''){
        result = '';
        currentNumber = number
    }
    else{
        currentNumber += number;
    }
}

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value);
    });
})

const inputOperator = (operator) => {
    if(operator === '%'){
        currentNumber = currentNumber/100;
        updateScreen(currentNumber)
    }else if(calculationOperator === ''){
        prevNumber = currentNumber;
        calculationOperator = operator;
        currentNumber = ''; 
    }
}

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', ()=> {
    calculate();
    updateScreen(currentNumber);
})

const calculate = () => {
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', ()=>{
    clearALl();
    updateScreen(currentNumber);
})

const clearALl = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}



