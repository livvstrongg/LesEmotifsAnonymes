import React, { Component } from 'react';
import DessertSearch from './components/DessertSearch';

class App extends Component {
  render() {
    return (
      <main>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Dessert Search</h1>
            <p className="lead text-muted">Home of Your favorite French Desserts</p>
          </div>
        </section>

        <section className="container">
          <DessertSearch/>
        </section>
      </main>
    );
  }
}

export default App;