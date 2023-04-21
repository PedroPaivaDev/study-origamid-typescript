"use strict";
let chave;
// let chave: "nome" | "produto";
chave = 'nome';
chave = 'preco';
//---------------
//typeof é nativo do JS, mas tbm temos o do TS, que serve para declarar o tipo
function coordenadas(x, y) {
    return { x, y };
}
let coord; //nesse caso, 'coord' virou uma arrow function auutomaticamente
coord = (x, y) => {
    return { x, y };
};
function selecionar(//'Chave' é um tipo genérico que extende 'Elementos'
seletor) {
    return document.querySelector(seletor);
}
selecionar('body');
