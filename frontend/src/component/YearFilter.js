// import { useState } from "react";
// import AddTransaction from "./component/AddTransaction";
// import Balance from "./component/Balance";
// import IncomeExpenses from "./component/IncomeExpenses";
// import TransactionList from "./component/TransactionList";

// const initialTransactions = [
//   { id: 1, text: "Salary", amount: 5500, date: "2026-01-05" },
//   { id: 2, text: "Groceries", amount: -700, date: "2026-02-10" },
//   { id: 3, text: "Salary", amount: 5200, date: "2025-01-05" },
//   { id: 4, text: "Groceries", amount: -650, date: "2025-02-12" },
//   { id: 5, text: "Rent", amount: -1600, date: "2025-03-01" },
//   { id: 6, text: "Electricity Bill", amount: -450, date: "2025-04-15" },
//   { id: 7, text: "Transport", amount: -350, date: "2025-05-20" },
//   { id: 8, text: "Salary", amount: 5000, date: "2024-01-05" },
//   { id: 9, text: "Groceries", amount: -600, date: "2024-03-10" },
//   { id: 10, text: "Rent", amount: -1500, date: "2024-06-01" },
//   { id: 11, text: "Internet", amount: -300, date: "2024-09-18" },
//   { id: 12, text: "Salary", amount: 4800, date: "2023-01-05" },
//   { id: 13, text: "Food", amount: -550, date: "2023-02-11" },
//   { id: 14, text: "Rent", amount: -1400, date: "2023-04-01" },
//   { id: 15, text: "Shopping", amount: -900, date: "2023-06-20" },
//   { id: 16, text: "Bills", amount: -350, date: "2023-08-09" },
//   { id: 17, text: "Travel", amount: -1000, date: "2023-11-25" },
//   { id: 18, text: "Salary", amount: 4500, date: "2022-01-05" },
//   { id: 19, text: "Groceries", amount: -500, date: "2022-05-14" },
//   { id: 20, text: "Rent", amount: -1300, date: "2022-10-01" },
//   { id: 21, text: "Salary", amount: 4200, date: "2021-01-05" },
//   { id: 22, text: "Food", amount: -450, date: "2021-06-15" },
//   { id: 23, text: "Bills", amount: -300, date: "2021-12-22" }
// ];

// function App() {
//   const [transactions, setTransactions] = useState(initialTransactions);

//   // ✅ ADDED: filter state
//   const [year, setYear] = useState("2026");

//   // ✅ ADDED: filtering logic
//   const filteredTransactions = transactions.filter((item) => {
//     return item.date.substring(0, 4) === year;
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">

//         <h2 className="text-2xl font-bold text-center mb-4">
//           Expense Tracker
//         </h2>

//         {/* ✅ ADDED: YEAR DROPDOWN */}
//         <select
//           className="w-full mb-4 p-2 border rounded"
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//         >
//           <option value="2026">2026</option>
//           <option value="2025">2025</option>
//           <option value="2024">2024</option>
//           <option value="2023">2023</option>
//           <option value="2022">2022</option>
//           <option value="2021">2021</option>
//         </select>

//         {/* ✅ USE FILTERED DATA */}
//         <Balance TransactionList={filteredTransactions} />
//         <IncomeExpenses TransactionList={filteredTransactions} />
//         <TransactionList TransactionList={filteredTransactions} />

//         <AddTransaction setTransactions={setTransactions} />

//       </div>

//     </div>
//   );
// }

// export default App;