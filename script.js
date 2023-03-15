/* 

*/

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
	screen.style = "font-size: 1rem;"
	return 'ERROR: DIVIDING BY 0 TEARS OPEN THE FABRIC OF SPACE-TIME'
	} else return a / b
}

function operate(op, a, b) {
	console.log(values[0], value)
	screen.innerText = op(a, b)
}

function populate(event) {
	if (event.target.classList.contains("operator")) {
		values.push(Number(value));
		value = "";
		operator = event.target.innerText;
		screen.innerText += event.target.innerText;
	}
	if (event.target.classList.contains("displayable")) {
		if (screen.innerText === "0") screen.innerText = "";
		value += event.target.innerText;
		value = Number(value);
		screen.innerText += event.target.innerText;
		}
	if (event.target.className === "equals") {
		console.log(event.target);
		if (operator === "/") {
			operate(divide, values[0], value);
		}
	}
	if (event.target.className === "clear") {
		value = "";
		values = [];
		screen.innerText = 0;
	}
}



let operator;
let value = "";
let values = [];
screen = document.getElementsByClassName("screen-content")[0];
document.body.addEventListener("click", populate);
