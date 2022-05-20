import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header';
import RecipeItem from './components/recipes/RecipeItem'
import Footer from './components/Footer'

function App() {
  const APP_ID = '9ffd75f7'
  const APP_KEY = '897ff7ef6089d74cdb71e048d9852da0'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('french dessert')

  useEffect(() => {
    fetchRecipes();
  }, [query]);

    const fetchRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipes(data.hits)
      console.log(data.hits)
    }
    
    const searchUpdate = e => {
      setSearch(e.target.value);
    };

    const getRecipe = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
  } 

  return (
    <div className="App">
       <Header />
      <form onSubmit={getRecipe} className="search-form">
        <input className="search-bar" type="text" placeholder="Search Dessert" value={search} onChange={searchUpdate}/>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <RecipeItem
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;