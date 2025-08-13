export default function LoadHistoryTable({ data }) {

  return (
    <>
      {data.map((item, index) => (
        <tr key={index}>
          <td className="time">{item.time}</td>
          <td className="product_name">{item.product_name}</td>
          <td className="product-type"> {item.product_type} </td>
          <td className="quantity">{item.quantity} </td>
          <td className="total-price"> {item.total_price}</td>
        </tr>
      ))}
    </>
  );
}
