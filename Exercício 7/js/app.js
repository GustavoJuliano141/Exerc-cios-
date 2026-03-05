let pesoAtual = parseInt(Math.random() * 201);

let pesoMais20 = parseInt((pesoAtual * 0.2) + pesoAtual);
let pesoMenos20 = parseInt(pesoAtual - (pesoAtual * 0.2));

console.log("Peso inicial:", pesoAtual);
console.log("Peso +20%:", pesoMais20);
console.log("Peso -20%:", pesoMenos20);

document.getElementById("elPeso").textContent =
`Peso atual: ${pesoAtual} kg`;

document.getElementById("elEmagreceu").textContent =
`Peso com aumento de 20%: ${pesoMais20} kg`;

document.getElementById("elEngordou").textContent =
`Peso com redução de 20%: ${pesoMenos20} kg`;