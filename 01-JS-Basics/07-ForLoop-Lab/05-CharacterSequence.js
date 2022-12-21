function main(params) {
    let string = params[0];
    for (let index = 0; index < string.length; index++) {
        console.log(string[index]); 
    } 
    
}

main((["softuni"]));
main(["ice cream"]);