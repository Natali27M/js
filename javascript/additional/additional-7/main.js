function card(key) {
    this.balance = 100;
    this.limit = 500;
    this.getCardOptions=function () {
        this.balance;
        this.limit;
        this.putCredit();
        this.takeCredit();
        this.transactionLimit();
    }

    this.historyLogs = function historyLogs() {
        this.cards = [];
        return this.historyLogs();

    }
    this.putCredit = function (putCredit) {
        if (putCredit <= this.limit) {
            return `${this.balance = this.balance + putCredit}`;
        } else {
            return `Ви перевищили ліміт `;
        }
        this.cards.push({operationType: 'Reseived credit'});
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

let card1 =new card(1);
console.log(card1.transactionLimit(1000));
console.log(card1.putCredit(500));
console.log(card1.takeCredit(200));
console.log(card1.transferCredits(300, 3727287));
console.log(card1.historyLogs());
console.log(card1);

let card2 =new card(2);
console.log(card2.transactionLimit(2000));
console.log(card2.putCredit(1500));
console.log(card2.takeCredit(500));
console.log(card2.transferCredits(500, 3727287));
console.log(card2.historyLog);
console.log(card2);

let card3 =new card(3);
console.log(card3.transactionLimit(3000));
console.log(card3.putCredit(1000));
console.log(card3.takeCredit(700));
console.log(card3.transferCredits(200, 3727287));
console.log(card3.historyLog);
console.log(card3);



class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.addCard = function () {
            if (this.cards.length > 3) {
                return 'Не можна додавати більше трьох карток';
            } else {
                return this.cards
            }
        }
        this.cards.push(new card(1, 100, 500));
        // this.cards.push(new card(2, 100, 500));
        // this.cards.push(new card(3, 100, 500));
        // this.cards.push(new card(3, 100, 500));
        this.cards[0] = card1;
        this.cards[1] = card2;
        this.cards[2] = card3;
    }
    createCard(){
        if (this.cards.)
    }
}
let userAccount = new UserAccount("Natalya");
console.log(userAccount);
console.log(userAccount.addCard());
//
//
