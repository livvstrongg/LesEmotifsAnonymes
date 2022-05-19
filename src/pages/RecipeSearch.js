import { useState } from 'react';
import { Link } from 'react-router-dom';

function RecipeSearch(props) {

    const [newForm, setNewForm] = useState({
        label: '',
        image: '',
        href: ''
    })

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPeople(newForm);
        setNewForm({
            label: '',
            image: '',
            href: ''
        })
    }

    const loaded = () => {
        return recipe.map((r) => (
            <div key={r.recipe.image} className="image">
                <img src={r.recipe.image} alt='recipe'></img>
            </div>
            ))
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return (
        <section>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={newForm.label}
                        name='name'
                        placeholder='name'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newForm.image}
                        name='image'
                        placeholder='image URL'
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        value={newForm.href}
                        name='title'
                        placeholder='title'
                        onChange={handleChange}
                    />
                    <input type='submit' value='Create Dessert' />
                </form>
                {recipe ? loaded() : loading()}
            </section>
        )
}

export default RecipeSearch