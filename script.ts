interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Curso[]) {
  cursos.map(curso => {
    let color;
    if(curso.nivel==='iniciante') {
      color = 'blue'
    } else {
      color = 'red'
    }
    document.body.innerHTML += `
      <div>
        <h1 style="color:${color};">${curso.nome}</h1>
        <p>Carga horária: ${curso.horas} horas</p>
        <p>${curso.aulas} aulas</p>
        ${curso.gratuito===true ? '<p>Curso Gratuito!</p>' : ''}
        <p>Tags: <span style="opacity: 0.5;">${curso.tags.join(", ")}</span></p>
        <p>Aulas: ${curso.idAulas.join(", ")}</p>
        <h4>
          Nivel: <spam>${curso.nivel}</spam>
        </h4>
      </div>
    `
  })
}