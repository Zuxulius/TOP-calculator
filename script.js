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
	values = [solve]
	value = "";
}

function populate(event) {
	if (event.target.classList.contains("operator")) {
		values.push(Number(value));
		value = "";
		operator = event.target.innerText;
		screen.innerText += event.target.innerText;
		}
	
	if (event.target.classList.contains("displayable")) {
		if (screen.innerText === "0" || screen.innerText === "INFINITY") {
		screen.innerText = "";
		value = "";
		values = [];
		}
		value += event.target.innerText;
		screen.innerText += event.target.innerText;
		}
	if (event.target.className === "equals") {
		value = Number(value);
		if (operator === "/") {
			operate(divide, values[0], value);
		}
		if (operator === "+") {
			operate(add, values[0], value);
		}
		if (operator === "-") {
			operate(subtract, values[0], value);
		}
		if (operator === "*") {
			operate(multiply, values[0], value);
		}
	}
	if (event.target.className === "clear") {
		value = "";
		values = [];
		screen.innerText = 0;
	}
}



let operator = false;
let value = "";
let values = [];
screen = document.getElementsByClassName("screen-content")[0];
document.body.addEventListener("click", populate);
