import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download, Filter } from 'lucide-react';

const BankStatement = () => {
  const [dateRange, setDateRange] = useState('month');
  
  // Sample data - in real app, this would come from your API
  const transactions = [
    { id: 1, date: '2025-01-20', description: 'Grocery Shopping', amount: -120.50, type: 'expense', category: 'Groceries' },
    { id: 2, date: '2025-01-19', description: 'Salary Deposit', amount: 3000.00, type: 'income', category: 'Salary' },
    { id: 3, date: '2025-01-18', description: 'Utility Bill', amount: -200.00, type: 'expense', category: 'Utilities' },
    { id: 4, date: '2025-01-17', description: 'Online Shopping', amount: -89.99, type: 'expense', category: 'Shopping' },
    { id: 5, date: '2025-01-16', description: 'Freelance Payment', amount: 500.00, type: 'income', category: 'Freelance' }
  ];

  const chartData = [
    { date: 'Jan 16', balance: 2500 },
    { date: 'Jan 17', balance: 2910 },
    { date: 'Jan 18', balance: 2710 },
    { date: 'Jan 19', balance: 5710 },
    { date: 'Jan 20', balance: 5589.50 }
  ];

  const handleExport = (format) => {
    // Handle export logic here
    console.log(`Exporting in ${format} format`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bank Statement</h1>
        <div className="flex gap-4">
          <select 
            className="p-2 border rounded-md bg-white"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
          <button
            onClick={() => handleExport('pdf')}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            <Download className="h-4 w-4" />
            Export PDF
          </button>
        </div>
      </div>

      {/* Balance Trend Chart */}
      <div className="bg-white rounded-lg shadow mb-6 p-6">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Balance Trend</h2>
        </div>
        <div className="h-80 w-full">
          <LineChart data={chartData} width={800} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Description</th>
                  <th className="text-left p-4">Category</th>
                  <th className="text-right p-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="p-4">{transaction.date}</td>
                    <td className="p-4">{transaction.description}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        transaction.type === 'income' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {transaction.category}
                      </span>
                    </td>
                    <td className={`p-4 text-right ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow mt-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Total Income</p>
              <p className="text-2xl font-bold text-green-600">
                ${transactions.reduce((sum, t) => sum + (t.amount > 0 ? t.amount : 0), 0).toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Total Expenses</p>
              <p className="text-2xl font-bold text-red-600">
                ${Math.abs(transactions.reduce((sum, t) => sum + (t.amount < 0 ? t.amount : 0), 0)).toFixed(2)}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600">Net Balance</p>
              <p className="text-2xl font-bold">
                ${transactions.reduce((sum, t) => sum + t.amount, 0).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankStatement;