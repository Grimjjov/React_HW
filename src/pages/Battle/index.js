import React from "react";
import { Link } from "react-router-dom";
import {PlayerInput} from "./PlayerInput"
import {PlayerPreview} from "./PlayerPreview"

class Battle extends React.Component{
    constructor() {
        super();
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
    }

    handleSubmit = (id,username) =>{
       
        this.setState({
            [id + 'Name'] : username,
            [id + 'Image'] : 'https://github.com/' + username + '.png?size=200' ,

        })
    }   

    handleReset = (id) => {
        this.setState({
            [id + 'Name'] : '',
            [id + 'Image'] : null ,

        })
    }

    render() {
       
        return (
            <div>
            
                <div className="row">

                    {!this.state.playerOneImage ? 
                        <PlayerInput 
                           
                            id="playerOne"
                            label='Player One'
                            onSubmit={this.handleSubmit}
                        /> : 
                        <PlayerPreview 
                            avatar = {this.state.playerOneImage}
                            username = {this.state.playerOneName}
                        >
                            <button className="reset" onClick={() => this.handleReset('playerOne')}>Reset</button>
                        </PlayerPreview>

                     }   
                     {!this.state.playerTwoImage ? 
                        <PlayerInput 
                        id="playerTwo"
                        label='Player Two'
                        onSubmit={this.handleSubmit}
                        /> :
                        <PlayerPreview 
                            avatar = {this.state.playerTwoImage}
                            username = {this.state.playerTwoName}
                        >
                            <button className="reset" onClick={() => this.handleReset('playerTwo')}>Reset</button>
                        </PlayerPreview>
                     }
                </div>
                {this.state.playerOneImage && this.state.playerTwoImage && 
                <Link className="button" to={{
                        pathname: '/battle/results',
                        search: `?playerOneName=${this.state.playerOneName}&playerTwoName=${this.state.playerTwoName}`
                    }}>
                    Battle
                </Link>}   
                  
            </div>
            
        )
    }
}

export default Battle;