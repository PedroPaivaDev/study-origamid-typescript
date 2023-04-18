"use strict";
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
//---------------------
//exercício feito:
// const navBar = document.querySelector('#nav');
// const button = document.querySelector('#btn-mobile');
// function handleClick(event:Event) {
//   if(navBar?.className==='active') {
//     navBar?.classList.remove("active");
//     if(event.currentTarget instanceof HTMLButtonElement) {
//       event.currentTarget.ariaExpanded = 'false';
//       event.currentTarget.ariaLabel = 'Abrir Menu'
//     }
//   } else {
//     navBar?.classList.add("active");
//     if(event.currentTarget instanceof HTMLButtonElement) {
//       event.currentTarget.ariaExpanded = 'true';
//       event.currentTarget.ariaLabel = 'Fechar Menu'
//     }
//   }
// }
// button?.addEventListener('click', handleClick);
//---------------------
//resolução professor:
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
    const nav = document.getElementById("nav");
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains("active");
        if (active) {
            nav.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir Menu");
        }
        else {
            nav.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar Menu");
        }
    }
    console.log(event);
}
btnMobile?.addEventListener("pointerdown", toggleMenu);
