// 1 задача
// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]

console.log(Math.min(...arr));

// 2 задача
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (count) => {
    return {
        increment: () => {
            count++;
            return count;
        },
        decrement: () => {
            count--;
            return count;
        }
    }
}

const counter = createCounter(10);

console.log(counter.increment());
console.log(counter.decrement());

// 3 задача
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

const findElementByClass = (element, searchClass) => {
    if (element.className === searchClass) {
        return element;
    }
    for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        const foundElement = findElementByClass(child, searchClass);
        if (foundElement !== null && foundElement.className==searchClass) {
          return foundElement;
        }
      }
      return null;
    }

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);





