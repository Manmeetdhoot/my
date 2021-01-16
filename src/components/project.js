import React, { Component } from 'react';
import './project.css';

export default class Project extends Component {
    render() {
        return(
            <div className="pr-0 pl-0">
                <div className="row justify-content-center pb-4 pt-3">
                    <h1 className="textyellow textspaced">{this.props.title}</h1>
                </div>

                <div className="row justify-content-center pl-3 pr-3">
                    <div className="col-xs-12 col-md-6">
                        <div class="pb-4">
                            <a target="_blank" href={this.props.link} rel="noreferrer">
                                <img src={this.props.image} className="img-fluid project-image" alt="project" />
                            </a>
                        </div>

                        <div className="row justify-content-center pb-5">
                            <a className="raleway pr-3" target="_blank" href={this.props.link} rel="noreferrer">
                                <button className="btn-site">
                                    Launch Site
                                </button>
                            </a>

                            <a className="raleway pl-3" target="_blank" href={this.props.github} rel="noreferrer">
                                <button className="btn-site">
                                    Source Code
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-5 pl-3">
                        <h4 className="textyellow textspaced">Mission Brief:</h4>
                        <p className="raleway text-white">{this.props.description}</p>


                        <h4 className="textyellow textspaced pt-3">Technologies:</h4>
                        <p className="raleway text-white">{this.props.technologies}</p>


                        <h4 className="textyellow textspaced pt-3">Created:</h4>
                        <p className="raleway text-white">{this.props.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}