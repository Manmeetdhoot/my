import React, { Component } from 'react';
import './navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }

    render() {
        return(
            <div className="navigation row align-items-center">
                <div className="levelbox justify-content-center shadow-lg">
                    <h4 class="secondarytitle"><u>Level Select</u></h4>

                    <ul className="navbar-nav">
                        <li className="nav-item" id="ABOUT" onClick={this.handleClick}>1. About</li>
                        <li className="nav-item" id="PROJECTS" onClick={this.handleClick}>2. Projects</li>
                        <li className="nav-item" id="RESUME" onClick={this.handleClick}>3. Resume</li>
                        <li className="nav-item" id="CONNECT" onClick={this.handleClick}>4. Connect</li>
                        <hr className="navbreak"/>
                        <li className="nav-item" id="START" onClick={this.handleClick}>Restart</li>
                    </ul>
                </div>
            </div>
        )
    }
}