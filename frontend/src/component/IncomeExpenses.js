function IncomeExpenses() {
  return (
    <div className="flex justify-between bg-gray-100 p-4 rounded-lg mb-6">
      
      <div className="text-center">
        <h4 className="text-gray-500 text-sm">Income</h4>
        <p className="text-green-500 font-bold text-lg">+₹0.00</p>
      </div>

      <div className="text-center">
        <h4 className="text-gray-500 text-sm">Expense</h4>
        <p className="text-red-500 font-bold text-lg">-₹0.00</p>
      </div>

    </div>
  );
}

export default IncomeExpenses;