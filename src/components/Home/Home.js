import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home({ transactionsArray }) {
  function formatDate(dateString) {
    const options = { month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="container">
      <div className="table-container">
        <table className="table table-hover ">
          <tbody>
            {transactionsArray.map(
              ({ item_name, date, category, amount, id }) => {
                const formattedDate = formatDate(date);
                return (
                  <tr key={id} className="table-row">
                    <td className="table-cell fs-4">{formattedDate}</td>
                    <td className="table-cell fs-4">
                      <Link
                        className="category-link text "
                        to={`/transaction/${id}`}
                      >
                        {item_name}
                      </Link>
                    </td>
                    <td className="table-cell fs-4">${amount}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
