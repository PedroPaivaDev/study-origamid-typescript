import Timeout from "./Timeout";

export default class Slide {
  container;
  slides;
  controls;
  time;
  index: number;
  slide: Element;
  timeout: Timeout | null; //então o tipo é a interface da classe 'Timeout' criada ou 'null' para o momento que ele é iniciado
  paused: boolean;
  pausedTimeout: Timeout | null;

  constructor(container: Element, slides: Element[], controls: Element, time: number = 5000) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.index = 0;
    this.slide = this.slides[this.index];
    this.timeout = null; //iniciado como null
    this.paused = false;
    this.pausedTimeout = null;

    this.init();
  }

  hide(element: Element) {
    element.classList.remove('active');
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach(element => this.hide(element));
    this.slide.classList.add('active');
    this.auto(this.time); //só depois que é mostrada a imagem, que será chamado o 'auto'
  }

  auto(time: number) {
    this.timeout?.clear(); //se não for 'null', ou seja, apenas se tiver um setTimeout anterior, o tempo será resetado pelo método 'clear'
    this.timeout = new Timeout(() => this.next(), time); //a propriedade 'timeout' deixará de ser 'null' e receberá o objeto da classe Timeout, com as suas propriedades
  }

  prev() {
    if(this.paused) return;
    const prev = this.index > 0 ? this.index - 1 : this.slides.length -1;
    this.show(prev);
  }

  next() {
    if(this.paused) return;
    const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }

  pause() {
    this.pausedTimeout = new Timeout(() => {
      this.paused = true;
    }, 300);
  }

  continue() {
    this.pausedTimeout?.clear();
    if(this.paused) {
      this.paused = false;
      this.auto(this.time); //preciso acionar novamente esse método, pois mesmo enquanto fica pausado, o 'auto' chama o 'next', mas o 'next' dá return, pq o 'paused' está 'true'. Aí não é chamado o próximo slide e pára tudo.
    }
  }

  private addControls() {
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.innerText = "Slide Anterior";
    nextButton.innerText = "Slide Seguinte";
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);

    this.controls.addEventListener('pointerdown', () => this.pause());
    this.controls.addEventListener('pointerup', () => this.continue());

    prevButton.addEventListener('pointerup', () => this.prev());
    nextButton.addEventListener('pointerup', () => this.next());
  }

  private init() {
    this.addControls();
    this.show(this.index);
  }
}