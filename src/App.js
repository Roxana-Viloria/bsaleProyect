import './App.css';
import Menu from './components /menu/Menu';
import MarketHeader from './components /header/Header';
import Body from './components /body/Body';

function App() {


  return (
    <div className="App">
      <MarketHeader/> 
      <Menu/>  
      <Body/>
  </div>
    
  );
}

export default App;
