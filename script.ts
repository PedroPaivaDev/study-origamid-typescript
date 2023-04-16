async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  manipularDados(data);
}

fetchJSON('https://api.origamid.dev/json/cursos.json');

function manipularDados(data:any) {
  console.log(data)
}