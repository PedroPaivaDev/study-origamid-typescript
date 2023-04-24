import './style.css';
import fetchData from './fetchData';

declare global {
  interface Venda {
    status: string,
    id: number,
    data: string,
    nome: string,
    pagamento: string,
    email: string,
    valor: string,
    novo: boolean
  }
}

async function mostrarDados() {
  const data:Array<Venda> = await fetchData();
  mostrarTransacoes(data);
  mostrarTotal(data);
  mostrarPagamentos(data);
  mostrarStatus(data);
  mostrarDiaTopVendas(data);
}
mostrarDados()

function mostrarTransacoes(data:Array<Venda>) {
  const app = document.getElementById('transacoesBody');
  data.forEach(element => {
    if(app) app.innerHTML += `
      <tr>
        <td>${element.nome}</td>
        <td>${element.email}</td>
        <td>R$ ${element.valor}</td>
        <td>${element.pagamento}</td>
        <td>${element.status}</td>
      </tr>
    `
  })
}

function mostrarTotal(data:Array<Venda>) {
  const total = document.getElementById('total');
  let soma:number = 0;
  data.forEach((element) => {
    if(parseInt(element.valor.replace('.', ''))) {
      soma += parseInt(element.valor.replace('.', ''));
    }
  });
  if(total) total.innerText += ` R$ ${soma}`;
}

function mostrarPagamentos(data:Array<Venda>) {
  const pagamento = document.getElementById('pagamento');
  let credito:number = 0;
  let boleto:number = 0;
  data.forEach((element) => {
    if(element.pagamento === 'Cartão de Crédito') {
      credito += 1
    } else {
      boleto += 1
    }
  });
  if(pagamento) pagamento.innerHTML = `
    <p>Cartão de Crédito: ${credito}</p>
    <p>Boleto: ${boleto}</p>
  `;
}

function mostrarStatus(data:Array<Venda>) {
  const status = document.getElementById('status');
  let paga:number = 0;
  let recusada:number = 0;
  let aguardando:number = 0;
  let estornada:number = 0;
  data.forEach((element) => {
    if(element.status === 'Paga') {
      paga += 1
    } else if(element.status === 'Recusada pela operadora de cartão') {
      recusada += 1
    } else if(element.status === 'Aguardando pagamento') {
      aguardando += 1
    } else if(element.status === 'Estornada') {
      estornada += 1
    }
  });
  if(status) status.innerHTML = `
    <p>Paga: ${paga}</p>
    <p>Recusada pela operadora de cartão: ${recusada}</p>
    <p>Aguardando pagamento: ${aguardando}</p>
    <p>Estornada: ${estornada}</p>
  `;
}

function mostrarDiaTopVendas(data:Array<Venda>) {
  const dia = document.getElementById('dia');
  let topDayObject:object = data.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.data]: curr.data+1
    }
  }, {});
  if(dia) dia.innerText += ` ${Object.keys(topDayObject)}`;
}