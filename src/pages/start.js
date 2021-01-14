import React, { Component } from 'react';
import start from '../images/start.jpg'
import './start.css';

export default class Start extends Component {
    render() {
        return(
            <div className="h-100 d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <img src={start} className="startimage" onClick={this.props.onClick} />
                    <p className="starttext blink_me textspaced" onClick={this.props.onClick}>START GAME</p>
                </div>
            </div>
        )
    }
}