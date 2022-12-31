function main(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let isPalindrome = true;
        let current_number = String(numbers[i]);
        for (let x = 0; x < (current_number.length -1) / 2; x++) {
            if (current_number[x] === current_number[current_number.length - 1 -x]) {
            } else {
                isPalindrome = false
            }
        }
        console.log(isPalindrome);
    }
}

main([123, 323, 421, 121]);
main([32, 2, 232, 1010])