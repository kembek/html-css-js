onmessage = function(e) {
  console.dir(this);
  console.groupCollapsed("Worker area");
  console.log("THIS: ");
  console.dir(this);
  console.log("EVENT: ");
  console.dir(e);

  console.log("Worker: Message received from main script");
  console.log(e.data);
  const workerResult = e.data.reduce(
    (count, item) => parseFloat(count) + parseFloat(item)
  );

  console.log("Worker: Posting message back to main script");
  postMessage(workerResult);

  console.groupEnd("Worker area END");
};
