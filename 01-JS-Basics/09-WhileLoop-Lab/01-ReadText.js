function main(params) {
    i = 0;
    while (true) {
        command = params[i];
        i++;
        if (command == "Stop") {
            break;
        }
        console.log(command);
    }
}

main(["Nakov", "SoftUni", "Sofia", "Bulgaria", "SomeText", "Stop", "AfterStop", "Europe", "HelloWorld"])
