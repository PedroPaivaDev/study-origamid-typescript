export default async function fetchData(url: string) {
  try {
    const response = await fetch(url);
    const json:TransacaoAPI[] = await response.json();
    if(!response.ok) throw new Error("Erro: " + response.status)
    return normalizeDados(json);
  } catch (error) {
    if(error instanceof Error) console.error("fetchData: " + error.message)
    return null;
  }
}

type TransacaoPagamento = "Boleto" | "Cartão de Crédito";
type TransacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada";

interface TransacaoAPI {
  Status: TransacaoStatus;
  ID: number;
  Data: string;
  Nome: string;
  ["Forma de Pagamento"]: TransacaoPagamento;
  Email: string;
  ["Valor (R$)"]: string;
  ["Cliente Novo"]: number;
}

function normalizeDados(data: TransacaoAPI[]) {
  let newData:Array<Venda> = []
  data.forEach((element:any) => {
    const keys = Object.keys(element)
    newData = [
      ...newData,
      {
        status: String(element[keys[0]]),
        id: Number(element[keys[1]]),
        data: converterData(element[keys[2]]),
        nome: String(element[keys[3]]),
        pagamento: String(element[keys[4]]),
        email: String(element[keys[5]]),
        valor: element[keys[6]],
        novo: element[keys[7]]===1 ? true : false
      }
    ]
  });
  return newData;
}

function converterData(dia:string) {
  const partes = dia.split('/');
  const novoDia = new Date(`${partes[1]}/${partes[0]}/${partes[2]}`);
  return novoDia;
}