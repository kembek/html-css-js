function syncSetTimeout(func, ms, callback) {
  (function sync(done) {
    if (!done) {
      setTimeout(function() {
        func.apply(func);
        sync(true);
      }, ms);
      return;
    }
    callback.apply(callback);
  })();
}

syncSetTimeout(
  () => {
    console.log("Function");
  },
  5000,
  () => {
    console.log("callback");
  }
);
