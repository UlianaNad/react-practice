import './App.css';
import Accordion from './components/Accordion';
import RandomColor from './components/RandomColor';
import StarRate from './components/StarRate/StarRate';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor/> */}
      <StarRate numberOfStars={10}/>
    </div>
  );
}

export default App;
