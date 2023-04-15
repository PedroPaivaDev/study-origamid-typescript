const produto: string = 'Livro';
const nintendo = {
  nome: 'Nintendo',
  preco: '2000',
}
const preco: number = 200;
const barato = preco < 400 ? true : "produto caro";

const carro: {
  marca: string;
  portas: number;
} = {
  marca: 'Audi',
  portas: 5,
};

function somar(a:number, b:number) {
  return a + b;
}

function transformarPreco(produto: {nome:string; preco:string}) {
  produto.preco = 'R$ ' + produto.preco;
  return produto;
}

console.log(somar(4,10));
console.log(transformarPreco(nintendo));