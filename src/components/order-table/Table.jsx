const tableHeader = [
  { key: "id", label: "ID" },
  { key: "customerName", label: "Customer Name" },
  { key: "items", label: "Items" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "action", label: "Action" },
];

export default function Table({ orderSummary, setOrderSummary }) {
  return (
    <div className="bg-cardbg rounded-lg p-4">
      <div className="reports-container">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-sm">
              {tableHeader.map((header) => {
                return (
                  <th className="pb-3 font-medium" key={header.key}>
                    {header.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-sm">
            {orderSummary.orderList.map((summary) => (
              <TableRow
                summary={summary}
                selection={orderSummary.selection}
                setOrderSummary={setOrderSummary}
                key={summary.id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({ summary, setOrderSummary, selection }) {
  const { id, customerName, items, amount, status } = summary;

  if (
    selection.toUpperCase() !== "ALL" &&
    status.toUpperCase() !== selection.toUpperCase()
  ) {
    return null;
  }

  function handleDelete(rowId) {
    setOrderSummary((prev) => ({
      ...prev,
      totalOrder: prev.totalOrder - 1,
      deliveredOrder:
        status === "PENDING" ? prev.deliveredOrder : prev.deliveredOrder - 1,
      pendingOrder:
        status === "PENDING" ? prev.pendingOrder - 1 : prev.pendingOrder,
      orderList: prev.orderList.filter((x) => x.id !== rowId),
    }));
  }

  function handleDeliver(rowId) {
    setOrderSummary((prev) => ({
      ...prev,
      deliveredOrder: prev.deliveredOrder + 1,
      pendingOrder: prev.pendingOrder - 1,
      orderList: prev.orderList.map((order) =>
        order.id === rowId ? { ...order, status: "DELIVERED" } : { ...order }
      ),
    }));
  }

  return (
    <tr className="border-t border-gray-700">
      <td className="py-3">{id}</td>
      <td className="py-3">{customerName}</td>
      <td className="py-3">{items}</td>
      <td className="py-3">{amount}</td>
      <td className="py-3">
        <span className="text-red-500">{status}</span>
      </td>
      <td className="py-3">
        <button
          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
        {status === "PENDING" && (
          <button
            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
            onClick={() => {
              handleDeliver(id);
            }}
          >
            DELIVER
          </button>
        )}
      </td>
    </tr>
  );
}
