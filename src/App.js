import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import RecipeGrid from './components/recipes/RecipeGrid'
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=9ffd75f7&app_key=897ff7ef6089d74cdb71e048d9852da0&cuisineType=French&dishType=Desserts&imageSize=REGULAR&field=image')

      console.log(result.data.hits)
      setItems(result.data.hits)
      setItems(false)
    }

    fetchItems();

  }, [])


  return (
    <div className="App">
      <Header />
      <RecipeGrid isLoading={isLoading} items={items}/>
      {/* <Routes>
        <Route exact path='/' element={<Main url={url} /> } /> 
      </Routes> */}
    </div>
  );
}

export default App;