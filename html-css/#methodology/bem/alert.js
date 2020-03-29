;(function() {
  const alertButton = document.querySelector(
    ".controls__button_function_alert"
  );

  alertButton.addEventListener("click", alertHandler);

  function alertHandler() {
    alert("This is alert message!");
  }
})();
