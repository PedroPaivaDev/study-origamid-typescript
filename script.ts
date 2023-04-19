function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}
somar(3, 4);//o "?" declara que o terceiro parâmetro é opcional
somar(3, 4, 1);

//tipagem de parâmetros em uma arrow function:
const subtrair = (a: number, b: number): number => a - b;
subtrair(10, 2);

//quando uma função não retorna nada, usamos o "void"
//o tipo criado abaixo poderia ser usado para definir um parâmetro de uma função, que recebe outra função nesse parâmetro(callback):
type Callback = (event: MouseEvent) => void;

//--------------------
//VOID
//essa função não retorna nada, então ela "retorna void", no console resulta em "undefined"
function pintarTela(cor: string) {
  document.body.style.background = cor;
}
pintarTela('black');
if (pintarTela('black')) {
  // Erro, a função pintarTela() retorna void, então ela não pode ser verificada
}

const btn = document.querySelector('button');
if (btn && btn.click()) {
  // Erro, o método click() retorna void, então ele não pode ser verificado
}

// Se a função tiver qualquer tipo de retorno,
// ela não terá mais o void como uma opção e sim o undefined
function isString(value: any) {
  if (typeof value === 'string') {
    return true;
  } //se eu declarar o "else" e um tipo de retorno, ela vai para de retornar undefined
}

console.log(isString('teste')); //retorna true
console.log(isString(0)); //retorna undefined