let range = [4, 5, 3, 2, 1, 8, 9, 0];

function filterRange(arr, min, max) {
  const newArr = [];

  arr.forEach(a => {
    if (a >= min && a <= max) {
      newArr.push(a);
    }
  });

  return newArr;
}

console.log(filterRange(range, 3, 5))
