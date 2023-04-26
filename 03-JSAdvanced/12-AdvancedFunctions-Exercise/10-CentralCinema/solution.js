function solve() {
    const title = document.querySelector('#container [placeholder="Name"]');
    const hall = document.querySelector('#container [placeholder="Hall"]');
    const price = document.querySelector('#container [placeholder="Ticket Price"]');
    const onScreenBtn = document.querySelector('#container button');
    const moviesList = document.querySelector('#movies ul');
    const archiveList = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');

    clearBtn.addEventListener("click", (e) => {
        e.preventDefault();
        archiveList.innerHTML = ''
    })

    onScreenBtn.addEventListener("click", (e) => {
        e.preventDefault();

        if (title.value && hall.value && price.value && !isNaN(Number(price.value))) {
            
            let liEl = document.createElement("LI");
            moviesList.appendChild(liEl);

            let titleEl = document.createElement("SPAN");
            titleEl.textContent = title.value;
            liEl.appendChild(titleEl);

            let hallEl = document.createElement("STRONG");
            hallEl.textContent = `Hall: ${hall.value}`;
            liEl.appendChild(hallEl);

            let divEl = document.createElement('DIV');
            liEl.appendChild(divEl);

            let priceEl = document.createElement("STRONG");
            priceEl.textContent = (price.value * 1).toFixed(2);
            divEl.appendChild(priceEl);

            let inputEl = document.createElement('INPUT');
            inputEl.placeholder = 'Tickets Sold';
            divEl.appendChild(inputEl);

            let archiveBtn = document.createElement("BUTTON");
            archiveBtn.textContent = 'Archive';
            divEl.appendChild(archiveBtn);

            archiveBtn.addEventListener("click", archiveMovie);

            title.value = '';
            hall.value = '';
            price.value = ''
        }        
    }) 

    function archiveMovie(e) {
        e.preventDefault();
        let currentMovie = e.currentTarget.parentNode.parentNode;
        let ticketsSold = e.currentTarget.parentNode.querySelector('input');

        if (ticketsSold.value && !isNaN(Number(ticketsSold.value))) {

            let profit = currentMovie.querySelector('strong')
            let price = currentMovie.querySelector("div strong").textContent;
        
            currentMovie.querySelector("div").remove();

            let deleteBtn = document.createElement("BUTTON");
            deleteBtn.textContent = 'Delete'
            currentMovie.appendChild(deleteBtn);

            currentMovie.remove();

            deleteBtn.addEventListener("click", deleteMovie);
            archiveList.appendChild(currentMovie)
            
            
            profit.textContent = `Total amount: ${(price * ticketsSold.value).toFixed(2)}`
        } 
    }

    function deleteMovie(e) {
        e.currentTarget.parentNode.remove()
    }
}