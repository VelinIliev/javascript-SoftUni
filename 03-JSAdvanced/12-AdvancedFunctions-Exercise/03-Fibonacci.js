function getFibonator() {
    let fibSeq = [0, 1]
    return function () {
        let sum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
        fibSeq.push(sum);
        return fibSeq[fibSeq.length - 2]
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13