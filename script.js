function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	if (b === 0) {
	return 'INFINITY'
	} else return a / b
}

function operate(op, a, b) {
	let solve = op(a, b);
	screen.innerText = solve;
	value1 = solve;
	value2 = "";
	operator = false;
}

function isEquals() {
	value1 = Number(value1);
	value2 = Number(value2);

	if (operator === "/") {
		operate(divide, value2, value1);
	} else if (operator === "+") {
		operate(add, value2, value1);
	} else if (operator === "-") {
		operate(subtract, value2, value1);
	} else if (operator === "*") {
		operate(multiply, value2, value1);
	}
}

function isOperator(target) {
	if (operator) {
		isEquals()
		operator = target.innerText;
		screen.innerText += operator;
	} else {
		operator = target.innerText;
		screen.innerText += operator;
	}
	value2 = value1;
	value1 = "";
}

function isNum(target) {
	if (screen.innerText === "0" || screen.innerText === "INFINITY") {
	screen.innerText = ""; // Set to empty before you add number
	value1 = "";
	value2 = "";
	}
	value1 += target.innerText;
	screen.innerText += target.innerText;
}


function input(event) {
	let target = event.target;
	if (target.className === "number") {
		isNum(target)
	} else if (target.className === "operator") {
		isOperator(target)
	} else if (target.className === "clear") {
		value1 = "";
		value2 = "";
		screen.innerText = 0;
	} else if (target.className === "equals") {
		isEquals()
	}
}


let operator = false;
let value1 = "";
let value2 = "";
screen = document.getElementsByClassName("screen-content")[0];
document.body.addEventListener("click", input);
