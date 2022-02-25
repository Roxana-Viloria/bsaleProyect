import './header.css';
import logo from '../../pictures/logo.svg';
import Search from '../search/Search';
import React, { useState } from 'react'
import { AppContext } from '../AppContextProvider'


export default function MarketHeader (){

    const { elements, search }= React.useContext(AppContext) 

    
    const [productsValue, setProducts]= elements
    const [searchValue, setSearch]= search

    const onEraser =(e)=>{
        setProducts([])
        setSearch(null)

      }

    return (
       <>
        <div className="headerContainer">
            <button 
                onClick={onEraser}
                className="logo button">
                <img src={logo} alt="botón de supermercado"></img>
            </button>
            <span className="marketName">SUPER SHOPPING MARKET</span>
            <Search/>
        </div>
        

        
        </> 
    );
}

