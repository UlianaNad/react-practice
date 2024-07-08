import './App.css';
import Accordion from './components/Accordion';
import CustomScrollIndicator from './components/CustomScrollIndicator/CustomScrollIndicator';
import GithubProfileFinder from './components/GithubProfileFinder/GithubProfileFinder';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import LoadMoreButton from './components/LoadeMoreButton/LoadMoreButton';
import ModalPopup from './components/ModalPopup/ModalPopup';
import QRcodeGenerator from './components/QRcodeGenerator/QRcodeGenerator';
import RandomColor from './components/RandomColor';
import StarRate from './components/StarRate/StarRate';
import TabTest from './components/Tabs/TabTest';
import Tabs from './components/Tabs/Tabs';
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
      {/* <LightDarkMode/> */}
      {/* <CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* <TabTest/> */}
      {/* <ModalPopup/> */}
      <GithubProfileFinder/>
    </div>
  );
}

export default App;
