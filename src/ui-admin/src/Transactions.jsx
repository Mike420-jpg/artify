import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Transactions.css';

const Transactions = () => {
    return (
        <div className="Transactions">
            <div className="transactions-main">
                <h1 className="welcome"> Recent Transactions </h1>

                    <div className="columns">
                        <p> ID </p>
                        <p>Buyer</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Payment</p>
                        <p>Amount</p>
                        <p>Status</p>
                        <p>Date</p>
                        <p>Items</p>
                    </div>

                <div className="gray-box"></div>
            </div>
        </div>
    );
};

export default Transactions;