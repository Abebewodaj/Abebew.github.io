export const bank = {
    transactionsDB: [],
    saveTransaction(customerId, amount) {
        let found = false;
        for (const customer of this.transactionsDB) {
            if (customer.customerId === customerId) {
                customer.customerTransactions.push(amount);
                found = true;
                break;
            }
        }
        if (!found) {
            this.transactionsDB.push({ customerId, customerTransactions: [amount] });
        }
    },
    debit(customerId, amount) {
        for (const customer of this.transactionsDB) {
            if (customer.customerId === customerId) {
                let balance = 0;
                for (const transaction of customer.customerTransactions) {
                    balance += transaction;
                }
                if (balance >= amount) {
                    customer.customerTransactions.push(-amount);
                }
                break;
            }
        }
    },
    credit(customerId, amount) {
        let found = false;
        for (const customer of this.transactionsDB) {
            if (customer.customerId === customerId) {
                customer.customerTransactions.push(amount);
                found = true;
                break;
            }
        }
        if (!found) {
            this.transactionsDB.push({ customerId, customerTransactions: [amount] });
        }
    },
    getBalance(customerId) {
        for (const customer of this.transactionsDB) {
            if (customer.customerId === customerId) {
                let balance = 0;
                for (const transaction of customer.customerTransactions) {
                    balance += transaction;
                }
                return balance;
            }
        }
        return 0;
    },
    bankBalance() {
        let totalBalance = 0;
        for (const customer of this.transactionsDB) {
            let balance = 0;
            for (const transaction of customer.customerTransactions) {
                balance += transaction;
            }
            totalBalance += balance;
        }
        return totalBalance;
    }
};
