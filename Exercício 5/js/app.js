let valorBase = parseInt(Math.random() * 101);
let valorAltura = parseInt(Math.random() * 101);

let resultadoArea = (valorBase + valorAltura) / 2;

console.log("Base:", valorBase);
console.log("Altura:", valorAltura);
console.log("Área:", resultadoArea);

document.getElementById("elBase").textContent =
`Valor da Base: ${valorBase}`;

document.getElementById("elAltura").textContent =
`Valor da Altura: ${valorAltura}`;

document.getElementById("elArea").textContent =
`Área Calculada: ${resultadoArea}`;