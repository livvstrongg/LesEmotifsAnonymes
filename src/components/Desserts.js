import React from 'react'

function Desserts(props) {
    const { dessert } = props;
  return (
    <div>
        <figure>
            <img src={dessert.img} alt={dessert.title}/>
        </figure>
        <h4>{dessert.Title}</h4>
        <span>{dessert.img}</span>
    </div>
  )
}

export default Desserts