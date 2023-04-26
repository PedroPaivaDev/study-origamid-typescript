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

declare global {
  interface Venda {
    status: TransacaoStatus;
    id: number;
    data: Date;
    nome: string;
    pagamento: TransacaoPagamento;
    email: string;
    valor: string;
    // moeda: string;
    // valor: number | null;
    novo: boolean;
  }
}

function normalizeDados(data: TransacaoAPI[]) {
  let newData:Array<Venda> = []
  data.forEach((element:any) => {
    newData = [
      ...newData,
      {
        status: element.Status,
        id: element.ID,
        data: converterData(element.Data),
        nome: element.Nome,
        pagamento: element["Forma de Pagamento"],
        email: element.Email,
        valor: element["Valor (R$)"],
        novo: Boolean(element["Cliente Novo"])
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