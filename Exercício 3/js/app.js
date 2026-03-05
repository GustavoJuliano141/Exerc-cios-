let temperaturaC = parseInt(Math.random() * 101);
let temperaturaF = parseInt((temperaturaC * 9 / 5) + 32);

console.log("Temperatura em C:", temperaturaC);
console.log("Temperatura em F:", temperaturaF);

document.getElementById("elCelcius").textContent = `Temperatura em Celsius: ${temperaturaC}°C`;

document.getElementById("elFahrenheit").textContent = `Temperatura em Fahrenheit: ${temperaturaF}°F`;