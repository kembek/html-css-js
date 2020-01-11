const message = document.querySelector(".message");
const alert = document.querySelector("[data-name]");

console.group("attributes");
console.log("message - attributes collection")
console.log(message.attributes);

console.log("getAttribute(attributeName)");
console.log(message.getAttribute("class"));

console.log("hasAttribute(attributeName)");
console.log(message.hasAttribute("class"));

console.log("setAttribute(attributeName, value)");
console.log(message.setAttribute("id", "message"))

message.setAttribute("title", "Sometext");
console.log("Before message");
console.log(message.outerHTML);
console.log("removeAttribute(attributeName)");
console.log(message.removeAttribute("title"))
console.log("After message");
console.log(message.outerHTML);

console.groupEnd();

console.group("property");
document.body.childNodes.forEach(child => {
  child.whoIm = whoIm;
  child.whoIm();
});
console.groupEnd();

console.group("class");
console.log("className");
console.log(message.className);

console.log("message.classList.add(class [,...class])");
console.log(`message.classList.add("disabled", "warning", "hugo")`);
console.log(message.classList.add("disabled", "warning", "hugo"));

console.log("classList - collections class");
console.log(message.classList);

console.log(`message.classList.contains(className)`);
console.log(`message.classList.contains("disabled")`);
console.log(message.classList.contains("disabled"));

console.log("message.classList.remove(class [,...class])");
console.log(`message.classList.remove("warning", "hugo")`);
console.log(message.classList.remove("warning", "hugo"));

console.log("message.classList.toggle(class [,...class])");
console.log(`message.classList.toggle("disabled")`);
console.log(message.classList.toggle("disabled"));

console.log("Result");
console.log(message.classList);
console.groupEnd();

console.group("dataset");
console.log("data-*");
console.log("data-name > dataset.name")
console.log(alert.dataset.name);
console.log("data-role-window > dataset.roleWindow")
console.log(alert.dataset.roleWindow);
console.groupEnd();

function whoIm() {
  console.log(`I'm ${this.nodeName}`);
}
