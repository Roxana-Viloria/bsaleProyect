import './search.css'

import React, { useState } from 'react'
import glass from '../../pictures/icon-search.svg'

import { AppContext } from '../AppContextProvider'

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


    const onEraser =(e)=>{
        setSearch ("")
      }

    return (
        <div>
            <form> 
              <div className="formulario">
                <div className="border">
                  <input 
                      className="input"
                      type="text"
                      placeholder="Buscar"
                      onChange={onSearchChange}
                      value={searchValue}
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
            </form>
        </div>

    );
}