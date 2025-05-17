import TableOptions from "../components/order-table/TableOptions";
import Table from "../components/order-table/Table";

export default function OrderReports({ orderSummary, setOrderSummary }) {
  return (
    <div>
      <TableOptions setOrderSummary = {setOrderSummary}/>
      <Table orderSummary={orderSummary} setOrderSummary={setOrderSummary} />
    </div>
  );
}
