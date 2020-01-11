const arr = ['test', 2, 1.5, false]

function find(values, findValue) {
  return values.indexOf(findValue)
}

console.log(find(arr, 'test'))
console.log(find(arr, 2))
console.log(find(arr, 1.5))

console.log(find(arr, 0))
