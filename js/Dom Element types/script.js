// const child = Array.prototype.constructor(document.body.childNodes);
const child = document.body.childNodes;

console.groupCollapsed("nodeType");
child.forEach((el, i) => {
  console.log(i);
  console.log(el);
});
console.groupEnd();

console.groupCollapsed("nodeName");
child.forEach((el, i) => {
  console.log(i);
  console.log(el.nodeName);
});
console.groupEnd();

console.groupCollapsed("tagName");
child.forEach((el, i) => {
  console.log(i);
  console.log(el.tagName);
});
console.groupEnd();

console.groupCollapsed("innerHTML");
const _div = document.querySelector("div");
console.log("Before innerHTML");
console.log(_div.innerHTML);
console.log("After innerHTML");
console.log((_div.innerHTML = '<span class="text">Change inner div</span>'));

console.groupEnd();

console.groupCollapsed("outerHTML");
const _divOuter = document.querySelector("div > div");
console.log("outerHTML");
console.log(_divOuter.outerHTML);

console.groupEnd();

// nodeValue и data нужны 
// для изменения текстовых узлов, комментариев 
// кроме элементов
console.groupCollapsed("nodeValue");
child.forEach((el, i) => {
  console.log(i);
  console.log(el.nodeValue);
});
console.groupEnd();

console.groupCollapsed("data");
child.forEach((el, i) => {
  console.log(i);
  console.log("Data before");
  console.log(el.data);
  console.log("Data after");
  console.log((el.data += i));
});
console.groupEnd();

// textContent изменяет текст внутри всех узлов
console.groupCollapsed("textContent");
child.forEach((el, i) => {
  console.log(i);
  console.log("textContent before");
  console.log(el.textContent);
  console.log("textContent after");
  console.log((el.textContent += ` ${i}`));
});
console.groupEnd();
