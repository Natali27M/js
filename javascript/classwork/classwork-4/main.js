// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function small(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// small(45, 12, 33);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function big(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// big(45, 12, 33);


// - створити функцію яка повертає найбільше число з масиву
//  let number = [9,26,178,673,0,10];
// function big() {
// let max = number[0];
//      for (const num of number) {
//          if (num > max) {
//              max = num;
//          }
//      }
//      return max;
//     }
//     console.log(big())


// - створити функцію яка повертає найменьше число з масиву
//  let number = [additional-8, 142, 10, 12, 1001];
// function min() {
//     let min = number [0];
//     for (const element of number) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
//  console.log(min());


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  let number = [1, 2, 10];
//  function sum() {
//      let result = 0;
//      for (const numberElement of number) {
//          result = result + numberElement;
//      }
//      return result;
//  }
//  console.log(sum());


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let number = [1, 2, 3];
// function result() {
//     let sum = 0;
//     let sered = 0;
//     for (const numberElement of number) {
//         sum += numberElement;
//         sum = sum + numberElement;
    // }
    // sered = sum/number.length
    // return sered;
// }
// console.log(result())
// console.log('--------------------------------')
// let a = result()
// console.log(a);




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
// function comparison() {
//     let min = null ;
//     let max = null;
//     for (const numberElement of arguments) {
//         if (numberElement < min) {
//             min = numberElement;
//         }else if (numberElement > max) {
//             max = numberElement;
//         }
//     }
//     console.log(max);
//     return min;
// }
// console.log(comparison(12,6,-additional-8,100));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomizer(length,num) {
//     let number = [];
//     for (let i = 0; i < length; i++) {
//        number[i]= Math.round(Math.random() * num);
//     }
//     return number;
// }
// console.log(randomizer(10,100));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
// let randomizerNumber = [];
// function randomizer(limit) {
//     for (i = 0; i < limit; i++) {
//         randomizerNumber[i] = Math.round(Math.random() * limit);
//     }
//     return randomizerNumber;
// }
// randomizer(50);
// console.log(randomizerNumber);


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
 let array = [1, 2, 3];
 let array2 = [];
 function opposite() {
     for (let i = array.length - 1,a=0; i >= 0; i--,a++) {
         array2[a] = array[i];
     }
     return array2
 }
 opposite(array);
 console.log(array2)
