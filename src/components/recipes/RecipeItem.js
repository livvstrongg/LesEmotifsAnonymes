import React, {useState} from 'react';
import style from './Recipe.css';

const RecipeItem = ({title, calories, image, ingredients}) => {
    const [hovering, setHovering] = useState(true)
    const togglehover=() => {
        setHovering(!hovering)
    };

    calories = calories - (calories%1);
    return(
        <div className="cards">
<div className='card'>
    <div className='card-inner'>
    <div className={style.recipe} onMouseEnter={togglehover} onMouseLeave={togglehover} >
           {hovering ? <div className='card-front'>
            <img className={style.image} src={image} alt=""/>
            </div>:
            <div className='card-back'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            </div>}
            
         </div>
          </div> 
    </div>
</div>     

    );
}

export default RecipeItem;
