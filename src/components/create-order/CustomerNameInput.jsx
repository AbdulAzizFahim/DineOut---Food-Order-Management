export default function CustomerNameInput({ label, order, setOrder }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type="text"
        className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        onChange={(e) => {
          setOrder({ ...order, customerName: e.target.value });
        }}
        value={order.customerName}
      />
    </div>
  );
}
