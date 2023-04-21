//---------------
//keyof basicamente é um 'instanceof' para chaves de objetos
interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}
let chave: keyof Produto;
// let chave: "nome" | "produto";
chave = 'nome';
chave = 'preco';

//---------------
//typeof é nativo do JS, mas tbm temos o do TS, que serve para declarar o tipo
function coordenadas(x: number, y: number) {
  return { x, y };
}
let coord: typeof coordenadas; //nesse caso, 'coord' virou uma arrow function auutomaticamente
coord = (x: number, y: number) => {
  return { x, y };
};

//---------------
//querySelector (keyof no 'mundo real', quando utilizado em typeScript mais avançado)
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}
function selecionar<Chave extends keyof Elementos>( //'Chave' é um tipo genérico que extende 'Elementos'
  seletor: Chave, //o parâmetro da função é do tipo 'Chave'
): null | Elementos[Chave] { //o retorno da função será um dos valores no objeto 'Elemento', que possui a key correspondente à 'Chave'
  return document.querySelector(seletor);
}
selecionar('body');
