// Задание 1
// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

function mergeArrays() {
    const newArr = Array.from(arguments);
    return newArr;
  }
  
  function mergeArrays2(a, b) {
    return [...a, ...b];
  }
  
  const arr1 = [2, 5, 2, 6, 7];
  const arr2 = [0, 3, 5, 7];
  const arr3 = [10, 13, 15, 17];
  
  console.log('mergeArrays = ' + mergeArrays(...arr1, ...arr2, ...arr3));
  console.log('mergeArrays2 = ' + mergeArrays2(arr1, arr2));

  
// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]
  
removeDuplicates = (...arr) => arr.sort((a, b) => b - a).filter((item, pos) => arr.indexOf(item) == pos)

removeDuplicates2 = (arr) => {
let result = [];
for (let i = 0; i < arr.length; i++) {
if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
}
return result;
}
 
console.log(removeDuplicates(1, 3, 2, 5, 1, 3, 7, 7, 8, 8, 9, 9, 4, 4));
  
console.log(removeDuplicates2(mergeArrays2(arr1, arr2)));


// const removeDuplicates = (...numbers) => {
//     const uniqArray = [...new Set([...numbers])]
//     return uniqArray;
// }
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

// Задание 2
// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

const getEvenNumbers = (arr) => {
  const newArray = arr.filter ((el) => {
      if (el%2 === 0) {
          return el;
      }
  })
  return newArray;
  }
  
  console.log(getEvenNumbers([7, 9, 10, 2, 1, 5, 6]));
   
// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const calculateAverage = (arr) => {
const averageNumber = arr.reduce ((result, item) => result + item ) / arr.length
return averageNumber
}
console.log(calculateAverage([7, 9, 10, 2, 1, 5, 6]));


// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

// Генератор
// https://ru.infobyip.com/regularexpressioncalculator.php
// https://regex101.com/

const capitalizeFirstLetter = (str) => {
    return str.replace (/(^|\s)\S/g, (letter) => letter.toUpperCase())
}
console.log(capitalizeFirstLetter('информатика умная наука наверное'));


// Задание 3
// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.

const createCalculator = (num) => {
  return {
    add: (digit) => num + digit,
    substract: (digit) => num - digit
  }
}

const temp = createCalculator(10);
console.log(temp);
console.log(temp.add(5));
console.log(temp.substract(5));

// Задание 4
// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => {
  const greeting = (name) => `Hello ${name}`;
  return greeting(name);
}

console.log(createGreeting('Vasya'));
// 129->124->126->125


// Задание 5
// Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (password, length = 8) => {
  const validPassword = (password) => password.length <= length ? true : false;
  return validPassword(password);
}

console.log(createPasswordChecker('passwor', 7));
console.log(createPasswordChecker('pas'));


// Задание 6
// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// // Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

// рекурсия
// const sumDigits = (num) => {
//   num = `${num}`;
//   if (num.length === 1) {
//     return +num;
//   }
//   return +num[0] + sumDigits(num.slice(1));
// }

const sumDigits = (num) => {
  let sum = 0;
  for (const char of '${num}') {
    sum += +char;
  }
  return sum;
}

console.log(sumDigits(1234));