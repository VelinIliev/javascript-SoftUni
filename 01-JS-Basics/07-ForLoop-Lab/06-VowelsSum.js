function main(params) {
    let text = params[0]
    let vowels = {
        "a": 1,
        "e" : 2,
        "i": 3,
        "o": 4,
        "u": 5,
    }
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] in vowels) {
            sum += vowels[text[i]];
        } 
    }
    console.log(sum);
}

main(["hello"]);
main(["hi"]);
main(["bamboo"]);
main(["beer"]);