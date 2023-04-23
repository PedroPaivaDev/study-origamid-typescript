import './style.css';
import fetchData from './fetchData';

// interface Venda {
//   status: string,
//   id: number,
//   data: string,
//   nome: string,
//   pagamento: "Boleto" | "Cartão de Crédito",
//   email: string,
//   valor: number,
//   novo: boolean
// }

async function normalizeData() {
  const data:Array<object> = await fetchData()
  data.forEach((element:any) => {
    const keys = Object.keys(element)
    const newData = {
      status: String(element[keys[0]]),
      id: Number(element[keys[1]]),
      data: String(element[keys[2]]),
      nome: String(element[keys[3]]),
      pagamento: String(element[keys[4]]),
      email: String(element[keys[5]]),
      valor: Number(element[keys[6]]),
      novo: element[keys[7]]===1 ? true : false
    }
    console.log(newData)    
  });
}

normalizeData()

