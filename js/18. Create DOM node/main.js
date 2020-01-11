const template = {
  width: 200,
  height: 200,
  margin: 5,
  background: "red"
};

const comment = document.createComment("this COMMENTARY create with JS");
const text = document.createTextNode("this TEXT create with JS");

const element = document.createElement("div");

const head = document.head;



element.style.width = "200px";
element.style.height = "200px";
element.style.color = "200px";
element.style.background = "yellow";

document.body.append(comment, text, element);
