const first = document.querySelector("#first");
const second = document.querySelector("#second");

const result = document.querySelector("[for='result']");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  function handleChange(e) {
    console.dir(this);
    console.log(e);
    myWorker.postMessage([first.value, second.value]);
    console.log(`Input name: ${this.id}`);
  }

  first.addEventListener("change", handleChange);
  second.addEventListener("change", handleChange);

  myWorker.onmessage = function(e) {
    result.textContent = e.data;
    console.log("Main (myWorker.onmessage): Message received from worker");
  };
}
