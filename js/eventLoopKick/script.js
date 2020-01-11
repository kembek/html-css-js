function cycleSetTimeout() {
  setTimeout(cycleSetTimeout);
}

function cyclePending() {
  Promise.resolve().then(cyclePending);
}

const btn = document.querySelector(".btn.btn-for-start");

btn.addEventListener("click", () => {
  alert("Started");
  setTimeout(() => {
    cyclePending();
    alert("Finished");
  }, 10000);
});
