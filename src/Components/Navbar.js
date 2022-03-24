import React from "react";
import { FaShoppingCart, FaPhone, FaHome, FaPaw } from 'react-icons/fa'

const Navbar = () => {


return(
    <nav> 
    <ul> 
        <div className="rightNav">
        {/* <img src="images\PawStar.png" alt="" />     */}
            <div className="skewy">
                <div className="home">
                <a href='/#'><li>Home <span className="icon"> <FaHome/> </span> </li> </a> 
                </div>
            </div>
            <div className="skewy1">
                <div className="home">
                <a href='/#'><li>Contact <span className="icon"> <FaPhone/> </span></li>  </a> 
                </div>
            </div>
            <div className="skewy">
                <div className="home">
                <a href='/#'><li>About <span className="icon"> <FaPaw/> </span></li> </a> 
                </div>
            </div>
        </div>
            <div className="cart">
            <a href='/#'><li> <FaShoppingCart />  </li> </a> 
        </div>
    </ul>
    
    </nav>
)

    

}



export default Navbar