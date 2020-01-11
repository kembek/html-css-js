let ladder = {
  _step: 0,
  up() {
    this._step = ++this._step;
    return this;
  },
  down() {
    this._step = --this._step;
    return this;
  },
  get step() {
    return this._step;
  },
  set step(newStep) {
    this._step = newStep;
  }
}

const res = ladder.up().up().up().down().down().step
console.log(res)

