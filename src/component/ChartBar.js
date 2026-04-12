function ChartBar({ label, value, max }) {

  let percent = 0;

  if (max > 0) {
    percent = (value / max) * 100;
  }

  let bgColor = "bg-green-400";

  if (percent >= 75) {
    bgColor = "bg-red-500";
  } else if (percent >= 50) {
    bgColor = "bg-orange-400";
  } else if (percent >= 25) {
    bgColor = "bg-yellow-400";
  }

  return (
    <div className="flex flex-col items-center w-6">

      {/* ✅ FIXED HEIGHT (VISIBLE ALWAYS) */}
      <div className="h-40 w-4 bg-gray-200 rounded overflow-hidden flex items-end">
        <div
          className={`w-full ${bgColor}`}
          style={{ height: `${percent}%` }}
        ></div>
      </div>

      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}

export default ChartBar;