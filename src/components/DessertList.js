import React from 'react'

function DessertList(props) {
  return (
    <>
        {props.recipe.map((recipe, index) => (
        <div className="d-flex justify-content-start m-3">
            <img src={recipe.image} alt='recipe'></img>
        </div>
        ))}
    </>
  );
};

export default DessertList
