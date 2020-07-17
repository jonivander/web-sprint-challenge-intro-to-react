import React, { useState, useEffect } from 'react';
import axios from 'axios'
import CharacterBox from './components/CharacterBox'
import './App.css';
import styled from "styled-components"

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [swdata, setSWData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
    .then (res => {
      console.log(res.data.results)
      setSWData(res.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  console.log(swdata)

  return (
    <div className="App">
      <h1 className="Header">Characters of the Star Wars Universe</h1>
      <CharacterBox swdata = {swdata}/> 
    </div>
  );
}

export default App;
