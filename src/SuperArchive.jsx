import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Archive.css';

const Archive = () => {
    return (
        <div className="Archive">
            <div className="main">
                <h1 className="welcome"> Archived Artworks </h1>

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

export default Archive;