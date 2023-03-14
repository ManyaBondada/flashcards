import React, {useState} from "react";
import './QuestionForm.css';
      

const QuestionForm = () => {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <form className="form">
            <label>
                What is the capital of this country?
                <input 
                    type="text" 
                    value={userAnswer} 
                    placeholder="Guess the capital..." 
                    onChange={(e) => setUserAnswer(e.target.value)}> 
                </input>
            </label>
        </form>
    )
}

export default QuestionForm;
    