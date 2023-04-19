async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();
function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}

//------------
//type predicate
//de alguma forma, a gente precisa indicar que quando essa função for executada, ela vai ser booleana, a depender do tipo de dado passado para dentro dela
function isString(value: unknown): value is string {
  //a partir do momento que eu uso o 'is', a função passa a retornar booleano
  //o 'is' está declarando que o valor vai ser true, apenas se ele for uma string
  return typeof value === 'string';
}
function handleData(data: unknown) {
  if (isString(data)) {//o typeScript não vai precisar executar isso no momento da leitura, mas ele vai saber que se a isString() retornar true, quer dizer que tem uma 'string' em 'data'.
    console.log(data.toUpperCase());// então vai ser possível executar o método toUpperCase()
  }
}
handleData('Origamid');
handleData(200);
