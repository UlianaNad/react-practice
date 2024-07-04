import './App.css';
import Accordion from './components/Accordion';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import LoadMoreButton from './components/LoadeMoreButton/LoadMoreButton';
import QRcodeGenerator from './components/QRcodeGenerator/QRcodeGenerator';
import RandomColor from './components/RandomColor';
import StarRate from './components/StarRate/StarRate';
import TreeView from './components/TreeView/TreeView';
import menus from './components/TreeView/data';

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor/>
      <StarRate numberOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={6} page={2}/> */}
      {/* <LoadMoreButton/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRcodeGenerator/> */}
      <LightDarkMode/>
    </div>
  );
}

export default App;
