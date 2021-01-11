import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import About from './pages/about';
import lambo from './images/lambo.png';
import aircraft from './images/aircraft.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div class="aircraftContainer">
          <img alt="aircraft" src={aircraft} class="aircraft shadow-sm" />
      </div>
      <Navigation />

      <About />
    
      <div class="carContainer">
          <img alt="lambo" src={lambo} class="car shadow-sm" />
      </div>
    </div>
  );
}

export default App;
