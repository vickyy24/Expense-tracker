import { useState } from "react";

function AddTransaction({ setTransactions }) {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "" || amount === "" || date === "") return;

    let finalAmount = +amount;

    // auto detect income based on text
    const incomeKeywords = ["salary", "income", "bonus"];

    const isIncome = incomeKeywords.some((word) =>
      text.toLowerCase().includes(word)
    );

    if (!isIncome) {
      finalAmount = -finalAmount; // expense
    }

    const newTransaction = {
      id: Date.now(),
      text,
      amount: finalAmount,
      date
    };

    setTransactions((prev) => [newTransaction, ...prev]);

    setText("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="mb-4">

      <h3 className="text-lg font-semibold mb-2">
        Add Transaction
      </h3>

      <form onSubmit={handleSubmit} className="space-y-3">

        <div>
          <label className="text-sm text-gray-600">Text</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Amount</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded"
        >
          Add Transaction
        </button>

      </form>

    </div>
  );
}

export default AddTransaction;