function main(params) {
    let new_arr = params.map(Number)
    let sum = 0;
    new_arr.forEach(element => {
        if (element % 2 == 0 ) { 
            sum += element
        }
    });
    console.log(sum);
}

main(['1','2','3','4','5','6']);
main(['3','5','7','9']);
main(['2','4','6','8','10']);