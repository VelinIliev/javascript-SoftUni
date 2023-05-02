function isSymmetric(arr) { 
    if (!Array.isArray(arr)) { 
        return false; // Non-arrays are non-symmetric 
    } 
    let reversed = arr.slice(0).reverse(); // Clone and reverse 
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed)); 
    return equal; 
    }

const { expect } = require('chai');  

describe("Symetry checker", function () {
    it ('test symmetric with integers', () => {expect(isSymmetric([1, 2, 2, 1])).to.be.true});
    it ('test non-symmetric', () => {expect(isSymmetric([1, 2, 3])).to.be.false});
    it ('test symmetric with int', () => {expect(isSymmetric(1)).to.be.false});
    it ('test symmetric with odd-length array', () => {expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true});
    it ('test symmetric with strings in array', () => {expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true});
    it ('test symmetric with string', () => {expect(isSymmetric("abba")).to.be.false})
    it ('test symmetric with mixed elements', () => {expect(isSymmetric([1, 2, '1'])).to.be.false})
})