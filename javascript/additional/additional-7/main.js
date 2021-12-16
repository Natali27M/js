// const userCard = (id) => {
//     let balance = 100;
//     let transactionLimit = 100;
//     const historyLog = [];
//     const key = id;
//
//     const createLogMsg = (operationType, credits) => ({operationType, credits, operationTime: new Date()})
//
//     const putCredits = (money) => {
//         balance += money
//         historyLog.push(createLogMsg('putCredits', money))
//     }
//
//     const takeCredits = (money) => {
//         if (balance - money >= 0) {
//             balance -= money
//             historyLog.push(createLogMsg('takeCreditsError', money))
//         } else {
//             historyLog.push(createLogMsg('takeCredits', money))
//             console.error('not enough money')
//         }
//     }
//
//     const setTransactionLimit = (newLimit) => {
//         transactionLimit = newLimit
//         historyLog.push(createLogMsg('setTransactionLimit', newLimit))
//     }
//
//     const transferCredits = (money, toCard) => {
//         const fee = money * 0.005
//         if (money + fee > balance && transactionLimit < money) {
//             historyLog.push(createLogMsg('transferCreditsError', money))
//             console.error('not enough money')
//         } else {
//             toCard.putCredits(money)
//             balance-=fee+money
//             historyLog.push(createLogMsg('transferCredits', money))
//         }
//     }
//
//     const getCardOptions = () => ({balance, historyLog, key, transactionLimit})
//
//     return {
//         putCredits,
//         takeCredits,
//         setTransactionLimit,
//         transferCredits,
//         getCardOptions
//     }
// }
//
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = []
//     }
//
//     addCard() {
//         if (this.cards.length === 3) {
//             console.error('card count limit error')
//             return
//         }
//         this.cards.push(userCard(this.cards.length + 1))
//     }
//
//     getCardById(id) {
//         const card = this.cards[id - 1];
//         if (!card) {
//             console.error('not present with this id')
//             return;
//         }
//         return card
//     }
// }
//
// const user = new UserAccount('Max');
//
// user.addCard()
// user.addCard()
// const card1 = user.getCardById(1);
// const card2 = user.getCardById(2);
//
// card1.putCredits(500)
// card1.setTransactionLimit(800)
// card1.transferCredits(300, card2)
// card2.takeCredits(50)
// console.log(card1.getCardOptions());
// console.log('____________________________________________________________');
// console.log(card2.getCardOptions());
//
// function card(key) {
//     this.balance = 100;
//     this.limit = 500;
//     this.getCardOptions = function () {
//         this.balance;
//         this.limit;
//         this.putCredit();
//         this.takeCredit();
//         this.transactionLimit();
//     }
// }
// function goWork(isJobDone) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isJobDone) {
//         money += 400;
//         console.log('Job done');
//         resolve(money)
//       } else {
//         console.log('No money no honey');
//         reject('ERORO TEXT !!!')
//       }
//     }, 1000)
//   })
// }



// function card(key) {
//     this.balance = 100;
//     this.limit = 500;
//     this.getCardOptions=function () {
//         this.balance;
//         this.limit;
//         this.putCredit();
//         this.takeCredit();
//         this.transactionLimit();
//     }
//
//     this.historyLogs = function historyLogs() {
//         this.cards = [];
//         return this.historyLogs();
//
//     }
//     this.putCredit = function (putCredit) {
//         if (putCredit <= this.limit) {
//             return `${this.balance = this.balance + putCredit}`;
//         } else {
//             return `Ви перевищили ліміт `;
//         }
//         this.cards.push({operationType: 'Reseived credit'});
//     };
//     this.takeCredit = function (takeCredit) {
//         if (takeCredit <= this.limit) {
//             return `${this.balance = this.balance - takeCredit}`;
//         } else {
//             return `Ви перевищили ліміт `;
//         }
//     };
//     this.transactionLimit = function (newTransactionLimit) {
//         return `${this.limit = newTransactionLimit}`;
//     };
//     this.transferCredits = function (summa, numberCard) {
//         if (this.balance > summa && summa <= this.limit) {
//             return `${this.balance = (this.balance - summa - (summa * 0.005))}`;
//         } else {
//             return `Ви перевищили ліміт `;
//         }
//     };
//
// }
//
// let card1 =new card(1);
// console.log(card1.transactionLimit(1000));
// console.log(card1.putCredit(500));
// console.log(card1.takeCredit(200));
// console.log(card1.transferCredits(300, 3727287));
// console.log(card1.historyLogs());
// console.log(card1);
//
// let card2 =new card(2);
// console.log(card2.transactionLimit(2000));
// console.log(card2.putCredit(1500));
// console.log(card2.takeCredit(500));
// console.log(card2.transferCredits(500, 3727287));
// console.log(card2.historyLog);
// console.log(card2);
//
// let card3 =new card(3);
// console.log(card3.transactionLimit(3000));
// console.log(card3.putCredit(1000));
// console.log(card3.takeCredit(700));
// console.log(card3.transferCredits(200, 3727287));
// console.log(card3.historyLog);
// console.log(card3);
//
//
//
// class UserAccount {
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//         this.addCard = function () {
//             if (this.cards.length > 3) {
//                 return 'Не можна додавати більше трьох карток';
//             } else {
//                 return this.cards
//             }
//         }
//         this.cards.push(new card(1, 100, 500));
//         // this.cards.push(new card(2, 100, 500));
//         // this.cards.push(new card(3, 100, 500));
//         // this.cards.push(new card(3, 100, 500));
//         this.cards[0] = card1;
//         this.cards[1] = card2;
//         this.cards[2] = card3;
//     }
//     createCard(){
//         if (this.cards.)
//     }
// }
// let userAccount = new UserAccount("Natalya");
// console.log(userAccount);
// console.log(userAccount.addCard());
//
//
