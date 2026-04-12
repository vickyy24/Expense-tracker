function IncomeExpenses({ TransactionList }) {

  let monthlyIncome = 0;
  let expense = 0;

  // get monthly salary + total yearly expense
  TransactionList.forEach((item) => {
    if (item.amount > 0) {
      monthlyIncome = item.amount;
    } else {
      expense += Math.abs(item.amount);
    }
  });

  const yearlyIncome = monthlyIncome * 12;
  const balance = yearlyIncome - expense;

  return (
    <div className="bg-gray-50 p-4 rounded mb-4">

      <div className="text-center mb-4">
        <p className="text-gray-500">Remaining Balance</p>
        <h2 className="text-3xl font-bold">
          ₹{balance}
        </h2>
      </div>

      <div className="flex justify-center items-center gap-16">

        <div className="text-center">
          <p className="text-gray-500">Income</p>
          <p className="text-green-500 font-semibold">
            ₹{monthlyIncome}/month
          </p>
        </div>

        <div className="h-10 border-l border-gray-300"></div>

        <div className="text-center">
          <p className="text-gray-500">Total Expense</p>
          <p className="text-red-500 font-semibold">
            ₹{expense}
          </p>
        </div>

      </div>

    </div>
  );
}

export default IncomeExpenses;