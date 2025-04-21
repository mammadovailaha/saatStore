import "./FilterBar.css"
import React from "react";

function FilterBar({ items, setFilter }) {
    const categories = ["all", ...Array.from (new Set((items || []).map(item => item.category)))];
    return (
        <div className="filterWrapper">
            <select className="filterProduct" onChange={(e) => setFilter(e.target.value)}>
                {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                        {cat === "all" ? "Hamısı" : cat}
                    </option>
                ))}
            </select>
        </div>
    );

}



export default FilterBar;