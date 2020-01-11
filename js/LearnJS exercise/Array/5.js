function isNumber(num) {
  return !isNaN(num) || isFinite(num);
}

let calculator = {
  _sums: [],
  reads() {
    let num = parseFloat(prompt("Input num"));
    let isNum = isNumber(num);

    if (!isNum) {
      let sum = this._sums.reduce(
        (sum, currentNumber) => (sum += currentNumber),
        0
      );

      this._sums = [];

      return sum;
    }

    this._sums.push(num);

    return this.reads();
  }
};
