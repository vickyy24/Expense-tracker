import ChartBar from "./ChartBar";

function Chart({ data, TransactionList }) {

  let income = 0;

  TransactionList.forEach((item) => {
    if (item.amount > 0) {
      income = item.amount;
    }
  });

  return (
    <div className="flex justify-between mb-4"> {/* ❌ removed h-full */}

      {data.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          value={item.value}
          max={income}
        />
      ))}

    </div>
  );
}

export default Chart;