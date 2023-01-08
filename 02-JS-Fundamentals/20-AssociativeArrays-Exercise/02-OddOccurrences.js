function main(input) {
    let occurrences = {};
    input.split(" ").forEach(element => {
        element = element.toLowerCase();
        if (element in occurrences) {
            occurrences[element] += 1;
        } else {
            occurrences[element] = 1;
        }
    });
    let display_line = []
    for (let key in occurrences) {
        if (occurrences[key] % 2 !== 0) {
            display_line.push(key);
        }
    }
    console.log(display_line.join(" "));
}

main('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
main('Cake IS SWEET is Soft CAKE sweet Food');