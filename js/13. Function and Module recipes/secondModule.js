(function() {
  return (window.setPropertyFullName = function() {
    Object.defineProperty(this, "fullName", {
      get: function() {
        return this.name + " " + this.lastName;
      }
    });
    // Object.assign({}, this, {
    //   get fullName() {
    //     return this.name + " " + this.lastName;
    //   }
    // });
  });
})();
