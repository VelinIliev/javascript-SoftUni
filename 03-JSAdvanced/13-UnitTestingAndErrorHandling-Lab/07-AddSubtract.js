function createCalculator() { 
    let value = 0; 
    return { 
        add: function(num) { value += Number(num); }, 
        subtract: function(num) { value -= Number(num); }, 
        get: function() { return value; } 
    } 
}

// console.log(createCalculator.add(1, 2));

x = createCalculator();
console.log(typeof(x));
// x.add(1);
// x.subtract(1);
// console.log(x.get());

const { expect } = require('chai');  

describe("createCalculator checker", function () { 
    it ('calculator initialization', () => {
        let x = createCalculator();
        expect(typeof(x)).to.equal("object")
    });
    it ('test add float', () => {
        let x = createCalculator();
        x.add(1.5)
        expect(x.get()).to.equal(1.5)
    });
    it ('test add string', () => {
        let x = createCalculator();
        x.add('1')
        expect(x.get()).to.equal(1)
    });
    it ('test add float', () => {
        let x = createCalculator();
        x.add(1.5)
        expect(x.get()).to.equal(1.5)
    });
    it ('test substract int', () => {
        let x = createCalculator();
        x.add(2)
        x.subtract(1)
        expect(x.get()).to.equal(1)
    });
    it ('test substract string', () => {
        let x = createCalculator();
        x.add(2)
        x.subtract('1')
        expect(x.get()).to.equal(1)
    });
    it ('test substract float', () => {
        let x = createCalculator();
        x.add(2)
        x.subtract(1.5)
        expect(x.get()).to.equal(0.5)
    });
    it ('test add non-valid input', () => {
        let x = createCalculator();
        x.add('a')
        expect(x.get()).to.be.NaN
    });
    it ('test sunstract non-valid input', () => {
        let x = createCalculator();
        x.subtract('a')
        expect(x.get()).to.be.NaN
    });
})