export default function Orders({ orderedItems, onReduceQuantity}) {
    return(
        <>
            <div className="orders-header">
                <h1>Orders:</h1>
            </div>
            <div className="table-container">
                <table className="orders-table">
                    <thead>
                        <th>Product</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody className="ordered-items">
                        {orderedItems.map((item, index) =>(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>
                                    {item.quantity}
                                    <button
                                        onClick={() => onReduceQuantity(item.name)}>
                                    -
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}