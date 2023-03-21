import { useContext, useEffect, useState } from "react"
import Character from "../charactersCards/Character"
import styles from './container.module.css'
import { FilmSelect } from "../select/FilmSelect"
import { dataContext } from "../../context/Context"
import SearchCharacter from "../searchCharacter/SearchCharacter"
import Loading from "../load/Loading"
import CharacterSingular from "../characterSing/CharacterSingular"
import { Link, useParams } from "react-router-dom"


function Home() {
  const {name} = useParams()
  const [state, dispatch]  = useContext(dataContext)
  const [endpoint, setEndpoint] = useState("https://swapi.dev/api/people/ ")
  const[info, setInfo] = useState([{}])
  const[dataCh, setDataCh] = useState({})
  const[characters, setCharacters] = useState([])
  
  console.log(name);
  useEffect(() =>{    
    fetch(`https://swapi.dev/api/films/`)
    .then((response) =>response.json())
    .then((data) =>{      
        setInfo(data.results)        
    })
}, [])

console.log(info);
useEffect(() =>{    
  if(endpoint!=null){
  fetch(endpoint)
  .then((response) =>response.json())
  .then((data) =>{  
      setDataCh(data)
      setCharacters([...characters, ...data.results])
      setEndpoint(data.next)      
  })
}
},[endpoint])
 
  return (
    <>
      <div>
            <FilmSelect 
            dataType='film'
            name="film"
            label="film" 
            options ={info}      
            />
      </div>
      <div>
        <SearchCharacter/>
      </div>  
      <>{
        characters.length===dataCh.count?  
        <div className={styles.container}>    
       
         
           {characters.map((personaje) => {
          if((state.selectFilm ===null) && (state.search===null)){
                 
              return(
                <Character            
                key={personaje.name} 
                name={personaje.name}            
                homeworld = {personaje.homeworld}           
                films = {personaje.films} 
                film = {state.selectFilm}            
                  />             
                  )
                }
            else if(personaje.films.includes(state.selectFilm)){
              {console.log("entro en Film")}   
              return(
              <Character            
              key={personaje.name} 
              name={personaje.name}               
              homeworld = {personaje.homeworld}           
              films = {personaje.films} 
              film = {state.selectFilm}            
              />             
              )              
            }else if((personaje.name.toLowerCase().includes(state.search))){
                       
              return(
                <CharacterSingular            
                key={personaje.name} 
                name={personaje.name} 
                birth = {personaje.birth_year}
                homeworld = {personaje.homeworld}           
                films = {personaje.films.map((film)=>{
                  let arr = []
                  info.filter((val)=>{                             
                    if(val.url == film){                          
                        arr.push(val.title)
                    }
                    })
                  return arr
                })}
                edition = {personaje.edited}
                           
                />) 
              }
             
            })                 
          } 
      </div> :
      <div>
        <Loading/>
      </div>
      }
    
      </> 
      
    </>
  )
}
         
      
          

export default Home;
              
        