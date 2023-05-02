function rgbToHexColor(red, green, blue) { 
    if (!Number.isInteger(red) || (red < 0) || (red > 255)){ 
        return undefined; // Red value is invalid
    } 
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    } 
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)){ 
        return undefined; // Blue value is invalid
    } 
    return "#" + 
            ("0" + red.toString(16).toUpperCase()).slice(-2) + 
            ("0" + green.toString(16).toUpperCase()).slice(-2) + 
            ("0" + blue.toString(16).toUpperCase()).slice(-2); 
    }

console.log(rgbToHexColor(255, 255, 255));


const { expect } = require('chai');  

describe("rgbToHexColor checker", function () {
    it ('test black', () => {expect(rgbToHexColor(0,0,0)).to.equal("#000000")});
    it ('test white', () => {expect(rgbToHexColor(255,255,255)).to.equal("#FFFFFF")});
    it ('test red', () => {expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000")});
    it ('test green', () => {expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00")});
    it ('test blue', () => {expect(rgbToHexColor(0, 0,255)).to.equal("#0000FF")});
    it ('test non-valid range', () => {expect(rgbToHexColor(-1, 0, 0)).to.equal(undefined)});
    it ('test non-valid range', () => {expect(rgbToHexColor(256, 0, 0)).to.equal(undefined)});
    it ('test non-valid input', () => {expect(rgbToHexColor('a', 0, 0)).to.equal(undefined)});
    it ('test non-valid input', () => {expect(rgbToHexColor( 0, 0)).to.equal(undefined)});
})