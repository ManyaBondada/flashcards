import './App.css';
import Card from './components/Card';
import {useState} from "react";

const App = () => {
  
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
  const [index, setIndex] = useState(0);

  function handleNext(){
    let newIndex = index + 1;
    if(newIndex >= 10){
      newIndex = 0;
    }
    setIndex(newIndex);
    setFlashcard(data[newIndex]);
  }

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
      <button onClick={handlePrev} className="bttn"> ← </button>
      <button onClick={handleNext} className="bttn"> → </button>
      
      

    </div>
  )
}

export default App