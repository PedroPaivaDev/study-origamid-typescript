//@ts-check
const frase = 'Front End';
const total = 100.05;
const empresas = ['Apple', 'Microsoft'];
const body = document.body;
const button = document.querySelector('button');

console.log(frase.toLowerCase());
console.log(total.toFixed())

empresas.map((empresa) => console.log(empresa.toUpperCase()));

body.style.background = '#aaa';

button?.click()

// const operacao = true + 'teste' - (4 * {}) / [];
const strings = 'Front ' + 'End';
const numbers = 100 + 200;
// console.log(operacao, strings, numbers);