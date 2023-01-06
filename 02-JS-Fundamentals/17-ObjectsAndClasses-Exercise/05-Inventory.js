function main(input) {
    
    function sortDataBy (data, byKey){
        let sortedData;
        if(byKey == 'level'){
          sortedData = data.sort(function(a,b){
            let x = a.level;
            let y = b.level;
            if(x>y){return 1;}
            if(x<y){return -1;}
            return 0;
          });
        }
        return sortedData;
      }

    let heroes = []
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(" / ");
        let name = data.shift();
        let level = data.shift() * 1;
        let items = data.shift().split(", ");
        heroes.push({'Hero': name, 'level': level, 'items': items})
    }
    heroes = sortDataBy(heroes, 'level')
    for (let i = 0; i < heroes.length; i++) {
        let name = heroes[i].Hero;
        let level = heroes[i].level;
        let items = heroes[i].items;
        console.log(`Hero: ${name}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items.join(", ")}`);
    }
}

main([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

