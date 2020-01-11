// Фабричный метод(статичный метод) - для создания объектов еси известны дынные которые нужны для объекта
const ELEMENT_COUNT = 10;

// Конструктора для создания экземпляров объекта
function Container(
  tag,
  className,
  width = "100px",
  height = "100px",
  background = "yellowgreen",
  margin = "10px"
) {
  const __tag = document.createElement(tag);
  __tag.className = className;
  __tag.style.width = width;
  __tag.style.height = height;
  __tag.style.backgroundColor = background;
  __tag.style.margin = margin;

  return __tag;
}

// Проверка на тип
function checkString(value) {
  return typeof value === "string";
}

// Декоратор(функция обертка) предназначена
// для расширения возможностей уже имеющейся функции
function functionWrapperForCheckString(func, check) {
  // здесь происходит самое интересное
  // мы возвращаем  функцию обертку
  // "если она проходит валидацию" (это и есть наше расширение)
  // так, как все аргументы проходят через анонимную функцию
  // мы можем писать соответствующую логику
  return function(value) {
    if (!check(value)) {
      return console.error("Некорректный тип, аргумент должен быть string!");
    }

    return func.apply(this, arguments);
  };
}

// Фабричный метод для получения контейнера
Container.find = function(selector) {
  return document.querySelector(selector);
};

// оборачиваем нашу функцию
Container.find = functionWrapperForCheckString(Container.find, checkString);

// Generate container and append in "body"
for (let i = 0; i < ELEMENT_COUNT; ++i) {
  let _tagTmp = new Container("div", `class-${i}`);
  document.body.appendChild(_tagTmp);
}

// Произойдет ошибка при проверке так как это не строка
const errorDiv = Container.find(5);

// получение объекта через селектор класса
const div = Container.find(".class-1");
div.style.backgroundColor = "red";
