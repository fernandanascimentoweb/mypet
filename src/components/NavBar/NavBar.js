import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';


function NavBar(){

    return (
        <nav className="nav">
            <span>My Pets </span>
            <ul >
                <li><Link to="/">Home</Link></li>
                
                <li><Link to="/favorites">Favoritos</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;