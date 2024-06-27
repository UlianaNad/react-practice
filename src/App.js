import './App.css';
import Accordion from './components/Accordion';
import ImageSlider from './components/ImageSlider/ImageSlider';
import RandomColor from './components/RandomColor';
import StarRate from './components/StarRate/StarRate';

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor/> */}
      {/* <StarRate numberOfStars={10}/> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={1}/>
    </div>
  );
}

export default App;
