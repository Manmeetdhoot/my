import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Aircraft from './components/aircraft';
import Car from './components/car';
import About from './pages/about';
import Start from './pages/start';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Connect from './pages/connect';
import Player from './pages/player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'START',
    }

    this.changePage = this.changePage.bind(this);
    this.start = this.start.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  start() {
    this.setState({ page: 'PLAYER' });
  }


  showPage() {
    switch (this.state.page) {
      case 'PLAYER':
        return <Player onClick={this.changePage} />
      case 'MENU':
        return <Navigation onClick={this.changePage} />
      case 'ABOUT':
        return <About />
      case 'PROJECTS':
        return <Projects />
      case 'RESUME':
        return <Resume />
      case 'CONNECT':
        return <Connect />
      default:
        return <Start onClick={this.start} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="col-12 headerarea">
          {this.state.page === 'START' || this.state.page === 'PLAYER' 
            ? null 
            : <Header page={this.state.page} onClick={this.changePage} />}
        </div>

        <Aircraft />
        <Car />
  
        <div className="col-12 pt-3">
          {this.showPage()}
        </div>
      </div>
    )
  }
}

export default App;
