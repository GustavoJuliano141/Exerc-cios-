// Gerando 4 notas aleatórias de 0 a 10
let n1 = Math.floor(Math.random() * 11);
let n2 = Math.floor(Math.random() * 11);
let n3 = Math.floor(Math.random() * 11);
let n4 = Math.floor(Math.random() * 11);

// Calculando a média
let media = (n1 + n2 + n3 + n4) / 4;

// Mostrando na tela
document.getElementById("elNota01").textContent = "N1: " + n1;
document.getElementById("elNota02").textContent = "N2: " + n2;
document.getElementById("elNota03").textContent = "N3: " + n3;
document.getElementById("elNota04").textContent = "N4: " + n4;
document.getElementById("elMediaNotas").textContent = "Média: " + media.toFixed(1);