function isOddOrEven(string) { 
    if (typeof(string) !== 'string') { 
        return undefined; 
    } 
    if (string.length % 2 === 0) { 
        return "even"; 
    } 
    return "odd"; 
}

console.log(isOddOrEven(1));


const { expect } = require('chai');  

describe("isOddOrEven checker", function () {
    it ('test odd', () => {expect(isOddOrEven("a")).to.equal("odd")});
    it ('test even', () => {expect(isOddOrEven("aa")).to.equal("even")});
    it ('test undefined', () => {expect(isOddOrEven(1)).to.be.undefined});
    it ('test undefined', () => {expect(isOddOrEven([1, 2])).to.be.undefined});
})
