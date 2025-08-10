import LoadTable from "../components/LoadTable";

export default function InventoryPage(){
    return(
        <>
            <div className="inventory-container">
                <div className="table-container-header">
                    <div className="search-bar">
                        <input type="text" placeholder="Search"name="search" id="search"/>
                    </div>

                    <div className="filters">
                        <p>Filters:</p>
                        <select name="order" id="order" defaultValue={""}>
                            <option value="" disabled hidden>Order By</option>
                            <option value="id-asc">ID (Asc)</option>
                            <option value="id-desc">ID (Desc)</option>
                            <option value="price-asc">Price (Asc)</option>
                            <option value="price-desc">Price (Desc)</option>
                            <option value="product-name-asc">Product Name (Asc)</option>
                            <option value="product-name-desc">Product Name (Desc)</option>
                            <option value="product-type-asc"> Product Type (Asc)</option>
                            <option value="product-type-desc"> Product Type (Desc)</option>
                        </select>

                        <select name="status" id="status" defaultValue={""}>
                            <option value="" disabled hidden>Stock Status</option>
                            <option value="in stock">In Stock</option>
                            <option value="out of stock">Out of Stock</option>
                            <option value="all">All</option>
                        </select>

                        <button type="button" id="clear-filter">Clear Filter</button>
                    </div>
                    
                    <div className="add-button">
                        <button type="button" id="add-button">Add Item</button>
                    </div>

                </div>
                <div className="table-scroll">
                    <table className="stocks-table" id="stocks-table">
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
                            <LoadTable />
                        </tbody>
                    </table>
                </div>
                <button type="button" id="save-button">Save</button>
            </div>
        </>
    )
}

