let arr = ["apple", "orange", "lemon"];

function rand({min = 0, max}) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}

console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
console.log(arr[rand({max: arr.length - 1})])
