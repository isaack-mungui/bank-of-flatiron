import React, { useEffect, useState } from "react";

function Transaction({id}) {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setTransactions(data)
    })
  }, [])

  return (
    <div>
      {transactions.map((transaction) => (
        <tr>
          <td key={id}>{transaction.date}</td>
          <td key={id}>{transaction.description}</td>
          <td key={id}>{transaction.category}</td>
          <td key={id}>{transaction.amount}</td> 
        </tr>
      ))}
    </div>
  );
}

export default Transaction;
