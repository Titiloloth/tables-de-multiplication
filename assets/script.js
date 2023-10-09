// Je crée une fonction maTable que je relie à la balise "table" en html

let maTable = document.createElement("table");

// J'indique que maTable est l'enfant de ma balise html "body"
document.body.appendChild(maTable);

// Je fais ma première boucle 
// J'indique que mon nombre de lignes commence par 1 puis s'arrête à 10
for (let nbRows = 1; nbRows <= 10; nbRows++) {
    // Je crée la fonction uneRow que je relie à la balise "tr"
    let uneRow = document.createElement("tr");
    // J'indique qu'il s'agit d'un enfant de la balise maTable
    maTable.appendChild(uneRow);
    // Je fais une nouvelle boucle où je traite cette fois-ci des cellules, qui commencent aussi par 1 et s'arrêtent à 10
    for (let nbcells = 1; nbcells <= 10; nbcells++) {
        // Je crée la fonction uneCellule que je relie à la balise html "td"
        let uneCellule = document.createElement("td");
        // J'indique que uneCellule est enfant de uneRow
        uneRow.appendChild(uneCellule);
        // J'indique que le texte à l'intérieur de ma cellule équivaudrait à une multiplication entre mon nombre de lignes et mon nombre de cellules
        uneCellule.innerText = (nbRows*nbcells).toString();

    }
}