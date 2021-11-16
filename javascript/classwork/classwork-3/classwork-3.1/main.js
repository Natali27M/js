// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let numbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log(numbers);


//    1. перебрати його циклом while
let num = 0;
while (num < numbers.length) {
    console.log(numbers[num]);
    num++;
}

//    2. перебрати його циклом for
for (let numbersElememt = 0; numbersElememt < numbers.length; numbersElememt++) {
    console.log(numbers[numbersElememt]);
}

//    3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 1;
while (i < numbers.length) {
    document.write(`<div>${i}. `);
    document.write(numbers[i]);
    document.write(`</div>`);
    i += 2;
}
document.write('----------')//Це я для себе,щоб бачити нове завдання

//    4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 1; i < numbers.length; i+=2) {
    document.write(`<div>${i}. `);
    document.write(numbers[i]);
    document.write(`</div>`);
}
document.write('----------')//Це я для себе,щоб бачити нове завдання

//    5. перебрати циклом while та вивести  числа тільки парні  значення
let index2 = 0;
while (index2 < numbers.length) {
    if ((numbers[index2] % 2) === 0) {
        document.write(`<div>`);
        document.write(numbers[index2]);
        document.write(`</div>`);
    }
    index2++;
}
document.write('----------')//Це я для себе,щоб бачити нове завдання


//    6. перебрати циклом for та вивести  числа тільки парні  значення
for (let index = 0; index < numbers.length; index++) {
    if ((numbers[index] % 2) === 0) {
        document.write(`<div>`);
        document.write(numbers[index]);
        document.write(`</div>`);
    }
}
document.write('----------')//Це я для себе,щоб бачити нове завдання


//    7. замінити кожне число кратне 3 на слово "okten"
let change = 'okten';
for (let index3 = 0; index3 < numbers.length; index3++) {
    if ((numbers[index3] % 3) === 0) {
        document.write(`<div>`);
        document.write(change);
        document.write(`</div>`);
    } else {
        document.write(`<div>`);
        document.write(numbers[index3]);
        document.write(`</div>`);
    }
}
document.write('----------')//Це я для себе,щоб бачити нове завдання


//    8. вивести масив в зворотньому порядку.
for (let index4 = numbers.length - 1; index4 >= 0; index4--) {
    const numbersElements = numbers[index4];
    document.write(`<div>`);
    document.write(numbers[index4]);
    document.write(`</div>`);
}
document.write('----------')//Це я для себе,щоб бачити нове завдання


//    9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//    9.1. перебрати його циклом while,але в зворотньому циклі
let num2 = numbers.length - 1;
while (num2 >= 0) {
    console.log(numbers[num2]);
    num2--;
}
//    9.2. перебрати його циклом for,але в зворотньому циклі
for (let numbersElement2 = numbers.length - 1; numbersElement2 >= 0; numbersElement2--) {

    console.log(numbers[numbersElement2]);
}
//    9.3. перебрати циклом while та вивести  числа тільки з непарним індексом,але в зворотньому циклі
let i2 = numbers.length - 1;
while (i2 >= 0) {
    document.write(`<div>${i2}. `);
    document.write(numbers[i2]);
    document.write(`</div>`);
    i2 -= 2;
}
document.write('----------')//Це я для себе,щоб бачити нове завдання.

//   9.4. перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі
for (i3 = numbers.length-1; i3 >= 0; i3 -= 2) {
    document.write(`<div>${i3}. `);
    document.write(numbers[i3]);
    document.write(`</div>`);
}
document.write('----------')//Це я для себе,щоб бачити нове завдання

//    9.5. перебрати циклом while та вивести  числа тільки парні  значення
let indexNum = numbers.length - 1;
while (indexNum >= 0) {
    if ((numbers[indexNum] % 2) === 0) {
        document.write(`<div>`);
        document.write(numbers[indexNum]);
        document.write(`</div>`);
    }
    indexNum--;
}
document.write('----------')//Це я для себе,щоб бачити нове завдання

//    9.6. перебрати циклом for та вивести  числа тільки парні  значення
for (let indexNum2 = numbers.length; indexNum2 >= 0; indexNum2--) {
    if ((numbers[indexNum2] % 2) === 0) {
        document.write(`<div>`);
        document.write(numbers[indexNum2]);
        document.write(`</div>`);
    }
}
document.write('----------')//Це я для себе,щоб бачити нове завдання

//    9.7. замінити кожне число кратне 3 на слово "okten"
let change2 = 'okten';
for (let indexNum3 = numbers.length - 1; indexNum3 >= 0; indexNum3--) {
    if ((numbers[indexNum3] % 3) === 0) {
        document.write(`<div>`);
        document.write(change2);
        document.write(`</div>`);
    } else {
        document.write(`<div>`);
        document.write(numbers[indexNum3]);
        document.write(`</div>`);
    }
}
document.write('----------')//Це я для себе,щоб бачити нове завдання