import './App.css';
import About from './components/About';
import Lander from './components/Lander';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Lander />
      <section>
      <Products />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
}

export default App;
