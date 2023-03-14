import React, {useState} from "react";
import './QuestionForm.css';
      

const QuestionForm = (props) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [backColor, setBackColor] = useState("light grey"); 

    function handleClick(){
        if (props.answer != userAnswer)
            setBackColor("red");
        else if (props.answer == userAnswer)
            setBackColor("green");
        else   
            setBackColor("light grey");
    }

    return (
        <form className="form">
            <label>
               Enter your answer: 
                <input 
                    style={{background:backColor}}
                    className = "inputField"
                    type="text"
                    value={userAnswer} 
                    placeholder="Guess the capital..." 
                    onChange={(e) => setUserAnswer(e.target.value)}> 
                </input>
            </label>
            <button className="bttn" onClick={handleClick}> Submit</button>
        </form>
    )
}

export default QuestionForm;
    