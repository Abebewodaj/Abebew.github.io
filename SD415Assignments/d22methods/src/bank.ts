
/*
21.	Create bank object, bank, with methods:
a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
b.	credit(id, amount), adds positive amount to customer transaction list
c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
e.	getBankBalance:  returns sum of all customer balances
The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
  Customer objects will have properties customerId and customerTransactions, e.g., 
{customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
Add any necessary types to the above bank object.
*/
interface CustomerRecord {
  customerId: number;
  customerTransactions: number[];
}

interface Bank {
  transactionsDB: CustomerRecord[];
  saveTransaction: (customerId: number, amount: number) => void;
  debit: (customerId: number, amount: number) => void;
  credit: (customerId: number, amount: number) => void;
  getBalance: (customerId: number) => number;
  bankBalance: () => number;
}

export const bank: Bank = {
  transactionsDB: [],

  saveTransaction(customerId: number, amount: number): void {
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

  debit(customerId: number, amount: number): void {
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

  credit(customerId: number, amount: number): void {
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

  getBalance(customerId: number): number {
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

  bankBalance(): number {
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
