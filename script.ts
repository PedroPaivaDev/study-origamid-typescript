//exercício feito:
function arredonda(numeral:string): string;
function arredonda(numeral:number): number;
function arredonda(numeral: string | number): string | number {
  const roundNumeral = Number(numeral).toFixed(0);
  if(typeof numeral === 'string') {
    return `${typeof numeral}: ${String(roundNumeral)}`;
  } else {
    return `${typeof numeral}: ${roundNumeral}`;
  }
}
console.log(arredonda('12.5'));

//------------
//resolução professor:
function arredondar(valor:number): number;
function arredondar(valor:string): string;
function arredondar(valor: number | string): number | string {
  if(typeof valor === 'number') {
    return Math.ceil(valor);
  } else {
    return Math.ceil(Number(valor)).toString();
  }
}
console.log(arredondar('200.32'));