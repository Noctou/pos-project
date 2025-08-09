export default function Orders() {
    return(
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
    );
}