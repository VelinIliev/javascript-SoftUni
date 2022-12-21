function main(params) {
    let actor_name = params[0];
    let accademy_points = params[1] * 1;
    for (let i = 3; i < params.length; i++) {
        if (i % 2 == 0){
            
            accademy_points += (params[i] * params[i-1].length) / 2;
        }
        if (accademy_points > 1250.5) {
            console.log(`Congratulations, ${actor_name} got a nominee for leading role with ${(accademy_points).toFixed(1)}!`);
            break;
        }
    }
    
    if (accademy_points <= 1250.5 ) {
        console.log(`Sorry, ${actor_name} you need ${(1250.5 - accademy_points).toFixed(1)} more!`);
    }
}

main(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
main(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", 
        "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
