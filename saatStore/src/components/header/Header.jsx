
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom"; 
import "/src/components/header/Header.css"
import FilterBar from "../select/FilterBar";
import cartIcon from '../../../public/cartIcon.svg';
import { useSelector } from "react-redux";
function Header() {
    // const [inputValue, setInputValue]=useState('');
 const state=useSelector((store)=>store.counter.value);
    console.log(state);

    return (
        <div className="nav">
            <div className="logo"><img src="https://saatim.az/assets/img/logo.png" alt="logo" /></div>
            <div className="links">
                <ul>
                    <li><Link to="/">Əsas Səhifə</Link> </li>
                    <li><Link to="/">Haqqımızda</Link> </li>
                    <li><Link to="/">Xəbərlər</Link> </li>
                    <li><Link to="/">Əlaqə</Link> </li>
                    <li>
                        <div className="inputBox">
                            <input type="text" placeholder="Axtar..." />
                            <CiSearch className="searchIcon" />
                        </div>
                    </li>
                    <li>
                        <div className="cartIconWrapper">
                            <img src={cartIcon}
                             alt="cart icon"
                             className="cartIcon"
                              />
                              <div className="cartCounterWrapper">
                                  <span className="cartCounter">{state}</span>
                              </div>
                            
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
};
export default Header;