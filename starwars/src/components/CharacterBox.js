// Write your Character component here
import React from 'react'
import Character from './Character'
import styled from "styled-components"



function CharacterBox(props){
    const {data} = props
    return(
     <div className='characterBox'>
         {data.map(char => {
             return <Character key={char.name} />
         }
         )}
     </div>
    )
}

export default CharacterBox;
    