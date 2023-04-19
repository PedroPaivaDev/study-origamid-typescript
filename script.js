"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
somar(3, 4); //o "?" declara que o terceiro parâmetro é opcional
somar(3, 4, 1);
//tipagem de parâmetros em uma arrow function:
const subtrair = (a, b) => a - b;
subtrair(10, 2);
//--------------------
//VOID
//essa função não retorna nada, então ela "retorna void", no console resulta em "undefined"
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('black');
if (pintarTela('black')) {
    // Erro, a função pintarTela() retorna void, então ela não pode ser verificada
}
const btn = document.querySelector('button');
if (btn && btn.click()) {
    // Erro, o método click() retorna void, então ele não pode ser verificado
}
// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value) {
    if (typeof value === 'string') {
        return true;
    } //se eu declarar o "else" e um tipo de retorno, ela vai para de retornar undefined
}
console.log(isString('teste')); //retorna true
console.log(isString(0)); //retorna undefined
