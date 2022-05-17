import React, {useState, useEffect} from 'react'
import HitMap from './HitMap'

function Test() {
    const [recipe, setRecipe] = useState([])
    const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=french&app_id=ac84722b&app_key=227a9b5dfdf60ab1a34845a1a6849cf0&cuisineType=French&dishType=Desserts&imageSize=REGULAR'
    useEffect(() => {
        fetch(url)
        .then(res=>res.json())
        .then(json=> setRecipe(json))
    }, [])
    console.log(recipe.hits)
    let array = recipe.hits
    console.log(array)
    if (recipe === []){
        return <p>page loading...</p>
    } else{
    return(
        <>
            {array.map(item=>{
                return(
                <HitMap
                    recipe={item.recipe}
                />
                )
            })}
            
        </>
        )
    }
}

export default Test