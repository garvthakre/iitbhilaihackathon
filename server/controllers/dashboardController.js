const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.getDashboardData = async (req, res) => {
    try {
        const users = await User.find();
        const transactions = await Transaction.find();
        
        // Calculate total balance and other analytics here...
        
        res.json({ users, transactions });
    } catch (error) {
        res.status(500).json({ error });
    }
};
