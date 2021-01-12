import React, { Component } from 'react';
import './playerInfo.css';

export default class PlayerInfo extends Component {
    render() {
        return(
            <div className="col-lg-9 col-md-10 col-sm-12">
                <h2 className="playername">NEET MANGAT</h2>
                <hr className="horizontalbreak"/>                        
                <p className="playerbio">Full Stack Web Developer <br /> Player 1</p>    
            </div>
        )
    }
}