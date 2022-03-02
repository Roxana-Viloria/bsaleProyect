/** style */
import './search.css'

/** Pictures */
import glass from '../../pictures/icon-search.svg'

import React, { useState } from 'react'
import { AppContext } from '../AppContextProvider'


/**
 * 
 * @returns {object} Cambios en el input de busqueda (search) para encontrar un producto y el evento onclick 
 *                   del boton de busqueda.
 */

export default function Search (){
   
   
  const { isPress, search }= React.useContext(AppContext)

    const [searchValue, setSearch]= search
    const [press, setPress]=isPress
   
  
    const onSearchChange = (e)=>{
        setSearch (e.target.value)
      } 
    
   
    const onClickSearch =()=>{
        setPress (true)
      }


    const enter =(e)=>{
       if (e.key === 'Enter'){
          setPress(true);
        }
      }  
    return (
        <div>
            <div> 
              <div className="formulario">
                <div className="border">
                  <input 
                      className="input"
                      type="text"
                      placeholder="Buscar"
                      onChange={onSearchChange}
                      value={searchValue !== null ? searchValue : ""}
                      onKeyDown={enter}
                      >
                  </input>
                </div>
                <button
                type="button"
                className="btn-glasses"
                onClick={onClickSearch}
                >
                <img src={glass} className="glass"></img>  
                </button>
              </div>
            </div>
        </div>

    );
}