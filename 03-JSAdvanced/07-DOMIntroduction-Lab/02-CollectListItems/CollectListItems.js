function extractText() {
    const items = document.getElementById('items');
    const result = document.getElementById('result')


    let content = items.textContent.trim();
    while (content.includes("  ")){
        content = content.replace("  ", "")
    }
    result.value = content
}