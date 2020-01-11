;(function() {
  const promptButton = document.querySelector(
    ".controls__button_function_prompt"
  );

  promptButton.addEventListener("click", promptHandler);

  function promptHandler() {
    const userInput = prompt("Input some: ");

    if (userInput) {
      return alert("Your input: " + userInput);
    }
  }
})();
