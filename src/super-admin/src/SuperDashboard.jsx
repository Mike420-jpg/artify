import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Dashboard.css';


const SuperDashboard = () => {
    return (
        <div className="Dashboard">
            <div className="dashboard-main">
                <h1 className="welcome">Welcome, Super-Admin!</h1>

                    <div className="container">
                        <div className="RegUsers">
                            <p>Registered Users</p>
                        </div>

                    <div className="UploadedArt">
                        <p>Uploaded Artworks</p>
                    </div>

                    <div className="Transact">
                        <p>Transactions</p>
                    </div>
            </div>

                <div className="RecentUpload">
                    <p>Recent Uploaded Artworks</p>

                    <div className="columns">
                        <p>Artwork</p>
                        <p>Artist</p>
                        <p>Price</p>
                        <p>Status</p>
                        <p>Uploaded at</p>
                    </div>

                    <div className="gray-box"></div>
                </div>
            </div>
        </div>
    );
};

export default SuperDashboard;