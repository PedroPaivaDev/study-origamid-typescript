export default async function fetchData() {
  const response = await fetch('https://api.origamid.dev/json/transacoes.json');
  const json = await response.json();
  return normalizeDados(json);
}

function normalizeDados(data: Array<object>) {
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