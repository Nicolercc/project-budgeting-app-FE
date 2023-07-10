import React, { useState } from "react";
import axios from "axios";
import "./NewItemForm.css";

function NewItemForm({ setTransactionList, transactionList }) {
  const [formData, setFormData] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${
          process.env.REACT_APP_BACKEND_DOMAIN || "http://localhost:3001"
        }/transactions/create-transactions`,
        formData
      );

      setTransactionList([response.data.data, ...transactionList]);

      setFormData({
        item_name: "",
        amount: "",
        date: "",
        from: "",
        category: "Salary",
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h1 className="m-5 title">Add new item</h1>
      <form className="m-5" onSubmit={handleSubmit}>
        <div className="m-5">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={formData.date}
            id="date"
            name="date"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
        </div>
        <div className="m-5">
          <label htmlFor="item_name">Item Name</label>
          <input
            type="text"
            value={formData.item_name}
            id="item_name"
            name="item_name"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
        </div>
        <div className="m-5">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={formData.amount}
            id="amount"
            name="amount"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
        </div>
        <div className="m-5">
          <label htmlFor="from">From</label>
          <input
            type="text"
            value={formData.from}
            id="from"
            name="from"
            className="form-control form-control-lg"
            onChange={handleChange}
          />
        </div>
        <div className="m-5">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            className="my-3 form-select"
          >
            <option></option>
            <option>Salary</option>
            <option>Entertainment</option>
            <option>Savings</option>
            <option>Expenses</option>
            <option>Taxes</option>
            <option>Retirement</option>
          </select>
        </div>
        <div className="row">
          <div className="col text-center">
            <button type="submit" className="btn btn-primary">
              CREATE NEW ITEM
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewItemForm;
