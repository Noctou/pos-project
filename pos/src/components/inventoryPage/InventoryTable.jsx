import LoadInventoryTable from "../LoadInventoryTable";

export default function InventoryTable({ data, setData, status}) {
  return (
    <div className="table-scroll">
      <table className="stocks-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <LoadInventoryTable data={data} setData={setData} status={status} />
        </tbody>
      </table>
    </div>
  );
}
