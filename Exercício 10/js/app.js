let numero1 = parseInt(Math.random()*101);
let numero2 = parseInt(Math.random()*101);

let soma = numero1 + numero2;

let resultado;
let tipo;

console.log(numero1, numero2);

if (soma > 100) {

    resultado = soma * 3;
    tipo = "Soma maior que 100 (multiplicado por 3)";

} else {

    resultado = soma * 5;
    tipo = "Soma menor ou igual a 100 (multiplicado por 5)";

}

document.getElementById("elNumero1").textContent =
`Número 1: ${numero1}`;

document.getElementById("elNumero2").textContent =
`Número 2: ${numero2}`;

document.getElementById("elSoma").textContent =
`Soma: ${soma}`;

document.getElementById("elResultado").textContent =
`Resultado: ${resultado}`;

document.getElementById("elTipo").textContent =
`Tipo: ${tipo}`;