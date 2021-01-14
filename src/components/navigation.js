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
            <div className="col-12 col-sm-10 offset-sm-1 col-lg-6 offset-lg-3">
                <div className="menubox justify-content-center shadow-lg mb-5">
                    <h2 class="textyellow textspaced"><u>Level Select</u></h2>

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