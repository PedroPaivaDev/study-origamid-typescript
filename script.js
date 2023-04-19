"use strict";
// Define que o retorno será um HTMLAnchorElement
const link = document.querySelector('.link');
link?.href;
//CUIDADO! Definir o tipo em métodos nativos pode gerar erros, caso seja feita uma tipagem com uma classe errada.
//A forma mais segura é verificar antes com o instanceof
if (link instanceof HTMLVideoElement) {
    link?.volume;
} //aqui mostra os métodos possíveis
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
} // agora dentro da Promise, será retornado um objeto do tipo definido na interface Notebook
async function handleData() {
    const notebook = await getData('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.nome);
}
