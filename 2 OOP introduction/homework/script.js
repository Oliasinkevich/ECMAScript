// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Книга, которая Вас интересует называется ${this.title}, автор ${this.author}, количество страниц ${this.pages}.`);
    }
}

const Dostoevskiy = new Book('Идиот', 'Фёдор Михайлович Достоевский', 637)
Dostoevskiy.displayInfo();

// Задание 2: ""Управление списком студентов""

// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    constructor (name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo2() {
        console.log(`Информация о студенте: ${this.name}, ${this.age} лет/года, ${this.grade} класс.`);
    }
}

const Ivan = new Student('Иванов Иван Иванович', '25', '11A');
Ivan.displayInfo2();

// ****** Задача необязательная для выполнения:

// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

class Client {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.accounts = [];
    }
    addAccount = (account) => this.accounts.push(account);
  }

class Bank {
    constructor(bankName) {
      this.bankName = bankName;
      this.accounts = [];
      this.clients = [];
    }
  
    addClient = client => this.clients.includes(client) ? this.clients : this.clients.push(client);
    showAllClients = () => console.log(this.clients);
    showAllAccounts = () => console.log(this.accounts);
    openAccount = (client, amount) => {
      this.addClient(client);
      const account = `${Math.floor(Math.random() * 10000)}`;
      client.addAccount(account);
      this.accounts.push({ account: account, balance: amount });
      return account;
    }
    getAccount = account => this.accounts.find(value => account == value.account);
    checkBalance = account => console.log(this.getAccount(account).balance);
    deposit = (account, amount) => {
      console.log(`Deposited ${amount} into account ${account}. New balance ${this.getAccount(account).balance += amount}`);
    }
    withdraw = (account, amount) => {
      const fullAccount = this.getAccount(account);
      if (fullAccount.balance - amount >= 0) {
        console.log(`Withdrawn ${amount} from account ${account}. New balance: ${fullAccount.balance -= amount}`);
      }
      else {
        console.log(`Insufficient funds in account ${account}`);
      }
    }
  }

const bank = new Bank('Приорбанк');

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);
  
bank.addClient(client1);
bank.addClient(client2);

const account1 = bank.openAccount(client1, 1000);
const account2 = bank.openAccount(client2, 2000);
const account2_1 = bank.openAccount(client2, 1000);
bank.showAllClients();
bank.showAllAccounts();
bank.checkBalance(account1);
bank.checkBalance(account2);
bank.deposit(account1, 500);
bank.deposit(account2, 200);
bank.showAllAccounts();
bank.withdraw(account2, 3000);
bank.withdraw(account2_1, 1000);
bank.checkBalance(account2);
bank.checkBalance(account2_1);