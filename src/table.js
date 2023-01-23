exports.refTable = function () {
    const fs = require('fs');
    let fileText = fs.readFileSync('references.json');
    let data = JSON.parse(fileText);

    var table = "<table>";
    table += `<tr>
                <th scope="col"></th>
                <th scope="col">Author</th>
                <th scope="col">Title</th>
                <th scope="col">Section</th>
                <th scope="col">Sub-section</th>
            </tr>`;
    var tr = "";
    for(let i = 0; i < 44; i++) {
    tr += "<tr>";
    tr += `<th scope="row">${data.references[i].id}</td>`;
    tr += `<td>${data.references[i].author}</td>`;
    tr += `<td>${data.references[i].bib}</td>`;
    tr += `<td>${data.references[i].part}</td>`;
    tr += `<td>${data.references[i].subpart}</td>`;
    tr += "</tr>"
    }
    table += tr + "</table>";
    return table
}