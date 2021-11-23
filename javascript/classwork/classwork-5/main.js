// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minimum=(a,b,c)=>{
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// minimum(1, 2, 3);



// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let maximum = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// };
// maximum(12, 67, 10);



// - створити функцію яка повертає найбільше число з масиву
//  let maximum = (max) => {
//      let maxi = 0;
//      for (let i = 0; i < max.length; i++) {
//          const maxElement = (max[i])
//          if (maxElement > maxi) {
//              maxi = maxElement;
//          }
//      }
//      console.log(maxi);
//  };
//  let numbers = [11, 55, 33];
//  maximum(numbers);



// - створити функцію яка повертає найменьше число з масиву
// let minimum = (min) => {
//     let mini = min[0];
//     for (let i = 0; i < min.length; i++) {
//         const minElement = min[i];
//         if (minElement < mini) {
//             mini = minElement;
//         }
//     }
//     console.log(mini);
// };
// let numbers = [53,18, 98, 2, 16];
// minimum(numbers);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let summa = (sum) => {
//     let number = 0;
//     for (let i = 0; i < sum.length; i++) {
//         const sumElement = sum[i];
//         number = number + sumElement;
//     }
//     console.log(number);
// };
// let numbers = [10, 20, 30];
// summa(numbers);



// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let middle = (result) => {
//     let summa = 0;
//     for (let i = 0; i < result.length; i++) {
//         const resultElement = result[i];
//         summa = summa + resultElement;
//     }
//     console.log(summa / result.length);
// };
// let numbers = [10, 20, 30];
// middle(numbers);



// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math
// використовувати заборонено);
// let minReturnMaxConsole = (result) => {
//     let numMax = 0;
//     let numMin = [0];
//     for (let i = 0; i < result.length; i++) {
//         const resultElement = result[i];
//         if (resultElement<numMin) {
//             numMin = resultElement;
//         }else if (resultElement > numMax) {
//             numMax=resultElement
//         }
//     }
//     console.log(numMax);
//     return (numMin);
// };
// let numbers = [10, 77, 13, 9, 102];
// minReturnMaxConsole(numbers);



// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomizer = (length) => {
//     let number = [];
//     for (let i = 0; i < length; i++) {
//         number[i]= Math.round(Math.random() * 100);
//     }
//     console.log(number);
// };
// randomizer(10);



// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
// let randomizer = (length, limit) => {
//     let number=[]
//     for (let i = 0; i < length; i++) {
//         number[i] = Math.round(Math.random() * limit);
//     }
//     console.log(number);
// };
// randomizer(15, 100);



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (rev) => {
    let numberReverse = [];
    for (let i = 0,j=rev.length-1; i < rev.length; i++,j--) {
        numberReverse[j] = rev[i];
    }
    console.log(numberReverse)
};
let number = [1, 2, 3];
reverse(number);
