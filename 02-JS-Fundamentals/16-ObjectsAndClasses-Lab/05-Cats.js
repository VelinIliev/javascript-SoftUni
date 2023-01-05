function main(params) {
    let cats = []
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i = 0; i < params.length; i++) {
        [name, age] = params[i].split(" ");
        cats.push(new Cat(name, age))
    }
    for (let j = 0; j < cats.length; j++) {
        cats[j].meow()
    }
}

main(['Mellow 2', 'Tom 5'])