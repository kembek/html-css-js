
/**
 * Три вида циклов
 * for(;;)
 * do {} while()
 * while()
 */


for (let i = 0; i < 5; ++i) {
    console.log("hello %s iteration", i);
}


console.log("");
let w = 0;
// Этот цикл выполняется пока условие истинно, 
// условие можно комбинировать и усложнять
while (w < 5) {
    console.log("while %s", w);
    ++w;
}

console.log("");
let d = 0;
// Этот цикл выполняется один раз в независимости от условий, 
// а потом она выполняется как обычный while цикл
do {
    console.log('do %s', d);
    ++d;
} while (d < 5);

/**
 * Условные инструкции
 * 
 * ?: - тернарный оператор
 * 
 * if()
 * if() else()
 * if() else if() else()
 * 
 * switch()
 *  case 1: 
 *      ...
 *      break; || return;
 *  case 2: 
 *      ...
 *      break; || return;
 *  case n: 
 *      ...
 *      break; || return;
 *  default:
 *      ...
 *      break; || return;
 * 
 * если не указывать break, то он проваливается в другой case
 * switch()
 *  case 1:   
 *  case 2: 
 *      ...
 *      break;
 *  case n: 
 *      ...
 *      break;
 *  default:
 *      ...
 *      break;
 */

let personOne = { age: 20, name: 'alex' }, personTwo = { age: 12, name: 'john' }, personThree = { age: 45, name: 'richard' };
let z = false ? 'sss' : 'zzz';

if (personOne.age < personThree.age) {
    alert(personThree);
} else if (personOne.age > personTwo.age) {
    alert(personOne);
} else {
    alert(personTwo);
}

// TODO: write switch

