//Tuples

//-------------------
const produto1: (string | number)[] = ['Notebook', 2500];
//nesse caso, eu preciso usar o typeof para os métodos disponíveis para o tipo string
const produto2: [string, number] = ['Notebook', 2500];
//desse modo, o primeiro elemento é uma string e o segundo elemento é um número, mas esse array vai aceitar apenas dois elementos
const produto3: [string, number, ...any] = ['Notebook', 2500, 22];
//neste caso, ele vai aceitar o primeiro como 'string', o segundo como 'number' e o restante como 'any'
const nome1 = produto1[0]; // string | number
const nome2 = produto2[0]; // string
if(typeof produto1[0] === 'string') {
  console.log(produto1[0].toUpperCase())
}
const [nome, preco] = produto2;

//-------------------
//as const
//a palavra chave 'as const' usada no retorno da função, transforma o array do retorno em um tuple
//assim a 'constante button' já entende que o retorno da função getText será um array readyonly com um HTMLElement e uma string

// function getText(selector: string): null | [HTMLElement, string] {
function getText(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) {
    // return [el, el.innerText];
    return [el, el.innerText] as const;
  } else {
    return null;
  }
}
const button = getText('.buttonTeste');

button[1] = 'teste' //no runtime isso vai rodar, mas o TS avisa que o button é um array 'readonly' e por isso não deve ser alterado.

if (button) {
  const [buttonElement, buttonText] = button;
}
console.log(button)