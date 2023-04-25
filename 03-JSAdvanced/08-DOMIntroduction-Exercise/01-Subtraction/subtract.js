function subtract() {
    const firstNumber = document.getElementById('firstNumber').value * 1;
    const secondNumber = document.getElementById('secondNumber').value * 1;
    const result = document.getElementById("result"); 

    result.textContent = firstNumber - secondNumber
}