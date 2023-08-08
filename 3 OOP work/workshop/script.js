// 1 задача

// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype

const getPrototypeChain = (obj) => {
    const result = [];
    while (obj !== null) {
        result.push(obj);
        obj = Object.getPrototypeOf(obj)
    }
    return result;
}

console.log(getPrototypeChain({key: 1 }));

// 2 задача

// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным. 
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".

// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

class Animal {
    constructor (name) {
        this.name = name;
    }
    speak () {
        console.log(`${this.name} издаёт звук`);
    }
}

class Dog extends Animal {
    constructor (name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch () {
        console.log(`Собака ${this.name} принесла мяч`);
    }
    speak () {
        console.log(`Животное ${this.name} издаёт звук`);
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

