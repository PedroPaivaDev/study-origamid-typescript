interface Produto {
  nome: string;
  preco: number;
  teclado: boolean;
}

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim' : 'não'}</p>
  </div>
  `;
}

const computador: Produto = {
  nome: 'Computador',
  preco: 2000,
  teclado: false,
}

preencherDados(computador);

preencherDados({
  nome: 'Notebook',
  preco: 2500,
  teclado: true,
});

type NumberOrString = number | string; //posso definir tipos primitivos
type Categorias = 'design' | 'codigo' | 'descod';// posso definir também strings como tipos
