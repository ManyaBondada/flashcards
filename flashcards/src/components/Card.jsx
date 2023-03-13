import {useState} from "react";
import './Card.css';

const Card = (props) => {
    const [isFront, setIsFront] = useState(true);

    function handleFlip(){
      let newIsFront = !isFront;
      setIsFront(newIsFront);
    }

    return(
    <div className="card" onClick={handleFlip}>
    {isFront == true ? <p className="front">  {props.front} </p>
                   : <p className="back"> {props.back}</p> 
    } 
    </div>
    )
}



export default Card;
