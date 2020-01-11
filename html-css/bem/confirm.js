;(function() {
  const confirmButton = document.querySelector(
    ".controls__button_function_confirm"
  );

  confirmButton.addEventListener("click", confirmHandler);

  function confirmHandler() {
    if (confirm("Your older than 18")) {
      return alert("Success");
    }

    alert("Blocked!");
  }
})();
