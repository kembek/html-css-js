/**
 * This function allow you to modify a JS Promise by adding some status properties.
 * Based on: http://stackoverflow.com/questions/21485545/is-there-a-way-to-tell-if-an-es6-promise-is-fulfilled-rejected-resolved
 * But modified according to the specs of promises : https://promisesaplus.com/
 */
function MakeQuerablePromise(promise) {
  // Don't modify any promise that has been already modified.
  if (promise.isResolved) return promise;

  // Set initial state
  var isPending = true;
  var isRejected = false;
  var isFulfilled = false;

  // Observe the promise, saving the fulfillment in a closure scope.
  var result = promise.then(
    function(v) {
      isFulfilled = true;
      isPending = false;
      return v;
    },
    function(e) {
      isRejected = true;
      isPending = false;
      throw e;
    }
  );

  console.log({ result });

  result.isFulfilled = function() {
    return isFulfilled;
  };
  result.isPending = function() {
    return isPending;
  };
  result.isRejected = function() {
    return isRejected;
  };
  return result;
}

// Your promise won't cast the .then function but the returned by MakeQuerablePromise
var originalPromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Yeah !");
  }, 10000);
});

var myPromise = MakeQuerablePromise(originalPromise);

console.log("Initial fulfilled:", myPromise.isFulfilled()); //false
console.log("Initial rejected:", myPromise.isRejected()); //false
console.log("Initial pending:", myPromise.isPending()); //true

myPromise.then(function(data) {
  console.log(data); // "Yeah !"
  console.log("Final fulfilled:", myPromise.isFulfilled()); //true
  console.log("Final rejected:", myPromise.isRejected()); //false
  console.log("Final pending:", myPromise.isPending()); //false
});
