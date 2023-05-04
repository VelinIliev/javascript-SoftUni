let mathEnforcer = { 
    addFive: function (num) { 
        if (typeof(num) !== 'number') { 
            return undefined; 
        } 
        return num + 5; 
    }, 
    subtractTen: function (num) { 
        if (typeof(num) !== 'number') { 
            return undefined; 
        } 
        return num - 10; 
    }, 
    sum: function (num1, num2) { 
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') { 
            return undefined; 
        } 
        return num1 + num2; 
    } 
};

// console.log(mathEnforcer.addFive(2));
// console.log(mathEnforcer.subtractTen(2));
// console.log(mathEnforcer.sum(1, 2));

const { expect } = require('chai');  

describe("mathEnforcer checker", function () {
    it ('test addFive correct', () => {expect(mathEnforcer.addFive(0)).to.equal(5)});
    it ('test addFive correct negative', () => {expect(mathEnforcer.addFive(-10)).to.equal(-5)});
    it ('test addFive with string', () => {expect(mathEnforcer.addFive('0')).to.be.undefined});
    it ('test addFive with float', () => {expect(mathEnforcer.addFive(1.5)).to.equal(6.5)});
    it ('test subtractTen correct', () => {expect(mathEnforcer.subtractTen(0)).to.equal(-10)});
    it ('test subtractTen correct', () => {expect(mathEnforcer.subtractTen(-10)).to.equal(-20)});
    it ('test subtractTen float', () => {expect(mathEnforcer.subtractTen(10.5)).to.equal(0.5)});
    it ('test subtractTen string', () => {expect(mathEnforcer.subtractTen('10.5')).to.be.undefined});
    it ('test sum correct', () => {expect(mathEnforcer.sum(1, 2)).to.equal(3)});
    it ('test sum float', () => {expect(mathEnforcer.sum(1.1, 2.2)).to.closeTo(3.3, 0.0001)});
    it ('test sum strings', () => {expect(mathEnforcer.sum('1', 2)).to.be.undefined});
    it ('test sum strings', () => {expect(mathEnforcer.sum(1, '2')).to.be.undefined});
    it ('test sum strings', () => {expect(mathEnforcer.sum('1', '2')).to.be.undefined});
})