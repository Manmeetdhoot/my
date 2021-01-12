import React, { Component } from 'react';
import './levelInfo.css';

export default class LevelInfo extends Component {
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
            <div className="gameinfo">
                <div className="text-center">
                    <h5 className="secondarytitle">Current Level</h5>
                    <h4 className="levelname">{this.props.page}</h4>
                    <hr className="navbreak" />
                    <p className="return" id="MENU" onClick={this.handleClick} >Return To Menu</p>
                </div>
            </div>
        )
    }
}