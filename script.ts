//esssa declaração do "never" pode ser usado em métodos async como o fetch, quando uma url não retorna nada e eu preciso abortar a operação.
function abortar(mensagem: string): never {
  throw new Error(mensagem);
}
// abortar('Um erro ocorreu'); //o código pára aqui.
// console.log('Tente novamente'); //nunca é rodado

//--------------
//métodos em interfaces
interface Quadrado {
  lado: number;
  perimetro(lado: number): number;
}
function calcular(forma: Quadrado) {
  return forma.perimetro(3);
}

//--------------
//overloads
//eu escrevo o cabecalho da função, mas não escrevo o corpo dela
//assim ela pdoerá ter várias opções de declaração dos parâmetros e retornos, para apenas um único corpo
//isso não é um javascript válido, então na compilação ele irá eliminar essa parte do overload
// Exemplo 1
function normalizar(valor: string): string;
function normalizar(valor: string[]): string[];
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}
console.log(normalizar(" Produto ").toUpperCase());
console.log(normalizar(["Banana ", " UVA"]).filter);

// Exemplo 2: seletores do JQuery
function $(seletor: "video"): HTMLVideoElement | null;
function $(seletor: "div"): HTMLDivElement | null;
function $(seletor: "a"): HTMLAnchorElement | null;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
