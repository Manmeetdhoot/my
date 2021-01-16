import React, { Component } from 'react';
import Project from '../components/project.js';
import { projectData } from '../projectData';
import './projects.css';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectNumber: '',
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const projectNumber = e.target.id;
        this.setState({ projectNumber: projectNumber })
    }

    render() {
        const selectedProject = this.state.projectNumber;

        return(
            <div className="col-xs-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 mb-5 pb-5">
                <div className="row justify-content-center pb-4">
                    <div class="dropdown">
                        <button class="btn btn-retro dropdown-toggle textspaced textlarge" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Mission Select
                        </button>
                        <div class="dropdown-menu raleway text-center" aria-labelledby="dropdownMenuButton">
                            <button class="dropdown-item" onClick={this.handleClick} id="0">Pyramid</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="1">Nota</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="2">MindShift</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="3">TacoLoco</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="4">Grammable</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="5">Conspira</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="6">Todos</button>
                            <button class="dropdown-item" onClick={this.handleClick} id="7">Mello</button>

                        </div>
                    </div>
                </div>

                <div className="pagebox shadow-lg row justify-content-center pr-0 pl-0">
                    {this.state.projectNumber 
                        ?   <Project 
                                title={projectData[selectedProject].title} 
                                image={projectData[selectedProject].image} 
                                description={projectData[selectedProject].description}
                                technologies={projectData[selectedProject].technologies}
                                link={projectData[selectedProject].link}
                                date={projectData[selectedProject].date_created} 
                                github={projectData[selectedProject].github}
                            />
                        : <h2 className="col-12 text-center textyellow textspaced pt-5 mt-5">Please select a mission above.</h2>
                    }
                </div>
            </div>
        )
    }
}