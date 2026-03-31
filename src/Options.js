import React from "react";
import "./Options.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import card1 from './Images/NA1.png';
import card2 from './Images/NA2.png';
import card3 from './Images/NA3.png';
import card4 from './Images/P1.png';
import card5 from './Images/P2.png';
import card6 from './Images/P3.png';
import like from './Images/heart.png';
import cart from './Images/bag.png';

const Options = () => {
    return (

    <div class="Container container-fluid">
        <div class="Categories">
            <button type="button" class="btn btn-outline-primary">Painting </button>
            <button type="button" class="btn btn-outline-primary">Sculpture</button>
            <button type="button" class="btn btn-outline-primary">Printmaking</button>
            <button type="button" class="btn btn-outline-primary">Portrait </button>
            <button type="button" class="btn btn-outline-primary">Ceramic </button>
        </div>
    </div>
    );
};

export default Options;