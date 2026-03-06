let valorA = parseInt(Math.random() * 10);
let valorB = parseInt(Math.random() * 10);
let valorC = parseInt(Math.random() * 10);

let variavelX = valorA;

let parte1 = valorA * (variavelX ** 2);
let parte2 = valorB * variavelX;

let resultadoTotal = parte1 + parte2 + valorC;

document.getElementById("elNumero1").textContent =
`Valor A: ${valorA}`;

document.getElementById("elNumero2").textContent =
`Valor B: ${valorB}`;

document.getElementById("elNumero3").textContent =
`Valor C: ${valorC}`;

document.getElementById("resultado").textContent =
`Cálculo: ${valorA} * (${variavelX}²) = ${parte1}`;

document.getElementById("equacao").textContent =
`Resultado final: ${parte1} + ${parte2} + ${valorC} = ${resultadoTotal}`;

console.log("Valores:", valorA, valorB, valorC);
console.log("X:", variavelX);
console.log("Resultado:", resultadoTotal);