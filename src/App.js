import './App.css';
import Hero from './components/home/Hero';
import Leaders from './components/home/Leaders';
import Ready from './components/home/Ready';
import RoadMap from './components/home/RoadMap';

function App() {
  return (
    <div className='bg-off-black overflow-hidden'>
      <Hero />
      <Leaders />
      <RoadMap />
      <Ready />
    </div>
  );
}

export default App;
