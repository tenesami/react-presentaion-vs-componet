import React, { Component } from 'react'
import CategoryShow from '../Components/CategoryShow'
import MealsIndex from './MealsIndex'


const URL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
class CatagorisIndex extends Component {
    state = {
        catagories: [],
        mealCategory: ""
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data =>{
            //console.log(data.meals)
            this.setState({
                catagories: data.meals
            })
        })
    }

    handleOnClick = (e) => {
        e.preventDefault();
       console.log(e.target.id)

       this.setState({
           mealCategory: e.target.id
        })
    }
    render() {
        const catagoriesList = this.state.catagories.map((category, i) => <CategoryShow key={i} meal={category.strCategory} userInput={this.handleOnClick} />)
        return (
            <div>
              <h1>Meals Categories</h1>
              <br/>
              {catagoriesList} 
                     <h3>The {this.state.mealCategory} Meals </h3>
                    <MealsIndex mealIndex={this.state.mealCategory}/>   
            </div>
        )
    }
}
export default CatagorisIndex;