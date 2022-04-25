import React from "react";
import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    function handleClick(event) {
        event.target.parentElement.childNodes.forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
    }

    return (
        <header>
            <div className="container">
                <nav onClick={(event) => handleClick(event)}>
                    <Link className="active" to='/'>Home</Link>
                    <Link to="users">Users</Link>
                    <Link to="projects">Projects</Link>
                    <Link to="todos">TODOs</Link>
                    <Link to="auth">Sign in</Link>
                    
                </nav>
            </div>
        </header>
    )
}

export default Menu;