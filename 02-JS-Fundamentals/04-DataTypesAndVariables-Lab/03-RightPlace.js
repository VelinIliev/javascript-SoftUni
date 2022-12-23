function main(string1, char, string2) {
    string1 = string1.replace("_", char);
    console.log(string1 == string2 ? 'Matched' : 'Not Matched');
}

main('Str_ng', 'I', 'Strong');
main('Str_ng', 'i', 'String');