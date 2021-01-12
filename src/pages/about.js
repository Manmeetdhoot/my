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
                            
                            <div className="biostats row">
                                <img src={me} className="biopicture" alt="bio-pic" />
                                <div className="pl-4">
                                    <h5 className="textyellow"><u>Player Info</u></h5>
                                    <ul className="no-bullets raleway pl-0">
                                        <li><b>Name:</b> Neet Mangat</li>
                                        <li><b>Location:</b> Dallas, TX</li>
                                        <li><b>Occupation:</b> Web Developer</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="raleway">
                                Neet Mangat is a Full Stack Web and Mobile Developer who is also certified in Salesforce Administration. <br /><br />
                                He is well versed in React, React Native, Web3, JavaScript, Ruby, Ruby on Rails, jQuery, CSS, and HTML. <br /><br />
                                Having built numerous web applications, he hopes to showcase the creativity of his designs and intricacy of his platforms.
                            </p>
                        </div>

                        <div class="vl"></div>

                        <div className="col-6">
                            <h4 className="textblue"><u>Player Brief</u></h4>
                            <ul className="raleway">
                                <li className="brief-item">A go-getter with a passion for learning.</li>            
                                <li className="brief-item">Experienced in IT, finance, marketing and entertainment.</li>      
                                <li className="brief-item">Embraces challenges and identifying solutions.</li>        
                                <li className="brief-item">Excellent team player with great communication skills.</li>  
                                <li className="brief-item">Performs well under the pressure of deadlines.</li>      
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}