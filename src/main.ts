import './style.css';
import fetchData from './fetchData';
import Estatisticas from './Estatisticas';

async function mostrarDados() {
  const data = await fetchData('https://api.origamid.dev/json/transacoes.json?');
  if(data) {
    mostrarTransacoes(data);
    // mostrarTotal(data);
    mostrarPagamentos(data);
    mostrarStatus(data);
    // mostrarDiaTopVendas(data);
    preencherEstatisticas(data);
  }
}
mostrarDados()

function preencherEstatisticas(transacoes: Venda[]) {
  const data = new Estatisticas(transacoes);
  const totalElement = document.querySelector<HTMLElement>("#total span");
  if(totalElement) {
    totalElement.innerHTML = converterParaMoeda(data.total);
  }
}

function converterParaMoeda(number:number) {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function mostrarTransacoes(data:Array<Venda>) {
  const transacoesBody = document.getElementById('transacoesBody');
  data.forEach(element => {
    if(transacoesBody) transacoesBody.innerHTML += `
      <tr>
        <td>${element.nome}</td>
        <td>${element.email}</td>
        <td>${element.valor ? converterParaMoeda(element.valor) : '-'}</td>
        <td>${element.pagamento}</td>
        <td>${element.status}</td>
      </tr>
    `
  })
}

// function mostrarTotal(data:Array<Venda>) {
//   const total = document.getElementById('total');
//   let soma:number = 0;
//   data.forEach((element) => {
//     if(element.valor) soma += element.valor;
//   });
//   if(total) total.innerText += ` R$ ${soma}`;
// }

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

// function mostrarDiaTopVendas(data:Array<Venda>) {
//   const dia = document.getElementById('dia');
//   const topDayObject = data.reduce((prev, curr) => {
//     const weekDay = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(curr.data)
//     return {
//       ...prev,
//       [weekDay]: prev[weekDay] + 1
//     }
//   }, {
//     ['segunda-feira']: 0,
//     ['terça-feira']: 0,
//     ['quarta-feira']: 0,
//     ['quinta-feira']: 0,
//     ['sexta-feira']: 0,
//     ['sábado']: 0,
//     domingo: 0
//   });
//   let topDay:string = '';
//   let highest:number = 0;
//   Object.keys(topDayObject).forEach((curr) => {
//     if(topDayObject[curr] > highest) {
//       topDay = curr;
//       highest = topDayObject[curr];
//     }
//   })
//   if(dia) dia.innerText += ` ${topDay}`;
// }