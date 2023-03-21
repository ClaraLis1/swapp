import { createContext, useContext, useReducer, useState } from "react"
import { useQuery } from "react-query"

export const dataContext = createContext('')

const initialState = {    
    selectFilm:null,
    search:null   
}



const searchReducer = (state, action ) =>{
    switch (action.type) {        
        case 'selectFilm':
            return {...state, selectFilm:action.payload}
        case 'search':
            return {...state, search:action.payload}
        case 'SEND' :
            return state = action.payload
        default :
            return state
        }
    }
                
                
export const DataProvider = ({children}) =>{
    
    
    const [state, dispatch] = useReducer(searchReducer, initialState)      
    
    return (       
        <dataContext.Provider value={ [state, dispatch] }>      
                {children}
        </dataContext.Provider>
        )
    }  
    
    