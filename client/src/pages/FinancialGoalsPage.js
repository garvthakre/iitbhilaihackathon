// FinancialGoalsPage.js
import React, { useEffect, useState } from 'react';

const FinancialGoalsPage= () => {
   const [goals, setGoals] = useState([]);

   useEffect(() => {
       fetch('/api/goals')
           .then(response => response.json())
           .then(data => setGoals(data));
   }, []);

   return (
       <div>
           <h1>Financial Goals</h1>
           {/* Display goals with progress bars */}
       </div>
   );
};

export default FinancialGoalsPage;
