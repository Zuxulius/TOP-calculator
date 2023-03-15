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

function populate(event) {
	if (event.target.classList.contains("operator")) {
		value2 = value1;
		value1 = "";
		operator = event.target.innerText;
		screen.innerText += event.target.innerText;
		}
	
	if (event.target.classList.contains("displayable")) {
		if (screen.innerText === "0" || screen.innerText === "INFINITY") {
		screen.innerText = "";
		value1 = "";
		value2 = "";
		}
		value1 += event.target.innerText;
		screen.innerText += event.target.innerText;
		}
	if (event.target.className === "equals") {
		value1 = Number(value1);
		value2 = Number(value2);
		if (operator === "/") {
			operate(divide, value2, value1);
		}
		if (operator === "+") {
			operate(add, value2, value1);
		}
		if (operator === "-") {
			operate(subtract, value2, value1);
		}
		if (operator === "*") {
			operate(multiply, value2, value1);
		}
	}
	if (event.target.className === "clear") {
		value1 = "";
		value2 = "";
		screen.innerText = 0;
	}
}



let operator = false;
let value1 = "";
let value2 = "";
screen = document.getElementsByClassName("screen-content")[0];
document.body.addEventListener("click", populate);
