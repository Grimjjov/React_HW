import { useState, useEffect } from "react"
import { fetchPopularRepos } from "../../api";
import SelectLanguages from "./SelectLenguages";
import Repos from "./Repos";
// import { useSearchParams } from "react-router-dom";
import {useLocation} from "react-router-dom";



const Popular = () => {
    const location = useLocation()
    const myLocation = location.search.slice(10)
    const [selectedLanguage, setSelectedLanguage] = useState(myLocation ? myLocation : 'All');
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false);
    const myEl = document.getElementById('languages')

    // const [searchParams, setSearchParams] = useSearchParams();
    // const postQuery = searchParams.get('post') || ''
    
    
    // function hendlUrl() {
    //     const query = selectedLanguage
    //     console.log(query)
    //     setSearchParams({post : selectedLanguage})
    // }
 

    console.log(myLocation ? 'asd' : "sss")

   useEffect( ( ) => { 
      
    setLoading(true)
       fetchPopularRepos(selectedLanguage)
        .then(data => 
            setRepos(data),
            setLoading(false) ,
            
        )
        
   },[]);



   const selectLanguage = (language) => {   
       setSelectedLanguage(language);   
        
       setLoading(true)
       
       myEl.style.pointerEvents='none';
       myEl.style.color='#b9b9b9';
       fetchPopularRepos(language)
       .then(data => {            
           setRepos(data)
           setLoading(false)
            
           myEl.style.pointerEvents='auto';  
           myEl.style.color='black';  
           
           
        })
   }
   
   
//    console.log(SelectLanguages)



    
 
  
 
   
 return(
        <>
            <SelectLanguages
                
                selectedLanguage={selectedLanguage}
                selectLanguage = {selectLanguage}
                
            />
            
            {loading ? <p className="loading">Loading...</p>: null}
            <Repos 
                repos={repos}
            />
             
        </>
    )
}

export default Popular;