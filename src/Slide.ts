import Timeout from "./Timeout";

export default class Slide {
  container;
  slides;
  controls;
  time;
  index: number;
  slide: Element;
  timeout: Timeout | null; //então o tipo é a interface da classe 'Timeout' criada ou 'null' para o momento que ele é iniciado

  constructor(container: Element, slides: Element[], controls: Element, time: number = 5000) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.timeout = null; //iniciado como null
    this.index = 0;
    this.slide = this.slides[this.index];

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
    const prev = this.index > 0 ? this.index - 1 : this.slides.length -1;
    this.show(prev);
  }

  next() {
    const next = (this.index + 1) < this.slides.length ? this.index + 1 : 0;
    this.show(next);
  }

  private addControls() {
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.innerText = "Slide Anterior";
    nextButton.innerText = "Slide Seguinte";
    this.controls.appendChild(prevButton);
    this.controls.appendChild(nextButton);
    prevButton.addEventListener('pointerup', () => this.prev());
    nextButton.addEventListener('pointerup', () => this.next());
  }

  private init() {
    this.addControls();
    this.show(this.index);
  }
}