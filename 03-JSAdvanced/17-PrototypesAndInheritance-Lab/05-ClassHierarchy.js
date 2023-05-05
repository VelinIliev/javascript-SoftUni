function main() {
    class Figure {
        constructor(units='cm') {
            this.units = units;
        }
    
        convertUnits(value){
            if (this.units === 'cm') {
                return value
            } else if (this.units === 'mm'){
                return value * 10
            } else if (this.units === 'm') {
                return value / 10
            }
        }
    
        get area() {
    
        }
    
        changeUnits(newUnits){
            this.units = newUnits
        }
        toString() {
            return `Figures units: ${this.units}`
        }
    }
    
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area(){
            return Math.PI * (this.convertUnits(this.radius) ** 2);
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.convertUnits(this.radius)}`
        }
    }
    
    class Rectangle extends Figure {
        constructor(width, height, units){
            super(units);
            this.width = width;
            this.height = height;
        }
    
        get area() {
            return this.convertUnits(this.width) * this.convertUnits(this.height);
        }
        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.convertUnits(this.width)}, height: ${this.convertUnits(this.height)}`
        }
    }
    return {Figure, Circle, Rectangle}
}

// let c = new Circle(5); 
// console.log(c.area); // 78.53981633974483 
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5 

// let r = new Rectangle(3, 4, 'mm'); 
// console.log(r.area); // 1200 
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40 

// r.changeUnits('cm'); 
// console.log(r.area); // 12
// console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 

// c.changeUnits('mm'); 
// console.log(c.area); // 7853.981633974483 
// console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50