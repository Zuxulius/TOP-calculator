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
	return 'ERROR: DIVIDING BY 0 TEARS OPEN THE FABRIC OF SPACE-TIME'
	} else return a / b
}

function operate(op, a, b) {
	return op(a, b)
}
