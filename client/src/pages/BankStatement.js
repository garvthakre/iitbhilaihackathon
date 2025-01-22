// BankStatement.js
import React, { useEffect, useState } from 'react';

const BankStatement = ({ memberId }) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch(`/api/bank-statement/${memberId}`)
            .then(response => response.json())
            .then(data => setTransactions(data));
    }, [memberId]);

    return (
        <div>
            <h1>Bank Statement</h1>
            {/* Display transactions in a table */}
        </div>
    );
};

export default BankStatement;
