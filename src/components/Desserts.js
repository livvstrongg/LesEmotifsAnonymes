const Desserts = (props) => {
    return(
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleChange} value={props.query}/>
            </form>
        </>
    )
}

export default Desserts