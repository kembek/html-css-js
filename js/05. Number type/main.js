"use strict";

let num = 5, // простая переменная
  Num = Number(55), // конструктор
  NUM = new Number(555); // !!! это объект, а не цифра

console.log(typeof num); // number
console.log(typeof Num); // number
console.log(typeof NUM); // object

// Infinity - бесконечность
// NaN - ошибка арифметической операции
let myNaN = NaN,
  myInfinity = Infinity;

// isNaN() - для проверки числа на NaN
console.log("");
console.log("isNaN(myNaN) " + isNaN(myNaN)); // true
console.log("isNaN(num) " + isNaN(num)); // false
console.log("isNaN(myInfinity) " + isNaN(myInfinity)); // false

// isFinite() - для проверки числа на валидность
console.log("isFinite(myInfinity) " + isFinite(myInfinity)); // false
console.log("isFinite(myNaN) " + isFinite(myNaN)); // false
console.log("isFinite(num) " + isFinite(num)); // true
console.log("");

// + - унарный оператор для явного преобразования

console.log(+"5"); // 5
console.log(typeof +"5"); // number

console.log(-"5"); // -5 // -5
console.log(typeof -"5"); // number
console.log("");

// мягкое преобразование
// вещественное преобразование
let strNum = "15.6px";
console.log("parseFloat('15.6px') " + parseFloat(strNum));
// цело численное преобразование
console.log("parseInt('15.6px') " + parseInt(strNum));
console.log("");

// .toFixed()
// числа после запятой
console.log(num.toFixed(2));
console.log((5).toFixed(2));
// .toFixed(5)
// пять чисел после запятой
console.log(Num.toFixed(5));
console.log(NUM.toFixed(5));
console.log("");

// .toPrecision() - для вывода определенной точности
num = 15.67;
console.log(num.toPrecision(3)); // 15.7 - три числа
console.log("");

// генерация рандомного числа
console.log("Generate random " + Math.random());

// Округление числа
console.log("Округление от 0 до 10: " + Math.floor(Math.random() * 11));

// округление вверх
console.log(Math.ceil(9.6));

// округление вниз
console.log(Math.floor(9.6));
