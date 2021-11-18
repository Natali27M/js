// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRectangle(a,b) {
//     let res = a * b;
//     return res;
// }
// let result=areaRectangle(45,10)
// document.write(`<div>Площа прямокутника = ${result} см.</div>`);


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaRound(a,b) {
//     let res = a * Math.pow(b, 2);
//     return res;
// }
// let result = areaRound(3.14, 5);
// document.write(`<div>Площа круга = ${result} см.</div>`);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(p,r,h) {
//     let res = 2 * p * r * h;
//     return res;
// }
//
// let result = areaCylinder(3.14,5,10)
// document.write(`<div>Площа циліндра = ${result} см.</div>`);


// - створити функцію яка приймає масив та виводить кожен його елемент
// let number = [3, 'hello', 8, 0, true];
// function array (number) {
//     for (i = 0; i < number.length; i++) {
//         console.log(number[i]);
//     }
// }
// array(number);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text=['Cтворити','функцію','яка','створює','параграф','з','текстом']
// function paragraph (text) {
//     document.write(`<p>`)
//     for (let i = 0; i < text.length; i++) {
//         document.write(`${text[i]+' '}`);
//     }
//     document.write(`</p>`);
// }
// paragraph(text);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ul(item) {
//     document.write(`<ul>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`<li>${item}</li>`);
//     document.write(`</ul>`);
// }
// ul('Text');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ul(item,size) {
//     document.write(`<ul>`);
//     for (let i = 0; i < size; i++) {
//         const itemElement = item[i];
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ul('Text',3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let all = ['Hello', 'year', 2022, "!", true];
// function array(all) {
//     document.write(`<ul>`);
//     for (let i = 0; i < all.length; i++) {
//         const allElement = all[i];
//         document.write(`<li>${all[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// array(all);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let user = [
    {id: 1, name: 'Vasya', age: 23},
    {id: 2, name: 'Olya', age: 27},
    {id: 3, name: 'Petro', age: 12},
    {id: 4, name: 'Natalya', age: 18}
];
let userElement = user;
 function allObject(user) {
    for (let i = 0; i < userElement.length; i++) {
        const userElement = user[i];
        document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`);
    }
}
allObject(user);


