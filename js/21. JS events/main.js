const oneDeep = document.querySelector(".one__deep");
const _this = document.querySelector(".this");
const _target = document.querySelector(".target");
const _currentTarget = document.querySelector(".current-target");
const _text = document.querySelector('input[type="text"');

oneDeep.addEventListener("click", function(event) {
  _this.innerHTML = this.className;
  _target.innerHTML = event.target.className;
  _currentTarget.innerHTML = event.currentTarget.className;

  console.group("Event");
  console.log("_this");
  console.dir(this.className);
  console.log("##### --- ####");

  console.log("TARGET");
  console.dir(event.target.className);
  console.log("##### --- ####");

  console.log("_currentTarget");
  console.dir(event.currentTarget.className);
  console.groupEnd("Event");
});

_text.onclick = function() {
  this.value = "Onclick 1 > ";
  this.focus();
  this.value += " Onclick 2";
};

_text.onfocus = function() {
  this.value += " onFocus > ";
};

button.onclick = function() {
  text.value += " ->в onclick ";

  text.focus(); // вызов инициирует событие onfocus

  text.value += " из onclick-> ";
};

text.onfocus = function() {
  text.value += " !focus! ";
};
