export function filterByStatus(items, status) {

  if (!status || status === "all") return items;
  return items.filter(item => item.status?.trim().toLowerCase() === status.toLowerCase());
  
}

export function filterBySearch(items, searchTerm) {
  if (!searchTerm.trim()) return items;
  const lowerSearch = searchTerm.toLowerCase();
  return items.filter(item =>
    item.product_name.toLowerCase().includes(lowerSearch) ||
    item.product_type.toLowerCase().includes(lowerSearch) ||
    String(item.id).includes(lowerSearch)
  );
}

export function sortItems(items, order) {
  const sorted = [...items];
  const sortMap = {
    "id-asc": (a, b) => a.id - b.id,
    "id-desc": (a, b) => b.id - a.id,
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    "product-name-asc": (a, b) => a.product_name.localeCompare(b.product_name),
    "product-name-desc": (a, b) => b.product_name.localeCompare(a.product_name),
    "product-type-asc": (a, b) => a.product_type.localeCompare(b.product_type),
    "product-type-desc": (a, b) => b.product_type.localeCompare(a.product_type),
  };
  return sortMap[order] ? sorted.sort(sortMap[order]) : sorted;
}
