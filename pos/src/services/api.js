const API_BASE = "http://localhost/db";

// Get all items
export async function getItems() {
    const res = await fetch(`${API_BASE}/getFromDB.php`);
    if (!res.ok) throw new Error("Failed to fetch items");
    return await res.json();
}

// Save all items
export async function saveItems(items) {
    const res = await fetch(`${API_BASE}/saveToDB.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(items)
    });
    if (!res.ok) throw new Error("Failed to save items");
    return await res.text();
}

export async function reduceQty(orderedItems) {
    const res = await fetch(`${API_BASE}/reduceQuantityFromDB.php`, {
        method: "POST",
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(orderedItems)
    });
    if(!res.ok) console.log(orderedItems);
}