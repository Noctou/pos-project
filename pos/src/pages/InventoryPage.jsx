import { useState, useEffect, useMemo } from "react";
import { getItems, saveItems } from "../services/api";
import { filterByStatus, filterBySearch, sortItems } from "../utils/InventoryFunctions";
import SearchBar from "../components/inventoryPage/SearchBar";
import Filters from "../components/inventoryPage/Filters";
import InventoryTable from "../components/inventoryPage/InventoryTable";

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
      product_type: "Stickers",
      price: 1,
      status: "In Stock",
      stocks_quantity: 1
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

      <InventoryTable data={sortedItems} setData={setItems} status={status}/>
      <button className="save-button" onClick={saveTable}>Save</button>
    </div>
  );
}
