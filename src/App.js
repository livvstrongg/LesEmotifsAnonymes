import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import RecipeGrid from './components/recipes/RecipeGrid'
import Search from './components/Search'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=9ffd75f7&app_key=897ff7ef6089d74cdb71e048d9852da0&cuisineType=French&dishType=Desserts&imageSize=REGULAR&field=image')

      console.log(result.data.hits)
      setItems(result.data.hits)
      setIsLoading(false)
    }

    fetchItems();
  }, [query])

  const queryFunction = (q) => {
    setQuery(q)
  }


  return (
    <div className="App">
      <Header />
      <Search getQuery={queryFunction} />
      <RecipeGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;