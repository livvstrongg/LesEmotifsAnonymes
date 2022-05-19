import React from 'react';
import style from './Recipe.css';

const RecipeItem = ({title, calories, image, ingredients}) => {
    calories = calories - (calories%1);
    return(
        <div id="cards" className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt=""/>

        </div>

    );
}

export default RecipeItem;
