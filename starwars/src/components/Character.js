// Write your Character component here
import React from 'react'

function Character(props){
    const {data} = props
    return(
        <div className="Character">
            <h2 className="name">{data.name}</h2>
            {/* <button>EXPAND</button> */}
            <p className="birthYear">{data.birth_year}</p>
            <p className="homeworld">{data.homeworld}</p>
            <p className="films">{data.films}</p>
        </div>
    )
}

export default Character;
    