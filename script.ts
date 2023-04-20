// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

//Exercício concluído e com resolução semelhante ao do professor. Eu só não sabia que o filter podia ser usado como condicional para continuar o forEach de um array.

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCurso(json);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: string;
}

function handleCurso(data: unknown) {
  if(Array.isArray(data)) {
    renderCursos(data)
  }
}

function isCurso(value:unknown): value is Curso {
  if(
      value &&
      typeof value === 'object' &&
      'nome' in value &&
      'horas' in value &&
      'tags' in value
  ) {
    return true;
  } else {
    return false;
  }
}

function renderCursos(cursos:Array<object>) {
  cursos.filter(isCurso).forEach((curso:Curso) => {
    // if(isCurso(curso)) {// não consegui tipar cada 'key' do objeto, então ele não reconheceu que a 'key' pode ser usada como index. Comentei tudo e chamei cada chave para renderizar.
      // return document.body.innerHTML += `
      //   <div class="curso">
      //     ${
      //       Object.keys(curso).map((key:string) => (
      //       `<p>${String(key)}: ${String(curso[key])}</p>`
      //       ))
      //     }
      //   </div>
      // `
      return document.body.innerHTML += `
      <div class="curso">
        <p>Nome: ${curso.nome}</p>
        <p>Horas: ${curso.horas}</p>
        <p>Tags: ${curso.tags}</p>
      </div>
      `
    // }
  })
}