import React, { Component } from 'react';
import me from '../images/me.png'
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-8 offset-2">
                <div className="pagebox">
                    <div className="row justify-content-center col-12 text-white pt-4">
                        <div className="col-6">
                            <div className="biostats row justify-content-center">
                                <img src={me} className="biopicture" alt="bio-pic" />
                                <div className="pl-4">
                                    <h3 className="textyellow textspaced"><u>Player Info</u></h3>
                                    <ul className="no-bullets raleway pl-0">
                                        <li><b>Name:</b> Neet Mangat</li>
                                        <li><b>Location:</b> Dallas, TX</li>
                                        <li><b>Occupation:</b> Web Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway text-center pt-4 pr-2">
                                Neet Mangat is a Full Stack Web and Mobile Developer who is also certified in Salesforce Administration. <br /><br />
                                He is well versed in React, React Native, Web3, JavaScript, Ruby, Ruby on Rails, jQuery, CSS, and HTML. <br /><br />
                            </p>

                            <div className="row justify-content-center col-12 pt-3">
                                <h3 className="textyellow textspaced pr-3">Power Ups: </h3>
                                <h5 className="text-white raleway pt-1">Coffee, Music, Coding</h5>
                            </div>
                        </div>

                        <div class="vl"></div>

                        <div className="col-6 pl-5">
                            <h3 className="textblue textspaced"><u>Player Brief</u></h3>
                            <ul className="raleway">
                                <li className="brief-item">Embraces challenges.</li>    
                                <li className="brief-item">Excellent team player.</li> 
                                <li className="brief-item">Great communication skills.</li> 
                                <li className="brief-item">Solutions driven.</li>           
                                <li className="brief-item">Self-motivated.</li>      
                                <li className="brief-item">Performs well under pressure.</li> 
                                <li className="brief-item">Experienced in IT, finance, marketing and entertainment.</li>           
                            </ul>
                        </div>                        
                    </div>
                    
                </div>
            </div>
        )
    }
}