import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { DollarSign, TrendingUp, Users, AlertCircle } from 'lucide-react';
import Navbar from '../components/navbar';

const Dashboard = () => {
  // Sample data - in real app, this would come from your API
  const chartData = [
    { name: 'Jan', balance: 4000 },
    { name: 'Feb', balance: 3000 },
    { name: 'Mar', balance: 5000 },
    { name: 'Apr', balance: 4500 },
    { name: 'May', balance: 6000 },
  ];

  const recentTransactions = [
    { id: 1, description: 'Grocery Shopping', amount: -120.50, member: 'John Doe', date: '2025-01-20' },
    { id: 2, description: 'Salary Deposit', amount: 3000.00, member: 'Jane Doe', date: '2025-01-19' },
    { id: 3, description: 'Utility Bill', amount: -200.00, member: 'John Doe', date: '2025-01-18' },
  ];

  return (<div> 
    <Navbar/>
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Family Finance Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <DollarSign className="h-8 w-8 text-blue-500" />
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <h3 className="text-2xl font-bold">$12,500.00</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <TrendingUp className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Monthly Savings</p>
              <h3 className="text-2xl font-bold">$2,300.00</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <Users className="h-8 w-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Family Members</p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center space-x-4">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <div>
              <p className="text-sm text-gray-500">Pending Bills</p>
              <h3 className="text-2xl font-bold">3</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Family Balance Trend</h2>
          <div className="h-80 w-full">
            <LineChart data={chartData} width={800} height={300} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Description</th>
                  <th className="text-left p-4">Member</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-right p-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="p-4">{transaction.description}</td>
                    <td className="p-4">{transaction.member}</td>
                    <td className="p-4">{transaction.date}</td>
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
    </div>
    </div>
  );
};

export default Dashboard;