import './App.css';
import Desserts from './components/Desserts';

const RECIPE_API = "https://api.edamam.com/api/recipes/v2?type=public&q=french&app_id=ac84722b&app_key=227a9b5dfdf60ab1a34845a1a6849cf0&cuisineType=French&dishType=Sweets&imageSize=REGULAR";

function App() {
  const desserts = [1,2,3];
  return (
    <div className="App">
      {desserts.map(dessert => (
        <Desserts/>
      ))}
    </div>
  );
}

export default App;
