function main(operations) {
    let thickness = operations.shift();
    for (let i = 0; i < operations.length; i++) {
        let current_element = operations[i];
        console.log(`Processing chunk ${current_element} microns`);

        function processing(current_element, thickness, operation, action) {
            let counter = 0
            while (eval(`${current_element}${action}`) >= thickness - 1) {
                current_element = eval(`${current_element}${action}`);
                counter += 1;
            }
            if (counter > 0) {
                console.log(`${operation} x${counter}`);
                console.log('Transporting and washing');
                current_element = Math.floor(current_element);
            }
            return current_element
        }
        current_element = processing(current_element, thickness, "Cut", '/4');
        current_element = processing(current_element, thickness, "Lap", '*.8');
        current_element = processing(current_element, thickness, "Grind", '-20');
        current_element = processing(current_element, thickness, "Etch", '-2');

        if (current_element == thickness - 1) {
            console.log('X-ray x1');
            current_element += 1;
        }
        console.log(`Finished crystal ${thickness} microns`);
    }
}

main([1375, 50000]);
main([1000, 4000, 8100]);