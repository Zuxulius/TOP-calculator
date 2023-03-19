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
	value1 = solve;
	value2 = "";
	operator = false;
	decimal = false;
	if (solve % 1 === 0) screen.innerText = solve;
	else if (solve === "INFINITY") {
		screen.innerText = solve;
		isClear()
	} else screen.innerText = solve.toFixed(5);
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
	if (screen.innerText === "INFINITY") screen.innerText = "0";
	if (operator) {
		isEquals()
		operator = target;
		screen.innerText += operator;
	} else {
		operator = target;
		screen.innerText += operator;
	}
	decimal = false;
	value2 = value1;
	value1 = "";
}

function isNum(target) {
	if ((screen.innerText === "0" || screen.innerText === "INFINITY") && value1 !== "0") {
		screen.innerText = ""; // Set to empty before you add number
		value1 = "";
		value2 = "";
	}
	value1 += target;
	screen.innerText += target;
}

function isDecimal() {
	if (!decimal && value1 !== "") {
		decimal = true;
		value1 += '.';
		screen.innerText += '.';
	} 
}

function isClear() {
	operator = false;
	decimal = false;
	value1 === "INFINITY" ? screen.innerText = "INFINITY" : screen.innerText = 0;
	value1 = "";
	value2 = "";
}

function isUndo() {
	if (screen.innerText.slice(-1) !== ".") decimal = false;
	if (value1 !== "") {
		value1 = value1.slice(0, -1);
		screen.innerText = screen.innerText.slice(0, -1);
	}
}


function input(event) {
	let target;
	if (event.type === "click") {
		target = event.target;
	} else if (event.type === "keydown") {
		target = event.key;
	}

	if (/\d/.test(event.key)) {
		isNum(target)
	} else if (/[*\/\+\-]/.test(event.key)) {
		isOperator(target)
	} else if (target.className === "number") {
		target = target.innerText;
		isNum(target)
	} else if (target.className === "operator") {
		target = target.innerText;
		isOperator(target)
	} else if (target.className === "clear" || target === "C") {
		isClear()
	} else if (target.className === "equals" || target === "=") {
		isEquals()
	} else if (target.className === "decimal" || target === ".") {
		isDecimal()
	} else if (target.className === "backspace" || target === "Backspace") {
		isUndo()
	}
}

let operator = false;
let decimal = false;
let value1 = "";
let value2 = "";

const screen = document.getElementsByClassName("screen-content")[0];
document.body.addEventListener("click", input);
document.body.addEventListener("keydown", input);
