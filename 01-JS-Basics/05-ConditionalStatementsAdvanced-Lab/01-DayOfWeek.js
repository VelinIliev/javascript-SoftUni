function main(input) {
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday', "Sunday"];
    day = input[0] * 1;
    if (day >= 1 && day <= 7) {
        console.log(`${days[day-1]}`);
    } else {
        console.log('Error');
    }
}

main(["1"])
main(["2"])
main(["3"])
main(["4"])
main(["5"])
main(["6"])
main(["7"])
main(["-1"])