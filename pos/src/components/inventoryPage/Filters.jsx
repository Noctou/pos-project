export default function Filters({ order, status, setOrder, setStatus, clearFilters }) {
  return (
    <div className="filters">
      <p>Filters:</p>
      <select value={order} onChange={e => setOrder(e.target.value)}>
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

      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="" disabled hidden>Stock Status</option>
        <option value="In Stock">In Stock</option>
        <option value="out-of-stock">Out of Stock</option>
        <option value="all">All</option>
      </select>

      <button onClick={clearFilters}>Clear Filter</button>
    </div>
  );
}
