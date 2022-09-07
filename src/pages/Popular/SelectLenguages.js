import { memo} from "react"
import { useSearchParams, useLocation } from "react-router-dom";


const SelectLanguages = memo((props) => {
    
    
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('language') || ''

    const hendlUrl = (e) => {
        e.preventDefault()
        const myLi = e.target 
        const query = myLi.innerHTML
        setSearchParams({language: query})
    }
    
    
    // console.log(location.search)
    // console.log(postQuery)
    // console.log(props.selectedLanguage)

    // if (location.search === `?language=${postQuery}`){
    //     console.log('fuck')
    // }
    
    

    

    const languages = ['All', 'Javascript', 'Python', 'CSS', 'Java', 'Ruby']

        
    
    
    // console.log(postQuery)
    

    return(
        <ul className="languages" id="languages">
                {languages.map((language, index) => (
                        <li 
                            style={language === props.selectedLanguage ? {color: '#d0021b'} : null}
                            key={index} 
                            onClick={() => props.selectLanguage(language)}
                            onMouseDown={hendlUrl}
                            
                            >
                                {language}
                                 
                        </li>
                        
                ))}
            </ul>
    )
}, (prevProps, nextProps) => {
    return prevProps.selectedLanguage === nextProps.SelectedLanguages;
})



export default SelectLanguages