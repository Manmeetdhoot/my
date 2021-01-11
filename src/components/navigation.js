import React, { Component } from 'react';
import './navigation.css';

export default class Navigation extends Component {
    render() {
        return(
            <div className="levelbox">
                <div className="row">
                    <h4><u>Level Select</u></h4>
                </div>
                <div className="row">
                    <ul className="navbar-nav">
                        <li className="nav-item" key="nav-01">1. About</li>
                        <li className="nav-item" key="nav-02">2. Projects</li>
                        <li className="nav-item" key="nav-03">3. Resume</li>
                    </ul>
                </div>
            </div>
        )
    }
}