function main(flavors, flavor1, flavor2) {
    let index1 = flavors.indexOf(flavor1)
    let index2 = flavors.indexOf(flavor2)
    return flavors.slice(index1, index2 + 1);
}

console.log(main(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));

console.log(main(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')
);