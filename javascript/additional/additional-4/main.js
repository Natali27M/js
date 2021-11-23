// - Дано натуральное число n. Выведите все числа от 1 до n.
// let natureNumber = (n) => {
//     let numbers = [];
//     let a=0
//     for (let i = 0; i < n; i++) {
//         numbers[i] = a + 1;
//         a = a + 1;
//     }
//     console.log(numbers);
// };
// natureNumber(15);



// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в
// порядке убывания в противном случае.
// let number = (a, b) => {
//     let numbers = [];
//     let A = a;
//     if (a < b) {
//         for (let i = 0; i < b - a; i++) {
//             numbers[i] = A + 1;
//             A = numbers[i];
//         }
//     }else if (a > b) {
//         for (let i = 0; i < a-b; i++) {
//             numbers[i] = A - 1;
//             A = numbers[i];
//         }
//     }
//     console.log(numbers);
// };
// number(15, 5);



// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//    foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//    foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//    foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//  let array = (foo, j) => {
//      let arr = [];
//      let temp = foo[j];
//       for (let i=0; i < foo.length; i++) {
//           foo[j] = foo[j+1];
//           arr= foo;
//       }
//      foo[j + 1] = temp;
//       console.log(arr);
//  };
//  let foo = [9, 8, 0, 4];
//  array(foo, 0);



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не
// нульових значень. Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let numbers = (numberNull) => {
    let temp = [];
    for (let i = 0; i < numberNull.length; i++) {
        if (numberNull[i] === 0) {
            numberNull[i]=temp[temp.length-1];
        }
    }
    console.log(temp);
};
let number = [0,0,1,0];
numbers(number);