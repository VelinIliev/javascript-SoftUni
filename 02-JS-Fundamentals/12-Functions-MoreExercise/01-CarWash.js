function main(commands) {
    let cleaned = 0;
    for (let i = 0; i < commands.length; i++) {
        
        if (commands[i] === 'soap') {
            cleaned += 10;
        } else if (commands[i] === 'water') {
            cleaned *= 1.2;
        } else if (commands[i] === 'vacuum cleaner') {
            cleaned *= 1.25;
        } else if (commands[i] === 'mud') {
            cleaned *= .9;
        }
        // console.log(`The car is ${cleaned.toFixed(2)}% clean.`)
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}

main(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
main(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])