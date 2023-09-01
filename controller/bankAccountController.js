const {readDatabase, writeDatabase} = require('../utils/database.js');

function generateAccountNumber() {
    // Generate a random 10-digit number
    const accountNumber = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    
    return accountNumber;
  }

const bankAccountController = {
    createAccount: (req, res) => {
        const { accountHolderName, accountHolderDOB, accountType, initialBalance } = req.body;
        if(!accountHolderName || !accountHolderDOB || !accountType || initialBalance === undefined){
            return res.status(400).json({
                message: 'All fields are required'
            });
        }
        if(initialBalance < 0){
            return res.status(400).json({
                message: 'Balance cannot be negative'
            });
        }
        const accounts = readDatabase();
        const accountNumber = generateAccountNumber();
        const newAccount = {
            accountNumber,
            accountHolderName,
            accountHolderDOB,
            accountType,
            balance: initialBalance,
        };
        accounts.push(newAccount);
        writeDatabase(accounts);

        res.status(201).json({
            message: 'Account created successfully',
            accountNumber,
            accountHolderName,
            accountType,
            initialBalance,
        });
    },


    resolveAccount: (req, res) => {
        const accountNumber = req.params.accountNumber;
        const accounts = readDatabase();

        const account = accounts.find((account) => account.accountNumber === accountNumber);

        if(!account){
            return res.status(404).json({
                message: 'Account not found'
            });

        }
        res.json(account);
    },


    fetchAllAccounts: (req, res) => {
        const accounts = readDatabase();
        res.json(accounts);
    },
    };

    module.exports = bankAccountController;



