function userCard(number) {

    let UserCards = {};
    let options = {balance: 100, transctionLimit: 100,  historyLogs: [], key: number};
    return {
        getCardOptions: function () {
            console.log(options);
        },
        getPutCredits: function (putMoney) {
            let historyObj = {
                data: new Date(),
                puttedCredit: putMoney,
                credits: options.balance
            };
            options.historyLogs.push(historyObj);
            if (options.transctionLimit < putMoney){
                throw new Error('You have axceeded transaction limited')
            }
            options.balance+=putMoney;
            return options.historyLogs

        },
        takeCredits: function (takeMoney) {
            let historyObj = {
                data: new Date(),
                puttedCredit: takeMoney,
                credits: options.balance
            };

            options.historyLogs.push(historyObj);

            if (options.transctionLimit < takeMoney && options.balance < takeMoney){
                throw new Error('You have axceeded transaction limited')
            }
            options.balance -= takeMoney;
        },
        setTransactionLimit: function (TransactionLimit) {


            let historyObj = {
                data: new Date(),
                puttedCredit: TransactionLimit,
                credits: options.balance
            };
            options.historyLogs.push(historyObj);
            options.transctionLimit = TransactionLimit;
        },
        getTransferCredits: function (transfers, cardToTransfer) {
            cardToTransfer.getPutCredits(transfers);
            card.takeCredits(transfers + transfers* 0.005);
        },


    }



}

let card = userCard(1);
let card2 = userCard(2);

/*card.getCardOptions()

card.getPutCredits(150)
card.getCardOptions()

card.takeCredits(150)
card.getCardOptions()*/

card.setTransactionLimit(200);
card.getCardOptions();
card.takeCredits(50);
card.getCardOptions();
card.getPutCredits(200);
card.getTransferCredits(12, card2);
card2.getCardOptions();
card.getCardOptions();