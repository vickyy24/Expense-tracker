import AddTransaction from "./component/AddTransaction";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    
                <h2 className="text-2xl font-bold text-center mb-4">Expense Tracker</h2>

                <Balance/>
                <IncomeExpenses/>
                <TransactionList/>
                <AddTransaction/>

            </div>

        </div>
    );
}

export default App;