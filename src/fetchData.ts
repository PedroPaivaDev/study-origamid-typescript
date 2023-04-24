export default async function fetchData() {
  const response = await fetch('https://api.origamid.dev/json/transacoes.json');
  const json = await response.json();
  return normalizeData(json);
}

function normalizeData(data: Array<object>) {
  let newData:Array<Venda> = []
  data.forEach((element:any) => {
    const keys = Object.keys(element)
    newData = [
      ...newData,
      {
        status: String(element[keys[0]]),
        id: Number(element[keys[1]]),
        data: String(element[keys[2]]),
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