import React from 'react';

import CategoryCardList from '../components/CategoryCardList';

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
          chooseCategories: [],
        }
    }
  
    componentDidMount() {
      fetch('/api/categories')
      .then(response => {
          return response.json();
      })
      .then(categories => {
        console.log('categories:', categories);
        this.setState({ chooseCategories: categories});
      })
    }

    render() {
        return !this.state.chooseCategories.length ?
                  <h1>Loading...</h1> :
                 (
            <div className="container mt-5 rounded-3 text-center">
              <div className="row">
                <div className="col-md-3 col-sm-0"/>
                <div className="col-md-6 col-sm-12 rounded-3 p-3 active-area">
                  <h1>Welcome to Gilmore Girls Trivia</h1>
                  <h3>Choose a category to start your game:</h3>
                  <CategoryCardList categories={this.state.chooseCategories} /> {/*child*/}
                </div>
                <div className="col-md-3 col-sm-0"/>
              </div>
            </div>
        ); 
    }
}

export default Home;