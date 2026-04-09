function AddTransaction() {
  return (
    <div>
      <h3 className="mb-2">Add Transaction</h3>

      <form>
        
        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter text..."
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-2">
          <input
            type="number"
            placeholder="Enter amount..."
            className="w-full p-2 border rounded"
          />
        </div>

        <button className="w-full p-2 bg-blue-500 text-white rounded">
          Add Transaction
        </button>

      </form>
    </div>
  );
}

export default AddTransaction;