export default function LoadTable({ data, setData }) {

  const handleCellChange = (id, field, value) => {
      setData(prevData =>
          prevData.map(item =>
              item.id === id ? { ...item, [field]: value } : item
          )
      );
  };

  return (
    <>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="id">{item.id}</td>
          <td
            className="product_name"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => {
              handleCellChange(item.id, "product_name", e.target.innerText)
            }}
          >
            {item.product_name}
          </td>
          <td>
              <select
                defaultValue={item.product_type}
                className="product-type"
                onChange={(e) =>{
                  handleCellChange(item.id, "product_type", e.target.value)
                }}
              >
                {["Stickers", "Laminated Keychains"].map(type => (
                    <option key={type} value={type}>{type}</option>
                ))}
              </select>
          </td>
          <td>
              <input
                type="number"
                className="price"
                defaultValue={item.price}
                min="1"
                step="1" 
                onChange={(e) => {
                  handleCellChange(item.id, "price", e.target.value)
                } }
              />
          </td>
          <td
            className={item.stocks_quantity <= 0
            ? 'product-status out-of-stock'
            : 'product-status'}
          >
            {item.stocks_quantity <= 0 ? 'Out of Stock' : 'In Stock'}
          </td>
          <td >
              <input
                  type="number"
                  className="quantity"
                  defaultValue={item.stocks_quantity}
                  min="0"
                  max="99"
                  onChange={(e) => handleCellChange(item.id, "stocks_quantity", e.target.value)}
              />
          </td>
        </tr>
      ))}
    </>
  );
}
