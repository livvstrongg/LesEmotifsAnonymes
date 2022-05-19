import React from 'react'

function RecipeGrid({items, isLoading}) {
  return isLoading ? <h1>Loading...</h1> : <section className="cards">
      {items.map(item => (
          <h1>{item.recipe.imgae}</h1>
      ))}
  </section>
}

export default RecipeGrid