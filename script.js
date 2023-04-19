"use strict";
// Exemplo 1
function extractText(el) {
    return el.innerText;
}
//Esse <Tipo extends HTMLElement = HTMLElement> quer dizer que se não passar nenhum tipo, então usar como padrão o HTMLElement
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link));
    // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}
// Exemplo 2: recriando um método do JQuery
function $(selector) {
    return document.querySelector(selector);
}
// ao invés de usar o querySelector toda vez, eu uso apenas:
console.log($('a'));
console.log($('a')?.href);
