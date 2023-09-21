const kilogramos = parseFloat(prompt("Ingrese su peso en kilogramos"));
const altura = parseFloat(prompt("Ingrese su altura en metros cuadrados"));

const imc = kilogramos / altura; 

console.log ("su indice de masa corporal es:", imc);