// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// console.log(str1.length);
//
// let str2 = 'lorem ipsum';
// console.log(str2.length);
//
// let str3 = 'javascript is cool';
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//
// let str1 = 'hello world';
// let toUpperCase = str1.toUpperCase();
// console.log(toUpperCase);
//
// let str2 = 'lorem ipsum';
// let toUpperCase2 = str2.toUpperCase();
// console.log(toUpperCase2);
//
// let str3 = 'javascript is cool';
// let toUpperCase3 = str3.toUpperCase();
// console.log(toUpperCase3);


// console.log(str1.toUpperCase());-чи можна прописувати ось так скорочено?
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD';
// let toLowerCase = str1.toLowerCase();
// console.log(toLowerCase);
//
// let str2 = 'LOREM IPSUM';
// let toLowerCase2 = str2.toLowerCase();
// console.log(toLowerCase2);
//
// let str3 = 'JAVASCRIPT IS COOL';
// let toLowerCase3 = str3.toLowerCase();
// console.log(toLowerCase3);
//
//
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);
//
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']\
//
// let str = 'Каждый охотник желает знать';
// let stringToArray = () => {
//     return str.split(' ');
// };
// stringToArray(str);
// document.write(stringToArray());



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
//  let delete_characters = () => {
//      return str.substr(0,7);
//  };
//  delete_characters(str);
// document.write(delete_characters());



// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = () =>{
//     return str
//         .replaceAll(' ', '-')
//         .toUpperCase();
// }
// document.write(insert_dash(str));



// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'hello okten';
// let replaceToUpperCase = () => {
//         return str[0].toUpperCase() + str.slice(1);
// };
// document.write(replaceToUpperCase(str));



 // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str = 'hello world and okten';
let capitalize = () => {
     return str.split(' ')
         .map(word=>word.charAt(0)
         .toUpperCase()+word.slice(1))
         .join(' ');
};
document.write(capitalize(str));
