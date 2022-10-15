const btnBasseTerre = document.getElementById("basseTerre");
const btnBouillante = document.getElementById("bouillante");
const btnSaintClaude = document.getElementById("saintClaude");

const tBody = document.getElementById("tBody");

btnBasseTerre.addEventListener("click",function() {
    tBody.innerHTML = '<tr><td rowspan="3"></td><th colspan="3">Eau</th><th>Assainissement</th></tr><tr><td rowspan="2">Part fixe</td><td colspan="2">Prix au m3</td><td rowspan="3">Géré par Véolia</td></tr><tr><td>0 à 15000 m3</td><td>Supérieur à 15000 m<sup>3</sup></td></tr><tr><td>Basse-Terre</td><td>128,40 €</td><td>0,7580 €</td><td>0,4664 €</td></tr>'; 
});

btnBouillante.addEventListener("click",function() {
    tBody.innerHTML ='<tr><td rowspan="3"></td><th colspan="2">Eau</th><th colspan="2">Assainissement</th></tr><tr><td  rowspan="2">Part fixe</td><td  rowspan="2">Prix au m3</td><td  rowspan="2">Part fixe</td><td  rowspan="2">Prix au m3</td></tr><tr></tr><tr><td>Baillif</td><td rowspan="3">40.00 €</td><td rowspan="3">1.10 €</td><td> 30.00 €</td><td>1.00 €</td></tr><tr><td>Bouillante</td><td  colspan="2" rowspan="2">Non collectif</td></tr><tr><td>Gourbeyre</td></tr>';
});

btnSaintClaude.addEventListener("click",function() {
    tBody.innerHTML = '<tr><td rowspan="2"></td><th colspan="2">Eau</th><th>Assainissement</th></tr><tr><td>Part fixe</td><td >Prix au m3</td><td >Prix au m3</td></tr><tr><td>Saint-Claude</td><td >37,87 €</td><td >0,73 €</td><td >0,91 €</td></tr>';
});

btnBasseTerre.click();
btnBasseTerre.focus();