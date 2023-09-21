const camisa = parseFloat(prompt("Ingrese el valor de tu camisa"));
const pantalon = parseFloat(prompt("ingrese el costo de su pantalon"));
var Telefono = 900000;

const desca = camisa*14/100;
const despa = pantalon*14/100;

const camisaVT = desca + camisa;
const pantalonVT = despa + pantalon; 

const sub = camisaVT+pantalonVT; 
const tot = camisa+pantalon
const gast = camisa+pantalon+Telefono;

parseFloat(prompt("Subtotal:",sub));
parseFloat(prompt("Total:",tot));
parseFloat(prompt("El señor Rafael se gasto en total:",gast));