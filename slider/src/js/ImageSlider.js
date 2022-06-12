export default class ImageSlider {
  #currentPosition = 0;
  #slideNumber = 0;
  #slideWidth = 0;
  sliderWrapEl;
  sliderListEl;
  nextBtnEl;
  previousBtnEl;

  constructor() {
    this.assignElement();
    this.initSlideNumber();
    this.initSlideWidth();
    this.initSlideListWidth();
    this.addEvent();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById("slider-wrap");
    this.sliderListEl = this.sliderWrapEl.querySelector("#slider");
    this.nextBtnEl = this.sliderWrapEl.querySelector("#next");
    this.previousBtnEl = this.sliderWrapEl.querySelector("#previous");
  }

  initSlideNumber() {
    this.#slideNumber = this.sliderListEl.querySelectorAll("li").length;
  }

  initSlideWidth() {
    this.#slideWidth = this.sliderWrapEl.clientWidth;
  }

  initSlideListWidth() {
    this.sliderListEl.style.width = `${this.#slideNumber * this.#slideWidth}px`;
  }

  addEvent() {
    this.nextBtnEl.addEventListener("click", this.moveToRight.bind(this));
    this.previousBtnEl.addEventListener("click", this.moveToLeft.bind(this));
  }

  moveToRight() {
    this.#currentPosition++;
    if (this.#currentPosition === this.#slideNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
  }

  moveToLeft() {
    this.#currentPosition--;
    if (this.#currentPosition === -1) {
      this.#currentPosition = this.#slideNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
  }
}
