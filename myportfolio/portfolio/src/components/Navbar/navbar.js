import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
    return ( 
        <nav className = "navbar" >
        <img src = { logo } className = "logo" alt = "Logo" />
        <div className = "desktopMenu" >
        <Link className = "desktopMenuListItems" > Home </Link> 
        <Link className = "desktopMenuListItems" > Clients </Link> 
        <Link className = "desktopMenuListItems" > Portfolio </Link> 
        <Link className = "desktopMenuListItems" > Clients </Link> 
        </div>
        <button className = "desktopMenuBtn" >
            <img src="" alt="" className="desktopMenuImg" />
             Contact Me </button> 
        </nav>
    );
};

export default Navbar;