import logo from './logo.svg';
import './App.css';
import VirtualizedList from './VirtualizedList';
import Suggestions from './Suggestions';
import { useEffect, useState } from 'react';
function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/resources/data.json')
      .then(response => response.json())
      .then(setData)
      .catch(console.log);
  }, []);
  useEffect(() => {
    fetch('http://localhost:3001/resources/suggestions.json')
      .then(response => response.json())
      .then(setSuggestions)
      .catch(console.log);
  }, []);
  return (
    <div className="App">
      <Suggestions suggestions={suggestions}/>
      <VirtualizedList data={data}/>
    </div>
  );
}

export default App;
