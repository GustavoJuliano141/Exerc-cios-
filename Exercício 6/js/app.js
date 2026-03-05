let horas = parseInt(Math.random() * 251);
let dependentes = parseInt(Math.random() * 7);

let pagamento = (horas * 80) + dependentes;

let descontoINSS = pagamento / 91.5;
let descontoIR = pagamento / 95;

let salarioLiquido = pagamento - descontoINSS - descontoIR;

console.log(horas);
console.log(dependentes);
console.log(pagamento);
console.log(descontoINSS, descontoIR, salarioLiquido);

document.getElementById("elHorasTrabalhadas").textContent =
`Horas trabalhadas: ${horas}`;

document.getElementById("elDependentesFuncionario").textContent =
`Dependentes: ${dependentes}`;

document.getElementById("elSalario").textContent =
`Salário calculado: ${pagamento}`;

document.getElementById("elInss").textContent =
`Desconto INSS: ${descontoINSS}`;

document.getElementById("elIr").textContent =
`Desconto IR: ${descontoIR}`;

document.getElementById("elSalarioBruto").textContent =
`Salário final: ${salarioLiquido}`;