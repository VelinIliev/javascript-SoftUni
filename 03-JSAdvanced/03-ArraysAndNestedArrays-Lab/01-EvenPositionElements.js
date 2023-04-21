function main(params) {
    let result = []
    for (let i = 0; i < params.length; i++) {
        if ( i % 2 === 0 ){
            result.push(params[i])
        }
    }
    console.log(result.join(" "));
}

main(['20', '30', '40', '50', '60'])
main(['5', '10'])