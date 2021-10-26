import logo from './logo.svg';
import './App.css';
import VirtualizedList from './VirtualizedList';
import Suggestions from './Suggestions';
import { useEffect, useState } from 'react';
function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const filter = selected ? '?filter=' + selected : '';
    const _timeout = setTimeout(() => {
      fetch('http://localhost:3000/employee/'+filter)
        .then(response => response.json())
        .then(data => {
          setData(data);
          clearTimeout(_timeout);
        })
        .catch(console.log);
    }, 500);
  }, [selected]);
  useEffect(() => {
    fetch('http://localhost:3000/suggestion')
      .then(response => response.json())
      .then(setSuggestions)
      .catch(console.log);
  }, []);
  console.log(selected);
  return (
    <div className="App">
      <Suggestions suggestions={suggestions} setSelected={setSelected}/>
      <VirtualizedList data={data}/>
    </div>
  );
}

export default App;
