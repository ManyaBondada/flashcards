import './App.css';
import Card from './components/Card';
import {useState} from "react";
const App = () => {

  const min = 0;
  const max = 9;
  
  const data = [
    { country: 'Kenya', capital: 'Nairobi'},
    { country: 'Japan', capital: 'Tokyo'},
    { country: 'Sweden', capital: 'Stockholm'},
    { country: 'Syria', capital: 'Damascus'},
    { country: 'Nepal', capital: 'Kathmandu'},
    { country: 'Jamaica', capital: 'Kingston'},
    { country: 'Honduras', capital: 'Tegucigalpa'},
    { country: 'Indonesia', capital: 'Jakarta'},
    { country: 'Bulgaria', capital: 'Sofia'},
    { country: 'Croatia', capital: 'Zagreb'},
  ]


  const [flashcard, setFlashcard] = useState(data[0]);
  const [isFront, setIsFront] = useState(true);

  function handleFlip(){
    setIsFront(false);
  }

  function handleNext(){
    let rand = min + Math.random() * (max - min)
    setFlashcard(data[1]);
    setIsFront(true);
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

    
      <Card onclick={handleFlip} front={flashcard.country} back={flashcard.capital} isFlip={isFront}/>
      <br></br>
      <button onClick={handleNext} className="next"> ➜ </button>
      

    </div>
  )
}

export default App