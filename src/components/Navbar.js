import React from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline"
    };
    return (
        <header className="navmenu-wrapper">
            <div className="navmenu">
                <NavLink to="/" style={({ isActive }) =>
                    isActive ? activeStyle : undefined} >home</NavLink>
                <NavLink to="/about" style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>about</NavLink>
                <NavLink to="/skills" style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>skills</NavLink>
                <NavLink to="/showcases" style={({ isActive }) =>
                    isActive ? activeStyle : undefined}>showcases</NavLink>
            </div>
        </header>
    );
}
