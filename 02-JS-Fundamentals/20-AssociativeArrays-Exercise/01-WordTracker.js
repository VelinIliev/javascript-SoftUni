function main(input) {
    let occurrences =  {}
    let words = input.shift();
    words.split(" ").forEach(element => {
        occurrences[element] = 0; 
    });
    input.forEach(element => {
         if (element in occurrences) {
            occurrences[element] += 1;
         }   
    });
    let sorted = Object.entries(occurrences);
    sorted.sort((a,b) => b[1] - a[1]);
    sorted.forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });
}

main([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );

main([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )