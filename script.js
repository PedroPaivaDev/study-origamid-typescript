"use strict";
// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela
async function fetchVendas0() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const json = await response.json();
    somaVendas(json);
}
function somaVendas(data) {
    let soma = 0;
    data.forEach((item) => {
        soma += item[1];
    });
    document.body.innerHTML = `<h1>O somatório das vendas é de R$ ${soma.toFixed(2)}</h1>`;
}
fetchVendas0();
//----------------
//RESOLUÇÃO do professor
async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
}
function somarVendas(vendas) {
    // Com for loop
    let total1 = 0;
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total1: R$ ${total1}</p>`;
    // Com reduce
    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    }, 0);
    document.body.innerHTML += `<p>Total2: R$ ${total2}</p>`;
}
fetchVendas();
