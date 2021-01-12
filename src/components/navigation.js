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
                <div className="menubox justify-content-center shadow-lg">
                    <h2 class="secondarytitle textspaced"><u>Level Select</u></h2>

                    <ul className="navbar-nav">
                        <li className="nav-item textspaced" id="ABOUT" onClick={this.handleClick}>About</li>
                        <li className="nav-item textspaced" id="PROJECTS" onClick={this.handleClick}>Projects</li>
                        <li className="nav-item textspaced" id="RESUME" onClick={this.handleClick}>Resume</li>
                        <li className="nav-item textspaced" id="CONNECT" onClick={this.handleClick}>Connect</li>
                        <hr className="navbreak"/>
                        <li className="nav-item textspaced" id="START" onClick={this.handleClick}>Restart</li>
                    </ul>
                </div>
            </div>
        )
    }
}