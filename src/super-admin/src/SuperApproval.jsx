import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Approval.css';

const Approval = () => {
    return (
        <div className="Approval">
            <div className="approval-main">
                <h1 className="welcome">Pending Artworks for Approval </h1>

                    <div className="approval-columns">
                        <p> Artwork </p>
                        <p>Artist</p>
                        <p>Name</p>
                        <p>Price</p>
                        <p>Description</p>
                        <p>Information</p>
                        <p> Actions </p>
                    </div>

                <div className="gray-box"></div>
            </div>
        </div>
    );
};

export default Approval;