import { useState, useEffect } from "react";

export default function LoadTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/db/getFromDB.php")
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData))
      .catch(err => console.error(err));
  }, []);

    const handleQuantityChange = (id, newQuantity) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, stocks_quantity: newQuantity } : item
      )
    );
  };

  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>

          <td>{item.id}</td>
          <td
            className="product-name"
            contentEditable
            suppressContentEditableWarning
          >
            {item.product_name}
          </td>
          <td className="product-type">
            <select className="product-type" defaultValue={item.product_type}>
              {["Stickers", "Laminated Keychains"].map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )}
            </select>
          </td>
          <td className="price">
            <input
              type="number"
              className="price"
              defaultValue={item.price}
              min="1"
              step="1"
            />
          </td>
          <td
            className={`product-status ${item.stocks_quantity <= 0 ? 'out-of-stock' : ""}`}
            >{`${item.stocks_quantity <= 0 ? 'Out of Stock' : "In Stock"}`}
            </td>
          <td className="quantity">
            <input
              type="number"
              className="quantity"
              defaultValue={item.stocks_quantity}
              min="0"
              max="99"
              onChange={(e) => {
                const val = Number(e.target.value);
                handleQuantityChange(item.id, val);
              }}
            />
          </td>
        </tr>
      ))}
    </>
  );
}