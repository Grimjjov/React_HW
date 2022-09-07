import { useState } from "react"

export const PlayerInput = (props) =>{
    
    const [userName, setUserName] = useState('')

    const handleChange = (event) =>{
         setUserName(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onSubmit(props.id, userName)
    }
        
    
    return (
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="username">{props.label}</label>    
            <input 
                type="text"
                placeholder="Github Username"
                id="username"
                value={userName}
                autoCapitalize="off"
                onChange={handleChange}
            />
            <button className="button" type="submit" disabled={!userName}>Submit</button>
        </form>
        
    )
}