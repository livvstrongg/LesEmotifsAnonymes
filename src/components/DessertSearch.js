import React from "react";
import { useState } from "react";

function DessertSearch() {
//   const { 
//     onSearch 
//   } = props;

//   const [searchText, setSearchText] = useState('')

//   const handleInput = (e) => {
//     const text = e.target.value
//     setSearchText(text)
//   }

//   const handleEnterKeyPressed = (e) => {
//     if(e.key === 'Enter') {
//       onSearch(searchText)
//     }
//   }
let APP_ID = "ac84722b"
let APP_KEY = "227a9b5dfdf60ab1a34845a1a6849cf0"
  return (
    <div>
      <div className="control"> 
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your recipe"
        />
      </div>
    </div>
  );
}

export default DessertSearch;