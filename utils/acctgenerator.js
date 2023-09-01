function generateAccountNumber() {
    // Generate a random 10-digit number
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    
    return accountNumber;
  }

// function generateAccountNumber() {
//     const accounts = readDatabase();
//     let accountNumber;

//     do {
//         // Generate a random 10-digit number
//         accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
//     } while (accounts.some(account => account.accountNumber === accountNumber));

//     return accountNumber;
// }

module.exports = generateAccountNumber;