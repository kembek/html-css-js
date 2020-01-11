let str = 'Hello world',
    Str = String('The quick brown fox jumps over the lazy dog.'),
    STR = new String('The quick brown fox jumps over the lazy dog.');

console.log('typeof str: '+ typeof str);
console.log('typeof Str: '+ typeof Str);
console.log('typeof STR: '+ typeof STR);

// .toLowerCase(), .toUpperCase() -- для управления регистром
console.log('Str.toLowerCase() ' + Str.toLowerCase());
console.log('Str.toUpperCase() ' + Str.toUpperCase());

// длина строки
console.log(str.length);

// .charAt(position) - для получения символа на определенной позиции
console.log("str.charAt(4)", str.charAt(4)); // o
console.log("str.charAt()", str.charAt()); // H
console.log("str.charAt(100)", str.charAt(100)); // ничего не возвращает
// можно также получить символ через []
console.log("");
console.log("str[4]", str[4]); // o
// console.log("str[]", str[]); // Error
console.log("str[100]", str[100]); // undefined


// .substring(starPosition [, endPosition]) - возращает подстроку с начала до определенной позиции
console.log('str.substring(4, 8) ', str.substring(4, 8)); // o wo
// .substr(starPosition [, length]) - возращает подстроку с начала до определенной длинны
console.log('str.substr(4, 4) ', str.substr(4, 4)); // o wo
// если нету второго аргумента до метод идет до конца строки

// .slice(starPosition [, endPosition]) - возращает подстроку с начала до определенной позиции 
// !!! Рекомендуется использовать этот метод так как он адекватно работает с отрицательными аргументами
console.log('str.slice(4, 8) ', str.slice(4, 8)); // o wo
console.log('str.slice(4, 8) ', str.slice(4, -1)); // o worl

// .indexOf(searchText [, position]) -- метод для поиска подстроки в строке, если метод находит то возращает его позицию, если нет то -1
console.log("str.indexOf('world') " + str.indexOf('world')); // 6
// .lastIndexOf(searchText [, position]) -- метод для поиска подстроки c конца
console.log("str.lastIndexOf('o') " + str.lastIndexOf('o')); // 7

// .trim() -- для удаления пробелов в начале и в конце строки
console.log("  ss    ss   ".trim());

// .split(separator)