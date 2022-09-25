import React, { useState } from "react";

function AddTransactionForm() {
  const [data, setData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  })

  function handleChange(event) {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <div className="ui segment" onSubmit={handleSubmit}>
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={data.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={data.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={data.category} onChange={handleChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={data.amount} onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
