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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'START',
    }

    this.changePage = this.changePage.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  navigate() {
    this.setState({ page: 'MENU' });
  }

  showPage() {
    switch (this.state.page) {
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
        return <Start onClick={this.navigate} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="col-12 headerarea">
          <Header page={this.state.page} onClick={this.changePage} />
          <Aircraft />
          <Car />
        </div>
  
        <div className="col-12 gamearea">

          {this.showPage()}

        </div>
      </div>
    )
  }
}

export default App;
