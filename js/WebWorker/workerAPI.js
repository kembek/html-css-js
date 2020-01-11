const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

request.onload = function(response) {
  console.log(JSON.parse(response.target.response));

  postMessage(response.target.response);
};

setTimeout(() => {
  request.send();
}, 5000);

postMessage("some result for test");
