function toggle() {
    const button = document.querySelector('.button');
    const extra = document.getElementById("extra");

    if (button.textContent === 'More'){
        button.textContent = "Less";
        extra.style.display = 'block';
    } else {
        button.textContent = "More"
        extra.style.display = 'none';
    }
}