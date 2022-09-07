import { useEffect, useState } from "react";
import {battle} from "../../api";
import { useLocation, Link } from "react-router-dom";
import Player from './Player'


const Results = () => {
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [winner, setWinner] = useState(null)
    const [loser, setLoser] = useState(null)
    const[error, setError] = useState(null)

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        battle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
            .then(data => {
                if(!data) {
                    setError('Look like you have problems!');
                    setLoading('false')
                }

                setError(null);
                setLoading(false);
                setWinner(data[0]);
                setLoser(data[1])

            })  
       
    }, [])

    if(loading){
        return <p>loading...</p>
    }

    if(error) {
        return (
            <div>
                <p>{error}</p>
                <Link to='battle'>Reset</Link>
            </div>
        )
    }
 
    return (
        <div>
         <div className="row">
            <Player
                label="Winner"
                score={winner?.score}
                profile={winner?.profile}
            />
             <Player
                label="Loser"
                score={loser?.score}
                profile={loser?.profile}
            />
            
         </div>
         <Link className="button-res" to={{
                        pathname: '/battle'}}>
                    Try again!
                </Link>
         </div>
         
    )
}


export default Results;