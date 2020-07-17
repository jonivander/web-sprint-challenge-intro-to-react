// Write your Character component here
import React from 'react'
import Character from './Character'
import styled from "styled-components"



function CharacterBox(props){
    const {swdata} = props
    return(
     <div className='characterBox'>
         {swdata.map(char => {
             return <Character key={char.name} />
         }
         )}
     </div>
    )
}

export default CharacterBox;
    