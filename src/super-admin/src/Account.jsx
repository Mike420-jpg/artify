import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Account.css';

const Account = () => {
    return (
        <div className="Account">
            <div className="main">
                <h1 className="welcome"> Account Center </h1>

                    <div className="columns">
                        <p> Type </p>
                        <p> Username </p>
                        <p> Email </p>
                        <p> Status </p>
                    </div>

                <div className="gray-box"></div>
            </div>
        </div>
    );
};

export default Account;