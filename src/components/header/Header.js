import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png"
import { NavLink } from 'react-router-dom';
import useAuthContext from '../Contexts/useAuthContext';
const Header = () => {
    const activestyle={
        fontWeight: "bold",
        color: "goldenrod"
      }
      const {user,logOut}=useAuthContext()
    return (
        <div className="header">
           <img className="logo"  src={logo} alt="" />
           <nav>
            
               <NavLink activeStyle={activestyle} to="/shop">Shop</NavLink>
               <NavLink activeStyle={activestyle} to="/order">Order Review</NavLink>
               <NavLink activeStyle={activestyle} to="/manage">Manage Inventory here</NavLink>  
               {
                    user?.email &&  <NavLink activeStyle={activestyle} to="/manageOrder">Order Review</NavLink>
               }
               {
                    user?.email &&  <span className="text-white me-2">{user.displayName}</span>
               }
               {    
                     user.email?<button onClick={logOut}>Log Out</button>:<NavLink activeStyle={activestyle} to="/login">Login</NavLink>
               }
           </nav>
        </div>
    );
};

export default Header;