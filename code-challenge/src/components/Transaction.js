import React, { useEffect, useState } from "react";

function Transaction() {
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
    <tr>
      <td>{transactions.map(transaction => transaction.date)}</td>
      <td>{transactions.map(transaction => transaction.description)}</td>
      <td>{transactions.map(transaction => transaction.category)}</td>
      <td>{transactions.map(transaction => transaction.amount)}</td> 
    </tr>
  );
}

export default Transaction;
