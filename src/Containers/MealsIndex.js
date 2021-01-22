import React, { Component } from 'react'
import MealsShow from '../Components/MealsShow'

class MealsIndex extends Component {
    state = {
        meals: [],
        mealIndex: ""
    }

    componentDidUpdate(prevState){
        if(prevState.mealIndex !== this.props.mealIndex){
            const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.mealIndex}`
            fetch (url)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals);
                this.setState({
                    meals: data.meals,
                    mealIndex: this.props.mealIndex
                })
            })
        }

    }
    render() {
        const mealList = this.state.meals.map((meal, i) => <MealsShow key={i} mealsName={meal.strMeal}/>)
        return (
            <div>
                {this.props.mealIndex !== "" ? ( <h3>{this.state.mealCategory} </h3>) : (<h2>Please Select Category</h2>)}
                {this.props.mealIndex !== "" ? mealList : ""}
            </div>
        )
    }
}
export default MealsIndex;


