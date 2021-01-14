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
                    <h4 className="textyellow textspaced">Current Level</h4>
                    <h3 className="levelname textspaced">{this.props.page}</h3>
                    <hr className="navbreak" />
                    <p className="return textspaced" id="MENU" onClick={this.handleClick} >Return To Menu</p>
                </div>
            </div>
        )
    }
}