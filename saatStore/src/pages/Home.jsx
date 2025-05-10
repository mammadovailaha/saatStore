
import Cards from "./cards/Cards";
import FilterBar from "../components/select/FilterBar";
import React, { useState, useEffect } from 'react';
function Home() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState("all");
    const [error, setError] = useState(null);

    useEffect(() => {
        async function WatchStoreFetch() {
            try {
                const res = await fetch("https://67fe851b58f18d7209ee8ac7.mockapi.io/api/watchStoreAPI/watches/watches");
                const data = await res.json();
                setItems(data);
                console.log(data);

            } catch (error) {
                setError(error.message);
            } finally {
                console.log("fetch is executed");
            }
        }
        WatchStoreFetch();
    }, []);

    const filteredItems = filter === "all"
        ? items
        : items.filter(item => item.category === filter);
    if (error) {
        return <span>error</span>
    }

    return (
        <>
            <FilterBar item={items} setFilter={setFilter} />
            <Cards item={filteredItems} />
        </>
    )
}
export default Home;