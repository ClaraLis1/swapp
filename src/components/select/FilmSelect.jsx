import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../context/Context';

export const FilmSelect = ({name, label, type = "text", dataType, options} ) => {
    const [state, dispatch]  = useContext(dataContext)
    const [selectedLocal, setSelectedLocal] = useState('') 
    const url = options.filter(film => film.title === selectedLocal);
    
    const handleClick = ()=>{
      dispatch({type:"selectFilm", payload: selectedLocal ==="filter"? null:url[0].url})
      dispatch({ type: "search", payload: null });        
    }
    
  return (
    <div className="input-contenedor">
        <label htmlFor={name}>{label}</label>
        <select                   
            value={selectedLocal}
            name={name}
            datatype={dataType}   
            onChange={e => setSelectedLocal(e.target.value)
          } 
            >
              <option value = "filter">Filter by film</option>
              {name=="film" && options.map((option, index) => (
              <option key={index} value={option.title}>{option.title}</option>
            ))}          
          </select>
          <button onClick={handleClick}>Filter</button>
    </div>
  )
}
