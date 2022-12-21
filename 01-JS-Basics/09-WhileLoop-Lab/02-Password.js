function main(params) {
    let name = params[0];
    let password = params[1];
    let counter = 3;
    let data = params[2];
    while (data != password) {
        data = params[counter];
        counter++;
    }
    console.log(`Welcome ${name}!`);
}

main(["Nakov", "1234", "Pass", "1324", "1234"]);
main(["Gosho", "secret", "secret"])

