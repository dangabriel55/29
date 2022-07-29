import './App.css';
import Banner from './componente/Banner';
import Black from './componente/Black';
import Design from './componente/Design';
import Full from './componente/Full';
import Navbar from './componente/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Full/>
      <Design/>
      <Black/>
    </div>
  );
}

export default App;
