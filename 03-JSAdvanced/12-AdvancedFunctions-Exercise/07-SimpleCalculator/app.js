function calculator() {

	function init(selector1, selector2, resultSelector){
		this.number1 = document.querySelector(selector1);
		this.number2 = document.querySelector(selector2);
		this.result = document.querySelector(resultSelector);
	}
	
	function add() {
		this.result.value = this.number1.value * 1 + this.number2.value * 1
	}
	function subtract() {
        this.result.value = this.number1.value * 1 - this.number2.value * 1;
    }

	return {init, add, subtract}
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');


