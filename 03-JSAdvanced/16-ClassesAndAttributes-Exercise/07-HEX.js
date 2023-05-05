class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(input){
        let number = this.value + Number(input.valueOf())
        return new Hex(number)
    }

    minus(input){
        let number = this.value - Number(input.valueOf())
        return new Hex(number)
    }

    parse(hex) {
        return parseInt(hex, 16)
    }
}



let FF = new Hex(255); 
console.log(FF.toString()); 
FF.valueOf() + 1 == 256; 
let a = new Hex(10); 
let b = new Hex(5); 
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));