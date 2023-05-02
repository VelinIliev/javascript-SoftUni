function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num)
    }
    return sum;
}

const { expect } = require('chai');  

describe("Main test", function () {
    it ('test with integers' , function () {
        expect(sum([1,2,3])).to.equal(6)
    })
    it ('test with strings' , function () {
        expect(sum(["1","2","3"])).to.equal(6)
    })
    it ('test with float' , function () {
        expect(sum([1.1,2.2,3.3])).to.equal(6.6)
    })
    it ('test with empty array' , function () {
        expect(sum([])).to.equal(0)
    })
})
