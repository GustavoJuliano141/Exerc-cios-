// Gera um número aleatório entre 0 e 100
const numeroSorteado = Math.floor(Math.random() * 101);

// Criando um objeto com os cálculos
const resultados = {
    sucessor: numeroSorteado + 1,
    antecessor: numeroSorteado - 1,
    dobro: numeroSorteado * 2,
    metade: numeroSorteado / 2
};

// Exibindo no console
console.log("Número Sorteado:", numeroSorteado);
console.log("Sucessor:", resultados.sucessor);
console.log("Antecessor:", resultados.antecessor);
console.log("Dobro:", resultados.dobro);
console.log("Metade:", resultados.metade);

// Atualizando o HTML
document.getElementById("elNumeroSorteado").textContent = `Número Sorteado: ${numeroSorteado}`;
document.getElementById("elSucessor").textContent = `Sucessor: ${resultados.sucessor}`;
document.getElementById("elAntecessor").textContent = `Antecessor: ${resultados.antecessor}`;
document.getElementById("elDobro").textContent = `Dobro: ${resultados.dobro}`;
document.getElementById("elMetade").textContent = `Metade: ${resultados.metade}`;