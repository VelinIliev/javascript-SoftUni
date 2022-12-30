function main(input) {
    let accounts = [];
    for (let i = 0; i < input.length; i++) {
        if (i === 0 ){
            accounts = input[i].split(" ");
        } else {
            let command = input[i].split(" ")[0];
            let game = input[i].split(" ")[1]
            if (command === "Play!") {
                break;
            } else if (command === 'Install') {
                if (accounts.includes(game)) {
                    
                } else {
                    accounts.push(game)
                }
            } else if (command === "Uninstall") {
                if (accounts.includes(game)) {
                    accounts = accounts.filter(item => item !== game)
                }
            } else if (command === "Expansion") {
                temp = game.split("-");
                game = temp[0];
                let expansion = temp[1]
                if (accounts.includes(game)) {
                    let index = accounts.indexOf(game)
                    accounts.splice(index + 1, 0, `${game}:${expansion}`);
                }
            } else if (command === 'Update') {
                if (accounts.includes(game)){
                    accounts = accounts.filter(item => item !== game);
                    accounts.push(game)
                }

            }
        }
    }
    console.log(accounts.join(" "));
}

main(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
 );
 main(['CS WoW Diablo',
 'Uninstall XCOM',
 'Update PeshoGame',
 'Update WoW',
 'Expansion Civ-V',
 'Play!']
 )