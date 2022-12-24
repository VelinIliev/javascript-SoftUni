function main(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let el = array.shift()
        array.push(el)
    }
    console.log(array.join(" "));
}
main([51, 47, 32, 61, 21], 2);
main([32, 21, 61, 1], 4);
main([2, 4, 15, 31], 5)