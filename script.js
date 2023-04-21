"use strict";
//Classes
//----------------
//Construtores:
// class Produto {
//   tipo = 'produto';
//   nome: string; //toda propriedade declarada como 'this' no construtor, precisa ser tipada aqui (no corpo da classe)
//   preco: number | undefined; //preciso colocar undefined, pq ele foi declarado como um parâmetro opcional
//   constructor(nome: string, preco?: number) {
//     this.nome = nome;
//     this.preco = preco;
//   }
// }
// const livro = new Produto('O Senhor dos Anéis');
//-----------------
//Modificadores:
class Produto {
    // public: é o padrão de qualquer uma
    tipo = 'produto'; // private: só pode ser acessada dentro da classe
    preco; // protected: só pode ser acessada dentro da classe e subclasses
    nome; // readonly: só permite leitura (no runtime é possível alterar o seu valor, mas em produção TS aparece um aviso dizendo que não deve ser alterado o valor da propriedade)
    constructor(nome, preco) {
        this.nome = nome;
        this.tipo;
        this.preco = preco;
    }
    getTipo() {
        return this.tipo;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    // [javascript] static: não fará parte do Objeto criado e sim da função construtora (classe)
    //então é por isso que no exemplo abaixo, não foi possível acessar esse método pela variável 'livro', mas sim pela classe 'Produto'
    static transformarPreco(preco) {
        return `R$ ${preco.toFixed(2)}`;
    }
}
const livro = new Produto('O Senhor dos Aneis', 200);
console.log(livro.getTipo());
console.log(livro.getPreco());
console.log(livro.nome);
console.log(Produto.transformarPreco(100));
//-----------------
//Interface:
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
