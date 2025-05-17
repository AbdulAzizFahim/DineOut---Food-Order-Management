import Heading from "../components/create-order/Heading";
import CustomerNameInput from "../components/create-order/CustomerNameInput";
import FoodList from "../components/create-order/FoodList";
import PlaceOrderButton from "../components/create-order/PlaceOrderButton";

export default function CreateOrder({ order, setOrder, setOrderSummary }) {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <Heading
        header="CREATE ORDER"
        title="Accurately fulfill customer orders based on a precise
                    understanding of their requirements."
      />
      <CustomerNameInput
        label="Customer Name"
        order={order}
        setOrder={setOrder}
      />
      <FoodList order={order} setOrder={setOrder} />
      <PlaceOrderButton
        value={order.totalPrice}
        setOrder={setOrder}
        order={order}
        setOrderSummary={setOrderSummary}
      />
    </div>
  );
}
