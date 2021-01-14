import React, { Component } from 'react';
import start from '../images/start.jpg'
import './start.css';

export default class Start extends Component {
    render() {
        return(
            <div className="col-12">
                <div className="filler"></div>
                <div className="col-12 row justify-content-center ml-0 mr-0">
                    <div className="pt-5 mt-5 text-center">
                        <img src={start} className="startimage" onClick={this.props.onClick} />
                        <p className="starttext blink_me textspaced" onClick={this.props.onClick}>START GAME</p>
                    </div>
                </div>
                
            </div>
        )
    }
}