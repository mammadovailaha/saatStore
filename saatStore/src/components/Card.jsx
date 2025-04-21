import "./Card.css"
import { Link } from "react-router-dom";


function Card({ cards }) {
    return (<div className="item">
        <div className="itemImg">
            <img src={cards.image} alt="watch photo" />
        </div>
        <div className="itemInfo">
            <h3 className="brand">{cards.brand}</h3>
            <h3 className="name">{cards.name}</h3>
            <p className="description">{cards.description}</p>
        </div>
        <Link to="/detail" state={cards}>
            <button className="showMore">Ətraflı bax</button>
        </Link>

    </div>
    );

};
export default Card;