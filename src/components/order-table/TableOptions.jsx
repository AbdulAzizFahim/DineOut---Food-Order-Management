import FilterButtonSvg from "../svg/FilterButtonSvg";
import TableFilter from "./TableFilter";

export default function TableOptions({ setOrderSummary }) {
  return (
    <div className="flex justify-between">
      <h2 className="text-xl font-bold mb-4">Order Reports</h2>

      <div className="flex gap-4 items-center">
        <FilterButtonSvg />
        <TableFilter setOrderSummary={setOrderSummary} />
      </div>
    </div>
  );
}
