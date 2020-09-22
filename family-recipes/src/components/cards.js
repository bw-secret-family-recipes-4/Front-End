import React from 'react'

const Cards = props => {
    const {data} = props
    


        return(
            <div className = 'recipes'>
                <h2>{data.name}</h2>
                <p>Fill with data</p>
            </div>
        )
    
}

export default Cards