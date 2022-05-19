import React from 'react'


function RecipeItem({item}) {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.img} alt='' />
      </div>
      <div className='card-back'>
        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Dessert:</strong> {item.hits.recipe.label}
          </li>
          <li>
            <strong></strong> {item.hits.recipe.image}
          </li>
          <li>
            <strong>Link to recipe:</strong> {item.hits.recipe.href}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default RecipeItem