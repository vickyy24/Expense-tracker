function IncomeExpenses({ TransactionList }) {

  let income = 0;
  let expense = 0;

  // calculate income & expense
  TransactionList.forEach((item) => {
    if (item.amount > 0) {
      income += item.amount;
    } else {
      expense += item.amount;
    }
  });

  // remaining balance
  const balance = income + expense;

  return (
    <div className="bg-gray-50 p-4 rounded mb-4">

      {/* Remaining Balance */}
      <div className="text-center mb-4">
        <p className="text-gray-500">Remaining Balance</p>
        <h2 className="text-3xl font-bold">
          ₹{balance}
        </h2>
      </div>

      {/* Income & Expense */}
      <div className="flex justify-center items-center gap-16">

        <div className="text-center">
          <p className="text-gray-500">Income</p>
          <p className="text-green-500 font-semibold">
            ₹{income}
          </p>
        </div>

        {/* vertical line */}
        <div className="h-10 border-l border-gray-300"></div>

        <div className="text-center">
          <p className="text-gray-500">Expense</p>
          <p className="text-red-500 font-semibold">
            ₹{Math.abs(expense)}
          </p>
        </div>

      </div>

    </div>
  );
}

export default IncomeExpenses;