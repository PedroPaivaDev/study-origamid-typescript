export default class Slide {
  container;
  slides;
  controls;
  time;
  index: number;
  slide: Element;

  constructor(container: Element, slides: Element[], controls: Element, time: number = 5000) {
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.index = 0;
    this.slide = this.slides[this.index];

    console.log(this.container);
    console.log(this.slides);
    console.log(this.controls);
    console.log(this.time);

    this.show(this.index);
  }

  hide(element: Element) {
    element.classList.remove('active');
  }

  show(index: number) {
    this.index = index;
    this.slide = this.slides[this.index];
    this.slides.forEach(element => this.hide(element))
    this.slide.classList.add('active')
  }
}