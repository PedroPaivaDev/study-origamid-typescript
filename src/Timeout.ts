export default class Timeout {
  id;
  handler;

  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time); //cada setTimeout gera um id único, que é usado para o seu 'clear'
    this.handler = handler;
  }

  clear() { //esse método só será chamado na classe Slide
    clearTimeout(this.id);
  }
}