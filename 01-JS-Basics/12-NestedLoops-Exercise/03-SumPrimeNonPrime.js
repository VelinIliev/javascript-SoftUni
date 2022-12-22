function main(params) {
    function isPrime(number)
    { 
      if (number <= 1)
      return false;
   
      // The check for the number 2 and 3
      if (number <= 3)
      return true;
   
      if (number%2 == 0 || number%3 == 0)
      return false;
   
      for (var i=5; i*i<=number; i=i+6)
      {
         if (number%i == 0 || number%(i+2) == 0)
         return false;
      }
   
      return true;
    }
    let sum_prime = 0;
    let sum_non_prime = 0;
    for (let i = 0; i < params.length; i++) {
        let current_number = params[i];
        if (current_number == "stop") {
            break
        }
        current_number = current_number * 1;
        if (current_number < 0 ) {
            console.log('Number is negative.');
        } else if (isPrime(current_number)) {
            sum_prime += current_number;
        } else {
            sum_non_prime += current_number
        }
    }
    console.log(`Sum of all prime numbers is: ${sum_prime}`);
    console.log(`Sum of all non prime numbers is: ${sum_non_prime}`);
}

main(["3", "9", "0", "7", "19", "4", "stop"]);
console.log();
main(["30", "83", "33", "-1", "20", "stop"]);
console.log();
main(["0", "-9", "0", "stop"]);

