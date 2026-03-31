import React from "react";
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
    return  (
        <footer className="footer">
            <div className="footerContainer">
                <div className="footerContent">
                    <div className="footerSection">
                        <h3 className="footerTitle">ADDITIONAL INFORMATION</h3>
                        <p className="footerText">
                            At Artify, we are committed to supporting artists and connecting them with art collectors worldwide. Our platform provides a secure and easy way to discover, purchase, and share original artwork. Join our community of passionate artists and collectors today.
                        </p>
                    </div>
                    <div className="footerSection">
                        <h3 className="footerTitle">CONTACT INFORMATION</h3>
                        <p className="footerText">
                            Unit 4, Artify Gallery, Bonifacio Global City,<br />
                            Taguig, Philippines
                        </p>
                        <p className="footerText">
                            Artify@gmail.com<br />
                            +63 912 345 6789<br />
                            + (02) 1234 5678
                        </p>
                    </div>
                </div>
                <div className="footerBottom">
                    <p>&copy; 2026 Artify.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;