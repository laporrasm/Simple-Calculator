let operationArray = [];

let operate = function(a) {
	switch (a[1]) {
		case "+":
			return a[0] + a[2];
		case "-":
			return a[0] - a[2];
		case "x":
			return a[0] * a[2];
		case "/":
			return a[0] / a[2];
		case "^":
			return Math.pow(a[0], a[2]);
		case "%":
			return a[0] % a[2];
	}
};

let clearButton = document.querySelector(".calculator__button--clear");

let equalButton = document.querySelector(".calculator__button--equal");

let operationButtons = document.querySelectorAll(".calculator__button--op");

let numberButtons = document.querySelectorAll(".calculator__button--number");

let screen = document.querySelector(".calculator__screen");

let screenText = "";

numberButtons.forEach(button =>
	button.addEventListener("click", function(event) {
		screenText = screenText + this.innerText;
		screen.innerText = screenText;
	})
);

operationButtons.forEach(button =>
	button.addEventListener("click", function(event) {
		operationArray.push(parseFloat(screen.innerText));

		if (operationArray.length >= 3) {
			let result = operate(operationArray);
			operationArray = [];
			operationArray.push(result);
			screen.innerText = result;
		} else {
			screen.innerText = "0";
		}
		operationArray.push(this.innerText);
		screenText = "";
		console.log(operationArray);
	})
);

equalButton.addEventListener("click", function(event) {
	if (operationArray.length < 2) {
		return ;
	}
	operationArray.push(parseFloat(screen.innerText));
	screen.innerText = operate(operationArray);
	screenText = "";
	operationArray = [];
	console.log(operationArray);
});

clearButton.addEventListener("click", function(event) {
	screen.innerText = "0";
	screenText = "";
	operationArray = [];
	console.log(operationArray);
})
