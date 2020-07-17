// Write your Character component here
import React from 'react'

function Character(props){
    const {swdata} = props
    return(
        <div className="Character">
            <h2 className="name">{swdata.name}</h2>
            {/* <button>EXPAND</button> */}
            <p className="birthYear">{swdata.birth_year}</p>
            <p className="homeworld">{swdata.homeworld}</p>
            <p className="films">{swdata.films}</p>
        </div>
    )
}

export default Character;
    