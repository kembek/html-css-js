let str = "/fo.la/some.lol.js/avatar.js";
let suffix = "_my_custom_word";

let s = str.replace(/\.[0-9a-z]+$/i, match => `${suffix}${match}`);
console.log(s);
