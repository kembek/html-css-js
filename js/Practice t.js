const arr = Array(100);

const seconds = () => {
  for (var i = 1; i <= arr.length; ++i) {
    (k => {
      setTimeout(() => {
        console.log(k);
      }, k * 2000);
    })(i);
  }
};

const startDate = Date.now();

seconds()

const endDate = Date.now()

console.log(`time range: ${endDate - startDate}`)