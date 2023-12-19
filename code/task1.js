document.write(`1. Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
rate (ставка за день роботи), days (кількість відпрацьованих днів).
Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.<hr>`);



function Worker(name, surname, rate, workDays) {

    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.workDays = workDays;

    Worker.prototype.getSalary = function() {
        return this.rate * this.workDays;
    }

    Worker.prototype.currency = "$";
}




const workerRoman = new Worker("Roman", "Siforov", 4000, 23);

const workerAlexandra = new Worker("Alexandra", "Siforov", 5000, 15);


document.write(`${workerRoman.name} will get ${workerRoman.getSalary()}${workerRoman.currency}<hr>`);

document.write(`${workerAlexandra.name} will get ${workerAlexandra.getSalary()}${workerAlexandra.currency}<hr>`);