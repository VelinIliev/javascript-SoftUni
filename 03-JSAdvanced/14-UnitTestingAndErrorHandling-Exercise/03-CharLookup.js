function lookupChar(string, index) { 
    if (typeof(string) !== 'string' || !Number.isInteger(index)) { 
        return undefined; 
    }
    if (string.length <= index || index < 0) { 
        return "Incorrect index"; 
    } 
    return string.charAt(index); 
}
// console.log(lookupChar('abcde', 10));

const { expect } = require('chai');  

describe("lookupChar checker", function () {
    it ('test correct', () => {expect(lookupChar("abcde", 0)).to.equal("a")});
    it ('test correct', () => {expect(lookupChar("abcde", 4)).to.equal("e")});
    it ('test incorrect index', () => {expect(lookupChar("abcde", 5)).to.equal("Incorrect index")});
    it ('test incorrect index', () => {expect(lookupChar("abcde", -1)).to.equal("Incorrect index")});
    it ('test float index', () => {expect(lookupChar("abcde", 2.5)).to.be.undefined});
    it ('test incorrect string', () => {expect(lookupChar(10, 5)).to.be.undefined});
    it ('test incorrect index', () => {expect(lookupChar("abcde", '4')).to.be.undefined});
})