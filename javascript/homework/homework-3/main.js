//Завдання 1

// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let numbers = [1, 6, 12, 76, 137];
console.log(numbers);
let string = ['Hello', 'my', 'beautiful', 'world', '!'];
console.log(string);
let different = ['Hello', 18, true, 'or', false];
console.log(different);

//Завдання 2

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 'Hello';
array[1] = 'okten';
array[2] = '!';
for (const arrayElement of array) {
    console.log(arrayElement)

}


//Завдання 3

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Hello</div>')
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('-----------')//Це я для себе,щоб бачити нове завдання
for (let i = 0; i < 10; i++) {
    document.write(`<div>Good ${i}</div>`);
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('-----------')//Це я для себе,щоб бачити нове завдання
let x = 0;
while (x<=19){
    x++;
    document.write('<h1>Okten</h1>');
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('------------')//Це я для себе,щоб бачити нове завдання
let y = 0;
while (y < 20) {
    y++;
    document.write(`<h1>owu ${y}</h1>`)
}

//Завдання 4

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr1) {
    console.log(num);
}
// Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr2 = ['Hello', 'my', 'beautiful', 'world', 'and', 'Hey', 'Lviv', 'okten', 'owu', '!'];
for (const str of arr2) {
    console.log(str);
}
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr3 = ['a', 1, 'b', 2, 'c', 3, true, 'd', 5, false];
for (const all of arr3) {
    console.log(all);
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr4 = [true, 5, 'five', 6, 'six', false, 10, 'nine', '', 1];
for (const arr4Element of arr4) {
    if (typeof arr4Element === 'boolean') {
        console.log(arr4Element);
    }
}
// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arr5 = [true, 5, 'five', 6, 'six', false, 10, 'nine', false, 1];
for (const arr5Element of arr5) {
    if (typeof arr5Element === 'number') {
        console.log(arr5Element);
    }
}
// Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr6 = [true, 5, 'five', 6, 'six', false, 10, 'nine', false, 1];
for (const arr6Element of arr6) {
    if (typeof arr6Element === 'string') {
        console.log(arr6Element);
    }
}

//Завдання 5

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let array2 = [];
array2[0] = 1;
array2[1] = 'one';
array2[2] = true;
array2[3]= 2;
array2[4]= 'two';
array2[5] = true;
array2[6] = 3;
array2[7] = 'four';
array2[8] = false;
array2[9] = '!';
for (const array2Element of array2) {
    console.log(array2Element);
}

// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
document.write('-----------')//Це я для себе,щоб бачити нове завдання

// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <=99; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
document.write('-----------')//Це я для себе,щоб бачити нове завдання

// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i <=99; i+=2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
document.write('-----------')//Це я для себе,щоб бачити нове завдання

// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 2; i <=99; i+=2) {
    console.log(i);
    document.write(`<div>${i}</div>`);
}
document.write('-----------')//Це я для себе,щоб бачити нове завдання

// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i += 2) {
    console.log(i);
    document.write(`<div>${i}</div>`);

}
