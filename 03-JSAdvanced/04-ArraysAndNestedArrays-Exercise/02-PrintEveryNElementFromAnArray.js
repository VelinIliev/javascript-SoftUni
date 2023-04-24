function main(input, step) {
    let result = []
    for (let i = 0; i < input.length; i += step) {
        result.push(input[i])
    }
    return result
}

console.log(main(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log(main(['1', 
'2',
'3', 
'4', 
'5'], 
6
));