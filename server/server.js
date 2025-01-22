const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock Data for Chart, Transactions, and Stats
const chartData = [
  { name: 'Jan', balance: 4000 },
  { name: 'Feb', balance: 3000 },
  { name: 'Mar', balance: 5000 },
  { name: 'Apr', balance: 4500 },
  { name: 'May', balance: 6000 },
];

const recentTransactions = [
  { id: 1, description: 'Grocery Shopping', amount: -120.5, member: 'John Doe', date: '2025-01-20' },
  { id: 2, description: 'Salary Deposit', amount: 3000.0, member: 'Jane Doe', date: '2025-01-19' },
  { id: 3, description: 'Utility Bill', amount: -200.0, member: 'John Doe', date: '2025-01-18' },
];

const statsOverview = {
  totalBalance: 12500.0,
  monthlySavings: 2300.0,
  familyMembers: 4,
  pendingBills: 3,
};

// Routes
app.get('/api/chart-data', (req, res) => res.json(chartData));
app.get('/api/recent-transactions', (req, res) => res.json(recentTransactions));
app.get('/api/stats-overview', (req, res) => res.json(statsOverview));

// Route Handlers
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/family', require('./routes/familyRoutes'));

// Error Handling for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Resource not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
