//eu condiciono várias possibilidades de tipo para o seus métodos específicos
function typeGuard(value: any) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);

//------------
//outra forma de fazer typeGuard, é usando o método nativo do JavaScript "in"
const obj = {
  nome: 'Origamid',
};
if ('nome' in obj) {// 'nome' precisa ser passado como uma string, mesmo que seja uma chave
  console.log('Sim');
}

interface Produto {
  nome: string;
  preco: number;
}
async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
function handleProduto(data: Produto) {
  if ('preco' in data) {//para garantir que o preço só vai aparecer em tela, se as propriedades baterem
    document.body.innerHTML += `
      <p>Nome: ${data.nome}</p>
      <p>Preço: R$ ${data.preco + 100}</p>
    `;
  }
}
fetchProduto();
