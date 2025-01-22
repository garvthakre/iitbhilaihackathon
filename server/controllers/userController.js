const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup a new user
exports.signupUser = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const newUser = new User({ fullName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        res.status(500).json({ error });
    }
};

// Login a user and return JWT token
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error });
    }
};
