// Exemplo 1
function extractText<Tipo extends HTMLElement = HTMLElement>(el: Tipo): string {
  return el.innerText;
}

//Esse <Tipo extends HTMLElement = HTMLElement> quer dizer que se não passar nenhum tipo, então usar como padrão o HTMLElement

const link = document.querySelector('a');

if (link) {
  console.log(extractText(link));
  // extractText<HTMLAnchorElement extends HTMLElement>(el: HTMLAnchorElement): string
}

// Exemplo 2: recriando um método do JQuery
function $<Tipo extends Element>(selector: string): Tipo | null {
  return document.querySelector(selector);
}
// ao invés de usar o querySelector toda vez, eu uso apenas:
console.log( $('a') );
console.log( $<HTMLAnchorElement>('a')?.href )