import React, { Component } from 'react';
import Desserts from './Desserts';
import DessertResult from './DessertResult';
import axios from 'axios';

class DessertSearch extends Component {
    state = {
        query:'',
        response:[]
    }

    search = () => {
        axios.get('https://api.edamam.com/api/recipes/v2', {
            params: {
                api_key:'227a9b5dfdf60ab1a34845a1a6849cf0',
                q:this.state.query
            }
        })
        .then((res) => {
            this.setState({
                response: res.data.data
            });
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.response.length === 0 &&
            this.state.query === nextState.query){
            return false;
        }
        return true;
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.query !== this.state.query){
            this.search();
        }
    }

    onInput = (event) => {
        this.setState({
            query:event.target.value
        })
    }

    render(){
        let results;
        if(this.state.response){
            results = this.state.response.map((result) => {
                return (
                    <section>
                        <div className="album py-5 bg-light">
                            <DessertResult
                                result={result}
                                key={result.id}
                            />
                        </div>
                    </section>
                )
            })
        }
        return(
            <div>
                <DessertSearch onInput={this.onInput}/>
                {results}
            </div>
        )
    }
}

export default DessertSearch;