import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleTransaction({ transactionList, setTransactionList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // const myTransaction = transactionList.find((t) => t.id === id);
  // console.log({ myTransaction, transactionList });

  console.log({ transactionList });
  // useEffect(() => {
  // }, [transactionList]);

  console.log("ID", id);

  const [singleTransaction, setSingleTransaction] = useState(
    transactionList.find((t) => t.id === id)
  );

  useEffect(() => {
    if (transactionList.length > 0 && !singleTransaction) {
      setSingleTransaction(transactionList.find((t) => t.id === id));
    }
  }, [transactionList, id, singleTransaction]);

  // async function fetchSingleTransaction() {
  //   try {
  //     let result = await axios.get(`http://localhost:3001/transactions/${id}`);
  //     setSingleTransaction(result.data.data);
  //     console.log(result.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   fetchSingleTransaction();
  // }, []);

  // if (singleTransaction === null) {
  //   return <div>Loading...</div>;
  // }

  function handleEditClick() {
    navigate(`/edit/${id}`, {
      state: {
        singleTransaction,
        id,
      },
    });
  }

  async function handleDeleteClick() {
    // try {
    // await axios.delete(
    //   `http://localhost:3001/transactions/destroy-transaction/${id}`
    // );
    setTransactionList((prevList) =>
      prevList.filter((transaction) => transaction.id !== id)
    );
    navigate("/");
    // } catch (e) {
    //   console.log(e);
    // }
  }

  const isNullTransaction = !singleTransaction;

  return isNullTransaction ? (
    <div>Loading...</div>
  ) : (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-3 fw-bold">Transaction Details:</h1>
      <div className="d-flex flex-column justify-content-center align-items-center p-5 border m-5">
        <div className="mb-3 fs-2">
          {" "}
          <span className="fw-bold">Name:</span> {singleTransaction.item_name}
        </div>
        <div className="mb-3 fs-2">
          {" "}
          <span className="fw-bold">From:</span> {singleTransaction.from}
        </div>
        <div className="mb-3 fs-2">
          <span className="fw-bold">Date:</span>
          {singleTransaction.date}
        </div>
        <div className="mb-3 fs-2">
          <span className="fw-bold">Category: </span>
          {singleTransaction.category}
        </div>
        <div className="mb-3 fs-2">
          <span className="fw-bold"> Amount: </span>
          {singleTransaction.amount}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success m-2"
          onClick={handleEditClick}
        >
          Edit
        </button>

        <button
          type="submit"
          className="btn btn-success m-3"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleTransaction;
