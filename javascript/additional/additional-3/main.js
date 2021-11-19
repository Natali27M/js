// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує
// їх між собою.
// function concatination() {
//     if (arguments.length === 1) {
//         console.log(arguments[0]);
//     }else if (arguments.length === 2) {
//         console.log(arguments[0] + ' ' + arguments[1]);
//     }
// }
// concatination('Hello', 'okten');


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий
// результуючий масив. EXAMPLE: [1,2,3,4] [2,3,4,5] результат [3,5,7,9]
// let array = [1, 2, 3, 4];
// let array2 = [2, 3, 4, 5];
// let result = [];
//  function res() {
//      for (let i = 0, j = 0, a = 0; i < array.length, j < array2.length; i++, j++, a++) {
//          result[a] = array[i] + array2[j];
//      }
//      return result;
//  }
//  res(array, array2);
//  console.log(result)


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//  let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//  let userKeys = [];
//   function key() {
//        for (let i = 0; i < user.length; i++) {
//            const userElement = user[i];
//           for (const userKey in userElement) {
//               userKeys[userKeys.length] = userKey;
//           }
//        }
//        return userKeys;
//   }
//   key(user);
//  console.log(userKeys);


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE: [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
  let user = [{name: 'Dima', age: 13}, {model: 'Camry'}];
  let userKeys = [];
   function key() {
       for (let i = 0; i < user.length; i++) {
            const userElement = user[i];
           for (const userKey in userElement) {
                userKeys[userKeys.length] = userElement[userKey];
           }
        }
       return userKeys;
   }
   key(user);
  console.log(userKeys);



// let usersListElement = usersList;
// for (let i = 0; i < usersListElement.length; i++) {
//     const usersListElement = usersList[i];
//     document.write(`<div class="user-block">`);
//     document.write(`<h2>${usersListElement.id} - ${usersListElement.name} - ${usersListElement.username}</h2>`)

