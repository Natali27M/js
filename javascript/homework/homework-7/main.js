// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let Users=[
    new User(6, 'Vasya', 'Abrikosov', 'vs@gmail.com', 80971111111),
    new User(9, 'Olya', 'Vishnova', 'ov@gmail.com', 80972222222),
    new User(3, 'Liza', 'Pirogova', 'lp@gmail.com', 80973333333),
    new User(4, 'Petya', 'Persikov', 'pp@gmail.com', 80974444444),
    new User(10, 'Natalya', 'Slivova', 'ns@gmail.com', 80975555555),
    new User(1, 'Kolya', 'Arbyzov', 'ka@gmail.com', 80976666666),
    new User(7, 'Vitya', 'Gryshov', 'vg@gmail.com', 80977777777),
    new User(8, 'Ira', 'Rybinina', 'ir@gmail.com', 80978888888),
    new User(2, 'Katya', 'Orehova', 'ko@gmail.com', 80979999999),
    new User(5,'Tolya','Kartoshkin','tk@gmail.com',80971234567)
];
console.log(Users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log( Users.filter(value => value.id % 2 === 0));


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(Users.sort((u1, u2) => u1.id - u2.id));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let Clients=[
    new Client(6, 'Vasya', 'Abrikosov', 'vs@gmail.com',80971111111,['bread','sugar']),
    new Client(9, 'Olya', 'Vishnova', 'ov@gmail.com', 80972222222,['bread']),
    new Client(3, 'Liza', 'Pirogova', 'lp@gmail.com', 80973333333,['bread','sugar','butter']),
    new Client(4, 'Petya', 'Persikov', 'pp@gmail.com', 80974444444,['sugar']),
    new Client(10, 'Natalya', 'Slivova', 'ns@gmail.com', 80975555555,['salt','sugar','cake']),
    new Client(1, 'Kolya', 'Arbyzov', 'ka@gmail.com', 80976666666,['carrot','tomato','potato','plum']),
    new Client(7, 'Vitya', 'Gryshov', 'vg@gmail.com', 80977777777,['salt','sugar','cake']),
    new Client(8, 'Ira', 'Rybinina', 'ir@gmail.com', 80978888888,['carrot','tomato','potato','plum','apple']),
    new Client(2, 'Katya', 'Orehova', 'ko@gmail.com', 80979999999,['bread']),
    new Client(5,'Tolya','Kartoshkin','tk@gmail.com',80971234567,['carrot','tomato','potato','plum'])
]
console.log(Clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(Clients.sort((c1, c2) => c1.order.length - c2.order.length));