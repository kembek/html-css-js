console.group("querySelector");
console.log("Get one element");
console.log(document.querySelector("ul"));
console.log("Get one element");
console.log(document.querySelectorAll("li"));
console.groupEnd();

console.group("getElement");
console.log("getElementById")
console.log(document.getElementById("message"));
console.log("getElementByClassName");
console.log(document.getElementsByClassName("message"));
console.log("getElementsByName");
console.log(document.getElementsByName("user"));

console.log("getElementsByTagName");
console.log(document.getElementsByTagName("li"));

console.log("getRootNode for every element");
console.dir(document.getRootNode());

console.groupEnd();
