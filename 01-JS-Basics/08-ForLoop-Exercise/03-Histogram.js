function main(params) {
    let itterations = params[0] * 1;
    let numbers_200 = 0;
    let numbers_200_399 = 0;
    let numbers_400_599 = 0;
    let numbers_600_799 = 0;
    let numbers_800 = 0;
    for (let i = 1; i <= itterations; i++) {
        let current_number = params[i] * 1;
        if (current_number < 200) {
            numbers_200 += 1;
        } else if (current_number < 400) {
            numbers_200_399 += 1;
        } else if (current_number < 600) {
            numbers_400_599 += 1;
        } else if (current_number < 800) {
            numbers_600_799 += 1;
        } else {
            numbers_800 += 1;
        }
    }
    let total_numbers = params.length - 1;
    console.log(`${(numbers_200 / total_numbers * 100).toFixed(2)}%`);
    console.log(`${(numbers_200_399 / total_numbers * 100).toFixed(2)}%`);
    console.log(`${(numbers_400_599 / total_numbers * 100).toFixed(2)}%`);
    console.log(`${(numbers_600_799 / total_numbers * 100).toFixed(2)}%`);
    console.log(`${(numbers_800 / total_numbers * 100).toFixed(2)}%`);
}

main(["3", "1", "2", "999"]);
main(["7", "800", "801", "250", "199", "399", "599", "799"]);
