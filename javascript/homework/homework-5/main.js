// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let areaRectangle = (a,b) => a * b;
console.log (areaRectangle(15, 5));


// - створити функцію яка обчислює та повертає площу кола
let areaRound = (p,r) => p*(r*r);
console.log(areaRound(3.14,5));


// - створити функцію яка обчислює та повертає площу циліндру
let areaCylinder = (p, r, h) => Math.round(2 * p * r * h);
// console.log(areaCylinder(3.14, 10, 15));
document.write(`<div>Площа циліндра = ${areaCylinder(3.14,10,15)} см</div>`);


 // - створити функцію яка приймає масив та виводить кожен його елемент
let number=[1,2,3,4,5]
let number1=(numb)=>{
    for (let i = 0; i < numb.length; i++) {
        console.log( numb[i]) ;
    }
}
number1(number);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let text='Створити функцію яка  створює параграф з текстом'
let text1=(txt)=>{
    document.write(`<p>${txt}</p>`);
}
text1(text);



// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let text3=(item) =>{
     document.write(`<ul>`);
     for (let i = 0; i < 3; i++) {
         document.write(`<li>${item}</li>`);
     }
     document.write(`</ul>`);
 }
 text3('Hello');


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
let text4=(item,size) =>{
    document.write(`<ul>`);
    for (let i = 0; i < size; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
text4('Okten',3);



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array1 = ['Hello', 'world', 2021, true];
let array=(arr)=>{
    document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
       document.write(`<li>${arr[i]}</li>`)

    }
    document.write(`</ul>`);
}
array(array1);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для
// кожного об'єкту окремий блок.
 let arrayUsers1 = [
     {id: 1, name: 'Vasya', age: 21},
     {id: 2, name: 'Olya', age: 28},
     {id: 3, name: 'Petro', age: 34},
     {id: 4, name: 'Oksana', age: 17},
     {id: 5, name: 'Natalya', age: 29}
 ];
 let user=(user)=>{
     for (let i = 0; i < user.length; i++) {
         const userElement = (user[i])

         document.write(`<div>${userElement.id} ${userElement.name} ${userElement.age}</div>`);
     }
 }
 user(arrayUsers1);
