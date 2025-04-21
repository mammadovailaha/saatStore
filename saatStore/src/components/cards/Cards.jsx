import "./Cards.css";
import React, { useState, useEffect } from "react";
import Card from "../Card";
function Cards() {
    const [item, setItem] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function WatchStoreFetch() {
            try {
                const res = await fetch("https://67fe851b58f18d7209ee8ac7.mockapi.io/api/watchStoreAPI/watches/watches");
                const data = await res.json();
                setItem(data);
                console.log(data);

            } catch (error) {
                setError(error.message);
            } finally {
                console.log("fetch is executed");
            }
        }
        WatchStoreFetch();
    }, []);
    if (error) {
        return <span>error</span>
    }




    else {
        return (
            <div className="cardContainer">
                {item.map((cards) => (
            <Card key={cards.id}  cards={cards}/>
                ))
                };
            </div>


        )
    }
};
export default Cards;