function main(input) {
    let blog = {
        'users': {},
        'articles': {}
    }
    input.forEach(element => {
        if (element.split(" ")[0] === 'article') {
            blog['articles'][element.split(" ")[1]] = {'total': 0}
        } else if ((element.split(" ")[0] === 'user')){
            blog['users'][element.split(" ")[1]] = 0;
        } else if ((element.split(" ")[0]) in blog['users'] ){
            let data = element.split(" ");
            let user = data.shift();
            data.shift();
            data.shift();
            let article = data.shift().slice(0, -1);
            if (article in blog['articles']){
                let post = data.join(" ");
            post = post.split(", ");
            blog['articles'][article][user] = post;
            blog['articles'][article]['total'] += 1;
            blog['users'][user] += 1;
            }  
        }
    });
    let sorted = Object.entries(blog['articles']);
    sorted.sort((a, b) => b[1]['total'] - a[1]['total'])
    sorted.forEach(element => {
        console.log(`Comments on ${element[0]}`);
        let sorted_users = Object.entries(element[1]);
        sorted_users.sort((a, b) => {
            if (a[0] < b[0]) {
                return -1;
              }
              if (a[0] > b[0]) {
                return 1;
              }
              return 0;
        })
        sorted_users.forEach(data => {
            let user = data[0];
            let post = data[1];
            if (user !== 'total') {
                console.log(`--- From user ${user}: ${post.join(" - ")}`);
            }
        });
    });
}

// main(['user aUser123', 
//     'someUser posts on someArticle: NoTitle, stupidComment', 
//     'article Books', 
//     'article Movies', 
//     'article Shopping', 
//     'user someUser', 
//     'user uSeR4', 
//     'user lastUser', 
//     'uSeR4 posts on Books: I like books, I do really like them', 
//     'uSeR4 posts on Movies: I also like movies, I really do', 
//     'someUser posts on Shopping: title, I go shopping every day', 
//     'someUser posts on Movies: Like, I also like movies very much'])

main(['user Mark',
    'Mark posts on someArticle: NoTitle, stupidComment',
    'article Bobby',
    'article Steven',
    'user Liam',
    'user Henry',
    'Mark posts on Bobby: Is, I do really like them',
    'Mark posts on Steven: title, Run',
    'someUser posts on Movies: Like'])