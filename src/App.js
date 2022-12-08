import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Virtual from './components/Virtual';
import Products from './components/Products';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Slider />
    <Virtual />
    <Products />
    <Testimonials />
    </div>
  );
}

export default App;
