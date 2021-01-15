import React, { Component } from 'react';
import './project.css';

export default class Project extends Component {
    render() {
        return(
            <div className="col-12 pr-0 pl-0">
                <div className="row justify-content-center pb-3">
                    <h1 className="textyellow textspaced">{this.props.title}</h1>
                </div>

                <div className="row justify-content-center pl-3 pr-3">
                    <div class="col-xs-12 col-md-6 pb-4">
                        <a target="_blank" href={this.props.link} rel="noreferrer">
                            <img src={this.props.image} className="img-fluid project-image" alt="project" />
                        </a>
                    </div>
                    <div className="col-xs-12 col-md-5">
                        <div className="row pl-4 pt-2">
                            <h4 className="textyellow textspaced pr-2">Website:</h4>
                            <a className="raleway text-white pt-1" target="_blank" href={this.props.link} rel="noreferrer">Launch {this.props.title} Site</a>
                        </div>

                        <div className="row pl-4 pt-2">
                            <h4 className="textyellow textspaced pr-2">Repository:</h4>
                            <a className="raleway text-white pt-1" target="_blank" href={this.props.github} rel="noreferrer">Launch {this.props.title} GitHub</a>
                        </div>

                        <div className="row pl-4 pt-2">
                            <h4 className="textyellow textspaced pr-2">Created:</h4>
                            <p className="raleway text-white pt-1">{this.props.date}</p>
                        </div>
                        
                        <div className="row pl-4">
                            <h4 className="textyellow textspaced">Technologies:</h4>
                            <p className="raleway text-white">{this.props.technologies}</p>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-md-10 offset-md-1 pb-5 pt-4 pl-4">
                    <h4 className="textyellow textspaced">Mission Brief:</h4>
                    <p className="raleway text-white">{this.props.description}</p>
                </div>

                
            </div>
        )
    }
}