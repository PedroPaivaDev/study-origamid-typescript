declare global { //só funciona em arquivos de tipo 'module'
//então obrigatoriamente eu preciso ter algum export neste arquivo
  interface Usuario { //por estar declarada dentro do objeto 'declare global', a interface 'Usuario' pode ser acessada globalmente
    nome: string;
    id: number;
  }
}

export const livro: Produto = { //essa interface ele está pegando de um arquivo 'interface.d.ts'
  nome: 'O Senhor dos Anéis',
  preco: 200,
};
