export default function TableFilter({ setOrderSummary }) {
  return (
    <select
      className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
      onChange={(e) => {
        setOrderSummary((prev) => ({
          ...prev,
          orderList: [...prev.orderList],
          selection: e.target.value,
        }));
      }}
    >
      <option>All</option>
      <option>Pending</option>
      <option>Delivered</option>
    </select>
  );
}
