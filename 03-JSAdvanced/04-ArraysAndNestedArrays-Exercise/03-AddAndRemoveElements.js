function main(input) {
    let count = 1;
    let result = [];
    input.forEach(command => {
        if (command === 'add'){
            result.push(count)
        } else if (command === 'remove'){
            result.pop()
        }
        count += 1
    });

    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log("Empty");
    }
    
}

main(['add', 
'add', 
'add', 
'add']
)

main(['add', 
'add', 
'remove', 
'add', 
'add']
)

main(['remove', 
'remove', 
'remove']
)