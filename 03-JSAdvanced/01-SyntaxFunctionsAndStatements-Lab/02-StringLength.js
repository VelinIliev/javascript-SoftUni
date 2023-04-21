function main(str1, str2, str3) {
    let sumString = str1.length + str2.length + str3.length;
    let averageLength = Math.floor(sumString / 3)
    console.log(sumString);
    console.log(averageLength);
}

main('chocolate', 'ice cream', 'cake')
main('pasta', '5', '22.3')