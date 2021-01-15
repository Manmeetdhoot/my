import React, { Component } from 'react';
import me from '../images/me.png'
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-xs-12 col-xl-8 offset-xl-2">
                <div className="pagebox pt-3 pb-5 shadow-lg">
                    <div className="row justify-content-center col-12 text-white pr-1 pl-1 ml-0 mr-0">
                        <div className="col-12 col-md-10 col-lg-6 pt-3">
                            <div className="row justify-content-center pl-2">
                                <img src={me} className="biopicture" alt="bio-pic" />
                                <div className="pl-3">
                                    <h3 className="textyellow textspaced"><u>Player Info</u></h3>
                                    <ul className="no-bullets raleway pl-0">
                                        <li><b>Name:</b> Neet Mangat</li>
                                        <li><b>Location:</b> Dallas, TX</li>
                                        <li><b>Occupation:</b> Web Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="col-xs-12 col-xl-10 offset-xl-1 raleway pt-5 text-center pl-0 pr-0">
                                Neet Mangat is a Full Stack Web and Mobile Developer who is also certified in Salesforce Administration. <br /><br />
                                He is well versed in React, React Native, Web3, JavaScript, Ruby, Ruby on Rails, jQuery, CSS, and HTML. <br /><br />
                            </p>
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 pt-3">
                            <h3 className="textblue textspaced"><u>Player Brief</u></h3>
                            <ul className="raleway">
                                <li className="brief-item">Embraces challenges.</li>
                                <li className="brief-item">Solutions driven.</li>           
                                <li className="brief-item">Self-motivated.</li>      
                                <li className="brief-item">Excellent team player.</li> 
                                <li className="brief-item">Great communication skills.</li>     
                                <li className="brief-item">Performs well under pressure.</li> 
                                <li className="brief-item">Experienced in IT, finance, and marketing.</li>           
                            </ul>
                        </div>                        
                    </div>

                    <div className="row col-12 justify-content-center pt-3 mr-0 ml-0">
                        <div>
                            <div className="row align-items-center pb-1">
                                <h3 className="textpink textspaced pr-2"><u>Power Ups</u>: </h3>
                                <h5 className="text-white raleway smallheader">Coffee, Gym, Reading</h5>
                            </div>
                            <div className="row align-items-center">
                                <h3 className="textpink textspaced pr-2"><u>Skills</u>: </h3>
                                <h5 className="text-white raleway smallheader">Coding, Music, Photography</h5>
                            </div>    
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}