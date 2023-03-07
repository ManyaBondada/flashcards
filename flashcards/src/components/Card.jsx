import React from "react";
import './Card.css';

const Card = (props) => {
    return(
    <>
    {props.isFront ?  <div className="card"> <p className="front"> {props.front}</p> </div>
                   :  <div className="card"> <p className="back">  {props.back} </p> </div>
    } 
    </>

    )
}



export default Card;
