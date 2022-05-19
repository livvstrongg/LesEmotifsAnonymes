import React, { useEffect, useState } from "react";


function Main (props) {
    const recipePath = props.url
    console.log('hits')
    const [recipeInfo, setrecipeInfo] = useState([]);
 
  const getrecipeInfo = async () => {
    try {
      const response = await fetch(recipePath);
      const data = await response.json();
      console.log(data.hits);
      setrecipeInfo(data.hits);
    } catch (err) {
      console.log("Ran into a problem ERROR");
    }
}
  useEffect(() => {
    getrecipeInfo();
    
  }, []);
  console.log(recipeInfo)

const mapping = recipeInfo.map((recipe, idx) => {
    const dessertImage = recipe.recipe.image
    return (
        <div key={idx}>
            <img src={dessertImage} alt=''/>
        </div>

    )
})

  return (
    <div>
        {mapping}
    </div>
  );
}

export default Main;

