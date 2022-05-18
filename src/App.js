import React, { useEffect, useState} from 'react'
import './App.css'
import DessertList from './components/DessertList'
import DessertSearch from './components/DessertSearch'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import RecipeList from './pages/RecipeList'


const App = () => {
  return(
    <div className="App">
      <DessertSearch />
      <DessertList />
      <Search />
      <RecipeList />
    </div>
  )
}

export default App

{/* <main>
<Routes>
  <Route path='/'/>
  <Route path='/:recipeParam'
  element={<RecipeList/>} />
</Routes>
</main> */}