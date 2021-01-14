import React, { Component } from 'react';
import PlayerCard from '../components/playercard';
import './player.css';

export default class Player extends Component {
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
                    <h2 class="secondarytitle textspaced"><u>Player Select</u></h2>

                    <div onClick={this.handleClick}>
                        <PlayerCard name="Neet Mangat" location="Dallas, TX" occupation="Web Developer" />
                    </div>

                    <hr className="navbreak"/>
                    
                    <div className="nav-item textspaced" id="START" onClick={this.handleClick}>Restart</div>
                </div>
            </div>
        )
    }
}