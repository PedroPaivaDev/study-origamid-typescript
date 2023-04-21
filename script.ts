//-------------
//Intersection (&) só funciona usando type
//para interface usamos o extends
type Produto = {
  preco: number;
};
type Carro = {
  rodas: number;
  portas: number;
  preco: number;//não precisa declarar esse tipo, pois ele já está na interface 'Produto'
};
function handleProdutoCarro(dados: Carro & Produto) {
  dados.rodas;
  dados.portas;
  dados.preco;
}
handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

//-------------
//Adicionando propriedades em interfaces e types:
// Com Interface
interface InterfaceCarro {
  rodas: number;
  portas: number;
}
interface InterfaceCarro {// basta repetir o nome da interface para adicionar uma propriedade
  preco: number;
}
const dado1: InterfaceCarro = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};
// Com Type
type TipoCarro = {
  rodas: number;
  portas: number;
};
type TipoCarroComPreco = TipoCarro & {//basta usar o intersection (&) para adicionar direto
  preco: number;
};
const dado2: TipoCarroComPreco = {
  preco: 20000,
  rodas: 4,
  portas: 5,
};

//-------------
//window
interface Window {// desse modo, eu posso usar a classe nativa Window, para ter acesso global à tipagem do 'id do usuário de um app'
  userId: number;
}
window.userId = 200;
console.log(window.userId);
