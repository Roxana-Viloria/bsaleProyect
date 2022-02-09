import './header.css';
import logo from '../../pictures/logo.svg';
import Search from '../search/Search';

export default function MarketHeader (){
    return (
       <>
        <div className="headerContainer">
            <img src={logo} alt="logo de supermercado" className="logo"></img>
            <span className="marketName">SUPER SHOPPING MARKET</span>
            <Search/>
        </div>
        

        
        </> 
    );
}

