import { Produto, URL_BASE } from './global.js';
import pluginSlide from './pluginSlide.js';

pluginSlide('div'); //precisou de import, pq o seu arquivo é um 'module', ele tem pelo menos um 'export' dentro dele

console.log(URL_BASE); //não precisou de import, por estar em um arquivo global

const livro: Produto = { //não precisou de import, por estar em um arquivo global
  nome: 'O Senhor dos Anéis',
  preco: 200,
};
