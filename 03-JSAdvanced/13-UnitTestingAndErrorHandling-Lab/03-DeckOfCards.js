function printDeckOfCards(cards) {
    
    function createCard (face, suit){
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', "D", "C"]
        let cards = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }
    
        if (!faces.includes(face) || !suits.includes(suit)) {
            return "Error"
        }
    
        return `${face}${cards[suit]}`
    }
    let output = [];
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let face = card.slice(0, -1);
        let suit = card.slice(-1);
        let newCard = createCard(face, suit);
        if (newCard === "Error") {
            output = [`Invalid card: ${card}`];
            break;
        } else {
            output.push(newCard)
        }
    }
    console.log(output.join(" "))
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])