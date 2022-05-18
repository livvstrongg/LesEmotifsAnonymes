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
    <main>
      <Routes>
        <Route path='/'/>
        <Route path='/:recipeParam'
        element={<RecipeList/>} />
    </Routes>
    {/* <div className="container-fluid recipe-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <DessertSearch search='Movies' />
        </div>
      <div className="row">
      <DessertList recipe={recipe} />
      <Search />
      </div>
    </div> */}
    </main>
  )
}

export default App