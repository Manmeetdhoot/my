import React, { Component } from 'react';
import './header.css';
import './icomoon.css';

export default class Header extends Component {
    render() {
        return(
            <div className="col-6">
                <div className="backgroundbox">
                    <h2>NEET MANGAT</h2>

                    <div className="row">
                        <p>Full Stack Web Developer</p>

                        <div className="socialicons">
                            <a href="https://github.com/neetmangat" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-github"></span></a>
                            <a href="mailto:gurneetsmangat@gmail.com" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-mail_outline"></span></a>
                            <a href="https://www.linkedin.com/in/neetmangat/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-linkedin-square"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}