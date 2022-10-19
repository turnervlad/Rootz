import './App.scss';
import First from './components/First/First';
import Team from './components/Team/Team';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='root'>
      <First />
      <Team />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
