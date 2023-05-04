class List {
    constructor() {
        this.collecton = [];
        this.size = 0;
    }
    sortList(){
        this.collecton = this.collecton.sort((a,b) => a - b)
    }

    add(element){
        this.collecton.push(element);
        this.sortList();
        this.size = this.collecton.length;
    }

    remove(index){
        if (index >= 0 && index < this.size){
            this.collecton.splice(index, 1);
            this.size = this.collecton.length;
        } else {
            throw new Error('Invalid index!');
        }
    }

    get(index) {
        if (index >= 0 && index < this.size){
            return this.collecton[index]
        } 
        throw new Error('Invalid index!');
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
