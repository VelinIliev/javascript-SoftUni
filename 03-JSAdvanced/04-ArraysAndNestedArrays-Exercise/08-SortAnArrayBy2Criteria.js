function main(input) {
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    return input.join("\n")
}

console.log(main(['alpha', 
'beta', 
'gamma']
));

console.log();

console.log(main(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));

console.log();

console.log(main(['test', 
'Deny', 
'omen', 
'Default']
));