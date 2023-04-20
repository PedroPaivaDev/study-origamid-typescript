"use strict";
//---------------
//'as'
const video = document.querySelector('.player');
// video.volume; // mostra os métodos disponíveis na produção, mas no runtime aponta um erro, pois não existe volume de null
const link = document.querySelector('.link');
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    // return response.json() as Promise<Produto>; //referenciando o retorno da Promise como uma interface 'Produto', eu não preciso usar o 'as Produto' em nenhuma das handleProduto.
    return response.json(); //devido a Promise não ser tipada aqui, eu preciso tipar com o 'as' em todas as handleProduto.
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    console.log(produto.nome);
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    console.log(produto.nome);
}
async function handleProduto3() {
    const produto = await fetchProduto();
    console.log(produto.nome);
}
handleProduto1();
handleProduto2();
handleProduto3();
//---------------
//'non-null'
const videoA = document.querySelector('video'); //eu estou afirmando que o videoA nunca será null. Ou seja, eu tenho certeza que o elemento vai estar no HTML
// videoA.volume; // mas aí ocorre o erro no runtime, pois não existe volume de null (videoA)
document.querySelector('a').href = 'https://www.origamid.com'; //esse funciona, pq realmente tem um anchor no html
//---------------
//'Outras Sintaxes'
const video1 = document.querySelector('.player');
const video2 = document.querySelector('.player');
const video3 = document.querySelector('.player'); // essa forma seria a mais segura, pois estamos apenas usando um tipo genérico do querySelector
const video4 = document.querySelector('.player');
video1.volume;
video2.volume;
video3?.volume;
video4.volume;
