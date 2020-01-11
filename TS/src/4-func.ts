// функции объявляются также как и в обычном js
// через ключевое слово function, можно объявлять анонимные функции
// и поддерживаются стрелочные функции

// объявление функции
function helloWorld() {
  console.log("Hello world");
}

// При объявление функции и его параметров
// то параметры автоматически становятся обязательными
// также можно указать тип параметра,
// а если не указывать то может принимать любой тип
/**
 * Функция эмулирующая поиск
 * @any data required
 * @any element required
 */
function search(data, element) {
  console.log(data);
  console.log(element);
  console.log(typeof data);
  console.log(typeof element);

  return 2 + 3;
}

search(344, "some");
search(true, undefined);

console.log(search(234, 234));

// Функция с типизированным параметром,
// также можно указать тип возвращаемого значения функции
// а если не указывать то можно возвращать любой тип
// типы которые может возвращать функция,
// примечание, во всех функциях можно возвращать null и undefined:
// void - ничего не возвращает
// number - числовой тип данных
// string - строковый тип данных
// boolean - логический тип данных
// Array<type> - массив с обозначенными типами
// tuple - коретежи

function greet(username: string) {
  if (userName === "number") {
    return 234 + 324;
  }

  return `Hello, ${username}`;
}

function multiple(x: number, y: number, z?: number): number {
  const res = x * y;

  if (!z) {
    return res;
  }

  return res * z;
}

// Возращение котрежа
function g(): [string, boolean] {
  return ["some", true];
}

console.log(multiple(5, 5));
function returnNothing(): void {
  console.log("The quick brown fox jump over the lazy dog");
  return null;
}

console.log("returnNothing", returnNothing());

// чтобы обявить необязательный параметр нужно поставить
// после имени параметра ? знак,
// а если хочется указать значение по умолчанию
// то нужно после указания типа поставить знак = и значение
function sum(fn: number, sn: number = 0, tn?: number) {
  let s = fn + sn;
  console.log({ tn });
  if (tn) {
    return console.log(s + tn);
  }

  console.log({ s });
}

sum(9);
sum(4, 8);
sum(3, 9, 7);

// Неопределенный набор параметров
// Если мы не знаем колчичетсво принимаемых параметров
// которые имеют один и тот же тип то используется многоточие после массива
// он становится необязательным
function addNumbers(firstNumber: number, ...numbers: number[]) {
  return firstNumber + numbers.reduce((res, num) => res + num, 0);
}

console.log(addNumbers(34));
console.log(addNumbers(45, 98, 234));

// Перезагрузка методов
// является приемом для объявления методов
// с одинаковой сигнатурой (именем или логикой обработки данных),
// но сразными типами параметров, количеством аргументов

function goTo(path: string): string;
function goTo(to: string, from: string): { count: number };
function goTo(x: any, y?: any): string | { count: number } {
  if (typeof x === "string") {
    console.log("MyPath:", x);
  }

  if (typeof x === typeof y) {
    console.log(`I'm from ${x} to ${y}`);
    return { count: 8 };
  }
}

goTo("Long way");
goTo("university", "home");

// анонимная функция
// пример определения анонимной функции
const nameFunction: (
  stringValue: string,
  numValue: number
) => number = function(x: string, y: number): number {
  return x.length * y;
};

// определение типа функции в переменную,
// которая может принимать функции с двумя параметрами числового типа
// и возвращающий числовой тип
let numOper: (x: number, y: number) => number;

const addNumber: (
  firstNumber: number,
  secondNumber: number
) => number = function(x: number, y: number) {
  return x + y;
};

const substract: (
  firstNumber: number,
  secondNumber: number
) => number = function(x: number, y: number) {
  return x - y;
};

let userAction: string = "add";
let i: number = 0;
while (i < 2) {
  ++i;
  if (userAction === "add") {
    numOper = addNumber;
    console.log("ADD", numOper(5, 5));
  }
  if (i === 1) {
    userAction = "substract";
    numOper = substract;
    console.log("SUBSTRACT", numOper(10, 5));
  }
}

numOper = addNumber;

// Функции могут принимать в качестве параметров
// другие функции (функции обратного вызова).
// При определении типа функции принимающей функции
// можно вовратить тип функции через другую функцию (функция обратного вызова)

type strOrNum = string | number;
function concat(
  x: strOrNum,
  y: strOrNum,
  con: (x: strOrNum, y: strOrNum) => strOrNum
): strOrNum {
  return con(x, y);
}

const conNum: (x: number, y: number) => number = function(
  x: number,
  y: number
) {
  return x + y;
};

const conStr = function(x: string, y: string) {
  return x + y;
};

console.log(concat(8, 9, conNum));
console.log(concat("some", "string", conStr));
