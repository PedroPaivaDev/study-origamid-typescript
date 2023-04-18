const button = document.querySelector('button');

// function ativarMenu(this: HTMLButtonElement, event: MouseEvent) {
//   console.log(this); //o 'this' dentro de um callback(o eventListener), faz referência ao objeto que ele foi chamado, no caso, referente ao 'button'.
// }

function ativarMenu(event: Event) {
  const elemento = event.currentTarget;
  if (elemento instanceof HTMLElement) {
    elemento.style.background = 'red';
  }  
  console.log(elemento)
}

button?.addEventListener('click', ativarMenu);
window.addEventListener('keydown', ativarMenu);