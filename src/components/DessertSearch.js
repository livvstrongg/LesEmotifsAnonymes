import React from 'react'
import {useState} from "react"

function DessertSearch(props) {
    const (onSearch) = props
    const [searchText, setSearchText] = useState['']
    const handleInput = (e) => {
        const test = e.target.value
        setSearchText(text)
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            onSearch(searchText)
        }
    }
  return (
    <div>
        <div>
        <input className="input" onChange={handleInput} onKeyPress={handleEnterKeyPressed} value={searchText} type="text" placeholder='Search for Dessert' />
        </div>
    </div>
  )
}

export default DessertSearch