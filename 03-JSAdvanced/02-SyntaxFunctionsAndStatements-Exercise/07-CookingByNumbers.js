function main(...input) {
    let number = input.shift() * 1;
    let comands = {
        'chop': (x) => x / 2,
        'dice': (x) => Math.sqrt(x),
        'spice': (x) => x + 1,
        'bake': (x) => x * 3,
        'fillet': (x) => x * .8
    }

    input.forEach(element => {
        number = comands[element](number);
        console.log(number);
    });
}

// main('32', 'chop', 'chop', 'chop', 'chop', 'chop')
main('9', 'dice', 'spice', 'chop', 'bake', 'fillet')