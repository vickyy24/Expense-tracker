function ChartBar({ label, value, max }) {

  let height = "0%";

  if (max > 0) {
    height = (value / max) * 100 + "%";
  }

  const percent = max > 0 ? (value / max) * 100 : 0;

  let bgColor = "bg-green-400";

  
  if (percent >= 75) {
    bgColor = "bg-red-500";      
  } else if (percent >= 50) {
    bgColor = "bg-orange-400";    
  } else if (percent >= 25) {
    bgColor = "bg-yellow-400";     
  } else {
    bgColor = "bg-green-400";    
  }

  return (
    <div className="flex flex-col items-center w-6">
      <div className="h-24 w-4 bg-gray-200 rounded overflow-hidden flex items-end">
        <div className={`w-full ${bgColor}`} style={{ height }}></div>
      </div>
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}

export default ChartBar;