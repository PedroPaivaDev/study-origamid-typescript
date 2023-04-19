"use strict";
function arredonda(numeral) {
    const roundNumeral = Number(numeral).toFixed(0);
    if (typeof numeral === 'string') {
        return `${typeof numeral}: ${String(roundNumeral)}`;
    }
    else {
        return `${typeof numeral}: ${roundNumeral}`;
    }
}
console.log(arredonda('12.5'));
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString();
    }
}
console.log(arredondar('200.32'));
