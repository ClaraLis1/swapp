
import { useEffect, useState } from 'react';
import styles from './character.module.css'


const Character = (props) =>{
   
  const [endpoint, setEndpoint] = useState("https://swapi.dev/api/planets/ ")
  const[dataCh, setDataCh] = useState({})
  const[characters, setCharacters] = useState([])   
  const[isLoading, setIsLoading] = useState(false)   

  /*useEffect(() =>{    
    if(endpoint!== null){
    fetch(endpoint)
    .then((response) =>response.json())
    .then((data) =>{  
        setDataCh(data)
        setCharacters([...characters, ...data.results])
        setEndpoint(data.next)      
    })   
  } 
  },[endpoint])*/

//  const world = options.filter(planet => planet.url === props.homeworld);


  return (
    <div className={styles.character}>     
  
   
      <h5>{props.name}</h5>   
    
     
    
     </div>
     )
}
export default Character;