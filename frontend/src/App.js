import { useState } from "react";
import "./App.css";
import { AsideBar } from "./components/AsideBar";
import { AddVocab } from "./components/AddVocab";
import { MyVocab } from "./components/MyVocab";
import axios from 'axios';


function App() {
  const [word, setWord] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    setWord(e.target.value);
    if (e.target.value) {
      const response = await axios.get(`http://localhost:5000/api/words?q=${e.target.value}`);
      setSuggestions(response.data);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <>
      <AsideBar />
      <AddVocab onInputChange={handleInputChange} word={word} suggestions={suggestions}/>
      <MyVocab />
    </>
  );
}

export default App;
