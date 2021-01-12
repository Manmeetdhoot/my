import React, { Component } from 'react';
import './header.css';
import './icomoon.css';
import LevelInfo from './levelInfo';
import Avatar from './avatar';
import PlayerInfo from './playerInfo';


export default class Header extends Component {
    render() {
        return(
            <div className="row">
                <div className="col-lg-7 col-md-12">
                    <div className="row headerbox shadow-lg justify-content-center">
                        <PlayerInfo /> <Avatar />
                    </div>
                </div>

                <div className="col-lg-3 col-md-12 offset-lg-2 offset-md-0">
                    {this.props.page === 'START' || this.props.page === 'MENU' ? null : <LevelInfo page={this.props.page} onClick={this.props.onClick} />}
                </div>
            </div>
        )
    }
}