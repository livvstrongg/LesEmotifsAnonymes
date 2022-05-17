import { useState } from 'react'

import Desserts from './Desserts'
import DessertResult from './DessertResult'

const DessertsSearch = () => {
    const[query, setQuery] = useState([])
    const[results, setResults] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            console.log("Hitting API!")
            const apiKey = "227a9b5dfdf60ab1a34845a1a6849cf0"
            const URL = 'https://api.edamam.com/api/recipes/v2?type=public&q=french&app_id=ac84722b&app_key=227a9b5dfdf60ab1a34845a1a6849cf0&cuisineType=French&dishType=Desserts&imageSize=REGULAR'

            const response = await fetch(URL)
            const data = await response.json()
            setResults(data.data)
        } catch(err) {
            console.log(err)
        }
    }

    function handleChange(e) {
        setQuery(e.target.value)
    }

    return(
        <>
            < Desserts handleSubmit={handleSubmit} handleChange={handleChange} query={query} />
            < DessertResult results={results}/>
        </>
    )
}

export default DessertsSearch