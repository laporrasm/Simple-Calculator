let transformOp = (op) => {
	switch (op) {
		case "x":
			return '*';
		case "^":
			return '**';
		default:
			return op;
	}
};

// Atrapa el botón de clear
let clearButton = document.querySelector(".calculator__button--clear");

// Atrapa el botón de igual
let equalButton = document.querySelector(".calculator__button--equal");

// Atrapa todos los botones de operaciones
let operationButtons = document.querySelectorAll(".calculator__button--op");

// Atrapa en un objeto todos los botones de números
let numberButtons = document.querySelectorAll(".calculator__button--number");

// Atrapa la pantalla de la calculadora
let screen = document.querySelector(".calculator__screen");

// Inicializa la memoria
let memory = "";

numberButtons.forEach(button =>
	button.addEventListener("click", function(event) {
		memory = memory + this.innerText;
		screen.innerText = memory;

		console.log(memory);
	})
);

operationButtons.forEach(button =>
	button.addEventListener("click", function(event) {

		if (memory.length == 0) memory = '0';

		if (isNaN(memory.slice(-1))) {
			memory = memory.substr(0, memory.length - 1) + transformOp(this.innerText);
		} else {
			memory = memory + transformOp(this.innerText);
		}
		screen.innerText = 0;
		console.log(memory);
	})
);

equalButton.addEventListener("click", function(event) {
	memory = `${eval(memory)}`;
	console.log(memory);
	screen.innerText = memory;

});

clearButton.addEventListener("click", function(event) {
	screen.innerText = "0";
	memory = "";
})
