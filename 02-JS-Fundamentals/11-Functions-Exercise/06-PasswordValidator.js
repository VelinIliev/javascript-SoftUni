function main(password) {
    let isValid = true;
    if (password.length < 6 || password.length > 10){
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }
    let count_numbers = 0;
    let otherChars = false;

    for (let i = 0; i < password.length; i++) {
        if ((/[0-9a-zA-Z]/).test(password[i])) {
            if ((/[0-9]/).test(password[i])) {
                count_numbers += 1
            }
        } else {
            otherChars = true;
        }
    }
    if (otherChars) {
        console.log('Password must consist only of letters and digits');
        isValid = false
    }
    if (count_numbers < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid) {
        console.log('Password is valid');
    }
}

main('logIn');
main('Pa$s$s');
main('MyPass123')