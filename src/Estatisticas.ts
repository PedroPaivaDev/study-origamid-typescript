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
  semana;
  melhorDia;

  constructor(transacoes: Venda[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
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

  private setSemana() {
    return countBy(this.transacoes.map(({data}) => new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(data)));
  }

  private setMelhorDia() {
    return Object.entries(this.semana).sort((next, curr) => {
      // como eu quero na ordem descrescente, eu vou começar pelo 'curr'
      // se eu quisesse na ordem crescente, eu iria começar pelo 'next'
      return curr[1] - next[1];
    })[0][0];
  }
}