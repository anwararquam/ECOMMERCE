import { useState,useContext,useEffect,createContext } from 'react';
import axios from 'axios';
const SearchContext = createContext();
const SearchProvider=({children})=>{
    const [auth,setAuth]=useState({
        keyword:"",
        result:[],
    })
   
    
    return(
        <SearchContext.Provider value={[auth,setAuth]}>
            {children}
        </SearchContext.Provider>
    )
}
//custom hook
const useSearch=()=>useContext(SearchContext)
export {useSearch,SearchProvider}