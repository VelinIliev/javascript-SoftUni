function main(array) {
    let current_max = -1000000;
    let finnal_array = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (array[i] * 1 >= current_max) {
            finnal_array.push(array[i])
            current_max = array[i]
        }
    }
    console.log(finnal_array.join(" "));
}

main([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
main([ 1, 2, 3, 4]);
main([ 20, 3, 2, 15, 6, 1])