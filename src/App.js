import React, { useEffect, useState } from 'react';
import './App.css';
import Desserts from './components/Desserts';
import DessertSearch from './components/DessertSearch';
import DessertList from './components/DessertList'
import DessertSource from './api/DessertSource';


function App() {
  
  const [state, setState] = useState({
    result = []
  })
  const onSearch = async (text) => {
    const result = await DessertSource.get("/")
  }
  return (
    <div className='App'>
    <div className='container DessertSearch'>
      <h2 className="title is-2 has-text-centered"></h2>
      <DessertSearch />
      <DessertList />
    </div>
    </div>
  )
}

export default App;
