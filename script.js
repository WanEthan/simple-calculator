

const displayDiv = document.querySelector("#display");

var number1 = "";
var number2 = "";
var operator = "";


function press(num) {
    number1 += num;
    displayDiv.innerText = number1;
}

function setOP(symbol) {
    operator = symbol;
    number2 = number1;
    number1 = "";
}

function clr() {
    operator = "";
    number1 = "";
    number2 = "";
    displayDiv.innerText = "0";
}

function calculate() {
    var outcome = 0;
    if (operator == "+") {
        outcome = Number(number2) + Number(number1);
    }

    if (operator == "-") {
        outcome = Number(number2) - Number(number1);
    }

    if (operator == "*") {
        outcome = Number(number2) * Number(number1);
    }

    if (operator == "/") {
        outcome = Number(number2) / Number(number1);
    }
    if (operator == "√") {
        outcome = Math.sqrt(Number(number2));
    }
    number1 = "";
    operator = "";
    displayDiv.innerText = outcome;

}