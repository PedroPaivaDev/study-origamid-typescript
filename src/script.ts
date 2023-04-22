import plugin from './plugin.js'; //tem que adicionar a extensão '.js'
// se eu estivesse usando webpack ou Vite, não precisaria do '.js'
// import slide from './slide.js';

plugin();
// slide();

interface Produto {
  nome: string;
  preco: number;
}

// [strict] noImplicitAny
function handleProduto(dados: Produto) {
  console.log(dados)
}
handleProduto({nome:'PC',preco:1})

// [strict] strictNullChecks
const button = document.querySelector('button');
button && (button.innerHTML = "teste"); //preciso usar condicional para que não execute a ação caso o 'button' seja 'null'

// [strict] noImplicitThis
function handleClick(this:HTMLElement) { //se o noImplicitThis estivesse 'false', eu não precisaria declarar o tipo do 'this'
  console.log(this);
}
document.documentElement.addEventListener('click', handleClick);

// [strict] noImplicitReturns
function trocarModo(modo: string) { //com o noImplicitReturns 'true', eu preciso mostrar todos os retornos dos possíveis resultados
// no caso abaixo, eu preciso declarar o retorno caso o modo não seja 'dark'
  if (modo === 'dark') {
    return 'gray';
  } else {
    return 'white';
  }
}
document.body.style.background = trocarModo('dark');

// noUnusedParameters
function maiuscula(frase: string) { //está indicando o que não está sendo usado 
  // noUnusedLocals
  const total = 100;
}
