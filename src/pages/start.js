import React, { Component } from 'react';
import './start.css';

export default class Start extends Component {
    render() {
        return(
            <div className="row justify-content-center">
                <div className="startpage" onClick={this.props.onClick}>
                    <p className="starttext blink_me textspaced" onClick={this.props.onClick}>START GAME</p>
                </div>
            </div>
        )
    }
}