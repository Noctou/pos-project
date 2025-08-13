import { useState, useEffect, useMemo } from "react";
import { getHistory } from "../services/api";
import { filterBySearch, sortItems } from "../utils/InventoryFunctions";
import SearchBar from "../components/inventoryPage/SearchBar";
import HistoryTable from "../components/historyPage/HistoryTable";

export default function HistoryPage() {
    const [historyItems, setHistoryItems] = useState([]);
    const [order, setOrder] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => { fetchItems(); }, []);

    const fetchItems = () => {
        getHistory().then(setHistoryItems).catch(console.error);
    };

    const sortedItems = useMemo(() => {
        let result = filterBySearch(historyItems, searchTerm);
        result = sortItems(result, order);
        return result;
    }, [historyItems, order,searchTerm]);

  return (
    <div className="history-container">
      <div className="table-container-header">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </div>

      <HistoryTable data={sortedItems} />
    </div>
  );
}