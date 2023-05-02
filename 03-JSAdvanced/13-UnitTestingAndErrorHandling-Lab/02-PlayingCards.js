function main(face, suit) {
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (!faces.includes(face) || !(suit in suits)) {
        throw new Error('Error');
    }

    return `${face}${suits[suit]}`
}

console.log(main('A', 'S'));
console.log(main('10', 'H'));

