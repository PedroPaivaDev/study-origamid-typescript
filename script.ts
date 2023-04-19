// Exemplo 1
function handle<tipo>(a: tipo): tipo {
  return a;
}

handle('A Game').charAt(0);
// quando é declarada uma string como parâmetro, a tipagem é interpretada como: handle<string>(a: string): string

handle(200).toFixed();
// quando é declarado um number como parâmetro, a tipagem é interpretada como: handle<number>(a: number): number

//--------------------
// Exemplo 2
function firstFive<Tipo>(lista: Tipo[]): Tipo[] {
  return lista.slice(0, 5);
}

const numeros = [1, 3, 4, 5, 3, 20, 3, 4, 5];
// const frutas: string[] = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Maçã'];
//ou
const frutas: Array<string> = ['Banana', 'Pêra', 'Uva', 'Laranja', 'Limão', 'Maçã'];

const five1 = firstFive<number>(numeros);
const five2 = firstFive<string>(frutas);
console.log(five1, five2)

//--------------------
// Exemplo 3
function notNull<Tipo>(arg: Tipo) {
  if (arg !== null) return arg;
  else return null;
}

notNull(200)?.toFixed();
notNull('André')?.toLowerCase();

//--------------------
// Exemplo 4
function tipoDado<T>(a: T): { dado: T; tipo: string } {
  const resultado = {
    dado: a,
    tipo: typeof a,
  };
  console.log(resultado);
  return resultado;
}

tipoDado(true);
