const frase = 'Front End';
const preco = 500;
const condi = preco > 100;

if (typeof frase === 'string') {
  console.log('frase é string');
}
if (typeof preco === 'number') {
  console.log('preco é number');
}
if (typeof condi === 'boolean') {
  console.log('condi é boolean');
}

const frase1 = new String('Front End'); //é um objeto do tipo string
const frase2 = String('Front End'); //é uma string
const frase3 = 'Front End'; //é uma string

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);