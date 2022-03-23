import React from "react";
import { FaShoppingCart, FaPhone, FaHome } from 'react-icons/fa'

const Navbar = () => {


return(
    <> 
    <ul> 
        <li>Home <FaHome/></li> 
        <li>Contact<FaPhone/></li> 
        <li> Basket<FaShoppingCart />  </li>
        
    </ul>
    
    </>
)

    

}



export default Navbar