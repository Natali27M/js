function card(key,balance,limit) {
    this.key = function (key) {
        if (key === 1) {
            return card1;
        }else if (key === 2) {
            return card2;
        }
    };
    this.balance = balance;
    this.limit = limit;
    this.historyLogs = function () {
        let history = [];
         return history;
       };

    this.putCredit = function (putCredit) {
        if (putCredit <= this.limit) {
            return `${this.balance = this.balance + putCredit}`;
        } else {
            return `Ви перевищили ліміт `;
        }
    };
    this.takeCredit = function (takeCredit) {
        if (takeCredit <= this.limit) {
            return `${this.balance = this.balance - takeCredit}`;
        } else {
            return `Ви перевищили ліміт `;
        }
    };
    this.transactionLimit = function (newTransactionLimit) {
        return `${this.limit = newTransactionLimit}`;
    };
    this.transferCredits = function (summa, numberCard) {
        if (this.balance > summa && summa <= this.limit) {
            return `${this.balance = (this.balance - summa - (summa * 0.005))}`;
        } else {
            return `Ви перевищили ліміт `;
        }
    };

}

let card1 =new card(1,100, 500);
console.log(card1.transactionLimit(1000));
console.log(card1.putCredit(500));
console.log(card1.takeCredit(200));
console.log(card1.transferCredits(300, 3727287));
console.log(card1.historyLogs);
console.log(card1);

let card2 =new card(2,100, 500);
console.log(card2.transactionLimit(2000));
console.log(card2.putCredit(1500));
console.log(card2.takeCredit(500));
console.log(card2.transferCredits(500, 3727287));
console.log(card2.historyLogs);
console.log(card2);






