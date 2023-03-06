import React from "react";
import './Card.css';

const Card = (props) => {
    return(
    <div className="card">
        <p className="front">{props.front}</p>
    </div>
    )
}

export default Card;
