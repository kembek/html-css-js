const resultOutput = document.querySelector("#result");

if (window.Worker) {
  const requestWorker = new Worker("workerAPI.js");

  requestWorker.addEventListener("message", function(response) {
    console.log("Server data", response.data);

    resultOutput.textContent = response.data;
  });
}
