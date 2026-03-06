let numeroSorteado = parseInt(Math.random()*101);
let resultado;
let tipo;

console.log(numeroSorteado);

if (numeroSorteado % 2 === 0) {

    console.log("even");
    resultado = numeroSorteado ** 2;
    tipo = "par (quadrado)";

} else {

    console.log("odd");
    resultado = numeroSorteado ** 3;
    tipo = "ímpar (cubo)";

}

document.getElementById("elNumeroSorteado").textContent =
`Número sorteado: ${numeroSorteado}`;

document.getElementById("elResultado").textContent =
`Resultado: ${resultado}`;

document.getElementById("elTipo").textContent =
`Tipo: ${tipo}`;