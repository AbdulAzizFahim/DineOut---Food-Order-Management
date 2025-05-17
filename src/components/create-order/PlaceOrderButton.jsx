export default function PlaceOrderButton({
  value,
  order,
  setOrder,
  setOrderSummary,
}) {
  function handleOnClick() {
    setOrderSummary((prev) => ({
      ...prev,
      maxId: prev.maxId + 1,
      totalOrder: prev.totalOrder + 1,
      pendingOrder: prev.pendingOrder + 1,
      orderList: [
        ...prev.orderList,
        {
          id: prev.maxId + 1,
          customerName: order.customerName,
          items: order.itemList.length,
          amount: order.totalPrice,
          status: "PENDING",
        },
      ],
    }));

    setOrder({
      customerName: "",
      itemList: [],
      totalPrice: 0,
    });
  }

  return (
    <button
      className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
      onClick={handleOnClick}
    >
      Place Order (BDT {value})
    </button>
  );
}
