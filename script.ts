//--------------------------------------------------------
//Duck Typing e Partial
interface Produto { //mesmo que um objeto tenha mais propriedades além das que constam na interface, quando usado em parâmetros de funções ou retornos, o objeto não deixa de ser do mesmo tipo que ela
  nome: string;
  quantidade: number;
}

// Partial<Produto> é o mesmo que colocar como opcional todas as propriedades de uma interface
// interface Produto {
//   nome?: string;
//   quantidade?: number;
// }

const produto1 = {
  nome: 'Notebook',
  quantidade: 10,
  cor: 'azul',
};

const produto2 = {
  nome: 'Geladeira',
  quantidade: 4,
  freezer: true,
};

const servico1 = {
  nome: 'Instalação',
};

function mostrarQuantidade(produto: Produto) {
  console.log(produto.quantidade + 20);
}

// function mostrarQuantidade(produto: Partial<Produto>) {
//   // erro, quantidade pode ser undefined
//   console.log(produto.quantidade + 20);
// }

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);

// erro, pois não possui quantidade
mostrarQuantidade(servico1); //então pode ter propriedades a mais, mas não pode ter a menos que a interface


//--------------------------------------------------------
//[key: string]: unknown;
interface Post {
  titulo: string;
  visualizacoes: number;
  tags: string[];
  [key: string]: unknown; //permite que seja inseridas quantas propriedades eu quiser, na criação de um objeto tipado com esta interface
}

const artigo: Post = {
  titulo: 'Como aprender HTML',
  visualizacoes: 3000,
  tags: ['Front End', 'HTML'],
  autor: 'André', //se não fosse o '[key: string]: unknown;', o TS não aceitaria essa propriedade na criação desse objeto, já que ele está tipado com a interface 'Post'
};

artigo.autor;
artigo.descricao; //o problema é que agora a interface 'Post' permite usar/criar qualquer propriedade na chamada de propriedades do objeto

function handlePost(post: Post) {
  document.body.innerHTML += `${post.autor}`;
}

handlePost(artigo);


//----------------------------------------------------------
//record
type ObjetoLiteral1 = {
  [key: string]: unknown; //é melhor usar unknown do que usar o any, pq agora o TS vai acusar que eu não estou passando objetos como parâmetro para a função
};
//ou podemos usar o 'Record', que é mais flexível
type ObjetoLiteral2 = Record<string, unknown>; //posso usar assim, ou então:
type ObjetoLiteral3 = Record<"titulo" | "autor", unknown>; //assim ele vai me dar apenas essas duas opções quando eu estiver chamando o objeto

function mostrarTitulo(obj: ObjetoLiteral2) {
  if ('titulo' in obj) {
    console.log(obj.titulo);
  }
}

// Erros:
// mostrarTitulo("string");
// mostrarTitulo(200);
// mostrarTitulo([1, 2]);
// mostrarTitulo(null);
// mostrarTitulo(undefined);
mostrarTitulo({
  titulo: 'André',
});
