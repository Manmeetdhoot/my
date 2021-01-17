import React, { Component } from 'react';
import './chill.css';
import song from '../sounds/song2.m4a';


export default class Chill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const page = e.target.id;
        this.props.onClick(page);
    }



    render() {
        var audio = new Audio(song)

        return(
            <div>
                <div className="row justify-content-center mt-5">
                    <button className="btn-site pl-5 pr-5 mr-3 textspaced btn-larger" id="MENU" onClick={this.handleClick}>
                        MENU
                    </button>
                    <button className="btn-site pl-5 pr-5 ml-3 textspaced btn-larger" onClick={ () => audio.play() }>
                        MUSIC
                    </button>
                </div>
            </div>
        )
    }
}

/*
<div className="text-center textyellow textspaced">
    <h5>Song: "Midas Touch"</h5> 
    <h5>Artist: "Shammy"</h5>
</div>
*/