/** Style */
import './header.css';
/** Pictures */
import logo from '../../pictures/logo.svg';

/**Componentes importados, para posteriormente llamarlos en html */
import Search from '../search/Search';

import React, { useState } from 'react';
import { AppContext } from '../AppContextProvider'


/**
 * @author: Roxana Viloria
 * @email : roxanaviloria02@gmail.com
 * @returns : productos de las categorías solicitados en input de búsqueda (componente Search).
 */


export default function Header (){

    const { elements, search }= React.useContext(AppContext) 

    
    const [productsValue, setProducts]= elements
    const [searchValue, setSearch]= search

/** Evento creado para volver la pantalla a su estado inicial */
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

