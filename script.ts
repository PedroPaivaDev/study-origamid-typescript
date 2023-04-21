// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

//-------------------------------------------------
//EXERCÍCIO feito, mas com um problema a ser corrigido
interface UserData {
  nome: string;
  email: string;
  cpf: string;
}

interface Window {
  UserData: UserData;
}

const nome = document.getElementById('nome') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const cpf = document.getElementById('cpf') as HTMLInputElement;
const localUserData = JSON.parse(window.localStorage.getItem('UserData') as string);

function handleKeyUp({target}:{target:HTMLInputElement}) {
  const id = target.id as keyof string;
  const value = target.value;
  window.UserData = {
    ...window.UserData,
    [id]: value
  };
  window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
}

function isUserData(data: unknown): data is UserData {//typeGuard
  if(
    data && typeof data === 'object' &&
    ('nome' in data || 'email' in data || 'cpf' in data)
    //não faz sentido perder todos os dados, só pq o usuário não preencheu todos os campos anteriormente, então eu acho melhor usar o 'ou'
  ) {
    return true;
  } else {
    return false;
  }
}

function getUserData() {
  if(isUserData(localUserData)) {
    nome.value = localUserData.nome
    email.value = localUserData.email
    cpf.value = localUserData.cpf
    window.UserData = localUserData;
  }
}

getUserData();

document.documentElement.addEventListener('keyup', handleKeyUp);
//só não consegui corrigir esse erro da handleKeyUp, pq ela precisa retornar void mesmo