function getArticleGenerator(articles) {

    const content = document.getElementById('content');

    function showNext() {

        let article = articles.shift()

        if (article !== undefined){
            let articleEl = document.createElement("ARTICLE");
            articleEl.textContent = article;
            content.appendChild(articleEl);
        }
    }
    
    return showNext
}
