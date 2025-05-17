import { useState } from "react";
import CreateOrder from "./Views/CreateOrder";
import Navbar from "./Views/Navbar";
import SummaryAndReport from "./Views/SummaryAndReport";

export default function App() {
  const [order, setOrder] = useState({
    customerName: "",
    itemList: [],
    totalPrice: 0,
  });

  const [orderSummary, setOrderSummary] = useState({
    totalOrder: 0,
    pendingOrder: 0,
    deliveredOrder: 0,
    orderList: [],
    selection: "All",
    maxId: 0,
  });

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
        <CreateOrder
          order={order}
          setOrder={setOrder}
          setOrderSummary={setOrderSummary}
        />
        <SummaryAndReport  orderSummary= {orderSummary} setOrderSummary= {setOrderSummary}/>
      </div>
    </div>
  );
}
