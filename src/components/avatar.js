import React, { Component } from 'react';
import './avatar.css';
import avatar from '../images/avatar.jpg';


export default class Avatar extends Component {
    render() {
        return(
            <div className="row col-lg-3 col-md-2 col-sm-12 justify-content-center pt-3">
                <img src={avatar} className="avatar" alt="avatar" />
                <div className="socialicons align-items-center">
                    <a href="https://github.com/neetmangat" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-github"></span></a>
                    <a href="mailto:gurneetsmangat@gmail.com" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-mail_outline"></span></a>
                    <a href="https://www.linkedin.com/in/neetmangat/" target="_blank" rel="noreferrer" className="socialicon"><span className="icon-linkedin-square"></span></a>
                </div>
            </div>
        )
    }
}