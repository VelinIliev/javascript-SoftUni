function main(params) {
    let trys = 0
    let username = params[0];
    let password = '';
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }
    for (let j = 1; j < params.length; j++) {
        if (password == params[j]) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            trys += 1;
            if (trys == 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }        
    }
}

main(['Acer','login','go','let me in','recA']);
main(['momo','omom']);
main(['sunny','rainy','cloudy','sunny','not sunny']);