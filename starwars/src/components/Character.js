// Write your Character component here
import React from 'react'
import styled from "styled-components"

const NameStyle = styled.div`
 
 h2 {
     color: white;
     border: 2px solid yellow;
     background-color: lightgrey;
 }

`

function Character(props){
    const {swdata} = props
    return(
        swdata.map((char) => {
            return(
                <NameStyle className="Character">
                    <h2 className="name">{char.name}</h2>
                    {/* <button>EXPAND</button> */}
                    <p className="birthYear">{char.birth_year}</p>
                    <p className="homeworld">{char.homeworld}</p>
                    {/* <p className="films">{char.films}</p> */}
                </NameStyle>
            
            )
        })
    )
}

export default Character;
    