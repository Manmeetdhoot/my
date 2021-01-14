import React, { Component } from 'react';
import me from '../images/me.png'
import './about.css';

export default class About extends Component {
    render() {
        return(
            <div className="col-xs-12 col-xl-8 offset-xl-2">
                <div className="pagebox pt-5 pb-5">
                    <div className="row justify-content-center col-12 text-white pr-1 pl-1">
                        <div className="col-12 col-md-10 col-lg-6 pt-3 pb-3">
                            <div className="row justify-content-center pl-2">
                                <img src={me} className="biopicture" alt="bio-pic" />
                                <div className="pl-3 pt-2">
                                    <h3 className="textyellow textspaced"><u>Player Info</u></h3>
                                    <ul className="no-bullets pl-0">
                                        <li><b className="textspaced">Name: </b><span className="raleway">Neet Mangat</span></li>
                                        <li><b className="textspaced">Location: </b><span className="raleway">Dallas, TX</span></li>
                                        <li><b className="textspaced">Occupation: </b><span className="raleway">Web Developer</span></li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway text-center pt-4">
                                Neet Mangat is a Full Stack Web and Mobile Developer who is also certified in Salesforce Administration. <br /><br />
                                He is well versed in React, React Native, Web3, JavaScript, Ruby, Ruby on Rails, jQuery, CSS, and HTML. <br /><br />
                            </p>

                            <div className="col-12 pb-1">
                                <h3 className="textyellow textspaced">Power Ups: </h3>
                                <h5 className="text-white textspaced">Coffee, Gym, Games</h5>
                            </div>
                            <div className="col-12">
                                <h3 className="textyellow textspaced">Skills: </h3>
                                <h5 className="text-white textspaced">Coding, Music, Photography</h5>
                            </div>
                        </div>


                        <div className="col-12 col-md-10 col-lg-6 pt-4 pb-3">
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