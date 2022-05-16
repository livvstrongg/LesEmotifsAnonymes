import React from 'react'
import Desserts from './Desserts'

function DessertList({results}) {
    let data = [];
    if (results.data) {
        data = results.data.Search || [];
    }
  return (
    <div className="result">
        {data.map()}
        <Desserts />
    </div>
  )
}

export default DessertList