"use strict";
function typeGuard(value) {
    if (typeof value === 'string') { //se não tiver esse condicional de 'typeof', o 'unkown' não permite que o uso de 'value'
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (value instanceof HTMLElement) {
        return value.innerText;
    }
}
typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);
