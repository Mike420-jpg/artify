import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from './Images/Artify_Logo.png';
import image from './Images/user.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Artify" height={40} id="Artify_Logo"/>
                </a>

                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Artworks</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>

                        <li className="nav-item">
                            <img src= {image} alt = "user_icon" id = "user_icon" />
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;