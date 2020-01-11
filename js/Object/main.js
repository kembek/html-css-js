let obj = {},
  Obj = Object.create({}),
  OBJ = new Object(),
  objSec = {
    sss: "sssss",
    width: 50,
    transparent: 1,
    opacity: 0.4,
    background: "url(img/1.jpeg)",
    ["some"+"Plus"]: 200,
    "transition-all": 80
  };

console.dir("obj: ", obj);
console.dir("Obj: ", Obj);
console.dir("OBJ: ", OBJ);

let name = "Kembek",
  age = 20,
  skills = ["js", "html", "css"],
  props = [
    { prop: "name", value: "Lol" },
    { prop: "age", value: "20" },
    { prop: "skills", value: ["sql", "0", "58"] }
  ];

console.log("");
obj["name"] = name;
obj["age"] = age;
obj["skills"] = skills;
console.dir(obj);

console.log("");
for (let z = 0; z < props.length; ++z) {
  OBJ[props[z].prop] = props[z].value;
}
console.dir(OBJ);

console.log("");
Obj.name = name;
Obj.age = age;
Obj.skills = skills;
console.dir(Obj);
