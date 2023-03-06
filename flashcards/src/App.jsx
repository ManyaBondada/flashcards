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


  const [flashcard, setFlashcard] = useState(data[0].country);

   function handleClick() {
    setFlashcard(data[0].capital);
  };


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

      <Card onClick={handleClick} front={flashcard}/>
      
    </div>
  )
}

export default App