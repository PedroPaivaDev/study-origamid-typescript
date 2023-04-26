import countBy from "./countBy";

type VendaValor = Venda & {valor:number};

function filtrarValor(transacao: Venda): transacao is VendaValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  pagamento;
  status;

  constructor(transacoes: Venda[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }

  private setPagamento() {
    return countBy(this.transacoes.map(({pagamento}) => pagamento));
  }

  private setStatus() {
    return countBy(this.transacoes.map(({status}) => status));
  }
}