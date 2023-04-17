"use strict";
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome);
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'J. R. R. Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const produto1 = buscarProduto('O Hobbit');
const produto2 = buscarProduto('Dark Souls');
if (produto1 instanceof Produto) {
    console.log(produto1.nome); // ele é uma instancia de Produto e também de Livro
}
if (produto2 instanceof Produto) {
    console.log(produto2.nome); // ele é uma instancia de Produto e também de Jogo
}
