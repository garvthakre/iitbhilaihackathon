const User = require('../models/User');

// Get all family members linked to the logged-in user
exports.getFamilyMembers = async (req, res) => {
    const { search } = req.query; // Capture the search query

    try {
        // Search users based on search criteria or fetch all
        const query = { primaryUserId: req.user.id };
        if (search) {
            query.$or = [
                { fullName: { $regex: search, $options: 'i' } }, // Case-insensitive match for name
                { email: { $regex: search, $options: 'i' } } // Case-insensitive match for email
            ];
        }

        const familyMembers = await User.find(query);

        // Calculate the total bank money for the family
        const totalBankMoney = familyMembers.reduce(
            (sum, member) => sum + (parseFloat(member.bankAccount) || 0),
            0
        );

        res.json({ familyMembers, totalBankMoney });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch family members' });
    }
};

// Add a new family member with bank details
exports.addFamilyMember = async (req, res) => {
    const { fullName, email, password, bankAccount, bankName } = req.body;

    try {
        const newMember = new User({
            fullName,
            email,
            password,
            bankAccount: parseFloat(bankAccount) || 0,
            bankName,
            primaryUserId: req.user.id, // Link to the primary user's ID
        });

        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add family member' });
    }
};
