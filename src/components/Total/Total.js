import React from "react";
import classNames from "classnames";

function Total({ transactionsArray }) {
  const total = transactionsArray.reduce(
    (accumulator, { amount }) => accumulator + Number(amount),
    0
  );

  const totalClass = classNames("h1-title", "text-center", "m-5", {
    "text-success": total > 100,
    "text-warning": total >= 0 && total <= 100,
    "text-danger": total < 0,
  });

  return (
    <div className="bank-account-total">
      <h1 className="text-center m-5">
        Bank Account Total: <span className={totalClass}>${total}</span>{" "}
      </h1>
    </div>
  );
}

export default Total;
