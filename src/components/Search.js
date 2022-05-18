import React from 'react';
import { useState } from 'react';

const Search = (props) => {
    const [newSearch, setNewSearch] = useState(null)

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewSearch(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        setNewSearch(event.target.value)
        console.log(event.target.value)
    }
	return (
        <section>
        <form onSubmit={handleSubmit}>
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={handleChange}
				placeholder='Type to search'
			></input>
		</div>
        </form>
        </section>
	);
};

export default Search;