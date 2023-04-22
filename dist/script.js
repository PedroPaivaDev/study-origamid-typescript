import plugin from './plugin.js';
plugin();
function handleProduto(dados) {
    console.log(dados);
}
handleProduto({ nome: 'PC', preco: 1 });
const button = document.querySelector('button');
button && (button.innerHTML = "teste");
function handleClick() {
    console.log(this);
}
document.documentElement.addEventListener('click', handleClick);
function trocarModo(modo) {
    if (modo === 'dark') {
        return 'gray';
    }
    else {
        return 'white';
    }
}
document.body.style.background = trocarModo('dark');
function maiuscula(frase) {
    const total = 100;
}
//# sourceMappingURL=script.js.map