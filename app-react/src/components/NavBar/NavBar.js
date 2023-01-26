import React from "react";
import CartWidget from "../CartWidget";
import {Link} from 'react-router-dom';




const NavBar = () => {



    return (
        <>
 <ul>
            <li>
                <Link to="/">Menu</Link>
            </li>
            <li>
                <Link to="/category/Servicios">Servicios
                </Link>
            </li>
            <li>
                <Link to="/category/Online-Coaching">Oline-Coaching-personalizado
                </Link>
            </li>
            <li>
                <Link to="/category/Transformaciones">Transformaciones </Link>
            </li>
            <li>
                <Link to="/category/Cuenta">Mi-Cuenta</Link>
            </li>
            
            <Link to="/cart">
                <CartWidget>
            
                </CartWidget>
            </Link>
          
     
        </ul>
       
        </>
    );
};

export default NavBar;