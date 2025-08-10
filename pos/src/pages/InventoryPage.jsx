import { useState, useEffect, useMemo } from "react";
import LoadTable from "../components/LoadTable";

export default function InventoryPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch("http://localhost/db/getFromDB.php"); // Change to your backend route
                const data = await res.json();
                setItems(data);
            } catch (err) {
                console.error("Failed to fetch items", err);
            } finally {
                setLoading(false);
            }
        }
        fetchItems();
    }, []);

    const sortedItems = useMemo(() => {
        let sorted = [...items];

        if (status && status !== "all") {
            sorted = sorted.filter(item =>
                item.status?.trim().toLowerCase() === status.toLowerCase()
            );
        }

        switch (order) {
            case "id-asc": sorted.sort((a, b) => a.id - b.id); break;
            case "id-desc": sorted.sort((a, b) => b.id - a.id); break;
            case "price-asc": sorted.sort((a, b) => a.price - b.price); break;
            case "price-desc": sorted.sort((a, b) => b.price - a.price); break;
            case "product-name-asc": sorted.sort((a, b) => a.product_name.localeCompare(b.product_name)); break;
            case "product-name-desc": sorted.sort((a, b) => b.product_name.localeCompare(a.product_name)); break;
            case "product-type-asc": sorted.sort((a, b) => a.product_type.localeCompare(b.product_type)); break;
            case "product-type-desc": sorted.sort((a, b) => b.product_type.localeCompare(a.product_type)); break;
            default: break;
        }

        return sorted;
    }, [items, order, status]);

    return (
        <div className="inventory-container">
            <div className="table-container-header">
                <div className="search-bar">
                        <input type="text" placeholder="Search" name="search" id="search"/>
                </div>

                <div className="filters">
                    <p>Filters:</p>
                    <select value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value="" disabled hidden>Order By</option>
                        <option value="id-asc">ID (Asc)</option>
                        <option value="id-desc">ID (Desc)</option>
                        <option value="price-asc">Price (Asc)</option>
                        <option value="price-desc">Price (Desc)</option>
                        <option value="product-name-asc">Product Name (Asc)</option>
                        <option value="product-name-desc">Product Name (Desc)</option>
                        <option value="product-type-asc">Product Type (Asc)</option>
                        <option value="product-type-desc">Product Type (Desc)</option>
                    </select>

                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="" disabled hidden>Stock Status</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="all">All</option>
                    </select>

                    <button onClick={() => { setOrder(""); setStatus(""); }}>
                        Clear Filter
                    </button>
                </div>
                
                <div className="add-button">
                    <button>Add Item</button>
                </div>
            </div>

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
                    <tbody id="stock-items">
                        {loading ? (
                            <tr>
                                <td colSpan="6" style={{ textAlign: "center" }}>
                                    <LoadTable />
                                </td>
                            </tr>
                        ) : (
                            sortedItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_type}</td>
                                    <td>{item.price}</td>
                                    <td>{item.status}</td>
                                    <td>{item.stocks_quantity}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <button id="save-button">Save</button>
        </div>
    );
}