import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './pages/about';
import Start from './pages/start';
import Aircraft from './components/aircraft';
import Car from './components/car';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'start',
    }

    this.changePage = this.changePage.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  navigate() {
    this.setState({ page: 'menu' });
  }

  showPage() {
    switch (this.state.page) {
      case 'menu':
        return <Navigation onClick={this.changePage} />
      case 'about':
        return <About />
      default:
        return <Start onClick={this.navigate} />
    }
  }

  render() {
    return (
      <div className="App">
        <div className="headerarea">
          <Header page={this.state.page} onClick={this.changePage} />
          <Aircraft />
          <Car />
        </div>
  
        <div className="gamearea justify-content-center">

          {this.showPage()}

        </div>
      </div>
    )
  }
}

export default App;
