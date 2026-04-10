import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Artworks.css';

const Artworks = () => {
    return (
        <div className="Artworks">
            <div className="main">
                <h1 className="welcome">Approved Artworks </h1>

                    <div className="columns">
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

export default Artworks;