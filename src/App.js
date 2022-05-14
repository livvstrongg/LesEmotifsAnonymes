import React, { useEffect, useState } from 'react';
import './App.css';
import Desserts from './components/Desserts';

const RECIPE_API = "https://api.edamam.com/api/recipes/v2?type=public&q=french&app_id=ac84722b&app_key=227a9b5dfdf60ab1a34845a1a6849cf0&cuisineType=French&dishType=Sweets&imageSize=REGULAR";

<script src="https://platform.fatsecret.com/js?key=46a0220a98044e1ab833549faf91d304"></script>

function App() {
const [desserts, setDesserts] = useState([]);

useEffect(() => {
  fetch(RECIPE_API)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setDesserts(data.results)
  });
}, [])

  return (
    <div>
      {desserts.length > 0 && desserts.map((dessert) => 
        <Desserts/>
      )}
    </div>
  );
}

export default App;
