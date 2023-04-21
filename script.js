"use strict";
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
async function handleData() {
    const jogo = await fetchData('/jogo.json');
    if (checkInterface(jogo, 'desenvolvedora')) { //o valor do tipo genérico será a interface 'Jogo', o primeiro parâmetro será o objeto 'jogo' que veio do fetch e será verificado se o segundo parâmetro é uma das 'keys' dentro do objeto 'jogo' e da interface 'Jogo'
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData('/livro.json');
    if (checkInterface(livro, 'autor')) {
        console.log(livro.autor);
    }
}
handleData();
function checkInterface(//faz a verificação de várias chaves passadas como parâmetro
obj, ...keys
//o valor da chave que eu passar para verificar se a interface possui a chave do objeto, deve ser uma 'keyof' da interface que está sendo verificada, caso  contrário, o TS vai avisar lá na função 'handleData'
//foi usado o parâmetro 'rest' para que possa ser feita a verificação com mais de um chave
) {
    if (obj &&
        typeof obj === 'object' &&
        keys.filter((key) => key in obj).length === keys.length //verificando se todas as chaves passadas como parâmetro são chaves dentro do objeto passado como parâmetro
    ) {
        return true;
    }
    else {
        return false;
    }
}
function checkInterfaceSimples(//faz a verificação de apenas uma chave passada como parâmetro
obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
