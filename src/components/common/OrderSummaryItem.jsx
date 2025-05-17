export default function OrderSummaryItem({ details }) {
  const { textColor, value, label } = details;
  return (
    <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
      <div className={`text-5xl font-bold text-${textColor}-500 mb-2`}>
        {value}
      </div>
      <div
        className={`bg-${textColor}-800 bg-opacity-50 text-${textColor}-200 text-xs font-medium px-3 py-1 rounded-full inline-block`}
      >
        {label}
      </div>
    </div>
  );
}
