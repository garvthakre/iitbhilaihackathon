// TransactionPage.js
import React, { useEffect, useState } from 'react';

const TransactionPage = ({ memberId }) => {
   const [transactions, setTransactions] = useState([]);

   useEffect(() => {
       fetch(`/api/transactions/${memberId}`)
           .then(response => response.json())
           .then(data => setTransactions(data));
   }, [memberId]);

   return (
       <div>
           <h1>Transactions</h1>
           {/* Display transactions in a table */}
       </div>
   );
};

export default TransactionPage;
