const button = document.querySelector('button');
const config = localStorage.getItem('config');

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();
button?.click();

console.log('null',typeof null); // retorna 'object', mas é um bug mantido no JS, para não quebrar códigos antigos, pois o 'null' é um tipo primitivo.

let total;
console.log('total',total); // undefined

const data = {};
console.log('nome',data.nome); //undefined

interface Product {
  nome?: string;
}

const livro: Product = {};
const jogo: Product = {
  nome: 'Ragnarok',
};

console.log(livro.nome?.toLowerCase()); //undefined
console.log(jogo.nome?.toLowerCase()); //ragnarok
