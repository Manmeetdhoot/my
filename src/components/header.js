import React, { Component } from 'react';
import './header.css';
import './icomoon.css';
import avatar from '../images/avatar.jpg';
import me from '../images/me.png';


export default class Header extends Component {
    render() {
        return(
            <div className="col-lg-6 col-md-11 backgroundbox shadow-lg">
                <div className="row">
                    <div className="col-lg-9 col-md-10 col-sm-12">
                        <h2>NEET MANGAT</h2>
                        <hr className="horizontalbreak"/>                        
                        <p>Full Stack Web Developer <br /> Player 1</p>    
                    </div>

                    <div className="row col-lg-3 col-md-2 col-sm-12 justify-content-center">
                        <img src={me} class="avatar" />
                        <div className="socialicons align-items-center">
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