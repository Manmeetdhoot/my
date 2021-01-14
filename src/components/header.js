import React, { Component } from 'react';
import './header.css';
import './icomoon.css';
import LevelInfo from './levelInfo';
import Avatar from './avatar';
import PlayerInfo from './playerInfo';


export default class Header extends Component {
    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-12 col-xl-6">
                    <div className="row headerbox shadow-lg justify-content-center">
                        <PlayerInfo /> <Avatar />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-8 col-md-6 col-xl-3 offset-xl-3">
                    {this.props.page === 'START' || this.props.page === 'MENU' || this.props.page === 'PLAYER' 
                    ? null 
                    : <LevelInfo page={this.props.page} onClick={this.props.onClick} />}
                </div>
            </div>
        )
    }
}