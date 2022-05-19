import React from 'react';
import style from './Recipe.css';

const RecipeItem = ({title, calories, image, ingredients}) => {
    calories = calories - (calories%1);
    return(
<div className='card'>
    <div className='card-inner'>
    <div className={style.recipe}>
            <div className='card-front'>
            <img className={style.image} src={image} alt=""/>
            <h1 className='title'>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            </div>
         </div>
    </div>
</div>      

    );
}

export default RecipeItem;
