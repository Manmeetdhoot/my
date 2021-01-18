import React, { Component } from 'react';
import './playerInfo.css';

export default class PlayerInfo extends Component {
    render() {
        return(
            <div className="col-lg-9 col-md-10 col-sm-12">
                <h2 className="playername textyellow textspaced">NEET MANGAT</h2>
                <hr className="horizontalbreak mt-2 mb-2 mr-0 ml-0"/>                        
                <h5 className="playerbio textblue textspaced">Full Stack Web Developer </h5>
                <h5 className="playerbio textblue textspaced">Player 1</h5>  
            </div>
        )
    }
}