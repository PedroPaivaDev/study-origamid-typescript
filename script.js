"use strict";
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: false,
};
preencherDados(computador);
preencherDados({
    nome: 'Notebook',
    preco: 2500,
    teclado: true,
});
