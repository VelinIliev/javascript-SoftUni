function main(num) {
    num = Number(num)
    for (let i = 97; i < 97 + num; i++) {
        for (let j = 97; j < 97 + num; j++) {
            for (let k = 97; k < 97 + num; k++) {

                console.log(`${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}`);
                
            }
            
        }
        
    }
}

main('3')