// объявление переменной
// let - immutable
// const - not immutable

// точка с запятой не обязательно

// Синтаксис
// const varName [: <elemType>] = value;

// Типы данных в TypeScript

// * number - числовой тип (1.4, 5, 98)
const age: number = 21;
let num = 45;
// num = "some"; --- error

// * string - стоковой тип ("Some sentence", 'The just example', `Lorem ipsum`)
const userName: string = "Luke";
let secondName = "Sky Waker";
// secondName = 54; --- error
// объявление строковой переменной
let surName = "Sky Waker";

let sentence: string = `
  Hello TypeScript! 
  I love you!
`;

// * boolean - логический тип данных (true, false)
const isAdmin: boolean = true;
let isDeleted = false;

// * any - любой тип данных, т.е. она может хранить значение любого типа
const noType: any = "some";
let weather: any = "Sun";
weather = 31;
weather = true;

// объявление переменной с любым типом
let mix;
console.log(mix); // undefined
console.log(typeof mix); // undefined
mix = 5;
mix = "Hello";
// mix => "Hello"
let anyType: any = "One";
anyType = true;
anyType = 5;
// anyType => 5

// * undefined, null - типы данных которые являются
// подтипами данных если неизвестно начальные данные

// объявление undefined и null
let u: undefined = undefined;
// u = "s"; --- error
let n: null = null;
// n = "some"; --- error
// если мы незнаем какие будут у нас данные,
// но только с числовым типом
let dontKnowValue: number = undefined;
dontKnowValue = null;
dontKnowValue = 5;
// если мы незнаем какие будут у нас данные,
// но только с строковый тип
let whoIs: string = null;
whoIs = "Nill";

// * array - массив для хранения однотипных данных
const numberArray: Array<number> = [5, 64, 23, 100, 5.6, 89];
const stringArray: string[] = ["The", "Lazy"];
const anyArray: any[] = [12, "The word", false, {}];

// объявление двумерного массива
const numberMatrix: number[][] = [[123, 123, 123], [123, 123, 123]];

// объявление трехмерного массива
const _3dNumber: Array<Array<Array<number>>> = [
  [[234], [32423, 324234]],
  [[234234], [234234, 23423]]
];

// enum - это для перечисления числовых данных с помощью строковых данных
// перечисление начинается с 0 и до конца списка
enum months {
  January, // 0 ...
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December // 11
}
let currentMonths: months = months.May;
console.log(currentMonths); // 4

// мы можем переопределить числовые значения
enum week {
  Sunday = 7,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}
// получение строки перечисления
let weekName: string = week[4]; // Thursday
console.log(weekName);

// tuple - кортежи нужны если нам заранее
// известны типы которые будем хранить
let userStatus: [string, boolean];
userStatus = ["jack", true];
// userStatus = [true, "jack"]; --- нужно соблюдать порядок присвоения значения

// object - объект тип данных представляющий набор ключа и значения или методов
let person = {
  userName: "Luke",
  age: 21
};

// при редактировании нужно соблюдать строгость типов ключей и колличества
// person = {
//   userName: "Kembek"
// } --- ошибка из за не соответсвия количества

let car: { model: string; color: string; isWorked: boolean; go: () => string };
car = {
  go() {
    return this.model;
  },
  model: "Mercedes",
  color: "black",
  isWorked: true
};

// void  - отсутствие конкретного значения, используется
// в качестве возвращаемого типа для  функций
// never - представляет отсутвие значения и используется
// для возвращаемого типа для функций для обработки ошибок
