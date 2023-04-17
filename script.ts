//Exercício feito:
const link = document.getElementById('origamid');
const href = link?.getAttribute('href');
function changeURL() {
  const dotsIndex = href?.indexOf(':')
  if(dotsIndex) {
    return href?.slice(0, dotsIndex) + 's' + href?.slice(dotsIndex)
  }
}
console.log('exercício',changeURL());

//Resolução:
console.dir(link); //retorna o objeto 'anchor' do DOM.
//O prototype de 'anchor' é a classe 'HTMLAnchorElement' e o prototype de 'HTMLAnchorElement' é 'HTMLElement'. Então em algum lugar do JavaScript, foi escrito: class HTMLAnchorElement extends HTMLElement, pois o 'anchor' foi feito com base na classe HTMLAnchorElement e a HTMLAnchorElement foi feito com base na classe HTMLElement.
console.log(link instanceof HTMLAnchorElement) //true
if (link instanceof HTMLAnchorElement) {
  // link.href = "https://www.origamid.com";
  //ou
  link.href = link.href.replace("http://", "https://")
  console.log('resolução', link.href)
}