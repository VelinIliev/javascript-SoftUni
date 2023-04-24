function main(input) {
    let biggestNumber = -10000000;
    let result = [];

    input.forEach(element => {
        if (element >= biggestNumber) {
            biggestNumber = element
            result.push(element)
        }
        
    });
   return result;

}

console.log(main(main([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )));

console.log(main([1, 
    2, 
    3,
    4]
    ));

console.log(main([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));