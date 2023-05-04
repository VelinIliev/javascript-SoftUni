function solution(initNum) {
    return function (num2) {return initNum + num2}
}
 
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));