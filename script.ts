const button = document.querySelector('button');

function handleClick(event: MouseEvent) {
  console.log('handleClick.pageX', event.pageX);
}

button?.addEventListener('click', handleClick);

function handleScroll(event: Event) {
  console.log('handleScroll', event.type);
}

window.addEventListener('scroll', handleScroll);

function ativarMenu(event: Event) {
  console.log('ativarMenu', event.type);
  if (event instanceof MouseEvent) {
    console.log('MouseEvent.pageX', event.pageX);
  }
  if (event instanceof TouchEvent) {
    console.log('TouchEvent.pageX', event.touches[0].pageX);
  }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
window.addEventListener('keydown', ativarMenu);