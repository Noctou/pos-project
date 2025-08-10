/* import { useState, useEffect, useMemo } from "react";
import LoadTable from "../components/LoadTable";
import { getItems, saveItems } from "../services/api";

export default function InventoryPage() {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState("");
    const [status, setStatus] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        getItems()
            .then(fetchedData => setItems(fetchedData))
            .catch(err => console.error(err));
    }, []);

    const sortedItems = useMemo(() => {
        let sorted = [...items];

        // Filter by status
        if (status && status !== "all") {
            sorted = sorted.filter(item =>
                item.status?.trim().toLowerCase() === status.toLowerCase()
            );
        }

        // Search filter
        if (searchTerm.trim() !== "") {
            const lowerSearch = searchTerm.toLowerCase();
            sorted = sorted.filter(item =>
                item.product_name.toLowerCase().includes(lowerSearch) ||
                item.product_type.toLowerCase().includes(lowerSearch) ||
                String(item.id).includes(lowerSearch)
            );
        }

        // Sorting logic
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
    }, [items, order, status, searchTerm]);

    const saveTable = () => {
        saveItems(items)
            .then(msg => {
                alert("Saved: " + msg);
                console.log(msg)
                return getItems();
            })
            .then(fetchedData => setItems(fetchedData))
            .catch(err => {
                console.error("Save failed:", err);
                alert("Save failed.");
            });
    };

    const addItem = () => {
        const newItem = {
            id: "",
            product_name: "Product Name",
            product_type: "Type 1",
            price: 1,
            status: "In Stock",
            stock: 1
        };
        setItems(prev => [...prev, newItem]);
    };

    return (
        <div className="inventory-container">
            <div className="table-container-header">
                <div className="search-bar">
                        <input 
                            type="text"
                            placeholder="Search"
                            name="search"
                            id="search"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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

                    <button onClick={() => { setOrder(""); setStatus(""); setSearchTerm(""); }}>
                        Clear Filter
                    </button>
                </div>
                
                <div className="add-button">
                    <button onClick={addItem}>Add Item</button>
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
                        <LoadTable data={sortedItems} setData={setItems}/>
                    </tbody>
                </table>
            </div>

            <button id="save-button" onClick={saveTable}>Save</button>
        </div>
    );
}
 */

import { useState, useEffect, useMemo } from "react";
import { getItems, saveItems } from "../services/api";
import { filterByStatus, filterBySearch, sortItems } from "../utils/InventoryFunctions";
import SearchBar from "../components/inventory/SearchBar";
import Filters from "../components/inventory/Filters";
import InventoryTable from "../components/inventory/InventoryTable";

export default function InventoryPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("");
  const [status, setStatus] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = () => {
    getItems().then(setItems).catch(console.error);
  };

  const sortedItems = useMemo(() => {
    let result = filterByStatus(items, status);
    result = filterBySearch(result, searchTerm);
    result = sortItems(result, order);
    return result;
  }, [items, order, status, searchTerm]);

  const saveTable = () => {
    saveItems(items)
      .then(msg => {
        alert("Saved: " + msg);
        fetchItems();
      })
      .catch(() => alert("Save failed."));
  };

  const addItem = () => {
    setItems(prev => [...prev, {
      id: "",
      product_name: "Product Name",
      product_type: "Type 1",
      price: 1,
      status: "In Stock",
      stock: 1
    }]);
  };

  const clearFilters = () => {
    setOrder("");
    setStatus("");
    setSearchTerm("");
  };

  return (
    <div className="inventory-container">
      <div className="table-container-header">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <Filters
          order={order}
          status={status}
          setOrder={setOrder}
          setStatus={setStatus}
          clearFilters={clearFilters}
        />
        <div className="add-button">
          <button onClick={addItem}>Add Item</button>
        </div>
      </div>

      <InventoryTable data={sortedItems} setData={setItems} />
      <button id="save-button" onClick={saveTable}>Save</button>
    </div>
  );
}
