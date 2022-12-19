function main(input) {
    let grade = input[0] * 1;
    if (grade >= 5.5) {
        console.log('Excellent!');
    }
}

main(["6"])
main(["5"])
main(["5.50"])
main(["5.49"])