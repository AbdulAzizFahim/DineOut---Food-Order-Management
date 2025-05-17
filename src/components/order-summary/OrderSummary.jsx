import OrderSummaryItem from "../common/OrderSummaryItem";

export default function OrderSummary({ orderSummary }) {
  const orderSummaryCategory = [
    {
      key: 1,
      label: "Total Order",
      textColor: "yellow",
      value: orderSummary.totalOrder,
    },
    {
      key: 2,
      label: "Pending",
      textColor: "red",
      value: orderSummary.pendingOrder,
    },
    {
      key: 3,
      label: "Delivered",
      textColor: "green",
      value: orderSummary.deliveredOrder,
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {orderSummaryCategory.map((category) => {
          return (
            <OrderSummaryItem
              key={category.key}
              details={category}
            />
          );
        })}
      </div>
    </div>
  );
}
