"use strict";
//exercício feito:
// const links = document.querySelectorAll('.link');
// Array.from(links).forEach(link => {
//   if(link instanceof HTMLElement) {
//     link.style.border = '2px solid green';
//     link.style.color = 'lightGreen';
//   }
// })
//resolução professor:
const links = document.querySelectorAll('.link');
function ativarElemento(elemento) {
    elemento.style.border = '2px solid green';
    elemento.style.color = 'lightGreen';
}
links.forEach(link => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
//para mostrar diretamente o prototype de um elemento no console:
links.forEach(link => {
    console.dir(link.__proto__.__proto__.__proto__.__proto__.__proto__);
});
