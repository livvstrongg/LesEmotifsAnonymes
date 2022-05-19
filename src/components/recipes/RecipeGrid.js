import React from 'react'
import RecipeItem from './RecipeItem'

function RecipeGrid ({items, isLoading}) {
  return isLoading ? ( 
    <h1>Loading...</h1> 
  ) : ( 
    <section className="cards">
      {items.map((item) => (
          <RecipeItem key={item.label} item={item}></RecipeItem>
      ))}
  </section>
      )
}

export default RecipeGrid