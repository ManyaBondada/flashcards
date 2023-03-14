import './App.css';
import Card from './components/Card';
import {useState} from "react";
import QuestionForm from './components/QuestionForm';

const App = () => {
  
  const data = [
    { country: 'What is the capital of Kenya', capital: 'Nairobi'},
    { country: 'What is the capital of Japan', capital: 'Tokyo'},
    { country: 'What is the capital of Sweden', capital: 'Stockholm'},
    { country: 'What is the capital of Syria', capital: 'Damascus'},
    { country: 'What is the capital of Nepal', capital: 'Kathmandu'},
    { country: 'What is the capital of Jamaica', capital: 'Kingston'},
    { country: 'What is the capital of Honduras', capital: 'Tegucigalpa'},
    { country: 'What is the capital of Indonesia', capital: 'Jakarta'},
    { country: 'What is the capital of Bulgaria', capital: 'Sofia'},
    { country: 'What is the capital of Croatia', capital: 'Zagreb'},
  ]


  const [flashcard, setFlashcard] = useState(data[0]);
  const [index, setIndex] = useState(0);
  
// display next card
  function handleNext(){
    let newIndex = index + 1;
    if(newIndex >= 10){
      newIndex = 0;
    }
    setIndex(newIndex);
    setFlashcard(data[newIndex]);
  }

// display previous card
  function handlePrev(){
    let newIndex = index - 1;
    if (newIndex <= -1){
      newIndex = 9;
    }
    setIndex(newIndex);
    setFlashcard(data[newIndex]);
  }

  return (
    <div className="App">

      <div className="heading">
        <h2> Countries and Capitals </h2>
          <div>
            <h4> Test your knowledge on countries and their capitals </h4>
              <div>
                <h5> Card Count: 10 </h5>
              </div>
          </div>
      </div>


      <Card front={flashcard.country} back={flashcard.capital}/>
      <QuestionForm answer={flashcard.capital}/>
      <button onClick={handlePrev} className="bttn"> ← </button>
      <button onClick={handleNext} className="bttn"> → </button>

   </div>
  )
}

export default App