import React, { useEffect, useState} from 'react'
import './App.css'
import DessertList from './components/DessertList'
import DessertSearch from './components/DessertSearch'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { response } from 'express'


const App = () => {

const [recipe, setRecipe] = useState([]);
const [searchValue, setSearchValue] = useState([]);

// const getRecipeRequest = async (searchValue) => {
  // const url = `https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=9ffd75f7&app_key=897ff7ef6089d74cdb71e048d9852da0&cuisineType=French&dishType=Desserts&field=label`;

//   const response = await fetch(url);
//   const responseJson = await response.json();

//   console.log(response)

//   if(responseJson.Search){
//     setRecipe(responseJson.Search);
//   } 
//   console.log(responseJson)
// };

// useEffect(() => {
//   getRecipeRequest(searchValue);
// }, [searchValue]);

  return(
    <div className="container-fluid recipe-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <DessertSearch search='Movies' />
        </div>
      <div className="row">
      <DessertList recipe={recipe} />
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
    </div>

  )
}

export default App