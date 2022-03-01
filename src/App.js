import './App.css';
import Menu from './components /menu/Menu';
import Header from './components /header/Header';
import Body from './components /body/Body';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Menu/>  
      <Body/>
  </div>
    
  );
}

export default App;
