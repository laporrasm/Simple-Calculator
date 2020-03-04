let transformEcuation = a => {
	return a.map(e => {
		switch (e) {
			case "÷":
				return "/";
			case "×":
				return "*";
			case "^":
				return "**";
			default:
				return e;	
		}
	}).filter(e => e != "");
};

// Atrapa el botón de clear
let clearButton = document.querySelector(".calculator__button--clear");

// Atrapa el botón de igual
let equalButton = document.querySelector(".calculator__button--equal");

// Atrapa en un objeto todos los botones de operaciones
let operationButtons = document.querySelectorAll(".calculator__button--op");

// Atrapa en un objeto todos los botones de números
let numberButtons = document.querySelectorAll(".calculator__button--number");

// Atrapa la pantalla donde muestra el número escrito
let screen = document.querySelector(".calculator__screen");

// Atrapa la pantalla donde muestra la memoria
let log = document.querySelector(".calculator__log");

// Inicializa la memoria
let memory = "";
let numberScreen = "";

numberButtons.forEach(button =>
	button.addEventListener("click", function(event) {
		numberScreen = numberScreen + this.innerText;
		screen.innerText = numberScreen;

		console.log(numberScreen);
	})
);

operationButtons.forEach(button =>
	button.addEventListener("click", function(event) {
		
		if(numberScreen == "" && memory == "") memory = `0 ${this.innerText}`;

		else if (numberScreen.length == 0 && isNaN(memory.slice(-1))) memory = `${memory.substr(0, memory.length - 1)} ${this.innerText}`;

		else memory = `${memory} ${numberScreen} ${this.innerText}`;

		numberScreen = "";
		screen.innerText = "0";
		log.innerText = memory;
	})
);

equalButton.addEventListener("click", function(event) {
	if (numberScreen == "" && isNaN(memory.slice(-1))) memory = `${memory} 0`;
	else {
		memory = `${memory} ${numberScreen}`;
		screen.innerText = "0";
		numberScreen = "";
	}

	let aux = memory.split(" ");
	aux = transformEcuation(aux).join("");
	memory = `${eval(aux)}`;
	log.innerText = memory;
});

clearButton.addEventListener("click", function(event) {
	numberScreen = "";
	screen.innerText = "0";
	memory = "";
	log.innerText = "0";
})
