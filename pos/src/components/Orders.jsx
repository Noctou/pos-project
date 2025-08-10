export default function Orders() {
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
                </tbody>
            </table>
        </div>
        </>
    );
}