function TransactionList({ TransactionList }) {
    return (
        <div className="mt-4">

            <h3 className="text-lg font-semibold mb-2">History</h3>

            <ul className="space-y-2">

                {TransactionList.map((item) => (
                    <li key={item.id} className="flex justify-between items-center bg-gray-50 p-3 rounded border">
                        
                        <div>
                            <p className="font-medium">{item.text}</p>

                            {/* ✅ UPDATED DATE FORMAT */}
                            <p className="text-xs text-gray-500">
                                {new Date(item.date).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </p>
                        </div>

                        <span className={item.amount > 0 ? "text-green-500" : "text-red-500"}>
                            {item.amount > 0 ? "+" : ""}₹{item.amount}
                        </span>

                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TransactionList;