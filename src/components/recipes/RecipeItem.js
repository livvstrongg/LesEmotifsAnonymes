import React, {useState} from 'react';


const RecipeItem = ({title, image, ingredients}) => {

    return(        
<div className='flip-card'>
    <div className='flip-card-inner'>
        <div className="flip-card-front">
            <img id="image" className="image" src={image} alt=""/>
            </div>
            <div className='flip-card-back'>
            <h2 className="title">{title}</h2>
            {ingredients.map(ingredient=>(
            <p className="ingredients">{ingredient.text}</p>
                ))}           
        </div> 
    </div>        
</div>    

    );
}

export default RecipeItem;
