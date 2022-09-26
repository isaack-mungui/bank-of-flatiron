import React from "react";
import { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


function AccountContainer() {
  // const [search, setSearch] = useState("")
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setTransactions(data)
    })
  }, [])

  // function handleSearch(search) {
  //   let searchTerm = transactions.description.toLowerCase().includes(search)
  //   setTransactions(transactions.filter((transaction) => transaction.description === searchTerm))
  //   // return setTransactions(search.toLowerCase() === '' ? setTransactions(transactions) : setTransactions(searchTerm))
  // }


  return (
    <div>
      {/* <Search search={handleSearch} /> */}
      <AddTransactionForm />
      <TransactionsList transaction={transactions} />
    </div>
  );
}

export default AccountContainer;
