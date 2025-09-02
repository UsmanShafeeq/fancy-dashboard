import React from "react";
import "./../styles/Transactions.css";

const RecentTransactions = () => {
  const transactions = [
    { id: 1, date: "2025-08-25", desc: "Grocery Shopping", amount: "$43.95" },
    { id: 2, date: "2025-08-26", desc: "Netflix Subscription", amount: "$15.00" },
    { id: 3, date: "2025-08-27", desc: "Electricity Bill", amount: "$98.75" },
    { id: 4, date: "2025-08-28", desc: "Gym Membership", amount: "$30.00" },
    { id: 5, date: "2025-08-28", desc: "Gym Membership", amount: "$30.00" },
    { id: 6, date: "2025-08-28", desc: "Gym Membership", amount: "$30.00" },
  ];

  return (
    <div className="table-container">
      <h3 style={{ color: "white" }}>Recent Transactions</h3>
      <table>
        
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.desc}</td>
              <td>
                <span className="amount-badge">{t.amount}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
