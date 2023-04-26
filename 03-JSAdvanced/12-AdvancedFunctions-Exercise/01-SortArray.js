function main(array, method) {
    if (method === "asc") {
        array.sort((a, b) => a - b )
    } else if (method === 'desc'){
        array.sort((a, b) => b - a )
    }
   return array;
}

main([14, 7, 17, 6, 8], 'asc');
main([14, 7, 17, 6, 8], 'desc')