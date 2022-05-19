import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom'

function App() {

  const url = 'https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=9ffd75f7&app_key=897ff7ef6089d74cdb71e048d9852da0&cuisineType=French&dishType=Desserts&imageSize=REGULAR&field=image';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Main url={url} /> } /> 
      </Routes>
    </div>
  );
}

export default App;