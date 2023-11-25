import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Lander from './components/Lander';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Lander />
      <section>
      <About />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
