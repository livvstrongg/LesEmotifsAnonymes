import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function List() {
    const [dessert, setDessert] = useState([])

    const URL = "https://api.edamam.com/api/recipes/v2"

    async function findDessert() {
        const response = await fetch(URL)
        const data = await response.json()
        setDessert(data.results)
    }

    useEffect(() => {
        findStarship()
    }, [])

    return (
        <div>
            {dessert.map((recipe, idx) => {
                const id = recipe.url.split('recipe/').slice(1)
                return (
                    <Link to={`/page/${id}`} key={idx} >
                    <div key={idx}>
                        <h2>{recipe.name}</h2>   
                    </div>
                    </Link>
                )
            }
        )}
        </div>
    )
}

export default List