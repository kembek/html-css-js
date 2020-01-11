const Timer = function() {
  let timer = 0;
  let timerID = null;
  const start = () => {
    timerID = setInterval(() => {
      console.log(timer++);
    }, 1000);
  };
  const stop = () => {
    timerID && clearInterval(timerID);
  };

  return {
    start,
    stop
  };
};

const timerOne = new Timer();
