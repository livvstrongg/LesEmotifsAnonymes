import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {useParams} from "react-router"

function Page(props) {
    const params = useParams()
    const recipe = params.id
    const URL = ` https://api.edamam.com/api/recipes/v2/${recipe}`
    const [recipeDetails, setRecipeDetails] = useState("null")

    async function getRecipeDetails() {
        const response = await fetch(URL)
        const data = await response.json()
        setRecipeDetails(data)
    }

    useEffect(() => {
        getRecipeDetails()
    }, [])

    return (
        <div>
        <h1>{recipeDetails.name}</h1>
        <p>Model: {shipDetails.model}</p>
            <Link to={`/`}>
                <div>
                    <button> Back to Dessert List </button>
                </div>
            </Link>
        </div>
    )
}

export default Page