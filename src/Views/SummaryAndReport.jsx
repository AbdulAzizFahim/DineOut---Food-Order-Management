import OrderSummary from "../components/order-summary/OrderSummary";
import OrderReports from "./OrderReports";

export default function SummaryAndReport({ orderSummary, setOrderSummary }) {
  return (
    <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
      <OrderSummary orderSummary={orderSummary} />
      <OrderReports
        orderSummary={orderSummary}
        setOrderSummary={setOrderSummary}
      />
    </div>
  );
}
