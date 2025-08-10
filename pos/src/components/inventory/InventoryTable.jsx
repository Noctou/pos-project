import LoadTable from "../LoadTable";

export default function InventoryTable({ data, setData }) {
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
          <LoadTable data={data} setData={setData} />
        </tbody>
      </table>
    </div>
  );
}
