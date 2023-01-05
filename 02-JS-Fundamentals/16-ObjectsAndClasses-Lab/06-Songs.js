function main(params) {
    let loops = params.shift();
    let typeList = params.pop();
    let songs = [];

    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < params.length; i++) {
        [type, name, time] = params[i].split("_");
        songs.push(new Song(type, name, time))
    }
    if (typeList === 'all') {
        for (let j = 0; j < songs.length; j++) {
            console.log(songs[j].name);
        }
    } else {
        for (let j = 0; j < songs.length; j++) {
            if (songs[j].type === typeList) {
                console.log(songs[j].name);
            }
        }
    }
}

main([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )