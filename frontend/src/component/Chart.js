import ChartBar from "./ChartBar";

function Chart({ data, TransactionList }) {

  let max = 0;

  // use total income as max
  TransactionList.forEach((item) => {
    if (item.amount > 0) {
      max += item.amount;
    }
  });

  return (
    <div className="flex justify-between mb-4">

      {data.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          value={item.value}
          max={max}
        />
      ))}

    </div>
  );
}

export default Chart;