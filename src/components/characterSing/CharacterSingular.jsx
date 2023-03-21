import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './character.module.css'

const CharacterSingular = (props) => {
   

    return (
        <div className={styles.characterSing}>            
          <h5> Selected Character: {props.name}</h5>   
          <h6> Birth year: {props.birth}</h6>   
          <h6>Films: {props.films}</h6>   
          <h6>Last edition {props.edition.substr(0, 16)}</h6>         
         
        
         </div>
         )
    }


export default CharacterSingular