function main(input) {
    let movies = []
    for (let i = 0; i < input.length; i++) {
        if ((input[i].split(" ")).includes('addMovie')) {
            let data = input[i].split(" ");
            data.shift();
            let name = data.join(" ");
            movies.push({"name":name})
        } else if ((input[i].split(" ")).includes('directedBy')) {
            let data = input[i].split(" ");
            let index = data.indexOf('directedBy')
            let movie_name = (data.splice(0, index)).join(" ");
            data.shift();
            let director_name = (data).join(" ");;
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movie_name) {
                    movies[i].director = director_name
                }
            } 
        } else if ((input[i].split(" ")).includes('onDate')) {
            let data = input[i].split(" ");
            let index = data.indexOf('onDate')
            let movie_name = (data.splice(0, index)).join(" ");
            data.shift();
            let date = data.join("")
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].name === movie_name) {
                    movies[i].date = date
                }
            }
        }
    }
    for (let i = 0; i < movies.length; i++) {
        if (Object.keys(movies[i]).length === 3) {
            console.log(JSON.stringify(movies[i]));
        }
    }
}

main([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )