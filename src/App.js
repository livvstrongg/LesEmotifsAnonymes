import React, { useState } from "react";
import './App.css'
import DessertList from "./components/DessertList";
import DessertSearch from "./components/DessertSearch";
import DessertSource from "./api/DessertSource";

function App() {
  const [state, setState] = useState({
    results: []
  });
  const onSearch = async (text) => {
    const results = await DessertSource.get("/", {
      params: { s: text, i: "ac84722b", apiKey: "227a9b5dfdf60ab1a34845a1a6849cf0" },
    });

    setState(prevState => {
      return { ...prevState, results: results }
    })
  };
  return (
    <div className="App">
      <div className="container searchApp">
        <h2 className="title is-2 has-text-centered">
          Dessert Search 
        </h2>
        <DessertSearch onSearch={onSearch} />
        <DessertList results={state.results} />
      </div>
    </div>
  );
}
export default App;