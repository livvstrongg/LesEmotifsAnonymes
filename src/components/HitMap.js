import React from 'react'

function HitMap(props) {
    const { recipe } = props
    console.log(recipe)
  return (
    <div>
        this is the {recipe}
    </div>
  )
}

export default HitMap