import React from 'react'

const RecipeItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.image} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Dessert Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Link to Recipe:</strong> {item.nickname}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeItem