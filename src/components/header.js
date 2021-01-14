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
                <div className="col-lg-6 col-xs-12">
                    <div className="row headerbox shadow-lg justify-content-center">
                        <PlayerInfo /> <Avatar />
                    </div>
                </div>

                <div className="col-lg-3 col-md-8 offset-lg-3 offset-md-0 col-xs-8">
                    {this.props.page === 'START' || this.props.page === 'MENU' || this.props.page === 'PLAYER' 
                    ? null 
                    : <LevelInfo page={this.props.page} onClick={this.props.onClick} />}
                </div>
            </div>
        )
    }
}