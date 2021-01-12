import React, { Component } from 'react';
import start from '../images/start.jpg';
import './start.css';

export default class Start extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = 'navigation';
        this.props.onClick(page);
    }

    render() {
        return(
            <div className="row justify-content-center">
                <p class="startgame blink_me" onClick={this.props.onClick}>START GAME</p>
                <img src={start} className="splashscreen" />
            </div>
        )
    }
}