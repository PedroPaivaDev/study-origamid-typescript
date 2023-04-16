"use strict";
const numeros = [10, 30, 40, 5, 3, 30];
const valores = [10, 'Taxas', 40, 'Produto', 3, 30];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
const f1 = maiorQue10(numeros);
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
const f2 = filtrarValores(valores);
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120],
];
console.log(f1);
console.log(f2);
