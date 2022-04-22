import React from 'react';
import CategoryCardList from '../components/CategoryCardList';



class Home extends React.Component {

    constructor() {
        super() /*calls constructor of Component*/
        this.state = {
          chooseCategories: []
        }
    }
  
    componentDidMount() {
      fetch('http://localhost:8080/categories')
      .then(response => {
          return response.json();
      })
      .then(categories => {
        console.log('categories:', categories);
        this.setState({ chooseCategories: categories});
      })
        
    }

    /* the function that returns what shows up on the webpage */
    render() {
        
        return !this.state.chooseCategories.length ?
        <h1>No available categories</h1> :
        (
            <div>

                <CategoryCardList categories={this.state.chooseCategories} /> {/*child*/}

            </div>
        ); 
    }

}

  
export default Home;