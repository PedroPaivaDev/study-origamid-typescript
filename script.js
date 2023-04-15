"use strict";
const produto = 'Livro';
const nintendo = {
    nome: 'Nintendo',
    preco: '2000',
};
const preco = 200;
const barato = preco < 400 ? true : "produto caro";
const carro = {
    marca: 'Audi',
    portas: 5,
};
function somar(a, b) {
    return a + b;
}
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
console.log(somar(4, 10));
console.log(transformarPreco(nintendo));
