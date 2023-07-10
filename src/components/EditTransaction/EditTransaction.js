import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { formatDate } from "../Home/Home";
import { v4 as uuidv4 } from "uuid";

function EditTransaction({ transactionList, setTransactionList }) {
  const { id } = useParams();

  const [date, setDate] = useState("");

  const [name, setName] = useState("");

  const [amount, setAmount] = useState("");

  const [from, setFrom] = useState("");

  const [category, setCategory] = useState("");

  // async function handleFetchData() {
  //   // const formattedDate = formatDate(date);
  //   try {
  //     let response = await axios.put(
  //       `http://localhost:3001/transactions/update-transaction/${id}`
  //     );

  //     const {
  //       item_name,
  //       date,
  //       amount,
  //       from,
  //       category,
  //       id: transactionId,
  //     } = response.data.data;

  //     // setDate(formattedDate || "");
  //     setName(item_name || "");
  //     setAmount(amount || "");
  //     setFrom(from || "");
  //     setCategory(category || "");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  // useEffect(() => {
  //   handleFetchData();
  // }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // const response = await axios.put(
      //   `http://localhost:3001/transactions/update-transaction/${id}`,
      // {
      //   date,
      //   item_name: name,
      //   amount,
      //   from,
      //   category,
      // }
      // );

      const updatedTransaction = {
        id: uuidv4(),
        date,
        item_name: name,
        amount,
        from,
        category,
      };
      const newTransactionList = transactionList.filter((t) => t.id !== id);

      setTransactionList([updatedTransaction, ...newTransactionList]);
      // console.log({ data: response.data.data });

      setDate("");
      setName("");
      setAmount("");
      setFrom("");
      setCategory("");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="edit-form-container">
      <div>
        <h2 className="m-5 title">Edit Transaction:</h2>
      </div>
      <div className="m-5">
        <div className="edit-container-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
              name="date"
              className="form-control form-control-lg"
            />
            <div className="m-5">
              <label htmlFor="item_name">Item Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="item_name"
                name="item_name"
                className="form-control form-control-lg"
              />
            </div>
            <div className="m-5">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                id="amount"
                name="amount"
                className="form-control form-control-lg"
              />
            </div>
            <div className="m-5">
              <label htmlFor="from">From</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                id="from"
                name="from"
                className="form-control form-control-lg"
              />
            </div>
            <div className="m-5">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                name="category"
                className="form-control form-control-lg"
              />
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTransaction;
