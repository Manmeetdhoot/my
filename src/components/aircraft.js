import React, { Component } from 'react';
import aircraft from '../images/aircraft.png';
import './aircraft.css';

export default class Aircraft extends Component {
    render() {
        return(
            <div class="aircraftContainer">
                <img alt="aircraft" src={aircraft} class="aircraft shadow-sm" />
            </div>
        )
    }
}