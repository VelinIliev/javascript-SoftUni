function main(numbers) {
    let even_sum = 0;
    let odd_sum = 0
    numbers.forEach(el => {
        el % 2 == 0 ? even_sum += el : odd_sum += el
    });
    console.log(even_sum - odd_sum)
}

main([1,2,3,4,5,6]);
main([3,5,7,9]);
main([2,4,6,8,10])