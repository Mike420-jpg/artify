import React from "react";
import { Link } from "react-router-dom";
import "./SuperSideNav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from './Images/Artify_Logo.png';
import UserIcon from './Images/user.png';
import dashboard from './Images/dashboard.png';
import approval from './Images/approval.png';
import artworks from './Images/artworks.png';
import transactions from './Images/transactions.png';
import archive from './Images/archive.png';
import account from './Images/account.png';
import logout from './Images/logout.png';

const SuperSideNav = () => {
    return (
        <div className="supersidenav">
            <div className="Placement">
                <img src={logo} alt="Artify Logo" id="Logo" /> <br/>
                <img src={UserIcon} alt="User Icon" id="UserIcon" />
            </div>

            <div className="list">
                <Link to="/Dashboard"> 
                    <img src={dashboard} className="icons" alt="Dashboard" /> Dashboard 
                </Link>
            </div>

            <div className="list">
                <Link to="/Approval"> 
                    <img src={approval} className="icons" alt="Approval" /> Approval 
                </Link>
            </div>

            <div className="list">
                <Link to="/Artworks"> 
                    <img src={artworks} className="icons" alt="Artworks" /> Artworks 
                </Link>
            </div>

            <div className="list">
                <Link to="/Transactions"> 
                    <img src={transactions} className="icons" alt="Transactions" /> Transactions 
                </Link>
            </div>

            <div className="list">
                <Link to="/Archive"> 
                    <img src={archive} className="icons" alt="Archive" /> Archive 
                </Link>
            </div>

            <div className="list">
                <Link to="/Account"> 
                    <img src={account} className="icons" alt="Account" /> Account
                </Link>
            </div>

            <div className="logout">
                <Link to="/"> 
                    <img src={logout} className="icons" alt="Logout" /> Logout 
                </Link>
            </div>
        </div>
    );
};

export default SuperSideNav;