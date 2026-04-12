import ChartBar from "./ChartBar";

function Chart({ data, TransactionList }) {

  let income = 0;

  // ✅ get salary ONCE
  TransactionList.forEach((item) => {
    if (item.amount > 0) {
      income = item.amount;   // ✅ NOT +=
    }
  });

  return (
    <div className="flex justify-between mb-4">

      {data.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          value={item.value}
          max={income}   // ✅ fixed monthly income
        />
      ))}

    </div>
  );
}

export default Chart;