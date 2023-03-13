import React from "react";
import './Card.css';

const Card = (props) => {
    return(
    <>
    {props.count % 2 == 1 ?  <div className="card"> <p className="back">  {props.back} </p> </div>
                   :  <div className="card"> <p className="front"> {props.front}</p> </div>
    } 
    </>


    )
}



export default Card;
