import React, { useContext, useState } from 'react'
import { dataContext } from '../../context/Context'
import Character from '../charactersCards/Character'

 

const SearchCharacter = () => {
    const [state, dispatch]  = useContext(dataContext)
    const[name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();    
        let searchInfo =   e.target.nombre.value  
        dispatch({type:"search",payload:searchInfo.toLowerCase()})                       
        dispatch({type:"selectFilm", payload: null})
        e.target.nombre.value = "";
    } 

    

  
  return (
    <div>
        
        <form onSubmit={handleSubmit}>                
            <input type="text" name="nombre"/>
            <input type='submit' value='buscar' />
        </form>
        
    </div>
  )
}

export default SearchCharacter