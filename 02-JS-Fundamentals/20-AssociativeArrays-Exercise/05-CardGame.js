function main(input) {
    let players = {};
    input.forEach(el => {
        let data = el.split(": ");
        let name = data[0];
        let cards = data[1].split(", ");
        if (name in players) {
            
        } else {
            players[name] = [];
        }
        cards.forEach(card => {
            if (players[name].includes(card)) {

            } else {
                players[name].push(card)
            }
        });
    });
    for (let key in players) {
        let sum = 0;
        
        players[key].forEach(card => {
            let number = '';
            let multiplier = '';
            for (let i = 0; i < card.length; i++) {
                if (/[0-9]/.test(card[i])) {
                    number += card[i]
                } else if (/[J,Q,K,A]/.test(card[i])) {
                    if (card[i] === "J") {
                        number = 11;
                    } else if (card[i] === "Q") {
                        number = 12;
                    } else if (card[i] === "K") {
                        number = 13;
                    } else if (card[i] === "A") {
                        number = 14;
                    }
                } else if(/[S,H,D,C]/.test(card[i])) {
                    if (card[i] === "S") {
                        multiplier = 4;
                    } else if (card[i] === "H") {
                        multiplier = 3;
                    } else if (card[i] === "D") {
                        multiplier = 2;
                    } else if (card[i] === "C") {
                        multiplier = 1;
                    }
                }
            }
            sum += number * multiplier;
            
        });
        console.log(`${key}: ${sum}`);
    }
}

main([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );