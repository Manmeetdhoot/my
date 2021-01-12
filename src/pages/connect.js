import React, { Component } from 'react';
import './connect.css';

export default class Connect extends Component {
    render() {
        return(
            <div className="col-12 row justify-content-center pt-5 mt-3">
                <div className="col-3 socialbox text-center shadow-lg pt-5">
                    <h1 className="textpink textspaced">GitHub</h1>
                    <a href="https://github.com/neetmangat" target="_blank" rel="noreferrer" className="socialicon-large">
                        <span className="icon-github"></span>
                    </a>
                    <hr className="navbreak" />

                    <p className="text-white raleway pt-4">
                        Check out the source code for some cool projects, including this portfolio!
                    </p>
                </div>

                <div className="col-3 socialbox text-center shadow-lg pt-5">
                    <h1 className="textpink textspaced">Email</h1>
                    <a href="mailto:gurneetsmangat@gmail.com" target="_blank" rel="noreferrer" className="socialicon-large">
                        <span className="icon-mail_outline socialicon-large"></span>
                    </a>
                    <hr className="navbreak" />
                    <p className="text-white raleway pt-4">
                        Interested in working together? <br /> Reach out and let's connect today!
                    </p>
                </div>

                <div className="col-3 socialbox text-center shadow-lg pt-5">
                    <h1 className="textpink textspaced">LinkedIn</h1>
                    <a href="https://www.linkedin.com/in/neetmangat/" target="_blank" rel="noreferrer" className="socialicon-large">
                        <span className="icon-linkedin-square"></span>
                    </a>
                    <hr className="navbreak" />
                    <p className="text-white raleway pt-4">
                        Want to share networks and learn more? <br /> Reach out on LinkedIn.
                    </p>
                </div>
            </div>
        )
    }
}