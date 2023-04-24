function main(input) {
    let heroes = [];

    input.forEach(data => {
        let [hero, level, items] = data.split(" / ");
        items = items ? items.split(", ") : []
        heroes.push({"name": hero, "level": level * 1, "items": items})
    });
    return JSON.stringify(heroes)
}

console.log(
    main([
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']));