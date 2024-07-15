import './App.css';
import Accordion from './components/Accordion';
import AutocompleteSearch from './components/AutocompleteSearch/AutocompleteSearch';
import CustomScrollIndicator from './components/CustomScrollIndicator/CustomScrollIndicator';
import FeatureFlag from './components/FeatureFlag/FeatureFlag';
import FeatureFlagGlodbalState from './components/FeatureFlag/context';
import GithubProfileFinder from './components/GithubProfileFinder/GithubProfileFinder';
import UseOnClickOutsideTest from './components/Hooks/UseClickOutside/test';
import UseFetchHookTest from './components/Hooks/UseFetch/test';
import UseWindowResizeTest from './components/Hooks/UseResponsive/test';
import ImageSlider from './components/ImageSlider/ImageSlider';
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import LoadMoreButton from './components/LoadeMoreButton/LoadMoreButton';
import ModalPopup from './components/ModalPopup/ModalPopup';
import QRcodeGenerator from './components/QRcodeGenerator/QRcodeGenerator';
import RandomColor from './components/RandomColor';
import ScrollToTopAndBottom from './components/ScrollToTopAndBottom/ScrollToTopAndBottom';
import StarRate from './components/StarRate/StarRate';
import TabTest from './components/Tabs/TabTest';
import TikTactToe from './components/TikTactToe/TikTactToe';
import TreeView from './components/TreeView/TreeView';
import menus from './components/TreeView/data';

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor/>
      <StarRate numberOfStars={10}/>
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={6} page={2}/> 
      <LoadMoreButton/>
      <TreeView menus={menus}/>
      <QRcodeGenerator/>
      <LightDarkMode/>
      <CustomScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
      <TabTest/>
      <ModalPopup/>
      <GithubProfileFinder/>
      <AutocompleteSearch/>
      <TikTactToe/> */}
      {/* <FeatureFlagGlodbalState>
        <FeatureFlag/>
      </FeatureFlagGlodbalState> */}
      {/* <UseFetchHookTest/> */}
      {/* <UseOnClickOutsideTest/> */}
      {/* <UseWindowResizeTest/> */}
      {<ScrollToTopAndBottom/>}
    </div>
  );
}

export default App;
