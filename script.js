"use strict";
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
function mostrarQuantidade(produto) {
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
const artigo = {
    titulo: 'Como aprender HTML',
    visualizacoes: 3000,
    tags: ['Front End', 'HTML'],
    autor: 'André', //se não fosse o '[key: string]: unknown;', o TS não aceitaria essa propriedade na criação desse objeto, já que ele está tipado com a interface 'Post'
};
artigo.autor;
artigo.descricao; //o problema é que agora a interface 'Post' permite usar/criar qualquer propriedade na chamada de propriedades do objeto
function handlePost(post) {
    document.body.innerHTML += `${post.autor}`;
}
handlePost(artigo);
function mostrarTitulo(obj) {
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
