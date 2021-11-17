// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

// a. заповнити його 50 парними числами за допомоги циклу.
// let number = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         number.push(i)
//     }
// }
// console.log(number);


//     b. заповнити його 50 непарними числами за допомоги циклу.

// let numbers = [];
// for (let index = 0; index < 100; index++) {
//     if (!(index % 2 === 0)) {
// numbers.push(index)
//     }
// }
// console.log(numbers)
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let all = [];
// for (let i = 0; i < 20; i++) {
//     let numb = Math.floor(Math.random()*100);
//     all.push(numb);
// }
// console.log(all);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let all = [];
 for (let i = 0; i < 20; i++) {
    let numb = Math.floor(Math.random() * 724+8);
    all.push(numb);
 }
 console.log(all);



 // 2. Вивести за допомогою console.log кожен третій елемент
 // let number = [];
 //  for (let i = 0; i < 30; i++) {
 //      if (i % 3 === 0) {
 //         number.push(i);
 //      }
 //  }
 //  console.log(number);


 // 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
 // let number1 = [];
 // for (let i = 0; i < 30; i++) {
 //     if (i % 3 === 0 && i % 2 === 0) {
 //         number1.push(i);
 //     }
 // }
 // console.log(number1);

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
// let new1 = [];
// let number2 = [];
// for (let i = 0; i < 30; i++) {
//     if (i % 3 === 0 && i % 2 === 0) {
//         number2.push(i);
//     }
//     new1 = number2;
// }
// console.log(new1);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let numbers = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i=0;i<numbers.length;i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i-1]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100, 250, 50, 168, 120, 345, 188];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i];
// }
// let result = sum / array.length;
// console.log(result);



// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// for (let i = 0; i < 10; i++) {
//    let number =( Math.floor(Math.random() * 10))*5;
//     array.push(number)
// }
// let array2 = array;
// console.log(array2);


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом -
// додати його в інший масив.
// let all = ["okten", 7, true, 99, "hello", 'world', 12, 0];
// let other = [];
// for (let i = 0; i < all.length; i++) {
//     let allElement = all[i];
//     if (typeof (allElement) === 'number') {
//         other.push(allElement);
//     }
// }
//  console.log(other);