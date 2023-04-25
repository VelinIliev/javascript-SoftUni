function editElement(element, replacment, replacer) {
    let text = element.textContent;
    while (text.includes(replacment)) {
        text = text.replace(replacment, replacer)
    }
    element.textContent = text;
}