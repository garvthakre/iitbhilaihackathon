import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FamilyMembers = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState('');
    const [totalBankMoney, setTotalBankMoney] = useState(0);
    const [newMember, setNewMember] = useState({
        fullName: '',
        email: '',
        password: '',
        bankAccount: '',
        bankName: ''
    });

    const fetchFamilyMembers = async (searchQuery = '') => {
        try {
            setLoading(true);
            const token = localStorage.getItem('authToken');
            const response = await axios.get('/api/family', {
                headers: { Authorization: `Bearer ${token}` },
                params: { search: searchQuery },
            });
            setMembers(response.data.familyMembers);
            setTotalBankMoney(response.data.totalBankMoney);
        } catch (err) {
            setError('Failed to fetch family members.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFamilyMembers();
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        fetchFamilyMembers(e.target.value);
    };

    const handleChange = (e) => {
        setNewMember({ ...newMember, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            await axios.post('/api/family', newMember, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchFamilyMembers();
            setNewMember({ fullName: '', email: '', password: '', bankAccount: '', bankName: '' });
        } catch (err) {
            setError('Failed to add family member.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Family Members</h1>
            <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={handleSearch}
            />
            <p>Total Bank Money: ₹{totalBankMoney}</p>
            <form onSubmit={handleSubmit}>
                <input name="fullName" placeholder="Full Name" value={newMember.fullName} onChange={handleChange} required />
                <input name="email" placeholder="Email" value={newMember.email} onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" value={newMember.password} onChange={handleChange} required />
                <input name="bankAccount" placeholder="Bank Account Number" value={newMember.bankAccount} onChange={handleChange} required />
                <input name="bankName" placeholder="Bank Name" value={newMember.bankName} onChange={handleChange} required />
                <button type="submit">Add Family Member</button>
            </form>
            {members.length === 0 ? (
                <p>No family members found.</p>
            ) : (
                members.map(member => (
                    <div key={member._id}>
                        <h2>{member.fullName}</h2>
                        <p>Email: {member.email}</p>
                        <p>Bank Money: ₹{member.bankAccount}</p>
                        <p>Bank Name: {member.bankName}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default FamilyMembers;
