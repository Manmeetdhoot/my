import React, { Component } from 'react';
import start from '../images/start.jpg';
import './start.css';

export default class Start extends Component {
    render() {
        return(
            <div className="row justify-content-center">
                <p className="startgame blink_me" onClick={this.props.onClick}>START GAME</p>
                <img src={start} className="splashscreen" onClick={this.props.onClick} alt="start screen"/>
            </div>
        )
    }
}