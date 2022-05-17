import React from 'react';

const Desserts = (props) => {
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search Dessert"
                onKeyUp={props.onInput}
            />
        </div>
    )
}

export default Desserts;