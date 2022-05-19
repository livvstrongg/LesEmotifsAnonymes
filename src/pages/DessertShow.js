import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


function DessertShow() {
    const {recipeParam} = useParams()
    console.log(recipeParam)

    const [recipe, setRecipe] = useState([]);

const getRecipeRequest = async (recipeParam) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeParam}&app_id=9ffd75f7&app_key=897ff7ef6089d74cdb71e048d9852da0&cuisineType=French&dishType=Desserts&field=image`;

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(response)

  if(responseJson.hits){
    setRecipe(responseJson.hits);
  } 
  console.log(responseJson.hits)
};

useEffect(() => {
  getRecipeRequest(recipeParam);
}, [recipeParam]);

const loaded = () => {
    return recipe.map((r) => (
            <div key={r.recipe.image} className="d-flex justify-content-start m-3">
                <img src={r.recipe.image} alt='recipe'></img>
            </div>
            ))  
}

const loading = () => {
    return <h1>Loading.........</h1>
}

  return (
    <div>
        {recipe ? loaded() : loading()}
    </div>
  )
  }

export default DessertShow