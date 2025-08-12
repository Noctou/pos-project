import LoadHistoryTable from "../LoadHistoryTable";

export default function HistoryTable({data, setData}) {
  return (
    <div className="table-scroll">
      <table className="history-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <LoadHistoryTable data={data} setData={setData}/>
        </tbody>
      </table>
    </div>
  );
}
