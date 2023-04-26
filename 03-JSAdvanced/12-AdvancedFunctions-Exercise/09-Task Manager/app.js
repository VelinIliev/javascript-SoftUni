function solve() {
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById("date");
    const addBtn = document.getElementById('add');
    const open = document.querySelector(".orange");
    const openList = open.parentNode.parentNode.querySelector('div:nth-child(2)');
    const inProgress = document.getElementById('in-progress');
    const complete = document.querySelector('section div .green');
    const completeList = complete.parentNode.parentNode.querySelector('div:nth-child(2)');

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (task.value && description.value && date.value) {
            
            let articleEl = document.createElement("ARTICLE");
            openList.appendChild(articleEl);

            let taskEl = document.createElement("H3");
            taskEl.textContent = task.value;
            articleEl.appendChild(taskEl);

            let descrEl = document.createElement("P");
            descrEl.textContent = `Description: ${description.value}`
            articleEl.appendChild(descrEl);

            let dateEl = document.createElement("P");
            dateEl.textContent = `Due Date: ${date.value}`
            articleEl.appendChild(dateEl);

            let buttonsEl = document.createElement("DIV");
            buttonsEl.className = 'flex';
            articleEl.appendChild(buttonsEl);

            let startBtn = document.createElement("BUTTON");
            startBtn.className = "green";
            startBtn.textContent = 'Start';
            buttonsEl.appendChild(startBtn)

            let deleteBtn = document.createElement("BUTTON");
            deleteBtn.className = "red";
            deleteBtn.textContent = 'Delete';
            buttonsEl.appendChild(deleteBtn);

            startBtn.addEventListener("click", startFunc);
            deleteBtn.addEventListener("click", deleteFunc);

            task.value = '';
            description.value = '';
            date.value = '';
        }

        function startFunc(e) {
            let currentArticle = e.currentTarget.parentNode.parentNode;
            currentArticle.querySelector('.green').remove();
            let buttons = currentArticle.querySelector('.flex');

            let finishBtn = document.createElement("BUTTON");
            finishBtn.className = "orange";
            finishBtn.textContent = 'Finish';
            buttons.appendChild(finishBtn);

            finishBtn.addEventListener("click", finishFunc);

            inProgress.appendChild(currentArticle);
        }

        function deleteFunc(e) {
            e.currentTarget.parentNode.parentNode.remove();            
        }

        function finishFunc(e) {
            let currentArticle = e.currentTarget.parentNode.parentNode;
            currentArticle.querySelector('.flex').remove();
            completeList.appendChild(currentArticle)
        }
    })
}