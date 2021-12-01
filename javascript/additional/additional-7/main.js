
function getCardOption(key) {
        let balance = 100;
        let transactionLimit = 100;
        let time = 11.30;


        card1= {
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: [{
                // operationType :

            }, {
                credit: balance
            }, {
                operationTime: time
            }],
            key: key,
            putCredit: function (putFunds) {
                balance = `${card1.balance = balance + putFunds}`;
                return card1.balance;
            },
            takeCredit: function (takeFunds) {
                balance = `${card1.balance = balance - takeFunds}`;
                return card1.balance;
            },
            setTransactionLimit: function (newLimit) {
                card1.transactionLimit = newLimit;
                return transactionLimit;
            },
            transferCredits: function (summa, numberCard) {
                if (card1.balance > summa && summa <= card1.transactionLimit) {
                    balance = `${card1.balance = (balance - summa - (summa * 0.005))}`;
                    return card1.balance;
                }
            }
        }
    return card1,
    card2= {
        balance: balance,
        transactionLimit: transactionLimit,
        historyLogs: [{
            // operationType :

        }, {
            credit: balance
        }, {
            operationTime: time
        }],
        key: key,
        putCredit: function (putFunds) {
            balance = `${card2.balance = balance + putFunds}`;
            return card2.balance;
        },
        takeCredit: function (takeFunds) {
            balance = `${card2.balance = balance - takeFunds}`;
            return card2.balance;
        },
        setTransactionLimit: function (newLimit) {
            card2.transactionLimit = newLimit;
            return transactionLimit;
        },
        transferCredits: function (summa, numberCard) {
            if (card1.balance > summa && summa <= card2.transactionLimit) {
                balance = `${card2.balance = (balance - summa - (summa * 0.005))}`;
                return card2.balance;
            }
        }
    }
    return card2;

}
getCardOption(1)
card1.putCredit(300)
card1.takeCredit(100)
card1.setTransactionLimit(5000)
card1.transferCredits(100,456904332);

console.log(card1);
card2.putCredit(400)
console.log(card2)