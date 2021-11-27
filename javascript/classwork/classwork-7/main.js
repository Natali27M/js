// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, year, speed, motor,addDriver) {
//     this.model = model;
//     this.year = year;
//     this.speed = speed;
//     this.motor = motor;
//     this.drive=function () {
//         return `їдемо зі швидкістю ${this.speed} на годину`;
//     }
//     this.info=function () {
//        return `model-${this.model},year-${this.year},speed-${this.speed},motor-${this.motor}`
//     }
//     this.increaseMaxSpeed=function (newSpeed) {
//         return `${speed + newSpeed}`;
//     }
//     this.newYear=function (newYear) {
//         return `${year + newYear}`;
//     }
//     this.addDriver = addDriver;
// }
// function AddDriver(name,age) {
//     this.name = name;
//     this.age = age;
// }
//
// let Car1=new Car('chevrolet',2013,220,2.2)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// console.log(Car1.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// console.log(Car1.info());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// console.log(Car1.increaseMaxSpeed(30));

// -- changeYear (newValue) - змінює рік випуску на значення newValue
// console.log(Car1.newYear(5));

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// let Car2 = new Car('BMW', 2017, 300, 2.6,new Drive('Vasya',31));
// console.log(Car2.addDriver);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
class Car {
    constructor(model, year, speed, motor) {
        this.model = model;
        this.year = year;
        this.speed = speed;
        this.motor = motor;
        this.drive = function () {
            return `їдемо зі швидкістю ${speed} на годину`
        };
        this.info = function () {
            return `model-${this.model},year-${this.year},speed-${this.speed},motor-${this.motor}`;
        };
        this.increaseMaxSpeed=function (newSpeed) {
            return `${speed + newSpeed}`;
        }
        this.changeYear=function (newValue) {
            return `${year + newValue}`;
        }

    }
}
let cars = new Car('mercedes-benz', 2015, 250, 2.0);
console.log(cars);

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
console.log(cars.drive());

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
console.log(cars.info());

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
console.log(cars.increaseMaxSpeed(30));

// -- changeYear (newValue) - змінює рік випуску на значення newValue
console.log(cars.changeYear(6));

// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class AddDrive extends Car {
    constructor(model, year, speed, motor, driverName,driverAge) {
        super(model, year, speed, motor);
        this.driver = {
            name:driverName,
            age:driverAge,
        };
    }
}

let car2 = new AddDrive('mercedes-benz', 2015, 250, 2.0, 'Vasya',31);
console.log(car2.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellas=[
    new Cinderella('Olya',18,36),
    new Cinderella('Vika',24,38),
    new Cinderella('Sofia',16,35),
    new Cinderella('Natalya',25,37),
    new Cinderella('Zoa',32,40),
    new Cinderella('Tonya',17,36),
    new Cinderella('Diana',24,38),
    new Cinderella('Liza',35,39),
    new Cinderella('Maria',17,36),
    new Cinderella('Nina',26,38)
]
console.log(cinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince = new Prince('Victor', 35, 37);
console.log(prince);


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let i = 0; i < cinderellas.length; i++) {
    const cinderella = cinderellas[i];
    if (cinderella.size === prince.shoe) {
        console.log(cinderella);
    }
}


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find=cinderellas.find(element => element.size === prince.shoe);
console.log(find);