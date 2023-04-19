"use strict";
//esssa declaração do "never" pode ser usado em métodos async como o fetch, quando uma url não retorna nada e eu preciso abortar a operação.
function abortar(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    return forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" Produto ").toUpperCase());
console.log(normalizar(["Banana ", " UVA"]).filter);
function $(seletor) {
    return document.querySelector(seletor);
}
$("a")?.href;
$("video")?.volume;
$(".teste")?.innerHTML;
