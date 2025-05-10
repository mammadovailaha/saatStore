import { useLocation, useNavigate } from "react-router-dom";
import "./ShowDetail.css";
import { useDispatch } from "react-redux";
import { add } from "../../components/addToCart/addToCartSlice";
function ShowDetail() {

    const location = useLocation();
    const navigate = useNavigate();

    const cards = location.state;
    const dispatch = useDispatch();
    if (!cards) {
        navigate('/');
        return null;
    }
    
    
    return (
        <div className="card">
            <div className="cardImg">
                <img src={cards.image} alt="" />
            </div>
            <div className="detail">
                <h2 className="name">{cards.name}</h2>
                <h3>{cards.brand}</h3>
                <p>{cards.description}</p>
                <span>{cards.price} Azn</span>
                <div className="addCart" onClick={() => dispatch(add())} ><button>Sifariş et</button></div>
            </div>

        </div>
    )
}
export default ShowDetail;
