import React, { useEffect, useState } from 'react';
import './App.css';
import DessertSearch from './components/DessertSearch';
import DessertList from './components/DessertList'
import DessertSource from './api/DessertSource';


function App() {
  
  const [state, setState] = useState({
    results = []
  });

  const onSearch = async (text) => {
    const results = await DessertSource.get("/", {
    params: {s: text, i: " ac84722b", apiKey: "227a9b5dfdf60ab1a34845a1a6849cf0"}
  })
  setState(prevState => {
    return (..prevState, results: results)
  }
}

  return (
    <div className='App'>
    <div className='container DessertSearch'>
      <h2 className="title is-2 has-text-centered">
        French Dessert Search
      </h2>
      <DessertSearch onSearch={onSearch} />
      <DessertList results={state.results}/>
    </div>
    </div>
  )
}

export default App;
