import React, { Component } from 'react';
import lambo from '../images/lambo.png';
import './car.css';

export default class Car extends Component {
    render() {
        return(
            <div class="carContainer">
                <img alt="lambo" src={lambo} class="car shadow-sm" />
            </div>
        )
    }
}