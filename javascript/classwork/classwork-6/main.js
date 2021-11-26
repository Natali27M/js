// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let replace = (name) =>{
//     return name.replace('..', ' ')
//         .replace('---',' ')
//         .replace('__',' ');
// };
// document.write(replace(n1));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let toFixedRandomizer = (length) => {
//     let number = [];
//     for (let i = 0; i < length; i++) {
//         number[i] =(Math.random() * 100).toFixed();
//     }
//     return number;
// };
// console.log(toFixedRandomizer(10));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати
// його за допомоги sort
// let toFixedSoftRandomizer = (length,num) => {
//     let number = [];
//      for (let i = 0; i < length; i++) {
//          number[i] =(Math.random() * num).toFixed();
//      }
//      return number.sort((a, b) => a - b);
// }
// console.log(toFixedSoftRandomizer(10,100));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати
// його за допомоги filter, залишивши тільки парні числа
// let toFixedFilterRandomizer = (length,num) => {
//     let number = [];
//     for (let i = 0; i < length; i++) {
//         number[i] =(Math.random() * num).toFixed();
//     }
//     return number.filter(value => value % 2 === 0);
// };
// console.log(toFixedFilterRandomizer(10, 100));


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги
// map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let toFixedMapStrRandomizer = (length,num) => {
//     let number = [];
//     for (let i = 0; i < length; i++) {
//         number[i] = (Math.random() * num).toFixed();
//     }
//     return number.map(value => value.toString());
// };
// console.log(toFixedMapStrRandomizer(10, 100));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('descending') // [21,11,3]
// sortNums('ascending') // [3,11,21]
let nums = [11, 21, 3];
let sortNums = (arr,direction) =>{
    if (direction === 'asc') return nums.sort((a, b)=>a-b);
    if (direction === 'des') return nums.sort((a, b)=>b-a);
}
console.log(sortNums(nums, 'des'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((u1, u2) => {
//     return u2.monthDuration - u1.monthDuration;
// });
// console.log(sort);


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let str = 'наслаждение';
let cutString = (arr,num) => {
    let str1 = [];
    while (str.length) {
        str1.push(str.slice(0,num));
        str= str.slice(num);
    }
    return str1
};
console.log(cutString(str, 3));