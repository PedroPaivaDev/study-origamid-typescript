let total: string | number = 200;
total = '300';

function isNumber(value: string | number) {
  if (typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber(2))

// Retorna HTMLButtonElement | null
const button = document.querySelector('button');
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();