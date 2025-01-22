const Transaction = require('../models/Transaction');

exports.getTransactionsByUserId = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.params.userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.addTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ error });
    }
};
