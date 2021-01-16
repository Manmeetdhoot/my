import React, { Component } from 'react';
import './chill.css';

export default class Chill extends Component {
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
            <div className="mt-5">
                <div className="row justify-content-center mb-3">
                    <button className="btn-site pl-5 pr-5 textspaced btn-larger" id="MENU" onClick={this.handleClick}>
                        MENU
                    </button>
                </div>
                <div className="row justify-content-center">
                    <h4 className="textyellow textspaced">Sound On Please</h4>
                </div>
            </div>
        )
    }
}