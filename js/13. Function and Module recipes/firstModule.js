(function() {
  if (window.greeting) {
    return console.warn("soorryy bro");
  }

  return (window.greeting = function() {
    alert("HELLO " + this.name.toUpperCase());
  });
})();
