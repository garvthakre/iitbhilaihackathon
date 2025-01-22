import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/signup';
import Login from './pages/Login';
import FamilyMembers from './pages/FamilyMembers';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/family" element={<FamilyMembers />} />
                 
                </Routes>
            </div>
        </Router>
    );
};

export default App;
