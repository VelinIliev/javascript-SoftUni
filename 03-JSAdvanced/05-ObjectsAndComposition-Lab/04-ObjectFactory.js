function factory(library, orders) {
    let result = [];

    orders.forEach(element => {
        let name = element.template.name
        let currentOrded = { name }
        // console.log(element.template.name);
        for (const key in element.parts) {
            currentPart = element.parts[key]
            currentFunction = library[element.parts[key]];
            currentOrded[currentPart] = currentFunction;
        }
        result.push(currentOrded)
    });
    return result;
}

const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);
    },
    scan: function () {
    console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
    };
    const orders = [
    {
    template: { name: 'ACME Printer'},
    parts: ['print']
    },
    {
    template: { name: 'Initech Scanner'},
    parts: ['scan']
    },
    {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print']
    },
    {
    template: { name: 'BoomBox Stereo'},
    parts: ['play']
    }
    ];
    const products = factory(library, orders);
    console.log(products);