// function name(parameter, parameter, ...parameter) {
//   function body...
// }

// name(аргументы);

// Function expression
// могут использоваться как обычные примитивные данные, 
// т.е. присваиваться переменной в зависимости от условий 
// !!!ВАЖНО: функции можно присваивать 
//           как переменные если их не вызывать
let fnc = (function () {
    console.log('Hello world!');
});

let say = null;
if (Math.floor(Math.random() * 10) > 5) {
    say = function () {
        return 'Bye';
    }
} else {
    say = function () {
        return "Hi";
    }
}
console.log("function expression результат сравнения: ", say());
console.log("");
console.log("Вывести код функции: ", fNc);

// Function decralation функции можно вызывать 
// любом месте (в начале, в конце, в середине) до объявления его в коде 
fNc();

// Function decralation
function fNc() {
    console.log("hello world!");
}

/**
 * Функции можно создавать с помощью конструктора 
 * new Function(params,  code);
 * type
 *  -- params   - string
 *  -- code     - string
 * 
 */
let FNC = new Function('a, b', 'console.log("Hello world!", a+b)');
FNC(5, 6);

// при объявлении параметра она становится локальной переменной для функции
function someFnc(one, two, three, four) {
    // если не передать столько же аргументов 
    // сколько и параметров то не объявленные 
    // параметр будет иметь значение undefined

    // ERROR!!! -- короче будет ошибка посмотри на параметры
    // Uncaught SyntaxError: Identifier 'one' has already been declared
    // let one = 's';

    // также можно возратить результат выполнения функции через return
    // и прервать дальнейшей прохождение функции
    // return 'Some result';

    // Просто завершить работу ничего не возвращая
    // return;
}

// если функция ничего не возвращает, то она возвращает undefined
console.log('someFnc result "%s" someFnc result', someFnc());

// функции можно передавать как аргументы другой функции
function sum(callback, arr) {
    return callback(arr);
}

// функция для сложения чисел
function sumCallback(arr) {
    return arr.reduce(function (iteration, item) {
        return iteration += item;
    }, 0);
}

// функция для конкатенации строк
function concatCallback(arr) {
    return arr.reduce(function (iteration, item) {
        return iteration += " " + item;
    });
}

console.log("sum result %s", sum(sumCallback, [1, 2, 3, 4, 5]));
console.log("concat result %s", sum(concatCallback, ["Hello", "world", "!"]));

// можно возвращать функции, как примитивные данные
// примитивный пример замыкания
function counter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

let c = counter();


console.log(typeof c);
console.log(c());
console.log(c());
console.log(c());


// функция является объектом и ей можно присваивать свойства
function s() { }

// присваиваем свойство
s.ss = 'DDD';
console.log(s());
console.log(s.ss);

// анонимная самовызывающиеся функция
; (function () {
    console.log("анонимная самовызывающиеся функция");
}());

let selfInvokingFunction = (function (name) {
    return name;
}("Zzzz"));

console.log(selfInvokingFunction);

function copy() {
    const resultObj = arguments[0];

    for (let i = 1; i < arguments.length; ++i) {
        const tempObj = arguments[i];
        for (let key in tempObj) {
            resultObj[key] = tempObj[key];
        }
    }

    return resultObj;
}

let one = { s: "sss", ss: 'sss', dd: 'sss' }, two = one, three = { ar: [1, 2, 3, 45], s: 'dd' };

console.log("copy", copy({}, one, two, three));


function validation(x) {
    return arguments.length
}

console.log(validation());
console.log(validation(undefined));

function sss() {
    let z = 0;
    for (let s = 0; s < arguments.length; ++s) {
        z += arguments[s];
    }

    return z;
}

console.log(sss(34, 34, 32));

function isNumber(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

let clousure = (function () {
    let count = 0;
    return function (num) {
        return isNumber(num) ? count = num : ++count;
    }
}())

console.log(clousure(200));
console.log(clousure());
console.log(clousure());
console.log(clousure());

let clousureSecond = function (num) {
    return isNumber(num) ? clousureSecond.count = num : ++clousureSecond.count;
}

clousureSecond.count = 0;

console.log(clousureSecond(300));
console.log(clousureSecond());
console.log(clousureSecond());
console.log(clousureSecond());


