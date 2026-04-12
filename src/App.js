import { useState } from "react";
import AddTransaction from "./component/AddTransaction";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import ExpenseChart from "./component/ExpenseChart";

const initialTransactions = [

  // ===== 2026 =====
  { id: 1, text: "Salary", amount: 25000, date: "2026-01-05" },

  // each month <= 25000

  { id: 2, text: "Rent", amount: -18000, date: "2026-07-01" },   
  { id: 3, text: "Shopping", amount: -12000, date: "2026-10-01" },
  { id: 4, text: "Food", amount: -8000, date: "2026-04-01" },     
  { id: 5, text: "Groceries", amount: -4000, date: "2026-02-01" },

  // multi (same month total still < income)
  { id: 6, text: "Electricity", amount: -3000, date: "2026-12-06" },
  { id: 7, text: "Internet", amount: -2000, date: "2026-12-18" },


  // ===== 2025 =====
  { id: 8, text: "Salary", amount: 22000, date: "2025-01-05" },

  { id: 9, text: "Rent", amount: -16000, date: "2025-08-01" },   
  { id: 10, text: "Shopping", amount: -10000, date: "2025-11-01" },
  { id: 11, text: "Food", amount: -7000, date: "2025-06-01" },     
  { id: 12, text: "Groceries", amount: -3000, date: "2025-03-01" },

  { id: 13, text: "Recharge", amount: -2000, date: "2025-12-10" },


  // ===== 2024 =====
  { id: 14, text: "Salary", amount: 20000, date: "2024-01-05" },

  { id: 15, text: "Rent", amount: -15000, date: "2024-07-01" },   
  { id: 16, text: "Shopping", amount: -9000, date: "2024-10-01" },
  { id: 17, text: "Food", amount: -6000, date: "2024-05-01" },     
  { id: 18, text: "Groceries", amount: -2500, date: "2024-02-01" },

  { id: 19, text: "Trip", amount: -2000, date: "2024-12-03" },
  { id: 20, text: "Snacks", amount: -1500, date: "2024-12-14" },


  // ===== 2023 =====
  { id: 21, text: "Salary", amount: 17000, date: "2023-01-05" },

  { id: 22, text: "Rent", amount: -13000, date: "2023-08-01" },   
  { id: 23, text: "Shopping", amount: -8000, date: "2023-10-01" },
  { id: 24, text: "Food", amount: -5000, date: "2023-06-01" },     
  { id: 25, text: "Groceries", amount: -2000, date: "2023-03-01" },

  { id: 26, text: "Doctor", amount: -1500, date: "2023-12-05" },


  // ===== 2022 =====
  { id: 27, text: "Salary", amount: 15900, date: "2022-01-05" },

  { id: 28, text: "Rent", amount: -12000, date: "2022-07-01" },   
  { id: 29, text: "Shopping", amount: -7000, date: "2022-09-01" },
  { id: 30, text: "Food", amount: -4500, date: "2022-05-01" },     
  { id: 31, text: "Groceries", amount: -1800, date: "2022-02-01" },

  { id: 32, text: "Fuel", amount: -1200, date: "2022-12-12" },


  // ===== 2021 =====
  { id: 33, text: "Salary", amount: 10000, date: "2021-01-05" },

  { id: 34, text: "Rent", amount: -7000, date: "2021-08-01" },    
  { id: 35, text: "Shopping", amount: -5000, date: "2021-10-01" },
  { id: 36, text: "Food", amount: -3000, date: "2021-04-01" },     
  { id: 37, text: "Groceries", amount: -1200, date: "2021-03-01" },

  { id: 38, text: "Bills", amount: -800, date: "2021-12-05" }

];

function App() {

  const [transactions, setTransactions] = useState(initialTransactions);
  const [year, setYear] = useState("2026");

  let filteredTransactions = [];

  transactions.forEach((item) => {
    if (item.date.substring(0, 4) === year) {
      filteredTransactions.push(item);
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">

      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          Expense Tracker
        </h2>

        <IncomeExpenses TransactionList={filteredTransactions} />

        <div className="flex gap-6 mb-6">

          <div className="w-1/2">
            <AddTransaction setTransactions={setTransactions} />
          </div>

          <div className="w-1/2">

            <select
              className="w-full mb-4 p-2 border rounded"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>

            <ExpenseChart TransactionList={filteredTransactions} />

          </div>

        </div>

        <TransactionList TransactionList={filteredTransactions} />

      </div>

    </div>
  );
}

export default App;