// объявление класса
class Example {
  // свойства класса
  id: number = 0; // начальное значение
  name: string;
  list: string[] = [];

  // статичная переменная
  static PI: number = 3.14;

  // объявление конструктора - для первоначальной
  // инициализации объекта
  constructor(id: number, name: string, list: string[]) {
    this.id = id;
    this.name = name;
    this.list = list;
  }

  // объявление функции
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }

  // статичинная функция для создания объектов
  static create(id: number, name: string, list: string[]) {
    return new Example(id, name, list);
  }
}


