function add(number1) {

    function innerFunc(number2) {
        number1 += number2;
        return innerFunc;
    };
    
    innerFunc.toString = () => number1;

    return innerFunc;
}
console.log(add(1))