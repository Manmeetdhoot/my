import React, { Component } from 'react';
import me from '../images/me.png'
import './playercard.css';

export default class PlayerCard extends Component {
    render() {
        return (
            <div className="row justify-content-center pt-5 pb-4">
                <div className="playerborder" id="MENU">
                    <img src={me} className="biopicture" alt="bio-pic" id="MENU"/>
                    <h3 className="textyellow textspaced" id="MENU">{this.props.name}</h3>
                </div>
            </div>
        )
    }
}