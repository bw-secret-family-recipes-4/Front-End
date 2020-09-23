import React from 'react'

const Cards = props => {
    const {data} = props
    


        return(
            <div className = 'recipes'>
                <h2>{data.title}</h2>
                <h3>{data.category}</h3>
                <img src = {data.image_url}/>
            </div>
        )
    
}

export default Cards