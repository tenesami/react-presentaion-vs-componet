import React from 'react'

const CategoryShow = ({meal, userInput}) => {
    return (
       <button onClick={userInput} id={meal}>{meal}</button>
    )
}

export default CategoryShow;