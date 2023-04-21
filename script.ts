// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

//-------------------------------------------------
//RESOLUÇÃO do professor
interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any; //removido 'userData' e usado 'any', para permitir que qualquer string possa ser usada como chave do objeto.
  //nas aulas posteriores será mostrada uma forma de resolver esse problema da forma correta
}

window.UserData = {}

function isUserData(data: unknown): data is UserData {//typeGuard
  if(
    data && typeof data === 'object' &&
    ('nome' in data || 'email' in data || 'cpf' in data)
    //não faz sentido perder todos os dados, só pq o usuário não preencheu todos os campos anteriormente, então eu acho melhor usar o 'ou'
    // ACERTEEEEEI!!! =)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (err) {
    return false;
  }
  return true;
}

function getUserData() {
  const localUserData = window.localStorage.getItem('UserData');

  if(localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if(isUserData(UserData)) {
      Object.entries(UserData).forEach(([key, value]) => {
        const input = document.getElementById(key);
        if(input instanceof HTMLInputElement) {
          input.value = value
          window.UserData[key] = value
        }
      })
    }
  }
}

function handleKeyUp({target}:KeyboardEvent) {
  if(target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    //o erro de tipagem das chaves do objeto não é devido ela ser 'string', mas sim pq eu não sei qual será a 'string' passada como chave, então poderia ser alguma chave diferente das que estão tipadas na interface UserData
    //para resolver temporariamente o problema, na 'interface de Window', eu não uso a 'interface UserData' para tipar a 'propriedade userData', mas sim um 'any'
    window.localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

getUserData();

const form = <HTMLElement>document.getElementById('form');
form?.addEventListener('keyup', handleKeyUp);
//a solução para esse problema era tipar o form como 'HTMLElement' e o target da handleKeyUp como 'KeyboardEvent'