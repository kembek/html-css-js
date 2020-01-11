const domChildren = Array.prototype.slice.call(document.body.children);

domChildren.map(element => {
  console.log(element);
  // matches проверяет елемент на схожесть с селектором
  // только с данным элементом
  // и возвращает булевое значение
  console.log(element.matches("div"));
});

const text = document.querySelectorAll(".text");
text.forEach(tx => {
  // closest проверяет текущий элемент и
  // пробегается по родителям с условием css селектора
  // и возвращает найденный элемент
  console.log(tx);
  const finded = tx.closest(".child");
  if (!finded) {
    return;
  }
  console.log(finded);
  finded.classList.add("find");
});
