function main(params) {
    let projection = params[0];
    let rows = params[1] * 1;
    let cols = params[2] * 1;
    let places = rows * cols;
    let types = {
        'Premiere': 12,
        'Normal': 7.5,
        'Discount': 5,
    }
    let total = (places * types[projection]).toFixed(2)
    console.log(`${total} leva`);
}

main(["Premiere", "10", "12"]);
main((["Normal", "21", "13"]));
main((["Discount", "12", "30"]));