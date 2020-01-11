const form = document.forms[0];

console.group("Dom navigation get root element");
console.log("HEAD");
console.log(document.head);
console.log("BODY");
console.log(document.body);
console.log("HTML");
console.log(document.documentElement);
console.groupEnd();

console.group("Dom (node) navigation");
console.log("parentNode - document.body.childNodes[2].parentNode");
console.log(document.body.childNodes[2].parentNode);
console.log("nextSibling");
console.log(document.nextSibling);
console.log("previousSibling");
console.log(document.previousSibling);
console.log("childNodes - this pseudo array nodes");
console.log(document.childNodes);
console.log("document.childNodes[0]");
console.log(document.childNodes[0])
console.log("firstChild");
console.log(document.body.firstChild);
console.log("lastChild");
console.log(document.body.lastChild);

console.groupEnd();

console.group("Dom (element) navigation");
console.log("parentElement - document.body.children[2].parentElement");
console.log(document.body.children[2].parentElement);
console.log("nextSibling");
console.log(document.nextElementSibling);
console.log("previousSibling");
console.log(document.previousElementSibling);
console.log("childNodes - this pseudo array elements");
console.log(document.children);
console.log("document.children[1]");
console.log(document.children[1])
console.log("firstChild");
console.log(document.body.firstElementChild);
console.log("lastChild");
console.log(document.body.lastElementChild);

console.groupEnd();

