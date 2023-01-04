function main(input) {
    let array = input.shift().split(" ");
    array = array.map(x => x * 1);
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(" ");
        let command = commands[0];
        let number;
        // console.log(command);
        if (command === "Add") {
            number = commands[1] * 1;
            array.push(number)
        } else if (command === "Remove") {
            number = commands[1] * 1;
            function arrayRemove(arr, value) { 
    
                return arr.filter(function(ele){ 
                    return ele != value; 
                });
            }
            
            array = arrayRemove(array, number);
        } else if(command === "RemoveAt") {
            let index = commands[1] * 1;
            array.splice(index, 1)
        } else if (command === "Insert"){
            number = commands[1] * 1;
            let index = commands[2] * 1;
            array.splice(index, 0, number);
        }
        
    }
    console.log(array.join(" "));
}

main(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
main(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)