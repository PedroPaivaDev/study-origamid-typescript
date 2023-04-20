async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}
fetchProduto();

interface Produto {
  nome: string;
  preco: number;
}

//não dá para usar 'instanceof', pq Produto não é uma classe
//não dá para usar 'typeof', pq Produto tem mais de um tipo
//a única forma de fazer o typeGuard, é usando o 'is'
function isProduto(value: unknown): value is Produto {
  if (
    value && //para garantir que não seja null
    typeof value === 'object' && //para garantir que seja um objeto
    'nome' in value && //para garantir que o objeto tem uma chave 'nome'
    'preco' in value //para garantir que o objeto tem uma chave 'preco'
  ) {
    return true;
  } else {
    return false;
  }
}

function handleProduto(data: unknown) {
  if (isProduto(data)) {
    if (typeof data.nome === 'string') {//para garantir que o nome seja uma string
      console.log(data);
    }
  }
}