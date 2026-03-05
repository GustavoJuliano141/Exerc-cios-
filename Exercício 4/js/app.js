let salarioBase = 1500;

let quantidadeVendas = parseInt(Math.random() * 201);

let valorComissao = quantidadeVendas * 35;

let pagamentoFinal = salarioBase + valorComissao;

console.log("Salário base:", salarioBase);
console.log("Comissão:", valorComissao);
console.log("Total:", pagamentoFinal);

document.getElementById("elSalario").textContent =
`Salário Base: R$ ${salarioBase}`;

document.getElementById("elComissao").textContent =
`Valor de Comissão: R$ ${valorComissao}`;

document.getElementById("elTotal").textContent =
`Total Recebido no Mês: R$ ${pagamentoFinal}`;