function cityTaxes(name, population, treasury, taxRate=10) {
    return {
        name,
        population,
        treasury,
        taxRate,
        collectTaxes() {this.treasury += this.population * this.taxRate},
        applyGrowth(percentage) {this.population = this.population * (1 + (percentage / 100))},
        applyRecession(percentage) {this.treasury *=  (1 - (percentage / 100))},
    }
}

// const city =
// cityTaxes('Tortuga',
// 7000,
// 15000);
// console.log(city);
const city =
cityTaxes('Tortuga',
7000,
15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10);
console.log(city.treasury);
