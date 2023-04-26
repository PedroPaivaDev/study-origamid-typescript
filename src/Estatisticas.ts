type VendaValor = Venda & {valor:number};

function filtrarValor(transacao: Venda): transacao is VendaValor {
  return transacao.valor !== null;
}

export default class Estatisticas {
  private transacoes;
  total;
  constructor(transacoes: Venda[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }
  private setTotal() {
    return this.transacoes.filter(filtrarValor).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
}