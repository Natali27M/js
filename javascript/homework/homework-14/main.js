// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с
// // І так далі
// function wakeUp(wakeUpMorning,callback) {
//
//         setTimeout(() => {
//             if (wakeUpMorning) {
//                 console.log('Wake up!');
//                 callback(null,'Wake up!');
//             } else {
//                 callback('You overslept (',null);
//             }
//         }, 3000);
// }
// function eatBreakfast(morning,callback) {
//         setTimeout(() => {
//             if (morning === 'Wake up!') {
//                 console.log('You have breakfast');
//                 callback(null, 'You have breakfast');
//             } else {
//                 callback('You breakfast is already cold',null);
//             }
//         }, 1000);
// }
// function wear(clothes,callback) {
//         setTimeout(() => {
//             if (clothes === 'You have breakfast') {
//                 console.log('You get dressed');
//                 callback(null, 'You get dressed');
//             } else {
//                 callback('You are sleepy',null);
//             }
//         }, 2000);
// }
// function goFitness(sport,callback) {
//         setTimeout(() => {
//             if (sport === 'You get dressed') {
//                 console.log('You visited the gym');
//                 callback(null, 'You visited the gym');
//             } else {
//                 callback('You thick!!!',null);
//             }
//         }, 2500);
// }
// function shower(water,callback) {
//         setTimeout(() => {
//             if (water === 'You visited the gym') {
//                 console.log('You take a shower');
//                 callback(null, 'You take a shower');
//             } else {
//                 callback('Take a shower!',null);
//             }
//         }, 1500);
// }
// function working(work,callback) {
//         setTimeout(() => {
//             if (work === 'You take a shower') {
//                 console.log('You work well!');
//                 callback(null,'You work well!');
//             } else {
//                 callback('You have not money',null);
//             }
//         }, 4500);
// }
// function shopping(product,callback) {
//         setTimeout(() => {
//             if (product === 'You work well!') {
//                 console.log('Cooking dinner');
//                 callback(null,'Cooking dinner');
//             } else {
//                 callback('You will be hungry',null);
//             }
//         }, 1700);
// }
// function homework(task,callback) {
//         setTimeout(() => {
//             if (task === 'Cooking dinner') {
//                 console.log('You did your homework');
//                 callback(null,'You did your homework');
//             } else {
//                 callback('You have a bad day',null);
//             }
//         }, 1200);
// }
// function playChildren(game,callback) {
//         setTimeout(() => {
//             if (game === 'You did your homework') {
//                 console.log('You played with your children');
//                 callback(null,'You played with your children');
//             } else {
//                 callback('You children sad',null);
//             }
//         }, 900);
// }
// function timeWithHusband(speak,callback) {
//         setTimeout(() => {
//             if (speak === 'You played with your children') {
//                 console.log('You spent time with husband');
//                 callback(null, 'You spent time with husband');
//             } else {
//                 callback('You bad wife',null);
//             }
//         }, 2700);
// }
// function goToTheBad(sleep) {
//         setTimeout(() => {
//             if (sleep === 'You spent time with husband') {
//                 console.log('Go to the bad!');
//             } else {
//                 console.log('Get up on time!!!');
//             }
//         }, 2200);
// }
//
//
// wakeUp(true, (err, morning) => {
//     if (err) {
//         console.error(err);
//     } else {
//         eatBreakfast(morning, (err1, clothes) => {
//             if (err1) {
//                 console.error(err1);
//             } else {
//                 wear(clothes, (err2, sport) => {
//                     if (err2) {
//                         console.error(err2);
//                     } else {
//                         goFitness(sport, (err3, water) => {
//                             if (err3) {
//                                 console.error(err3);
//                             } else {
//                                 shower(water, (err4, work) => {
//                                     if (err4) {
//                                         console.error(err4);
//                                     } else {
//                                         working(work, (err5, product) => {
//                                             if (err5) {
//                                                 console.error(err5);
//                                             } else {
//                                                 shopping(product, (err6, task) => {
//                                                     if (err6) {
//                                                         console.error(err6);
//                                                     } else {
//                                                         homework(task, (err7, game) => {
//                                                             if (err7) {
//                                                                 console.error(err7);
//                                                             } else {
//                                                                 playChildren(game, (err8, speak) => {
//                                                                     if (err8) {
//                                                                         console.error(err8);
//                                                                     } else {
//                                                                         timeWithHusband(speak, (err9, sleep) => {
//                                                                             if (err9) {
//                                                                                 console.error(err9);
//                                                                             } else {
//                                                                                 goToTheBad(sleep);
//                                                                             }
//                                                                         });
//                                                                     }
//                                                                 });
//                                                             }
//                                                         });
//                                                     }
//                                                 });
//                                             }
//                                         });
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

function wakeUp(wakeUpMorning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUpMorning) {
                console.log('Wake up!')
                resolve('Wake up!');
            }
            reject('You overslept (');
        }, 3000);
    });
}
function eatBreakfast(morning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (morning==='Wake up!') {
                resolve('You have breakfast');
            }
            reject('You breakfast is already cold');
        }, 1000);
    })
}
function wear(clothes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (clothes === 'You have breakfast') {
                resolve('You get dressed');
            }
            reject('You are sleepy');
        }, 2000);
    });
}
function goFitness(sport) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sport === 'You get dressed') {
                resolve('You visited the gym');
            }
            reject('You thick!!!');
        }, 2500);
    });
}
function shower(water) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (water === 'You visited the gym') {
                resolve('You take a shower');
            }
            reject('Take a shower!');
        }, 1500);
    });
}
function working(work) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (work === 'You take a shower') {
                resolve('You work well!');
            }
            reject('You have not money');
        }, 4500);
    });
}
function shopping(product) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (product === 'You work well!') {
                resolve('Cooking dinner');
            }
            reject('You will be hungry');
        }, 1700);
    });
}
function homework(task) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (task === 'Cooking dinner') {
                resolve('You did your homework');
            }
            reject('You have a bad day');
        }, 1200);
    } )
}
function playChildren(game) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (game === 'You did your homework') {
                resolve('You played with your children');
            }
            reject('You children sad');
        }, 900);
    })
}
function timeWithHusband(speak) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (speak === 'You played with your children') {
                resolve('You spent time with husband');
            }
            reject('You bad wife');
        }, 2700);
    });
}
function goToTheBad(sleep) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sleep === 'You spent time with husband') {
                resolve('Go to the bad!');
            }
            reject('Get up on time!!!');
        }, 2200);
    });
}
//
//
// wakeUp(true)
//     .then(morningWake => {
//         return eatBreakfast(morningWake);
//     })
//     .then(eating => {
//         console.log(eating);
//         return wear(eating);
//     })
//     .then(wearClothes => {
//         console.log(wearClothes);
//         return goFitness(wearClothes);
//     })
//     .then(sportWomen => {
//         console.log(sportWomen);
//         return shower(sportWomen);
//     })
//     .then(smell => {
//         console.log(smell);
//         return working(smell);
//     })
//     .then(money => {
//         console.log(money);
//         return shopping(money);
//     })
//     .then(dish => {
//         console.log(dish);
//         return homework(dish);
//     })
//     .then(exercise => {
//         console.log(exercise);
//         return playChildren(exercise);
//     })
//     .then(emotions => {
//         console.log(emotions);
//         return timeWithHusband(emotions);
//     })
//     .then(dialogue=>{
//         console.log(dialogue);
//         return goToTheBad(dialogue);
//     })
//     .then(night=>{
//         console.log(night);
//     })
//
async function myDay(day) {
    const morningWake = await wakeUp(day);
    const eating = await eatBreakfast(morningWake);
    const wearClothes = await wear(eating);
    const sportWomen = await goFitness(wearClothes);
    const smell = await shower(sportWomen);
    const money = await working(smell);
    const dish = await shopping(money);
    const exercise = await homework(dish);
    const emotions = await playChildren(exercise);
    const dialogue = await timeWithHusband(emotions);
    const night = await goToTheBad(dialogue);

    console.log(eating);
    console.log(wearClothes);
    console.log(sportWomen);
    console.log(smell);
    console.log(money);
    console.log(dish);
    console.log(exercise);
    console.log(emotions);
    console.log(dialogue);
    console.log(night);
}
myDay(true);

