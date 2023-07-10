import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

function fetch() {
  //   const [transactions, setTransactions] = useState([]);

  //   useEffect(() => {
  //     fetchTransactions();
  //   }, []);

  async function fetchTransactions() {
    try {
      let result = await axios.get("http://localhost:3001/transactions");

      setTransactions(result.data);
    } catch (e) {
      console.log(e);
    }
  }
  /*
     return (
    <div className="App">
      <Nav />
      {transactions.map((item) => {
        return <div key={item.id}> {item.item_name}</div>;
      })}
    </div>
  );
} */
  return <div>fetch</div>;
}

export default fetch;
