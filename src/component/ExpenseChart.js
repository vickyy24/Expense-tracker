import Chart from "./Chart";

function ExpenseChart({ TransactionList }) {

  const data = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 }
  ];

  TransactionList.forEach((item) => {
    const month = new Date(item.date).getMonth();

    if (item.amount < 0) {
      data[month].value += Math.abs(item.amount);
    }
  });

  return (
    <Chart
      data={data}
      TransactionList={TransactionList} 
    />
  );
}

export default ExpenseChart;