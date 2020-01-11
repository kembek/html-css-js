// union
// оператор вертикальная черта служит для объединения двух типов
let stringOrNumber: string | number = "234234";
stringOrNumber = 234;

// typeChecking
// проверка типа проводится через typeof
let mySum: any;

console.log(typeof mySum); // undefined

mySum = 234;

if (typeof mySum === "number") {
  console.log(mySum + 1000);
  console.log(mySum); // 1234
} else {
  console.log(mySum); // undefined
}

// Под типы
// также можно создавать под типы (комбинировать)
// через ключевое слово type
type id = string | number;
let userId: id = 2424;
userId = "adf4534wf";

// type assertion
// нужен для преобразования типов
// можно сделать через два пути
// as === <TYPE>

let someSentence: any = "The quick brown fox over jump the lazy dog";
console.log(someSentence.length);

let some: any = "the quick brown fox";
some.length;
console.log(some.length);
// преобразование через <TYPE>
(<string>some).length;

let z: string | number = 34;
z = "Some sentence";
// преобразование через оперетор as
let y: string = z as string;

console.log(typeof y);
