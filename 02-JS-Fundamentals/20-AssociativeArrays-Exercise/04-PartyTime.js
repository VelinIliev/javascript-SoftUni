function main(input) {
    let vip = [];
    let guests = [];
    let party = false
    input.forEach(element => {
        let guest = element;
        if (guest === "PARTY") {
            party = true;
        }
        if (party === false) {
            if (isNaN (guest[0] * 1) ) {
                guests.push(guest)
            } else {
                vip.push(guest)
            };
        }
        if (party === true) {
            if (vip.includes(guest)) {
                let index = vip.indexOf(guest);
                vip.splice(index, 1)
            } else if (guests.includes(guest)) {
                let index = guests.indexOf(guest);
                guests.splice(index, 1)
            }
        }
    });
    let not_comming =  vip.length + guests.length;
    console.log(not_comming);
    if (vip.length > 0) {
        console.log(vip.join("\n"));
    }
    if (guests.length > 1) {
        console.log(guests.join("\n"));
    }
}

main(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
main(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
)