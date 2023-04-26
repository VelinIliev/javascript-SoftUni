function solution(input) {
    let products = {
        'apple': {
            'carbohydrate': 1,
            'flavour': 2
        },
        'lemonade': {
            'carbohydrate': 10,
            'flavour': 20
        },
        'burger': {
            'carbohydrate': 5,
            'fat': 7,
            'flavour': 3
        }, 
        'eggs': {
            'protein': 5,
            'fat': 1,
            'flavour': 1
        },
        'turkey': {
            'protein': 10,
            'carbohydrate': 10,
            'fat': 10,
            'flavour': 10
        }
    }
    let microelements = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }

    function restock(product, qty) {
        microelements[product] += qty * 1;
        return 'Success';
    }

    function preapere(product, qty) {

        for (const micro in products[product]) {
            let qty2 = products[product][micro] * qty ;
            if (microelements[micro] < qty2 * qty){
                return `Error: not enough ${micro} in stock`;
            }
        }

        for (const micro in products[product]) {
            let qty2 = products[product][micro];
            microelements[micro] -= qty2 * qty
        }

        return 'Success';
    }

    function report() {

        let output = [];

            for (const key in microelements) {
                output.push(`${key}=${microelements[key]}`);
            }

            return output.join(' ')
    }

    return function (data) {
        let [command, product, qty] = data.split(" ");

        if (command === 'restock') {
            return restock(product, qty)
            
        } else if (command === 'prepare') {
            return preapere(product, qty)

        } else if (command === 'report') {
            return report()
        }
    }
}



let manager = solution ();
console.log (manager ("restock flavour 50")); // Success
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report"));