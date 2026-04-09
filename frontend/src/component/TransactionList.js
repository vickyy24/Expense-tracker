function TransactionList() {
  return (
    <div className="mb-6">
      
      <h3 className="font-semibold mb-2">History</h3>

      <ul className="space-y-2">
        
        <li className="flex justify-between p-2 bg-gray-50 rounded">
          <span>Salary</span>
          <span className="text-green-500">+₹5000</span>
        </li>

        <li className="flex justify-between p-2 bg-gray-50 rounded">
          <span>Groceries</span>
          <span className="text-red-500">-₹200</span>
        </li>

      </ul>

    </div>
  );
}

export default TransactionList;