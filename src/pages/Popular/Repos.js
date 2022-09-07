import SelectLanguages from "./SelectLenguages";
// import {useLocation} from "react-router-dom";

const Repos = (props) => {
    
    // const location = useLocation()
    // const myLocation = location.search.slice(10)

    // console.log(myLocation)
   
    return(
        <ul className="popular-list" >
        
                {props.repos.map((repo, index) => (
                    <li key={repo.id} className='popular-item' >
                        <div className="popular-rank">#{index +  1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img className="avatar" src={repo.owner.avatar_url} alt="avatar"/>
                            </li>
                            <li><a href={repo.html_url} target="_blanc">{repo.name}</a></li>
                            <li>{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                ))}
            </ul>
    )
}

export default Repos