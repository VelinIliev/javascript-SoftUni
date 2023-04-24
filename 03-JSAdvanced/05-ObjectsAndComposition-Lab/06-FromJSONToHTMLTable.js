function fromJSONToHTMLTable(input) { 
    let result = ["<table>"]
    let data = JSON.parse(input); 

    let tableHead = "<tr>"
    Object.keys(data[0]).forEach(element => {
        tableHead += `<th>${escapeElements(element)}</th>`
    })
    tableHead += '</tr>'
    result.push(tableHead)

    data.forEach(element => {  
        let tableRow = "<tr>"
        for (const key in element) {
            tableRow += `<td>${escapeElements(element[key])}</td>`
        }
        tableRow += "</tr>"
        result.push(tableRow)
    });
    
    result.push('</table>')

    console.log(result.join("\n"))

    function escapeElements(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}


fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);