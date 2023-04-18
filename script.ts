const links = document.querySelectorAll('.link');

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href); //retorna o href dos dois elementos do tipo 'anchor' dentro da variável 'links'
  } else {
    console.log("não é 'anchor'", typeof link); //nesse caso, o 'typeof' sempre vai retornar 'object', pois ele só funcina direito com tipos primitvos.
  }
});

console.log('NodeList', links instanceof NodeList);

// erro, filter é um método de Array e não de NodeList
// const anchorLinksTeste1 = links.filter((link) => link instanceof HTMLAnchorElement);
if(links instanceof Array) {links.filter(link => link instanceof HTMLAnchorElement)} //assim funciona

// Assim também funciona, pois a NodeList foi transformada em uma Array, antes de ser feito o filter
const anchorLinks = Array.from(links).filter(
  (link) => link instanceof HTMLAnchorElement,
);
console.log('links', links) //retorna um array inteiro com 3 objetos, dois tipo 'anchor' e um tipo 'button'
console.log('array', anchorLinks) //retorna um array filtrado com 2 objetos do tipo 'anchor'