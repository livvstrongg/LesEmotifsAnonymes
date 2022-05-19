import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import RecipeGrid from './components/recipes/RecipeGrid'
import Search from './components/Search'
import { response } from 'express';

function App() {
  const APP_ID = '9ffd75f7'
  const APP_KEY = '897ff7ef6089d74cdb71e048d9852da0'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('dessert')

  useEffect(() => {
    getRecipes();
  }, [query]);

    const fetchRecipeImages = async () => {
      const result = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
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
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Search for a recipe" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;