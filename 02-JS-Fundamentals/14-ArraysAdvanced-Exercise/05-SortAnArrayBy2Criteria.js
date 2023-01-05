function main(params) {
    params.sort(
        (a,b) =>    a.length - b.length !== 0 
                    ? a.length - b.length 
                    : a.toLowerCase().localeCompare(b.toLowerCase()));   
    console.log(params.join("\n")); 
}

main(['alpha', 'beta', 'gamma']);
main(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George', 'Aeorg']);

