export default function SearchBar({ value, onChange}){
    return (
        <div className="search-bar">
            <input 
                type="text"
                placeholder="Search"
                name="search"
                className="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}